var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genContactInfoCardMsg = function () {
  return _.apply(this, arguments);
};
exports.genDefaultDisappearingModeSystemMsg = function (e, t, n) {
  const r = n ? (0, c.getMeUser)() : e;
  if (r == null) {
    throw (0, p.default)(`Cannot set null initiator for DDM system message: ${e.toString()} / ${String(n)}`);
  }
  return f(e, {
    type: "notification_template",
    subtype: "disappearing_mode",
    templateParams: [],
    ephemeralDuration: t,
    ephemeralSettingUser: r
  });
};
exports.genDeviceNotificationMsg = function (e, t, n, r) {
  const i = (0, c.assertGetMe)();
  const a = new u.default({
    fromMe: t.equals((0, d.toUserWid)(i)),
    remote: e,
    id: u.default.newId_DEPRECATED()
  });
  const s = a.fromMe && n.includes(i.getDeviceId());
  return {
    id: a,
    t: (0, o.unixTime)(),
    type: "e2e_notification",
    subtype: "device",
    from: e,
    to: (0, d.toUserWid)(i),
    body: t.toString(),
    devicesAdded: n.length,
    devicesRemoved: r.length,
    isThisDeviceAdded: s
  };
};
exports.genDisappearingModeUnsupportedSystemMsg = function (e) {
  return f(e, {
    type: "notification_template",
    subtype: "disappearing_mode_unsupported",
    templateParams: []
  });
};
exports.genDisappearingModeUpdateSystemMsg = function (e, t, n) {
  return f(e, {
    type: "notification_template",
    subtype: "disappearing_mode_update",
    templateParams: [],
    ephemeralDuration: t,
    ephemeralSettingUser: n
  });
};
exports.genEncryptNotificationMsg = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "encrypt";
  return f(e, {
    type: "e2e_notification",
    subtype: t,
    templateParams: []
  });
};
exports.genNonE2ENotificationMsg = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return f(e, {
    type: "notification_template",
    subtype: t,
    templateParams: n
  });
};
exports.genNotificationMsg = f;
exports.genSecurityCodeNotificationMsg = function (e, t) {
  const n = (0, c.getMeUser)();
  return {
    id: new u.default({
      fromMe: t.equals(n),
      remote: e,
      id: u.default.newId_DEPRECATED()
    }),
    t: (0, o.unixTime)(),
    type: "e2e_notification",
    subtype: "identity",
    from: e,
    to: n,
    body: t.toString()
  };
};
exports.genUsernameChangeSystemMsg = function (e, t) {
  return f(e, {
    type: "notification_template",
    subtype: "change_username",
    templateParams: [t]
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./632157.js");
var s = require("./12643.js");
var l = require("./798202.js");
var u = r(require("./565754.js"));
var c = require("./459857.js");
var d = require("./669050.js");
var p = r(require("./556869.js"));
function f(e, t) {
  const n = (0, c.getMaybeMeLid)();
  const r = (0, c.getMeUser)();
  const i = new u.default({
    fromMe: (0, c.isMeAccount)(e),
    remote: e,
    id: u.default.newId_DEPRECATED()
  });
  return (0, a.default)({
    id: i,
    t: (0, o.unixTime)(),
    from: e,
    to: e.isLid() && n != null ? n : r
  }, t);
}
function _() {
  return (_ = (0, i.default)(function* (e, t) {
    if (!(0, l.supportsFMX)()) {
      return null;
    }
    if (t.isBiz && !(0, l.supportsFMXV2)() || !e.isUser() || t.isWASupportStartingChat || t.iAmStartingChat || t.isFromCTWA && (0, l.fmxCTWAKillSwitchEnabled)()) {
      return null;
    }
    if (e.isBot()) {
      return null;
    }
    if (yield (0, s.isAddressBookContact)(e.toJid())) {
      return null;
    } else {
      return f(e, {
        type: "notification_template",
        subtype: "contact_info_card",
        templateParams: [e]
      });
    }
  })).apply(this, arguments);
}