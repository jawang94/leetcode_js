// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var count = 0;
  let myMap = new Map();
  for (var i = 0; i < emails.length; i++) {
    let split = emails[i].split("@");
    for (var j = 0; j < split[0].length; j++) {
      if (split[0][j] === "+") {
        split[0] = split[0].slice(0, j);
      } else if (split[0][j] === ".") {
        split[0] = split[0].slice(0, j) + split[0].slice(j + 1);
      }
    }
    let join = split[0] + split[1];
    if (myMap.has(join)) continue;
    else {
      myMap.set(join);
      count++;
    }
  }
  return count;
};
