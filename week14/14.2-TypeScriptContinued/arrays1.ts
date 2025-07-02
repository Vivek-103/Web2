//Given an array of positive integers as input, return the maximum value in the array

function getMax(nums:number[]){
    let maxValue = -100000;

    for (let i =0 ;i<nums.length;i++){
        if(nums[i]>maxValue){
            maxValue = nums[i]
        }
    }
    return maxValue;
}
