var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/780549.js");
var i = require("../app/356097.js");
var u = require("./602876.js");
var s = a(require("./666212.js"));
var c = require("./654386.js");
var d = require("../app/373070.js");
var f = require("../app/180519.js");
var p = require("./117182.js");
var m = a(require("../app/556869.js"));
var h = require("../vendor/548360.js");
var g = function (e, t) {
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
var E = a(require("../app/156720.js"));
var v = require("../app/808446.js");
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
  albumGridClass: {
    flexBasis: "q7l348o2",
    width: "ln8gz9je",
    maxWidth: "cu1tgave",
    height: "bvcnfjzh"
  },
  albumAnnouncementGridClass: {
    maxWidth: "kunn5ads"
  },
  albumTopLeft: {
    marginTop: "tt8xd2xn",
    marginEnd: "kjemk6od",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  albumTopRight: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  albumBottomLeft: {
    marginTop: "g1eqewly",
    marginEnd: "kjemk6od",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  albumBottomRight: {
    marginTop: "g1eqewly",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  numberText: {
    position: "lhggkp7q",
    zIndex: "g2bpp9au",
    marginTop: "m3ct2rho",
    marginEnd: "k1jo73ug",
    marginBottom: "ec1z5skj",
    marginStart: "isfiuinm",
    fontSize: "lhhjz8ro",
    color: "k17s6i4e",
    pointerEvents: "m62443ks"
  }
};
const C = new Map([[u.AlbumPosition.TOP_LEFT, y.albumTopLeft], [u.AlbumPosition.TOP_RIGHT, y.albumTopRight], [u.AlbumPosition.BOTTOM_LEFT, y.albumBottomLeft], [u.AlbumPosition.BOTTOM_RIGHT, y.albumBottomRight]]);
function b(e, t) {
  const {
    msg: n,
    albumPosition: a,
    numAdditionalMedia: u,
    displayType: s
  } = e;
  const c = (0, g.useRef)(null);
  const f = (0, g.useRef)(null);
  (0, v.useListener)(n, "change:type", () => {
    if (n.type === d.MSG_TYPE.REVOKED) {
      l.Cmd.refreshMessages();
    }
  });
  const p = () => f.current;
  const m = () => (0, o.default)(c.current, "containerRef.current");
  (0, g.useImperativeHandle)(t, () => ({
    getRef: p,
    getContainerElement: m
  }));
  return g.default.createElement("div", {
    ref: c,
    className: (0, E.default)(y.albumGridClass, (0, i.isWideDisplay)(s) && y.albumAnnouncementGridClass)
  }, g.default.createElement("div", {
    className: (0, E.default)(C.get(a))
  }, g.default.createElement(S, (0, r.default)({}, e, {
    elRef: f,
    overlayContent: u != null && u > 0 ? g.default.createElement(M, {
      numAdditionalMedia: u
    }) : null
  }))));
}
function M(e) {
  let {
    numAdditionalMedia: t
  } = e;
  return g.default.createElement(f.TextSpan, {
    className: (0, E.default)(y.numberText)
  }, h.fbt._("+{number}", [h.fbt._param("number", t)], {
    hk: "2Nqnnt"
  }));
}
function S(e) {
  if (e.msg.type === d.MSG_TYPE.IMAGE) {
    return g.default.createElement(c.ImageMessage, {
      theme: p.DisplayTheme.Album,
      albumMsgs: e.albumMsgs,
      msg: e.msg,
      mediaData: e.msg.mediaData,
      ref: e.elRef,
      isMsgVisible: e.isMsgVisible,
      zoomMsg: e.zoomMsg,
      overlayContent: e.overlayContent,
      displayAuthor: false,
      displayType: e.displayType
    });
  }
  if (e.msg.type === d.MSG_TYPE.VIDEO) {
    return g.default.createElement(s.default, {
      theme: p.DisplayTheme.Album,
      albumMsgs: e.albumMsgs,
      msg: e.msg,
      ref: e.elRef,
      zoomMsg: e.zoomMsg,
      displayAuthor: false,
      overlayContent: e.overlayContent,
      displayType: e.displayType
    });
  }
  throw (0, m.default)(`Unexpected Album Type: ${e.msg.type}`);
}
var T = (0, g.forwardRef)(b);
exports.default = T;