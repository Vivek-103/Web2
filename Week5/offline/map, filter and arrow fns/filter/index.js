// filtering

// What if i tell u , givrn an input array,give me back all the even value

const input =[1,2,3,4,5];

// basic solution
const newarr= [];
for(let i=0;i<input.length;i++){
    if(input[i]%2==0){
        newarr.push(input[i]);
}
}
console.log("from basic solution " + newarr + "\n");

// by filtering Logic
function filteringlogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
console.log("from filtering logic")
const ans = input.filter(filteringlogic);
console.log(ans);