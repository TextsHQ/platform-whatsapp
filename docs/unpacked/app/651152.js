var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = require("./418987.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./303754.js");
var c = require("./355813.js");
var d = require("./384766.js");
var p = require("./143130.js");
var f = require("./257845.js");
var _ = require("./61113.js");
var g = r(require("./565754.js"));
var m = require("./669050.js");
const h = new l.WapParser("incomingWAChatNotificationParser", e => {
  e.assertTag("notification");
  e.assertAttr("from", o.PSA_JID);
  const t = e.attrString("id");
  const n = e.attrTime("t");
  if (e.hasChild("messages")) {
    const r = e.child("messages");
    return {
      type: "messages",
      stanzaId: t,
      ts: n,
      campaignId: r.attrString("campaign_id"),
      messages: r.mapChildrenWithTag("message", e => {
        const t = e.attrString("id");
        let n;
        if (e.hasAttr("type")) {
          n = e.attrString("type") === "text" ? e : e.child("media");
        } else {
          n = e;
        }
        return {
          id: t,
          body: (0, a.uint8ArrayToBuffer)(n.contentBytes())
        };
      })
    };
  }
  const r = e.child("revoke");
  r.attrString("campaign_id");
  return {
    type: "revoke",
    stanzaId: t,
    ts: n,
    revokeMessageIds: r.mapChildrenWithTag("message", e => new g.default({
      fromMe: false,
      remote: (0, m.createWid)(o.PSA_JID),
      id: e.attrString("id")
    }).toString())
  };
});
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    const {
      campaignId: n,
      ts: r
    } = e;
    const {
      id: i,
      body: a
    } = t;
    const s = (0, m.createWid)(o.PSA_JID);
    const l = {
      type: f.MESSAGE_TYPE.OTHER_STATUS,
      externalId: i,
      ts: r,
      edit: -1,
      isHsm: false,
      count: null,
      chat: s,
      author: s,
      pushname: null,
      isDirect: false,
      campaignId: n
    };
    const c = {
      retryCount: 0,
      e2eType: u.CiphertextType.Msg,
      encMediaType: u.EncMediaType.Image,
      hideFail: false
    };
    yield (0, p.processDecryptedMessageProto)({
      decrypted: a,
      info: l,
      e2eInfo: c,
      bizInfo: {
        nativeFlowName: null,
        verifiedNameSerial: null,
        verifiedLevel: null,
        verifiedNameCert: null,
        privacyMode: null,
        campaignId: null
      },
      hsmInfo: null,
      isPadded: false
    });
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = h.parse(e);
    if (t.error) {
      __LOG__(2)`error while parsing: ${e.toString()}`;
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const {
      success: n
    } = t;
    const r = (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(n.stanzaId),
      class: "notification",
      type: "psa",
      to: (0, c.JID)((0, m.createWid)(o.PSA_JID))
    });
    switch (n.type) {
      case "revoke":
        {
          const {
            revokeMessageIds: e
          } = n;
          if (e.length > 0) {
            yield (0, d.removeMessagesFromHistory)(e);
            e.forEach(e => {
              const t = _.MsgCollection.get(e);
              if (t) {
                t.delete();
              }
            });
          }
          break;
        }
      default:
        n.type;
        yield Promise.all(n.messages.map(e => y(n, e)));
    }
    return r;
  })).apply(this, arguments);
}