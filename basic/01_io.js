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

// 사칙연산
function calculateArithmetic() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let a = parseInt(input[0]);
  let b = parseInt(input[1]);

  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  // 실수 데이터 반환 방지 위해 parseInt 사용
  console.log(parseInt(a / b));
  console.log(a % b);
}

// 세자릿수 곱셈
// 일의자리, 십의자리, 백의자리 결과를 각각 출력해야함
// 입력값은 첫번재줄에 a, 두번째줄에 b
// https://www.acmicpc.net/problem/2588
function multiplyThreeDigits() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let a = input[0];
  let b = input[1];

  let firstDigits = b[2];
  let secondDigits = b[1];
  let thirdDigits = b[0];

  console.log(Number(a) * Number(firstDigits));
  console.log(Number(a) * Number(secondDigits));
  console.log(Number(a) * Number(thirdDigits));
  console.log(Number(a) * Number(b));
}