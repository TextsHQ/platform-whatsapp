Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAckMixin = function (e, t) {
  const n = (0, p.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const f = (0, d.attrStringFromReference)(t, ["to"]);
  if (!f.success) {
    return f;
  }
  const _ = (0, p.literal)(p.attrString, e, "from", f.value);
  if (!_.success) {
    return _;
  }
  const g = (0, p.literal)(p.attrString, e, "class", "message");
  if (!g.success) {
    return g;
  }
  const m = (0, d.attrStringFromReference)(t, ["id"]);
  if (!m.success) {
    return m;
  }
  const h = (0, p.literal)(p.attrString, e, "id", m.value);
  if (!h.success) {
    return h;
  }
  const y = (0, p.attrIntRange)(e, "t", 0, undefined);
  if (!y.success) {
    return y;
  }
  const E = (0, o.parseAckMessageEditMixin)(e);
  const S = (0, i.parseAckAdminEditMixin)(e);
  const v = (0, s.parseAckMessagePinMixin)(e);
  const T = (0, a.parseAckAdminRevokeMixin)(e);
  const M = (0, u.parseAckRevokeMixin)(e);
  const A = (0, l.parseAckPaidConversationMixin)(e);
  const b = (0, c.parseServerFrankingTagMixin)(e);
  return (0, r.makeResult)({
    class: g.value,
    t: y.value,
    ackMessageEditMixin: E.success ? E.value : null,
    ackAdminEditMixin: S.success ? S.value : null,
    ackMessagePinMixin: v.success ? v.value : null,
    ackAdminRevokeMixin: T.success ? T.value : null,
    ackRevokeMixin: M.success ? M.value : null,
    ackPaidConversationMixin: A.success ? A.value : null,
    serverFrankingTagMixin: b.success ? b.value : null
  });
};
var r = require("./135781.js");
var i = require("./795018.js");
var a = require("./626460.js");
var o = require("./604946.js");
var s = require("./289236.js");
var l = require("./259399.js");
var u = require("./921623.js");
var c = require("./668350.js");
var d = require("./591439.js");
var p = require("./686310.js");