let sumLargestNumbers = function(data) {
 highToLowNum = data.sort(function(a, b){return b-a})
 console.log(highToLowNum);
 return (highToLowNum[0] + highToLowNum[1]);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));