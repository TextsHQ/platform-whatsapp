var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactInfoCard = function (e) {
  var t;
  var n;
  let {
    chat: a,
    contact: D
  } = e;
  const R = (0, m.supportsFMXV2)();
  const N = () => {
    s.DrawerManager.openDrawerRight(P.default.createElement(E.InfoFlowLoadable, {
      chat: (0, b.unproxy)(a),
      key: `info-${a.id.toString()}`
    }));
  };
  const [x, L, j, B, F, G] = (0, k.useContactValues)(D.id, [i.getId, i.getNotifyName, h.getIsContactBlocked, i.getIsSmb, h.getCommonGroups, i.getIsMyContact]);
  const {
    value: U
  } = (0, O.default)((0, r.default)(function* () {
    return (0, p.getCountryCodeTrustSignal)(D);
  }), [D]);
  const {
    value: W
  } = (0, O.default)((0, r.default)(function* () {
    if (!B) {
      return (0, g.getPrioritizedCommonGroups)(D);
    }
  }), [D, B]);
  const H = (t = W == null ? undefined : W.commonGroups.length) !== null && t !== undefined ? t : 0;
  const V = W == null || (n = W.priority) === null || n === undefined ? undefined : n.wamEnum;
  const q = (0, p.getContactTrustSignal)(D);
  const Y = (0, P.useCallback)(e => {
    new f.FmxActionWamEvent({
      fmxEvent: e,
      fmxEntryPoint: M.FMX_ENTRY_POINT.FMX_CARD,
      commonGroupNum: H,
      countryShown: Boolean(U),
      notAContactShown: Boolean(q),
      isSenderSmb: B
    }).commit();
  }, [H, U, q, B]);
  let z;
  (0, P.useEffect)(() => {
    new f.FmxActionWamEvent({
      fmxEvent: S.FMX_EVENT.HIGHLIGHT_GROUP_NAME,
      fmxEntryPoint: M.FMX_ENTRY_POINT.FMX_CARD,
      highlightGroupType: V
    }).commit();
  }, [V]);
  const K = H > 0;
  if (W != null) {
    if (K) {
      var Q;
      const e = () => {
        Y(S.FMX_EVENT.COMMON_GROUPS);
        N();
      };
      const t = W == null || (Q = W.priority) === null || Q === undefined ? undefined : Q.group;
      if (R && t != null) {
        if (H > 1) {
          const n = P.default.createElement(w.WDSClickableText, {
            color: "teal",
            onClick: e
          }, A.fbt._({
            "*": "{number_common_groups} Groups including {group-name}",
            _1: "1 Group including {group-name}"
          }, [A.fbt._plural(H, "number_common_groups"), A.fbt._param("group-name", t.name)], {
            hk: "1xiyfo"
          }));
          z = A.fbt._("You're both in {inner-text}", [A.fbt._param("inner-text", n)], {
            hk: "3PBPAC"
          });
        } else {
          z = A.fbt._("You're both in the group {=m1}", [A.fbt._implicitParam("=m1", P.default.createElement(w.WDSClickableText, {
            color: "teal",
            onClick: e
          }, A.fbt._("{group-name}", [A.fbt._param("group-name", t.name)], {
            hk: "nL3Gl"
          })))], {
            hk: "1B6QOW"
          });
        }
      } else {
        z = P.default.createElement(w.WDSClickableText, {
          color: "teal",
          onClick: e
        }, A.fbt._({
          "*": "{number_common_groups} Groups in common",
          _1: "1 Group in common"
        }, [A.fbt._plural(H, "number_common_groups")], {
          hk: "4wGOKM"
        }));
      }
    } else {
      z = A.fbt._("No groups in common", null, {
        hk: "1tEFN6"
      });
    }
  }
  const X = (B ? [U, q, A.fbt._("Business account", null, {
    hk: "3xdPWC"
  })] : [U, q, z]).filter(Boolean);
  return P.default.createElement(d.FlexColumn, {
    align: "center",
    padding: [24, 12],
    xstyle: I.container
  }, P.default.createElement(d.FlexColumn, {
    align: "center"
  }, P.default.createElement(u.DetailImage, {
    id: x,
    size: u.DetailImageSize.Medium,
    quality: u.DetailImageQuality.High,
    onClick: () => {
      Y(S.FMX_EVENT.CONTACT_INFO);
      N();
    }
  }), P.default.createElement(w.WDSTextLarge, {
    paddingTop: 8
  }, P.default.createElement(_.Name, {
    contact: D
  })), L != null && P.default.createElement(w.WDSTextMuted, null, `~${L}`), P.default.createElement(w.WDSTextSmall, {
    paddingTop: 8
  }, X.map((e, t) => P.default.createElement("span", {
    key: t
  }, e, t < X.length - 1 && P.default.createElement(P.default.Fragment, null, " • "))))), P.default.createElement(T.ButtonGroup, {
    direction: "vertical",
    align: "stretch",
    paddingTop: 16,
    style: {
      minWidth: 160
    }
  }, !(R && (K || B)) && P.default.createElement(T.WDSButtonSimplified, {
    onClick: () => {
      Y(S.FMX_EVENT.SAFETY_TOOLS);
      (0, y.displaySafetyToolsModal)(D, a);
    },
    icon: v.InfoShieldIcon
  }, A.fbt._("Safety tools", null, {
    hk: "1tvFC9"
  })), j ? P.default.createElement(T.WDSButtonSecondary, {
    onClick: () => {
      (0, o.handleUnblock)(D, a.trusted ? l.BlockEntryPoint.ChatFmxCardBlock : l.BlockEntryPoint.ChatFmxCardBlockSuspicious);
      Y(S.FMX_EVENT.BLOCK);
    }
  }, (0, c.default)("Unblock")) : P.default.createElement(T.WDSButtonSecondaryDestructive, {
    onClick: () => {
      (0, o.handleBlock)(a, a.trusted ? l.BlockEntryPoint.ChatFmxCardBlock : l.BlockEntryPoint.ChatFmxCardBlockSuspicious);
      Y(S.FMX_EVENT.BLOCK);
    },
    icon: C.SettingsBlockedIcon
  }, (0, c.default)("Block"))));
};
var r = a(require("../vendor/348926.js"));
var o = require("./923092.js");
var l = require("../app/400436.js");
var i = require("../app/660666.js");
var u = require("../app/23641.js");
var s = require("../app/900316.js");
var c = a(require("../app/395767.js"));
var d = require("../app/690495.js");
var f = require("../app/392802.js");
var p = require("./93907.js");
var m = require("../app/798202.js");
var h = require("../app/714574.js");
var g = require("./503082.js");
var E = require("./81095.js");
var v = require("./292705.js");
var _ = require("../app/21645.js");
var y = require("./986417.js");
var C = require("./290562.js");
var b = require("../app/163139.js");
var M = require("../app/604106.js");
var S = require("../app/283136.js");
var T = require("../app/617425.js");
var w = require("../app/851488.js");
var A = require("../vendor/548360.js");
var P = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var O = a(require("../app/802145.js"));
var k = require("../app/379811.js");
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = {
  container: {
    width: "btmakhtb",
    boxSizing: "cm280p3y"
  }
};