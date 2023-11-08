var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n;
  const r = t[0] && a.GroupSettingChangeSystemMessageToggleEnabled.cast(t[0].toString()) === a.GroupSettingChangeSystemMessageToggleEnabled.On;
  const s = Boolean((n = e.groupMetadata) === null || n === undefined ? undefined : n.participants.iAmAdmin());
  if (r) {
    if (s) {
      return o.fbt._("Everyone in this community can now add groups. Click to change.", null, {
        hk: "13jJVe"
      });
    } else {
      return o.fbt._("Everyone in this community can now add groups.", null, {
        hk: "4wk5V6"
      });
    }
  }
  if ((0, i.memberSuggestedGroupsEnabled)()) {
    if (s) {
      return o.fbt._("Only community admins can add groups. Members can suggest groups for admin approval. Click to change.", null, {
        hk: "8oX9G"
      });
    } else {
      return o.fbt._("Only community admins can add groups. Members can suggest groups for admin approval.", null, {
        hk: "3g9uoj"
      });
    }
  }
  if (s) {
    return o.fbt._("Only admins in this community can now add groups. Click to change.", null, {
      hk: "1Rx3vV"
    });
  } else {
    return o.fbt._("Only admins in this community can now add groups.", null, {
      hk: "oRNSc"
    });
  }
};
var i = require("./174834.js");
var a = require("./862159.js");
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));