 
const urlEncode = function(text) {
    let textArray = text.split(" ");
        if (textArray[0] === "") {textArray.splice(0, 1)}
        if (textArray[textArray.length - 1] === "") {textArray.splice(textArray.length - 1, 1)}; 
    let i = 0;
    return textArray.join("%20")
};
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));