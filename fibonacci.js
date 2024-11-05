function fibs(n) {
  let numbers;
  if (n === 1) {
    return [0];
  }
  if (n >= 2) {
    numbers = [0, 1];
    for (let i = 2; i < n; i++) {
      numbers.push(numbers[i - 2] + numbers[i - 1]);
    }
  }
  return numbers;
}

function fibsRec(n, array = [0, 1]) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let length = array.length;
  array.push(array[length - 1] + array[length - 2]);
  if (array.length === n) {
    return array;
  }
  return fibsRec(n, array);
}

console.log(fibs(8));
console.log(fibsRec(8));
