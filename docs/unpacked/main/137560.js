var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    displayType: t,
    msg: n
  } = e;
  const {
    mediaData: a
  } = (0, i.useModelValues)(n, ["mediaData"]);
  if (a) {
    return l.default.createElement(r.default, {
      displayType: t,
      msg: n,
      mediaData: a
    });
  }
  return l.default.createElement(o.default, {
    msgs: [n.safe()],
    showForMessages: true,
    showForAddOns: true,
    displayType: t
  });
};
var r = a(require("./773597.js"));
var o = a(require("./906940.js"));
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");