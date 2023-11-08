Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroupSenderSignalSession = function (e, t, n) {
  return r.processSenderKeyDistributionMsg(e, t, n);
};
exports.createSignalSession = function (e, t) {
  var n;
  var i;
  var a;
  const o = {
    identity: new Uint8Array(e.identityKey),
    oneTimeKey: e.preKey && {
      id: (n = e.preKey) === null || n === undefined ? undefined : n.keyId,
      publicKey: ((i = e.preKey) === null || i === undefined ? undefined : i.publicKey) && new Uint8Array((a = e.preKey) === null || a === undefined ? undefined : a.publicKey)
    },
    regId: e.registrationId,
    signedKey: {
      id: e.signedPreKey.keyId,
      publicKey: new Uint8Array(e.signedPreKey.publicKey),
      signature: new Uint8Array(e.signedPreKey.signature)
    }
  };
  return r.createSignalSession(t, o);
};
exports.getRemoteRegId = function (e) {
  return r.getRemoteRegId(e).then(e => e == null ? undefined : e.regId);
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, o, s);
      } else {
        r[o] = e[o];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./130309.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}