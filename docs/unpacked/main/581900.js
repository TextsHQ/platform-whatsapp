var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    fromInvoke: t,
    onOK: a,
    onCancel: T
  } = e;
  const [A, P] = (0, b.useState)(false);
  const O = function () {
    var e = (0, r.default)(function* () {
      if (!(0, s.hasSeenBotTos)()) {
        P(true);
        if (t) {
          yield (0, s.markSeenInvokeTos)();
        } else {
          yield (0, s.markSeenAgentTos)();
        }
        P(false);
      }
      v.ModalManager.close();
      if (!(a == null)) {
        a();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const k = (0, S.default)();
  (0, b.useEffect)(() => {
    if ((0, s.hasSeenBotTos)()) {
      if (t) {
        (0, s.markSeenInvokeTos)();
      } else {
        (0, s.markSeenAgentTos)();
      }
    }
  }, [t]);
  const D = b.default.createElement(m.FlexItem, null, t ? b.default.createElement(h.default, {
    src: require("./897521.js"),
    style: {
      width: 168,
      height: 168
    }
  }) : b.default.createElement(l.BotHeroIcon, {
    width: 168,
    height: 128
  }));
  const I = t ? C.fbt._("Introducing Meta AI in chats", null, {
    hk: "3HlShe"
  }) : C.fbt._("Introducing AI chats", null, {
    hk: "6nadp"
  });
  const R = t ? [{
    icon: b.default.createElement(u.BotMessageBubbleIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Bring the group together", null, {
      hk: "zaLCd"
    }),
    subtitle: C.fbt._("Get ideas for your next gathering, ask for recipes and more.", null, {
      hk: "4dFZGE"
    })
  }, {
    icon: b.default.createElement(g.LockIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Your personal messages stay private", null, {
      hk: "192vsN"
    }),
    subtitle: C.fbt._("Meta may use your AI messages to improve AI quality. But your personal messages are never sent to Meta. They can't be read and remain end-to-end encrypted.", null, {
      hk: "1o5zZK"
    })
  }, {
    icon: b.default.createElement(o.BotFeedbackIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Help improve Meta AI", null, {
      hk: "1x0BzD"
    }),
    subtitle: C.fbt._("Please give us feedback.", null, {
      hk: "vrhoB"
    })
  }] : [{
    icon: b.default.createElement(u.BotMessageBubbleIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Chat with different characters", null, {
      hk: "1HqrWw"
    }),
    subtitle: C.fbt._("Get unique perspectives on topics from travel to games to food.", null, {
      hk: "2uFkKy"
    })
  }, {
    icon: b.default.createElement(i.BotLightBulbIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Talk to your own assistant", null, {
      hk: "9rcyZ"
    }),
    subtitle: C.fbt._("Let Meta AI answer your questions, teach you something or come up with new ideas.", null, {
      hk: "14QJB7"
    })
  }, {
    icon: b.default.createElement(g.LockIcon, {
      width: 24,
      height: 24,
      iconXstyle: w.icon
    }),
    title: C.fbt._("Your personal messages stay private", null, {
      hk: "1a7qkM"
    }),
    subtitle: C.fbt._("Meta may use your AI messages to improve AI quality. But your personal messages are never sent to Meta. They can't be read and remain end-to-end encrypted.", null, {
      hk: "2bBFhM"
    })
  }];
  const N = C.fbt._("AI chats on WhatsApp are an optional Meta service. Meta uses AI chats consistent with their {=m2}. By clicking Accept, you agree to Meta's {=m5}. {=m8}", [C.fbt._implicitParam("=m2", b.default.createElement(f.ExternalLink, {
    href: (0, p.getBotPrivacyPolicyUrl)()
  }, C.fbt._("Privacy Policy", null, {
    hk: "15x4YY"
  }))), C.fbt._implicitParam("=m5", b.default.createElement(f.ExternalLink, {
    href: (0, p.getBotTermsUrl)()
  }, C.fbt._("AI Terms", null, {
    hk: "5kjTB"
  }))), C.fbt._implicitParam("=m8", b.default.createElement(f.ExternalLink, {
    href: (0, p.getBotLearnMoreUrl)()
  }, C.fbt._("Learn more", null, {
    hk: "47YT2i"
  })))], {
    hk: "3Ncy62"
  });
  return b.default.createElement(d.ConfirmPopup, {
    okText: C.fbt._("Accept", null, {
      hk: "2TD4oR"
    }),
    onOK: O,
    okSpinner: A === true,
    cancelText: C.fbt._("Cancel", null, {
      hk: "39lVqw"
    }),
    onCancel: () => {
      v.ModalManager.close();
      if (!(T == null)) {
        T();
      }
    },
    type: E.ModalTheme.Promote,
    ref: k
  }, b.default.createElement(m.FlexColumn, {
    align: "center",
    xstyle: [_.uiMargin.vertAuto, _.uiPadding.bottom16]
  }, D, b.default.createElement(c.Box, {
    xstyle: [w.headerText, _.uiMargin.horiz8, _.uiMargin.top16, _.uiMargin.bottom8]
  }, b.default.createElement(y.WDSTextLarge, {
    weight: "bold"
  }, I)), R.map((e, t) => {
    let {
      icon: n,
      title: a,
      subtitle: r
    } = e;
    return b.default.createElement(m.FlexRow, {
      key: t,
      className: (0, M.default)(_.uiMargin.horiz8, _.uiMargin.vert16)
    }, b.default.createElement(m.FlexItem, {
      xstyle: [_.uiPadding.horiz8, w.sectionIcon]
    }, n), b.default.createElement(m.FlexItem, {
      xstyle: [_.uiPadding.horiz8, w.sectionTitle]
    }, b.default.createElement(y.WDSTextTitle, null, a), b.default.createElement(y.WDSTextMuted, null, r)));
  }), b.default.createElement("div", {
    className: (0, M.default)(w.divider, _.uiMargin.vert16)
  }), b.default.createElement(c.Box, {
    xstyle: [_.uiMargin.horiz8, _.uiMargin.vert8]
  }, b.default.createElement(y.WDSTextMuted, null, N))));
};
var r = a(require("../vendor/348926.js"));
var o = require("./353331.js");
var l = require("./555621.js");
var i = require("../app/422723.js");
var u = require("./431306.js");
var s = require("../app/292167.js");
var c = require("../app/58972.js");
var d = require("../app/103440.js");
var f = require("../app/753233.js");
var p = require("../app/258105.js");
var m = require("../app/690495.js");
var h = a(require("../app/488922.js"));
var g = require("./821063.js");
var E = require("../app/118612.js");
var v = require("../app/114850.js");
var _ = require("../app/676345.js");
var y = require("../app/851488.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var M = a(require("../app/156720.js"));
var S = a(require("../app/401715.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
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