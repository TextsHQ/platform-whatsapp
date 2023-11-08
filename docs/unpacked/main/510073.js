var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMsgOtherAcks = function () {
  return f.apply(this, arguments);
};
exports.updateMsgPeerAcks = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./972441.js");
var l = require("../app/35234.js");
var i = require("../app/522841.js");
var u = require("../app/61113.js");
var s = a(require("../app/565754.js"));
var c = require("../app/525119.js");
var d = a(require("../app/124928.js"));
function f() {
  return (f = (0, r.default)(function* (e, t, n) {
    const a = [];
    e.forEach(function () {
      var e = (0, r.default)(function* (e) {
        const r = yield m(e);
        if (r) {
          a.push((0, o.updateMsgAck)(e, r, {
            from: r.from,
            to: r.to,
            ack: t,
            t: n
          }));
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    yield Promise.all(a);
  })).apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t, n) {
    const a = [];
    const l = [];
    e.forEach(function () {
      var e = (0, r.default)(function* (e) {
        const r = yield m(e);
        if (r) {
          l.push((0, o.updateMsgAck)(e, r, {
            from: r.from,
            to: r.to,
            ack: t,
            t: n
          }));
        } else {
          __LOG__(2)`updateMsgPeerAcks: no message found for incoming ack, with msgKey: ${e}`;
          if (!e.fromMe) {
            a.push(e);
          }
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    if (a.length > 0) {
      (0, i.updateOrphanPeerReceipt)(a, t, n);
    }
    yield Promise.all(l);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, r.default)(function* (e) {
    var t;
    let n = (t = u.MsgCollection.get(e)) !== null && t !== undefined ? t : u.MsgCollection.getByEditMsgKey(e);
    if (!n && (0, c.isMatFullyEnabled)() && e.remote.isUser()) {
      const t = yield (0, l.getMatChat)(e.remote);
      if (!d.default.equals(t, e.remote)) {
        const a = new s.default({
          fromMe: e.fromMe,
          remote: t,
          id: e.id
        });
        n = u.MsgCollection.get(a);
      }
    }
    return n;
  })).apply(this, arguments);
}