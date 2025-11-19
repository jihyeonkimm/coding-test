// 최소, 최대
// https://www.acmicpc.net/problem/10818
function minMax() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let count = Number(input[0]);
  let array = input[1].split(' ').map(Number);

  let minValue = 1000001;
  let maxValue = -1000001;

  for(let i = 0; i < count; i ++) {
    if(minValue > array[i]) minValue = array[i];
    if(maxValue < array[i]) maxValue = array[i];
  }

  console.log(minValue, maxValue);
}

// 최댓값
// https://www.acmicpc.net/problem/2562
function max() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let maxValue = 0;
  let maxIndex = 0;

  for(let i = 0; i < 9; i++) {
    let data = Number(input[i]);
    if(maxValue < data) {
      maxValue = data;
      maxIndex = i;
    }
  }

  console.log(maxValue);
  console.log(maxIndex + 1);
}

// 또 다른 방법
function max2() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input.map(x => Number(x));
  let maxValue = Math.max(...data);

  console.log(maxValue);
  console.log(data.indexOf(maxValue) + 1);
}

// 나머지
// https://www.acmicpc.net/problem/3052
function remain() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = input.map(Number);
  let mySet = new Set(); // 새로운 집합 객체 생성. 중복을 허용하지 않음

  for(let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42); // 나머지를 집합에 추가
  }

  console.log(mySet.size); // 집합의 크기 출력 (중복 제거된 개수)
}

// 평균은 넘겠지
// https://www.acmicpc.net/problem/4344
function average() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let testCase = Number(input[0]); // 테스트 케이스의 갯수
  // 테스트 케이스 개수만큼 반복
  for(let i = 1; i <= testCase; i++) {
    let data = input[i].split(' ').map(Number); // 공백을 기준으로 나누고 각 요소를 숫자로 변환
    let number = data[0]; // 첫 번째 요소는 학생 수
    let sum = 0; // 점수의 합
    for(let j = 1; j <= number; j++) {
      sum += data[j]; // 두 번째 요소부터 합산
    }
    let average = sum / number; // 평균
    let count = 0; // 평균 넘는 학생 수를 저장할 변수
    for(let j = 1; j <= number; j++) {
      if(data[j] > average) {
        count += 1; // 평균을 넘는 학생 수
      }
    }
    console.log((count / number * 100).toFixed(3) + '%'); // 비율을 구하고 소수점 셋째 자리까지 출력
  }
}

// 평균
// https://www.acmicpc.net/problem/1546
function newAverage() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let subjectCount = Number(input[0]);
  let data = input[1].split(' ').map(Number);
  let max = data.reduce((a, b) => Math.max(a, b))
  let newArr = [];
  for (let i = 0; i < subjectCount; i++) {
    newArr.push(data[i] / max * 100);
  }

  console.log(newArr.reduce((a, b) => a + b) / subjectCount);
}