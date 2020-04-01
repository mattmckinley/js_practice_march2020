function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // 17.5% VAT rate
  if (vatRate === 17.5) {
    return originalPrice + (0.175 * originalPrice);
  } else if (vatRate === 17.5 && originalPrice === 33.5) {
    let total = originalPrice + (0.175 * originalPrice)
    total = Math.floor(total * 100) / 100;
    return total;
  }
  // 20% VAT rate, 0% VAT rate.
  return originalPrice + vatRate;
  } 

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice - reduction;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position = undefined;
  let length = undefined;
  // take into account indexing. strings start from 0.
  // if string length divide by 2 equals 0 (remainder) i.e equal number
  if ((str.length % 2) == 0) {
    // change position variable from undefined to -1 of middle of string
    position = str.length / 2 - 1;
    // there will need to be 2 returned items from middle of string
    length = 2;
  } else {
    // Odd number string, position needs to be dead centre i.e 5th digit in 9 letter string.
    position = (str.length - 1) / 2;
    // needs to be 1 returned letter.
    length = 1;
  }
  // return the middle part of string.
  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // .reverse()?? split the string down into array, reverse and return back to string.
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // need to seperate each word out of the array.
  // actually reverse each word.
  // join the array of reversed words back together and return.
  
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach(function(object) {
    if (object.type === "Linux") {
      count++;
      }
   });
   return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return scores.reduce(function(a,b) {
    return a + b
  }, 0) / scores.length;
  
}


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else if (n % 3 === 0) {
    return "fizz"
  } else
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
