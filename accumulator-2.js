const arr = [1,2,4,-6,-6,4,6,3,-2]; 
let i = 0
let accumulator = 0
while (i < arr.length) {
if (arr[i] > 0) {
    accumulator += arr[i]
    

}

i++
}
console.log(accumulator)
