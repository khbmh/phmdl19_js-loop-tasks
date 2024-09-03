/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 1;
while (num <= 100) {
  let sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt) && num > 1) {
    break;
  }
  console.log(num);
  num++;
}
