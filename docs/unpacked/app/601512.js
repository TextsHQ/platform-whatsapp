var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleVerifiedNameSync = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./391541.js");
var o = require("./485225.js");
var s = require("./830627.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return;
    }
    yield Promise.all(e.map(e => {
      let {
        id: t,
        verifiedName: {
          privacyMode: r
        }
      } = e;
      if (r == null) {
        return;
      }
      const i = require("./351053.js").ChatCollection.get(t);
      if (i != null && i.shouldAppearInList !== true) {
        return (0, o.handlePrivacyModeTransition)(t, r, {
          chat: i,
          bypassVerifiedNameUpdate: true
        });
      } else {
        return undefined;
      }
    }));
    const t = e.map(e => {
      let {
        id: t,
        verifiedName: {
          level: n,
          serial: r,
          name: i,
          isApi: a,
          isSmb: o,
          privacyMode: s
        }
      } = e;
      return {
        id: t.isLid() ? t.toString() : t.user,
        level: n,
        serial: r,
        name: i,
        isApi: a,
        isSmb: o,
        privacyMode: s ? {
          actualActors: s.actualActors,
          hostStorage: s.hostStorage,
          privacyModeTs: s.privacyModeTs
        } : null
      };
    });
    yield (0, s.getVerifiedBusinessNameTable)().bulkCreateOrReplace(t);
    yield (0, a.applyContactBusinessProps)();
  })).apply(this, arguments);
}