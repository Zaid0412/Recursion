function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const RightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(RightArr));
  }
}

function merge(leftArr, RightArr) {
  const sortedArr = [];

  while (leftArr.length && RightArr.length) {
    if (leftArr[0] <= RightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(RightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...RightArr];
}

console.log(mergeSort([79, 100, 105, 110]));
