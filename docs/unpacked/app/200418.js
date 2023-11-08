Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeletedSubscribedNewslettersId = o;
exports.parseDeletedSubscribedNewslettersMixin = function (e) {
  const t = (0, a.assertTag)(e, "deleted");
  if (!t.success) {
    return t;
  }
  const n = (0, a.mapChildrenWithTag)(e, "id", 0, 10000, o);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    id: n.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");
function o(e) {
  const t = (0, a.assertTag)(e, "id");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrNewsletterJid)(e, "jid");
  if (n.success) {
    return (0, r.makeResult)({
      jid: n.value
    });
  } else {
    return n;
  }
}