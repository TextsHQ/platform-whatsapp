var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyContactBusinessProps = undefined;
exports.updateContactsWithVerifiedNames = d;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./782049.js");
var s = require("./817649.js");
var l = require("./177938.js");
var u = require("./257845.js");
var c = require("./669050.js");
function d(e, t) {
  const n = {};
  for (const t of e) {
    const {
      id: e
    } = t;
    n[e.user] = t;
  }
  for (const e of t) {
    const {
      id: t
    } = e;
    if (t.isBot()) {
      continue;
    }
    const r = n[t.user];
    const i = Boolean(r);
    const {
      level: a,
      name: o,
      isApi: l,
      isSmb: u,
      privacyMode: c
    } = r || {};
    const d = {
      isBusiness: i,
      isEnterprise: Boolean(l),
      isSmb: Boolean(u),
      verifiedLevel: (0, s.convertLevel)(a),
      verifiedName: o,
      privacyMode: c
    };
    e.set(d);
  }
}
const p = function () {
  var e = (0, i.default)(function* () {
    d((yield (0, o.getAllVerifiedNames)()).map(e => {
      let {
        id: t,
        name: n,
        level: r,
        isApi: i,
        isSmb: o,
        privacyMode: s
      } = e;
      return {
        id: (0, c.createUserWid)(t),
        name: n,
        level: r,
        isApi: i,
        isSmb: o,
        privacyMode: s ? {
          actualActors: (0, a.default)(u.ActualActorsEnumType.cast(s.actualActors), "ActualActorsEnumType.cast(privacyMode.actualActors)"),
          hostStorage: (0, a.default)(u.HostStorageEnumType.cast(s.hostStorage), "HostStorageEnumType.cast(privacyMode.hostStorage)"),
          privacyModeTs: s.privacyModeTs
        } : null
      };
    }), l.ContactCollection.toArray());
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.applyContactBusinessProps = p;