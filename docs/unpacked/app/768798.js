var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAndUpdateContactPropertiesOnNewChat = function () {
  return d.apply(this, arguments);
};
exports.updateVerifiedInfo = u;
var i = r(require("../vendor/348926.js"));
var a = require("./782049.js");
var o = require("./359987.js");
var s = require("./485225.js");
var l = require("./803737.js");
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const {
      name: n,
      level: r,
      isApi: i,
      isSmb: l,
      serial: u,
      privacyMode: c
    } = t;
    if (c != null) {
      yield (0, s.handlePrivacyModeTransition)(e, c, {
        bypassVerifiedNameUpdate: true
      });
    }
    (0, o.frontendFireAndForget)("updateContactWithVerifiedName", {
      contactId: e,
      verifiedNameInfo: {
        id: e,
        name: n,
        level: r,
        isApi: i,
        isSmb: l,
        privacyMode: c
      }
    });
    yield (0, a.createOrUpdateVerifiedBusinessName)(e, {
      level: r,
      serial: u,
      name: n,
      isApi: i,
      isSmb: l,
      privacyMode: c ? {
        actualActors: c.actualActors,
        hostStorage: c.hostStorage,
        privacyModeTs: c.privacyModeTs
      } : null
    });
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = yield (0, l.queryWidExists)(e);
    if (t == null) {
      return;
    }
    const {
      bizInfo: n
    } = t;
    if (n) {
      yield u(e, n.verifiedName);
    }
  })).apply(this, arguments);
}