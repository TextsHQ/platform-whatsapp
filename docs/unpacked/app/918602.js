var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndSendMsgToChat = function (e, t, r) {
  return function (e, t) {
    let r;
    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    const m = Promise.resolve(t).then(function () {
      var t = (0, a.default)(function* (t) {
        const a = require("./61113.js").MsgCollection;
        const o = (0, i.default)({}, t);
        const m = (0, h.getPrivacyModeFromModel)(e.id);
        if (m != null) {
          o.privacyModeWhenSent = m;
        }
        const {
          getAgentId: y
        } = require("./366202.js");
        o.agentId = y(o);
        const E = a.add(o)[0];
        if (E) {
          var S;
          E.wamMessageSendReporter = new p.MessageSendReporter(E);
          E.wamMessageSendPerfReporter = new d.MessageSendPerfReporter({
            chatWid: E.to,
            mediaType: E.getWamMediaType(),
            messageType: E.getWamMessageType()
          });
          r = yield (0, c.default)(E, e);
          if (!r) {
            const t = (0, u.getMaybeSystemMsgForOrderEphemeralExemption)(E, e);
            if (t) {
              r = [t];
            }
          }
          const t = r ? [...r, o] : [o];
          if (!((S = E.wamMessageSendPerfReporter) === null || S === undefined)) {
            S.startSavedStage();
          }
          return (0, f.storeMessages)(t, e.id).then(() => {
            var e;
            if (!((e = E.wamMessageSendPerfReporter) === null || e === undefined)) {
              e.postSavedStage();
            }
            if (E.type === g.MSG_TYPE.GROUPS_V4_INVITE) {
              const e = parseInt(E.inviteCodeExp, 10);
              return (0, require("./287708.js").revokeGroupInviteV4)(E.from.toString(), E.to.toString(), E.inviteGrp, e).then(() => (0, l.persistGroupInviteV4Msg)(E.id.toString(), {
                id: E.id.toString(),
                from: E.from.toString(),
                to: E.to.toString(),
                groupId: E.inviteGrp,
                expiration: e,
                expired: (0, s.unixTime)() >= e
              }));
            }
          }).then(() => E.waitForPrep().then(() => E));
        }
        throw new _.ModelCreateError("Msg", o);
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    const y = e.addQueue.enqueue(m).then(t => {
      var n;
      if (!((n = t.wamMessageSendPerfReporter) === null || n === undefined)) {
        n.startRenderedStage();
      }
      if (r) {
        e.msgs.add(r);
      }
      return e.msgs.add(t)[0];
    }).then(e => {
      var t;
      if (!((t = e.wamMessageSendPerfReporter) === null || t === undefined)) {
        t.postRenderedStage();
      }
      return e;
    });
    const E = o ? y.then(o).then(() => y) : y;
    const S = v(e, E);
    return [y, S];
  }((0, E.unproxy)(e), t, r);
};
exports.resendMsgToChat = function (e, t) {
  return v((0, E.unproxy)(e), t);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./775593.js");
var s = require("./632157.js");
var l = require("./144818.js");
var u = require("./319941.js");
var c = r(require("./143249.js"));
var d = require("./566509.js");
var p = require("./141797.js");
var f = require("./420213.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
}(require("./288057.js"));
var g = require("./373070.js");
var m = require("./899137.js");
var h = require("./872811.js");
var y = require("./387183.js");
var E = require("./163139.js");
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function v(e, t) {
  return (0, m.createNonPersistedJob)("sendMessage", (0, a.default)(function* () {
    const n = yield e.sendQueue.enqueue(t);
    return (0, y.sendMsgRecord)(n);
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
}