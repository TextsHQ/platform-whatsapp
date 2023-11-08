var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = a(require("../app/692629.js"));
var i = require("./430260.js");
var u = require("../app/738501.js");
var s = a(require("../app/196554.js"));
var c = require("../app/660666.js");
var d = a(require("./908081.js"));
var f = a(require("./324093.js"));
var p = require("./626194.js");
var m = a(require("./969358.js"));
var h = require("../app/448609.js");
var g = a(require("./113124.js"));
var E = a(require("./824367.js"));
var v = require("./780946.js");
var _ = require("../app/753233.js");
var y = require("../app/258105.js");
var C = a(require("../app/395767.js"));
var b = require("../app/690495.js");
var M = require("./617267.js");
var S = require("../app/97858.js");
var T = a(require("../app/99398.js"));
var w = require("../app/95589.js");
var A = require("../app/180519.js");
var P = require("../app/625786.js");
var O = require("../app/390737.js");
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
var I = a(require("../app/156720.js"));
var R = a(require("./157558.js"));
var N = a(require("../app/558532.js"));
var x = a(require("../app/321201.js"));
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
const j = {
  animation: {
    height: "ptxfukc7",
    width: "hp5m5kpu",
    marginTop: "nylzjxre",
    marginEnd: "jnwc1y2a",
    marginBottom: "bvhm1occ",
    marginStart: "svoq16ka"
  },
  ddmLink: {
    marginTop: "eg3lofc5",
    marginEnd: "jnwc1y2a",
    marginBottom: "pz0xruzv",
    marginStart: "svoq16ka",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    color: "pm5hny62"
  },
  nux: {
    marginTop: "nylzjxre",
    marginEnd: "lfum0007",
    marginBottom: "bvhm1occ",
    marginStart: "r6x3u63k",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7"
  },
  nuxAction: {
    paddingTop: "emrlamx0",
    paddingEnd: "bcymb0na",
    paddingBottom: "aiput80m",
    paddingStart: "e8k79tju",
    marginBottom: "du8bjn1j",
    textAlign: "qfejxiq4"
  },
  header: {
    marginTop: "eg3lofc5",
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
  spaceBefore: {
    "::before": {
      content: "seopfc61",
      whiteSpace: "i539y0ga"
    }
  }
};
function B(e, t) {
  const {
    chat: n,
    entryPoint: a,
    showNux: L,
    onClose: B,
    onDDMSettingsClick: F
  } = e;
  const G = (0, x.default)();
  const U = e => (0, u.getEphemeralSetting)(e) || 0;
  const [W, H] = (0, D.useState)(() => U(n));
  const V = function () {
    var e = (0, r.default)(function* () {
      const e = U(n);
      if (W !== e) {
        if (T.default.online) {
          yield (0, i.changeEphemeralDuration)(n, W, a, h.DisappearingModeTrigger.ChatSettings);
        } else {
          O.ToastManager.open(D.default.createElement(P.Toast, {
            msg: k.fbt._("You can't change this setting because you're not connected to the Internet. Check your Internet and try again.", null, {
              hk: "3r2v54"
            })
          }));
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const [q, Y] = (0, R.default)(w.NUX.EPHEMERAL);
  (0, N.default)(() => {
    if (q) {
      Y();
    }
  });
  const z = (0, S.isDefaultDisappearingMessagesEnabled)();
  let K;
  K = (0, c.getIsMe)(n.contact) ? k.fbt._("For more privacy and storage, all new messages will disappear from this chat after the selected duration, except when kept. You can change this setting at any time.", null, {
    hk: "3WQdTK"
  }) : n.isGroup ? k.fbt._("For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration, except when kept. Group admins control who can change this setting.", null, {
    hk: "NdaLv"
  }) : k.fbt._("For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration, except when kept. Anyone in the chat can change this setting.", null, {
    hk: "wr9PN"
  });
  const Q = (0, o.getABPropConfigValue)("ddm_reversed_options");
  return D.default.createElement(d.default, {
    theme: "gallery",
    ref: t,
    testid: "chat-dm-settings-drawer"
  }, D.default.createElement(p.DrawerHeader, {
    title: k.fbt._("Disappearing messages", null, {
      hk: "384ocn"
    }),
    onBack: () => {
      if (!(L && q)) {
        V();
      }
      if (B) {
        B();
      } else if (!(G == null)) {
        G.requestDismiss();
      }
      if (L && q) {
        Y();
      }
    },
    type: p.DRAWER_HEADER_TYPE.SMALL
  }), D.default.createElement(f.default, null, e.showNux && q ? D.default.createElement(m.default, {
    animation: false
  }, D.default.createElement("div", {
    className: (0, I.default)(j.nux)
  }, D.default.createElement(g.default, {
    fromMe: false
  })), D.default.createElement("div", {
    className: (0, I.default)(j.nuxAction)
  }, D.default.createElement(l.default, {
    type: "primary",
    onClick: Y,
    testid: "ephemeral-nux-close"
  }, (0, C.default)("OK")))) : D.default.createElement(m.default, {
    animation: false,
    theme: "padding-no-vertical"
  }, D.default.createElement("div", null, D.default.createElement(b.FlexRow, {
    align: "center",
    justify: "center"
  }, D.default.createElement(M.LottieAnimation, {
    loop: true,
    autoplay: true,
    data: E.default,
    xstyle: j.animation
  })), D.default.createElement(A.TextHeader, {
    xstyle: j.header
  }, k.fbt._("Make messages in this chat disappear", null, {
    hk: "2yBwQo"
  })), D.default.createElement(A.TextParagraph, {
    xstyle: j.paragraph
  }, K, D.default.createElement(_.ExternalLink, {
    href: (0, y.getEphemeralFaqUrl)(),
    xstyle: j.spaceBefore
  }, k.fbt._("Learn more", null, {
    hk: "1rcCLt"
  })))), D.default.createElement(v.EphemeralOptionsSection, {
    initialDuration: W,
    onChange: H,
    reverse: Q
  }), z && D.default.createElement(A.TextParagraph, {
    xstyle: j.ddmLink
  }, k.fbt._("Update your {=m1} in Settings", [k.fbt._implicitParam("=m1", D.default.createElement(s.default, {
    onClick: F
  }, k.fbt._("default message timer", null, {
    hk: "nymT1"
  })))], {
    hk: "nnsrt"
  })))));
}
var F = (0, D.forwardRef)(B);
exports.default = F;