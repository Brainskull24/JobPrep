#include <iostream>
using namespace std;

void bfs(vector<vector<int>> &adj, int n)
{
    vector<int> vis(n + 1, 0);
    vector<int> result;
    vector<int> queue;
    queue.push_back(1);
    vis[1] = 1;
    while (!queue.empty())
    {
        int current = queue.front();
        queue.erase(queue.begin());
        result.push_back(current);

        for (int neighbor : adj[current])
        {
            if (!vis[neighbor])
            {
                vis[neighbor] = 1;
                queue.push_back(neighbor);
            }
        }
    }
    cout << "BFS Traversal: ";
    for (int node : result)
    {
        cout << node << " ";
    }
}

void dfsUtil(vector<vector<int>> &adj, int node, vector<int> &vis, vector<int> &result)
{
    vis[node] = 1;
    result.push_back(node);

    for (int neighbor : adj[node])
    {
        if (!vis[neighbor])
        {
            dfsUtil(adj, neighbor, vis, result);
        }
    }
}

void dfs(vector<vector<int>> &adj, int node)
{
    int n = adj.size();
    vector<int> vis(n + 1, 0);
    vector<int> result;

    dfsUtil(adj, node, vis, result);
    cout << "DFS Traversal: ";
    for (int node : result)
    {
        cout << node << " ";
    }
    cout << endl;
}

void addEdge(vector<vector<int>> &adj, int u, int v)
{
    adj[u].push_back(v);
    adj[v].push_back(u); // For undirected graph
}

int main()
{
    int n;
    cin >> n;

    vector<vector<int>> adj(n + 1);

    addEdge(adj, 1, 2);
    addEdge(adj, 1, 3);
    addEdge(adj, 2, 4);
    addEdge(adj, 2, 5);
    addEdge(adj, 3, 4);

    for (int i = 1; i <= n; i++)
    {
        cout << "Adjacency list of vertex " << i << ": ";
        for (int j : adj[i])
        {
            cout << j << " ";
        }
        cout << endl;
    }

    bfs(adj, n);

    dfs(adj, 1);
}