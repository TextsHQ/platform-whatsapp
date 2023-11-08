var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subgroupsMaxReached = function (e) {
  const t = (0, r.getParentGroupLinkLimit)();
  const n = e ? e.joinedSubgroups.length : 0;
  const a = e ? e.unjoinedSubgroups.length : 0;
  if (n + a >= t) {
    l.ModalManager.open(i.default.createElement(o.default, {
      maxSubgroups: t
    }));
    return true;
  }
  return false;
};
var r = require("../app/174834.js");
var o = a(require("./3586.js"));
var l = require("../app/114850.js");
var i = a(require("../vendor/667294.js"));