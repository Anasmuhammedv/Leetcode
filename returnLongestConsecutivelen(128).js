function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);  
    let maxLen = 1;
    let currentLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else if (nums[i] === nums[i - 1]+1 ) {
            currentLen++;
        } else {
            maxLen = Math.max(maxLen, currentLen);
            currentLen = 1;  
        }
    }

    maxLen = Math.max(maxLen, currentLen);

    console.log(maxLen);
}

longestConsecutive([1, 2, 3, 4, 6, 8, 0]);  
