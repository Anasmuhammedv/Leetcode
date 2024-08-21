 let targetvalue = 10
function target(arr){
    
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] == targetvalue){

                console.log(arr[i],arr[j]);
                

                return([arr[i],arr[j]])

            }
        }
    }
}
console.log(target([1,5,4,3,7]));
 