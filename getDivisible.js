function minimumOperation(nums) {
    let count=0
    for(i=0;i<nums.length;i++){
        if(nums[i] % 3 ===0){

        }
        else if(nums[i]+1 % 3 ===0){
           
            count +=1
            
        }
        else{
          
            
            count +=1
        }
        
        
    }
        return count  
}

console.log(minimumOperation([1,2,3,4,7]));