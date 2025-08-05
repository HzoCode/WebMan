### setInterval方法
```javascript
let name = '参数1';
let start = new Date();
let component;
let timeout;
let waitingResponse; //
let intervalCount; //
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function timer(params,needWaiting=true) {
    if(needWaiting && waitingResponse){
        return;//上一次请求未响应，跳过请求。特殊情况：强制请求
    }
    var now = new Date();
    var det = now - params.start;
    waitingResponse = true;
    const res = await sleep(2000)//Math.random()*10000%2); // 模拟请求响应,响应时间随机0-2s
    waitingResponse = false;
    // 已刷新，数据过时
    let isRefresh = params.name!=name || params.start!=start;
    // 满足结束条件
    let isFinished = res?.isFinished;
    if(!isRefresh){
        now.setTime(det);
        now.setHours(0);
        component.innerHTML = `${params.name} : ${now.toLocaleTimeString()}`;
    }
    if(isFinished){
        clearTimeout(timeout);
    }
}
// 重启
const restart = () => {
    start = new Date();
    intervalCount=0;
    clearTimeout(timeout);
    timeout = setInterval(()=>timer({start,name},intervalCount++!==0),1000);
}

//参数变更
const change = () => {
    name= “参数”+parseInt(Math.random()*100);
    start = new Date();
    intervalCount=0;
    clearTimeout(timeout);
    timeout = setInterval(()=>timer({start,name},intervalCount++!==0),1000);
}

//模拟组件卸载
const unmount = () => {
    component = null;
    clearTimeout(timeout);
}

//模拟组件挂载
const mount = () => {
    component =document.getElementById(“id_name”);
    intervalCount=0;
    //挂载时自动开始轮询
    timeout = setInterval(()=>timer({start,name},intervalCount++!==0),1000);
}
```
### setTimeout方法
```javascript
let name = '参数1';
let start = new Date();
let component;
let timeout;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function timer(params) {
clearTimeout(timeout);
var now = new Date();
var det = now - params.start;
const res = await sleep(2000)// 模拟请求响应
// 已刷新，数据过时
let isRefresh = params.name!=name || params.start!=start;
// 满足结束条件
let isFinished = res?.isFinished;
if(!isRefresh){
now.setTime(det);
now.setHours(0);
component.innerHTML = `${params.name} : ${now.toLocaleTimeString()}`;
}
if(!isRefresh && !isFinished && component){
timeout = setTimeout(()=>{timer(params)},1000);
}
}
// 重启
const restart = () => {
start = new Date();
timer({start,name});
}
//参数变更
const change = () => {
name= "参数"+parseInt(Math.random()*100);
start = new Date();
timer({start,name});
}
//模拟组件卸载
const unmount = () => {
component = null;
clearTimeout(timeout);
}
//模拟组件挂载
const mount = () => {
component =document.getElementById("id_name");
timer({start,name});//挂载时自动开始轮询
}
```