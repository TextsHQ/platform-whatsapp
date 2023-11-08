var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetExperimentConfigResponseSuccess = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "props");
  if (!r.success) {
    return r;
  }
  const o = (0, l.optionalChildWithTag)(e, "erid", c);
  if (!o.success) {
    return o;
  }
  const d = (0, l.literal)(l.attrString, r.value, "protocol", "1");
  if (!d.success) {
    return d;
  }
  const p = (0, l.optional)(l.attrString, r.value, "ab_key");
  if (!p.success) {
    return p;
  }
  const f = (0, l.optional)(l.attrString, r.value, "hash");
  if (!f.success) {
    return f;
  }
  const _ = (0, l.optional)(l.attrIntRange, r.value, "refresh", 0, undefined);
  if (!_.success) {
    return _;
  }
  const g = (0, l.optional)(l.attrIntRange, r.value, "refresh_id", 0, undefined);
  if (!g.success) {
    return g;
  }
  const m = (0, s.parseIQResultResponseMixin)(e, t);
  if (!m.success) {
    return m;
  }
  const h = (0, l.mapChildrenWithTag)(r.value, "prop", 0, 1 / 0, u);
  if (!h.success) {
    return h;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    propsProtocol: d.value,
    propsAbKey: p.value,
    propsHash: f.value,
    propsRefresh: _.value,
    propsRefreshId: g.value
  }, m.value), {}, {
    erid: o.value,
    propsProp: h.value
  }));
};
exports.parseGetExperimentConfigResponseSuccessErid = c;
exports.parseGetExperimentConfigResponseSuccessPropsProp = u;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./463283.js");
var s = require("./130435.js");
var l = require("./686310.js");
function u(e) {
  const t = (0, l.assertTag)(e, "prop");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseExperimentOrSamplingConfigMixinGroup)(e);
  if (n.success) {
    return (0, a.makeResult)({
      experimentOrSamplingConfigMixinGroup: n.value
    });
  } else {
    return n;
  }
}
function c(e) {
  const t = (0, l.assertTag)(e, "erid");
  if (!t.success) {
    return t;
  }
  const n = (0, l.contentBytesRange)(e, 1, 100);
  if (n.success) {
    return (0, a.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}