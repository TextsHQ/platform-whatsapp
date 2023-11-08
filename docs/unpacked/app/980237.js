var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShortName = function (e) {
  if (e == null) {
    return null;
  }
  const [t] = e.split(/\s/);
  if (i.default.exec(t)) {
    return t;
  }
  __LOG__(2)`[short-name] unable to get short name for contact: ${e}`;
  return null;
};
var i = r(require("./704359.js"));