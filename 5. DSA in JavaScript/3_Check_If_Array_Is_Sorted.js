let arr = [1, 5, 6, 11, 11, 7, 10];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Approach: loop over the array and check if the next element is smaller than the previous, if it is then swap them

const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else return false;
  }

  return true;
};

const ans = solution(arr);
const ans1 = solution(arr2);

console.log(ans, ans1);
