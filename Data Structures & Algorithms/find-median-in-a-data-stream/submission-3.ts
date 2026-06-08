class PQ {
    isMaxHeap: boolean;
    values: number[];
    constructor(isMax = false) {
        this.isMaxHeap = isMax;
        this.values = [];
    }

    size() {
        return this.values.length;
    }
    add(num: number) {
        this.values.push(num);
        this.values.length > 1 && this.synkUp();
    }
    synkUp() {
        let currentIndex = this.values.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let condition = this.isMaxHeap
                ? this.values[currentIndex] > this.values[parentIndex]
                : this.values[currentIndex] < this.values[parentIndex];
            if (condition) {
                [this.values[currentIndex], this.values[parentIndex]] = [
                    this.values[parentIndex],
                    this.values[currentIndex],
                ];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    extract() {
        if (this.values.length <= 1) return this.values.pop();
        let element = this.values[0];
        let elementToMove = this.values.pop();
        this.values[0] = elementToMove!;
        this.bubbleDown();
        return element;
    }
    bubbleDown() {
        let swapIndex = null;
        let leftChild,
            rightChild,
            lcIdx,
            rcIdx,
            currentIndex = 0;
        while (true) {
            lcIdx = 2 * currentIndex + 1;
            rcIdx = 2 * currentIndex + 2;

            if (lcIdx < this.values.length) {
                leftChild = this.values[lcIdx];
                let condition = this.isMaxHeap
                    ? this.values[currentIndex] < leftChild
                    : this.values[currentIndex] > leftChild;
                if (condition) {
                    swapIndex = lcIdx;
                }
            }

            if (rcIdx < this.values.length) {
                rightChild = this.values[rcIdx];
                let condition = false;
                if (swapIndex !== null) {
                    condition = this.isMaxHeap ? rightChild > leftChild! : rightChild < leftChild!;
                } else {
                    condition = this.isMaxHeap
                        ? this.values[currentIndex] < rightChild
                        : this.values[currentIndex] > rightChild;
                }

                if (condition) swapIndex = rcIdx;
            }

            if (swapIndex !== null) {
                [this.values[currentIndex], this.values[swapIndex]] = [
                    this.values[swapIndex],
                    this.values[currentIndex],
                ];
                currentIndex = swapIndex;
                swapIndex = null;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.values[0];
    }
}

class MedianFinder {
    minHeap: PQ;
    maxHeap: PQ;
    constructor() {
        this.minHeap = new PQ();
        this.maxHeap = new PQ(true);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        // hame pehle dekhna kisme jayga fir size compare krke change krna hai
        if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
            this.maxHeap.add(num);
        } else {
            this.minHeap.add(num);
        }

        // our max heap will have same num of elements of 1 more than min heap
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.add(this.maxHeap.extract());
        } else if (this.maxHeap.size() < this.minHeap.size()) {
            this.maxHeap.add(this.minHeap.extract());
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
        } else {
            return this.maxHeap.peek();
        }
    }
}
