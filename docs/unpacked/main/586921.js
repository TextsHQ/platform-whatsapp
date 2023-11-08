var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profilePhotoRemovedFilter = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/632157.js");
var l = require("./834322.js");
var i = require("./748860.js");
var u = require("../app/757453.js");
const s = {
  reason: "filtersRuleValidator:profilePhotoRemovedFilter: profile photo privacy setting is not all"
};
const c = {
  reason: "filtersRuleValidator:profilePhotoRemovedFilter: no timestamp found for last profile pic edit"
};
const d = {
  reason: "filtersRuleValidator:profilePhotoRemovedFilter: last profile pic edit is outside threshold"
};
const f = {
  reason: "filtersRuleValidator:profilePhotoRemovedFilter: threshold parameter not a valid number"
};
const p = {
  name: "whatsapp_user_has_removed_profile_photo_first_time",
  filter: (e, t) => {
    const n = (0, u.getLastProfilePicThumbUpdate)();
    if (n == null) {
      return c;
    }
    const a = (0, i.convertFilterParametersIntoMap)(t);
    const p = parseInt((0, r.default)(a.get("param"), "parameters.get('param')"), 10);
    if (Number.isNaN(p)) {
      return f;
    }
    if (!(0, o.isInFuture)((0, o.futureUnixTime)(p, (0, o.castToUnixTime)(n)))) {
      return d;
    }
    if ((0, u.getUserPrivacySettings)().profilePicture !== "all") {
      return s;
    } else {
      return l.RESULT_TRUE;
    }
  }
};
exports.profilePhotoRemovedFilter = p;