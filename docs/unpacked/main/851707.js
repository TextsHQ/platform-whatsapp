var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, C.useModelValues)(e.notice, ["noticeId", "blocking", "blockingModal"]);
  const n = (0, _.useContext)(h.ThemeContext);
  const {
    blockingModal: a
  } = t;
  const [o, b] = (0, _.useState)(false);
  (0, y.useListener)(f.default, "change:blocking", () => {
    if (!f.default.blocking) {
      d.ModalManager.close();
    }
  });
  const T = () => f.default.noticeId != null && f.default.blockingModal != null && f.default.blocking === true;
  const w = () => {
    if (T() && !o) {
      new E.UserNoticeWamEvent({
        userNoticeId: f.default.noticeId,
        userNoticeContentVersion: f.default.policyVersion,
        userNoticeEvent: v.USER_NOTICE_EVENT.BLOCKING_MODAL_APPEAR
      }).commit();
      b(true);
    }
  };
  (0, y.useListener)(f.default, "change:noticeId", () => {
    b(false);
  });
  (0, y.useListener)(f.default, "change:blockingModal change:blocking", w);
  (0, _.useEffect)(() => {
    w();
  }, []);
  const A = () => {
    __LOG__(2)`user notice modal, user clicked logout`;
    d.ModalManager.close();
    p.Socket.logout();
  };
  const P = () => {
    location.reload();
  };
  const O = e => {
    if (e) {
      if (e.action === "logout") {
        return A;
      }
      if (e.action === "refresh") {
        return P;
      }
    }
    return M;
  };
  if (!a || !T()) {
    return null;
  }
  const {
    iconSvg: k,
    iconDescription: D = "",
    title: I,
    body: R,
    primaryButton: N,
    secondaryButton: x
  } = a;
  let L;
  if (k) {
    L = n.theme === "light" ? k.light : k.dark;
  }
  const j = _.default.createElement(r.AlertNoticeIcon, {
    "aria-label": D
  });
  const B = L && (0, i.sanitizeNoticeSVG)(L);
  const F = B ? _.default.createElement("span", {
    "aria-label": D,
    dangerouslySetInnerHTML: {
      __html: B
    }
  }) : j;
  const G = _.default.createElement(S, {
    btn: x,
    onClick: O(x)
  });
  const U = _.default.createElement(S, {
    btn: N,
    primary: true,
    onClick: O(N)
  });
  const W = {
    enter: O(N)
  };
  const H = I ? (0, i.sanitizeNoticeText)(I) : null;
  const V = R ? (0, i.sanitizeNoticeText)(R) : null;
  return _.default.createElement(s.HotKeys, {
    handlers: W
  }, _.default.createElement("div", {
    className: l.Conn.isSMB ? g.default.noticeSmbContainer : g.default.noticeContainer
  }, _.default.createElement(c.Modal, {
    actions: [G, U],
    type: c.ModalTheme.Flex
  }, _.default.createElement("div", {
    className: g.default.noticeModalContentWrapper
  }, _.default.createElement(u.FlexRow, {
    className: g.default.noticeSvgWrapper,
    align: "center",
    justify: "center"
  }, F), _.default.createElement(m.TextDiv, {
    theme: "popupTitle",
    className: g.default.headerText
  }, _.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: H
    }
  })), _.default.createElement(m.TextDiv, {
    theme: "plain",
    className: g.default.bodyText
  }, _.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: V
    }
  }))))));
};
var r = require("../app/4062.js");
var o = a(require("../app/692629.js"));
var l = require("../app/445729.js");
var i = require("../app/694209.js");
var u = require("../app/690495.js");
var s = require("../app/81644.js");
var c = require("../app/118612.js");
var d = require("../app/114850.js");
var f = a(require("./338847.js"));
var p = require("../app/38878.js");
var m = require("../app/180519.js");
var h = require("../app/667738.js");
var g = a(require("./494823.js"));
var E = require("./617671.js");
var v = require("./452704.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var y = require("../app/808446.js");
var C = require("../app/655241.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = () => {};
function S(e) {
  let {
    btn: t,
    primary: n = false,
    onClick: a
  } = e;
  if (t == null) {
    return null;
  }
  const r = `UserNoticeModalPopup-${t.action}Btn`;
  const l = `popup-controls-${t.action}`;
  return _.default.createElement(o.default, {
    testid: l,
    type: n ? "primary" : "secondary",
    onClick: a,
    key: r
  }, t.label);
}