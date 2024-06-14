function valid(x) {
    

    const y = x.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const z= y.split("").reverse().join("")

    return y == z
}

console.log( valid("A man, a plan, a canal: Panamaa"));