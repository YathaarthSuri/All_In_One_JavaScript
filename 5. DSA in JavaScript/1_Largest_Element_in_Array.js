let arr = [1, 5, 6, 7, 10, 0, -1, 7];

// Approach 1: using sort method and accessing last element, but JS sort does not work the same way as other languages' sort method does (we need to compare elements to each other while sorting so that JS sorts them keeping in mind that they are numbers)

// const brute = (arr) => {
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   return arr[arr.length - 1];
// };

// const ans = brute(arr);

// console.log(ans);

// Approach 2: taking first element as the largest element and then using for loop to compare each element of array, if any array element is greater than largest then we assign that element to largest

// const optimal = (arr) => {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }

//   return largest;
// };

// const ans = optimal(arr);

// console.log(ans);

// Note: Similarly we can find the smallest
