Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMyAddOnsResponseClientError = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseMyAddonsClientErrors)(e, t);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    myAddonsClientErrors: o.value
  });
};
var r = require("./135781.js");
var i = require("./12218.js");
var a = require("./686310.js");