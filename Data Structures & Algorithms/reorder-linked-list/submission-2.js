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
     * @return {void}
     */
    reorderList(head) {
        let slow=head,fast=head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        let secondHalf=slow.next
        slow.next=null
        let curr=secondHalf, prev=null, next=null
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }

        let currentLeft=head,currentRight=prev
        while(currentLeft && currentRight){
            let leftTemp=currentLeft.next,
            rightTemp=currentRight.next

            currentLeft.next=currentRight
            currentRight.next=leftTemp
            currentLeft=leftTemp
            currentRight=rightTemp
        }
        return head
    }
}
