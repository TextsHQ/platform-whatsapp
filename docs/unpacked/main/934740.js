Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiSuggestions = function (e) {
  let {
    editor: t,
    kind: n
  } = e;
  const {
    query: i,
    omitQuery: u,
    replaceQuery: s
  } = (0, l.useQuery)(t, ":", {
    minQueryLength: 2,
    maxQueryLength: 50,
    boundary: true
  });
  const c = (0, o.useMemo)(() => {
    if (i == null) {
      return null;
    }
    const e = (0, a.emojiKeywordToUnicodeSearch)(i);
    if (e.length === 0 || e.length === 0) {
      return null;
    } else {
      return e;
    }
  }, [i]);
  return o.default.createElement(r.EmojiSuggestionsPanel, {
    kind: n,
    editor: t,
    emojis: c,
    onSelect: e => {
      s(e);
    },
    onDismiss: u
  });
};
var a = require("../app/708838.js");
var r = require("./924754.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
var l = require("./972934.js");
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}