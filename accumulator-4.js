const arr = ['Name', 'Names', 'Namesis', 'aamoro','Marni', 'Traor', 'Gigant', 'auyes', 'Raee', 'Elezo'];
let accomulator = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'a')
    accomulator.push(arr[i])
    console.log(accomulator)
    
}