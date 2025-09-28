async function async1() {
    console.log('async1 start')

    await async2()
    console.log('async1 end')
    setTimeout(() => {  //宏
        console.log('timer1')
    }, 0)
}
async function async2() {
    setTimeout(() => {
        console.log('timer2')
    }, 0)
    console.log('async2')
}
async1()
new Promise((resolve, reject) => {
    resolve(213)
}).then(res => {
    console.log("then", res);
})
setTimeout(() => {
    console.log('timer3')
}, 0)
console.log('start')