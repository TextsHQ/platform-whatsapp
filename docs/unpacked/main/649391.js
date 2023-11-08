var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    fromMe: n,
    onOk: a
  } = e;
  const [, S] = (0, M.default)(g.NUX.EPHEMERAL);
  const [, A] = (0, M.default)(g.NUX.KEEP_IN_CHAT);
  const P = function () {
    var e = (0, r.default)(function* () {
      S();
      A();
      const e = new m.KeepInChatNuxWamEvent({
        kicNuxActionName: _.KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
        trigger: y.TRIGGER_TYPE.CHAT_ENTRY
      });
      if (t) {
        e.set({
          chatEphemeralityDuration: t.ephemeralDuration,
          threadId: yield (0, o.getChatThreadID)(t.id.toJid())
        });
      }
      e.commit();
      (0, u.openExternalLink)((0, s.getEphemeralFaqUrl)());
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  (0, b.useEffect)(() => {
    (0, r.default)(function* () {
      const e = new m.KeepInChatNuxWamEvent({
        kicNuxActionName: _.KIC_NUX_ACTION_NAME_TYPE.FIRST_DM_NUX_IMPRESSION,
        trigger: y.TRIGGER_TYPE.CHAT_ENTRY
      });
      if (t) {
        e.set({
          chatEphemeralityDuration: t.ephemeralDuration,
          threadId: yield (0, o.getChatThreadID)(t == null ? undefined : t.id.toJid())
        });
      }
      e.commit();
    })();
  }, []);
  const O = n ? C.fbt._("Get started with disappearing messages", null, {
    hk: "2Rjbbn"
  }) : C.fbt._("Disappearing messages are on in this chat", null, {
    hk: "FDiRa"
  });
  return b.default.createElement(l.ConfirmPopup, {
    testid: "ephemeral-kic-nux-modal",
    onOK: () => {
      S();
      A();
      h.ModalManager.close();
      if (a) {
        a();
      }
    },
    onCancel: P,
    cancelText: C.fbt._("LEARN MORE", null, {
      hk: "oivYP"
    })
  }, b.default.createElement(c.FlexColumn, {
    align: "center",
    justify: "center"
  }, b.default.createElement(d.default, null, b.default.createElement(i.DisappearingLogoIcon, {
    width: 112,
    height: 112
  }))), b.default.createElement(E.TextHeader, {
    xstyle: T.header
  }, O), b.default.createElement(E.TextParagraph, {
    xstyle: T.subtitle
  }, C.fbt._("This increases your privacy and can improve storage on your device.", null, {
    hk: "3xp4Fi"
  })), b.default.createElement(w, {
    Icon: v.TimerIcon,
    size: 18
  }, C.fbt._("New messages disappear for everyone after the selected duration.", null, {
    hk: "NhKeF"
  })), b.default.createElement(w, {
    Icon: p.KeepInChatIcon
  }, C.fbt._("Anyone can keep or unkeep messages in the chat. Group admins can limit this.", null, {
    hk: "3rilwF"
  })), b.default.createElement(w, {
    Icon: f.HandIcon
  }, C.fbt._("People may find other ways to save messages.", null, {
    hk: "3Y5a4e"
  })));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/698867.js");
var l = require("../app/103440.js");
var i = require("./528133.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = require("../app/690495.js");
var d = a(require("../app/469733.js"));
var f = require("./374153.js");
var p = require("./769153.js");
var m = require("./31815.js");
var h = require("../app/114850.js");
var g = require("../app/95589.js");
var E = require("../app/180519.js");
var v = require("./354677.js");
var _ = require("./567572.js");
var y = require("./280511.js");
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
  var n = S(t);
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
var M = a(require("./157558.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  header: {
    fontSize: "p9fp32ui",
    fontWeight: "hnx8ox4h",
    lineHeight: "tkq7s68q",
    marginTop: "lxsc1wef",
    textAlign: "qfejxiq4",
    color: "p5g9vl8k"
  },
  subtitle: {
    marginTop: "fgtikrv0",
    fontSize: "f8jlpxt4",
    textAlign: "qfejxiq4",
    marginBottom: "jg9mtn4o"
  },
  icon: {
    marginEnd: "gqi0zhd6",
    color: "k06jqncy"
  },
  container: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    marginTop: "c46o30wg",
    color: "i8b0kslj",
    fontSize: "ovllcyds"
  },
  body: {
    marginTop: "kv6wexeh",
    fontSize: "ovllcyds",
    color: "k06jqncy"
  }
};
function w(e) {
  let {
    Icon: t,
    children: n,
    size: a
  } = e;
  return b.default.createElement(E.TextDiv, {
    xstyle: T.container
  }, b.default.createElement(t, {
    "aria-hidden": true,
    displayInline: true,
    width: a != null ? a : 24,
    height: a != null ? a : 24,
    xstyle: T.icon
  }), b.default.createElement(E.TextDiv, {
    xstyle: T.body
  }, b.default.createElement(E.TextSpan, null, n)));
}