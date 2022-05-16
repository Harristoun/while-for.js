const arr = [5,5,5,5,5,5,5];
let accumulator = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        accumulator += arr[i]
    }
    
}
console.log(accumulator)