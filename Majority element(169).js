function findMajorityElement(nums) {
    const counts = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
      // Increment the count for the current number
      counts[num] = (counts[num] || 0) + 1;

      // Check if the current number is the majority element
      if (counts[num] > majorityCount) {
        return num;
      }
      
    }

    return null;
  }
  
  
  // Example usage:
  const arr = [2, 2, 1, 1, 2, 2, 2,1,1,2,55];
  const majorityElement = findMajorityElement(arr);
  console.log(majorityElement);  // Output: 2
  