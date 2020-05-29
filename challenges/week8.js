const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // loop through array.
  // compare given number with index.
  // return the next number in the array. null if last number.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n && i !== nums.length - 1) {
      return nums[i + 1];
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // set count for 1s.
  // set count for 0s.
  // loop through array and add count for each instance to count variable.
  // return correctly formatted object.
  let oneCount = (str.match(/1/g) || []).length;
  let zeroCount = (str.match(/0/g) || []).length;
  return {
    1: oneCount,
    0: zeroCount
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // set empty variable for the total.
  // loop through array, inside each loop, loop through individual array. forEach??
  // perform addition.
  let total = 0;
  arrs.forEach(arr => arr.forEach(num => total += num));
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  } else {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // convert the object values to string? .join(), .toString()?
  // comparison with searchTerm. .includes()?
  // toLowerCase()
  return (Object.values(haystack).join().toLowerCase()).includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // regex to remove capital and punctuation
  // split words back out with space
  // forEach word count and add to tally
  // properly formatted object with word count

  str = str.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").split(' ');
  // eslint doesnt like my regex but code still working.
  let counted = {};
  str.forEach(function (word) {
    if (!counted[word]) {
      counted[word] = 0;
    }
    counted[word] += 1;
  });
  return counted;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
