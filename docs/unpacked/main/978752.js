var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KicNux = I;
exports.openKicNux = D;
exports.shouldShowKicNux = k;
exports.useKicNux = function (e) {
  return [k(e), t => D(e, t)];
};
var r = a(require("../vendor/348926.js"));
var o = require("../main-chunk/731728.js");
var l = require("../app/738501.js");
var i = require("../app/698867.js");
var u = require("../app/103440.js");
var s = require("../app/123292.js");
var c = require("../app/753233.js");
var d = require("../app/258105.js");
var f = require("../app/690495.js");
var p = a(require("../app/469733.js"));
var m = require("./31815.js");
var h = require("./965574.js");
var g = require("../app/114850.js");
var E = require("../app/95589.js");
var v = require("./276012.js");
var _ = require("../app/180519.js");
var y = require("./38291.js");
var C = require("../app/377773.js");
var b = require("./567572.js");
var M = require("./280511.js");
var S = require("../vendor/548360.js");
var T = function (e, t) {
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
var w = require("../app/808446.js");
var A = a(require("./157558.js"));
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
  badge: {
    backgroundColor: "aquyuamc",
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv",
    borderBottomEndRadius: "i5w8n1e6",
    borderBottomStartRadius: "cnpay6qi",
    color: "qiqvuef5",
    fontSize: "f8jlpxt4",
    marginTop: "c6axuxzh",
    paddingTop: "eujn52yf",
    paddingEnd: "abxuf49s",
    paddingBottom: "ckm995li",
    paddingStart: "mhcwslh8",
    textTransform: "ofejerhi"
  },
  header: {
    fontSize: "p9fp32ui",
    fontWeight: "hnx8ox4h",
    lineHeight: "tkq7s68q",
    marginTop: "opp68qpq",
    textAlign: "qfejxiq4",
    color: "p5g9vl8k"
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
    color: "k06jqncy",
    fontSize: "ovllcyds"
  }
};
function k(e) {
  return (0, C.shouldShowNUX)(E.NUX.KEEP_IN_CHAT) && (0, l.isEphemeralSettingOn)(e);
}
function D(e, t) {
  return new Promise(n => {
    g.ModalManager.open(T.default.createElement(I, {
      chat: e,
      entryPoint: b.KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
      trigger: t,
      onClose: n
    }));
  });
}
function I(e) {
  let {
    chat: t,
    entryPoint: n,
    trigger: a,
    onClose: l
  } = e;
  const [, C] = (0, A.default)(E.NUX.KEEP_IN_CHAT);
  (0, w.useListener)(g.ModalManager, "close_modal", () => {
    C();
    if (!(l == null)) {
      l();
    }
  });
  const P = function () {
    var e = (0, r.default)(function* () {
      const e = new m.KeepInChatNuxWamEvent();
      e.set({
        chatEphemeralityDuration: t.ephemeralDuration,
        kicNuxActionName: b.KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
        threadId: yield (0, i.getChatThreadID)(t.id.toJid()),
        trigger: a
      });
      e.commit();
      (0, c.openExternalLink)((0, d.getKICFaqUrl)());
      g.ModalManager.close();
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  let k;
  let D;
  let I;
  let N;
  (0, T.useEffect)(() => {
    (0, r.default)(function* () {
      const e = new m.KeepInChatNuxWamEvent();
      e.set({
        chatEphemeralityDuration: t.ephemeralDuration,
        kicNuxActionName: n,
        threadId: yield (0, i.getChatThreadID)(t.id.toJid()),
        trigger: a
      });
      e.commit();
    })();
  }, []);
  if (a === M.TRIGGER_TYPE.USER_MESSAGE_KEPT) {
    N = y.UndoKeepInChatIcon;
    k = S.fbt._("Someone kept your message so they can refer back to it", null, {
      hk: "4l5p4n"
    });
    D = S.fbt._("You can control if you want your messages kept in the chat by selecting the bookmark icon.", null, {
      hk: "PEOda"
    });
    I = S.fbt._("If you unkeep your message, no one can keep it again.", null, {
      hk: "2EcD4Q"
    });
  } else {
    N = o.CalendarEmptyIcon;
    k = S.fbt._("You can now keep messages in the chat from disappearing", null, {
      hk: "2ic6L"
    });
    D = S.fbt._("Keep messages you want to refer back to by selecting the bookmark icon.", null, {
      hk: "ZmzEJ"
    });
    I = S.fbt._("Anyone can keep messages in the chat, but you have the final say if your messages are kept or not.", null, {
      hk: "2RmPgv"
    });
  }
  const x = S.fbt._("Kept messages will not disappear from the chat, and everyone can see them.", null, {
    hk: "4oWiE2"
  });
  return T.default.createElement(u.ConfirmPopup, {
    testid: "kic_nux_modal",
    onOK: () => {
      g.ModalManager.close();
    },
    onCancel: P,
    cancelText: S.fbt._("LEARN MORE", null, {
      hk: "23Mkhi"
    })
  }, T.default.createElement(f.FlexColumn, {
    align: "center",
    justify: "center"
  }, T.default.createElement(p.default, null, T.default.createElement(h.KicNuxIcon, {
    width: 112,
    height: 112
  }))), T.default.createElement(f.FlexRow, {
    align: "center",
    justify: "center"
  }, T.default.createElement(p.default, {
    xstyle: O.badge
  }, S.fbt._("NEW", null, {
    hk: "5agQ"
  }))), T.default.createElement(_.TextHeader, {
    xstyle: O.header
  }, k), T.default.createElement(R, {
    Icon: N
  }, D), T.default.createElement(R, {
    Icon: v.PeopleIcon
  }, I), T.default.createElement(R, {
    Icon: s.DisappearingIcon
  }, x));
}
function R(e) {
  let {
    Icon: t,
    children: n
  } = e;
  return T.default.createElement(_.TextDiv, {
    xstyle: O.container
  }, T.default.createElement(t, {
    "aria-hidden": true,
    displayInline: true,
    width: 24,
    height: 24,
    xstyle: O.icon
  }), T.default.createElement(_.TextDiv, {
    xstyle: O.body
  }, T.default.createElement(_.TextSpan, null, n)));
}