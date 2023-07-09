// function narcissistic(value) {
//   // Code me to return true or false
//   const numlength = `${value}`.length;
//   let ans = 0;
//   let testarr = `${value}`.split("").map((e) => {
//     let nummultiply = Math.pow(e, numlength);
//     return Number(nummultiply);
//   });
//   for (let i = 0; i < testarr.length; i++) {
//     ans += testarr[i];
//   }
//   // console.log(testarr);
//   // ans=testarr[0] + testarr[1] + testarr[2];
//   if (ans === value) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(narcissistic(153));

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
//  so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their
//   phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk
//    (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute
//     to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten
//     minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

/*function isValidWalk(walk) {
  //insert brilliant code here
  //there must be an equal amount of n and south and there must be an equal amount of e and w
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  if (walk.length == 10){
    for(let i = 0; i< walk.length; i++){
      if (walk[i] == 'n'){
        n++;
      }else if(walk[i] == 's'){
        s++;
      }else if (walk[i] == 'w'){
        w++;
      }else if(walk[i] == 'e'){
        e++;
      }else {
        return false;
      }
    }
    if(n === s && w === e){
      return true;
    }else {
      return false;
    }
  }else{
    return false;
  }

}
console.log(isValidWalk(['w']));*/
/*in securities reasearch, an analyst will look at a number of attributes for a stock. one analyst would like to keep a record of the highest positive spread between a closing price and the closing price on any prior day in history. determine the maximum positive spread for a stock given its price history. if the stock remains flat or declines for the full period, return -1.  for example px = [7,1,2,5] write a javascript code to calculate the positive difference between each price and its predecessors*/
/*function calculateMaxPositiveSpread(px) {
  let maxPositiveSpread = -1; // Initialize the max positive spread to -1
  let prevClosingPrice = px[0]; // Initialize the previous closing price to the first element of the price array

  for (let i = 1; i < px.length; i++) {
    let currClosingPrice = px[i]; // Get the current closing price
    let diff = currClosingPrice - prevClosingPrice; // Calculate the difference between the current and previous closing prices

    if (diff > 0 && diff > maxPositiveSpread) {
      maxPositiveSpread = diff; // Update the max positive spread if the current difference is greater
    }

    prevClosingPrice = currClosingPrice; // Update the previous closing price for the next iteration
  }

  return maxPositiveSpread;
}*/

/*a schedule has just been released for an upcoming tech conference. the schedule provides the start and end time to go from one presentation to another. determine the maximum number of presentations that can be attended by one person. for example: scheduleStart = [1,1,2], scheduleEnd=[3,2,4]. write a javascript code that will calculate the max Presentations one person can attend
Here's a JavaScript code that calculates the maximum number of presentations that can be attended by one person based on the start and end times of each presentation:
*/
/*
function calculateMaxPresentations(scheduleStart, scheduleEnd) {
  let n = scheduleStart.length; // Get the number of presentations in the schedule
  let count = 1; // Initialize the count of presentations to 1, since at least one presentation can be attended
  let i = 0; // Initialize the iterator for the start times to 0
  let j = 1; // Initialize the iterator for the end times to 1, since the first presentation has already been counted

  while (i < n && j < n) {
    if (scheduleStart[j] >= scheduleEnd[i]) {
      count++; // Increment the count of presentations if the next presentation starts after the current presentation ends
      i = j; // Update the iterator for the start times to the next presentation
    }
    j++; // Update the iterator for the end times to the next presentation
  }

  return count;
}*/


// Write a function that takes an array of numbers(integers for the tests)
// and a target number.It should find two different items in the array that, when added
// together, give the target value.The indices of these items should then be returned in a
// tuple / list(depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will
// be accepted.

// The input will always be valid(numbers will be an array of length 2 or greater, and all of
//   the items will be numbers; target will always be the sum of two different items from that array).

// function twoSum(numbers, target) {
  
//   for(let i=0; i<numbers.length; i++){
    
//     for(let j=i+1; j<=numbers.length; j++){
      
//       if((numbers[i] + numbers[j]) === target){
//       return [i, j]
//       }
      
//     }
    
//   }
//   return [];
// }
