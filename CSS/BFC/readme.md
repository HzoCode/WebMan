# 区块格式化上下文BFC Block Formatting Context
作用是形成一个独立的渲染区域,区域内部的渲染不会影响外界
## 创建条件
1、文档的根元素(<html>)
2、浮动元素(即float值不为none的元素)
3、绝对定位元素(position值为absolute或fixed的元素)
4、display属性的特定值 display:inline-blcok、
display:table-cell、display:table-caption; 表格
display:flex、display:inline-flex; Flexbox容器
display:grid、display:inline-grid; Grid容器
**display:flow-root**最推荐的专门用来创建BFC的现代方法
5、overflow属性不为visible 和 clip 的块级元素
## 解决的问题
1、清楚内部浮动
2、防止外边距折叠
3、防止元素被浮动元素覆盖(自适应两栏/三栏布局)