Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseKeyDataMixin = function (e) {
  const t = (0, i.contentBytesRange)(e, 32, 32);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    elementValue: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");