var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralStringType = undefined;
exports.getDisappearingMessageDurationString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.Duration, e);
};
exports.getDisappearingMessageExplanationString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.Explanation, e);
};
exports.getDisappearingMessageOutOfSyncInfoString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.OutOfSyncInfo, e);
};
exports.getDisappearingMessageSettingOthersAsAdminString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return u(i.SettingChangeByOthersAsAdmin, e, t);
};
exports.getDisappearingMessageSettingOthersString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return u(i.SettingChangeByOthers, e, t);
};
exports.getDisappearingMessageSettingUnknownAsAdminString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.SettingChangeByUnknownAsAdmin, e);
};
exports.getDisappearingMessageSettingUnknownString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.SettingChangeByUnknown, e);
};
exports.getDisappearingMessageSettingYouAsAdminString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.SettingChangeByYouAsAdmin, e);
};
exports.getDisappearingMessageSettingYouString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.SettingChangeByYou, e);
};
exports.getDisappearingModeOtherString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return u(i.ModeChangeByOthers, e, t);
};
exports.getDisappearingModeYouString = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return u(i.ModeChangeByYou, e);
};
var r = a(require("../app/932325.js"));
var o = require("../app/97858.js");
var l = require("../vendor/548360.js");
const i = require("../vendor/76672.js").Mirrored(["SettingChangeByOthers", "SettingChangeByYou", "SettingChangeByUnknown", "SettingChangeByOthersAsAdmin", "SettingChangeByYouAsAdmin", "SettingChangeByUnknownAsAdmin", "Duration", "OutOfSyncInfo", "Explanation", "ModeChangeByOthers", "ModeChangeByYou"]);
function u(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (t < 0) {
    __LOG__(4, undefined, new Error(), true)`getEphemeralString ${e} is given invalid duration ${t}`;
    SEND_LOGS("invalid-duration");
    return "";
  }
  if (t === 0) {
    return s(e, n);
  }
  if (t <= 60) {
    return c(e, t, n);
  }
  if (t <= 3600) {
    return d(e, Math.floor(t / 60), n);
  }
  if (t <= 86400) {
    return f(e, Math.floor(t / 60 / 60), n);
  }
  const a = Math.floor(t / 24 / 60 / 60);
  return p(e, a, n);
}
function s(e, t) {
  if (e === i.SettingChangeByOthers && t != null) {
    return l.fbt._("{name} turned off disappearing messages.", [l.fbt._param("name", t)], {
      hk: "3xqX8v"
    });
  } else if (e === i.SettingChangeByYou) {
    return l.fbt._("You turned off disappearing messages.", null, {
      hk: "CJJkP"
    });
  } else if (e === i.SettingChangeByUnknown) {
    return l.fbt._("Disappearing messages were turned off.", null, {
      hk: "2o9H09"
    });
  } else if (e === i.SettingChangeByOthersAsAdmin && t != null) {
    return l.fbt._("{name} turned off disappearing messages. Click to change.", [l.fbt._param("name", t)], {
      hk: "3JuC70"
    });
  } else if (e === i.SettingChangeByYouAsAdmin) {
    return l.fbt._("You turned off disappearing messages. Click to change.", null, {
      hk: "ULdpU"
    });
  } else if (e === i.SettingChangeByUnknownAsAdmin) {
    return l.fbt._("Disappearing messages were turned off. Click to change.", null, {
      hk: "1M6kFu"
    });
  } else if (e === i.Duration) {
    return l.fbt._("Off", null, {
      hk: "2oC0wl"
    });
  } else if (e === i.OutOfSyncInfo) {
    return l.fbt._("This message will not disappear from the chat. The sender may be on an old version of WhatsApp.", null, {
      hk: "2d4xYQ"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOffString is given invalid type ${e}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function c(e, t, n) {
  const a = (0, o.isDefaultDisappearingMessagesEnabled)();
  const u = r.default.n(t);
  if (e === i.SettingChangeByOthers && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they're sent.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 second after they're sent."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "4wVk4E"
    });
  } else if (e === i.SettingChangeByYou) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they're sent.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 second after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "fn4mk"
    });
  } else if (e === i.SettingChangeByUnknown) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} seconds after they're sent.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 second after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "3Jk6U6"
    });
  } else if (e === i.SettingChangeByOthersAsAdmin && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they're sent. Click to change.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 second after they're sent. Click to change."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "4aux0J"
    });
  } else if (e === i.SettingChangeByYouAsAdmin) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} seconds after they're sent. Click to change.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 second after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "xCb18"
    });
  } else if (e === i.SettingChangeByUnknownAsAdmin) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} seconds after they're sent. Click to change.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 second after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "3SOaU2"
    });
  } else if (e === i.Duration) {
    return l.fbt._({
      "*": "{number} seconds",
      _1: "1 second"
    }, [l.fbt._plural(t, "number")], {
      hk: "2iF6SE"
    });
  } else if (e === i.OutOfSyncInfo) {
    return l.fbt._({
      "*": "This message will disappear from this chat {number} seconds after it's sent.",
      _1: "This message will disappear from this chat 1 second after it's sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1Kb2PH"
    });
  } else if (e === i.Explanation) {
    return l.fbt._({
      "*": "All new messages will disappear from this chat {number} seconds after they're sent.",
      _1: "All new messages will disappear from this chat 1 second after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1d8Ucf"
    });
  } else if (e === i.ModeChangeByOthers) {
    if (a) {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they're sent. Click to set your own default timer.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 second after they're sent. Click to set your own default timer."
      }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
        hk: "3SWmFy"
      });
    } else {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they're sent. Click to learn more.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} second after they're sent. Click to learn more."
      }, [l.fbt._plural(t), l.fbt._param("name", n), l.fbt._param("number", u)], {
        hk: "2Uc2YK"
      });
    }
  } else if (e === i.ModeChangeByYou && a) {
    return l.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} seconds after they're sent. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 second after they're sent. Click to change your default timer."
    }, [l.fbt._plural(t, "number")], {
      hk: "2Qilmp"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnSecondsString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function d(e, t, n) {
  const a = (0, o.isDefaultDisappearingMessagesEnabled)();
  const u = r.default.n(t);
  if (e === i.SettingChangeByOthers && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they're sent.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 minute after they're sent."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "3HrONF"
    });
  } else if (e === i.SettingChangeByYou) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they're sent.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 minute after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1f2OAO"
    });
  } else if (e === i.SettingChangeByUnknown) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} minutes after they're sent.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 minute after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "3KzDq0"
    });
  } else if (e === i.SettingChangeByOthersAsAdmin && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they're sent. Click to change.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 minute after they're sent. Click to change."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "2TaKZp"
    });
  } else if (e === i.SettingChangeByYouAsAdmin) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} minutes after they're sent. Click to change.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 minute after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "b3Sn9"
    });
  } else if (e === i.SettingChangeByUnknownAsAdmin) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} minutes after they're sent. Click to change.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 minute after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "BahV4"
    });
  } else if (e === i.Duration) {
    return l.fbt._({
      "*": "{number} minutes",
      _1: "1 minute"
    }, [l.fbt._plural(t, "number")], {
      hk: "xLJV7"
    });
  } else if (e === i.OutOfSyncInfo) {
    return l.fbt._({
      "*": "This message will disappear from this chat {number} minutes after it's sent.",
      _1: "This message will disappear from this chat 1 minute after it's sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1m5VdN"
    });
  } else if (e === i.Explanation) {
    return l.fbt._({
      "*": "All new messages will disappear from this chat {number} minutes after they're sent.",
      _1: "All new messages will disappear from this chat 1 minute after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "3WcD8e"
    });
  } else if (e === i.ModeChangeByOthers) {
    if (a) {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they're sent. Click to set your own default timer.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 minute after they're sent. Click to set your own default timer."
      }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
        hk: "ibhrL"
      });
    } else {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they're sent. Click to learn more.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minute after they're sent. Click to learn more."
      }, [l.fbt._plural(t), l.fbt._param("name", n), l.fbt._param("number", u)], {
        hk: "gKSjB"
      });
    }
  } else if (e === i.ModeChangeByYou && a) {
    return l.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} minutes after they're sent. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 minute after they're sent. Click to change your default timer."
    }, [l.fbt._plural(t, "number")], {
      hk: "3R3Wfk"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnMinutesString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function f(e, t, n) {
  const a = (0, o.isDefaultDisappearingMessagesEnabled)();
  const u = r.default.n(t);
  if (e === i.SettingChangeByOthers && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} hours after they're sent.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 hour after they're sent."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "2nmnhV"
    });
  } else if (e === i.SettingChangeByYou) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} hours after they're sent.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 hour after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "QTexq"
    });
  } else if (e === i.SettingChangeByUnknown) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} hours after they're sent.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 hour after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "11Xw6d"
    });
  } else if (e === i.SettingChangeByOthersAsAdmin && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} hours after they're sent. Click to change.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 hour after they're sent. Click to change."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "2xfrQK"
    });
  } else if (e === i.SettingChangeByYouAsAdmin) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} hours after they're sent. Click to change.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 hour after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "2TaOlz"
    });
  } else if (e === i.SettingChangeByUnknownAsAdmin) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} hours after they're sent. Click to change.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 hour after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "8D0X6"
    });
  } else if (e === i.Duration) {
    return l.fbt._({
      "*": "{number} hours",
      _1: "1 hour"
    }, [l.fbt._plural(t, "number")], {
      hk: "2d5dJD"
    });
  } else if (e === i.OutOfSyncInfo) {
    return l.fbt._({
      "*": "This message will disappear from this chat {number} hours after it's sent.",
      _1: "This message will disappear from this chat 1 hour after it's sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1s8j4z"
    });
  } else if (e === i.Explanation) {
    return l.fbt._({
      "*": "All new messages will disappear from this chat {number} hours after they're sent.",
      _1: "All new messages will disappear from this chat 1 hour after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "3nBUif"
    });
  } else if (e === i.ModeChangeByOthers) {
    if (a) {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they're sent. Click to set your own default timer.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 hour after they're sent. Click to set your own default timer."
      }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
        hk: "2V2Gzq"
      });
    } else {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they're sent. Click to learn more.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hour after they're sent. Click to learn more."
      }, [l.fbt._plural(t), l.fbt._param("name", n), l.fbt._param("number", u)], {
        hk: "23XDdF"
      });
    }
  } else if (e === i.ModeChangeByYou && a) {
    return l.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} hours after they're sent. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 hour after they're sent. Click to change your default timer."
    }, [l.fbt._plural(t, "number")], {
      hk: "425gbB"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnHoursString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function p(e, t, n) {
  const a = (0, o.isDefaultDisappearingMessagesEnabled)();
  const u = r.default.n(t);
  if (e === i.SettingChangeByOthers && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} days after they're sent.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 day after they're sent."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "3VtoX3"
    });
  } else if (e === i.SettingChangeByYou) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} days after they're sent.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 day after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "OGAXI"
    });
  } else if (e === i.SettingChangeByUnknown) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} days after they're sent.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 day after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "35SsWA"
    });
  } else if (e === i.SettingChangeByOthersAsAdmin && n != null) {
    return l.fbt._({
      "*": "{name} turned on disappearing messages. All new messages will disappear from this chat {number} days after they're sent. Click to change.",
      _1: "{name} turned on disappearing messages. All new messages will disappear from this chat 1 day after they're sent. Click to change."
    }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
      hk: "2ZzLnT"
    });
  } else if (e === i.SettingChangeByYouAsAdmin) {
    return l.fbt._({
      "*": "You turned on disappearing messages. All new messages will disappear from this chat {number} days after they're sent. Click to change.",
      _1: "You turned on disappearing messages. All new messages will disappear from this chat 1 day after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "2hoAsL"
    });
  } else if (e === i.SettingChangeByUnknownAsAdmin) {
    return l.fbt._({
      "*": "Disappearing messages were turned on. All new messages will disappear from this chat {number} days after they're sent. Click to change.",
      _1: "Disappearing messages were turned on. All new messages will disappear from this chat 1 day after they're sent. Click to change."
    }, [l.fbt._plural(t, "number")], {
      hk: "37BqJ0"
    });
  } else if (e === i.Duration) {
    return l.fbt._({
      "*": "{number} days",
      _1: "1 day"
    }, [l.fbt._plural(t, "number")], {
      hk: "13zqCo"
    });
  } else if (e === i.OutOfSyncInfo) {
    return l.fbt._({
      "*": "This message will disappear from this chat {number} days after it's sent.",
      _1: "This message will disappear from this chat 1 day after it's sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "1tha0d"
    });
  } else if (e === i.Explanation) {
    return l.fbt._({
      "*": "All new messages will disappear from this chat {number} days after they're sent.",
      _1: "All new messages will disappear from this chat 1 day after they're sent."
    }, [l.fbt._plural(t, "number")], {
      hk: "31h9mI"
    });
  } else if (e === i.ModeChangeByOthers) {
    if (a) {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they're sent. Click to set your own default timer.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 day after they're sent. Click to set your own default timer."
      }, [l.fbt._plural(t, "number"), l.fbt._param("name", n)], {
        hk: "Vmtxb"
      });
    } else {
      return l.fbt._({
        "*": "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they're sent. Click to learn more.",
        _1: "{name} uses a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} day after they're sent. Click to learn more."
      }, [l.fbt._plural(t), l.fbt._param("name", n), l.fbt._param("number", u)], {
        hk: "1FCsDC"
      });
    }
  } else if (e === i.ModeChangeByYou && a) {
    return l.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat {number} days after they're sent. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. All new messages will disappear from this chat 1 day after they're sent. Click to change your default timer."
    }, [l.fbt._plural(t, "number")], {
      hk: "3TGIk6"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnDaysString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
exports.EphemeralStringType = i;