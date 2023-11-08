var r = require("./562705.js");
var i = r ? r.prototype : undefined;
var a = i ? i.valueOf : undefined;
module.exports = function (e) {
  if (a) {
    return Object(a.call(e));
  } else {
    return {};
  }
};