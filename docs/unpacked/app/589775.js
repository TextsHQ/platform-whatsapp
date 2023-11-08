Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDisplayNameMixin = function (e) {
  const t = (0, i.attrString)(e, "display_name");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    displayName: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");