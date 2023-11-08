Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDedupAttrsMixin = function (e) {
  const t = (0, a.attrString)(e, "key");
  if (!t.success) {
    return t;
  }
  const n = (0, a.optional)(a.attrStringEnum, e, "create_ctx", i.ENUM_E2EEMIGRATION_REGULAR_RTC);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    key: t.value,
    createCtx: n.value
  });
};
var r = require("./135781.js");
var i = require("./699342.js");
var a = require("./686310.js");