
const total = function rec(num) {
    if(num==1)
        return 0;
    
    return num + rec(num/2) + rec(num/2);
    
}

let totlnum =0;

for (let i = 2; i < 15; i++) {
    totlnum += total(Math.pow(2,i));
}
console.log(totlnum + 4);