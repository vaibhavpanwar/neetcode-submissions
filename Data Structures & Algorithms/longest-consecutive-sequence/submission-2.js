class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if(!nums.length) return 0
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    let longestCounter = 1
    let currentCounter=1
    for(let i=0;i<nums.length-1;i++){
      if(nums[i+1]-nums[i]===0)continue;
      if(nums[i+1]-nums[i]===1) currentCounter++
      else{
        currentCounter=1
      }
     longestCounter=Math.max(currentCounter,longestCounter);


    } 
    return  longestCounter 
    }
}
