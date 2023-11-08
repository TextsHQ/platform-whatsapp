var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    onMediaGallery: n
  } = e;
  const a = f.fbt._("Media, links and docs", null, {
    hk: "3D4fAZ"
  });
  const o = p.default.createElement(l.ChevronRightAltIcon, {
    color: d.SvgColorProp.SECONDARY,
    directional: true
  });
  const u = p.default.createElement(i.FlexRow, {
    align: "center"
  }, p.default.createElement(_, {
    chat: t
  }), p.default.createElement("div", null, o));
  return p.default.createElement(r.ChatInfoDrawerSection, {
    titleTestId: "section-media",
    title: a,
    titleOnClick: n,
    subtitle: u,
    xstyle: v.drawerSection
  }, p.default.createElement(s.default, {
    chat: t,
    mediaMsgs: t.getMediaMsgs(),
    theme: "chat-info"
  }));
};
var r = require("./464659.js");
var o = require("../app/78810.js");
var l = require("./755782.js");
var i = require("../app/690495.js");
var u = a(require("../app/932325.js"));
var s = a(require("./482530.js"));
var c = require("../app/956113.js");
var d = require("../app/220584.js");
var f = require("../vendor/548360.js");
var p = function (e, t) {
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
var m = a(require("../app/156720.js"));
var h = require("../app/808446.js");
var g = a(require("../app/895851.js"));
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
  mediaCount: {
    marginEnd: "bugiwsl0",
    fontSize: "bze30y65",
    color: "g01nkquw"
  },
  drawerSection: {
    paddingBottom: "aiput80m"
  }
};
function _(e) {
  let {
    chat: t
  } = e;
  const n = function (e) {
    const [t, n] = (0, p.useState)(null);
    const a = (0, g.default)();
    const r = (0, p.useCallback)(() => {
      (0, o.countAllMedia)(e).then(e => {
        if (!a.aborted) {
          n(e);
        }
      });
    }, [e, a]);
    (0, p.useEffect)(r, [r]);
    (0, h.useListener)(e.getMediaMsgs(), ["add", "remove"], r);
    (0, h.useListener)(e.getDocMsgs(), ["add", "remove"], r);
    (0, h.useListener)(e.getLinkMsgs(), ["add", "remove"], r);
    return t;
  }(t);
  return p.default.createElement("div", {
    className: (0, m.default)(v.mediaCount)
  }, n != null ? f.fbt._("{mediaCount}", [f.fbt._param("mediaCount", u.default.n(n))], {
    hk: "2yA6kO"
  }) : p.default.createElement(c.Spinner, {
    size: 16,
    stroke: 6
  }));
}