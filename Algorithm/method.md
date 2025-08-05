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
中 左 右
栈是先进后出 所以要先把right节点放进去,再放left 这样出来才符合 中 左 右
```javascript
var preorderTraversal = function(root) {
    if(!root) return []
    let res = []
    let stack = [root] //root in
    while(stack.length > 0){
        const node = stack.pop()
        res.push(node.val)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }
    return res
}
```
### 中序遍历
左 中 右
1、创建一个栈和指针curr,curr初始化为根节点root
2、当curr不为空或者stack栈不为空进行循环
a、只要curr不为null,就不断的将curr推入stack栈中,并让curr指向其左孩子,curr = curr.left.模拟递归深入最左侧
b、当curr变为null,即到达最左侧,从栈中弹出一个节点记为node
c、处理访问node的值
d、让curr指向curr的右孩子 curr = curr.right ,准备处理右子树
```javascript
var inorderTraversal = function(root) {
    let res = []
    let stack = []
    let curr = root //初始化指针为根节点
    while(curr !== null || stack.length > 0) {
        while(curr !== null){
            stack.push(curr)
            curr = curr.left
        }
        const node = stack.pop()
        res.push(node.val)
        curr = curr.right
    }
    return res
}
```
### 后续遍历
左 右 中
反过来是 中 右 左,和前序遍历的右 左 对调即可,输出时将数组反转
```javascript
var postorderTraversal = function(root) {
    if(!root) return []
    let res = []
    let stack = [root]
    while(stack.length > 0 ){
        const node = stack.pop()
        res.push(node.val)
        if(node.left){
            stack.push(node.left)
        }
        if(node.right){
            stack.push(node.right)
        }
    }
    return res.reverse()
}
```
# 回溯算法
# 贪心算法
# 动态规划
# 单调栈
# 图论