var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMuteExpiration = function (e) {
  const t = Number(e.mute.expiration);
  (0, c.updateChatTable)(e.id, {
    muteExpiration: t
  }).then(() => e.muteExpiration = t);
};
exports.updateMuteIsAutoMuted = function (e) {
  const t = Boolean(e.mute.isAutoMuted);
  (0, c.updateChatTable)(e.id, {
    isAutoMuted: t
  }).then(() => e.isAutoMuted = t);
};
exports.updateSortTime = function (e) {
  if (e.promises.updateSortTime) {
    return;
  }
  const t = new r();
  const n = t.signal;
  const i = (0, s.default)([n, e.getAbortController().signal], t => (0, o.delayMs)(0).then(() => {
    const t = (0, l.getLastTimestampMsg)(e);
    if (t) {
      e.t = t.t;
    } else if (!e.msgs.msgLoadState.noEarlierMsgs && !e.pendingMsgs) {
      return u.loadEarlierMsgs(e);
    }
  }).then(n => {
    if (t.aborted) {
      throw new a.AbortError();
    }
    if (n) {
      const t = (0, l.getLastTimestampMsg)(e);
      e.t = t ? t.t : undefined;
    }
  }).catch(() => {}).finally(() => {
    e.promises.updateSortTime = undefined;
  }));
  e.promises.updateSortTime = {
    promise: i,
    abortController: t
  };
};
var a = require("./898817.js");
var o = require("./8304.js");
var s = i(require("./60748.js"));
var l = require("./534422.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
}(require("./743643.js"));
var c = require("./840089.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}