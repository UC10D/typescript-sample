
// 1
let a: string = "1";
let t1 = new Date().getTime();
for (let i = 0; i < 999999; i++) {
  a * 1;
  // console.log(a * 1);
}
let t2 = new Date().getTime();
console.log("1:", t2 - t1);


// parseInt
let b: string = "1";
let t3 = new Date().getTime();
for (let i = 0; i < 999999; i++) {
  // console.log(parseInt(a));
  parseInt(b);
}
let t4 = new Date().getTime();
console.log("2:", t4 - t3);



// Number()
let c: string = "1";
let t5 = new Date().getTime();
for (let i = 0; i < 999999; i++) {
  // console.log(parseInt(a));
  Number(c);
}
let t6 = new Date().getTime();
console.log("3:", t6 - t5);