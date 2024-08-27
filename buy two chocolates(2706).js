function buy(prices,money) {

 const sort = prices.sort((a,b)=>a-b)

 if(sort[0] + sort[1] > money){
    return money
    
 }
 else if(sort[0] + sort [1] <= money){
    return money - (sort[0]+sort[1])
    
 }   
}

console.log(buy([2,1,2],5));
 