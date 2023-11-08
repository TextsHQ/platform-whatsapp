var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeviceWid = _;
exports.createDeviceWidFromDeviceListPk = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const [r, i = "c.us"] = e.split("@");
  if (n === true) {
    throw (0, c.default)("WAWebWidFactory: feature unsupported");
  }
  return f(r, i, t);
};
exports.createDeviceWidFromUserAndDevice = f;
exports.createHostedDeviceWid = p;
exports.createHostedDeviceWidFromUserAndDevice = function (e, t) {
  return p();
};
exports.createUserWid = g;
exports.createWid = d;
exports.createWidFromWidLike = function (e) {
  if (e instanceof l.default) {
    return e;
  }
  if (typeof e == "string") {
    return d(e);
  }
  return d(e._serialized);
};
exports.hostedDeviceWidToUserWid = function () {
  throw (0, c.default)("Wid factory feature unsupported");
};
exports.isWidlike = function (e) {
  if (!e) {
    return false;
  }
  if (l.default.isWid(e)) {
    return true;
  }
  if (e && typeof e == "object" && l.default.isWid(e._serialized)) {
    return true;
  }
  return false;
};
exports.toChatWid = function (e) {
  if (e.isUser()) {
    return m(e);
  }
  return e;
};
exports.toGroupWid = function (e) {
  if (e.isUser()) {
    throw (0, c.default)("toGroupWid: wid is a user wid");
  }
  return e;
};
exports.toNewsletterWid = function (e) {
  if (e.isNewsletter()) {
    return e;
  }
  throw (0, c.default)("toNewsletterWid: wid is not a newsletter wid");
};
exports.toUserWid = m;
exports.widFromSignalAddress = function (e) {
  const t = (0, a.isCryptoLibraryEnabled)() ? (0, s.getSignalLikeAddressName)(e) : self.libsignal.SignalProtocolAddress.fromString(e).getName();
  if (l.default.isLid(t) || l.default.isHosted(t)) {
    return d(t);
  } else {
    return d((0, o.toPhoneUserJid)(t));
  }
};
r(require("./670983.js"));
var i = require("./724976.js");
var a = require("./492917.js");
var o = require("./714443.js");
var s = require("./999821.js");
var l = r(require("./124928.js"));
var u = r(require("./306002.js"));
var c = r(require("./556869.js"));
function d(e) {
  let t;
  if (u.default === null || u.default === undefined ? undefined : u.default.cache) {
    t = u.default.cache[e];
    if (!t) {
      t = new l.default(e, {
        intentionallyUsePrivateConstructor: true
      });
      u.default.cache[e] = t;
    }
  } else {
    t = new l.default(e, {
      intentionallyUsePrivateConstructor: true
    });
  }
  return t;
}
function p() {
  throw (0, c.default)("createDeviceWidFromDeviceListPk: unsupported");
}
function f(e, t, n) {
  return _(`${e}:${n}@${t}`);
}
function _(e) {
  const t = d(e);
  if (!t.isUser()) {
    __LOG__(4, undefined, new Error())`createDeviceWid: ${e} is not a valid device jid with user domain`;
    throw (0, c.default)("createDeviceWid is called with invalid user string");
  }
  return t;
}
function g(e, t) {
  let n;
  if ((0, i.isString)(e) && (e.endsWith("@c.us") || e.endsWith("@s.whatsapp.net") || e.endsWith("@lid"))) {
    n = e;
  } else {
    n = `${e}@${t != null && t !== "hosted" ? t : "c.us"}`;
  }
  n = d(n);
  if (n.device == null || n.device === 0) {
    return n;
  }
  __LOG__(4, undefined, new Error())`createUserWid: ${e} is not a valid user jid`;
  throw (0, c.default)("createUserWid is called with invalid user string");
}
function m(e) {
  if (!e.isUser()) {
    throw (0, c.default)("asUserWid: wid is not a user wid");
  }
  if (e.device == null || e.device === 0) {
    return e;
  } else {
    return g(e.user, e.server);
  }
}