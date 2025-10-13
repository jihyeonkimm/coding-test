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