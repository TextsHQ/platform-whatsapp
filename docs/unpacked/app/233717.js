var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = require("./418987.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./287461.js");
var c = require("./303754.js");
var d = require("./355813.js");
var p = require("./143130.js");
var f = require("./257845.js");
var _ = require("./854379.js");
var g = require("./510279.js");
var m = require("./669050.js");
const h = require("../vendor/76672.js")({
  Image: "image",
  Video: "video",
  Text: "text"
});
const y = new l.WapParser("incomingCampaignParser", e => {
  e.assertTag("notification");
  e.assertAttr("from", o.STATUS_JID);
  const t = e.attrString("id");
  const n = (0, _.userJidToUserWid)(e.attrUserJid("participant"));
  const r = e.attrTime("t");
  const i = e.child("campaign");
  const s = i.hasChild("revoke");
  const l = i.attrString("id");
  const u = i.maybeAttrInt("duration");
  const c = i.mapChildrenWithTag("message", e => {
    const t = e.child("media");
    t.attrEnumValues("mediatype", h.members());
    return {
      id: e.attrString("id"),
      ts: r,
      body: (0, a.uint8ArrayToBuffer)(t.contentBytes())
    };
  });
  return {
    participant: n,
    stanzaId: t,
    campaignId: l,
    campaignDuration: u,
    revoke: s,
    ts: r,
    messages: c
  };
});
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const {
      participant: n,
      campaignId: r,
      campaignDuration: i
    } = e;
    const {
      id: a,
      ts: s,
      body: l
    } = t;
    const u = {
      type: f.MESSAGE_TYPE.OTHER_STATUS,
      externalId: a,
      ts: s,
      edit: -1,
      isHsm: false,
      count: null,
      chat: (0, m.createWid)(o.STATUS_JID),
      author: n,
      pushname: null,
      isDirect: false,
      campaignId: r,
      campaignDuration: i
    };
    const d = {
      retryCount: 0,
      e2eType: c.CiphertextType.Msg,
      encMediaType: c.EncMediaType.Image,
      hideFail: false
    };
    yield (0, p.processDecryptedMessageProto)({
      decrypted: l,
      info: u,
      e2eInfo: d,
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
function v() {
  return (v = (0, i.default)(function* (e) {
    const t = y.parse(e);
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
      participant: (0, d.JID)(n.participant),
      class: "notification",
      type: "psa",
      to: (0, d.JID)((0, m.createWid)(o.STATUS_JID))
    });
    if ((0, u.getABPropConfigValue)("web_status_psa")) {
      if (n.revoke) {
        yield (0, g.revokeStatusPSA)(n.campaignId);
      } else {
        yield Promise.all(n.messages.map(e => E(n, e)));
      }
      return r;
    } else {
      return r;
    }
  })).apply(this, arguments);
}