function fibonacci(num) {
  let arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  console.log(arr);
}

// fibonacci(10);

function fibonacciRecursion(num) {
  if (num <= 1) return num;
  else return fibonacciRecursion(num - 2) + fibonacciRecursion(num - 1);
}

const fibonacciRecursion2 = (num) =>
  num <= 1 ? num : fibonacciRecursion2(num - 2) + fibonacciRecursion2(num - 1);

console.log(fibonacciRecursion2(3));
