var t = /\s/;
module.exports = function (e) {
  for (var n = e.length; n-- && t.test(e.charAt(n)););
  return n;
};