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
  // array of objects with array properties.
  // need to set up a count
  // loop through the object, access the subject property which is an array
  // count how many items are in the array
  // return the total count of all subjects in the array.

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // convert the array of objects to an object.
  let object = {};
  for (let i = 0; i < menu.length; ++i)
    Object.assign(object, menu[i]);
  return object;
  // compare the ingredients
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  //combine the arrays
  let unique = arr1.concat(arr2)

  // create a new array with only the unique items
  unique = unique.map((item, i) => unique.includes(item, i + 1) ? item : '')

  // sort the array
  unique = [...new Set(unique)].filter(n => n).sort();
  return unique;


}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
