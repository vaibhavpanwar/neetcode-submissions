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
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1 && !list2) return null;
        if(!list1) return list2
        if(!list2) return list1

        let current1 = list1;
        let current2 = list2;
        let list = new ListNode();
        let listIterator=list
        if(current1.val<=current2.val){
            listIterator.val=current1.val
            current1=current1.next
        }else{
          listIterator.val=  current2.val
                      current2=current2.next

        }
        while (current1 && current2) {
            if (current1.val <= current2.val) {
                listIterator.next = current1;
                current1 = current1.next;
            } else {
                listIterator.next = current2;
                current2 = current2.next;
            }
            listIterator=listIterator.next
        }
        
        while (current1) {
            listIterator.next = current1;
            current1 = current1.next;
                        listIterator=listIterator.next


        }
        while (current2) {
            listIterator.next = current2;
            current2 = current2.next;
                        listIterator=listIterator.next


        }
        console.log(list)
        return list;
    }
}
