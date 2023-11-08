Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetBlockListResponseSuccessWithMismatch = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const i = (0, s.flattenedChildWithTag)(e, "list");
  if (!i.success) {
    return i;
  }
  const a = (0, o.attrStringFromReference)(t, ["to"]);
  if (!a.success) {
    return a;
  }
  const u = (0, s.literal)(s.attrString, e, "from", a.value);
  if (!u.success) {
    return u;
  }
  const c = (0, s.literal)(s.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const d = (0, o.attrStringFromReference)(t, ["id"]);
  if (!d.success) {
    return d;
  }
  const p = (0, s.literal)(s.attrString, e, "id", d.value);
  if (!p.success) {
    return p;
  }
  const f = (0, s.optional)(s.attrString, i.value, "dhash");
  if (!f.success) {
    return f;
  }
  const _ = (0, s.mapChildrenWithTag)(i.value, "item", 0, 64000, l);
  if (!_.success) {
    return _;
  }
  return (0, r.makeResult)({
    type: c.value,
    listDhash: f.value,
    listItem: _.value
  });
};
exports.parseGetBlockListResponseSuccessWithMismatchListItem = l;
var r = require("./135781.js");
var i = require("./358682.js");
var a = require("./568113.js");
var o = require("./591439.js");
var s = require("./686310.js");
function l(e) {
  const t = (0, s.assertTag)(e, "item");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseDisplayNameOrUsernameMixinGroup)(e);
  return (0, r.makeResult)({
    jid: n.value,
    displayNameOrUsernameMixinGroup: o.success ? o.value : null
  });
}