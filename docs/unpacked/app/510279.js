var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revokeAllStatusPSA = function () {
  const e = o.StatusV3Collection.getPSAStatus();
  if (!e) {
    return Promise.resolve();
  }
  const t = e.msgs.map(e => e.id.toString());
  return s(e, t);
};
exports.revokeStatusPSA = function (e) {
  const t = o.StatusV3Collection.getPSAStatus();
  if (!t) {
    return Promise.resolve();
  }
  const n = t.msgs.filter(t => t.campaignId === e).map(e => e.id.toString());
  return s(t, n);
};
var i = r(require("../vendor/348926.js"));
var a = require("./420213.js");
var o = require("./657694.js");
function s() {
  return l.apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e, t) {
    if (t.length > 0) {
      e.revokeMsgs(t);
      yield (0, a.removeMessagesFromHistory)(t);
      __LOG__(2, undefined, undefined, undefined, ["revoke-status-psa"])`revokeStatusPSA completed`;
    }
  })).apply(this, arguments);
}