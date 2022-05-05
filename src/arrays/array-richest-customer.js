/**
1672. Richest Customer Wealth
https://leetcode.com/problems/richest-customer-wealth/
 */

var maximumWealth = function (accounts) {
  let result = 0;

  accounts.reduce((acc, account) => {
    let value = account.reduce((counter, val) => (counter += val));
    result = Math.max(result, value);
  }, []);

  return result;
};

// solution #2
// var res = 0;
// for(var i =0;i<accounts.length;i++){
//     var temp = 0;
//     for(var j = 0;j<accounts[i].length;j++){
//         temp+=accounts[i][j];
//     }
//     res = Math.max(res,temp);
// }
// return res;
