var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  let a;
  if (e) {
    a = (0, r.getFormattedName)(e, true);
  }
  if (n[0] && o.GroupSettingChangeSystemMessageToggleEnabled.cast(n[0].toString()) === o.GroupSettingChangeSystemMessageToggleEnabled.On) {
    if ((0, l.isMeAccount)(e)) {
      return i.fbt._("You changed this group's setting to allow all particpants to add others to this group. Click to change.", null, {
        hk: "3kVuEP"
      });
    } else if (t) {
      return i.fbt._("{author} changed this group's setting to allow all particpants to add others to this group. Click to change.", [i.fbt._param("author", a)], {
        hk: "2E2Mn9"
      });
    } else {
      return i.fbt._("{author} changed this group's setting to allow all particpants to add others to this group", [i.fbt._param("author", a)], {
        hk: "VfHDH"
      });
    }
  }
  if ((0, l.isMeAccount)(e)) {
    return i.fbt._("You changed this group's setting to allow only admins to add others to this group. Click to change.", null, {
      hk: "QVozD"
    });
  }
  if (t) {
    return i.fbt._("{author} changed this group's setting to allow only admins to add others to this group. Click to change.", [i.fbt._param("author", a)], {
      hk: "2BhZIi"
    });
  } else {
    return i.fbt._("{author} changed this group's setting to allow only admins to add others to this group", [i.fbt._param("author", a)], {
      hk: "1SJywX"
    });
  }
};
var r = require("../app/436355.js");
var o = require("../app/862159.js");
var l = require("../app/459857.js");
var i = require("../vendor/548360.js");
a(require("../vendor/667294.js"));