var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyCanvas = g;
exports.MediaGalleryView = undefined;
var r = require("../app/396574.js");
var o = require("./811720.js");
var l = a(require("./650199.js"));
var i = a(require("../app/932325.js"));
var u = require("../app/956113.js");
var s = require("../app/572946.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var f = a(require("../app/156720.js"));
var p = a(require("../app/38085.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  canvasComponent: {
    position: "g0rxnol2",
    width: "d0st09ow",
    marginEnd: "spjzgwxb",
    marginBottom: "brac1wpa",
    "@media (max-width: 1024px)": {
      width: "bazijzwv"
    },
    "@media (max-width: 800px)": {
      width: "n0hkwe29"
    }
  },
  canvasComponentBefore: {
    display: "srqslfex",
    paddingTop: "h9iecx73",
    content: "d3pjxk2u"
  },
  canvasEmpty: {
    position: "g0rxnol2",
    width: "d0st09ow",
    height: "bbl9m3t3",
    marginEnd: "ikc09dv3",
    "@media (max-width: 1024px)": {
      width: "bazijzwv"
    },
    "@media (max-width: 800px)": {
      width: "n0hkwe29"
    }
  },
  canvasSecondRow: {
    display: "qibyn6m3",
    "@media (max-width: 1024px)": {
      display: "s9437i69"
    },
    "@media (max-width: 800px)": {
      display: "g3bgiwf5"
    }
  },
  canvasFirst: {
    height: "ohuqqxaf",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  more: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  container: {
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    flexWrap: "lkhkxwyq",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    paddingTop: "n1yiu2zv",
    marginEnd: "ikc09dv3",
    overflowY: "r7fjleex"
  },
  justifySpaceBetween: {
    justifyContent: "o4u7okr9",
    width: "ln8gz9je"
  },
  galleryEmpty: {
    height: "ohuqqxaf",
    paddingTop: "i5tg98hk",
    paddingBottom: "n3bptxsn",
    fontSize: "f8jlpxt4",
    lineHeight: "amac7m9s",
    color: "hcag4mye"
  },
  fontSmoothing: {
    "-webkit-font-smoothing": "kh4n4d4z",
    "-moz-osx-font-smoothing": "tt14wmjx"
  },
  drawer: {
    paddingTop: "t2quo9z4",
    paddingBottom: "hgytzyjk",
    paddingStart: "m1h4cxg8",
    paddingEnd: "qcdmbpik",
    marginEnd: "jnwc1y2a",
    overflowY: "rpvcun8f"
  },
  drawerBody: {
    position: "g0rxnol2",
    zIndex: "b9fczbqn",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    flexDirection: "f8m0rgwh",
    overflowX: "gfz4du6o",
    overflowY: "ag5g9lrv",
    opacity: "bs7a17vp"
  },
  themeChatInfo: {
    color: "ffxp8o2t"
  }
};
function g() {
  return d.default.createElement("div", {
    className: (0, f.default)(h.canvasEmpty)
  });
}
function E(e, t) {
  const {
    mediaCollection: n,
    fullCollection: a,
    chat: i,
    onScroll: c,
    justify: m
  } = e;
  const E = e.medias || e.productMedias;
  const _ = e.theme === "chat-info";
  const y = n.length === 0;
  const C = (0, d.useRef)(null);
  const b = (0, d.useRef)(null);
  const M = (0, p.default)(t, C);
  if (!E) {
    return null;
  }
  let S = (0, f.default)(h.container, Boolean(a) && h.drawer, y && h.galleryEmpty, y && s.isOSMac && h.fontSmoothing, m === "space-between" && h.justifySpaceBetween, _ && y && h.themeChatInfo);
  let T = [...E];
  if (n.queryMediaBefore && (a || T.length < 6)) {
    const e = (0, f.default)(h.more, h.canvasComponent, !a && T.length >= 3 && h.canvasSecondRow, n.length === 0 && h.canvasFirst);
    T.push(d.default.createElement("div", {
      className: e,
      key: "spinner"
    }, d.default.createElement("span", {
      className: (0, f.default)(h.canvasComponentBefore)
    }), d.default.createElement(u.Spinner, {
      stroke: 6,
      size: 24
    })));
  }
  if (E.length === 0) {
    if (a) {
      if (n.queryMediaBefore) {
        return d.default.createElement("div", {
          className: (0, f.default)(h.drawer, h.drawerBody)
        }, d.default.createElement(o.Loading, null));
      }
      if (!n.hasMediaBefore) {
        return d.default.createElement(o.MediaMsgs, null);
      }
    }
    if (_) {
      return null;
    }
    if (!(n.queryMediaBefore || n.hasMediaBefore)) {
      S = (0, r.classnamesConvertMeToStylexPlease)(S, (0, f.default)(h.galleryEmpty, s.isOSMac && h.fontSmoothing));
      T = [v(Math.max(i ? i.docCount : 0, 0), Math.max(i ? i.linkCount : 0, 0), Math.max(i ? i.productCount : 0, 0))];
    }
  } else {
    for (let e = 0; e < 6; e++) {
      T.push(d.default.createElement(g, {
        key: "empty" + e
      }));
    }
  }
  return d.default.createElement(l.default, {
    ref: b,
    customSelector: "[role='listitem']"
  }, d.default.createElement("div", {
    ref: M,
    tabIndex: 0,
    onFocus: () => {
      var e;
      if (document.activeElement === C.current) {
        if (!((e = b.current) === null || e === undefined)) {
          e.focusFirst();
        }
      }
    },
    onScroll: c,
    className: S
  }, T));
}
function v(e, t, n) {
  const a = [];
  if (e != null && e > 0) {
    a.push(c.fbt._({
      "*": "{count} Docs",
      _1: "1 Doc"
    }, [c.fbt._plural(e, "count")], {
      hk: "3VW60T"
    }));
  }
  if (t != null && t > 0) {
    a.push(c.fbt._({
      "*": "{count} Links",
      _1: "1 Link"
    }, [c.fbt._plural(t, "count")], {
      hk: "3vsrh3"
    }));
  }
  if (n != null && n > 0) {
    a.push(c.fbt._({
      "*": "{count} Products",
      _1: "1 Product"
    }, [c.fbt._plural(n, "count")], {
      hk: "1xR35L"
    }));
  }
  if (a.length > 0) {
    return a.join(i.default.t(54));
  } else {
    return c.fbt._("No Media, Links, Docs and Products", null, {
      hk: "3RKA8T"
    });
  }
}
const _ = (0, d.forwardRef)(E);
exports.MediaGalleryView = _;
_.displayName = "MediaGalleryView";