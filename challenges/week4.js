function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let foundNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      foundNames.push(names[i]);
    }
  }
  return foundNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i]["data"]["city"]["displayName"]);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoot = [];
  for (let i = 0; i < nums.length; i++) {
    let individualSquareRoot = Math.sqrt(nums[i]);
    individualSquareRoot = +individualSquareRoot.toFixed(2)
    squareRoot.push(individualSquareRoot)

  }
  return squareRoot;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let found = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str)) {
      found.push(sentences[i])
    }
  }
  return found;

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longest = [0, 0, 0, 0, 0];
  for (let i = 0; i < triangles.length; i++) {
    for (let j = 0; j < triangles[i].length; j++) {
      if (triangles[i][j] > longest[i]) {
        longest[i] = triangles[i][j];
      }
    }
  }
  return longest;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
