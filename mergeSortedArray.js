function Merge(arr1,arr2) {
    
    let arr4=[]
    arr3=[...arr1,...arr2] 
    for(i=0;i<arr3.length;i++){
        if(arr3[i]!=0){
            arr4.push(arr3[i])
        }
    }
    return arr4.sort(function(a,b){return a-b})
    
}
console.log(Merge([1,2,3,0,0,0],[2,5,6]));