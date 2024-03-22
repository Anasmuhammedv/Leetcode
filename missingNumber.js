 function Missing(nums) {
    let arr3 = [];
     let arr2 = nums.sort(function (a, b) {
       return a - b;
     });
   
     for (i = nums[0]; i <= nums[nums.length - 1]; i++) {
       if (!nums.includes(i)) {
         arr3.push(i);
       }
     }
     if (arr3.length === 0) {
         if(nums.length>1  && nums[0]!==1 || nums[0]===0){
   
             arr3.push(nums[nums.length - 1] + 1);
         }
         else if(nums.length==1 && nums[0]==1){
           arr3.push(nums[nums.length-1]-1)
         }
       
     }
   
     return arr3;
       
   };
  console.log(Missing([2])); 