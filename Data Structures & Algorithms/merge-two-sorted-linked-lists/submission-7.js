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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let list = new ListNode();
        let iterator = list;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                iterator.next = list1;
                list1 = list1.next;
            } else {
                iterator.next = list2;
                list2 = list2.next;
            }
            iterator = iterator.next;
        }
        if (list1) iterator.next = list1;
        if (list2) iterator.next = list2;
        return list.next;
    }
}
