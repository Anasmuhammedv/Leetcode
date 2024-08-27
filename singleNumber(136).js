var singleNumber = function (nums) {
  for (i = 0; i < nums.length; i++) {
    let unique = true;
    for (j = 0; j < nums.length; j++) {
      if ((i !== j) & (nums[i] == nums[j])) {
        unique = false;
        break;
      }
    }
    if (unique == true) {
      return i;
    }
  }
};

console.log(singleNumber([1, 2, 1, 3, 4, 3, 2]));
