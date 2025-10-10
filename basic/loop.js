// 합 - 1부터 n까지의 합 구하기
// https://www.acmicpc.net/problem/8393
function sum() {
  let fs = require('fs');
  let input = fs.readFileSync('dev/stdin').toString().split('/n');

  // 문자열을 수로 변환할 때 parseInt보다 Number가 더 빠름
  let n = Number(input[0]);
  let summary = 0;

  for (let i = 0; i <= n; i++) {
    summary += i;
  }

  console.log(summary);

  // 다른 방법 - 등차수열의 합을 이용할 수 있다.
  // console.log(n * (n + 1) / 2);
}

// 구구단
// https://www.acmicpc.net/problem/2739
function multipicationTable(){
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  
  let n = Number(input[0]);
  
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
}

// 별 찍기
// https://www.acmicpc.net/problem/2438
function starPrint() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');
  
  let n = Number(input[0]);
  let result = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }

  console.log(result);
}

// 빠른 A+B 
// https://www.acmicpc.net/problem/15552
// Node.js의 경우, console.log()를 반복적으로 호출하면 시간 초과가 발생할 수 있다.
// 따라서, 결과를 하나의 변수에 저장한 후, 한 번에 출력하는 방법을 사용한다.
function fastAB() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let testCase = Number(input[0]);
  let answer = '';

  for (let i = 1; i <= testCase; i ++) {
    let data = input[i].split(' ');
    let a = Number(data[0]);
    let b = Number(data[1]);
    answer += a + b + '\n';
  }

  console.log(answer)
}