Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  if ((0, r.getIsSentByMe)(t)) {
    return (0, a.defaultFutureproofMsgText)(t);
  }
  return o.fbt._("A message in this chat was kept from disappearing.", null, {
    hk: "1gqzBa"
  });
};
var a = require("../app/824498.js");
var r = require("../app/787742.js");
var o = require("../vendor/548360.js");