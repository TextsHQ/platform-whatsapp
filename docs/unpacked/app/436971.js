var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./496964.js"));
var a = r(require("./679384.js"));
var o = r(require("./400017.js"));
var s = r(require("../vendor/667294.js"));
class l extends i.default {
  static jsx(e, t, n) {
    let {
      selectable: r = false,
      fromMe: i
    } = n;
    const {
      phone: a
    } = t;
    return s.default.createElement(o.default, {
      phoneNumber: a,
      selectable: r,
      fromMe: i
    });
  }
}
function u(e) {
  const {
    index: t,
    phone: n
  } = e;
  const r = t + n.length - 1;
  return [t, t, r, r, e];
}
exports.default = l;
l.format = false;
l.compatibility = true;
l.nestable = e => e !== a.default;
l.match = (e, t) => {
  if (!t) {
    return [];
  }
  const {
    phoneNumbers: n = []
  } = t;
  return n.map(u);
};