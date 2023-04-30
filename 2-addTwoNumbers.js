/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//First IDEA 

 var addTwoNumbers = function(l1, l2) {
    l1 = [2,4,3];
    l2 = [5,6,4];
    console.log('l1', l1);
    console.log('l2', l2);

    const mappedL1 = l1.reverse().map((element,index) => 
        (element * 10**index)
     );
    const mappedL2 = l2.reverse().map((element,index) => 
        (element * 10**index)
     );
    console.log('mappedL1',mappedL1);
    console.log('mappedL2',mappedL2);
    // const modified = l1.forEach((element,index) => {
    //     console.log(element * 10**index);
    // });
    let sumL1 = mappedL1.reduce((a, c) => a + c)
    let sumL2 = mappedL2.reduce((a, c) => a + c)
    console.log('sumL1', sumL1);
    console.log('sumL2', sumL2);
    console.log('total sum ', sumL1 + sumL2);
};

console.log(addTwoNumbers());
