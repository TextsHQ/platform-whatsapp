var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBotListResponseSuccessV2 = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(e, "bot");
  if (!r.success) {
    return r;
  }
  const o = (0, u.flattenedChildWithTag)(r.value, "default");
  if (!o.success) {
    return o;
  }
  const c = (0, u.literal)(u.attrString, r.value, "v", "2");
  if (!c.success) {
    return c;
  }
  const d = (0, l.attrUserJid)(o.value, "jid");
  if (!d.success) {
    return d;
  }
  const f = (0, s.parseIQResultResponseMixin)(e, t);
  if (!f.success) {
    return f;
  }
  const _ = (0, u.mapChildrenWithTag)(r.value, "section", 1, 1 / 0, p);
  if (!_.success) {
    return _;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    botV: c.value,
    botDefaultJid: d.value
  }, f.value), {}, {
    botSection: _.value
  }));
};
exports.parseBotListResponseSuccessV2BotSection = p;
exports.parseBotListResponseSuccessV2BotSectionBot = d;
exports.parseBotListResponseSuccessV2BotSectionBotTheme = c;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./738331.js");
var s = require("./864854.js");
var l = require("./568113.js");
var u = require("./686310.js");
function c(e) {
  const t = (0, u.assertTag)(e, "theme");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "background");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(e, "primary_text");
  if (!r.success) {
    return r;
  }
  const i = (0, u.flattenedChildWithTag)(e, "secondary_text");
  if (!i.success) {
    return i;
  }
  const s = (0, u.attrStringEnum)(e, "mode", o.ENUM_DARK_LIGHT);
  if (!s.success) {
    return s;
  }
  const l = (0, u.contentString)(n.value);
  if (!l.success) {
    return l;
  }
  const c = (0, u.contentString)(r.value);
  if (!c.success) {
    return c;
  }
  const d = (0, u.contentString)(i.value);
  if (d.success) {
    return (0, a.makeResult)({
      mode: s.value,
      backgroundElementValue: l.value,
      primaryTextElementValue: c.value,
      secondaryTextElementValue: d.value
    });
  } else {
    return d;
  }
}
function d(e) {
  const t = (0, u.assertTag)(e, "bot");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, u.attrString)(e, "persona_id");
  if (!r.success) {
    return r;
  }
  const i = (0, u.optional)(u.attrInt, e, "count");
  if (!i.success) {
    return i;
  }
  const o = (0, u.mapChildrenWithTag)(e, "theme", 0, 2, c);
  if (o.success) {
    return (0, a.makeResult)({
      jid: n.value,
      personaId: r.value,
      count: i.value,
      theme: o.value
    });
  } else {
    return o;
  }
}
function p(e) {
  const t = (0, u.assertTag)(e, "section");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrString)(e, "name");
  if (!n.success) {
    return n;
  }
  const r = (0, u.attrStringEnum)(e, "type", o.ENUM_ALL_CATEGORY_FEATURED);
  if (!r.success) {
    return r;
  }
  const i = (0, u.mapChildrenWithTag)(e, "bot", 0, 1 / 0, d);
  if (i.success) {
    return (0, a.makeResult)({
      name: n.value,
      type: r.value,
      bot: i.value
    });
  } else {
    return i;
  }
}