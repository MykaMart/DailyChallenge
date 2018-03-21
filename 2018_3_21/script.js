// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 8] should return 12, since we pick 4 and 8. [5, 1, 1, 5] should return
// 10, since we pick 5 and 5.

let $inputArray;
let highest = 0;

$("#arrayForm").submit(function (e) {
	e.preventDefault();
	$inputArray = $("#arrayInput").val();
	$inputArray= $inputArray.split(', ').map(Number);

	for(let i = 0; i < $inputArray.length; i++){

		for(let t = 0; t < $inputArray.length; t++){

			 if( (t !== i - 1 && t !== i + 1) && (t < i || t > i) ){

			 	const test = $inputArray[i]+$inputArray[t];
			 	
			 	if(test > highest) {
			 		highest = test;
			 	}
			 }
		}
	}

	$("#result").text("Highest sum of non-adjacent numbers is " + highest);
	highest = 0;
})
