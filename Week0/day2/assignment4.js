function sum(n){
    console.log("the sum of number from 0 to the " + n + " is");
    let Total_Sum=0;
    for(let i =1;i<=n;i++){
        Total_Sum = Total_Sum + i;
    }
    console.log(Total_Sum);
    
}
sum(5);