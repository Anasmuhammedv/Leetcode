var mergeAlternately = function(word1, word2) {
    let arr=[]
    let len = word1.length+word2.length
    let word3 = word1.split('')
    let word4 = word2.split('')
    for(i=0;i<len;i++){
        arr.push(word3[i])
        arr.push(word4[i])
    }
    return arr.join('')
};

console.log( mergeAlternately('ace',"bdf"));
