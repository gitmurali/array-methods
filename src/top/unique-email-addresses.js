// https://leetcode.com/problems/unique-email-addresses/
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let map = [];
  for (const email of emails) {
    const d = email.split("@");
    let localName = d[0].replaceAll(".", "");
    localName =
      localName.indexOf("+") !== -1
        ? localName.slice(0, localName.indexOf("+"))
        : localName.slice(0);
    map = [...map, localName + "@" + d[1]];
  }

  return new Set(map).size;
};
