var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotPluginSearchDetailToggle = function (e) {
  let {
    botResponseTargetId: t
  } = e;
  const [n, a] = (0, c.useState)(true);
  return c.default.createElement("div", {
    classNames: (0, d.default)(p)
  }, n ? c.default.createElement(r.default, {
    onClick: () => {
      l.Cmd.botTogglePluginSearchDetailsToggle(t, true);
      a(false);
    }
  }, s.fbt._("Show details", null, {
    hk: "2UCsBq"
  })) : null);
};
exports.BotPluginSearchProviderLink = function (e) {
  let {
    botPluginSearchProvider: t,
    botPluginSearchUrl: n,
    t: a,
    theme: r
  } = e;
  if (t == null || n == null) {
    return null;
  }
  let l = null;
  switch (t) {
    case u.BotPluginMetadata$SearchProvider.GOOGLE:
      l = c.default.createElement(i.ExternalLink, {
        href: n
      }, s.fbt._("Google", null, {
        hk: "4mSFSJ"
      }));
      break;
    case u.BotPluginMetadata$SearchProvider.BING:
      l = c.default.createElement(i.ExternalLink, {
        href: n
      }, s.fbt._("Bing", null, {
        hk: "1k7jl9"
      }));
  }
  let f = null;
  if (r !== "date") {
    if (a != null) {
      f = o.Clock.timestampStr(a);
    }
  } else if (a != null) {
    f = o.Clock.relativeStr(a);
  }
  return c.default.createElement("div", {
    classNames: (0, d.default)(m)
  }, s.fbt._("See more on {search_provider_link}", [s.fbt._param("search_provider_link", l)], {
    hk: "VxhOY"
  }), " ", c.default.createElement("span", null, f));
};
var r = a(require("../app/196554.js"));
var o = require("../app/63014.js");
var l = require("../app/780549.js");
var i = require("../app/753233.js");
var u = require("../app/533494.js");
var s = require("../vendor/548360.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var d = a(require("../app/156720.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  fontSize: "f8jlpxt4"
};
const m = {
  display: "p357zi0d"
};