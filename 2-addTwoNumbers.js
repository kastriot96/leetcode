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

 var addTwoNumbers = function(l1, l2) {

    const mappedL1 = l1.map((element,index) => 
        (element * 10**index)
     );
    const mappedL2 = l2.map((element,index) => 
        (element * 10**index)
     );
    let sumL1 = mappedL1.reduce((a, c) => a + c)
    let sumL2 = mappedL2.reduce((a, c) => a + c)
    let totalSum = sumL1 + sumL2;
    let myArr = String(totalSum).split("").map((number) => {
        return Number(number)
    })
    return myArr.reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));

/*

 var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0);
    let dummy = result;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 || sum > 0) {
        if(l1) {
            sum+= l1.val;
            l1 = l1.next;
        }

        if(l2) {
            sum+= l2.val;
            l2=l2.next;
        }

        if (sum >= 10) {
            sum-=10;
            carry=1;
        }       
        dummy.val = sum;
        sum = carry;
        carry = 0;
        
        if(l1 || l2 || sum > 0) {
            dummy.next = new ListNode(0);
            dummy = dummy.next;
        }
    }
    return result;
};

*/

/*

var addTwoNumbers = function(l1, l2) {
        let k=new ListNode(0,null);
        let k1= k;
        let x,y,c=0;
        while(l1!=null || l2!=null){
            x = l1!=null?l1.val:0;
            y = l2!=null?l2.val:0;
            c=x+y+c;
            k1.next =new ListNode(c%10,null);
            k1 = k1.next ;
            c=parseInt(c/10);
            if(l1!=null) l1=l1.next ;
            if(l2!=null) l2=l2.next ;
        }
        
        if(c>0) {
            k1.next=new ListNode(c,null);
            k1=k1.next ;
        }
      
        return k.next;

};

*/
