var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./287461.js");
var a = require("./642838.js");
var o = require("./660666.js");
var s = require("./235630.js");
var l = require("./714574.js");
var u = r(require("./629116.js"));
class c extends u.default {}
exports.default = c;
c.mutates = true;
c.mutate = (e, t) => {
  let {
    contact: n
  } = t;
  return `@${(0, s.pushNameCanBeUsed)(n) && (0, i.getABPropConfigValue)("elevated_push_names_v2_m2_enabled") ? (0, a.getFormattedNotifyName)((0, o.getNotifyName)(n), false).toString() : (0, l.getDisplayName)(n)}`;
};