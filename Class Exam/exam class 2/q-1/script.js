// Filter divisible by 8 numbers from array using .filter() method of array.

let arr = [1, 8, 16, 24, 15, 80];

let ans = arr.filter(number => number % 8 === 0);

document.write(ans);
