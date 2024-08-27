var averageValue = function (nums) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    if ((nums[i] % 2 == 0) & (nums[i] % 3 == 0)) {
      arr.push(nums[i]);
    }
  }

  if (arr.length > 0) {
    const data = arr.reduce((curr, acc) => {
      return curr + acc;
    }, 0);

    return Math.floor(data / arr.length);
  } else {
    return 0;
  }
};

// console.log(averageValue([94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]));
console.log(averageValue([2, 4]));
