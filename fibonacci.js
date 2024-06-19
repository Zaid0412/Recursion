function fibs(n) {
  n = n - 1;
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];

    console.log(fib);
  }
}
console.log(fibs(8));

//////////////////////////////////////////

function fibsRec(num) {
  if (num < 2) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}

function fibsRecSequence(num) {
  let fib = [];

  for (let i = 0; i < num; i++) {
    fib.push(fibsRec(i));
  }
  return fib;
}

console.log(fibsRecSequence(8));
