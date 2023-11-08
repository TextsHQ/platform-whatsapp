var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disallowedRowsToLists = s;
exports.queryDisallowedLists = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./384464.js");
function o() {
  return (o = (0, i.default)(function* () {
    try {
      return s(yield (0, a.getPrivacyDisallowedListTable)().all());
    } catch (e) {
      __LOG__(4, true, new Error(), true)`privacy_settings_drawer: get all privacy disallowed lists failed`;
      SEND_LOGS("privacy_settings_drawer: get all privacy disallowed lists failed");
      return {
        about: null,
        groupadd: null,
        last: null,
        profile: null
      };
    }
  })).apply(this, arguments);
}
function s(e) {
  const t = {
    about: null,
    groupadd: null,
    last: null,
    profile: null
  };
  e.forEach(e => {
    switch (e.id) {
      case a.PrivacyDisallowedListType.About:
        return void (t.about = e);
      case a.PrivacyDisallowedListType.GroupAdd:
        return void (t.groupadd = e);
      case a.PrivacyDisallowedListType.LastSeen:
        return void (t.last = e);
      case a.PrivacyDisallowedListType.ProfilePicture:
        t.profile = e;
    }
  });
  return t;
}