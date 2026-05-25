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
    removeNthFromEndMySolution(head: ListNode | null, n: number): ListNode {
        let length = 0;
        let current = head;
        while (current) {
            current = current.next;
            length++;
        }
        // we could have also reversed it

        let ind = length - n;
        if (ind === 0) {
            let temp = head.next;
            head = null;
            return temp;
        } else {
            let count = 0;
            let current = head;
            while (count !== ind - 1) {
                current = current.next;
                count++;
            }
            let temp = current?.next;
            current.next = temp?.next;
            return head;
        }
    }
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        // we will use two pointer left and right start left at 0-1 (dummy node) and right at head plus n (right-lieft) will give me one prior element
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;
        let count = n;
        while (count > 0 && right) {
            right = right.next;
            count--;
        }

        while (right) {
            left = left.next;
            right = right.next;
        }

        // left is at prior element to be replace
        left.next = left.next.next;
        return dummy.next;
    }
}
