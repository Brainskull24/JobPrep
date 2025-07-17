#include<iostream>
using namespace std;

class Minstack{
    stack<pair<int,int>>st;

    public:
    Minstack(){

    }

    void push(int element){
        if(st.empty()){
            st.push({element, element});
        } else {
            st.push({element, min(element, st.top().second)});
        }
    }

    void pop(){
        if(st.empty()) return;
        st.pop();
    }

    int top(){
        if(st.empty()) return -1;
        return st.top().first;
    }

    int getMin(){
        if(st.empty()) return -1;
        return st.top().second;
    }

};

int main(){
    Minstack ms;

    ms.push(15);
    ms.push(12);
    ms.push(18);
    ms.push(19);
    cout << ms.getMin() << " ";
    ms.pop();
    cout << ms.top() << " ";
    cout << ms.getMin() << " ";
}