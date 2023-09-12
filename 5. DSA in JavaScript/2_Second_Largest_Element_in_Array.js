let arr = [1, 5, 6, 11, 11, 7, 10];

// Approach 1: using sort method and accessing arr.length - 2 element, we just need to write a condition that if the 2nd last element is not the same as the last element only then return the arr.length - 2 element otherwise loop over the elements from the back and keep checking till we get an element which is not equal to the last element (example: if array is [1, 2, 3, 7, 7])

// But JS sort does not work the same way as other languages' sort method does (we need to compare elements to each other while sorting so that JS sorts them keeping in mind that they are numbers)

// const brute = (arr) => {
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   const largest = arr[arr.length - 1];

//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] !== largest) {
//       return arr[i];
//     }
//   }
// };

// const ans = brute(arr);

// console.log(ans);

// Approach 2: Better solution will be to first find largest through looping over the array and then taking lowest value possible for secondLargest and loop over the array once again and comparing each element to the largestElement (which we have found previously), so if the current element is not the largestElement then assign it to secondLargest

// const better = (arr) => {
//   let largest = arr[0];
//   let secondLargest = Number.MIN_VALUE;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
// we first check whether current element is largest or not because if it is, then we should move on and not store it as secondLargest otherwise other values will never be able to satisfy the second condition
//     if (arr[i] !== largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// };

// const ans = better(arr);

// console.log(ans);

// Approach 3: Optimal solution will be to loop over the array once and take largest as first element and secondLargest as minimum value possible and then compare if current element is greater than largest, then assign largest to secondLargest and current element to largest. But if current element is less than largest and also it is greater than secondLargest then assign current value to secondLargest. (This keeps in mind that the elements are unique)

const optimal = (arr) => {
  let largest = arr[0];
  let secondLargest = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest)
      secondLargest = arr[i];
  }

  return secondLargest;
};

const ans = optimal(arr);

console.log(ans);

// Similary we can do for finding secondSmallest
