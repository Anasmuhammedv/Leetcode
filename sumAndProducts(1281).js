function sum(num) {

   string= num.toString().split('').map(Number)
   
   sum= string.reduce((curr,acc)=> curr+acc)
   mul= string.reduce((curr,acc)=> curr*acc)
   let res=mul-sum

    return res  
}
let n=234
console.log(sum(n));