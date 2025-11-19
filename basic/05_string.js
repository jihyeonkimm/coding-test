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
