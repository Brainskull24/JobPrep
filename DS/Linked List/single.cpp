#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;

    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList
{
    Node *head;

public:
    LinkedList() : head(nullptr) {}
    void createLL(int arr[], int n)
    {
        if (n == 0)
        {
            cout << "List is empty." << endl;
            return;
        }
        head = new Node(arr[0]);
        for (int i = 1; i < n; i++)
        {
            Node *newNode = new Node(arr[i]);
            Node *temp = head;
            while (temp->next != nullptr)
            {
                temp = temp->next;
            }
            temp->next = newNode;
        }
    }

    void printList()
    {
        if (head == nullptr)
        {
            cout << "List is empty." << endl;
            return;
        }
        Node *temp = head;
        while (temp != nullptr)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }

    void insertAtHead(int val)
    {
        Node *newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    void insertAtTail(int val)
    {
        Node *newNode = new Node(val);
        if (head == nullptr)
        {
            head = newNode;
            return;
        }

        Node *temp = head;
        while (temp->next != nullptr)
        {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = nullptr;
    }

    void insertAtPosition(int index, int val)
    {
        if (index == 1)
        {
            insertAtHead(val);
            return;
        }
        Node *newNode = new Node(val);
        Node *temp = head;
        while (index > 1 && temp != nullptr)
        {
            temp = temp->next;
            index--;
        }
        if (index <= 1 || temp == nullptr)
        {
            cout << "Index out of bounds." << endl;
            delete newNode; // Clean up the allocated memory
            return;
        }
        Node *temp2 = temp->next;
        temp->next = newNode;
        newNode->next = temp2;
    }

    void deleteAtPosition(int index)
    {
        if (head == nullptr)
        {
            cout << "List is empty." << endl;
            return;
        }
        if (index == 1)
        {
            Node *toDelete = head;
            head = head->next;
            delete toDelete;
            return;
        }

        Node *temp = head;
        while (index > 2 && temp != nullptr && temp->next != nullptr)
        {
            temp = temp->next;
            index--;
        }
        temp->next = temp->next->next;
        return;
    }

    void deleteAtHead()
    {
        if (head == nullptr)
        {
            cout << "List is empty." << endl;
            return;
        }
        Node *toDelete = head;
        head = head->next;
        delete toDelete;
    }

    void deleteAtTail()
    {
        if (head == nullptr)
        {
            cout << "List is empty." << endl;
            return;
        }
        if (head->next == nullptr)
        {
            delete head;
            head = nullptr;
            return;
        }
        Node *temp = head;
        while (temp->next->next != nullptr)
        {
            temp = temp->next;
        }
        delete temp->next;
        temp->next = nullptr;
    }

    bool search(int val)
    {
        Node *temp = head;
        while (temp != nullptr)
        {
            if (temp->data == val)
            {
                cout << "Element found: " << val << endl;
                return true;
            }
            temp = temp->next;
        }
        return false;
    }

    void reverse()
    {
        Node *prev = nullptr;
        Node *current = head;
        Node *nex = nullptr;
        while (current != nullptr)
        {
            nex = current->next;
            current->next = prev;
            prev = current;
            current = nex;
        }
        head = prev;
    }

    void reverseRecursive()
    {
        head = reverseUtil(head);
    }

    bool detectCycle()
    {
        Node *slow = head;
        Node *fast = head;
        while (slow != nullptr && fast != nullptr && fast->next != nullptr)
        {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast)
            {
                cout << "Cycle detected." << endl;
                return true;
            }
        }
        cout << "No cycle detected." << endl;
        return false;
    }

    Node *detectStartOfCycle()
    {
        Node *slow = head;
        Node *fast = head;
        while (slow != nullptr && fast != nullptr && fast->next != nullptr)
        {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast)
            {
                break;
            }
        }
        if (fast == nullptr || fast->next == nullptr)
            return nullptr;
        slow = head;
        while (slow != fast)
        {
            slow = slow->next;
            fast = fast->next;
        }
        return slow;
    }

    void mergeSortedLists()
    {
        Node *list1 = head;
        Node *list2 = head;
        Node *mergedHead = nullptr;

        if (list1 == nullptr)
        {
            mergedHead = list2;
            return;
        }
        if (list2 == nullptr)
        {
            mergedHead = list1;
            return;
        }

        if (list1->data < list2->data)
        {
            mergedHead = list1;
            list1 = list1->next;
        }
        else
        {
            mergedHead = list2;
            list2 = list2->next;
        }

        Node *current = mergedHead;

        while (list1 != nullptr && list2 != nullptr)
        {
            if (list1->data < list2->data)
            {
                current->next = list1;
                list1 = list1->next;
            }
            else
            {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }

        if (list1 != nullptr)
            current->next = list1;
        else
            current->next = list2;

        head = mergedHead;
    }

    Node *findMiddle()
    {
        if (head == nullptr)
        {
            cout << "List is empty." << endl;
            return nullptr;
        }
        Node *slow = head;
        Node *fast = head;
        while (fast != nullptr && fast->next != nullptr)
        {
            slow = slow->next;
            fast = fast->next->next;
        }
        cout << "Middle element: " << slow->data << endl;
        return slow;
    }

    void removeNthFromEnd(int n)
    {
        if (head == nullptr || n <= 0)
        {
            cout << "List is empty or invalid n." << endl;
            return;
        }

        Node *slow = head;
        Node *fast = head;
        for (int i = 0; i < n; i++)
        {
            if (fast == nullptr)
            {
                cout << "n is larger than the length of the list." << endl;
                return;
            }
            fast = fast->next;
        }
        if (fast == nullptr)
        {
            head = head->next; // Remove the head
            return;
        }
        while (fast->next != nullptr)
        {
            slow = slow->next;
            fast = fast->next;
        }
        Node *toDelete = slow->next;
        if (toDelete != nullptr)
        {
            slow->next = toDelete->next; // Remove the nth node from the end
            delete toDelete;
        }
    }

    Node* intersection(Node *list1, Node *list2)
    {
        Node *d1 = list1;
        Node *d2 = list2;

        while (d1 != d2)
        {
            d1 = d1 == NULL ? list2 : d1->next;
            d2 = d2 == NULL ? list1 : d2->next;
        }

        return d1;
    }

    Node *reverseUtil(Node *node)
    {
        if (node == nullptr || node->next == nullptr)
        {
            return node;
        }
        Node *rest = reverseUtil(node->next);
        node->next->next = node;
        node->next = nullptr;
        return rest;
    }
};

int main()
{
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    LinkedList list;
    list.createLL(arr, n);
    list.printList();

    list.insertAtHead(1);
    list.printList();

    list.insertAtTail(4);
    list.printList();

    list.insertAtPosition(2, 5);
    list.printList();

    list.deleteAtPosition(3);
    list.printList();

    list.deleteAtHead();
    list.printList();

    list.deleteAtTail();
    list.printList();

    list.search(5);
    list.printList();

    list.reverse();
    list.printList();

    list.reverseRecursive();
    list.printList();

    list.detectCycle();

    list.detectStartOfCycle();

    list.mergeSortedLists();
    list.printList();

    list.findMiddle();

    list.removeNthFromEnd(2);

    list.intersection(nullptr, nullptr);

    

    return 0;
}