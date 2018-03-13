console.log("Connected")

// Challenge for 3/13/2018

// Given an array of numbers, return whether any two sums to K.

// For example, given [10, 15, 3, 7] and K of 17, return true since 10 + 7 is 17.

let check = "False"
let $array
let $K

$("#arrayForm").submit(function (e) {
	e.preventDefault();
	$array = $("#arrayInput").val()
	$array= $array.split(', ').map(Number);
	$K = parseInt($("#checkNumber").val())

	if ($array.length > 1) {
		for (let i=0; i < $array.length; i++) {
			for (let n=0; n < $array.length; n++) {

				if (n!==i) {
					if ($array[n] + $array[i] === $K){
						check = "True"	
					}
				}
			}
		}
	}

	$("#result").text("Check Verified " + check)
	check = "False"
})
