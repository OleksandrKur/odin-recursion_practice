function mergeSort(array) {
  //base case
  if (array.length <= 1) {
    return array;
  }

  //splitting the arrays
  const firstHalf = array.slice(0, array.length / 2);
  const secondHalf = array.slice(array.length / 2);
  //sorting halves
  const firstSortedHalf = mergeSort(firstHalf);
  const secondSortedHalf = mergeSort(secondHalf);
  ///return merged array
  return merge(firstSortedHalf, secondSortedHalf);
}

function merge(
  firstSortedHalf,
  secondSortedHalf,
  length = firstSortedHalf.length + secondSortedHalf.length
) {
  //creating sorted array and pointers of
  const sortedArray = [];
  let counter = 0;
  let i = 0;
  let j = 0;
  //continue filling new sorted array till the length will be same as provided halves length
  while (counter < length) {
    if (i === firstSortedHalf.length) {
      sortedArray.push(secondSortedHalf[j]);
      j++;
      counter++;
      continue;
    } else if (j === secondSortedHalf.length) {
      sortedArray.push(firstSortedHalf[i]);
      i++;
      counter++;
      continue;
    }
    if (compareFunction(firstSortedHalf[i], secondSortedHalf[j])) {
      sortedArray.push(firstSortedHalf[i]);
      i++;
    } else {
      sortedArray.push(secondSortedHalf[j]);
      j++;
    }
    counter++;
  }
  return sortedArray;
}

function compareFunction(a, b) {
  return a < b;
}

let unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];
let unsortedArray2 = [105, 79, 100, 110];

const largeArray = Array.from({ length: 10000000 }, () =>
  Math.floor(Math.random() * 1000000)
);
let startTime = Date.now();
console.log(mergeSort(largeArray));
let endTime = Date.now();
console.log(`Operation lasted ${endTime - startTime}ms`);
