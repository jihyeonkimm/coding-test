// 기본 조건문 - https://www.acmicpc.net/problem/9498

const { start } = require('repl');

// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
function condition1() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let data = Number(input[0])

  function check(score) {
    if(90 <= score && score <= 100) console.log('A');
    else if(80 <= score && score <= 89) console.log('B');
    else if(70 <= score && score <= 79) console.log('C');
    else if(60 <= score && score <= 69) console.log('D');
    else console.log('F');
  }

  check(data)
}

// 알람 시계 - https://www.acmicpc.net/problem/2884
// 45분 일찍 알람 설정하기
// 1. 현재 시간이 주어졌을 때, 45분을 감소시킨다.
// 2. 0분보다 작아지면, 시가 1시간 감소한다.
// 3. 0시보다 작아지면, 시를 23시로 초기화한다.
function alarm() {
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let hour = Number(input[0]);
  let minute = Number(input[1]);

  if(minute < 45) {
    hour -= 1;
    minute += 15;
    if(hour < 0) hour = 23;
  }
  else minute -= 45;

  console.log(hour + ' ' + minute)
}

/*
오븐 시계 - https://www.acmicpc.net/problem/2525

첫번째줄에는 현재 시간, 두번째 줄에는 소요 시간
입력으로 주어진 시간을 분으로 바꾸고, 분을 시각으로 바꿔준다.

ex) 현재 시간 17시 40분이고, 소요 시간이 80분일 경우
1020분(17시) + 40 + 80 하면 1140분.
자정을 넘어가는 경우를 위해, 1140을 1440으로 나눈 나머지를 구한다.
1140 % 1440하면 1440보다 작으므로 1140 그대로.
1140 / 60 = 19. 몫이 시간이고 나머지가 분
*/ 
function oven(){
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split('\n');

  let [startHour, startMinute] = input[0].split(' ').map(Number);
  let cookingTime = Number(input[1]);

  let totalMinute = startHour * 60 + startMinute + cookingTime;
  totalMinute %= 1440; // 자정을 넘어가는 경우
  let endHour = parseInt(totalMinute / 60);
  let endMinute = totalMinute % 60;

  console.log(endHour + " " + endMinute);
}

// 주사위 - https://www.acmicpc.net/problem/2480
function dice(){
  let fs = require('fs');
  let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);

  if (a == b && b == c) console.log(10000 + a * 1000);
  else if (a == b) console.log(1000 + a * 100);
  else if (b == c) console.log(1000 + b * 100);
  else if (c == a) console.log(1000 + a * 100);
  else console.log(Math.max(a, b, c) * 100);
}