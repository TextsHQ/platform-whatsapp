var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgReceiptParser = exports.RECEIPT_TYPES_TO_ACK = exports.RECEIPT_TYPE = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./347387.js");
var o = require("./402994.js");
var s = require("./257845.js");
var l = require("./854379.js");
var u = require("./459857.js");
const c = {
  read: o.ACK.READ,
  played: o.ACK.PLAYED,
  inactive: o.ACK.INACTIVE,
  "server-error": o.ACK.CONTENT_GONE,
  sender: o.ACK.RECEIVED,
  "read-self": o.ACK.READ,
  "played-self": o.ACK.PLAYED,
  peer_msg: o.ACK.PEER
};
exports.RECEIPT_TYPES_TO_ACK = c;
const d = {
  SIMPLE: "simple",
  AGGREGATE: "aggregate"
};
exports.RECEIPT_TYPE = d;
const p = new a.WapParser("incomingMsgReceiptParser", e => {
  e.assertTag("receipt");
  if (e.hasAttr("to")) {
    e.assertAttr("to", (0, u.assertGetMe)().toJid());
  }
  const t = {
    ack: (e.hasAttr("type") ? e.attrEnumOrNullIfUnknown("type", c) : o.ACK.RECEIVED) || o.ACK.RECEIVED,
    stanzaId: e.attrString("id"),
    from: (0, l.jidWithTypeToWid)(e.attrJidWithType("from")),
    ackString: e.hasAttr("type") ? e.attrString("type") : null,
    offline: e.hasAttr("offline") ? e.attrString("offline") : null
  };
  const n = e.maybeChild("error");
  if (n != null && n.attrString("reason") === "lid" && n.attrString("type") === "feature-incapable") {
    t.ack = o.ACK.SENT;
  }
  const r = e.maybeChild("participants");
  if (r) {
    return function (e, t) {
      const n = t.mapChildrenWithTag("user", e => {
        try {
          const t = (0, l.deviceJidToDeviceWid)(e.attrDeviceJid("jid"));
          return {
            participant: t,
            ts: e.attrTime("t")
          };
        } catch (e) {
          return null;
        }
      }).filter(Boolean);
      return (0, i.default)((0, i.default)({}, e), {}, {
        type: d.AGGREGATE,
        externalId: t.attrString("key"),
        receipts: n
      });
    }(t, r);
  } else {
    return function (e, t) {
      const n = t.hasAttr("participant") ? (0, l.deviceJidToDeviceWid)(t.attrDeviceJid("participant")) : null;
      const r = t.hasAttr("recipient") ? (0, l.userJidToUserWid)(t.attrUserJid("recipient")) : null;
      const a = t.maybeAttrString("type") === "view";
      let o;
      let u;
      o = t.hasChild("list") ? t.child("list").mapChildrenWithTag("item", e => a ? e.attrString("server_id") : e.attrString("id")) : [];
      if (t.hasChild("biz")) {
        const e = t.child("biz");
        const n = s.ActualActorsEnumType.cast(e.maybeAttrInt("actual_actors"));
        const r = s.HostStorageEnumType.cast(e.maybeAttrInt("host_storage"));
        const i = e.maybeAttrInt("privacy_mode_ts");
        if (n != null && r != null && i != null) {
          u = {
            actualActors: n,
            hostStorage: r,
            privacyModeTs: i
          };
        }
      }
      if (!a) {
        o.push(e.stanzaId);
      }
      return (0, i.default)((0, i.default)({}, e), {}, {
        type: d.SIMPLE,
        externalIds: o,
        participant: n,
        recipient: r,
        ts: t.attrTime("t"),
        biz: u
      });
    }(t, e);
  }
});
exports.msgReceiptParser = p;