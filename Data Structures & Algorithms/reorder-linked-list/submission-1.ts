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
    reorderList(head: ListNode | null): void {
        // find the half of the linked list using tortoise and hare
        let fast = head,
            slow = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // now second half of list will start at slow.next and we will reverse it
        let secondListHead = slow.next;
        slow.next = null;
        let prev = null,
            current = secondListHead,
            next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // lets merge first and second half
        let newSecondListHead = prev;
        let firstHead = head;
        while (newSecondListHead) {
            let temp1 = newSecondListHead.next,
                temp2 = firstHead.next;
            firstHead.next = newSecondListHead;
            newSecondListHead.next = temp2;
            newSecondListHead = temp1;
            firstHead = temp2;
        }
    }
}
