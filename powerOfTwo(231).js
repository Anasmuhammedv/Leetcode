// function Power(n) { 


//     let number = []
//     for(i=0;i<n;i++){
//         number.push(Math.pow(2,i))
        

//     }

             // 1 method

//     if(number.includes(n)){
//         console.log("true");

//     }
//     else{
//         console.log("false");
//     }


             //2 method

//   let res=  number.some((data)=>{
//     return data===n
//   })
//   return res





function Power(n) { 
    let i = 1;
    while (n > i) {
        i = i * 2;
        
    }
    console.log(n === i);
}

Power(4)




