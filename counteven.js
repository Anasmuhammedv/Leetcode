

var countEven = function(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        let sumOfDigits = i.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
        
        if (sumOfDigits % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(countEven(30));  

