// a + b
function add() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let a = parseInt(input[0]);
  let b = parseInt(input[1]);

  console.log(a + b);
}

// a * b 
function multiply() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let a = parseInt(input[0]);
  let b = parseInt(input[1]);

  console.log(a * b);
}