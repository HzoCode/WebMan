# 数组
# 链表
```javascript
class ListNode {
    val
    next = null
    constructor(value){
        this.val = value
        this.next = null
    }
}
```
# 哈希表
# 字符串
# 双指针
# 栈与队列
# 二叉树
``` javascript
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
```
## 递归遍历
三要素:
1、确定递归函数的参数和返回值
2、确定终止条件
3、确定单层递归的逻辑
### 前序遍历
```javascript
function preorderTraversal(root){
    let res = []
    const dfs = function(root){
        if(root === null) return
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
}
var preorderTraversal = function(root){
    return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ]
    : []
}
```
### 中序遍历
```javascript
var inorderTraversal = function(root) {
    // let res = []
    // const dfs = function(root){
    //     if(root === null) return 
    //     dfs(root.left)
    //     res.push(root.val)
    //     dfs(root.right)
    // }
    // dfs(root)
    // return res
    return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ]
    : []
}
```
### 后序遍历
```javascript
var postorderTraversal = function(root) {
    // let res = []
    // const dfs = function(root) {
    //     if(root === null) return
    //     dfs(root.left)
    //     dfs(root.right)
    //     res.push(root.val)
    // }
    // dfs(root)
    // return res
    return root
    ? [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val
    ]
    : []
}
```
## 迭代遍历
### 前序遍历
### 中序遍历
### 后续遍历
# 回溯算法
# 贪心算法
# 动态规划
# 单调栈
# 图论