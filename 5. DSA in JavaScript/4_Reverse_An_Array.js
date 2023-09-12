let arr = [1, 2, 5, 3, 7, 9, 6];

const reverseArr = (arr) => {
  // We divide length by 2 because we don't want array to be returned to original after swapping all elements because after mid the elements if swapped will return the same array
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;

    // we do [ arr.length - (i + 1) ] because we have to start from arr.length - 1 and go backwards
  }

  return arr;
};

let ans = reverseArr(arr);

console.log(ans);

// We can also use recursion for above
