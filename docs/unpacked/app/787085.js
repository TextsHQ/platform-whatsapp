Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLocalisationMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "localisation_metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "uid");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrString)(e, "translation_project");
  if (!o.success) {
    return o;
  }
  const s = (0, i.mapChildrenWithTag)(e, "parameter", 0, 20, a);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    uid: n.value,
    translationProject: o.value,
    parameter: s.value
  });
};
exports.parseLocalisationMetadataParameter = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "parameter");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "name");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(e, "value");
  if (a.success) {
    return (0, r.makeResult)({
      name: n.value,
      value: a.value
    });
  } else {
    return a;
  }
}