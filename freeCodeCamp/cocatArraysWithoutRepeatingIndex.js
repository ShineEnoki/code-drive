function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = arr1.concat(arr2);
  let finalArray = newArr.filter((c,index) => newArr.indexOf(c) == index);
  return finalArray;
}
console.log(
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));