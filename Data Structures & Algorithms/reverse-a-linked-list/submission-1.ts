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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev=null;
        let current=head;
        let next;
        while(current){
            next=current.next,
            current.next=prev;
            prev=current;
            current=next
        }
        return prev
    }
}
