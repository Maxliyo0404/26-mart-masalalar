// 8-masala

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if ( a === b || b === c || a === c ) {
//     alert("true");
// } else {
//      alert("false");
// } 
                                //    uyga vazifa
// 1-masala 
// let a = +prompt("a sonini kiriting");
// let natija = ( a % 2 === 0) ? alert("jujt")  : alert("toq")  ;    

// 2-masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// if (a >= 0 || b < -2) {
//     alert("true");
// } else {
//      alert("false");
// }

// 3-masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if (a < b && b < c) {
//      alert("true");
// } else {
//      alert("false");
// }

// 4-masala
// let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
 
// if (a % 2 !== 0 && b % 2 !== 0) {
//      alert("true");
// } else {
//     alert("false");
// }

// 5-masala

// let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
//  if (a % 2 !== 0 || b % 2 !== 0) {
//      alert("true");
// } else {
//     alert("false");
// }

// 6-masala
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");

//  if (a % 2 === 0 && b % 2 !== 0 || a % 2 === 0 && b % 2 !== 0) {
//       alert("true");
//  } else {
//     alert("false");
// }
// 7-masala
// let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
//  let c = +prompt("c sonini kiriting");
//  if (a > 0 && b > 0 && c > 0) {
//     alert("true")
//  } else {
//     alert("false")
//  }

// 8-masala
// let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
//  let c = +prompt("c sonini kiriting");
//  if ((a > 0 && b <= 0 && c <= 0 ) || (a <= 0 && b > 0 && c <= 0) || (a <= 0 && b <= 0 && c > 0)) {
//     alert("true")
//  } else {
//     alert("false")
//  }
// 9-masala

// let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
//  let c = +prompt("c sonini kiriting");
//  if ((a > 0 && b > 0 && c <= 0 ) || (a > 0 && b <= 0 && c > 0) || (a <= 0 && b > 0 && c > 0)) {
//     alert("true");
//  } else {
//     alert("false");
// //  }
// 10-masala
// let a = +prompt("a sonini kiriting");
// if (a >= 10 && a <= 99 && a % 2 === 0) {
//     alert("true");
// } else {
//     alert("false");
// }

// 11-masala
// let a = +prompt("a sonini kiriting");
// if (a >= 100 && a <= 999 && a % 2 !== 0) {
//     alert("true");
// } else {
//     alert("false");
// }
//  12-masala
//  let a = +prompt("a sonini kiriting");
//  let b = +prompt("b sonini kiriting");
//  let c = +prompt("c sonini kiriting");
//  if (a === -b || a === -c || b === -c) {
//      alert("true");
//  } else {
//     alert("false");
//  }
// 13-masala

let son =  +prompt("son kiriting");

let a = Math.floor(son / 100);
let b = Math.floor((son / 10) % 10);
let c = Math.floor( son % 10);
if ((a < b && b < c) || a > b && b > c) {
    alert("true");
} else {
    alert("false");
    console.log(son);
    
}
