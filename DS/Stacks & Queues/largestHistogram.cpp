#include <iostream>
using namespace std;

int largestHistogram(vector<int> &heights, int n)
{
    int maxArea = 0;
    stack<int> st;

    for (int i = 0; i <= n; i++)
    {
        int currentHeight = (i == n) ? 0 : heights[i];

        while (!st.empty() && heights[st.top()] > currentHeight)
        {
            int height = heights[st.top()];
            st.pop();
            int rightBoundary = i;
            int leftBoundary = st.empty() ? -1 : st.top();
            int width = rightBoundary - leftBoundary - 1;
            int area = height * width;
            maxArea = max(maxArea, area);
        }

        st.push(i);
    }

    return maxArea;
}

int main()
{
    int n;
    cin >> n;
    vector<int> heights(n);

    for (int i = 0; i < n; i++)
    {
        cin >> heights[i];
    }

    cout << largestHistogram(heights, n) << endl;
}