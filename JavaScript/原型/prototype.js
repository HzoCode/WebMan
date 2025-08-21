const boxPrototype = {
    getValue() {
        return this.value
    }
}

const boxes =[
    {value: 1, __proto__: boxPrototype},
    {value: 2, __proto__: boxPrototype},
    {value: 3, __proto__: boxPrototype},
]
console.log(boxes[0].__proto__); // 1