/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */ 
    // 7,7,5,2,4,5,6
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
       let length=0;
       let current=head
       while(current){
        current=current.next;
        length++
       }

       let ind= length-n;
       if(ind===0){
        let temp=head.next;
        head=null;
        return temp

       }
    else{
     let count=0;
     let current=head;
     while(count!==(ind-1)){
        current=current.next
        count++
     }
     let temp=current?.next;
     current.next=temp?.next;
     return head;

    }

    }
}
