var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("./430260.js");
var l = require("../app/738501.js");
var i = require("../app/79672.js");
var u = require("./62388.js");
var s = require("./244380.js");
var c = require("../app/675085.js");
var d = require("../app/784427.js");
var f = require("./741917.js");
var p = require("../app/114850.js");
var m = require("./61740.js");
var h = require("./792882.js");
var g = require("../app/220584.js");
var E = require("../app/180519.js");
require("../app/625786.js");
require("../app/390737.js");
var v = require("../app/392632.js");
var _ = a(require("../app/37875.js"));
var y = require("../app/676345.js");
var C = a(require("../app/625903.js"));
var b = require("./145454.js");
var M = require("./298187.js");
a(require("../app/556869.js"));
var S = require("../vendor/548360.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
a(require("../app/156720.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  durationCTA: {
    display: "p357zi0d",
    justifyContent: "o4u7okr9",
    alignItems: "gndfcl4n",
    textAlign: "ljrqcn24",
    borderBottom: "efpv7i3f",
    borderTop: "jevf67zx",
    backgroundColor: "ihvf49ua",
    ":hover": {
      backgroundColor: "os03hap6"
    }
  }
};
function P(e) {
  let {
    initialDuration: t,
    onSelect: n
  } = e;
  const [a, r] = (0, T.useState)(false);
  const [o, l] = (0, T.useState)(t != null && t > 0 ? t : d.NINETY_DAYS);
  const i = (0, T.useRef)();
  let s;
  if (a) {
    const e = e => {
      l(e);
      n(e);
    };
    const t = {
      menu: (0, f.getDefaultEphemeralityDurations)().filter(e => e.value > 0).map(t => T.default.createElement(c.DropdownItem, {
        key: `dm-duration-dd-${t.value}`,
        testid: `dm-duration-dd-${t.value}`,
        action: () => e(t.value),
        selected: o === t.value
      }, t.label)),
      anchor: i.current
    };
    s = T.default.createElement(v.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: () => r(false)
    }, T.default.createElement(_.default, {
      contextMenu: t
    }));
  }
  return T.default.createElement(C.default, {
    xstyle: [A.durationCTA, y.uiPadding.vert16, y.uiPadding.horiz32],
    onClick: () => r(true),
    ref: i
  }, T.default.createElement("div", null, T.default.createElement(E.TextHeader, {
    theme: "title"
  }, S.fbt._("Disappearing message timer", null, {
    hk: "3Gxdc8"
  })), T.default.createElement(E.TextHeader, {
    theme: "muted"
  }, (0, f.durationToLabel)(o))), T.default.createElement(u.ChevronDownAltIcon, {
    color: g.SvgColorProp.SECONDARY
  }), s);
}
function O(e, t) {
  let {
    initialDuration: n,
    entryPoint: a
  } = e;
  const [u, c] = (0, T.useState)(0);
  const [f, g] = (0, T.useState)(n != null && n > 0 ? n : d.NINETY_DAYS);
  (0, T.useEffect)(() => {
    new s.DisappearingMessageChatPickerWamEvent({
      dmChatPickerEntryPoint: a,
      dmChatPickerEventName: b.DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_OPEN,
      ephemeralityDuration: f
    }).commit();
  }, []);
  const E = T.default.createElement(P, {
    initialDuration: f,
    onSelect: e => g(e)
  });
  const v = (e, t) => {
    const n = e.filter(e => e.isGroup);
    const r = e.filter(e => {
      if (e instanceof i.Chat) {
        return !(0, l.isEphemeralSettingOn)(e);
      }
    }).length;
    new s.DisappearingMessageChatPickerWamEvent({
      dmChatPickerEntryPoint: a,
      dmChatPickerEventName: t,
      ephemeralityDuration: f,
      chatsSelected: e.length,
      groupChatsSelected: n.length,
      totalChatsInChatPicker: u,
      newlyEphemeralChats: r
    }).commit();
  };
  const _ = function () {
    var e = (0, r.default)(function* (e) {
      v(e, b.DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_CHATS_SELECTED);
      p.ModalManager.close();
      (yield (0, o.bulkChangeEphemeralDuration)(e, f, M.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_PICKER)).map(e => {
        switch (e.status) {
          case "fulfilled":
            0;
            break;
          case "rejected":
            0;
            break;
          default:
            __LOG__(4, undefined, new Error())`bulkChangeEphemeralDuration result has unknown status ${e.status}`;
        }
      });
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return T.default.createElement(m.SelectModal, {
    ref: t,
    testid: "dm-chat-picker-modal",
    title: S.fbt._("Select chats", null, {
      hk: "1M845f"
    }),
    customHeader: E,
    onConfirm: _,
    listType: m.ListType.ChatSelectModal,
    singleSelectionFooterType: h.FooterType.CONFIRM,
    multipleSelectionFooterType: h.FooterType.CONFIRM,
    ephemeralIcon: "conversation-header",
    isDisabled: e => e instanceof i.Chat && !(0, l.shouldShowEphemeralSetting)(e),
    customItemSecondaryText: (e, t) => {
      if (t) {
        return S.fbt._("You can't edit group settings", null, {
          hk: "1JvBYr"
        });
      }
    },
    onCancel: e => {
      v(e, b.DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_EXIT);
      p.ModalManager.close();
    },
    onDataLoaded: e => {
      c(e.length);
    },
    excludeContacts: true,
    getSelectionSummary: e => S.fbt._({
      "*": "{number} chats selected",
      _1: "1 chat selected"
    }, [S.fbt._plural(e.length, "number")], {
      hk: "RkPSG"
    })
  });
}
var k = (0, T.forwardRef)(O);
exports.default = k;