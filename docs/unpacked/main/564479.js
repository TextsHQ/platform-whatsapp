var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/122583.js");
var o = require("../app/8304.js");
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/984330.js");
var s = require("../main-chunk/238608.js");
var c = require("./958548.js");
var d = require("./397454.js");
var f = require("../main-chunk/393542.js");
var p = require("../app/81644.js");
a(require("../app/932325.js"));
var m = require("../app/172259.js");
var h = require("../app/373070.js");
var g = require("../app/956113.js");
var E = require("./445872.js");
var v = require("./146336.js");
var _ = require("./40656.js");
var y = require("../app/625786.js");
var C = require("../app/390737.js");
var b = a(require("../app/844453.js"));
var M = require("./552747.js");
var S = require("./122093.js");
var T = require("../app/885313.js");
var w = require("./776770.js");
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
  var n = R(t);
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
var k = a(require("../app/637660.js"));
var D = a(require("../app/558532.js"));
var I = a(require("../app/895851.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const N = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  bottom: "jxacihee",
  start: "hdndj7vm",
  zIndex: "bwu3czq0",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  color: "lxozqee9",
  pointerEvents: "m62443ks"
};
const x = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  bottom: "jxacihee",
  start: "nsmajyb3",
  zIndex: "tpju1xx5",
  width: "qsdp9nde",
  height: "ohuqqxaf",
  marginTop: "m3ct2rho",
  marginBottom: "ec1z5skj",
  cursor: "ajgl1lbb",
  backgroundColor: "ss9a15xu",
  borderTopStartRadius: "g9p5wyxn",
  borderTopEndRadius: "i0tg5vk9",
  borderBottomEndRadius: "aoogvgrq",
  borderBottomStartRadius: "o2zu3hjb",
  opacity: "tvdi1vrc"
};
const L = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  bottom: "jxacihee",
  end: "mbnky1fc",
  zIndex: "bwu3czq0",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  color: "lxozqee9",
  pointerEvents: "m62443ks"
};
const j = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "d4vkij7k",
  bottom: "jxacihee",
  zIndex: "tpju1xx5",
  width: "qsdp9nde",
  height: "ohuqqxaf",
  marginTop: "m3ct2rho",
  marginBottom: "ec1z5skj",
  cursor: "ajgl1lbb",
  backgroundColor: "ss9a15xu",
  borderTopStartRadius: "g9p5wyxn",
  borderTopEndRadius: "i0tg5vk9",
  borderBottomEndRadius: "aoogvgrq",
  borderBottomStartRadius: "o2zu3hjb",
  opacity: "tvdi1vrc"
};
const B = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je",
  height: "ppled2lx",
  willChange: "rigundgh"
};
const F = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0",
  width: "b6qzmhfs",
  height: "qmp0wt83",
  marginTop: "m3ct2rho",
  marginEnd: "k1jo73ug",
  marginBottom: "ec1z5skj",
  marginStart: "isfiuinm"
};
const G = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  zIndex: "bgigc5s4",
  width: "ln8gz9je",
  height: "ppled2lx",
  backgroundColor: "ss9a15xu"
};
const U = {
  position: "lhggkp7q",
  top: "q177n8ra",
  end: "n642r0m2",
  zIndex: "b9fczbqn",
  color: "lxozqee9"
};
const W = {
  position: "lhggkp7q",
  top: "q177n8ra",
  start: "nsmajyb3",
  zIndex: "b9fczbqn",
  display: "p357zi0d",
  color: "lxozqee9"
};
const H = e => {
  __LOG__(3, undefined, undefined, true, ["status-v3-iterator", "non-sad"])`InvalidStatusV3Iterator: ${e}`;
  SEND_LOGS("InvalidStatusV3Iterator", 0.001, "status-v3-iterator", "non-sad");
};
function V(e, t) {
  const {
    initialStatusV3: n,
    quotedMsgKey: a,
    initialStatusMsg: R,
    onMsgNotFound: V
  } = e;
  const q = (0, I.default)();
  const [Y, z] = (0, P.useState)(null);
  const [K, Q] = (0, P.useState)(null);
  const [X, Z] = (0, P.useState)(true);
  const J = (0, P.useRef)(null);
  const $ = (0, k.default)(() => Math.round(Math.random() * 1000000000));
  const ee = (0, k.default)(() => new Map());
  const te = (0, k.default)(() => new Map());
  const ne = (0, k.default)(() => new Map());
  const ae = (0, P.useRef)(-1);
  const re = (0, P.useRef)(M.STATUS_ROW_ENTRY_METHOD.DIRECT_ROW_TAP);
  const oe = e => {
    if ((!Y || e !== Y.msgIdx) && Y && J.current) {
      const t = J.current.statusAt(Y, e);
      Z(true);
      t.then(e => {
        if (!q.aborted) {
          z(e);
        }
      }).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
        H("Invalid iterator while getting next status msg");
      })).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.StatusV3LoadingError, () => {
        __LOG__(3)`No more status v3 while preloading next status`;
      })).finally(() => {
        Z(false);
      });
    }
  };
  (0, P.useEffect)(() => {
    const e = J.current;
    if (Y && e && e.hasNext(Y)) {
      e.getNext(Y).then(t => {
        if (q.aborted) {
          return;
        }
        const n = e.statuses[t.statusIdx].msgs[t.msgIdx];
        if (!n) {
          throw new _.StatusV3MsgNotFound();
        }
        if (n.type === h.MSG_TYPE.CHAT) {
          f.FontLoader.loadMessageFont(n.font).catch(() => {});
        } else {
          const e = n.mediaData;
          if (e && e.mediaStage !== m.MEDIA_DATA_STAGE.RESOLVED) {
            n.downloadMedia({
              downloadEvenIfExpensive: true,
              rmrReason: T.WEBC_RMR_REASON_CODE.STATUS_V3,
              isUserInitiated: false
            });
          }
        }
      }).catch((0, r.filteredCatch)(_.StatusV3MsgNotFound, () => {
        __LOG__(3)`Error finding next status while preloading next status`;
      })).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
        H("Invalid iterator while preloading next status");
      })).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.StatusV3LoadingError, () => {
        __LOG__(3)`No more status v3 while preloading next status`;
      }));
    }
  }, [Y, J, q.aborted]);
  const le = t => {
    Q(true);
    (0, o.delayMs)(200).then(() => {
      if (!q.aborted) {
        e.closeStatusViewer(t);
      }
    });
  };
  const ie = () => {
    re.current = M.STATUS_ROW_ENTRY_METHOD.BACKWARDS_TAP;
    const e = J.current;
    if (Y && e && e.hasPrev(Y)) {
      const t = Y.statusIdx;
      e.getPrev(Y).then(e => {
        if (!q.aborted) {
          if (e.statusIdx === t) {
            z(e);
          } else {
            Q(true);
            (0, o.delayMs)(200).then(() => {
              if (!q.aborted) {
                z(e);
                Q(false);
              }
            });
          }
        }
      }).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
        H("Invalid iterator while getting previous status msg");
      })).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.StatusV3LoadingError, () => {
        __LOG__(3)`No more status v3 while preloading next status`;
      }));
    }
  };
  const ue = e => {
    re.current = e;
    const t = J.current;
    if (Y && t && t.hasNext(Y)) {
      const e = Y.statusIdx;
      const n = t.getNext(Y);
      Z(true);
      n.then(t => {
        if (!q.aborted) {
          if (t.statusIdx === e) {
            z(t);
          } else {
            Q(true);
            Z(false);
            (0, o.delayMs)(200).then(() => {
              if (!q.aborted) {
                z(t);
                Q(false);
              }
            });
          }
        }
      }).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
        H("Invalid iterator while getting next status msg");
        le();
      })).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.StatusV3LoadingError, () => {
        __LOG__(3)`No more status v3 while preloading next status`;
      })).finally(() => {
        Z(false);
      });
    } else {
      le();
    }
  };
  const se = (e, t) => {
    const n = J.current;
    if (!t) {
      return;
    }
    if (t.ack !== i.ACK.READ) {
      const n = (0, l.unixTime)();
      const a = t.id.participant;
      if (a && a.isPSA()) {
        t.set("statusPSAReadTimestamp", n);
      }
      e.sendReadStatus(t, n);
    }
    const a = n == null ? undefined : n.statuses.find(t => t.statusV3 === e);
    if (a) {
      a.readMsgKeys.add(t.id.toString());
    }
  };
  (0, P.useEffect)(() => {
    const t = n;
    if (a) {
      const n = a;
      if (t.msgs.getModelsArray().findIndex(e => e.id.toString() === n.toString()) !== -1) {
        J.current = new _.Statusv3Snapshot(t, e.continuousPlay, n);
        J.current.getFirstUnread(t, true, n).then(e => {
          if (!q.aborted) {
            z(e);
            Z(false);
          }
        }).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
          H("Invalid iterator while loading first unread msg");
          C.ToastManager.open(P.default.createElement(y.Toast, {
            msg: A.fbt._("Status update not found", null, {
              hk: "1KSfSo"
            })
          }));
          e.closeStatusViewer();
        }));
      } else {
        Z(true);
        t.loadMore(t.totalCount).then(() => {
          Z(false);
          if (t.msgs.getModelsArray().findIndex(e => e.id.toString() === n.toString()) !== -1) {
            J.current = new _.Statusv3Snapshot(t, e.continuousPlay, n);
            J.current.getFirstUnread(t, true, n).then(e => {
              if (!q.aborted) {
                z(e);
                Z(false);
              }
            }).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
              H("Invalid iterator while loading first unread msg");
              C.ToastManager.open(P.default.createElement(y.Toast, {
                msg: A.fbt._("Status update not found", null, {
                  hk: "1KSfSo"
                })
              }));
              e.closeStatusViewer();
            }));
          } else {
            if (!(V == null)) {
              V();
            }
            C.ToastManager.open(P.default.createElement(y.Toast, {
              msg: A.fbt._("Status update not found", null, {
                hk: "1KSfSo"
              })
            }));
            e.closeStatusViewer();
          }
        }).catch(() => {
          C.ToastManager.open(P.default.createElement(y.Toast, {
            msg: A.fbt._("Status update not found", null, {
              hk: "1KSfSo"
            })
          }));
          le();
        }).finally(() => {
          Z(false);
        });
      }
    } else {
      const n = R;
      J.current = new _.Statusv3Snapshot(t, e.continuousPlay);
      J.current.getFirstUnread(t, true, n == null ? undefined : n.id).then(e => {
        if (!q.aborted) {
          z(e);
          Z(false);
        }
      }).catch((0, r.filteredCatch)(u.EphemeralDrop, () => {})).catch((0, r.filteredCatch)(_.InvalidStatusV3Iterator, () => {
        H("Invalid iterator while loading first unread msg");
        C.ToastManager.open(P.default.createElement(y.Toast, {
          msg: A.fbt._("Status update not found", null, {
            hk: "1KSfSo"
          })
        }));
        e.closeStatusViewer();
      }));
    }
  }, []);
  (0, D.default)(() => {
    Promise.resolve().then(() => {
      te.current.forEach(e => {
        e.commit();
      });
      ee.current.forEach(e => {
        e.commit();
      });
    });
  });
  const ce = () => {
    const {
      rowSection: t,
      rowIdx: n
    } = e;
    const a = Y == null ? undefined : Y.statusIdx;
    const r = t === S.STATUS_ROW_SECTION.RECENT_STORIES ? a : n;
    if (r != null) {
      return r;
    } else {
      return 0;
    }
  };
  let de;
  let fe;
  let pe;
  let me;
  let he;
  let ge;
  let Ee;
  let ve;
  let _e;
  if (Y && J.current) {
    he = J.current;
    ge = he.statuses[Y.statusIdx];
    Ee = ge.statusV3;
    (t => {
      const {
        rowSection: n,
        sessionId: a
      } = e;
      const r = Y == null ? undefined : Y.statusIdx;
      const o = ce();
      if (r != null && ae.current !== r && n != null) {
        var l;
        const e = (l = ee.current.get(r)) !== null && l !== undefined ? l : new E.StatusRowViewWamEvent({
          statusRowEntryMethod: re.current,
          statusRowIndex: o,
          statusRowSection: n,
          statusRowUnreadItemCount: t.unreadCount,
          statusRowViewCount: 0,
          statusSessionId: a,
          statusViewerSessionId: $.current
        });
        e.statusRowViewCount += 1;
        ee.current.set(r, e);
        ae.current = r;
      }
    })(Ee);
    ve = ge.msgs[Y.msgIdx];
    if (he.hasPrev(Y)) {
      pe = P.default.createElement("div", {
        className: (0, O.default)(N)
      }, P.default.createElement(c.ChevronLeftIcon, null));
      me = P.default.createElement("div", {
        className: (0, O.default)(x),
        onClick: ie
      });
    }
    if (he.hasNext(Y)) {
      de = P.default.createElement("div", {
        className: (0, O.default)(L)
      }, P.default.createElement(d.ChevronRightIcon, null));
      fe = P.default.createElement("div", {
        className: (0, O.default)(j),
        onClick: () => {
          ue(M.STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP);
          se(Ee, ve);
        }
      });
    }
  }
  if (!K && !X && ve && Y && ge && Ee) {
    _e = P.default.createElement("div", {
      className: (0, O.default)(B),
      key: ve.id
    }, P.default.createElement(v.StatusV3Player, {
      key: ve.id,
      statusV3: Ee,
      msg: ve,
      mediaData: ve.mediaData,
      msgIdx: Y.msgIdx,
      totalMsgs: ge.totalCount,
      markRead: se,
      closeStatusViewer: le,
      onClickProgressBar: oe,
      onNext: ue,
      onPrev: ie,
      sessionId: e.sessionId,
      rowIdx: ce(),
      rowSection: e.rowSection,
      viewerSessionId: $.current,
      statusItemViewMap: te.current,
      statusItemLastImpressionTimestampMap: ne.current
    }));
  }
  const ye = P.default.createElement("button", {
    className: (0, O.default)(U, false),
    onClick: () => e.closeStatusViewer(true)
  }, P.default.createElement(w.XViewerIcon, null));
  const Ce = P.default.createElement("button", {
    className: (0, O.default)(W, false),
    onClick: () => e.closeStatusViewer()
  }, P.default.createElement(s.BackIcon, {
    directional: true
  }));
  let be;
  if (X) {
    be = P.default.createElement("div", {
      className: (0, O.default)(F)
    }, P.default.createElement("button", null, P.default.createElement(g.Spinner, {
      size: 50,
      stroke: 4,
      color: "white"
    })));
  }
  return P.default.createElement(p.HotKeys, {
    ref: t,
    handlers: {
      left: ie,
      right: () => {
        ue(M.STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP);
      }
    }
  }, P.default.createElement("div", {
    className: (0, O.default)(G),
    "data-animate-status-v3-viewer": true
  }, ye, Ce, me, pe, fe, de, be, P.default.createElement(b.default, {
    transitionName: "status-v3-player",
    appear: true
  }, _e)));
}
var q = (0, P.forwardRef)(V);
exports.default = q;