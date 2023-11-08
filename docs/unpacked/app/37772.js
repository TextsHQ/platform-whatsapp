Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantNotAddressableMixin = function (e) {
  const t = (0, i.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "addressable", "false");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    addressable: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");