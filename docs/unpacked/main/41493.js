var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/632157.js");
var o = require("../app/287461.js");
var l = a(require("../app/196554.js"));
var i = require("../app/177938.js");
var u = require("./244380.js");
var s = require("./777178.js");
var c = require("./983710.js");
var d = a(require("./908081.js"));
var f = a(require("./324093.js"));
var p = require("./626194.js");
var m = a(require("./969358.js"));
var h = require("./741917.js");
var g = require("../app/656134.js");
var E = require("../app/753233.js");
var v = require("../app/258105.js");
var _ = require("../app/114850.js");
var y = a(require("./431798.js"));
var C = require("./695431.js");
var b = require("./211351.js");
var M = require("../app/180519.js");
var S = require("../app/625786.js");
var T = require("../app/390737.js");
var w = require("../app/454905.js");
var A = require("./254014.js");
var P = require("./123965.js");
var O = require("./145454.js");
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
  var n = R(t);
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
var I = a(require("../app/156720.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const N = {
  header: {
    marginTop: "e3miq1pi",
    marginEnd: "jnwc1y2a",
    marginBottom: "pz0xruzv",
    marginStart: "svoq16ka",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    color: "j3oq2rgp"
  },
  paragraph: {
    marginTop: "eg3lofc5",
    marginEnd: "jnwc1y2a",
    marginBottom: "pz0xruzv",
    marginStart: "svoq16ka",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    color: "pm5hny62"
  },
  learnMoreLink: {
    display: "l7jjieqr",
    marginTop: "bddvio20"
  }
};
function x(e, t) {
  let {
    onClose: n,
    entryPoint: a
  } = e;
  const [R, x] = (0, D.useState)(() => {
    var e;
    var t;
    const n = (0, g.getDisappearingModeSettingForUser)(i.ContactCollection.getMeContact());
    return {
      duration: (e = n == null ? undefined : n.duration) !== null && e !== undefined ? e : 0,
      settingTimestamp: (t = n == null ? undefined : n.settingTimestamp) !== null && t !== undefined ? t : 0
    };
  });
  const L = R.duration > 0;
  (0, D.useEffect)(() => {
    new c.DisappearingModeSettingEventsWamEvent({
      disappearingModeSettingEventName: A.DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.DEFAULT_MESSAGE_TIMER_OPEN,
      disappearingModeEntryPoint: a
    }).commit();
  }, []);
  (0, D.useEffect)(() => {
    if (L) {
      new u.DisappearingMessageChatPickerWamEvent({
        dmChatPickerEntryPoint: P.DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING,
        dmChatPickerEventName: O.DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_LINK_IMPRESSION,
        ephemeralityDuration: R.duration
      }).commit();
    }
  }, [L]);
  const j = (0, o.getABPropConfigValue)("ddm_reversed_options");
  return D.default.createElement(d.default, {
    ref: t,
    testid: "ddm-drawer"
  }, D.default.createElement(p.DrawerHeader, {
    testid: "drawer-title-emphemerality",
    title: k.fbt._("Default message timer", null, {
      hk: "21k0OM"
    }),
    onBack: function (e) {
      new c.DisappearingModeSettingEventsWamEvent({
        disappearingModeSettingEventName: A.DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.DEFAULT_MESSAGE_TIMER_EXIT,
        disappearingModeEntryPoint: a
      }).commit();
      n(e);
    },
    focusBackOrCancel: true,
    type: (0, w.topMenuRedesignEnabled)() ? p.DRAWER_HEADER_TYPE.SMALL : p.DRAWER_HEADER_TYPE.LARGE
  }), D.default.createElement(f.default, null, D.default.createElement(m.default, {
    theme: "padding-no-vertical",
    animation: false
  }, D.default.createElement(M.TextHeader, {
    xstyle: N.header
  }, k.fbt._("Start new chats with disappearing messages", null, {
    hk: "4m2cun"
  })), D.default.createElement(C.RadioGroup, {
    name: "duration",
    theme: C.RadioWithLabelThemeEnum.LARGE,
    checkedValue: R.duration,
    options: (0, h.getDefaultEphemeralityDurations)(j).map(e => {
      let {
        value: t,
        label: n
      } = e;
      return {
        value: t,
        label: n,
        onChange: () => function (e) {
          const t = R.duration;
          const n = R.settingTimestamp;
          if (e !== t) {
            x({
              duration: e,
              settingTimestamp: (0, r.unixTime)()
            });
            (0, b.setDisappearingMode)(e).then(() => {
              new s.DisappearingModeSettingChangeWamEvent({
                disappearingModeEntryPoint: a,
                lastToggleTimestamp: n,
                newEphemeralityDuration: e,
                previousEphemeralityDuration: t
              }).commit();
            }).catch(() => {
              __LOG__(4, undefined, new Error(), true)`DDM duration change failed. Entry: ${a} Previous: ${t} New: ${e}`;
              SEND_LOGS("DDM-change-fail");
              x({
                duration: t,
                settingTimestamp: n
              });
              T.ToastManager.open(D.default.createElement(S.Toast, {
                msg: k.fbt._("Failed to change disappearing messages duration", null, {
                  hk: "45xo8v"
                })
              }));
            });
          }
        }(t)
      };
    })
  }), D.default.createElement("div", {
    className: (0, I.default)(N.paragraph)
  }, L ? D.default.createElement(M.TextParagraph, null, k.fbt._("This does not affect your existing chats. Apply this message timer to existing chats {=m1}.", [k.fbt._implicitParam("=m1", D.default.createElement(l.default, {
    onClick: function () {
      _.ModalManager.open(D.default.createElement(y.default, {
        initialDuration: R.duration,
        entryPoint: P.DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING
      }));
    },
    tabIndex: 0
  }, k.fbt._("by selecting them", null, {
    hk: "1iDIPr"
  })))], {
    hk: "3BvQhm"
  })) : D.default.createElement(M.TextParagraph, null, k.fbt._("When turned on, all new individual chats will start with disappearing messages set to the duration you select. This setting will not affect your existing chats.", null, {
    hk: "zDzLO"
  })), D.default.createElement(E.ExternalLink, {
    href: (0, v.getEphemeralFaqUrl)(),
    xstyle: N.learnMoreLink,
    onClick: function () {
      new c.DisappearingModeSettingEventsWamEvent({
        disappearingModeSettingEventName: A.DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.LEARN_MORE_CLICK,
        disappearingModeEntryPoint: a
      }).commit();
    }
  }, k.fbt._("Learn more", null, {
    hk: "3foPyp"
  }))))));
}
var L = (0, D.forwardRef)(x);
exports.default = L;