var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsDrawer = undefined;
var r = a(require("../app/786566.js"));
var o = a(require("./761323.js"));
var l = a(require("./908081.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = a(require("./969358.js"));
var c = require("../app/305521.js");
var d = a(require("./570834.js"));
var f = require("../app/675886.js");
var p = require("../app/163755.js");
var m = require("../app/787742.js");
var h = require("../app/44118.js");
var g = require("../app/435711.js");
var E = require("./484590.js");
var v = require("./620283.js");
var _ = require("./54787.js");
var y = require("./130283.js");
var C = require("../app/676345.js");
var b = require("../vendor/548360.js");
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
var S = a(require("../app/156720.js"));
var T = require("../app/140455.js");
var w = a(require("../app/637660.js"));
var A = require("./871210.js");
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
  display: "f804f6gw",
  fontSize: "iqrewfee",
  lineHeight: "omdkrxc4",
  wordBreak: "cw3vfol9"
};
const k = {
  fontSize: "ovllcyds",
  lineHeight: "r5qsrrlp",
  display: "l7jjieqr"
};
function D(e, t) {
  var n;
  var a;
  const {
    msg: P,
    onClose: D,
    onViewAllVotes: I
  } = e;
  const R = (0, T.useElectronCompatibleStyles)().pollDetailsQuestionTextSize;
  const N = (0, y.useVoteCount)(P);
  const x = (0, v.useResults)(P);
  const [L, j, B] = (0, A.useMsgValues)(P.id, o.default, [m.getPollName, m.getId, m.getPollInvalidated]);
  const F = (0, p.getChat)(P.unsafe());
  const G = (0, _.useStickySortedResults)(x);
  const U = (0, f.Conversation)({
    links: (n = (0, h.getLinksFromMsg)(P.unsafe())) !== null && n !== undefined ? n : [],
    phoneNumbers: [],
    selectable: true,
    trusted: (0, g.isTrusted)(P.unsafe()),
    fromMe: j.fromMe
  });
  const W = (0, w.default)(() => new d.default());
  const H = F.isGroup ? (a = F.groupMetadata) === null || a === undefined ? undefined : a.participants.length : 0;
  return M.default.createElement(l.default, {
    ref: t,
    key: "poll-details-drawer",
    theme: "striped",
    testid: "poll-details-drawer"
  }, M.default.createElement(u.DrawerHeader, {
    title: b.fbt._("Poll details", null, {
      hk: "2dEdZC"
    }),
    type: u.DRAWER_HEADER_TYPE.SMALL,
    onCancel: D,
    rtlFixIfOnDarwin: true,
    focusBackOrCancel: true
  }), M.default.createElement(i.default, {
    flatListControllers: [W.current]
  }, M.default.createElement(s.default, {
    theme: "no-padding"
  }, B && M.default.createElement(r.default, {
    type: "invalidPoll",
    text: b.fbt._("Results only show votes made before you left the group.", null, {
      hk: "LPYBv"
    }),
    textTestid: "invalid-poll-details-view-warning"
  }), M.default.createElement("div", {
    className: (0, S.default)(C.paddingVert20, C.paddingHoriz30)
  }, M.default.createElement(c.EmojiText, {
    text: L,
    selectable: true,
    formatters: U,
    className: (0, S.default)(O, R)
  }), H != null && H > 1 && M.default.createElement("span", {
    className: (0, S.default)(k, C.marginTop8)
  }, b.fbt._({
    "*": "{vote_count} of {group_length} participants voted",
    _1: "{vote_count} of 1 participant voted"
  }, [b.fbt._plural(H, "group_length"), b.fbt._param("vote_count", N)], {
    hk: "4krKX0"
  })))), G.map(e => {
    let [t, n] = e;
    return M.default.createElement(E.OptionSection, {
      key: t.localId,
      option: t,
      result: n,
      isPollFromMe: j.fromMe,
      links: (0, h.getPollOptionLinks)(P.unsafe(), t),
      onViewAllVotes: () => {
        I(t.localId);
      },
      flatListController: W.current
    });
  })));
}
const I = (0, M.forwardRef)(D);
exports.DetailsDrawer = I;
I.displayName = "DetailsDrawer";