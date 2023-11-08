var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCOUNT_SYNC_TYPE = undefined;
exports.getAndUpdateProfilePicture = function () {
  const e = (0, a.default)(s.ProfilePicThumbCollection.get((0, h.getMeUser)()), "ProfilePicThumbCollection.get(getMeUser())");
  return s.ProfilePicThumbCollection.resyncPictures([e]);
};
exports.getDevices = function (e) {
  return (0, p.syncDeviceListJob)((0, h.getMePNandLIDWids)(), e, null);
};
exports.updateBlocklist = function () {
  return S.apply(this, arguments);
};
exports.updateDefaultDisappearingMode = function () {
  return v.apply(this, arguments);
};
exports.updatePrivacySettings = function () {
  return E.apply(this, arguments);
};
exports.updateTosState = function (e) {
  e.forEach(e => {
    _.TosManager.setState(e.id, e.state ? "ACCEPTED" : "NOT_ACCEPTED");
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./474596.js");
var s = require("./446474.js");
var l = require("./394190.js");
var u = require("./202506.js");
var c = require("./964907.js");
var d = require("./384464.js");
var p = require("./510607.js");
var f = require("./326169.js");
var _ = require("./87429.js");
var g = require("./622868.js");
var m = require("./757453.js");
var h = require("./459857.js");
const y = require("../vendor/76672.js")({
  BLOCKLIST: "blocklist",
  DEVICES: "devices",
  DISAPPEARING_MODE: "disappearing_mode",
  PICTURE: "picture",
  PRIVACY: "privacy",
  STATUS: "status",
  TOS: "tos",
  NOTICE: "notice",
  USER: "user",
  TEXT_STATUS: "text_status"
});
function E() {
  return (E = (0, i.default)(function* () {
    const e = yield (0, c.getPrivacy)();
    (0, m.setUserPrivacySettings)(e);
    const t = [d.PrivacyDisallowedListType.About, d.PrivacyDisallowedListType.GroupAdd, d.PrivacyDisallowedListType.LastSeen, d.PrivacyDisallowedListType.ProfilePicture];
    return {
      privacySettings: e,
      privacyDisallowedRows: yield (0, f.syncPrivacyDisallowedLists)(t)
    };
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    const e = yield (0, l.fetchAndUpdateBlocklist)();
    if (e.dhash) {
      o.BlocklistCollection.reset();
      if (e.wids.length) {
        o.BlocklistCollection.add(e.wids.map(e => ({
          id: e.wid
        })));
      }
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* () {
    const e = yield (0, u.queryDisappearingMode)();
    yield (0, g.updateDisappearingModeForContact)((0, h.getMaybeMeUser)(), e.duration, e.t);
  })).apply(this, arguments);
}
exports.ACCOUNT_SYNC_TYPE = y;