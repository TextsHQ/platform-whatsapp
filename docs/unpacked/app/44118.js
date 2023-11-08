var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooterLinks = function (e) {
  const t = (0, d.unproxy)(e);
  const n = t.footer;
  if (!(0, l.getSupportsMessageFooterLinks)(t) || n == null) {
    return [];
  }
  if (t.getRawFooterLinks().length > 0) {
    return t.getRawFooterLinks();
  }
  const [r] = f({
    content: n,
    sender: (0, l.getSender)(t),
    cachedValue: t.getRawFooterLinks()
  });
  if (r.length > 0) {
    t.setRawFooterLinks(r);
  }
  return r;
};
exports.getGalleryLinks = function (e) {
  const t = (0, d.unproxy)(e);
  return (0, i.default)(_(t), "href").filter(e => e.isHttp);
};
exports.getHeaderLinks = function (e) {
  var t;
  const n = (0, d.unproxy)(e);
  var r;
  if (g(n, true)) {
    return m(n, ((r = n.list) === null || r === undefined ? undefined : r.title) || "");
  }
  if (g(n, false)) {
    return m(n, n.title);
  }
  if (n.type === u.MSG_TYPE.INTERACTIVE && ((t = n.interactiveHeader) === null || t === undefined ? undefined : t.title) != null) {
    return m(n, n.interactiveHeader.title);
  }
  return [];
};
exports.getLinksFromMsg = _;
exports.getPollOptionLinks = function (e, t) {
  var n;
  const r = (0, d.unproxy)(e);
  if (r.pollOptions == null) {
    return null;
  }
  if (r.getRawPollOptionsToLinks() == null) {
    var i;
    const e = new Map((i = r.pollOptions) === null || i === undefined ? undefined : i.map(e => {
      const [t] = f({
        content: e.name,
        sender: (0, l.getSender)(r)
      });
      return [e, t];
    }));
    r.setRawPollOptionsToLinks(e);
  }
  if ((n = r.getRawPollOptionsToLinks()) === null || n === undefined) {
    return undefined;
  } else {
    return n.get(t);
  }
};
exports.getSuspiciousLinks = function (e) {
  return _((0, d.unproxy)(e)).filter(e => {
    var t;
    if ((t = e.suspiciousCharacters) === null || t === undefined) {
      return undefined;
    } else {
      return t.size;
    }
  });
};
exports.shouldDisplayHeaderLinks = g;
var i = r(require("../vendor/545578.js"));
var a = require("./370257.js");
var o = require("./163755.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./446303.js"));
var l = require("./787742.js");
var u = require("./373070.js");
var c = require("./533494.js");
var d = require("./163139.js");
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f(e) {
  const {
    content: t,
    sender: n,
    cachedValue: r = [],
    currentIndex: i = 0,
    endIndex: o = 1 / 0
  } = e;
  if (i >= o) {
    return [r, o];
  }
  const l = (0, a.firstNCodepoints)(t, o);
  let u = s.findLinks(l, false, n);
  if ((0, a.numCodepoints)(t) > o && u.length > 0) {
    const e = u[u.length - 1];
    if ((0, a.numCodepoints)(l.slice(0, e.index)) + (0, a.numCodepoints)(e.url) === o) {
      u = s.findLinks(t, false, n);
    }
  }
  return [u, o];
}
function _(e, t) {
  const n = (0, d.unproxy)(e);
  const r = t != null ? t : n.linksIndexParsed ? n.linksIndexParsed : (0, l.getInitialPageSize)(n) + 1;
  const i = (0, o.getText)(n);
  if (i == null) {
    return n.getRawLinks();
  }
  const [a, s] = f({
    content: i,
    sender: (0, l.getSender)(n),
    cachedValue: n.getRawLinks(),
    currentIndex: n.linksIndexParsed,
    endIndex: r
  });
  n.linksIndexParsed = s;
  n.setRawLinks(a);
  return a;
}
function g(e, t) {
  var n;
  var r;
  if (t) {
    return e.type === "list" && ((n = e.list) === null || n === undefined ? undefined : n.listType) === c.Message$ListMessage$ListType.SINGLE_SELECT && ((r = e.list) === null || r === undefined ? undefined : r.title) != null;
  } else {
    return e.isDynamicReplyButtonsMsg === true && e.title != null;
  }
}
function m(e, t) {
  if (e.getRawHeaderLinks().length > 0) {
    return e.getRawHeaderLinks();
  }
  const [n] = f({
    content: t,
    sender: (0, l.getSender)(e),
    cachedValue: e.getRawHeaderLinks()
  });
  if (n.length > 0) {
    e.setRawHeaderLinks(n);
  }
  return n;
}