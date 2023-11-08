var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQuery = function (e, t, n) {
  const {
    enabled: a = true,
    minQueryLength: o = 0,
    boundary: s = false,
    maxQueryLength: c
  } = n != null ? n : {};
  const [f, h] = (0, i.useState)();
  const [g, E] = (0, i.useState)();
  (0, i.useEffect)(() => {
    if (!a) {
      return;
    }
    const n = () => {
      e.getEditorState().read(() => {
        if (!e.isComposing()) {
          h(p(t, {
            boundary: s,
            maxQueryLength: c
          }));
        }
      });
    };
    const r = e.registerUpdateListener(n);
    n();
    return r;
  }, [e, t, a, s, c]);
  const v = (0, u.default)(() => {
    if (a) {
      e.update(() => {
        const e = m(t, {
          boundary: s
        });
        if (!(e == null)) {
          e.remove();
        }
      });
    }
  });
  const _ = (0, u.default)(function (n) {
    let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (a) {
      e.update(() => {
        const e = m(t, {
          boundary: s
        });
        if (!e) {
          return;
        }
        const {
          trailingSpace: a = false,
          leadingSpace: i = false,
          select: u = false
        } = o;
        const c = typeof n == "string" ? new r.TextNode(n) : n();
        (0, l.$replaceTextNode)(e, c);
        if (i) {
          (0, l.$insertLeadingSpace)(c);
        }
        if (a) {
          (0, l.$insertTrailingSpace)(c, {
            moveCaret: true
          });
        }
        if (u) {
          c.select(0, c.getTextContent().length);
        }
      });
    }
  });
  const y = (0, u.default)(() => {
    if (a) {
      E(f);
    }
  });
  const C = (0, u.default)(n => {
    if (a) {
      e.focus();
      v();
      e.update(() => {
        const e = (0, l.$getRangeSelection)();
        if (!e) {
          return;
        }
        let a = t + n;
        if (s) {
          const t = e.anchor.offset;
          const n = e.anchor.getNode().getTextContent()[t - 1];
          if (n && !d(n)) {
            a = " " + a;
          }
        }
        e.insertText(a);
      });
    }
  });
  if (f == null && g != null || g != null && f != null && !f.startsWith(g)) {
    E(null);
  }
  return {
    query: a && g == null && f != null && f.length >= o ? f : null,
    clearQuery: v,
    setQuery: C,
    replaceQuery: _,
    omitQuery: y
  };
};
var r = require("../main-chunk/14544.js");
var o = require("../app/70354.js");
var l = require("../main-chunk/251922.js");
var i = require("../vendor/667294.js");
var u = a(require("../app/17533.js"));
const s = /\W/;
const c = /[\/:]+/;
function d(e) {
  return o.EmojiUtil.isEmoji(e) || s.test(e) && !c.test(e);
}
const f = 25;
function p(e, t) {
  var n;
  var a;
  const {
    boundary: r = false,
    maxQueryLength: o = f
  } = t != null ? t : {};
  let i = "";
  const u = (0, l.$getRangeSelection)();
  if (u == null || !u.isCollapsed()) {
    return;
  }
  i = (n = (0, l.$getTextUpToAnchor)()) !== null && n !== undefined ? n : "";
  const s = function (e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }(e);
  const c = (a = i.match("(.?)" + s + `([^${s}]{0,${o}})$`)) !== null && a !== undefined ? a : [];
  if (!c) {
    return null;
  }
  const [, p, m] = c;
  if (r && p && !d(p)) {
    return null;
  } else {
    return m;
  }
}
function m(e, t) {
  const {
    boundary: n = false
  } = t != null ? t : {};
  const a = p(e, {
    boundary: n
  });
  if (a == null) {
    return;
  }
  let r;
  const o = (0, l.$getTextAnchor)();
  if (!o) {
    return;
  }
  const i = o.point.offset - a.length - e.length;
  const u = o.node.splitText(i, o.point.offset);
  r = i === 0 ? u[0] : u[1];
  r.selectNext(0, 0);
  return r;
}