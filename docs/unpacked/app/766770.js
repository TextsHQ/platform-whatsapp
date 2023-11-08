var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = u.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.resolve("NO_ACK");
  }
  const {
    stanzaId: n,
    fromWid: r,
    callCreator: a,
    callId: l,
    isGroup: c,
    isVideo: d,
    t: p
  } = t.success;
  (0, s.default)(a, l, p, d, c);
  return Promise.resolve((0, i.wap)("ack", {
    to: (0, o.JID)(r),
    id: (0, i.CUSTOM_STRING)(n),
    class: "call",
    type: (0, i.CUSTOM_STRING)("offer_notice")
  }));
};
var i = require("./716358.js");
var a = require("./347387.js");
var o = require("./355813.js");
var s = r(require("./234900.js"));
var l = require("./854379.js");
const u = new a.WapParser("callOfferNoticeParser", e => {
  e.assertTag("call");
  const t = e.attrString("id");
  const n = (0, l.jidWithTypeToWid)(e.attrJidWithType("from"));
  const r = e.child("offer_notice");
  return {
    stanzaId: t,
    fromWid: n,
    callCreator: (0, l.deviceJidToDeviceWid)(r.attrDeviceJid("call-creator")),
    callId: r.attrString("call-id"),
    isGroup: r.attrString("type") === "group",
    isVideo: r.attrString("media") === "video",
    t: e.attrTime("t")
  };
});