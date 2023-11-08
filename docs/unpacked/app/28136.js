var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatReportToAdminNotification = function (e, t) {
  const n = t[0] && l.GroupSettingChangeSystemMessageToggleEnabled.cast(t[0].toString()) === l.GroupSettingChangeSystemMessageToggleEnabled.On;
  const r = t[1] && l.GroupSettingChangeSystemMessageIsAdmin.cast(t[1].toString()) === l.GroupSettingChangeSystemMessageIsAdmin.Admin;
  const f = (0, u.isMeAccount)(e);
  const _ = () => (0, a.openExternalLink)((0, o.getReportToAdminFaqUrl)());
  if (f) {
    const e = c.fbt._("You turned on send for admin review for this group. Click to change.", null, {
      hk: "1w4Wru"
    });
    const t = c.fbt._("You turned off send for admin review for this group. Click to change.", null, {
      hk: "1XmJCw"
    });
    if (n) {
      return e;
    } else {
      return t;
    }
  }
  if (e) {
    const t = (0, s.getFormattedName)(e, true);
    const a = c.fbt._("{author} turned on send for admin review for this group. Click to change.", [c.fbt._param("author", t)], {
      hk: "3NQhSt"
    });
    const o = c.fbt._("{author} turned off send for admin review for this group. Click to change.", [c.fbt._param("author", t)], {
      hk: "2vowpM"
    });
    const l = c.fbt._("{=m0}", [c.fbt._implicitParam("=m0", d.default.createElement(i.default, {
      onClick: _,
      xstyle: p.linkColor
    }, c.fbt._("{author} turned on send for admin review for this group. Click to learn more.", [c.fbt._param("author", t)], {
      hk: "znQcL"
    })))], {
      hk: "4ocNcs"
    });
    const u = c.fbt._("{=m0}", [c.fbt._implicitParam("=m0", d.default.createElement(i.default, {
      onClick: _,
      xstyle: p.linkColor
    }, c.fbt._("{author} turned off send for admin review for this group. Click to learn more.", [c.fbt._param("author", t)], {
      hk: "2ur6Tz"
    })))], {
      hk: "3mnx7S"
    });
    if (r) {
      if (n) {
        return a;
      } else {
        return o;
      }
    } else if (n) {
      return l;
    } else {
      return u;
    }
  }
  const g = c.fbt._("Send for admin review is turned on for this group. Click to change.", null, {
    hk: "pYlRw"
  });
  const m = c.fbt._("Send for admin review is turned off for this group. Click to change.", null, {
    hk: "1LHcOo"
  });
  const h = c.fbt._("{=m0}", [c.fbt._implicitParam("=m0", d.default.createElement(i.default, {
    onClick: _,
    xstyle: p.linkColor
  }, c.fbt._("Send for admin review is turned on for this group. Click to learn more.", null, {
    hk: "1l95rI"
  })))], {
    hk: "3KzNwk"
  });
  const y = c.fbt._("{=m0}", [c.fbt._implicitParam("=m0", d.default.createElement(i.default, {
    onClick: _,
    xstyle: p.linkColor
  }, c.fbt._("Send for admin review is turned off for this group. Click to learn more.", null, {
    hk: "1ZY84Y"
  })))], {
    hk: "3Q0vDY"
  });
  if (r) {
    if (n) {
      return g;
    } else {
      return m;
    }
  }
  if (n) {
    return h;
  } else {
    return y;
  }
};
var i = r(require("./196554.js"));
var a = require("./753233.js");
var o = require("./258105.js");
var s = require("./436355.js");
var l = require("./862159.js");
var u = require("./459857.js");
var c = require("../vendor/548360.js");
var d = r(require("../vendor/667294.js"));
r(require("./156720.js"));
const p = {
  linkColor: {
    color: "e7al1772"
  }
};