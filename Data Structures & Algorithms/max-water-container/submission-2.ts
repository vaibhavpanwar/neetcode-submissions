class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxAreaBrute(heights: number[]): number {
        let maxArea = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let length = Math.min(heights[i], heights[j]);
                let breadth = j - i;
                let area = breadth * length;
                maxArea = Math.max(area, maxArea);
            }
        }
        return maxArea;
    }
    maxArea(heights: number[]): number {
/*
Isko two pointer se krenge max breadh e kitne area aa skta hai 
left-0 right =end 
ab l*b 
ab ham dekhenge length left ki bdi thi ya right ki kyuki breadth to dono cases me km hogi (left-- kro ya right++);
jo length bdi thi usko fix krke dusra change krdenge 
or ye krte rhenge jb tk left<right na ho or max Area calculate krte rhenge bhencho 

*/
let maxArea=0
let left=0;
let right=heights.length-1;

while(left<right){
  let length=Math.min(heights[left], heights[right]);
  let breadth=right-left;
  let area=length*breadth
  maxArea=Math.max(area,maxArea);
  if(heights[left]< heights[right]){
    left++;
  }else{
  right--
  }

}

return maxArea;


    }
    /*

[1,7,2,5,4,7,3,6]
sort kia
[1,2,3,4,5,6.7]
    */
}
