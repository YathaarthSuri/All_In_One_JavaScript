let arr = [1, 2, 3, 4, 5, 6];

function rotateArray(arr, k) {
  k = k % arr.length;

  if (k < 0) k += arr.length;

  const rotated = arr.splice(arr.length - k, arr.length);
  arr.unshift(...rotated);

  return arr;
}

// console.log(rotateArray(arr, 3));

function rotateArrayOptimized(arr, k) {
  k = k % arr.length;

  if (k < 0) k += arr.length;

  reverseArr(arr, 0, arr.length - 1);
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, arr.length - 1);

  return arr;
}

function reverseArr(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

console.log(rotateArrayOptimized(arr, 3));
