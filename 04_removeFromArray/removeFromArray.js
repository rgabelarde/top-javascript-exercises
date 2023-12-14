const removeFromArray = function (arr, ...itemsToRemove) {
  return arr.filter((arrItem) => !itemsToRemove.includes(arrItem));
};
// Do not edit below this line
module.exports = removeFromArray;
