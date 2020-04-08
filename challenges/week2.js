function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
 if (people <= 120 && people > 80) {
   return 3;
 } else if (people <= 80 && people > 40) {
   return 2;
 } else 
 return 1;
}
// need to add last test! and refine down. can make this work for all tests somehow.

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] == "sheep") {
      count++;
    }
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode.charAt(0) == "M" && person.address.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
