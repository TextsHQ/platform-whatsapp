Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  if ((0, a.getIsSentByMe)(t)) {
    return r.fbt._("To see reactions, restart WhatsApp on your computer. If you still do not see them, update your app.", null, {
      hk: "eNtuK"
    });
  }
  return r.fbt._("You received a reaction. Update your version of WhatsApp to see reactions.", null, {
    hk: "2TMRfc"
  });
};
var a = require("../app/787742.js");
var r = require("../vendor/548360.js");