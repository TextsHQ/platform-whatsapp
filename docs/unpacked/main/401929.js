var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eSummarySecurityDrawer = exports.E2eSummary = undefined;
var r = require("./693807.js");
var o = require("./731324.js");
var l = require("./879483.js");
var i = require("./576769.js");
var u = require("./390719.js");
var s = require("./634113.js");
var c = require("./782599.js");
var d = require("./538557.js");
var f = require("./737174.js");
var p = require("./978981.js");
var m = require("./56624.js");
var h = require("../app/753233.js");
var g = require("./111367.js");
var E = require("./662268.js");
var v = require("./63798.js");
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
const b = (0, v.isVCFCopyBuildEnabled)();
const M = (0, v.isVCFUIBuildEnabled)();
const S = {
  container: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n"
  },
  containerSecurityDrawer: {
    width: "ln8gz9je"
  },
  title: {
    width: "ln8gz9je",
    fontSize: "p9fp32ui",
    marginTop: "fgtikrv0",
    marginEnd: "jnwc1y2a",
    marginBottom: "dblt22a0",
    marginStart: "svoq16ka",
    lineHeight: "l85iiqla",
    letterSpacing: "dktwgxt5",
    fontWeight: "hnx8ox4h",
    color: "rbdaq05k"
  },
  description: {
    fontSize: "f8jlpxt4",
    marginBottom: "or9x5nie",
    lineHeight: "a4ywakfo",
    color: "hp667wtd"
  },
  body: {
    width: "ln8gz9je",
    color: "hp667wtd",
    letterSpacing: "hscjuerc",
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    textAlign: "ljrqcn24"
  },
  body2: {
    width: "ln8gz9je",
    color: "rbdaq05k",
    letterSpacing: "hscjuerc",
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    textAlign: "ljrqcn24"
  },
  itemWrapper: {
    marginTop: "hymafltn",
    marginEnd: "jnwc1y2a",
    marginBottom: "g105fvfm",
    marginStart: "svoq16ka"
  },
  item: {
    display: "i86elurf",
    alignItems: "gndfcl4n"
  },
  icon: {
    paddingEnd: "kyc7k6mt"
  },
  textAlignStart: {
    textAlign: "ljrqcn24"
  },
  securityDrawerLearnMore: {
    fontWeight: "hnx8ox4h",
    fontSize: "f8jlpxt4",
    lineHeight: "a4ywakfo"
  }
};
const T = e => {
  let {
    icon: t,
    children: n
  } = e;
  return y.default.createElement("li", {
    className: (0, C.default)(S.itemWrapper)
  }, y.default.createElement("span", {
    className: (0, C.default)(S.item)
  }, t, n));
};
const w = e => {
  let {
    icon: t,
    xstyle: n,
    textAlignment: a,
    title: u,
    subTitle: h,
    isMessageYourselfChat: g = false
  } = e;
  const E = {
    className: (0, C.default)(S.icon),
    width: 25,
    height: 25
  };
  const v = [{
    icon: M ? y.default.createElement(f.E2EMessageV2Icon, E) : y.default.createElement(d.E2EMessageIcon, E),
    text: _.fbt._("Text and voice messages", null, {
      hk: "4lEA4f"
    })
  }, g ? null : {
    icon: M ? y.default.createElement(i.E2EContactInfoCallV2Icon, E) : y.default.createElement(l.E2EContactInfoCallIcon, E),
    text: _.fbt._("Audio and video calls", null, {
      hk: "2h2b8J"
    })
  }, {
    icon: M ? y.default.createElement(o.E2EAttachmentV2Icon, E) : y.default.createElement(r.E2EAttachmentIcon, E),
    text: _.fbt._("Photos, videos and documents", null, {
      hk: "46wemA"
    })
  }, {
    icon: M ? y.default.createElement(c.E2ELocationV2Icon, E) : y.default.createElement(s.E2ELocationIcon, E),
    text: _.fbt._("Location sharing", null, {
      hk: "1bJTGt"
    })
  }, g ? null : {
    icon: M ? y.default.createElement(m.E2EStatusV2Icon, E) : y.default.createElement(p.E2EStatusIcon, E),
    text: _.fbt._("Status updates", null, {
      hk: "1YeLwD"
    })
  }].map(e => {
    if (e != null) {
      return y.default.createElement(T, {
        key: e.icon,
        icon: e.icon
      }, e.text);
    }
  });
  return y.default.createElement("div", {
    className: (0, C.default)(S.container, n)
  }, y.default.createElement("div", null, t), y.default.createElement("div", {
    className: (0, C.default)(S.title, a)
  }, u), y.default.createElement("div", {
    className: (0, C.default)(S.description, a)
  }, h), y.default.createElement("div", {
    className: M ? (0, C.default)(S.body2) : (0, C.default)(S.body)
  }, y.default.createElement("ul", null, v)));
};
exports.E2eSummary = w;
exports.E2eSummarySecurityDrawer = () => {
  const e = b ? _.fbt._("WhatsApp protects your privacy", null, {
    hk: "2Vq5Et"
  }) : _.fbt._("Your chats and calls are private", null, {
    hk: "2ZLoAl"
  });
  const t = _.fbt._("End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:", null, {
    hk: "2wWXme"
  });
  const n = _.fbt._("Learn More", null, {
    hk: "eSqcw"
  });
  return y.default.createElement(y.default.Fragment, null, y.default.createElement(w, {
    icon: M ? y.default.createElement(u.E2EIllustrationV2Icon, {
      width: 220
    }) : y.default.createElement(E.SecurityDrawerLockIcon, {
      width: 84
    }),
    xstyle: S.containerSecurityDrawer,
    textAlignment: S.textAlignStart,
    title: e,
    subTitle: t
  }), y.default.createElement(h.ExternalLink, {
    className: (0, C.default)(S.securityDrawerLearnMore),
    href: (0, g.securityUrl)()
  }, n));
};