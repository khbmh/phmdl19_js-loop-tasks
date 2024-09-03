/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let num = 1;

while (num <= 100) {
  console.log(num);
  // Calculate the square root of the current number
  let sqrt = Math.sqrt(num);
  
  // Check if the square root is an integer
  if (sqrt === Math.floor(sqrt)) {
    continue;
  }
  num++;
}