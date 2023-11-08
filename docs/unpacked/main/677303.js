var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFailedString = function (e, t) {
  return s.fbt._({
    "*": "Couldn't add {participantNames}.",
    _1: "Couldn't add {participantNames}."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "3RhnyW"
  });
};
exports.addPartialFailedString = function () {
  return s.fbt._("Couldn't add some participants.", null, {
    hk: "2usrY"
  });
};
exports.addSuccessString = function (e, t) {
  return s.fbt._({
    "*": "You added {participantNames}.",
    _1: "You added {participantNames}."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "2rMx1u"
  });
};
exports.addingString = function (e, t) {
  return s.fbt._({
    "*": "Adding {participantNames}.",
    _1: "Adding {participantNames}."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "4kao6t"
  });
};
exports.demoteFailedString = function (e, t, n) {
  switch (n) {
    case 406:
      return s.fbt._("You can't dismiss {participant} as admin because they created this group.", [s.fbt._param("participant", e)], {
        hk: "iFF5D"
      });
    default:
      return s.fbt._({
        "*": "Removing {participantNames} as admins failed.",
        _1: "Removing {participantNames} as an admin failed."
      }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
        hk: "1AQo2z"
      });
  }
};
exports.demotePartialFailedString = function () {
  return s.fbt._("Couldn't remove some participants as an admin.", null, {
    hk: "IRRDJ"
  });
};
exports.demoteSuccessString = function (e, t) {
  return s.fbt._({
    "*": "{participantNames} are no longer group admins.",
    _1: "{participantNames} is no longer a group admin."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "2wOipY"
  });
};
exports.formatRemoveResult = function (e, t) {
  return c(e, m, h, g, t);
};
exports.formatResult = c;
exports.promoteFailedString = function (e, t) {
  return s.fbt._({
    "*": "Couldn't make {participantNames} admins.",
    _1: "Couldn't make {participantNames} an admin."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "21ub4m"
  });
};
exports.promotePartialFailedString = function () {
  return s.fbt._("Couldn't make some participants admin.", null, {
    hk: "4A8lPV"
  });
};
exports.promoteSuccessString = function (e, t) {
  return s.fbt._({
    "*": "{participantNames} are now group admins.",
    _1: "{participantNames} is now a group admin."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "3RqSCs"
  });
};
exports.removingString = function (e, t) {
  return s.fbt._({
    "*": "Removing {participantNames}.",
    _1: "Removing {participantNames}."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "2f4Quc"
  });
};
var r = require("../app/287461.js");
var o = require("../app/177938.js");
var l = require("../app/714574.js");
var i = a(require("../app/932325.js"));
var u = a(require("../app/124928.js"));
var s = require("../vendor/548360.js");
function c(e, t, n, a, l) {
  let i;
  if (e.status === 207) {
    const l = {};
    e.participants.forEach(e => {
      const t = e.userWid;
      if (!u.default.isWid(t)) {
        return;
      }
      const n = e.code;
      let a = n;
      if (n === "403") {
        return;
      }
      if (n === "207") {
        return;
      }
      if (n === "421" && (0, r.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        var i;
        var s;
        a = `${n}:${(i = (s = e.subCode) === null || s === undefined ? undefined : s.membershipApprovalRequestError) !== null && i !== undefined ? i : ""}`;
      }
      if (!l[a]) {
        l[a] = [];
      }
      const c = o.ContactCollection.get(t);
      if (c) {
        l[a].push(c);
      }
    });
    const s = [];
    for (const e in l) {
      const a = e.split(":");
      const r = a[0];
      const o = a[1] != null && a[1] !== "" ? parseInt(a[1], 10) : undefined;
      const i = d(t, n, p, parseInt(r, 10), o, l[e]);
      if (i) {
        s.push(i);
      }
    }
    i = s.length > 0 ? s.join("\n") : a();
  } else {
    i = d(t, n, f, e.status, undefined, l);
  }
  return i;
}
function d(e, t, n, a, r, o) {
  const u = o.map(e => (0, l.getFormattedShortName)(e)).join(i.default.t(54));
  const s = a === 200;
  const c = s ? e(u, o.length) : t(u, o.length, a);
  const d = s ? "" : n(a, r, o.length);
  return c.toString() + d.toString();
}
function f(e) {
  let t = "";
  switch (e) {
    case 403:
      t = " " + s.fbt._("You're not a participant.", null, {
        hk: "4GsI1U"
      }).toString();
      break;
    case 408:
      t = " " + i.default.t(6);
      break;
    case 404:
      t = " " + s.fbt._("This group has ended.", null, {
        hk: "C2izu"
      }).toString();
      break;
    case 429:
      t = " " + s.fbt._("You've added too many contacts to groups too quickly. Try again later.", null, {
        hk: "aTFA4"
      }).toString();
  }
  return t;
}
function p(e, t, n) {
  let a = "";
  switch (e) {
    case 401:
    case 406:
    case 409:
      break;
    case 404:
      a = " " + s.fbt._({
        "*": "They are no longer in this group.",
        _1: "They are no longer in this group."
      }, [s.fbt._plural(n)], {
        hk: "34VcLW"
      }).toString();
      break;
    case 408:
      a = " " + i.default.t(6, {
        _plural: n
      });
      break;
    case 419:
      a = " " + s.fbt._("The community is full.", null, {
        hk: "4gpeg"
      }).toString();
      break;
    case 421:
      if (!(0, r.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        break;
      }
      if (t == null) {
        a = " " + s.fbt._({
          "*": "Participants pending admin approval.",
          _1: "Participant pending admin approval."
        }, [s.fbt._plural(n)], {
          hk: "4p9Tml"
        }).toString();
      } else if (t === 304) {
        a = " " + s.fbt._("Already requested. Admin approval is pending.", null, {
          hk: "4utgDt"
        }).toString();
      }
      break;
    case 402:
      if (!(0, r.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        break;
      }
      a = " " + s.fbt._({
        "*": "Participants cannot be added because they were previously removed by an admin.",
        _1: "Participant cannot be added because they were previously removed by an admin."
      }, [s.fbt._plural(n)], {
        hk: "2dnrKc"
      }).toString();
      break;
    case 500:
      a = " " + s.fbt._("This group is full.", null, {
        hk: "27htUz"
      }).toString();
      break;
    default:
      a = " " + s.fbt._("Please try again.", null, {
        hk: "3S6IYT"
      }).toString();
  }
  return a;
}
function m(e, t) {
  return s.fbt._({
    "*": "You removed {participantNames}.",
    _1: "You removed {participantNames}."
  }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
    hk: "1ZfG0F"
  });
}
function h(e, t, n) {
  switch (n) {
    case 406:
      return s.fbt._("You can't remove {participant} because they created this group.", [s.fbt._param("participant", e)], {
        hk: "14z8Fr"
      });
    default:
      return s.fbt._({
        "*": "Couldn't remove {participantNames}.",
        _1: "Couldn't remove {participantNames}."
      }, [s.fbt._plural(t), s.fbt._param("participantNames", e)], {
        hk: "1TpAQ2"
      });
  }
}
function g() {
  return s.fbt._("Couldn't remove some participants.", null, {
    hk: "3N0fyq"
  });
}