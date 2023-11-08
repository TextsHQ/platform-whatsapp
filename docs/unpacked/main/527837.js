var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGroupProperty = function (e, t, n) {
  return y((0, f.unproxy)(e), t, n);
};
var r = require("../app/122583.js");
var o = require("../app/328620.js");
var l = require("../app/984330.js");
var i = require("../app/359198.js");
var u = require("../app/682144.js");
var s = require("./892208.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/288057.js"));
var d = require("./176514.js");
var f = require("../app/163139.js");
var p = require("../app/390737.js");
var m = require("../app/571444.js");
var h = require("../app/965927.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  announcement: "announce",
  restrict: "restrict",
  no_frequently_forwarded: "noFrequentlyForwarded",
  ephemeral: "ephemeralDuration",
  membership_approval_mode: "membershipApprovalMode",
  report_to_admin_mode: "reportToAdminMode",
  allow_non_admin_sub_group_creation: "allowNonAdminSubGroupCreation",
  member_add_mode: "memberAddMode"
};
function y(e, t, n) {
  var a;
  var f;
  let v = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, o.genId)();
  if (!t) {
    return Promise.reject(new c.ActionError());
  }
  if (t === u.GROUP_SETTING_TYPE.EPHEMERAL && !((a = e.groupMetadata) === null || a === undefined ? undefined : a.canSetEphemeralSetting())) {
    return Promise.reject(new c.ActionError());
  }
  if (t !== u.GROUP_SETTING_TYPE.EPHEMERAL && !((f = e.groupMetadata) === null || f === undefined ? undefined : f.canSetGroupProperty())) {
    return Promise.reject(new c.ActionError());
  }
  const C = t === u.GROUP_SETTING_TYPE.MEMBER_ADD_MODE ? (0, s.setGroupMemberAddMode)(e.id, t, n) : (0, s.setGroupProperty)(e.id, t, n);
  const b = {
    [u.GROUP_SETTING_TYPE.ANNOUNCEMENT]: {
      on: [g.fbt._("Allowing only admins to send messages to this group", null, {
        hk: "7c1j2"
      }), g.fbt._("You allowed only admins to send messages to this group", null, {
        hk: "TgjEr"
      })],
      off: [g.fbt._("Allowing all participants to send messages to this group", null, {
        hk: "4cLMI3"
      }), g.fbt._("You allowed all participants to send messages to this group", null, {
        hk: "1PCiIv"
      })]
    },
    [u.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE]: {
      on: [g.fbt._("Allowing reports to admin in this chat", null, {
        hk: "1qFpIl"
      }), g.fbt._("You turned on reports to admin in this chat", null, {
        hk: "2C26ne"
      })],
      off: [g.fbt._("Disabling reports to admin in this chat", null, {
        hk: "2Td7KN"
      }), g.fbt._("You turned off reports to admin in this chat", null, {
        hk: "34Fbo5"
      })]
    },
    [u.GROUP_SETTING_TYPE.RESTRICT]: {
      on: [g.fbt._("Allowing only admins to change this group's info", null, {
        hk: "PbjyR"
      }), g.fbt._("You allowed only admins to change this group's info", null, {
        hk: "39H5jp"
      })],
      off: [g.fbt._("Allowing all participants to change this group's info", null, {
        hk: "3fBDr9"
      }), g.fbt._("You allowed all participants to change this group's info", null, {
        hk: "4AVVnx"
      })]
    },
    [u.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED]: {
      on: [g.fbt._("Blocking participants from sending messages that have been forwarded many times to this group", null, {
        hk: "lpVO4"
      }), g.fbt._("You blocked participants from sending messages that have been forwarded many times to this group", null, {
        hk: "22llJ6"
      })],
      off: [g.fbt._("Allowing participants to send messages that have been forwarded many times to this group", null, {
        hk: "UUxQ6"
      }), g.fbt._("You allowed participants to send messages that have been forwarded many times to this group", null, {
        hk: "3A3ppd"
      })]
    },
    [u.GROUP_SETTING_TYPE.EPHEMERAL]: {
      on: [g.fbt._("Turning on disappearing messages in this chat", null, {
        hk: "8QDLb"
      }), g.fbt._("You turned on disappearing messages in this chat", null, {
        hk: "27eqpQ"
      })],
      off: [g.fbt._("Turning off disappearing messages in this chat", null, {
        hk: "4nYVdI"
      }), g.fbt._("You turned off disappearing messages in this chat", null, {
        hk: "6y3db"
      })]
    },
    [u.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE]: {
      on: [g.fbt._("Turning on membership approval mode in this chat", null, {
        hk: "Li7xA"
      }), g.fbt._("You turned on membership approval mode in this chat", null, {
        hk: "3JZ6c9"
      })],
      off: [g.fbt._("Turning off membership approval mode in this chat", null, {
        hk: "1ckzFs"
      }), g.fbt._("You turned off membership approval mode in this chat", null, {
        hk: "3x7TJw"
      })]
    },
    [u.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION]: {
      on: [g.fbt._("Allowing all community members to add groups in this community", null, {
        hk: "1W0ZbC"
      }), g.fbt._("You allowed all community members to add groups in this community", null, {
        hk: "4BKLwv"
      })],
      off: [g.fbt._("Allowing only community admins to add groups", null, {
        hk: "4hK6uJ"
      }), g.fbt._("You allowed only community admins to add groups in this community", null, {
        hk: "3YS2HU"
      })]
    },
    [u.GROUP_SETTING_TYPE.MEMBER_ADD_MODE]: {
      on: [g.fbt._("Allowing all participants to add others to this group", null, {
        hk: "4bFiJc"
      }), g.fbt._("You allowed all participants to add others to this group", null, {
        hk: "14PNSS"
      })],
      off: [g.fbt._("Allowing only admins to add others to this group", null, {
        hk: "4swBR3"
      }), g.fbt._("You allowed only admins to add others to this group", null, {
        hk: "MuQmi"
      })]
    }
  };
  const M = g.fbt._("Try again.", null, {
    hk: "EZ7cv"
  });
  const S = new o.ActionType(g.fbt._("Group setting could not be changed", null, {
    hk: "3WCKMX"
  }), {
    actionText: M,
    actionHandler: () => y(e, t, n, v)
  });
  const T = n === 0 ? "off" : "on";
  const [w, A] = b[t][T];
  const P = new o.ActionType(w);
  const O = C.then(a => {
    switch (a.name) {
      case "SetMemberAddModeResponseSuccess":
      case "SetPropertyResponseSuccess":
        var r;
        if (!((r = e.groupMetadata) === null || r === undefined)) {
          r.set(_[t], n);
        }
        if (!(t !== u.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE || n)) {
          (0, d.clearLastReportTimestamp)(e);
        }
        if (t === u.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
          const t = n === 0 ? m.CHAT_FILTER_ACTION_TYPES.SELECT_COMMUNITY_ADMINS_CAN_ADD_GROUPS : m.CHAT_FILTER_ACTION_TYPES.SELECT_EVERYONE_CAN_ADD_GROUPS;
          new i.CommunityGroupJourneyEvent({
            action: t,
            surface: h.SURFACE_TYPE.COMMUNITY_SETTINGS,
            chat: e
          }).commit();
        }
        return new o.ActionType(A);
      case "SetMemberAddModeResponseClientError":
        {
          const {
            code: e,
            text: n
          } = a.value.errorSetAddModeClientErrors.value;
          __LOG__(3)`Error while setting property ${t}`;
          return S;
        }
      case "SetPropertyResponseClientError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorSetPropertyClientErrors.value;
          __LOG__(3)`Error while setting property`;
          return S;
        }
      case "SetMemberAddModeResponseServerError":
        {
          const {
            code: e,
            text: n
          } = a.value.errorServerErrors.value;
          __LOG__(3)`Error while setting property ${t}`;
          return S;
        }
      case "SetPropertyResponseServerError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          __LOG__(3)`Error while setting property`;
          return S;
        }
    }
  }, e => {
    const {
      code: t,
      text: n
    } = e.value.errorServerErrors.value;
    __LOG__(3)`Error while setting property`;
    return S;
  }).catch((0, r.filteredCatch)(l.ServerStatusCodeError, e => {
    if (e.status === 404) {
      return new o.ActionType(g.fbt._("Group setting could not be changed", null, {
        hk: "3WCKMX"
      }).toString() + " " + g.fbt._("This group has ended.", null, {
        hk: "C2izu"
      }).toString());
    }
  })).catch(() => {
    __LOG__(3)`Error while setting property`;
    return S;
  });
  p.ToastManager.open(E.default.createElement(o.ActionToast, {
    id: v,
    initialAction: P,
    pendingAction: O
  }));
  return C;
}