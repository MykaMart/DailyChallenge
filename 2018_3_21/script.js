// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 8] should return 12, since we pick 4 and 8. [5, 1, 1, 5] should return
// 10, since we pick 5 and 5.

const inputArray  = [5, 1, 1, 5]

let highest = 0
for(let i = 0; i < inputArray.length; i++){

	console.log("Testing for " + i)
	console.log("-------------------------")
	for(let t = 0; t < $inputArray.length; t++){
		console.log("Index " + i + " vs Index " + t)
		 if((t !== i - 1 && t !== i + 1) && (t < i || t > i)){

		 	const test = inputArray[i]+inputArray[t]
		 	console.log(inputArray[i] + " + " + inputArray[t] + " = " + test)
		 	if(test > highest) {
		 		console.log(test + " is higher than current highest sum " + highest)
		 		highest = test
		 		console.log("Current highest sum: " + highest)
		 		console.log("--------------------------------------------------")
		 	}else {
		 		console.log(test + " is not higher than current highest sum " + highest)
		 		console.log("Current highest sum: " + highest)
		 		console.log("--------------------------------------------------")
		 	}
		 }else{
		 	console.log("Indexes match or are adjacent, no test")
		 	console.log("--------------------------------------------------")
		 }
	}
}

console.log("Highest sum is " + highest)