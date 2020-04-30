function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // let smallNums = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < 1) {
  //     smallNums.push(nums[i]);
  //   }
  // }
  // nums.forEach(function (number) {
  //   if (number < 1) {
  //     smallNums.push(number);
  //   }
  // });
  // return smallNums;
  const smallNums = nums.filter(function (number) {
    if (number < 1) {
      return true;
    } else {
      return false;
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // let foundNames = [];
  // for (let i = 0; i < names.length; i++) {
  //   if (names[i].startsWith(char)) {
  //     foundNames.push(names[i]);
  //   }
  // }
  // names.forEach(function (name) {
  //   if (name.startsWith(char)) {
  //     foundNames.push(name);
  //   }
  // });
  // return foundNames;
  const foundNames = names.filter(function (name) {
    if (name.startsWith(char)) {
      return true;
    } else {
      return false;
    }
  });
  return foundNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // let verbs = [];
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].startsWith("to ")) {
  //     verbs.push(words[i]);
  //   }
  // }
  // words.forEach(function (word) {
  //   if (word.startsWith("to ")) {
  //     verbs.push(word);
  //   }
  // });
  // return verbs;
  const verbs = words.filter(function (word) {
    if (word.startsWith("to ")) {
      return true;
    } else {
      return false;
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // let integers = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (Number.isInteger(nums[i])) {
  //     integers.push(nums[i]);
  //   }
  // }
  // nums.forEach(function (number) {
  //   if (Number.isInteger(number)) {
  //     integers.push(number);
  //   }
  // });
  // return integers;
  const integers = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true;
    } else {
      return false;
    }
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // let cities = [];
  // for (let i = 0; i < users.length; i++) {
  //   cities.push(users[i]["data"]["city"]["displayName"]);
  // }
  // users.forEach(function (user) {
  //   cities.push(user["data"]["city"]["displayName"]);
  // });
  // return cities;
  const cities = users.map(function(user) {
    return user["data"]["city"]["displayName"];
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // let squareRoot = [];
  // for (let i = 0; i < nums.length; i++) {
  //   let individualSquareRoot = Math.sqrt(nums[i]);
  //   individualSquareRoot = +individualSquareRoot.toFixed(2)
  //   squareRoot.push(individualSquareRoot)

  // }
  // nums.forEach(function (number) {
  //   let individualSquareRoot = Math.sqrt(number);
  //   individualSquareRoot = +individualSquareRoot.toFixed(2)
  //   squareRoot.push(individualSquareRoot)
  // });
  // return squareRoot;
  const squareRoot = nums.map(function(number) {
    let individualSquareRoot = Math.sqrt(number);
    individualSquareRoot = +individualSquareRoot.toFixed(2)
    return individualSquareRoot;
  });
  return squareRoot;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // let found = [];
  // for (let i = 0; i < sentences.length; i++) {
  //   if (sentences[i].toLowerCase().includes(str)) {
  //     found.push(sentences[i])
  //   }
  // }
  // sentences.forEach(function (sentence) {
  //   if (sentence.toLowerCase().includes(str)) {
  //     found.push(sentence)
  //   }
  // });
  // return found;
  const found = sentences.filter(function (sentence) {
    if (sentence.toLowerCase().includes(str)) {
      return true;
    } else {
      return false;
    }
  });
  return found;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // let longest = [0, 0, 0, 0, 0];
  // for (let i = 0; i < triangles.length; i++) {
  //   for (let j = 0; j < triangles[i].length; j++) {
  //     if (triangles[i][j] > longest[i]) {
  //       longest[i] = triangles[i][j];
  //     }
  //   }
  // }
  // return longest;
  return triangles.map(function (triangle) {
    return Math.max.apply(null, triangle);
  });
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
