function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function (x) {
    return Math.pow(x, 2);
  });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // set a variable for the final converted words
  let result = "";
  // loop through the array
  for (let i = 0; i < words.length; i++) {
    // lowercase every word
    let currentStr = words[i];
    let tempStr = currentStr.toLowerCase();
    // convert first letter to uppercase except first word
    if (i != 0) {
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    }
    // add converted to the result variable
    result = result + tempStr;
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  people.forEach((person) => {
    if (person["subjects"]) {
      count += person["subjects"].length
    }
  });
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let found = false;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i]["ingredients"].includes(ingredient)) {
      found = true;
    }
  }
  return found;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  // sort the arrays to remove duplicates
  let sortedArr1 = [...new Set(arr1)]
  let sortedArr2 = [...new Set(arr2)]

  //combine the arrays
  let combined = sortedArr1.concat(sortedArr2)

  // map through the array and find duplicates
  combined = combined.map((item, i) => combined.includes(item, i + 1) ? item : '')

  // sort the array
  combined = [...new Set(combined)].filter(n => n).sort();
  return combined;
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
