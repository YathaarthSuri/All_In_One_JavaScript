function isPalindrome(x) {
  return x === x < 0 ? false : +x.toString().split('').reverse().join('');
}

console.log(isPalindrome(121));
