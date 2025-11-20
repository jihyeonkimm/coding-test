// 숫자의 합
// https://www.acmicpc.net/problem/11720
function sumOfNumbers() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  
  let count = Number(input[0]);
  let array = input[1].split('').map(Number);
  
  let result = 0; // for문 안에 선언하면 console이 접근할 수 없음
  for (let i = 0; i < count; i++) {
    result += array[i];
  }
  
  console.log(result)
}

// 문자열 반복
// https://www.acmicpc.net/problem/2675
function repeatString() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const T = Number(input[0]);
  
  for(let i = 1; i <= T; i++) {
    let [r, s] = input[i].split(" ");
    r = Number(r);
    let result = "";
    for(let j = 0; j < s.length; j++) {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
  }
}

// 상수
// https://www.acmicpc.net/problem/2908
function reverseString() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split(' ');

  const a = input[0];
  const b = input[1];

  const newA = a[2] + a[1] + a[0];
  const newB = b[2] + b[1] + b[0];

  console.log(Math.max(Number(newA), Number(newB)))
}