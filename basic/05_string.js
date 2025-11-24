// 숫자의 합

const { count } = require('console');

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

// 그룹 단어 체커
// https://www.acmicpc.net/problem/1316
function groupWordChecker() {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

  const n = Number(input[0]);
  let groupWordCount = 0;

  for(let i = 1; i <= n; i++) {
    let data = input[i];
    if(isGroupWord(data)) groupWordCount += 1;
  }

  function isGroupWord(data) {
    let newData = new Set(data[0]); // 첫 글자 추가
    for(let i = 0; i < data.length; i++) {
      // 다음 글자가 다를 때
      if(data[i] != data[i + 1]) {
        // 다음 글자가 이미 Set에 있으면 그룹 단어 아님
        if(newData.has(data[i + 1])) {
          return false;
        } else {
          // 다음 글자 Set에 추가
          newData.add(data[i + 1]);
        }
      }
    }
    return true;
  }

  console.log(groupWordCount)
}

// 단어의 개수
// https://www.acmicpc.net/problem/1152

function countWords() {
  const fs = require('fs');
  const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString().trim();

  const words = input.split(' ');
  if(words == '') {
    console.log(0)
  } else {
    console.log(words.length)
  }
}

countWords();