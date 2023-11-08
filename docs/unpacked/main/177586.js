var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eMessageStatusV3List = exports.E2eMessageChatList = exports.E2eMessage = undefined;
var r = a(require("../app/196554.js"));
var o = require("../app/510337.js");
var l = require("./673509.js");
var i = require("./608527.js");
var u = require("../app/114850.js");
var s = require("./111367.js");
var c = require("./24578.js");
var d = require("../app/115927.js");
var f = require("../main-chunk/931109.js");
var p = require("../app/521394.js");
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var g = a(require("../app/156720.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  container: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    marginTop: "eg3lofc5",
    marginEnd: "gqi0zhd6",
    marginBottom: "pz0xruzv",
    marginStart: "nzcjdldu",
    paddingTop: "emrlamx0"
  },
  chatListContainer: {
    borderTop: "swyb62mu",
    color: "tviruh8d"
  },
  chatListIcon: {
    fill: "ms8wnqe5"
  },
  statusListContainer: {
    color: "kcq1et6t"
  },
  statusListIcon: {
    fill: "mesvn7sa"
  },
  secondaryColors: {
    color: "pm5hny62",
    fill: "h9l086de"
  },
  icon: {
    marginTop: "b9l0eqez",
    marginEnd: "kjemk6od",
    display: "l7jjieqr"
  },
  body: {
    textAlign: "qfejxiq4",
    justifyContent: "ac2vgrno",
    display: "p357zi0d"
  },
  main: {
    fontSize: "dsh4tgtl",
    fontWeight: "e1gr2w1z",
    lineHeight: "bsvz8e3l",
    whiteSpace: "hmy10g0s",
    wordBreak: "cw3vfol9"
  }
};
exports.E2eMessageChatList = () => {
  const e = m.fbt._("Your personal messages are {=m2}", [m.fbt._implicitParam("=m2", h.default.createElement(r.default, {
    testid: "chatlist-e2e-message-link",
    onClick: () => {
      u.ModalManager.open(h.default.createElement(l.E2eInfoModalV2, {
        highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
        url: (0, s.securityUrl)()
      }));
    },
    tabIndex: 0,
    "data-tab": f.TAB_ORDER.E2E_MESSAGE_BTN
  }, m.fbt._("end-to-end encrypted", null, {
    hk: "18aFGy"
  })))], {
    hk: "3mx0DZ"
  });
  return h.default.createElement(_, {
    testid: "chatlist-e2e-message",
    iconXstyle: v.chatListIcon,
    text: e,
    xstyle: v.chatListContainer,
    highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST
  });
};
exports.E2eMessageStatusV3List = () => {
  const e = m.fbt._("Your status updates are {=m2}", [m.fbt._implicitParam("=m2", h.default.createElement(r.default, {
    tabIndex: 0,
    testid: "status-e2e-message-link",
    onClick: () => {
      u.ModalManager.open(h.default.createElement(l.E2eInfoModalStatus, {
        highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
        url: (0, s.securityUrl)()
      }));
    }
  }, m.fbt._("end-to-end encrypted", null, {
    hk: "3h6Pts"
  })))], {
    hk: "2XVwhj"
  });
  return h.default.createElement(_, {
    testid: "status-e2e-message",
    iconXstyle: [v.statusListIcon, (0, d.isStatusDrawerEnabled)() && v.secondaryColors],
    text: e,
    xstyle: [v.statusListContainer, (0, d.isStatusDrawerEnabled)() && v.secondaryColors],
    highlightSurface: p.PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST
  });
};
const _ = e => {
  let {
    text: t,
    xstyle: n,
    iconXstyle: a,
    highlightSurface: r,
    testid: l
  } = e;
  (0, h.useEffect)(() => {
    (0, c.incrementPrinaDailyCount)(r, o.PrinaDailyActionType.NARRATIVE_APPEAR);
  }, []);
  return h.default.createElement("div", {
    className: (0, g.default)(v.container, n)
  }, h.default.createElement("div", {
    className: (0, g.default)(v.body)
  }, h.default.createElement("div", {
    className: (0, g.default)(v.main)
  }, h.default.createElement(i.LockSmallV2Icon, {
    xstyle: [v.icon, a],
    height: 12,
    width: 13
  }), t)));
};
exports.E2eMessage = _;