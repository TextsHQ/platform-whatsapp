var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/713105.js");
var l = require("../app/780549.js");
var i = require("../app/292220.js");
var u = a(require("./272277.js"));
var s = require("../app/356097.js");
var c = a(require("./908081.js"));
var d = a(require("./324093.js"));
var f = require("./626194.js");
var p = require("./811720.js");
var m = require("../app/914368.js");
var h = require("../app/163755.js");
var g = require("../app/81644.js");
var E = require("./48794.js");
var v = require("../app/373070.js");
var _ = require("./129572.js");
var y = require("./276051.js");
var C = a(require("./578625.js"));
var b = a(require("../app/237889.js"));
var M = require("../app/956113.js");
var S = a(require("./565644.js"));
var T = require("../main-chunk/931109.js");
var w = a(require("../app/844453.js"));
var A = require("../vendor/548360.js");
var P = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = B(t);
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
var O = a(require("../app/156720.js"));
var k = a(require("../app/969651.js"));
var D = a(require("../app/637660.js"));
var I = require("../app/808446.js");
var R = a(require("../app/17533.js"));
var N = a(require("./286481.js"));
var x = a(require("./940630.js"));
var L = a(require("../app/321201.js"));
var j = a(require("../app/895851.js"));
function B(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (B = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const F = {
  display: "p357zi0d",
  flex: "kk3akd72",
  justifyContent: "ac2vgrno",
  paddingTop: "a4bywxmn",
  paddingBottom: "lzi2pvmc",
  color: "cs9t9or5"
};
const G = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  width: "ln8gz9je",
  height: "ppled2lx",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  pointerEvents: "jv8uhy2r"
};
function U(e, t) {
  const {
    msgCollection: n,
    chat: a = null,
    onClose: B,
    title: U,
    emptyListText: W,
    footerText: H,
    headerMenu: V,
    headerType: q = f.DRAWER_HEADER_TYPE.SMALL,
    descriptionSection: Y,
    displayType: z,
    testid: K,
    onMsgFooterClick: Q
  } = e;
  const X = (0, j.default)();
  const Z = (0, L.default)();
  const J = (0, k.default)();
  const $ = (0, x.default)();
  const ee = (0, D.default)(() => new b.default([], e => e.id.toString()));
  const te = (0, D.default)(() => new b.default([], e => e.id.toString()));
  const ne = (0, D.default)(() => new Set());
  const ae = (0, P.useRef)(0);
  const re = (0, P.useRef)({});
  const oe = (0, P.useRef)(null);
  const le = (0, P.useRef)(null);
  const ie = () => y.RenderCursor.create({
    msgCollection: n,
    type: y.RENDER_CURSOR.STARRED_DRAWER
  }).loadAfter(n, {
    count: i.MSG_PRELOAD_THRESHOLD
  });
  const [ue, se] = (0, P.useState)(ie);
  const ce = () => {
    const e = n.toArray();
    ee.current.init(e, true);
    te.current.init(e);
  };
  const de = (e, t) => {
    if (t) {
      re.current[e.id.toString()] = t;
    } else {
      delete re.current[e.id.toString()];
    }
  };
  const fe = (0, R.default)(() => {
    const e = a == null ? undefined : a.id;
    if (ue.getEnd(n) < n.length) {
      se(ue.loadAfter(n));
    } else {
      if (n.isSynced) {
        return;
      }
      n.sync(e).then(() => {
        if (!X.aborted) {
          if (ue.hasAfter(n)) {
            se(ue.loadAfter(n));
          }
        }
      }).catch(e => {
        __LOG__(2)`MsgDrawer:loadEarlierMsgs failed\n${e}`;
      });
    }
  });
  const pe = e => {
    if (!oe.current) {
      return;
    }
    if ((e ? e.target : document.activeElement) === oe.current) {
      if (ee.current.index < 0) {
        ee.current.setFirst(true);
      } else {
        ee.current.reset(false);
      }
    }
  };
  const me = e => {
    ee.current.setVal(e);
    te.current.setVal(e);
    const t = {
      collection: a.msgs,
      key: e.id,
      msg: e
    };
    l.Cmd.openChatAt((0, h.getChat)(e), t);
  };
  const he = e => {
    ee.current.setVal(e);
    te.current.setVal(e);
    l.Cmd.openChatAt((0, h.getChat)(e), (0, o.getSearchContext)((0, h.getChat)(e), e));
  };
  const ge = () => {
    let e = n.toArray();
    const t = n.isSynced ? ue.getEnd(n) : Math.min(ue.getEnd(n), e.length);
    e = e.slice(ue.getStart(n), t);
    ae.current = e.length;
    return e;
  };
  const Ee = e => {
    if (!e) {
      return E.MSG_VISIBILITY.BELOW;
    }
    const t = le.current;
    if (!t) {
      return;
    }
    const n = t.previousSibling;
    if (!(n && n instanceof HTMLElement)) {
      return;
    }
    const a = n.clientHeight;
    const r = t.scrollTop + a;
    const o = r + t.clientHeight;
    const l = e.getElement();
    if (l) {
      if (l.offsetTop + l.clientHeight <= r) {
        return E.MSG_VISIBILITY.ABOVE;
      } else if (l.offsetTop >= o) {
        return E.MSG_VISIBILITY.BELOW;
      } else {
        return E.MSG_VISIBILITY.VISIBLE;
      }
    } else {
      return E.MSG_VISIBILITY.BELOW;
    }
  };
  const ve = e => {
    const t = re.current[e.toString()];
    if (!t) {
      return;
    }
    const n = t.getWrapperRef();
    if (n && typeof n.getMsgComponentRef == "function") {
      return n.getMsgComponentRef();
    } else {
      return undefined;
    }
  };
  const _e = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return ne.current.has(e.toString()) && (!!t || ve(e));
  };
  const ye = (0, N.default)(() => {
    const e = ge();
    const t = new Set();
    let a = 0;
    let r = ae.current - 1;
    for (; a < r;) {
      const t = Math.floor((a + r) / 2);
      const n = re.current[e[t].id.toString()];
      if (Ee(n) === E.MSG_VISIBILITY.ABOVE) {
        a = t + 1;
      } else {
        r = t;
      }
    }
    for (let n = a; n < e.length; n++) {
      const a = re.current[e[n].id.toString()];
      if (Ee(a) !== E.MSG_VISIBILITY.VISIBLE) {
        break;
      }
      t.add(e[n].id.toString());
    }
    var o;
    var l;
    o = ne.current;
    l = t;
    o.forEach(e => {
      if (!l.has(e)) {
        const t = n.get(e);
        if (t == null ? undefined : t.isGif) {
          const t = ve(e);
          if ((t == null ? undefined : t.getPlayCount) != null && t.getPlayCount()) {
            t.pause();
          }
        }
      }
    });
    ne.current = t;
  }, 100);
  const Ce = (0, N.default)(e => {
    var t;
    ye();
    if (e.currentTarget && (t = e.currentTarget).scrollTop + m.SCROLL_FUDGE > t.scrollHeight - t.clientHeight) {
      fe();
    }
  }, 100);
  (0, P.useEffect)(() => {
    ce();
    if (!n.isSynced && n.length < i.PAGE_SIZE) {
      $(fe);
    }
  }, []);
  (0, P.useEffect)(() => {
    ye();
  });
  (0, I.useListener)(window, "resize", ye);
  (0, I.useListener)(n, ["reset", "sync"], () => {
    ce();
    J();
  });
  (0, I.useListener)(n, ["add", "remove"], () => {
    ce();
    J();
  });
  (0, I.useListener)(n, "reset", () => {
    ne.current = new Set();
    se(ie());
    fe();
  });
  const {
    isSynced: be,
    length: Me
  } = n;
  (0, P.useEffect)(() => {
    if (!be && Me < i.PAGE_SIZE) {
      $(fe);
    }
  }, [fe, $, be, Me]);
  const Se = ge();
  let Te;
  let we;
  let Ae;
  we = n.isSynced && ue.getEnd(n) >= Se.length ? null : e.msgCollection.syncPromise ? P.default.createElement("div", {
    className: (0, O.default)(F),
    title: A.fbt._("loading messages…", null, {
      hk: "hdje2"
    })
  }, P.default.createElement(M.Spinner, {
    stroke: 6,
    size: 24
  })) : P.default.createElement("div", {
    className: (0, O.default)(F)
  }, P.default.createElement("div", {
    title: A.fbt._("load earlier messages…", null, {
      hk: "4CJzGf"
    }),
    onClick: fe
  }, P.default.createElement(_.RefreshIcon, null)));
  const Pe = {
    down: e => {
      if (e) {
        e.preventDefault();
      }
      const t = ee.current.next();
      if (ee.current.index !== t) {
        ee.current.setNext(true);
      }
    },
    up: e => {
      if (e) {
        e.preventDefault();
      }
      if (ee.current.prev() > -1) {
        ee.current.setPrev(true);
      }
    }
  };
  if (Se.length > 0) {
    const e = Se.map(e => {
      const t = e.type === v.MSG_TYPE.IMAGE || e.type === v.MSG_TYPE.VIDEO || e.type === v.MSG_TYPE.AUDIO;
      const n = {
        msg: e,
        isMsgVisible: t ? _e : () => {},
        currSelection: ee.current,
        activeSelection: te.current
      };
      if (z === s.DISPLAY_TYPE.REPORTED_MSG) {
        return P.default.createElement(C.default, (0, r.default)({
          ref: t => {
            de(e, t);
          },
          key: `rta-msg-${e.id.toString()}`,
          onMsgFooterClick: Q,
          onClickMsg: me
        }, n));
      } else {
        return P.default.createElement(S.default, (0, r.default)({
          ref: t => {
            de(e, t);
          },
          displayType: z || s.DISPLAY_TYPE.STARRED_MSGS,
          key: `starred-msg-${e.id.toString()}`,
          onClickMsg: he
        }, n));
      }
    });
    Te = P.default.createElement(w.default, {
      transitionName: "slide"
    }, P.default.createElement(g.HotKeys, {
      ref: oe,
      onFocus: pe,
      tabIndex: 0,
      "data-tab": T.TAB_ORDER.CHAT_STARRED_DRAWER,
      handlers: Pe
    }, e));
    Ae = Y;
  } else if (e.msgCollection.isSynced) {
    Te = W;
  } else {
    Te = P.default.createElement(p.Loading, null);
    we = null;
  }
  let Oe;
  if (H != null) {
    Oe = P.default.createElement(u.default, {
      theme: z === s.DISPLAY_TYPE.REPORTED_MSG ? "reported-msg" : "md-chat-search-list"
    }, H);
  }
  return P.default.createElement(c.default, {
    theme: "gallery",
    ref: t,
    testid: K
  }, P.default.createElement("div", {
    className: (0, O.default)(G)
  }, P.default.createElement(f.DrawerHeader, {
    title: U,
    onBack: () => {
      if (B) {
        B();
      } else if (!(Z == null)) {
        Z.requestDismiss();
      }
    },
    type: q,
    menu: V,
    focusBackOrCancel: true
  }), P.default.createElement(d.default, {
    onScroll: Ce,
    ref: le
  }, Ae, Te, we, Oe)));
}
var W = (0, P.forwardRef)(U);
exports.default = W;