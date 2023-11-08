var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("./461012.js");
var l = a(require("./210688.js"));
var i = require("../app/72696.js");
var u = a(require("./341894.js"));
var s = require("./950784.js");
var c = require("./560677.js");
var d = require("../app/295933.js");
var f = require("../app/698052.js");
var p = require("../app/351053.js");
var m = require("../app/738501.js");
var h = require("../app/374660.js");
var g = require("../app/780549.js");
var E = require("../app/177938.js");
var v = require("../app/660666.js");
var _ = require("../app/510337.js");
var y = a(require("./41493.js"));
var C = require("./861038.js");
var b = require("../app/123292.js");
var M = require("../app/900316.js");
var S = a(require("./209064.js"));
var T = require("./673509.js");
var w = require("../app/305521.js");
var A = a(require("./855123.js"));
var P = a(require("../app/170856.js"));
var O = require("../app/730514.js");
var k = require("./729763.js");
var D = a(require("./904183.js"));
var I = require("./58183.js");
var R = a(require("./135074.js"));
var N = require("../app/714574.js");
var x = require("../app/163755.js");
var L = require("./300345.js");
var j = a(require("../app/932325.js"));
var B = require("./391435.js");
var F = require("../app/543081.js");
var G = a(require("./889965.js"));
var U = require("../app/97858.js");
var W = require("../app/114850.js");
var H = require("../app/787742.js");
var V = require("../app/373070.js");
var q = a(require("./228803.js"));
var Y = a(require("./606037.js"));
var z = require("./974232.js");
var K = require("./111367.js");
var Q = require("./24578.js");
var X = require("./775523.js");
var Z = require("../app/163139.js");
var J = require("../app/108590.js");
var $ = require("./858567.js");
var ee = a(require("../main-chunk/806077.js"));
var te = require("./901952.js");
var ne = require("./298187.js");
var ae = require("../app/334724.js");
var re = require("../app/1373.js");
var oe = require("../app/126246.js");
var le = require("../app/262553.js");
var ie = a(require("../app/124928.js"));
var ue = require("../app/669050.js");
var se = require("../app/931019.js");
var ce = require("../vendor/548360.js");
var de = a(require("../vendor/441143.js"));
var fe = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = ge(t);
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
var pe = a(require("../app/156720.js"));
var me = require("../app/655241.js");
var he = require("./871210.js");
function ge(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (ge = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function Ee(e) {
  g.Cmd.ephemeralDrawer(e, false, ne.EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
}
const ve = {
  icon: {
    display: "l7jjieqr",
    marginEnd: "mw4yctpw",
    verticalAlign: "mr0xwlll"
  },
  iconE2EIconSupportGroupbizInfo: {
    display: "l7jjieqr",
    marginTop: "qt60bha0",
    marginEnd: "mw4yctpw",
    verticalAlign: "fewfhwl7"
  },
  iconChatAssignment: {
    display: "l7jjieqr",
    marginTop: "qt60bha0",
    marginEnd: "claouzo6",
    verticalAlign: "fewfhwl7"
  },
  iconE2EColor: {
    color: "kzrzzy77"
  },
  notificationInfoIconColor: {
    color: "m35p33ho"
  }
};
function _e(e, t) {
  const {
    msg: n
  } = e;
  const a = (0, me.useOptionalModelValues)(e.contact, ["id", "isEnterprise", "isContactBlocked", "verifiedLevel", "verifiedName", "shareOwnPn"]);
  const h = (0, fe.useRef)(null);
  const [B, ne, ge, _e, ye, Me, Se, Te] = (0, he.useMsgValues)(e.msg.id, [H.getId, H.getBody, H.getFrom, H.getType, H.getSubtype, H.getTemplateParams, H.getEphemeralDuration, H.getEphemeralSettingUser]);
  const we = (0, x.getChat)(n.unsafe());
  const Ae = (0, fe.useRef)(null);
  const Pe = e => {
    var t;
    var n;
    if (!((t = h.current) === null || t === undefined)) {
      t.click();
    }
    if (!((n = Ae.current) === null || n === undefined)) {
      n.handleKeyActivation(e);
    }
  };
  (0, fe.useImperativeHandle)(t, () => ({
    handleKeyActivation: Pe
  }));
  (0, fe.useEffect)(() => {
    if (_e === V.MSG_TYPE.E2E_NOTIFICATION && ye === "encrypt" && (0, U.isPrivacyNarrativeV1Enabled)() && (0, K.chatContainsGoldenBox)(we)) {
      const e = (0, K.getHighlightSurfaceForGoldenBox)(we.id);
      if (e != null) {
        (0, Q.incrementPrinaDailyCount)(e, _.PrinaDailyActionType.NARRATIVE_APPEAR);
      }
    }
  }, []);
  const Oe = (0, ee.default)("MD_EXTENSION");
  let ke;
  let De;
  let Ie;
  let Re;
  let Ne;
  let xe;
  switch (_e) {
    case V.MSG_TYPE.NOTIFICATION:
      De = ne;
      break;
    case V.MSG_TYPE.E2E_NOTIFICATION:
      {
        const e = (0, Z.unproxy)(n);
        (0, de.default)(e.type === V.MSG_TYPE.E2E_NOTIFICATION, "This is an E2E Notification msg");
        De = (0, P.default)(e);
        Ie = (0, A.default)({
          type: _e
        });
        const t = ne ? (0, ue.createWid)(ne) : null;
        const a = B.remote;
        xe = () => {
          !function (e, t, n, a) {
            if (e === "e2e_identity_unavailable") {
              return;
            }
            if (e === "encrypt" && (0, U.isPrivacyNarrativeV1Enabled)() && (0, K.shouldShowNewE2eInfoModal)((0, x.getChat)(a.unsafe()))) {
              const e = (0, K.securityUrl)();
              return void W.ModalManager.open(fe.default.createElement(T.E2eInfoModalV2, {
                highlightSurface: (0, K.getHighlightSurfaceForGoldenBox)(n),
                url: e,
                chat: (0, x.getChat)(a.unsafe())
              }));
            }
            const r = e === "encrypt" ? (0, K.getHighlightSurfaceForGoldenBox)(n) : undefined;
            W.ModalManager.open(fe.default.createElement(S.default, {
              highlightSurface: r,
              e2eSubtype: e,
              jid: t,
              chatId: n,
              msg: a
            }));
          }(ye, t, a, n);
        };
        ke = fe.default.createElement(Ce, {
          msg: e
        });
        break;
      }
    case V.MSG_TYPE.CALL_LOG:
      return fe.default.createElement(G.default, {
        ref: Ae,
        msg: n,
        contact: a,
        iconStyle: ve.icon
      });
    case V.MSG_TYPE.NOTIFICATION_TEMPLATE:
      if (ye === "change_number") {
        const e = Me[0];
        const t = Me[1];
        const n = Me[2];
        const a = E.ContactCollection.get(e);
        const r = a != null && (0, v.getIsMyContact)(a) ? (0, N.getFormattedName)(a) : (0, se.widToFormattedUser)(e);
        const o = ie.default.equals(we.id, e);
        const l = ie.default.equals(we.id, n);
        De = l || o ? ce.fbt._("{name} changed their phone number to a new number. Click to message the new number.", [ce.fbt._param("name", r)], {
          hk: "2H91y3"
        }) : ce.fbt._("{name} changed their phone number. You're currently chatting with their new number.", [ce.fbt._param("name", r)], {
          hk: "3G9LoK"
        });
        if (l || o) {
          xe = () => function (e, t) {
            (0, c.onChangeNumberNotificationClick)(e, t);
          }(t, e);
        }
      } else if (ye === "chat_assignment" || ye === "chat_assignment_unassign") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        ke = fe.default.createElement("div", {
          className: (0, pe.default)(ve.iconChatAssignment)
        }, fe.default.createElement(d.ChatAssignmentIcon, {
          width: 12,
          height: 15
        }));
        if (Oe && (0, i.chatAssignmentSystemMessagesEnabled)()) {
          xe = () => {
            const e = p.ChatCollection.get(B.remote);
            if (e != null) {
              g.Cmd.assignChat(e, f.ChatAssignmentEntryPointType.SYSTEM_MESSAGE);
            }
          };
        }
      } else if (ye === "masked_thread_created") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        ke = fe.default.createElement("div", {
          className: (0, pe.default)(ve.icon)
        }, fe.default.createElement(C.DialpadSmallIcon, {
          width: 16,
          height: 16
        }));
        Re = "masked_thread_created_system_message";
        xe = () => {
          (0, F.logPnhRequestRevealActionHelper)(re.PNH_CHAT_TYPE_TYPE.CTWA, le.PNH_MESSAGE_CHAT_PARTY.CONSUMER, ae.PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR, oe.PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE);
          if (a == null ? undefined : a.shareOwnPn) {
            W.ModalManager.open(fe.default.createElement(X.PostSharePhoneNumberModal, {
              entryPoint: oe.PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
            }));
          } else {
            W.ModalManager.open(fe.default.createElement(X.SharePhoneNumberModal, {
              entryPoint: oe.PNH_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
            }));
          }
        };
      } else if (ye === "cag_masked_thread_created") {
        var Le;
        const e = p.ChatCollection.get(B.remote);
        const t = e == null || (Le = e.groupMetadata) === null || Le === undefined ? undefined : Le.parentGroup;
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        ke = fe.default.createElement("div", {
          className: (0, pe.default)(ve.icon)
        }, fe.default.createElement(C.DialpadSmallIcon, {
          width: 16,
          height: 16
        }));
        xe = () => {
          var n;
          if (t) {
            (0, z.incrementPnhDailyCount)(t, z.PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_CHAT);
          }
          W.ModalManager.open((e == null || (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants.iAmAdmin()) ? fe.default.createElement(s.CagPhoneNumberSharedNux, null) : fe.default.createElement(s.CagPhoneNumberHiddenNux, null));
        };
      } else if (n.subtype === "disappearing_mode" || n.subtype === "disappearing_mode_update" || n.subtype === "disappearing_mode_unsupported") {
        const e = (0, m.shouldShowEphemeralSetting)(we);
        ke = fe.default.createElement("div", {
          className: (0, pe.default)(ve.icon)
        }, fe.default.createElement(b.DisappearingIcon, {
          width: 16,
          height: 16
        }));
        if (ye === "disappearing_mode") {
          De = (0, O.getDefaultDisappearingModeSystemMessageText)((0, Z.unproxy)(n.unsafe()));
          if (e) {
            xe = () => {
              M.DrawerManager.openDrawerLeft(fe.default.createElement(y.default, {
                onClose: () => M.DrawerManager.closeDrawerLeft(),
                entryPoint: te.DISAPPEARING_MODE_ENTRY_POINT_TYPE.SYSTEM_MESSAGE
              }));
            };
          }
        } else if (ye === "disappearing_mode_update") {
          const t = (0, r.default)(p.ChatCollection.get(n.id.remote), "ChatCollection.get(msg.id.remote)");
          De = (0, O.getDisappearingModeUpdateSystemMessageText)((0, Z.unproxy)(n.unsafe()));
          if (e) {
            xe = () => Ee(t);
          }
        } else if (ye === "disappearing_mode_unsupported") {
          De = (0, O.getDMUnsupportedSystemMessageText)();
        }
      } else if (ye === "sender_invite") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
      } else if (ye === "biz_bot_1p_disclosure") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        xe = () => {
          W.ModalManager.open(fe.default.createElement(o.BizBot1pLearnMore, null));
        };
      } else if (ye === "biz_bot_3p_disclosure") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        xe = () => {
          if (e.contact) {
            W.ModalManager.open(fe.default.createElement(l.default, null));
          }
        };
      } else if (ye === "bot_init" || ye === "bot_invoke_disclaimer") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        xe = () => {
          W.ModalManager.open(fe.default.createElement(u.default, {
            fromInvoke: ye === "bot_invoke_disclaimer"
          }));
        };
      } else if (ye === "change_username") {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        Re = "change_username_system_message";
      } else {
        De = (0, D.default)((0, Z.unproxy)(n.unsafe()));
        Ne = (0, k.formatNotificationTemplateModalText)((0, Z.unproxy)(n.unsafe()));
        if (Ne != null) {
          const e = (0, q.default)(ye, n.id.remote);
          xe = () => {
            (0, Y.default)(Ne, e);
          };
        }
      }
      if (function (e, t) {
        return e === V.MSG_TYPE.NOTIFICATION_TEMPLATE && be.has(t);
      }(_e, ye)) {
        ke = fe.default.createElement("div", {
          className: (0, pe.default)(ve.iconE2EIconSupportGroupbizInfo, ve.notificationInfoIconColor)
        }, fe.default.createElement(L.InfoFilledIcon, {
          width: 12,
          height: 15
        }));
      }
      break;
    case V.MSG_TYPE.PROTOCOL:
      {
        const e = B.remote;
        if (ye === "ephemeral_setting") {
          const t = p.ChatCollection.gadd(e);
          De = (0, O.getDisappearingModeUpdateSystemMessageText)((0, Z.unproxy)(n));
          if ((0, m.shouldShowEphemeralSetting)(we)) {
            xe = () => {
              Ee(t);
            };
          }
          ke = fe.default.createElement("div", {
            className: (0, pe.default)(ve.icon)
          }, fe.default.createElement(b.DisappearingIcon, {
            width: 16,
            height: 16
          }));
          Re = "ephemeral_system_message";
        } else if (ye === "share_phone_number") {
          De = (0, R.default)(ge, e, B.fromMe);
          xe = () => {
            W.ModalManager.open(fe.default.createElement(X.PostSharePhoneNumberModal, null));
          };
          ke = fe.default.createElement("div", {
            className: (0, pe.default)(ve.icon)
          }, fe.default.createElement(C.DialpadSmallIcon, {
            width: 16,
            height: 16
          }));
          Re = "share_phone_number_system_message";
        }
        break;
      }
    case V.MSG_TYPE.PINNED_MESSAGE:
      De = (0, I.formatPinInChatNotification)((0, Z.unproxy)(n).unsafe());
      Re = "pinned_message_system_message";
  }
  const je = fe.default.createElement(w.EmojiText, {
    direction: j.default.isRTL() ? "rtl" : "ltr",
    text: De
  });
  let Be;
  var Fe;
  if ((0, J.systemMessageActionTextStylingEnabled)() && Ie != null) {
    Be = fe.default.createElement($.SystemMessageWithSingleCTA, {
      bodyText: je,
      ctaText: Ie,
      icon: ke,
      onClick: xe,
      onclickRef: h,
      testid: (Fe = Re) !== null && Fe !== undefined ? Fe : "system_message"
    });
  } else {
    Be = fe.default.createElement("span", null, ke, je);
    if (xe) {
      return fe.default.createElement("div", {
        role: "button",
        ref: h,
        onClick: xe
      }, Be);
    }
  }
  return fe.default.createElement("span", null, Be);
}
var ye = (0, fe.forwardRef)(_e);
function Ce(e) {
  let {
    msg: t
  } = e;
  const n = (0, x.getChat)(t.unsafe());
  if (t.subtype === "encrypt" && (0, h.isSupportGroupOrSupportAdmin)(n)) {
    return fe.default.createElement("div", {
      className: (0, pe.default)(ve.iconE2EIconSupportGroupbizInfo, ve.notificationInfoIconColor)
    }, fe.default.createElement(L.InfoFilledIcon, {
      width: 12,
      height: 15
    }));
  } else if (t.subtype === "encrypt" || t.subtype === "encrypt_now") {
    return fe.default.createElement("div", {
      className: (0, pe.default)(ve.iconE2EIconSupportGroupbizInfo, ve.iconE2EColor)
    }, fe.default.createElement(B.LockSmallIcon, null));
  } else {
    return undefined;
  }
}
exports.default = ye;
const be = new Set(["blue_msg_bsp_fb_unverified", "blue_msg_bsp_fb_verified", "blue_msg_bsp_premise_unverified", "blue_msg_bsp_premise_verified", "blue_msg_self_fb_unverified", "blue_msg_self_fb_verified", "biz_privacy_mode_init_fb", "biz_privacy_mode_init_bsp", "biz_privacy_mode_to_fb", "biz_privacy_mode_to_bsp", "bot_init", "bot_invoke_disclaimer", "biz_bot_1p_disclosure", "saga_init", "biz_me_account_type_is_hosted"]);