function flip(array, n) {
    return array.slice(0,n).reverse().concat(array.slice(n));
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let i = 0; i < array.length; i++) {
	let maxIndex = i;
	for (let j = i; j < array.length; j++) {
	    if (array[j] > array[maxIndex]) maxIndex = j;
	}
	//Moving the maximum unsorted element to the front of the array:
	array = flip(array, maxIndex);
	array = flip(array, maxIndex+1);
    }
    return array;
}

