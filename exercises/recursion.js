//complete the following using recursion

// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
};

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   return array.reduce((sum, element) => {
       return sum +(Array.isArray(element) ? arraySum(element) : element)
    }, 0);
};

// 3. Check if a number is even.
var isEven = function(n) {
 return isEven(n > 0 ? n - 2 : n + 2);
};

// 4. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    n = n > 0 ? n - 1 : n + 1;
    return n + sumBelow(n);
};

// 5 Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    y = y > x ? y - 1 : y + 1
    return y === x ? [] : range(x,y).concat(y);
};

// 6. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    return exp > 0 ? base * exponent(base, exp - 1) :  1/ (base * exponent(base,  -1 * exp - 1));
};

// 7. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    return powerOfTwo(n / 2);
};

// 8. Write a function that reverses a string.
var reverse = function(string) {
    var reverse = '';
  for (var i = str.length - 1; i >= 0; i--)
    reverse += str[i];
  return reverse;
};

// 9. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    return palindrome(string.substr(1, string.length - 2));
};
