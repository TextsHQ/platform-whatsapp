var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("./504529.js");
var l = require("./305989.js");
var i = require("../app/396574.js");
var u = require("../app/780549.js");
var s = require("../app/356097.js");
var c = require("../app/707529.js");
var d = require("../app/81644.js");
var f = a(require("./965854.js"));
var p = require("../app/787742.js");
var m = require("./435595.js");
var h = a(require("../app/330619.js"));
var g = a(require("../app/844453.js"));
var E = a(require("./409468.js"));
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var _ = require("../app/808446.js");
var y = a(require("./286481.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function b(e, t) {
  var n;
  var a;
  var C;
  var b;
  const M = (0, v.useRef)(null);
  const {
    msgs: S,
    botPluginCarouselId: T
  } = e;
  const w = (n = S[0]) === null || n === undefined || (a = n.id) === null || a === undefined || (C = a.remote) === null || C === undefined ? undefined : C.isUser();
  const A = (0, v.useRef)(null);
  const [P, O] = (0, v.useState)(false);
  const [k, D] = (0, v.useState)(null);
  const [I, R] = (0, v.useState)(false);
  const N = (b = (0, p.getBotResponseTargetId)(S[0])) !== null && b !== undefined ? b : "NULL_MSG_BOT_PLUGIN_TARGET_ID";
  (0, _.useListener)(u.Cmd, `bot_toggle_plugin_search_details_for_target_id_${N}`, function () {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    O(e);
    self.setTimeout(() => {
      u.Cmd.scrollChatHeight(100);
    });
  });
  const x = () => M.current;
  const L = () => (0, r.default)(A.current, "containerRef.current");
  (0, v.useImperativeHandle)(t, () => ({
    getElement: x,
    getContainerElement: L
  }));
  (0, v.useEffect)(() => {
    if (k == null && S.length > 1) {
      D(true);
    }
  }, [S, k]);
  const j = e => {
    const t = S.length * 100 * (e ? 1 : -1);
    const n = M == null ? undefined : M.current;
    if (n != null) {
      (0, h.default)(n, "stop");
      (0, h.default)(n, "scroll", {
        SCROLL_ANIMATION: 200,
        container: n,
        offset: t,
        axis: "x",
        easing: [0.1, 0.82, 0.25, 1]
      });
    }
  };
  const B = (0, y.default)(() => {
    const e = M == null ? undefined : M.current;
    if (e == null) {
      return;
    }
    if (e.scrollLeft < 7) {
      R(false);
    } else {
      R(true);
    }
    const t = e.scrollLeft + e.clientWidth >= e.scrollWidth - 7;
    D(!t);
  }, 100);
  const F = S.sort((e, t) => {
    const n = e.botPluginReferenceIndex;
    const a = t.botPluginReferenceIndex;
    if (n != null && a != null) {
      if (n > a) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 0;
    }
  }).map(e => v.default.createElement("div", {
    key: e.id.id
  }, v.default.createElement(f.default, {
    msg: e.unsafe(),
    displayType: s.DISPLAY_TYPE.CONVERSATION,
    theme: "bot_plugin_link"
  })));
  const G = I === true ? v.default.createElement(o.ChevronButtonWithFadedBackground, {
    type: l.ButtonType.Prev,
    onClick: () => {
      j(false);
    },
    theme: m.RoundTheme.XSmall,
    displayType: l.ChevronButtonDisplayType.BotPluginCarousel
  }) : null;
  const U = k === true ? v.default.createElement(o.ChevronButtonWithFadedBackground, {
    type: l.ButtonType.Next,
    onClick: () => {
      j(true);
    },
    theme: m.RoundTheme.XSmall,
    displayType: l.ChevronButtonDisplayType.BotPluginCarousel
  }) : null;
  return v.default.createElement(c.ErrorBoundary, {
    name: "bot-plugin-carousel"
  }, v.default.createElement(d.HotKeys, {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [E.default.botPluginCarouselControlContainer]: true,
      [E.default.botPluginCarouselControlContainerClosed]: !P,
      [E.default.wrapperAdjustedOneOnOneChat]: w,
      [E.default.wrapperProfilePictureDisplayed]: !w
    }),
    ref: A,
    tabIndex: -1
  }, v.default.createElement(g.default, {
    transitionName: "bot-plugin-carousel"
  }, P ? v.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [E.default.botPluginScrollControl]: true,
      [E.default.messageChat]: true
    })
  }, G, v.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [E.default.botPluginCarouselWrapper]: true
    }),
    onScroll: B,
    ref: M
  }, v.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [E.default.botPluginCarouselContainer]: true,
      [E.default.botPluginCarouselContainerWidthSingleItem]: S.length === 1,
      [E.default.botPluginCarouselContainerWidthTwoItem]: S.length === 2
    }),
    "data-id": T
  }, F)), U) : null)));
}
var M = (0, v.forwardRef)(b);
exports.default = M;