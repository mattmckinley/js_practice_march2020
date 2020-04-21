function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function (x) {
    return Math.pow(x, 2);
  });
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
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
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicates = arr1.filter(function(val) {
    return arr2.indexOf(val) != -1;
  });
  return duplicates;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
