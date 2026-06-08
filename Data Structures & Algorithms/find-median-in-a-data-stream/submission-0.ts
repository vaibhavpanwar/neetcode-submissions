class MedianFinder {
    arr:number[]
    constructor() {
        this.arr=[]
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.arr.push(num);
        this.arr.sort((a,b)=> a-b)
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        let length=this.arr.length;
        if(length%2!==0){
          let index=Math.floor(length/2);
          return this.arr[index]
        }else{
            let index= length/2;
            return (this.arr[index]+this.arr[index-1])/2
        }
    }
}
