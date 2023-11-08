var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCall = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
r(require("./846870.js"));
var u = r(require("./766770.js"));
var c = require("./281802.js");
var d = require("./854379.js");
var p = require("./171612.js");
var f = require("./487837.js");
var _ = require("./459857.js");
var g = r(require("./850928.js"));
var m = r(require("./109037.js"));
var h = require("./549227.js");
var y = require("./669050.js");
var E = r(require("./556869.js"));
function S(e) {
  return h.TYPE[e.tag().toUpperCase()] || h.TYPE.NONE;
}
const v = new s.WapParser("callParser", e => {
  e.assertTag("call");
  const t = (0, d.jidWithTypeToWid)(e.attrJidWithType("from"));
  const n = e.mapFirstChild(e => e);
  if (n) {
    const r = n.attrString("call-id");
    const i = (0, d.jidWithTypeToWid)(n.attrJidWithType("call-creator"));
    const a = {
      call_id: r,
      call_creator: i,
      caller_pn: n.hasAttr("caller_pn") ? (0, d.jidWithTypeToWid)(n.attrJidWithType("caller_pn")) : null,
      peer_jid: t,
      peer_platform: e.hasAttr("platform") ? e.attrString("platform") : undefined,
      peer_app_version: e.hasAttr("version") ? e.attrString("version") : undefined,
      epoch_msec: e.hasAttr("t") ? String(e.attrInt("t") * 1000) : undefined,
      elapsed_msec: e.hasAttr("e") ? String(e.attrInt("e") * 1000) : undefined,
      is_offline: e.hasAttr("offline"),
      type: S(n),
      common: {
        call_id: r,
        peer_jid: t.toString(),
        type: String(S(n))
      },
      isVideoCall: n.hasChild("video"),
      isSilenced: n.hasChild("silence"),
      t: e.attrTime("t")
    };
    return {
      from: (0, d.jidWithTypeToWid)(e.attrJidWithType("from")),
      stanzaId: e.attrString("id"),
      payloadTag: n.tag(),
      message: a,
      callCreator: i
    };
  }
  throw (0, E.default)("Unrecognized call stanza");
});
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = v.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.resolve("NO_ACK");
    }
    const {
      callCreator: n,
      from: r,
      message: i,
      payloadTag: a,
      stanzaId: o
    } = t.success;
    const s = (0, l.wapNodeToVoipXml)(e);
    const d = {
      elapsed_msec: i.elapsed_msec,
      epoch_msec: i.epoch_msec,
      is_offline: i.is_offline,
      payload: s[2][0],
      peer_app_version: i.peer_app_version,
      peer_platform: i.peer_platform,
      peer_jid: i.peer_jid ? i.peer_jid.toString({
        legacy: true
      }) : undefined
    };
    const _ = i.caller_pn;
    if (n.isLid() && _ != null) {
      yield (0, f.createLidPnMappingsJob)([{
        lid: (0, y.toUserWid)(n),
        pn: (0, y.toUserWid)(_)
      }], !Boolean(d.is_offline));
    }
    const E = i.call_id;
    switch (i.type) {
      case h.TYPE.OFFER:
        M(r, o, E, n, i.type);
        if ((0, p.getDoNotDisturb)() && !g.default.isFocused) {
          __LOG__(2)`handleCall: ignoring incoming call offer because do not disturb mode is enabled or screen is locked`;
        } else {
          (0, c.handleIncomingCallOffer)(i, d);
        }
        return Promise.resolve("NO_ACK");
      case h.TYPE.ENC_REKEY:
        (0, c.handleIncomingEncRekey)(i, d).then(e => {
          let {
            shouldRetry: t,
            retryCount: a
          } = e;
          if (t) {
            (0, m.default)(o, i, a);
          } else {
            M(r, o, E, n, h.TYPE.ENC_REKEY);
          }
        });
        return Promise.resolve("NO_ACK");
      case h.TYPE.ACCEPT:
      case h.TYPE.REJECT:
        M(r, o, E, n, i.type);
        (0, c.handleIncomingSignalingMsg)(i, d);
        return Promise.resolve("NO_ACK");
      case h.TYPE.OFFER_NOTICE:
        return (0, u.default)(e);
      default:
        (0, c.handleIncomingSignalingMsg)(i, d);
        return Promise.resolve(A(r, o, a));
    }
  })).apply(this, arguments);
}
function M(e, t, n, r, i) {
  let s;
  switch (i) {
    case h.TYPE.OFFER:
      s = (0, o.wap)("offer", {
        "call-id": (0, o.CUSTOM_STRING)(n),
        "call-creator": (0, l.JID)(r)
      });
      break;
    case h.TYPE.ENC_REKEY:
      s = (0, o.wap)("enc_rekey", {
        "call-id": (0, o.CUSTOM_STRING)(n),
        "call-creator": (0, l.JID)(r)
      });
      break;
    case h.TYPE.ACCEPT:
      s = (0, o.wap)("accept", {
        "call-id": (0, o.CUSTOM_STRING)(n),
        "call-creator": (0, l.JID)(r)
      });
      break;
    case h.TYPE.REJECT:
      s = (0, o.wap)("reject", {
        "call-id": (0, o.CUSTOM_STRING)(n),
        "call-creator": (0, l.JID)(r)
      });
  }
  (0, a.deprecatedCastStanza)((0, o.wap)("receipt", {
    to: (0, l.JID)(e),
    id: (0, o.CUSTOM_STRING)(t),
    from: e.isLid() ? (0, l.JID)((0, _.getMaybeMeLidUser)()) : (0, l.JID)((0, _.getMaybeMeUser)())
  }, s));
}
function A(e, t, n) {
  return (0, o.wap)("ack", {
    to: (0, l.JID)(e),
    id: (0, o.CUSTOM_STRING)(t),
    class: "call",
    type: (0, o.MAYBE_CUSTOM_STRING)(n)
  });
}