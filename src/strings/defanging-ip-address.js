// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};
