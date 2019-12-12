

let numberOfVowels = function(data) {
 let letters = [];
 let wVC = []
 letters.push(...data.split(""));
let i = 0;
while (i < letters.length) {
  if ((letters[i] === "a") ||
  (letters[i] === "e") ||
  (letters[i] === "i") ||
  (letters[i] === "o") ||
  (letters[i] === "u")
   ) {wVC.push(letters[i])}
    ++i

//console.log(letters);
//console.log(wordVowelCount)
 }
 return wVC.length;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));