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

function isValidWalk(walk) {
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
console.log(isValidWalk(['w']));
