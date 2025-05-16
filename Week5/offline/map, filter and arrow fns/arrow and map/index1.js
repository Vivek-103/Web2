// given an array give a new array which every value is multiplied by 2

const input = [1,2,3,4,5];

///solution using generic method

const newarr = [];

for (let i=0;i<input.length;i++){
    newarr.push(input[i]*2);
}
console.log("initial array is " + input);
console.log("new array is "+ newarr);
 
// other solution USING MAP
function transform(i){
    return i*2
}
console.log("using map");
const ans = input.map(transform);
console.log(ans)