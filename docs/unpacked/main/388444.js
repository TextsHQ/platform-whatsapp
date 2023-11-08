var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privacyWebNameToServerName = function (e) {
  switch (e) {
    case "readReceipts":
      return "readreceipts";
    case "groupAdd":
      return "groupadd";
    case "profilePicture":
      return "profile";
    case "about":
      return "status";
    case "lastSeen":
      return "last";
    case "online":
      return "online";
    case "callAdd":
      return "calladd";
  }
};
exports.setPrivacyForOneCategory = function () {
  return h.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/670983.js"));
var i = require("../app/984330.js");
var u = require("../app/384464.js");
var s = require("./373842.js");
var c = require("../app/326169.js");
var d = require("../app/757453.js");
var f = a(require("../app/556869.js"));
function p(e) {
  switch (e) {
    case "readreceipts":
      return "readReceipts";
    case "groupadd":
      return "groupAdd";
    case "profile":
      return "profilePicture";
    case "status":
      return "about";
    case "last":
      return "lastSeen";
    case "online":
      return "online";
    case "calladd":
      return "callAdd";
  }
}
function m(e) {
  switch (e) {
    case "status":
      return u.PrivacyDisallowedListType.About;
    case "groupadd":
      return u.PrivacyDisallowedListType.GroupAdd;
    case "last":
      return u.PrivacyDisallowedListType.LastSeen;
    case "profile":
      return u.PrivacyDisallowedListType.ProfilePicture;
    default:
      throw (0, f.default)("castToPrivacyDisallowedListType: invalid name");
  }
}
function h() {
  return (h = (0, o.default)(function* (e, t) {
    const n = yield (0, s.setPrivacy)([e]);
    if (n.length !== 1) {
      throw (0, f.default)("setPrivacy should return one response");
    }
    const a = n[0];
    if (a instanceof i.ServerStatusCodeError) {
      if (a.statusCode === 409 && e.value === "contact_blacklist") {
        yield (0, c.syncSinglePrivacyDisallowedList)(m(e.name));
      }
      throw a;
    }
    const {
      name: o,
      value: h
    } = e;
    const g = p(o);
    (0, d.setUserPrivacySettings)((0, r.default)((0, r.default)({}, (0, d.getUserPrivacySettings)()), {}, {
      [g]: h
    }));
    if (h === "contact_blacklist") {
      const e = {
        id: m(o),
        disallowedList: (0, l.default)(t, "contactExceptList").map(e => e.toString()),
        dhash: (0, l.default)(a.dhash, "response.dhash")
      };
      yield (0, u.getPrivacyDisallowedListTable)().createOrReplace(e);
    }
  })).apply(this, arguments);
}