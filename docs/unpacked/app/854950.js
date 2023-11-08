Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUsernameMixin = function (e) {
  const t = (0, i.attrString)(e, "username");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    username: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");