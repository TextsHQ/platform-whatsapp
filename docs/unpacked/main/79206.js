var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHighestAcks = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/402994.js");
var l = require("../app/241164.js");
function i() {
  return (i = (0, r.default)(function* (e) {
    let t = new Map();
    if (e.length === 1) {
      const n = yield l.MsgInfoCollection.find(e[0].id);
      t.set(e[0].id.toString(), n);
    } else {
      t = yield l.MsgInfoCollection.findManyAndUpdate(e.map(e => e.id));
    }
    const n = new Map();
    yield Promise.all(e.map(function () {
      var e = (0, r.default)(function* (e) {
        const a = t.get(e.id.toString());
        if (!a) {
          __LOG__(2)`getHighestAcks: no orphan ack found for ${e.id}`;
          return null;
        }
        let r = null;
        let l = null;
        if (a.playedRemaining === 0 && a.played.length !== 0) {
          l = o.ACK.PLAYED;
          r = a.played;
        } else if (a.readRemaining === 0 && a.read.length !== 0) {
          l = o.ACK.READ;
          r = a.read;
        } else if (a.deliveryRemaining === 0 && a.delivery.length !== 0) {
          l = o.ACK.RECEIVED;
          r = a.delivery;
        }
        if (l == null || r == null) {
          __LOG__(2)`getHighestAcks: orphan ack has 0 receipt for ${e.id}`;
          return null;
        }
        __LOG__(2)`getHighestAcks: orphan ack ${l} for ${e.id}`;
        n.set(e.id.toString(), {
          ack: l,
          t: Math.max(...r.map(e => e.t)),
          to: e.to,
          from: e.from
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    return n;
  })).apply(this, arguments);
}