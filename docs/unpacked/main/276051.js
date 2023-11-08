var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderCursor = exports.RENDER_CURSOR = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/163755.js");
var l = require("./663940.js");
var i = require("../app/787742.js");
var u = a(require("./731336.js"));
var s = a(require("./750074.js"));
var c = require("../app/459857.js");
const d = {
  RECENT_AT_TOP: "recent_at_top",
  RECENT_AT_BOTTOM: "recent_at_bottom",
  CONVERSATION: "conversation",
  GROUP_CONVERSATION: "group_conversation",
  STARRED_DRAWER: "starred_drawer"
};
exports.RENDER_CURSOR = d;
const f = "before";
const p = "after";
const m = 12;
function h(e, t, n) {
  let a = t;
  const r = e.toArray();
  const o = n === f ? -1 : 1;
  return {
    hasNext: () => a >= 0 && a < r.length,
    next() {
      const e = r[a];
      if (!e) {
        __LOG__(3)`Invalid cursor at ${a}, array.length = ${r.length}, element = ${e}`;
      }
      a += o;
      return e;
    }
  };
}
function g(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let r = arguments.length > 4 ? arguments[4] : undefined;
  const c = (0, u.default)() * a;
  const d = h(e, t, n);
  let f;
  let p = 0;
  let g = 0;
  for (; d.hasNext();) {
    const e = d.next();
    const t = (0, s.default)(e);
    const n = ((0, i.getIsNotification)(e) ? 1 : 0) * 2 + (0, i.getIsSentByMe)(e);
    p += t + (n && n === f ? 2 : m);
    g++;
    if (p > c) {
      break;
    }
    if (g >= r) {
      break;
    }
    const a = (0, o.getAsGroupedSticker)(e);
    const u = (0, o.getAsAlbumAsset)(e) != null;
    if (a || u) {
      const t = [];
      let n = false;
      let i = 1;
      if (a) {
        let a;
        if (d.hasNext()) {
          a = d.next();
          t.push(a);
          g++;
          if (g >= r) {
            break;
          }
          if ((0, l.canBeGroupedAsAlbum)(e.safe(), a.safe()) && (0, o.getAsGroupedSticker)(a)) {
            n = true;
          }
        }
      }
      if (u) {
        let n;
        let a = e;
        for (; d.hasNext() && i < l.ALBUM_MAX_SIZE && (n = d.next(), t.push(n), g++, !(g >= r)) && (0, l.canBeGroupedAsAlbum)(a.safe(), n.safe()) && (0, o.getAsAlbumAsset)(n);) {
          i++;
          a = n;
        }
      }
      if (a && !n || u && i < l.ALBUM_MIN_SIZE) {
        p += t.reduce((e, t) => e + (0, s.default)(t), 0);
        if (p > c) {
          break;
        }
      }
    }
    f = n;
  }
  return g;
}
function E(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let r = arguments.length > 4 ? arguments[4] : undefined;
  const d = (0, u.default)() * a;
  const f = h(e, t, n);
  let p;
  let g = 0;
  let E = 0;
  for (; f.hasNext();) {
    const e = f.next();
    const t = (0, s.default)(e);
    const n = e.author || ((0, i.getIsSentByMe)(e) ? (0, c.getMaybeMeUser)() : undefined);
    g += t + (n && !(0, i.getIsSentByMe)(e) && n !== p ? 19 : 0) + (n && n === p ? 2 : m);
    E++;
    if (g > d) {
      break;
    }
    if (E >= r) {
      break;
    }
    const a = (0, o.getAsGroupedSticker)(e);
    const u = (0, o.getAsAlbumAsset)(e) != null;
    if (a || u) {
      const t = [];
      let n = false;
      let i = 1;
      if (a) {
        let a;
        if (f.hasNext()) {
          a = f.next();
          t.push(a);
          E++;
          if (E >= r) {
            break;
          }
          if ((0, l.canBeGroupedAsAlbum)(e.safe(), a.safe()) && (0, o.getAsGroupedSticker)(a)) {
            n = true;
          }
        }
      }
      if (u) {
        let n;
        let a = e;
        for (; f.hasNext() && i < l.ALBUM_MAX_SIZE && (n = f.next(), t.push(n), E++, !(E >= r)) && (0, l.canBeGroupedAsAlbum)(a.safe(), n.safe()) && (0, o.getAsAlbumAsset)(n) != null;) {
          i++;
          a = n;
        }
      }
      if (a && !n || u && i < l.ALBUM_MIN_SIZE) {
        g += t.reduce((e, t) => e + (0, s.default)(t), 0);
        if (g > d) {
          break;
        }
      }
    }
    p = n;
  }
  return E;
}
function v(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let r = arguments.length > 4 ? arguments[4] : undefined;
  const o = (0, u.default)() * a;
  const l = h(e, t, n);
  let i = 0;
  let c = 0;
  for (; l.hasNext();) {
    const e = l.next();
    i += (0, s.default)(e) + 65;
    c++;
    if (i > o) {
      break;
    }
    if (c >= r) {
      break;
    }
  }
  return c;
}
function _(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : p;
  const a = (0, u.default)() * 2;
  const r = h(e, t, n);
  let [o, l, c] = [0, true, null];
  for (; r.hasNext();) {
    const e = r.next();
    const t = (0, s.default)(e);
    const n = ((0, i.getIsNotification)(e) ? 1 : 0) * 2 + (0, i.getIsSentByMe)(e);
    o += t + (n && n === c ? 2 : m);
    if (o > a) {
      l = false;
      break;
    }
    c = n;
  }
  return l;
}
class y {
  static create(e) {
    const {
      msgCollection: t,
      focusedMsgKey: n,
      type: a,
      maxInitialCount: r = Number.MAX_SAFE_INTEGER
    } = e;
    return new y({
      type: a
    }).init(n, t, r);
  }
  constructor(e) {
    const {
      type: t,
      before: n,
      after: a,
      focusedMsgKey: r,
      prevFocusedMsgKey: o
    } = e;
    this._type = t;
    this._focusedMsgKey = r;
    this._prevFocusedMsgKey = o;
    this.before = n || 0;
    this.after = a || 0;
  }
  _cloneWith(e) {
    return new y((0, r.default)({
      type: this._type,
      before: this.before,
      after: this.after,
      focusedMsgKey: this._focusedMsgKey,
      prevFocusedMsgKey: this._prevFocusedMsgKey
    }, e));
  }
  _getCursorSize(e, t, n, a, r) {
    return function (e) {
      switch (e) {
        case d.CONVERSATION:
          return g;
        case d.GROUP_CONVERSATION:
          return E;
        case d.STARRED_DRAWER:
          return v;
        default:
          return g;
      }
    }(this._type)(e, t, n, a, r);
  }
  getStart(e) {
    return Math.max(C(this._focusedMsgKey, e, this._type) - this.before, 0);
  }
  getEnd(e) {
    return Math.min(C(this._focusedMsgKey, e, this._type) + this.after + 1, e.length);
  }
  hasBefore(e) {
    return C(this._focusedMsgKey, e, this._type) - this.before > 0;
  }
  hasAfter(e) {
    return C(this._focusedMsgKey, e, this._type) + this.after < e.length - 1;
  }
  init(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_SAFE_INTEGER;
    return new y({
      type: this._type,
      before: 0,
      after: 0,
      focusedMsgKey: e
    }).loadBefore(t, {
      factor: 1,
      maxCount: n
    }).loadAfter(t, {
      factor: 1,
      maxCount: n
    });
  }
  setFocusedMsgKey(e, t) {
    const n = C(this._focusedMsgKey, e, this._type);
    const a = C(t, e, this._type);
    let r;
    let o;
    if (t) {
      o = this.after - (a - n);
      r = this.before + (a - n);
    } else {
      r = this.before + this.after;
      o = 0;
    }
    return this._cloneWith({
      focusedMsgKey: t,
      before: r,
      after: o
    })._updatePrev(e);
  }
  ensureValidFocus(e) {
    const t = this._prevFocusedMsgKey != null && e.get(this._prevFocusedMsgKey) == null;
    const n = this._focusedMsgKey != null && e.get(this._focusedMsgKey) == null;
    let a = this;
    if (t) {
      a = a._updatePrev(e);
    }
    if (n) {
      a = a.focusBefore(e);
    }
    return a;
  }
  _updatePrev(e) {
    const t = C(this._focusedMsgKey, e, this._type);
    return this._cloneWith({
      prevFocusedMsgKey: t > 0 ? e.at(t - 1).id : undefined
    });
  }
  focusBefore(e) {
    return this._cloneWith({
      focusedMsgKey: this._prevFocusedMsgKey
    })._updatePrev(e);
  }
  loadBefore(e, t) {
    const {
      count: n,
      maxCount: a = Number.MAX_SAFE_INTEGER,
      factor: r = 2
    } = t || {};
    const o = n != null && n !== 0 ? n : this._getCursorSize(e, Math.max(0, this.getStart(e) - 1), f, r, a);
    return this._cloneWith({
      before: this.before + o
    });
  }
  loadAfter(e, t) {
    const {
      count: n,
      maxCount: a = Number.MAX_SAFE_INTEGER,
      factor: r = 2
    } = t || {};
    const o = n != null && n !== 0 ? n : this._getCursorSize(e, this.getEnd(e), p, r, a);
    return this._cloneWith({
      after: this.after + o
    });
  }
  loadBeforeCapped(e, t) {
    const {
      count: n,
      factor: a = 2
    } = t || {};
    if (_(e, this.getStart(e), p)) {
      return this.loadBefore(e, {
        count: n,
        factor: a
      });
    } else {
      return this;
    }
  }
  resetBeforeCursor(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
    if (!_(e, this.getStart(e), p)) {
      const n = Math.max(0, this.getEnd(e) - 1);
      const a = this._getCursorSize(e, n, f, 2, t);
      return this._cloneWith({
        before: Math.min(this.before, a)
      });
    }
    return this;
  }
}
function C(e, t, n) {
  if (e) {
    const n = t.get(e);
    const a = t.indexOf(n);
    if (a !== -1) {
      return a;
    }
  }
  if (function (e) {
    switch (e) {
      case d.CONVERSATION:
      case d.GROUP_CONVERSATION:
        return d.RECENT_AT_BOTTOM;
      case d.STARRED_DRAWER:
        return d.RECENT_AT_TOP;
      default:
        return d.RECENT_AT_BOTTOM;
    }
  }(n) === d.RECENT_AT_TOP) {
    return 0;
  } else {
    return t.length - 1;
  }
}
exports.RenderCursor = y;