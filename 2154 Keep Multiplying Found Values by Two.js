var findFinalValue = function(nums, original) {
  for(i=0;i<nums.length;i++){
    if(nums[i]==original){
       original *= 2
       i = -1 
    }
  }

return original
    
};


console.log(findFinalValue([12,5,3,6,1],2));
