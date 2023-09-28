function moveZeroesToEnd() {
  let arr = [1, 0, 0, 2, 4, 0];

  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[count++] = arr[j];
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[count++] = 0;
  }

  return arr;
}

console.log(moveZeroesToEnd());
