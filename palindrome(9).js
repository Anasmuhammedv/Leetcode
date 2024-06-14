function palindrome(x) {

    let y = x.toString().split('').reverse().join("")

    if(x==y){
        return true
    }
    return false 
}

console.log(palindrome(121)); 