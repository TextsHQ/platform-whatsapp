Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPnhCagInLimboState = function (e, t) {
  if (!(0, r.pnhCagBlockLidInLimbo)()) {
    return false;
  }
  if (!t.some(e => {
    let {
      id: t
    } = e;
    return t.isLid();
  })) {
    return false;
  }
  if (e.defaultSubgroup !== true) {
    return false;
  }
  return (e == null ? undefined : e.incognito) !== true;
};
var r = require("./97858.js");