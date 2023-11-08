var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMsgInfo = function (e, t, n, r) {
  const s = (0, a.unproxy)(e);
  const l = s.id;
  if (o.default.isUser(l.remote)) {
    (function (e, t, n, r) {
      if (t === i.ACK.PLAYED) {
        if (!e.played.get(n)) {
          e.playedRemaining -= 1;
        }
        e.played.add({
          id: n,
          t: r
        });
      } else if (t === i.ACK.READ) {
        if (!e.read.get(n)) {
          e.readRemaining -= 1;
        }
        e.read.add({
          id: n,
          t: r
        });
      } else if (t === i.ACK.RECEIVED) {
        if (!e.delivery.get(n)) {
          e.deliveryRemaining -= 1;
        }
        e.delivery.add({
          id: n,
          t: r
        });
      }
    })(s, t, n, r);
  } else {
    (function (e, t, n, r) {
      var a;
      var o;
      let s = i.ACK.CLOCK;
      if (e.played.get(n)) {
        s = i.ACK.PLAYED;
      } else if (e.read.get(n)) {
        s = i.ACK.READ;
      } else if (e.delivery.get(n)) {
        s = i.ACK.RECEIVED;
      }
      if (t <= s) {
        return;
      }
      if (t > i.ACK.RECEIVED) {
        const t = e.delivery.get(n);
        if (t) {
          e.delivery.remove(t);
        } else {
          e.deliveryRemaining -= 1;
        }
      }
      if (t > i.ACK.READ) {
        const t = e.read.get(n);
        if (t) {
          e.read.remove(t);
        } else {
          e.readRemaining -= 1;
        }
      }
      if (t === i.ACK.READ && (e == null || (a = e.id) === null || a === undefined || (o = a.remote) === null || o === undefined ? undefined : o.isGroup()) && (n == null ? undefined : n.isBot())) {
        e.readRemaining += 1;
      }
      if (t === i.ACK.PLAYED) {
        if (!e.played.get(n)) {
          e.playedRemaining -= 1;
        }
        e.played.add({
          id: n,
          t: r
        });
      } else if (t === i.ACK.READ) {
        if (!e.read.get(n)) {
          e.readRemaining -= 1;
        }
        e.read.add({
          id: n,
          t: r
        });
      } else if (t === i.ACK.RECEIVED) {
        if (!e.delivery.get(n)) {
          e.deliveryRemaining -= 1;
        }
        e.delivery.add({
          id: n,
          t: r
        });
      }
    })(s, t, n, r);
  }
};
var i = require("./402994.js");
var a = require("./163139.js");
var o = r(require("./124928.js"));