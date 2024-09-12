var differenceOfSums = function(n, m) {
    sum1 = 0
    sum2=0
    for(i=1;i<=n;i++){
        if(i%m!==0){
            sum1+=i
        }
        else if(i % m ==0){
           sum2+=i
        }
    }
    return sum1-sum2
    
};


console.log( differenceOfSums(10,3));
