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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (!lists.length) return null;

        function mergeTwoSorted(list1, list2) {
            let list = new ListNode();
            let tail = list;
            while (list1 && list2) {
                if (list1.val <= list2.val) {
                    tail.next = list1;
                    list1 = list1.next;
                } else {
                    tail.next = list2;
                    list2 = list2.next;
                }
                tail = tail.next;
            }

            tail.next = list1 || list2;
            return list.next;
        }
        function merge(array: ListNode[]) {
            if (array.length <= 1) return array[0];
            let mid = Math.floor(array.length / 2);
            let left = merge(array.slice(0, mid));
            let right = merge(array.slice(mid));
            console.log(left, 'leftt')
            console.log(right, 'RIGHT')
            console.log('******')
            return mergeTwoSorted(left, right);
        }

        return merge(lists);
    }
}
