// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

//sol 2
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let newAddr = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newAddr += "[.]";
    } else {
      newAddr += address[i];
    }
  }
  return newAddr;
};
