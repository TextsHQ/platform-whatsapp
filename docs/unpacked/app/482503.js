var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./12643.js");
var s = require("./525119.js");
var l = require("./434989.js");
var u = require("./459857.js");
var c = require("./669050.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    let n = e.id;
    if (n.isUser() && (0, s.isMatFullyEnabled)()) {
      const e = yield (0, a.getMatChatIncomingMessage)(n);
      n = (0, c.toUserWid)(e);
    }
    if (!(0, u.isMeAccount)(n)) {
      const r = l.PresenceCollection.get(n);
      if (r) {
        p(r, e);
        if (t) {
          r.set({
            stale: false
          });
        }
      }
    }
    return Promise.resolve();
  })).apply(this, arguments);
}
function p(e, t) {
  let r;
  let i = false;
  if (t.type === undefined) {
    t.type = e.chatstate.type || "unavailable";
  } else if (t.type === "idle") {
    i = true;
    t.type = e.isOnline ? "available" : "unavailable";
  }
  if (e.isGroup && t.type !== "available" && !i) {
    t.updateTime = Date.now();
  }
  if (e.isGroup) {
    const i = t.participant;
    if (i == null) {
      return;
    }
    const a = t.id;
    if (require("./351053.js").ChatCollection.get(a) == null) {
      return;
    }
    if (i.isLid() && (0, o.getPhoneNumber)(i) == null) {
      return;
    }
    t.id = i;
    t.participant = undefined;
    r = e.chatstates.gadd(t.id);
  } else {
    r = e.chatstate;
  }
  if (!(i && r.type !== "typing" && r.type !== "recording_audio")) {
    r.set(t);
  }
  if (r.expireTimerId) {
    self.clearTimeout(r.expireTimerId);
  }
  if (r.type === "typing" || r.type === "recording_audio") {
    r.expireTimerId = self.setTimeout(() => function (e, t) {
      const n = e.type;
      if (!(n !== "typing" && n !== "recording_audio")) {
        e.type = t.isOnline ? "available" : "unavailable";
      }
    }(r, e), 25000);
  } else {
    r.expireTimerId = undefined;
  }
  const a = e.forceDisplay || e.isOnline || e.isUser && !e.chatstate.deny;
  e.set({
    hasData: true,
    isSubscribed: true,
    forceDisplay: a
  });
}