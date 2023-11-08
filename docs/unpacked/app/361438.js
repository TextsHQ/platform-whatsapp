Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActionHandler = function (e) {
  if (i == null) {
    i = new Map((0, r.getConfig)().syncdActionHandlers().map(e => [e.action, e]));
  }
  return i.get(e);
};
exports.maxSupportedVersion = function () {
  if (a == null) {
    a = Math.max(...(0, r.getConfig)().syncdActionHandlers().map(e => e.version));
  }
  return a;
};
var r = require("./819416.js");
let i = null;
let a = null;