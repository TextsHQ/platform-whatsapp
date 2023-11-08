var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelOrDeclinePaymentRequest = function () {
  return o.apply(this, arguments);
};
exports.fulfillPaymentRequest = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./422662.js");
function o() {
  return (o = (0, i.default)(function* (e) {
    const t = require("./61113.js").MsgCollection;
    const r = new t.constructor.model(e);
    const i = yield (0, a.processPaymentMessages)([r]);
    if (i) {
      i.forEach(n => {
        const r = t.get(n.id);
        if (r) {
          r.set(n, {
            merge: true
          });
        } else if (n.id === e.id.toString()) {
          e.type = n.type;
          e.templateParams = n.templateParams;
        }
      });
    }
  })).apply(this, arguments);
}
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = require("./61113.js").MsgCollection;
    const r = new t.constructor.model(e);
    const i = yield (0, a.processPaymentMessages)([r]);
    if (i) {
      i.forEach(e => {
        const n = t.get(e.id);
        if (n) {
          n.set(e, {
            merge: true
          });
        }
      });
    }
  })).apply(this, arguments);
}