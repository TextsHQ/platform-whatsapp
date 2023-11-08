Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNamedSubjectMixin = function (e) {
  const t = (0, i.attrString)(e, "subject");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    subject: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");