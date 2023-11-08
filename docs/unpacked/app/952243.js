var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptEnc = function (e, t, n, r) {
  const {
    e2eType: u,
    ciphertext: c
  } = e;
  switch (u) {
    case i.CiphertextType.Skmsg:
      if (t.isGroup() || t.isBroadcast()) {
        if (n) {
          return s.Cipher.decryptGroupSignalProto(t, n, c);
        } else {
          return Promise.reject((0, l.default)(`['messaging'] decryptEnc: receive msg from ${t.toString()} without participant`));
        }
      } else {
        return Promise.reject((0, l.default)(`['messaging'] decryptEnc: Can not do skmsg for non group ${t.toString()}`));
      }
    case i.CiphertextType.Pkmsg:
    case i.CiphertextType.Msg:
      {
        const e = t.isUser() ? t : n;
        if (e) {
          return s.Cipher.decryptSignalProto(e, u, c);
        } else {
          return Promise.reject((0, l.default)(`['messaging'] decryptEnc: receive msg from ${t.toString()} without participant`));
        }
      }
    case i.CiphertextType.Msmsg:
      if ((0, a.isBotReceiveEnabled)()) {
        return (0, o.decryptMsmsgBotMessage)(c, r);
      } else {
        return Promise.reject((0, l.default)("[messaging] decryptEnc: Msmsg unsupported"));
      }
  }
};
var i = require("./303754.js");
var a = require("./354458.js");
var o = require("./941712.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./138706.js"));
var l = r(require("./556869.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}