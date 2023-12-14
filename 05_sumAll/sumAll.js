const sumAll = function (intA, intB) {
  if (
    typeof intA == "number" &&
    typeof intB == "number" &&
    intA >= 0 &&
    intB >= 0
  ) {
    let sum = 0;
    let upperLimit = Math.max(intA, intB);
    let lowerLimit = Math.min(intA, intB);
    for (let i = lowerLimit; i <= upperLimit; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
