function isArraySorted() {
  let arr1 = [1, 1, 2, 3, 3, 3, 4, 5, 6];

  let i = 0;

  for (let j = 1; j < arr1.length; j++) {
    if (arr1[i] <= arr1[j]) {
      i++;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isArraySorted());
