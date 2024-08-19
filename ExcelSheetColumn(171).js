function titleToNumber(columnTitle) {
    let ans = 0;
    for (const c of columnTitle) {
        ans = ans * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return ans;
}


console.log(titleToNumber("ZZ"));
 