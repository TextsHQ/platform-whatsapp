Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetDescriptionRequest = function (e) {
  const {
    bodyArgs: t,
    descriptionId: n,
    descriptionPrev: s,
    hasDescriptionDeleteTrue: c
  } = e;
  return (0, l.mergeBaseSetGroupMixin)((0, o.smax)("iq", null, (0, o.smax)("description", {
    id: (0, a.OPTIONAL)(i.CUSTOM_STRING, n),
    prev: (0, a.OPTIONAL)(i.CUSTOM_STRING, s),
    delete: (0, a.OPTIONAL_LITERAL)("true", c)
  }, (0, r.OPTIONAL_CHILD)(u, t))), e);
};
exports.makeSetDescriptionRequestDescriptionBody = u;
var a = require("../app/93864.js");
var r = require("../app/974339.js");
var o = require("../app/758616.js");
var l = require("../app/667149.js");
var i = require("../app/716358.js");
function u(e) {
  const {
    bodyElementValue: t
  } = e;
  return (0, o.smax)("body", null, t);
}