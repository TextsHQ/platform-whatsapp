var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./44543.js"));
var a = r(require("./630792.js"));
var o = r(require("./473240.js"));
var s = r(require("./987267.js"));
var l = r(require("./179186.js"));
var u = r(require("./737666.js"));
var c = r(require("./706200.js"));
var d = r(require("./739837.js"));
var p = r(require("./995622.js"));
var f = r(require("./357417.js"));
var _ = r(require("./591086.js"));
var g = r(require("./792289.js"));
var m = r(require("./920697.js"));
var h = r(require("./696605.js"));
var y = r(require("./36919.js"));
var E = r(require("./933362.js"));
var S = r(require("./518366.js"));
var v = r(require("./915601.js"));
var T = r(require("./983670.js"));
var M = r(require("./785488.js"));
var A = r(require("./980648.js"));
var b = r(require("./743228.js"));
var C = r(require("./367206.js"));
var P = r(require("./920408.js"));
var O = r(require("./727272.js"));
var I = r(require("./95067.js"));
var R = r(require("./955490.js"));
var N = r(require("./849062.js"));
var D = r(require("./511395.js"));
var w = r(require("./715707.js"));
var L = r(require("./806307.js"));
var k = r(require("./68567.js"));
var G = r(require("./758681.js"));
var U = r(require("./850902.js"));
var x = r(require("./262475.js"));
var B = r(require("./429546.js"));
var F = r(require("./461499.js"));
var j = r(require("./387107.js"));
var Y = r(require("./423156.js"));
var K = r(require("./537579.js"));
var W = r(require("./564802.js"));
var V = r(require("./381555.js"));
var H = [{
  type: "audio",
  subtype: undefined,
  generateProtobuf: K.default
}, {
  type: "buttons_response",
  subtype: undefined,
  generateProtobuf: o.default
}, {
  type: "chat",
  subtype: "url",
  generateProtobuf: f.default
}, {
  type: "chat",
  subtype: undefined,
  generateProtobuf: l.default
}, {
  type: "ciphertext",
  subtype: undefined,
  generateProtobuf: null
}, {
  type: "comment",
  subtype: undefined,
  generateProtobuf: d.default
}, {
  type: "document",
  subtype: undefined,
  generateProtobuf: c.default
}, {
  type: "groups_v4_invite",
  subtype: undefined,
  generateProtobuf: _.default
}, {
  type: "hsm",
  subtype: undefined,
  generateProtobuf: g.default
}, {
  type: "image",
  subtype: undefined,
  generateProtobuf: m.default
}, {
  type: "interactive",
  subtype: undefined,
  generateProtobuf: h.default
}, {
  type: "interactive_response",
  subtype: undefined,
  generateProtobuf: y.default
}, {
  type: "keep_in_chat",
  subtype: undefined,
  generateProtobuf: E.default
}, {
  type: "list",
  subtype: undefined,
  generateProtobuf: S.default
}, {
  type: "list_response",
  subtype: undefined,
  generateProtobuf: v.default
}, {
  type: "location",
  subtype: undefined,
  generateProtobuf: T.default
}, {
  type: "multi_vcard",
  subtype: undefined,
  generateProtobuf: M.default
}, {
  type: "native_flow",
  subtype: undefined,
  generateProtobuf: A.default
}, {
  type: "notification_template",
  subtype: "contact_info_card",
  generateProtobuf: null
}, {
  type: "order",
  subtype: undefined,
  generateProtobuf: b.default
}, {
  type: "payment",
  subtype: "ciphertext",
  generateProtobuf: null
}, {
  type: "payment",
  subtype: "futureproof",
  generateProtobuf: null
}, {
  type: "payment",
  subtype: "invite",
  generateProtobuf: C.default
}, {
  type: "payment",
  subtype: "request",
  generateProtobuf: k.default
}, {
  type: "payment",
  subtype: "send",
  generateProtobuf: U.default
}, {
  type: "pin_message",
  subtype: undefined,
  generateProtobuf: P.default
}, {
  type: "poll_creation",
  subtype: undefined,
  generateProtobuf: j.default
}, {
  type: "poll_update",
  subtype: "poll_vote",
  generateProtobuf: Y.default
}, {
  type: "product",
  subtype: undefined,
  generateProtobuf: O.default
}, {
  type: "protocol",
  subtype: "admin_revoke",
  generateProtobuf: D.default
}, {
  type: "protocol",
  subtype: "bot_feedback",
  generateProtobuf: i.default
}, {
  type: "protocol",
  subtype: "bot_request_welcome",
  generateProtobuf: a.default
}, {
  type: "protocol",
  subtype: "ephemeral_setting",
  generateProtobuf: I.default
}, {
  type: "protocol",
  subtype: "ephemeral_sync_response",
  generateProtobuf: p.default
}, {
  type: "protocol",
  subtype: "history_sync_notification",
  generateProtobuf: R.default
}, {
  type: "protocol",
  subtype: "message_edit",
  generateProtobuf: N.default
}, {
  type: "protocol",
  subtype: "sender_revoke",
  generateProtobuf: D.default
}, {
  type: "protocol",
  subtype: "share_phone_number",
  generateProtobuf: w.default
}, {
  type: "ptt",
  subtype: undefined,
  generateProtobuf: K.default
}, {
  type: "ptv",
  subtype: undefined,
  generateProtobuf: F.default
}, {
  type: "reaction",
  subtype: undefined,
  generateProtobuf: W.default
}, {
  type: "reaction_enc",
  subtype: undefined,
  generateProtobuf: L.default
}, {
  type: "request_phone_number",
  subtype: undefined,
  generateProtobuf: G.default
}, {
  type: "revoked",
  subtype: "admin",
  generateProtobuf: null
}, {
  type: "revoked",
  subtype: "sender",
  generateProtobuf: null
}, {
  type: "sticker",
  subtype: undefined,
  generateProtobuf: V.default
}, {
  type: "template_button_reply",
  subtype: undefined,
  generateProtobuf: x.default
}, {
  type: "unknown",
  subtype: "payment_action_request_declined",
  generateProtobuf: u.default
}, {
  type: "unknown",
  subtype: "payment_transaction_request_cancelled",
  generateProtobuf: s.default
}, {
  type: "vcard",
  subtype: undefined,
  generateProtobuf: B.default
}, {
  type: "video",
  subtype: undefined,
  generateProtobuf: F.default
}];
exports.default = H;