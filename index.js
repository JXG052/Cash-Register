// Input: price, cash, cid
    // price is a float to 2dp
    // cash is a float to 2dp
    // cid is an arrray of i = 0-8, j= 0, 1 
        // j[0] is coin/note
        // j[1] is value of coin/note times the number in the draw
// OUTPUT: object:
/* status: ("open closed or insufficient_funds"): [.arr.]
        where arr = the needed change, given in the same format as CID. 
        
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}

let cid = [ ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100] ];
console.table(cid)

20, 20,   [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
            ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
            ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
                should return {status: "OPEN", change: [["QUARTER", 0.5]]}
*/
function sumCID(arr) {
    let totalCid = 0; 
    for (let i = 0; i < arr.length; i++){
        totalCid += arr[i][1];
    }
    return Math.round(totalCid*100)/100;
}

function checkCashRegister(price, cash, cid) {
    let totalCid = sumCID(cid);
    let change = price - cash;
    if (change === 0) {
        return `status: "Closed",  change: ${totalCid}`
    }
    else if (change < totalCid) {
        return `status: "Open", change: `
    }
}

// console.log(checkCashRegister(20, 20,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
// ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
// ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(sumCID([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));