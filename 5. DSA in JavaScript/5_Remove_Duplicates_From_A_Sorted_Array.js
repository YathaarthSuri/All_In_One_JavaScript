let arr = [1, 1, 2, 2, 3, 4, 5, 5];

// Approach 1 : Simply by using set (brute force)

// let ans = new Set(arr);

// console.log(ans);

// Approach 2 : Optimized approach is 2 pointer approach
// Here what we do basically is that if start first pointer from 0 and second from 1 and compare both if they are not equal then we assign that value of second pointer to the next index of first pointer and increase the first pointer's value by 1. Second pointer's value keeps on increasing each iteration.

const optimal = (arr) => {
  let res = [];
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  //   We go till i + 1 as i is index which is always 1 less than the length of array
  for (let index = 0; index < i + 1; index++) {
    res.push(arr[index]);
  }
  return res;
};

let ans = optimal(arr);

console.log(ans);
