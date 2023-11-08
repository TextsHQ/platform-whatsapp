var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSendRequestModal = function (e) {
  let {
    adminContact: t,
    subgroupInfo: n,
    participants: a,
    source: i
  } = e;
  const [h, E] = (0, y.useState)(_.fbt._("Can you please add me to the group?", null, {
    hk: "4yM1Kl"
  }).toString());
  const C = {
    text: _.fbt._("Request will be sent in a chat to {admin-name}", [_.fbt._param("admin-name", y.default.createElement(u.EmojiText, {
      text: (0, d.getDisplayName)(t)
    }))], {
      hk: "BtH7h"
    }),
    isError: false
  };
  const b = _.fbt._("Send Request", null, {
    hk: "8YIJG"
  });
  const S = function () {
    var e = (0, r.default)(function* (e) {
      const t = yield (0, c.findChat)(e, "subgroupSendRequest");
      yield (0, g.sendTextMsgToChat)(t, h, {
        quotedMsgAdminGroupJid: n.id,
        quotedMsgAdminGroupSubject: n.subject,
        quotedMsgAdminParentGroupJid: n.parentGroupId
      });
      yield o.Cmd.openChatBottom(t);
      const a = l.CommunityGroupJourneyEvent.inviteModalSourceToSurface(i);
      if (a) {
        new l.CommunityGroupJourneyEvent({
          action: v.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
          surface: a
        }).commit();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return y.default.createElement(f.default, {
    image: {
      groupId: n.id
    },
    title: n.subject,
    subtitle: (0, p.getGroupInviteSubtitle)({
      groupMetadata: n
    }),
    contacts: a,
    description: n.displayedDesc,
    actionText: b,
    onAction: (0, r.default)(function* () {
      m.ModalManager.close();
      yield S(t.id);
    }),
    actionDisabled: !h.trim(),
    onCancel: () => m.ModalManager.close(),
    cancelText: (0, s.default)("Cancel"),
    finePrint: C,
    groupType: n.groupType,
    textInput: y.default.createElement(M, {
      requestReason: h,
      setRequestReason: E
    }),
    source: i
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/780549.js");
var l = require("../app/359198.js");
var i = a(require("../app/846870.js"));
var u = require("../app/305521.js");
var s = a(require("../app/395767.js"));
var c = require("../app/581354.js");
var d = require("../app/714574.js");
var f = a(require("./223965.js"));
var p = require("./148999.js");
var m = require("../app/114850.js");
var h = require("./202391.js");
var g = require("../app/498703.js");
var E = require("../app/676345.js");
var v = require("../app/571444.js");
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
}(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function M(e) {
  let {
    requestReason: t,
    setRequestReason: n
  } = e;
  const a = (0, y.useRef)(null);
  const r = _.fbt._("Reason for request", null, {
    hk: "14si4M"
  }).toString();
  return y.default.createElement("div", {
    className: (0, C.default)(E.uiPadding.top20)
  }, y.default.createElement(h.RichTextField, {
    ref: a,
    placeholder: r,
    value: t,
    showRemaining: true,
    maxLength: i.default.MAX_TXT_MSG_SIZE,
    onChange: e => {
      let {
        text: t
      } = e;
      n(t.trim());
    },
    theme: "request-reason",
    multiline: true,
    textFormatEnabled: true,
    selectOnMount: true,
    maxVisibleLines: 3,
    minVisibleLines: 3
  }));
}