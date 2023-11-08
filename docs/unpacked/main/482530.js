var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    fullCollection: t,
    selectedMessages: n,
    mediaMsgs: r,
    selectable: O,
    onMessageSelect: k,
    theme: D,
    isFilterEnabled: I = false,
    filterText: R
  } = e;
  const N = (0, T.useModelValues)(e.chat, ["linkCount", "docCount", "productCount", "endOfHistoryTransferType"]);
  const [x, L] = (0, _.useState)(() => r.toArray());
  const j = (0, C.default)(() => new E.default(e => (0, f.getText)(e)));
  const B = (0, _.useRef)(null);
  const F = (0, P.default)();
  const G = (0, _.useRef)();
  const U = (0, y.default)();
  const W = (0, _.useCallback)(function () {
    var e = (0, o.default)(function* (e) {
      var t;
      if (!((t = G.current) === null || t === undefined)) {
        t.abort();
      }
      if (!I) {
        L(r.toArray());
        return void U();
      }
      G.current = new a();
      const n = G.current.signal;
      try {
        const t = yield j.current.filter(r, e, n);
        if (!(n.aborted || F.aborted)) {
          L(t);
          U();
        }
      } catch (e) {
        if (e.name !== s.ABORT_ERROR) {
          throw e;
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), [r, j, I, U, F]);
  (0, b.useListener)(r, ["add", "remove", "reset", "query_media_before"], () => W(R));
  (0, _.useEffect)(() => {
    W(R);
    return () => {
      var e;
      if ((e = G.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.abort();
      }
    };
  }, [W, R]);
  (0, b.useListener)(r, "add", e => {
    if (I) {
      j.current.cacheMessageTokens(e);
    }
  });
  (0, b.useListener)(r, "remove", e => {
    if (n && n.isSelected(e)) {
      n.setVal(e, false);
    }
    if (I) {
      j.current.removeMessageTokensFromCache(e);
    }
  });
  (0, b.useListener)(r, "reset", () => {
    if (n) {
      n.unsetAll();
    }
    if (I) {
      j.current.clearTokensCache();
    }
  });
  (0, _.useEffect)(() => {
    if (I) {
      r.forEach(e => {
        j.current.cacheMessageTokens(e);
      });
    }
  }, [r, j, I]);
  const H = function (e, t, n, a, r, o) {
    let s = null;
    const d = (0, u.default)(e, e => -e.t).slice(0, t === true ? e.length : 6);
    return (0, i.default)(d, (e, i) => {
      const u = t !== true ? "chatInfo" : undefined;
      const d = _.default.createElement(h.default, {
        aspectRatio: o ? 1.1 : 1,
        msg: e,
        hoverEvent: t,
        selectable: n,
        selectedMessages: a,
        onMessageSelect: r,
        key: e.id.toString(),
        theme: u,
        hideableSecondRow: t !== true && i >= 3 && i <= 5
      });
      if (t !== true) {
        return [d];
      }
      const f = c.Clock.monthStr(e.t);
      if (f !== s) {
        s = f;
        const t = _.default.createElement(m.default, {
          key: `header-${e.t}`
        }, f);
        return [...(0, l.default)(6, t => _.default.createElement(g.EmptyCanvas, {
          key: `padding-${e.t}-${t}`
        })), t, d];
      }
      return [d];
    });
  }(x, t, O, n, k, D === "chat-info");
  const V = (0, A.default)();
  const q = (0, w.default)(e => {
    if (r.hasMediaBefore) {
      V(() => {
        r.queryMedia({
          chat: (0, v.unproxy)(N),
          msg: e
        });
      });
    }
  }, 100);
  const Y = (0, w.default)(e => {
    if (r.hasMediaBefore && e.scrollTop + d.SCROLL_FUDGE > e.scrollHeight - e.clientHeight) {
      q(r.head());
    }
  }, 100);
  const [z, {
    height: K
  }] = (0, M.default)();
  const Q = (0, S.default)(z, B);
  (0, _.useEffect)(() => {
    if (I && r.hasMediaBefore && !r.queryMediaBefore && B.current != null && B.current.scrollHeight < K + d.SCROLL_FUDGE) {
      q(r.head());
    }
  });
  (0, _.useEffect)(() => {
    if (r.hasMediaBefore) {
      q();
    }
  }, []);
  return _.default.createElement(_.default.Fragment, null, _.default.createElement(g.MediaGalleryView, {
    ref: Q,
    medias: H,
    mediaCollection: r,
    fullCollection: t,
    chat: (0, v.unproxy)(N),
    onScroll: e => {
      Y(e.currentTarget);
    },
    theme: D
  }), D !== "chat-info" && _.default.createElement(p.HistorySyncGalleryPlaceholder, {
    chat: N
  }));
};
var o = r(require("../vendor/348926.js"));
var l = r(require("../vendor/498913.js"));
var i = r(require("../vendor/594654.js"));
var u = r(require("../vendor/189734.js"));
var s = require("../app/898817.js");
var c = require("../app/63014.js");
var d = require("../app/914368.js");
var f = require("../app/163755.js");
var p = require("./217714.js");
var m = r(require("./755521.js"));
var h = r(require("./67662.js"));
var g = require("./726195.js");
var E = r(require("./443461.js"));
var v = require("../app/163139.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
var y = r(require("../app/969651.js"));
var C = r(require("../app/637660.js"));
var b = require("../app/808446.js");
var M = r(require("./695841.js"));
var S = r(require("../app/38085.js"));
var T = require("../app/655241.js");
var w = r(require("./286481.js"));
var A = r(require("./940630.js"));
var P = r(require("../app/895851.js"));
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}