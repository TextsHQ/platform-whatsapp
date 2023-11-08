var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n] = (0, u.useMsgValues)(t.id, [r.getMediaData]);
  if (n == null ? undefined : n.parsedVcards) {
    return i.default.createElement(l.StatusVcardIcon, null);
  } else {
    return i.default.createElement(o.StatusDocumentIcon, null);
  }
};
var r = require("../app/163755.js");
var o = require("./702567.js");
var l = require("./433029.js");
var i = a(require("../vendor/667294.js"));
var u = require("./871210.js");