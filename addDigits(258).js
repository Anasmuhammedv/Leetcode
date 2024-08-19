// function addDigits(num) {

// let num1 = num.toString().split('')
// console.log(num1);
// let num2=num1.reduce((acc,curr)=>{return acc+curr},0))

// console.log(num2);

// }

function addDigits(num) {
  let number = num;
  while (number.toString().length > 1) {
    let arr = num.toString().split("");
    
    number = arr.reduce((acc, crr) => {
      return acc + Number(crr);
    }, 0);
  };
  return number;
}

console.log(addDigits(34));
