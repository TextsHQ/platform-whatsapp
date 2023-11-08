var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralStringType = undefined;
exports.getDisappearingMessageDurationStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.Duration, e);
};
exports.getDisappearingMessageExplanationStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.Explanation, e);
};
exports.getDisappearingMessageOutOfSyncInfoStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.OutOfSyncInfo, e);
};
exports.getDisappearingMessageSettingOthersAsAdminGroupStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return h(c.SettingChangeByOthersAsAdmin, e, t);
};
exports.getDisappearingMessageSettingOthersAsAdminStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return d(c.SettingChangeByOthersAsAdmin, e, t);
};
exports.getDisappearingMessageSettingOthersGroupStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return h(c.SettingChangeByOthers, e, t);
};
exports.getDisappearingMessageSettingOthersStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return d(c.SettingChangeByOthers, e, t);
};
exports.getDisappearingMessageSettingUnknownAsAdminStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.SettingChangeByUnknownAsAdmin, e);
};
exports.getDisappearingMessageSettingUnknownStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.SettingChangeByUnknown, e);
};
exports.getDisappearingMessageSettingYouAsAdminStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.SettingChangeByYouAsAdmin, e);
};
exports.getDisappearingMessageSettingYouStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.SettingChangeByYou, e);
};
exports.getDisappearingModeOtherStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = arguments.length > 1 ? arguments[1] : undefined;
  return d(c.ModeChangeByOthers, e, t);
};
exports.getDisappearingModeYouStringKic = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return d(c.ModeChangeByYou, e);
};
exports.getKeptByString = function (e) {
  const t = i.ContactCollection.assertGet(e);
  if ((0, a.getIsMe)(t)) {
    return u.fbt._("Kept by You", null, {
      hk: "2cgwzF"
    });
  }
  const n = (0, a.getIsMyContact)(t) ? (0, o.getFormattedName)(t) : (0, l.widToFormattedUser)(e);
  return u.fbt._("Kept by {person-name}", [u.fbt._param("person-name", n)], {
    hk: "4jCayt"
  });
};
var i = require("./177938.js");
var a = require("./660666.js");
var o = require("./714574.js");
var s = require("./97858.js");
var l = require("./931019.js");
var u = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
const c = require("../vendor/76672.js").Mirrored(["SettingChangeByOthers", "SettingChangeByYou", "SettingChangeByUnknown", "SettingChangeByOthersAsAdmin", "SettingChangeByYouAsAdmin", "SettingChangeByUnknownAsAdmin", "Duration", "OutOfSyncInfo", "Explanation", "ModeChangeByOthers", "ModeChangeByYou"]);
function d(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (t < 0) {
    __LOG__(4, undefined, new Error(), true)`getEphemeralString ${e} is given invalid duration ${t}`;
    SEND_LOGS("invalid-duration");
    return "";
  }
  if (t === 0) {
    return p(e, n);
  }
  if (t <= 60) {
    return f(e, t, n);
  }
  if (t <= 3600) {
    return _(e, Math.floor(t / 60), n);
  }
  if (t <= 86400) {
    return g(e, Math.floor(t / 60 / 60), n);
  }
  const r = Math.floor(t / 24 / 60 / 60);
  return m(e, r, n);
}
function p(e, t) {
  if (e === c.SettingChangeByOthers && t != null) {
    return u.fbt._("{person-name} turned off disappearing messages.", [u.fbt._param("person-name", t)], {
      hk: "XO892"
    });
  } else if (e === c.SettingChangeByYou) {
    return u.fbt._("You turned off disappearing messages.", null, {
      hk: "9TMbp"
    });
  } else if (e === c.SettingChangeByUnknown) {
    return u.fbt._("Disappearing messages were turned off.", null, {
      hk: "3IBeCD"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && t != null) {
    return u.fbt._("{person-name} turned off disappearing messages. Click to change.", [u.fbt._param("person-name", t)], {
      hk: "su743"
    });
  } else if (e === c.SettingChangeByYouAsAdmin) {
    return u.fbt._("You turned off disappearing messages. Click to change.", null, {
      hk: "3n2ern"
    });
  } else if (e === c.SettingChangeByUnknownAsAdmin) {
    return u.fbt._("Disappearing messages were turned off. Click to change.", null, {
      hk: "42Gz4g"
    });
  } else if (e === c.Duration) {
    return u.fbt._("Off", null, {
      hk: "3BRZfX"
    });
  } else if (e === c.OutOfSyncInfo) {
    return u.fbt._("This message will not disappear from the chat. The sender may be on an old version of WhatsApp.", null, {
      hk: "KEziN"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOffString is given invalid type ${e}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function f(e, t, n) {
  const r = (0, s.isDefaultDisappearingMessagesEnabled)();
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
      hk: "4kkOWq"
    });
  } else if (e === c.SettingChangeByYou) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "2k7TQ1"
    });
  } else if (e === c.SettingChangeByUnknown) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 second after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "bo1mR"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
      hk: "31TjrZ"
    });
  } else if (e === c.SettingChangeByYouAsAdmin) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to change.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "3miT5e"
    });
  } else if (e === c.SettingChangeByUnknownAsAdmin) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to change.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "IOXzj"
    });
  } else if (e === c.Duration) {
    return u.fbt._({
      "*": "{number_of_seconds} seconds",
      _1: "1 second"
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "2ek3Kv"
    });
  } else if (e === c.OutOfSyncInfo) {
    return u.fbt._({
      "*": "This message will disappear from this chat {number_of_seconds} seconds after it's sent, except when kept.",
      _1: "This message will disappear from this chat 1 second after it's sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "3GONDO"
    });
  } else if (e === c.Explanation) {
    return u.fbt._({
      "*": "New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.",
      _1: "New messages will disappear from this chat 1 second after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "mlkne"
    });
  } else if (e === c.ModeChangeByOthers) {
    if (r) {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to set your own default timer.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to set your own default timer."
      }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
        hk: "3HoMUO"
      });
    } else {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to learn more.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to learn more."
      }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
        hk: "JNSih"
      });
    }
  } else if (e === c.ModeChangeByYou && r) {
    return u.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to change your default timer."
    }, [u.fbt._plural(t, "number_of_seconds")], {
      hk: "kqWHO"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnSecondsString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function _(e, t, n) {
  const r = (0, s.isDefaultDisappearingMessagesEnabled)();
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
      hk: "3B0sxH"
    });
  } else if (e === c.SettingChangeByYou) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "8ptBy"
    });
  } else if (e === c.SettingChangeByUnknown) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "2ZcAto"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
      hk: "1rr4wS"
    });
  } else if (e === c.SettingChangeByYouAsAdmin) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to change.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "2qSGiH"
    });
  } else if (e === c.SettingChangeByUnknownAsAdmin) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to change.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "4pRdjD"
    });
  } else if (e === c.Duration) {
    return u.fbt._({
      "*": "{number_of_minutes} minutes",
      _1: "1 minute"
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "3D4yRb"
    });
  } else if (e === c.OutOfSyncInfo) {
    return u.fbt._({
      "*": "This message will disappear from this chat {number_of_minutes} minutes after it's sent, except when kept.",
      _1: "This message will disappear from this chat 1 minute after it's sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "1avqyM"
    });
  } else if (e === c.Explanation) {
    return u.fbt._({
      "*": "New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.",
      _1: "New messages will disappear from this chat 1 minute after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "1lxJuv"
    });
  } else if (e === c.ModeChangeByOthers) {
    if (r) {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to set your own default timer.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to set your own default timer."
      }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
        hk: "4CqMhX"
      });
    } else {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to learn more.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to learn more."
      }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
        hk: "12RSEy"
      });
    }
  } else if (e === c.ModeChangeByYou && r) {
    return u.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to change your default timer."
    }, [u.fbt._plural(t, "number_of_minutes")], {
      hk: "10Ts6G"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnMinutesString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function g(e, t, n) {
  const r = (0, s.isDefaultDisappearingMessagesEnabled)();
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
      hk: "2ZKFqA"
    });
  } else if (e === c.SettingChangeByYou) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "4Bhxbn"
    });
  } else if (e === c.SettingChangeByUnknown) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "4gJufp"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
      hk: "1S7Usz"
    });
  } else if (e === c.SettingChangeByYouAsAdmin) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to change.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "3cnipx"
    });
  } else if (e === c.SettingChangeByUnknownAsAdmin) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to change.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "PhEp3"
    });
  } else if (e === c.Duration) {
    return u.fbt._({
      "*": "{number_of_hours} hours",
      _1: "1 hour"
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "tAbug"
    });
  } else if (e === c.OutOfSyncInfo) {
    return u.fbt._({
      "*": "This message will disappear from this chat {number_of_hours} hours after it's sent, except when kept.",
      _1: "This message will disappear from this chat 1 hour after it's sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "dTgAx"
    });
  } else if (e === c.Explanation) {
    return u.fbt._({
      "*": "New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.",
      _1: "New messages will disappear from this chat 1 hour after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "2198Ib"
    });
  } else if (e === c.ModeChangeByOthers) {
    if (r) {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to set your own default timer.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to set your own default timer."
      }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
        hk: "12F4R7"
      });
    } else {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to learn more.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to learn more."
      }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
        hk: "2Qc9Rg"
      });
    }
  } else if (e === c.ModeChangeByYou && r) {
    return u.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to change your default timer."
    }, [u.fbt._plural(t, "number_of_hours")], {
      hk: "1ynB4I"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnHoursString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function m(e, t, n) {
  const r = (0, s.isDefaultDisappearingMessagesEnabled)();
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
      hk: "1VErQ8"
    });
  } else if (e === c.SettingChangeByYou) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "nAa5n"
    });
  } else if (e === c.SettingChangeByUnknown) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 day after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "1YZVmQ"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
      hk: "1paE5w"
    });
  } else if (e === c.SettingChangeByYouAsAdmin) {
    return u.fbt._({
      "*": "You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to change.",
      _1: "You turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "3VPrO7"
    });
  } else if (e === c.SettingChangeByUnknownAsAdmin) {
    return u.fbt._({
      "*": "Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to change.",
      _1: "Disappearing messages were turned on. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "16iROF"
    });
  } else if (e === c.Duration) {
    return u.fbt._({
      "*": "{number_of_days} days",
      _1: "1 day"
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "1it080"
    });
  } else if (e === c.OutOfSyncInfo) {
    return u.fbt._({
      "*": "This message will disappear from this chat {number_of_days} days after it's sent, except when kept.",
      _1: "This message will disappear from this chat 1 day after it's sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "4ineUe"
    });
  } else if (e === c.Explanation) {
    return u.fbt._({
      "*": "New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.",
      _1: "New messages will disappear from this chat 1 day after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "4EIXHa"
    });
  } else if (e === c.ModeChangeByOthers) {
    if (r) {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to set your own default timer.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to set your own default timer."
      }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
        hk: "vtUA8"
      });
    } else {
      return u.fbt._({
        "*": "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to learn more.",
        _1: "{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to learn more."
      }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
        hk: "dLWS"
      });
    }
  } else if (e === c.ModeChangeByYou && r) {
    return u.fbt._({
      "*": "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to change your default timer.",
      _1: "You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to change your default timer."
    }, [u.fbt._plural(t, "number_of_days")], {
      hk: "1wHhce"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnDaysString is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function h(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (t < 0) {
    __LOG__(4, undefined, new Error(), true)`getEphemeralString ${e} is given invalid duration ${t}`;
    SEND_LOGS("invalid-duration");
    return "";
  }
  if (t === 0) {
    return y(e, n);
  }
  if (t <= 60) {
    return E(e, t, n);
  }
  if (t <= 3600) {
    return S(e, Math.floor(t / 60), n);
  }
  if (t <= 86400) {
    return v(e, Math.floor(t / 60 / 60), n);
  }
  const r = Math.floor(t / 24 / 60 / 60);
  return T(e, r, n);
}
function y(e, t) {
  if (e === c.SettingChangeByOthers && t != null) {
    return u.fbt._("{person-name} turned off disappearing messages.", [u.fbt._param("person-name", t)], {
      hk: "XO892"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && t != null) {
    return u.fbt._("{person-name} turned off disappearing messages. Click to change.", [u.fbt._param("person-name", t)], {
      hk: "su743"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOffL10nComponent is given invalid type ${e}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function E(e, t, n) {
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
      hk: "4kkOWq"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_seconds"), u.fbt._param("person-name", n)], {
      hk: "31TjrZ"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnSecondsL10nComponent is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function S(e, t, n) {
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
      hk: "3B0sxH"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_minutes"), u.fbt._param("person-name", n)], {
      hk: "1rr4wS"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnMinutesL10nComponent is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function v(e, t, n) {
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
      hk: "2ZKFqA"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_hours"), u.fbt._param("person-name", n)], {
      hk: "1S7Usz"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnHoursL10nComponent is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
function T(e, t, n) {
  if (e === c.SettingChangeByOthers && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept."
    }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
      hk: "1VErQ8"
    });
  } else if (e === c.SettingChangeByOthersAsAdmin && n != null) {
    return u.fbt._({
      "*": "{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to change.",
      _1: "{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to change."
    }, [u.fbt._plural(t, "number_of_days"), u.fbt._param("person-name", n)], {
      hk: "1paE5w"
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`getEphemeralOnDaysL10nComponent is given type ${e} and name ${n}`;
    SEND_LOGS("invalid-ephemeral-string-type");
    return "";
  }
}
exports.EphemeralStringType = c;