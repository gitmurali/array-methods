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
