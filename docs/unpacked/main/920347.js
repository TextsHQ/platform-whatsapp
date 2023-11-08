var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    onSelectMessages: n,
    enableChatThreadLogging: a
  } = e;
  const L = (0, R.default)();
  const j = (0, x.useModelValues)(e.chat, ["isPSA", "mute", "id", "contact", "isGroup", "promises", "isNewsletter", "isParentGroup", "isUser", "tcToken", "tcTokenTimestamp", "msgs"]);
  const [B, F, G, U, W, H, V] = (0, I.useContactValues)(e.contact.id, [p.getId, p.getIsBusiness, p.getName, E.getIsContactBlocked, p.getIsMe, p.getIsMyContact, E.getBusinessProfile]);
  const q = (0, D.useRef)(null);
  (0, N.useListener)(w.Stream, "change:displayInfo", L);
  (0, D.useEffect)(() => {
    if (a === true) {
      (0, d.handleActivitiesForChatThreadLogging)([{
        activityType: "chatOverflowClicks",
        ts: (0, r.unixTime)(),
        chatId: j.id
      }]);
    }
  }, [a, j.id]);
  const Y = (0, A.default)("MD_EXTENSION");
  const z = () => {
    (0, b.sendReport)({
      chat: j,
      spamFlow: S.SpamFlow.OverflowMenuReport
    });
    _.ModalManager.close();
  };
  const K = () => {
    (0, b.sendSpamBlockClear)(j, S.SpamFlow.OverflowMenuReport);
    _.ModalManager.close();
  };
  const Q = () => {
    _.ModalManager.open((V == null ? undefined : V.isBizBot3p) === true ? D.default.createElement(C.default, {
      isBizBot3p: true,
      isMessage: false,
      onReport: z,
      onReportBlockClear: K,
      onCancel: () => _.ModalManager.close()
    }) : D.default.createElement(C.default, {
      isMessage: false,
      isBusiness: F,
      isGroupChat: false,
      onReport: z,
      onReportBlockClear: K,
      onCancel: () => _.ModalManager.close()
    }));
  };
  const X = () => {
    f.Cmd.ephemeralDrawer((0, T.unproxy)(e.chat), false, P.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW);
  };
  const Z = () => {
    const a = [];
    if (Y) {
      a.push(D.default.createElement(g.DropdownItem, {
        key: "assignChat",
        testid: "mi-assign-chat",
        action: () => {
          f.Cmd.assignChat(j, s.ChatAssignmentEntryPointType.CONVERSATION_MENU);
        }
      }, k.fbt._("Assign chat", null, {
        hk: "a77h0"
      })));
    }
    if (!j.isPSA) {
      a.push(D.default.createElement(g.DropdownItem, {
        key: "info",
        action: () => {
          if (F) {
            (0, v.qplStartProfileView)("ToolsMenu");
          }
          f.Cmd.chatInfoDrawer(j);
        },
        testid: "menu-item-chat-info"
      }, k.fbt._("Contact info", null, {
        hk: "LUJtH"
      })));
    }
    if (F && (0, l.canSeeECommerceComplianceIndiaSoftEnforcement)(B)) {
      a.push(D.default.createElement(g.DropdownItem, {
        key: "merchantDetails",
        testid: "merchant-details",
        action: () => f.Cmd.merchantDetailsDrawer(B)
      }, k.fbt._("Business details", null, {
        hk: "m9xzp"
      })));
    }
    a.push(D.default.createElement(g.DropdownItem, {
      testid: "mi-select-messages",
      key: "select",
      action: n
    }, k.fbt._("Select messages", null, {
      hk: "40nxs"
    })));
    a.push(D.default.createElement(g.DropdownItem, {
      testid: "mi-close-chat",
      key: "close",
      action: () => f.Cmd.closeChat(j)
    }, k.fbt._("Close chat", null, {
      hk: "456CEL"
    })));
    if (j.mute.canMute()) {
      a.push(D.default.createElement(y.default, {
        key: "mute",
        onMute: e => {
          if (j.isPSA) {
            f.Cmd.muteChatFromEntryPoint(j, e, 3);
          } else {
            f.Cmd.muteChat(j, e);
          }
        },
        mute: j.mute,
        chat: j,
        settings: M.default
      }));
    }
    if ((0, o.getABPropConfigValue)("add_dm_to_chat_overflow_menu") && (0, c.shouldShowEphemeralSetting)(e.chat)) {
      a.push(D.default.createElement(g.DropdownItem, {
        key: "disappearingMessages",
        action: X
      }, k.fbt._("Disappearing messages", null, {
        hk: "2Yz01q"
      })));
    }
    a.push(D.default.createElement(g.DropdownItem, {
      key: "clear",
      testid: "mi-clear",
      action: () => f.Cmd.clearChat(j)
    }, k.fbt._("Clear chat", null, {
      hk: "zjV3w"
    })));
    a.push(D.default.createElement(m.default, {
      key: "delete",
      onDeleteOrExit: () => f.Cmd.deleteOrExitChatFromEntryPoint(j, O.PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION),
      chat: j
    }));
    if (!W) {
      if (!(j.isPSA || j.id.isBot())) {
        a.push(D.default.createElement(g.DropdownItem, {
          key: "report",
          testid: "mi-report",
          action: Q
        }, k.fbt._("Report", null, {
          hk: "2SQkZ4"
        })));
      }
      if (!j.id.isBot()) {
        a.push(D.default.createElement(g.DropdownItem, {
          key: "block",
          testid: U ? "mi-unblock" : "mi-block",
          action: U ? () => (0, i.handleUnblock)(t, u.BlockEntryPoint.OverflowMenuBlock) : () => (0, i.handleBlock)(j, u.BlockEntryPoint.OverflowMenuBlock)
        }, U ? k.fbt._("Unblock", null, {
          hk: "1JlKyP"
        }) : k.fbt._("Block", null, {
          hk: "2EwszA"
        })));
      }
    }
    return a;
  };
  if (e.toContextMenuManager) {
    return D.default.createElement("div", {
      ref: q
    }, Z());
  }
  return D.default.createElement(h.Dropdown, {
    ref: e => {
      q.current = e;
    },
    type: h.MenuType.DropdownMenu,
    key: "ContactMenuDropdown",
    flipOnRTL: true,
    dirX: h.DirX.LEFT,
    testid: "contact-menu-dropdown"
  }, Z());
};
var r = require("../app/632157.js");
var o = require("../app/287461.js");
var l = require("../app/72696.js");
var i = require("./923092.js");
var u = require("../app/400436.js");
var s = require("../app/698052.js");
var c = require("../app/738501.js");
var d = require("../app/698867.js");
var f = require("../app/780549.js");
var p = require("../app/660666.js");
var m = a(require("./819136.js"));
require("./807078.js");
var h = require("../app/664149.js");
var g = require("../app/675085.js");
var E = require("../app/714574.js");
var v = require("./609181.js");
var _ = require("../app/114850.js");
var y = a(require("./462034.js"));
require("../app/533494.js");
var C = a(require("./338695.js"));
require("../app/437911.js");
var b = require("../app/383296.js");
var M = a(require("../app/634152.js"));
var S = require("../app/453603.js");
var T = require("../app/163139.js");
var w = require("../app/973981.js");
require("../app/142601.js");
var A = a(require("../main-chunk/806077.js"));
var P = require("./298187.js");
var O = require("../app/8402.js");
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
var I = require("../app/379811.js");
var R = a(require("../app/969651.js"));
var N = require("../app/808446.js");
var x = require("../app/655241.js");
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}