var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeNewsletterMessageAddOns = function (e) {
  const t = (0, i.getAddOnsFromMessages)(e);
  return (0, s.createNonPersistedJob)("storeNewsletterMessageAddOns", (0, r.default)(function* () {
    const e = Object.entries(t).map(e => {
      let [n] = e;
      return (0, c[n])(t[n]);
    });
    yield Promise.all(e);
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/978925.js");
var i = require("./22636.js");
var u = require("../app/257741.js");
var s = require("../app/899137.js");
const c = {
  reactions: e => {
    const t = e.map(u.mapFrontendReactionToBackend);
    return (0, l.createOrUpdateNewsletterReactions)(t);
  }
};