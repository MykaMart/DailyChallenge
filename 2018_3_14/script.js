console.log("Connected")

let inputArray = [1, 2, 3, 4, 5]

let arrayHash = {}

for (let i = 0; i < inputArray.length; i++) {
	arrayHash.push{i: inputArray[i]}
}

console.log(arrayHash)