#include <iostream>
#include <unordered_map>
using namespace std;

struct Node {
    int key, value;
    Node* prev;
    Node* next;
    Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
};

// LRU Cache class
class LRUCache {
private:
    int capacity;
    unordered_map<int, Node*> cache;
    Node* head;  // Dummy head (Most Recently Used side)
    Node* tail;  // Dummy tail (Least Recently Used side)

    // Add node to front (MRU)
    void addToFront(Node* node) {
        node->next = head->next;
        node->prev = head;

        head->next->prev = node;
        head->next = node;
    } 

    // Remove any node from DLL
    void removeNode(Node* node) {
        Node* before = node->prev;
        Node* after = node->next;

        before->next = after;
        after->prev = before;
    }

    // Move a node to front (MRU position)
    void moveToFront(Node* node) {
        removeNode(node);
        addToFront(node);
    }

    // Remove the LRU node (from back)
    Node* removeTail() {
        Node* lru = tail->prev;
        removeNode(lru);
        return lru;
    }

public:
    // Constructor
    LRUCache(int cap) : capacity(cap) {
        head = new Node(0, 0);  // dummy head
        tail = new Node(0, 0);  // dummy tail
        head->next = tail;
        tail->prev = head;
    }

    // Get value by key
    int get(int key) {
        if (cache.find(key) == cache.end())
            return -1;

        Node* node = cache[key];
        moveToFront(node);
        return node->value;
    }

    // Insert or update key-value pair
    void put(int key, int value) {
        if (cache.find(key) != cache.end()) {
            Node* node = cache[key];
            node->value = value;
            moveToFront(node);
        } else {
            if (cache.size() == capacity) {
                Node* lru = removeTail();
                cache.erase(lru->key);
                delete lru;
            }

            Node* newNode = new Node(key, value);
            addToFront(newNode);
            cache[key] = newNode;
        }
    }

    // Optional: Destructor to free memory
    ~LRUCache() {
        Node* current = head;
        while (current) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
};
