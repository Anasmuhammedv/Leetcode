function findMedianSortedArrays(nums1, nums2) {
  const num3 = nums1.concat(nums2).sort((a,b)=>a-b)

  const length = num3.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (num3[middle - 1] + num3[middle]) / 2;
  } else {
    return num3[middle];
  }
}

console.log(findMedianSortedArrays([1, 2, 3], [2, 4])); 
