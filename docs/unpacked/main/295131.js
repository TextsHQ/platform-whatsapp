var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  const {
    paymentStatus: a,
    paymentTxnStatus: h,
    expiryTimestamp: g
  } = e;
  const [E, v] = (0, m.useState)(false);
  const _ = e => {
    if (e) {
      v(e.getBoundingClientRect().height > 20);
    }
  };
  const y = (0, r.classnamesConvertMeToStylexPlease)({
    [u.default.bubbleOut]: e.isSentByMe,
    [u.default.bubbleIn]: !e.isSentByMe
  });
  const C = h != null && h !== f.PaymentInfo$TxnStatus.UNKNOWN || a != null && a !== f.PaymentInfo$Status.UNKNOWN_STATUS;
  let b;
  if (e.hasCaption) {
    b = m.default.createElement("div", {
      ref: _
    }, m.default.createElement("div", null, m.default.createElement(d.default, {
      subtype: e.subtype,
      receiverJid: e.receiverJid
    })), m.default.createElement(c.default, {
      paymentStatus: a,
      paymentTxnStatus: h,
      expiryTimestamp: g
    }));
  } else if (C) {
    var M;
    b = m.default.createElement("div", {
      ref: _
    }, m.default.createElement("div", null, m.default.createElement(d.default, {
      subtype: e.subtype,
      receiverJid: e.receiverJid
    })), m.default.createElement(p.default, {
      msg: (M = e.msg) === null || M === undefined ? undefined : M.unsafe()
    }, m.default.createElement(c.default, {
      paymentStatus: a,
      paymentTxnStatus: h,
      expiryTimestamp: g
    })));
  } else {
    var S;
    b = m.default.createElement(p.default, {
      msg: (S = e.msg) === null || S === undefined ? undefined : S.unsafe()
    }, m.default.createElement("span", {
      ref: _
    }, m.default.createElement(d.default, {
      subtype: e.subtype,
      receiverJid: e.receiverJid
    })));
  }
  return m.default.createElement("div", {
    className: y
  }, m.default.createElement(l.default, {
    background: (t = e.msg) === null || t === undefined ? undefined : t.paymentBackground
  }, m.default.createElement(o.default, {
    currency: e.currency,
    amount1000: e.amount1000
  })), m.default.createElement("div", {
    className: u.default.body
  }, m.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [u.default.bodyIconMultiline]: E,
      [u.default.bodyIcon]: true
    })
  }, m.default.createElement(i.default, {
    currency: e.currency,
    subtype: e.subtype,
    paymentStatus: a,
    paymentTxnStatus: h
  })), m.default.createElement("div", {
    className: u.default.bodyText
  }, b)), ((n = e.msg) === null || n === undefined ? undefined : n.paymentNoteMsg) ? m.default.createElement(s.default, {
    msg: e.msg
  }) : null);
};
var r = require("../app/396574.js");
var o = a(require("./196031.js"));
var l = a(require("./744071.js"));
var i = a(require("./530556.js"));
var u = a(require("./210363.js"));
var s = a(require("./314644.js"));
var c = a(require("./4994.js"));
var d = a(require("./929810.js"));
var f = require("../app/968923.js");
var p = a(require("./809958.js"));
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}