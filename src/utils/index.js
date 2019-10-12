function addZero (num) {
  return num < 10 ? '0' + num : num
}

function cutArray (l, p) {
  let index = 0;
  let newArr = [];
  let array = [...Array(l + 1).keys()].slice(1)
  while (index < l + 1) {
    newArr.push(array.slice(index, index += p));
  }
  return newArr;
}
export {
  addZero,
  cutArray
}
