var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n, a, s] = (0, u.useMsgValues)(e.msg.id, [l.getType, l.getSubtype, l.getBody, l.getRecipients]);
  if (n === "create") {
    const e = parseInt(a, 10);
    return i.default.createElement(o.default, {
      id: 199,
      params: {
        count: e
      },
      plural: e,
      wrapInHiddenToken: true
    });
  }
  if (n === "add") {
    return i.default.createElement(o.default, {
      id: 190,
      params: {
        name: (0, r.getFormattedNames)(s, true)
      },
      plural: s.length,
      wrapInHiddenToken: true
    });
  }
  if (n === "remove") {
    return i.default.createElement(o.default, {
      id: 191,
      params: {
        name: (0, r.getFormattedNames)(s, true)
      },
      plural: s.length,
      wrapInHiddenToken: true
    });
  }
  return null;
};
var r = require("../app/436355.js");
var o = a(require("../app/825158.js"));
var l = require("../app/787742.js");
var i = a(require("../vendor/667294.js"));
var u = require("./871210.js");