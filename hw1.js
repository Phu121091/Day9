//cách 1 : dùng ?
// const checkage = (age) => {
//     return age > 18 ? true : confirm("Did parens allow you?");
//   };
//   let x = checkage(20);
//   console.log(x);

//cách 2 : dùng ||
const checkage = (age) => {
  return age > 18 || (age <= 18 && confirm("Did parens allow you?"))
    ? true
    : false;
};
let x = checkage(19);
console.log(x);

//hàm gốc
// function checkage(age){
//   if (age>18){
//     return true;
//   }else{return confirm("Did parens allow you?");}
// }
// let x = checkage(17);
// console.log(x);
