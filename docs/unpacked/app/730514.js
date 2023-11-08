var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildEphemeralSystemMessage = M;
exports.formatEphemeralSetting = T;
exports.getDMUnsupportedSystemMessageText = function () {
  return y.fbt._("Disappearing messages are not supported in this chat. Your messages will not disappear.", null, {
    hk: "meF8R"
  });
};
exports.getDefaultDisappearingModeSystemMessageText = function (e) {
  let t;
  const {
    newDuration: n,
    initiatingUser: r
  } = S(e);
  if ((0, _.isMeAccount)((0, i.default)(r, "initiatingUser"))) {
    t = (0, c.getDisappearingModeYouStringKic)(n);
  } else {
    const e = s.ContactCollection.gadd((0, i.default)(r, "initiatingUser"));
    t = (0, c.getDisappearingModeOtherStringKic)(n, (0, d.getFormattedName)(e));
  }
  return t;
};
exports.getDisappearingMessageDurationString = v;
exports.getDisappearingModeUpdateSystemMessageText = function (e) {
  return T((0, f.unproxy)(e.unsafe()));
};
var i = r(require("./670983.js"));
var a = require("./287461.js");
var o = require("./738501.js");
var s = require("./177938.js");
var l = require("./660666.js");
var u = require("./784427.js");
var c = require("./896971.js");
var d = require("./714574.js");
var p = require("./163755.js");
var f = require("./163139.js");
var _ = require("./459857.js");
var g = r(require("./124928.js"));
var m = r(require("./556869.js"));
var h = r(require("./286816.js"));
var y = require("../vendor/548360.js");
function E(e) {
  const t = function (e) {
    if ((0, p.getChat)(e) != null) {
      const t = (0, p.getChat)(e).msgs;
      for (let n = t.indexOf(e) - 1; n >= 0; n--) {
        const e = t.at(n);
        if (e != null && e.type !== "debug" && (e.type !== "gp2" || e.subtype === "ephemeral")) {
          return e;
        }
      }
    }
  }(e);
  if (t != null) {
    if (t.ephemeralDuration != null && t.ephemeralDuration > 0) {
      return true;
    }
    if ((t.subtype === "ephemeral" || t.subtype === "disappearing_mode") && t.templateParams[0] != null && t.templateParams[0] !== "0") {
      return true;
    }
  }
  return false;
}
function S(e) {
  var t;
  let n;
  let r;
  if (e.templateParams.length) {
    r = parseInt(e.templateParams[0], 10);
    n = e.templateParams[1];
  } else {
    n = e.ephemeralSettingUser;
    r = e.ephemeralDuration;
  }
  if (r == null) {
    throw (0, m.default)("Duration cannot be null for DM notification");
  }
  return {
    newDuration: (t = r) !== null && t !== undefined ? t : 0,
    initiatingUser: n
  };
}
function v(e) {
  const {
    duration: t,
    unit: n
  } = (0, u.getDurationForString)(e);
  switch (n) {
    case u.DurationUnit.Seconds:
      return h.default._({
        "*": "{duration} seconds",
        _1: "1 second"
      }, [h.default._plural(t, "duration")], {
        hk: "3RDIoO"
      });
    case u.DurationUnit.Minutes:
      return h.default._({
        "*": "{duration} minutes",
        _1: "1 minute"
      }, [h.default._plural(t, "duration")], {
        hk: "2Wl5rC"
      });
    case u.DurationUnit.Hours:
      return h.default._({
        "*": "{duration} hours",
        _1: "1 hour"
      }, [h.default._plural(t, "duration")], {
        hk: "3CY8To"
      });
    case u.DurationUnit.Days:
      return h.default._({
        "*": "{duration} days",
        _1: "1 day"
      }, [h.default._plural(t, "duration")], {
        hk: "lPTvd"
      });
    case u.DurationUnit.Weeks:
      __LOG__(4, undefined, new Error())`getDisappearingMessageDurationString: Weeks are not an option for DM system messages`;
      return h.default._({
        "*": "{duration} weeks",
        _1: "1 week"
      }, [h.default._plural(t, "duration")], {
        hk: "4yJugG"
      });
  }
}
function T(e) {
  var t;
  let n = null;
  switch (e.type) {
    case "gp2":
    case "notification_template":
      n = S(e);
      break;
    case "protocol":
      n = function (e) {
        var t;
        let n;
        n = e.ephemeralSettingUser !== undefined ? e.ephemeralSettingUser : e.from;
        return {
          newDuration: (t = e.ephemeralDuration) !== null && t !== undefined ? t : 0,
          initiatingUser: n
        };
      }(e);
  }
  if (n == null) {
    __LOG__(4, undefined, new Error(), undefined, ["DM", "DDM"])`Cannot parse msg to build DM system message`;
    throw (0, m.default)("Cannot parse msg to build DM system message");
  }
  let r = null;
  r = n.newDuration ? E(e) ? "update" : "on" : "off";
  if (!(r !== "update" || (0, a.getABPropConfigValue)("dm_updated_system_message"))) {
    r = "on";
  }
  let i = null;
  const u = (0, _.isMePrimary)(n.initiatingUser);
  if (n.initiatingUser != null && !u) {
    const e = s.ContactCollection.gadd(n.initiatingUser);
    i = (0, l.getIsMyContact)(e) ? (0, d.getFormattedName)(e) : (0, d.getFormattedPhone)(e);
  }
  const c = (0, p.getMaybeChat)(e);
  const f = c && (0, o.shouldShowEphemeralSetting)(c) && (g.default.isUser(c.id) || ((t = c.groupMetadata) === null || t === undefined ? undefined : t.canSetEphemeralSetting()));
  return M({
    newDuration: n.newDuration,
    state: r,
    initiatorUsername: i,
    initiatorIsMe: u,
    userCanChange: f === true
  });
}
function M(e) {
  let {
    newDuration: t,
    state: n,
    initiatorUsername: r,
    initiatorIsMe: i,
    userCanChange: a
  } = e;
  const o = function (e) {
    let {
      initiatorUsername: t,
      initiatorIsMe: n,
      state: r
    } = e;
    if (n) {
      if (r === "update") {
        return y.fbt._("You updated the message timer.", null, {
          hk: "3wn0w3"
        });
      } else if (r === "on") {
        return y.fbt._("You turned on disappearing messages.", null, {
          hk: "17ILyS"
        });
      } else {
        return y.fbt._("You turned off disappearing messages.", null, {
          hk: "9Y4Od"
        });
      }
    } else if (t != null) {
      if (r === "update") {
        return y.fbt._("{name} updated the message timer.", [y.fbt._param("name", t)], {
          hk: "33eBtZ"
        });
      } else if (r === "on") {
        return y.fbt._("{name} turned on disappearing messages.", [y.fbt._param("name", t)], {
          hk: "2YKKMx"
        });
      } else {
        return y.fbt._("{name} turned off disappearing messages.", [y.fbt._param("name", t)], {
          hk: "IxVbR"
        });
      }
    } else if (r === "update") {
      return y.fbt._("The message timer was updated.", null, {
        hk: "4CXIwL"
      });
    } else if (r === "on") {
      return y.fbt._("Disappearing messages was turned on.", null, {
        hk: "194MxY"
      });
    } else {
      return y.fbt._("Disappearing messages was turned off.", null, {
        hk: "4kNeq8"
      });
    }
  }({
    initiatorUsername: r,
    initiatorIsMe: i,
    state: n
  });
  const s = y.fbt._("Click to change.", null, {
    hk: "9eQhS"
  });
  if (!t) {
    if (a !== true) {
      return o;
    } else {
      return y.fbt._("{dm-sm-event} {dm-sm-action}", [y.fbt._param("dm-sm-event", o), y.fbt._param("dm-sm-action", s)], {
        hk: "2B4tLE"
      });
    }
  }
  const l = function (e) {
    const t = v(e);
    return y.fbt._("New messages will disappear from this chat {dm-duration} after they're sent, except when kept.", [y.fbt._param("dm-duration", t)], {
      hk: "1DsFnE"
    });
  }(t);
  if (a !== true) {
    return y.fbt._("{dm-sm-event} {dm-sm-explanation}", [y.fbt._param("dm-sm-event", o), y.fbt._param("dm-sm-explanation", l)], {
      hk: "4uxqMl"
    });
  } else {
    return y.fbt._("{dm-sm-event} {dm-sm-explanation} {dm-sm-action}", [y.fbt._param("dm-sm-event", o), y.fbt._param("dm-sm-explanation", l), y.fbt._param("dm-sm-action", s)], {
      hk: "39w3Rm"
    });
  }
}