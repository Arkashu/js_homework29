'use strict'
const func = () => {
    const arr = [];
    const arrPusher = () => {
        const result = Math.floor(Math.random() * 99) + 1;
        if (!arr.includes(result)) {
            arr.push(result)
            return arr;
        }
        return arrPusher();
    }
    return arrPusher;
}
const sum = func();

//---------------------------------Далее цикл для демонстрации работоспособности-------------------

let result = null;
for (let i = 1; i < 100; i++) {
    result = sum();
}
console.log(result)