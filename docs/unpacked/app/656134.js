var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareEphemeralityFields = function (e, t) {
  return (e == null ? undefined : e.duration) === (t == null ? undefined : t.duration) && (e == null ? undefined : e.settingTimestamp) === (t == null ? undefined : t.settingTimestamp) && (e == null ? undefined : e.initiator) === (t == null ? undefined : t.initiator);
};
exports.getDisappearingModeSettingForUser = s;
exports.getEphemeralDurationForUser = l;
exports.resolveDisappearingModeInitiatedByMe = f;
exports.resolveDisappearingModeInitiator = c;
exports.resolveDisappearingModeTrigger = p;
exports.resolveEphermalityDuration = u;
exports.resolveExistingChatDMSettings = function (e, t) {
  const n = _(e);
  if (n == null && t == null) {
    return null;
  }
  if (n != null && t == null) {
    return {
      duration: n.duration,
      settingTimestamp: n.settingTimestamp,
      initiator: n.initiator === o.DisappearingModeInitiator.InitiatedByMe ? o.DisappearingModeInitiator.ChangedInChat : n.initiator,
      disappearingModeTrigger: o.DisappearingModeTrigger.ChatSettings,
      initiatedByMe: n.initiator === o.DisappearingModeInitiator.InitiatedByMe
    };
  }
  if (n == null && t != null) {
    return {
      duration: t.duration,
      settingTimestamp: d(t.settingTimestamp),
      initiator: c(t.initiator),
      disappearingModeTrigger: p(t.disappearingModeTrigger),
      initiatedByMe: t.initiatedByMe
    };
  }
  var r;
  var a;
  if (n != null && t != null) {
    if (n.settingTimestamp > ((r = t.settingTimestamp) !== null && r !== undefined ? r : 0)) {
      return (0, i.default)({}, n);
    } else if (n.settingTimestamp < ((a = t.settingTimestamp) !== null && a !== undefined ? a : 0)) {
      return {
        duration: t.duration,
        settingTimestamp: d(t.settingTimestamp),
        initiator: c(t.initiator),
        disappearingModeTrigger: p(t.disappearingModeTrigger),
        initiatedByMe: t.initiatedByMe
      };
    } else {
      return (0, i.default)((0, i.default)({}, n), {}, {
        initiator: t.initiator === o.DisappearingModeInitiator.ChangedInChat ? o.DisappearingModeInitiator.ChangedInChat : n.initiator
      });
    }
  }
};
exports.resolveMessageEphemerality = _;
exports.resolveNewChatDMSettings = function (e, t) {
  var n;
  const r = l(e);
  const i = l(t);
  if (r == null && i == null) {
    __LOG__(2, undefined, undefined, undefined, ["DM", "DDM"])`[DMResolve] DM setting for chat is null`;
    return null;
  }
  let s;
  let u;
  if (r != null) {
    s = {
      duration: r,
      settingTimestamp: (0, a.unixTime)(),
      initiator: o.DisappearingModeInitiator.InitiatedByMe,
      disappearingModeTrigger: o.DisappearingModeTrigger.AccountSettings,
      initiatedByMe: true
    };
  }
  if (i != null) {
    u = {
      duration: i,
      settingTimestamp: (0, a.unixTime)(),
      initiator: o.DisappearingModeInitiator.InitiatedByOther,
      disappearingModeTrigger: o.DisappearingModeTrigger.AccountSettings,
      initiatedByMe: false
    };
  }
  if (s != null && u != null) {
    if (u.duration < s.duration) {
      return u;
    } else {
      return s;
    }
  }
  if ((n = s) !== null && n !== undefined) {
    return n;
  } else {
    return u;
  }
};
exports.resolveNewIncomingChatDMSettings = function (e, t) {
  __LOG__(2)`[DMResolve] resolving new incoming chat DM settings`;
  const n = _(e);
  const r = u(t);
  if (n == null && r === 0) {
    return null;
  }
  if (n != null && r === 0) {
    return {
      duration: n.duration,
      settingTimestamp: n.settingTimestamp,
      initiator: n.initiator === o.DisappearingModeInitiator.InitiatedByMe ? o.DisappearingModeInitiator.ChangedInChat : n.initiator,
      disappearingModeTrigger: n.disappearingModeTrigger,
      initiatedByMe: n.initiatedByMe
    };
  }
  if (n == null && r > 0) {
    return {
      duration: r,
      settingTimestamp: (0, a.unixTime)(),
      initiator: o.DisappearingModeInitiator.InitiatedByMe,
      disappearingModeTrigger: o.DisappearingModeTrigger.AccountSettings,
      initiatedByMe: true
    };
  }
  if (n != null && r > 0) {
    if (n.initiator === o.DisappearingModeInitiator.ChangedInChat || n.duration > 0 && n.duration < r) {
      let e = n.initiator;
      let t = n.initiatedByMe;
      if (e === o.DisappearingModeInitiator.InitiatedByMe) {
        e = o.DisappearingModeInitiator.ChangedInChat;
        t = true;
      }
      return {
        initiator: e,
        settingTimestamp: n.settingTimestamp,
        duration: n.duration,
        disappearingModeTrigger: n.disappearingModeTrigger,
        initiatedByMe: t
      };
    }
    if (r < n.duration) {
      return {
        duration: r,
        settingTimestamp: (0, a.unixTime)(),
        initiator: o.DisappearingModeInitiator.InitiatedByMe,
        disappearingModeTrigger: o.DisappearingModeTrigger.AccountSettings,
        initiatedByMe: true
      };
    } else {
      return (0, i.default)({}, n);
    }
  }
};
exports.resolveSettingTimestamp = d;
var i = r(require("../vendor/81109.js"));
var a = require("./632157.js");
var o = require("./448609.js");
function s(e) {
  if (!e) {
    __LOG__(2)`getDisappearingModeSettingForUser: empty contact`;
    return null;
  }
  const t = e.disappearingModeDuration;
  const n = e.disappearingModeSettingTimestamp;
  __LOG__(2, undefined, undefined, undefined, ["DM", "DDM"])`getDisappearingModeSettingForUser: disappearing mode setting fetched for ${e.id.toString()}: duration=${t} settingTimestamp=${n}`;
  if (t == null || t === 0) {
    return null;
  } else {
    return {
      duration: t,
      settingTimestamp: n != null ? n : 0
    };
  }
}
function l(e) {
  const t = s(e);
  if (t != null) {
    return t.duration;
  } else {
    return null;
  }
}
function u(e) {
  if (e != null) {
    return e;
  } else {
    return 0;
  }
}
function c(e) {
  if (e != null) {
    return e;
  } else {
    return o.DisappearingModeInitiator.ChangedInChat;
  }
}
function d(e) {
  if (e != null) {
    return e;
  } else {
    return (0, a.unixTime)();
  }
}
function p(e) {
  if (e != null) {
    return e;
  } else {
    return o.DisappearingModeTrigger.ChatSettings;
  }
}
function f(e, t) {
  const n = t === o.DisappearingModeInitiator.InitiatedByMe;
  if (e != null) {
    return e;
  } else {
    return n;
  }
}
function _(e) {
  if (e == null || e.duration == null && e.settingTimestamp == null && e.initiator == null) {
    return null;
  } else {
    return {
      duration: u(e.duration),
      settingTimestamp: d(e.settingTimestamp),
      initiator: c(e.initiator),
      disappearingModeTrigger: p(e.disappearingModeTrigger),
      initiatedByMe: f(e.initiatedByMe, e.initiator)
    };
  }
}