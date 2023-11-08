var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BizBotTos = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./171369.js");
var o = require("./434554.js");
var s = require("./422723.js");
var l = require("./292167.js");
var u = require("./37237.js");
var c = require("./58972.js");
var d = require("./811026.js");
var p = require("./830439.js");
var f = require("./103440.js");
var _ = require("./753233.js");
var g = require("./258105.js");
var m = require("./690495.js");
var h = require("./118612.js");
var y = require("./114850.js");
var E = require("./87429.js");
var S = require("./676345.js");
var v = require("./851488.js");
var T = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var A = r(require("./156720.js"));
var b = r(require("./401715.js"));
var C = require("./808446.js");
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const O = {
  headerText: {
    textAlign: "qfejxiq4"
  },
  icon: {
    color: "svlsagor"
  },
  sectionIcon: {
    width: "i94gqilv"
  },
  sectionTitle: {
    width: "rtue7xhx",
    lineHeight: "pvbam5uh"
  },
  divider: {
    width: "baavq4sh",
    height: "kanlod6e",
    backgroundColor: "i86xphuw"
  }
};
const I = (0, M.forwardRef)((e, t) => {
  const {
    onOK: n,
    onCancel: r,
    automatedType: P,
    chatEntryPoint: I
  } = e;
  const [R, N] = (0, M.useState)(false);
  const D = P === u.BizBotAutomatedType.PARTIAL_1P;
  (0, C.useListener)(E.TosManager, "change", () => {
    if ((0, l.hasAcceptedBizBotTos)()) {
      y.ModalManager.close();
    }
  });
  (0, M.useImperativeHandle)(t, () => ({
    close: () => {
      y.ModalManager.close();
    }
  }));
  const w = function () {
    var e = (0, i.default)(function* () {
      let e = false;
      N(true);
      try {
        yield (0, l.acceptBizBotTos)();
        yield n == null ? undefined : n();
        e = true;
      } finally {
        N(false);
      }
      if (e) {
        y.ModalManager.close();
        (0, o.logBizBotNuxJourneyEvent)(D ? "1p" : "3p", "nux_select", I);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const L = () => {
    (0, l.dismissBizBotTos)();
    y.ModalManager.close();
    if (!(r == null)) {
      r();
    }
    (0, o.logBizBotNuxJourneyEvent)(D ? "1p" : "3p", "nux_dismiss", I);
  };
  const k = (0, b.default)();
  (0, M.useEffect)(() => {
    (0, o.logBizBotNuxJourneyEvent)(D ? "1p" : "3p", "nux_appear", I);
  }, []);
  const G = M.default.createElement(m.FlexItem, {
    xstyle: S.uiPadding.start10
  }, M.default.createElement(a.BizBotHeroIcon, {
    width: 200
  }));
  const U = T.fbt._("Chats that use AI", null, {
    hk: "3ABuz1"
  });
  const x = [{
    icon: M.default.createElement(s.BotLightBulbIcon, {
      width: 24,
      height: 24,
      iconXstyle: O.icon
    }),
    title: T.fbt._("Explore new AI chat experiences", null, {
      hk: "2AiKlw"
    }),
    subtitle: T.fbt._("Be more creative and productive while chatting with AIs from third-party developers.", null, {
      hk: "ecXfl"
    })
  }, {
    icon: M.default.createElement(p.CatalogEntrypointIcon, {
      width: 20,
      height: 20,
      iconXstyle: O.icon
    }),
    title: T.fbt._("Faster customer assistance", null, {
      hk: "405gB8"
    }),
    subtitle: T.fbt._("Businesses use AI to provide help 24/7 and offer customized shopping experiences.", null, {
      hk: "46NWVv"
    })
  }, {
    icon: M.default.createElement(d.BusinessDataSharingIcon, {
      width: 20,
      height: 20,
      iconXstyle: O.icon
    }),
    title: T.fbt._("Help AI get better and safer", null, {
      hk: "n98v4"
    }),
    subtitle: T.fbt._("Your AI chats are received by Meta, WhatsApp's parent company, to improve its AI quality. You can stop chatting at any time.", null, {
      hk: "1jSRDi"
    })
  }];
  const B = T.fbt._("Your personal messages remain end-to-end encrypted and are never sent to Meta. Meta uses AI chats consistent with their {=m2}. By tapping Accept, you agree to Meta's {=m5}. {=m8}", [T.fbt._implicitParam("=m2", M.default.createElement(_.ExternalLink, {
    href: (0, g.getBotPrivacyPolicyUrl)()
  }, T.fbt._("Privacy Policy", null, {
    hk: "4qWFos"
  }))), T.fbt._implicitParam("=m5", M.default.createElement(_.ExternalLink, {
    href: (0, g.getBotTermsUrl)()
  }, T.fbt._("AI Terms", null, {
    hk: "3B9MEA"
  }))), T.fbt._implicitParam("=m8", M.default.createElement(_.ExternalLink, {
    href: (0, g.getBizBotTosLearnMoreUrl)()
  }, T.fbt._("Learn more", null, {
    hk: "22wJzS"
  })))], {
    hk: "1tzLDi"
  });
  return M.default.createElement(f.ConfirmPopup, {
    okText: T.fbt._("Accept", null, {
      hk: "3ShfYA"
    }),
    onOK: w,
    okSpinner: R === true,
    cancelText: T.fbt._("Cancel", null, {
      hk: "2h4ay2"
    }),
    onCancel: L,
    onOverlayClick: () => {
      L();
    },
    type: h.ModalTheme.Promote,
    ref: k
  }, M.default.createElement(m.FlexColumn, {
    align: "center",
    xstyle: [S.uiMargin.vertAuto, S.uiPadding.bottom16]
  }, G, M.default.createElement(c.Box, {
    xstyle: [O.headerText, S.uiMargin.horiz8, S.uiMargin.top16, S.uiMargin.bottom8]
  }, M.default.createElement(v.WDSTextLarge, {
    weight: "bold"
  }, U)), x.map((e, t) => {
    let {
      icon: n,
      title: r,
      subtitle: i
    } = e;
    return M.default.createElement(m.FlexRow, {
      key: t,
      className: (0, A.default)(S.uiMargin.horiz8, S.uiMargin.vert16)
    }, M.default.createElement(m.FlexItem, {
      xstyle: [S.uiPadding.horiz8, O.sectionIcon]
    }, n), M.default.createElement(m.FlexItem, {
      xstyle: [S.uiPadding.horiz8, O.sectionTitle]
    }, M.default.createElement(v.WDSTextTitle, null, r), M.default.createElement(v.WDSTextMuted, null, i)));
  }), M.default.createElement("div", {
    className: (0, A.default)(O.divider, S.uiMargin.vert16)
  }), M.default.createElement(c.Box, {
    xstyle: [S.uiMargin.horiz8, S.uiMargin.vert8]
  }, M.default.createElement(v.WDSTextMuted, null, B))));
});
exports.BizBotTos = I;
I.displayName = "BizBotTos";