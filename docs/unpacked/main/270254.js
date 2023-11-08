var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageStatusLabel = function (e) {
  let t;
  t = e < r.ACK.SENT ? o.fbt._("Pending", null, {
    hk: "3rTXIk"
  }) : e === r.ACK.SENT ? o.fbt._("Sent", null, {
    hk: "xgkjk"
  }) : e === r.ACK.RECEIVED ? o.fbt._("Delivered", null, {
    hk: "2VFqLn"
  }) : o.fbt._("Read", null, {
    hk: "45eIFk"
  });
  return t;
};
var r = require("../app/402994.js");
var o = require("../vendor/548360.js");
a(require("../vendor/667294.js"));