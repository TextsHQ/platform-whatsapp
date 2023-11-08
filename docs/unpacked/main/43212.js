var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParticipantInfoText = function (e) {
  const t = e instanceof o.default ? e.map(e => e.contact) : e;
  if (t.length === 0) {
    return u.fbt._("None", null, {
      hk: "2pqAeF"
    });
  }
  const n = t.filter(e => (0, r.getIsMe)(e) || e.shortName).sort((e, t) => (0, r.getIsMe)(e) ? -1 : (0, r.getIsMe)(t) ? 1 : 0).slice(0, 3);
  const a = e.length - n.length;
  let s = "";
  if (n.length + a < 3) {
    n.forEach((e, t) => {
      const a = (0, r.getIsMe)(e) ? i.default._("You", null, {
        hk: "LtuSj"
      }).toString() : e.shortName;
      if (t === 0) {
        s += a;
      } else if (t === n.length - 1) {
        s += ` ${l.default.t(52)}${a}`;
      } else {
        s += `${l.default.t(54)}${a}`;
      }
    });
  } else {
    n.forEach((e, t) => {
      const n = (0, r.getIsMe)(e) ? i.default._("You", null, {
        hk: "LtuSj"
      }).toString() : e.shortName;
      s += t === 0 ? n : `${l.default.t(54)}${n}`;
    });
  }
  if (a === 0) {
    return u.fbt._("{participant-info-text}", [u.fbt._param("participant-info-text", s)], {
      hk: "3JQguL"
    });
  }
  if (n.length === 0) {
    s += u.fbt._({
      "*": "{unknown_participants_user} users",
      _1: "1 user"
    }, [u.fbt._plural(a, "unknown_participants_user")], {
      hk: "2g0vkd"
    }).toString();
  } else if (n.length === 1) {
    s = u.fbt._({
      "*": "{existing_name} & {unknown_participants_other} others",
      _1: "{existing_name} & 1 other"
    }, [u.fbt._plural(a, "unknown_participants_other"), u.fbt._param("existing_name", s)], {
      hk: "3sLtd6"
    }).toString();
  } else if (n.length > 1) {
    s += u.fbt._({
      "*": ", & {unknown_participants_other} others",
      _1: ", & 1 other"
    }, [u.fbt._plural(a, "unknown_participants_other")], {
      hk: "4bzObR"
    }).toString();
  }
  return u.fbt._("{participant-info-text}", [u.fbt._param("participant-info-text", s)], {
    hk: "3JQguL"
  });
};
var r = require("../app/660666.js");
var o = a(require("../app/492006.js"));
var l = a(require("../app/932325.js"));
var i = a(require("../app/286816.js"));
var u = require("../vendor/548360.js");
a(require("../vendor/667294.js"));