/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let i = 55;

while (i <= 85) {
  if (i % 5 === 0) {
    i++;
    continue;
  }
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
