var getCommon = function(nums1, nums2) {
    let set1 = new Set(nums1);
    
     for (let i = 0; i < nums2.length; i++) {
         if (set1.has(nums2[i])) {
             return nums2[i];
         }
     }
}

console.log(getCommon([2,4,6,8],[4,6,7,8]));
