var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePrivacyModeTransition = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./782049.js");
var s = require("./359987.js");
var l = r(require("./200071.js"));
function u() {
  return (u = (0, i.default)(function* (e, t) {
    var n;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!e.isUserNotPSA() || e.isCAPISupportAccount()) {
      return;
    }
    const i = yield c(e, r.chat);
    if (i == null) {
      return;
    }
    if (i.isBusiness === false) {
      return;
    }
    if (i.privacyMode == null && t == null) {
      return;
    }
    if (i.privacyMode != null && t != null && i.privacyMode.privacyModeTs >= t.privacyModeTs) {
      return;
    }
    const {
      bypassVerifiedNameUpdate: a = false
    } = r;
    const u = {
      isBusiness: (n = i.isBusiness) !== null && n !== undefined && n,
      privacyMode: i.privacyMode
    };
    (0, s.frontendFireAndForget)("updateBusinessInfo", {
      contactId: e,
      businessInfo: {
        isBusiness: true,
        isEnterprise: true,
        privacyMode: t
      }
    });
    yield Promise.all([a ? null : (0, o.createOrUpdateVerifiedBusinessName)(e, {
      isApi: true,
      isSmb: false,
      privacyMode: t ? {
        actualActors: t.actualActors,
        hostStorage: t.hostStorage,
        privacyModeTs: t.privacyModeTs
      } : null
    }, o.VerifiedBusinessNameUpdateType.Merge), (0, l.default)(e, u, {
      isBusiness: true,
      privacyMode: t
    })]);
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (t != null) {
      const e = t.contact.isBusiness;
      return {
        isBusiness: e,
        privacyMode: e ? t.contact.privacyMode : null
      };
    }
    const [n, r] = yield Promise.all([(0, a.getChatRecord)(e), (0, o.getVerifiedBusinessNameRecord)(e)]);
    if (n == null) {
      return null;
    } else if (r == null) {
      return {
        isBusiness: false
      };
    } else {
      return {
        isBusiness: true,
        privacyMode: r.privacyMode == null ? null : (0, o.convertPrivacyModeFromStorageType)(r.privacyMode)
      };
    }
  })).apply(this, arguments);
}