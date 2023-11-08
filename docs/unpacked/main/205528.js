var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTailIcon = function (e) {
  const t = r.default.isRTL();
  if (e) {
    if (t) {
      return o.TailInIcon;
    } else {
      return l.TailOutIcon;
    }
  }
  if (t) {
    return l.TailOutIcon;
  } else {
    return o.TailInIcon;
  }
};
var r = a(require("../app/932325.js"));
var o = require("./29848.js");
var l = require("./720921.js");