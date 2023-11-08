var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, E.useState)(false);
  const a = (0, m.useIsDarkTheme)();
  const _ = g.fbt._("Bring in new customers with Facebook & Instagram ads", null, {
    hk: "1qnBDz"
  });
  const C = g.fbt._("Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.", null, {
    hk: "49VFVD"
  });
  const T = g.fbt._("Your business name and photo will be shared with Meta in order to create your ad. {=m2}", [g.fbt._implicitParam("=m2", E.default.createElement(d.ExternalLink, {
    href: (0, f.getSharingBusinessInfoForAdsFaqUrl)(),
    onClick: () => {
      if (e.onLearnMore) {
        e.onLearnMore();
      }
    }
  }, g.fbt._("Learn more", null, {
    hk: "1FyZPK"
  })))], {
    hk: "1t21SX"
  });
  const w = {
    className: (0, v.default)(h.uiPadding.end16),
    width: 25,
    height: 25
  };
  const A = [{
    icon: E.default.createElement(s.BusinessReachIcon, w),
    text: g.fbt._("Reach people locally", null, {
      hk: "20Yaen"
    })
  }, {
    icon: E.default.createElement(o.BusinessAdBudgetIcon, w),
    text: g.fbt._("Control your ad budget", null, {
      hk: "dfpBt"
    })
  }, {
    icon: E.default.createElement(u.BusinessPauseadsIcon, w),
    text: g.fbt._("Pause or stop ads anytime", null, {
      hk: "3I7t1I"
    })
  }].map((e, t) => E.default.createElement(S, {
    key: t,
    icon: e.icon
  }, e.text));
  const P = () => {
    if (e.onClose) {
      e.onClose();
    }
    p.ModalManager.close();
  };
  const O = function () {
    var t = (0, r.default)(function* () {
      n(true);
      try {
        yield e.onOK();
      } finally {
        n(false);
      }
      p.ModalManager.close();
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return E.default.createElement(c.ConfirmPopup, {
    onOK: O,
    okDisabled: t,
    okSpinner: t,
    okText: g.fbt._("Continue in Facebook", null, {
      hk: "2m7FWU"
    }),
    onCancel: P,
    onOverlayClick: P,
    cancelText: g.fbt._("Cancel", null, {
      hk: "E4E4a"
    })
  }, a ? E.default.createElement(l.BusinessChatdarkIcon, {
    width: 360,
    height: 128,
    className: (0, v.default)(M)
  }) : E.default.createElement(i.BusinessChatlightIcon, {
    width: 360,
    height: 128,
    className: (0, v.default)(M)
  }), E.default.createElement("div", {
    className: (0, v.default)(y)
  }, E.default.createElement("div", {
    className: (0, v.default)(b, h.uiMargin.all16, h.uiPadding.horiz36)
  }, _), E.default.createElement("p", null, C), E.default.createElement("ul", {
    className: (0, v.default)(h.uiPadding.horiz16, h.uiMargin.vert20)
  }, A), e.isPagelessAd === true && E.default.createElement("p", {
    className: (0, v.default)(h.uiMargin.vert32)
  }, T)));
};
var r = a(require("../vendor/348926.js"));
var o = require("./573898.js");
var l = require("./72296.js");
var i = require("./88180.js");
var u = require("./749061.js");
var s = require("./594276.js");
var c = require("../app/103440.js");
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = require("../app/114850.js");
var m = require("../app/667738.js");
var h = require("../app/676345.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var v = a(require("../app/156720.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  width: "ln8gz9je",
  letterSpacing: "hscjuerc",
  fontSize: "f8jlpxt4",
  lineHeight: "pvbam5uh",
  textAlign: "ljrqcn24"
};
const C = {
  display: "i86elurf",
  alignItems: "gndfcl4n"
};
const b = {
  fontSize: "p9fp32ui",
  lineHeight: "pvbam5uh",
  textAlign: "qfejxiq4"
};
const M = {
  display: "p357zi0d",
  justifyContent: "ac2vgrno"
};
const S = e => {
  let {
    icon: t,
    children: n
  } = e;
  return E.default.createElement("li", {
    className: (0, v.default)(h.uiPadding.vert5)
  }, E.default.createElement("span", {
    className: (0, v.default)(C)
  }, t, n));
};