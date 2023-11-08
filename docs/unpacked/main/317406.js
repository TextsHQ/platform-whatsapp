var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, f.default)(() => Date.now());
  const t = (0, d.useRef)(-1);
  const n = (0, d.useRef)(-1);
  const a = (0, f.default)(() => new c.default({
    loggingCallback: h
  }));
  const u = (0, f.default)(i.createTimeSpentArray);
  const g = r => {
    const o = a.current;
    const l = u.current;
    if (!o && !l) {
      return;
    }
    if (r instanceof MouseEvent) {
      if (r.pageX === t.current && r.pageY === n.current && r.type !== "click") {
        return;
      }
      t.current = r.pageX;
      n.current = r.pageY;
    }
    const i = Date.now();
    const s = i - e.current;
    if (s > 0) {
      e.current = i;
      if (!(o == null)) {
        o.update(e.current);
      }
      if (!(l == null)) {
        l.update(e.current);
      }
    } else if (s < -5) {
      e.current = i;
    }
  };
  (0, d.useEffect)(() => {
    (0, o.flushBitarrays)(s.KEYS.USER_ACTIVITY_TIME_SPENT_EVENT, h);
    return () => {
      if (a.current) {
        a.current.ship();
        a.current = null;
      }
    };
  }, []);
  (0, d.useEffect)(() => {
    (0, o.flushBitarrays)(s.KEYS.TIME_SPENT_BITARRAY_EVENT, o.postTsBitArrayEvent);
    return () => {
      if (u.current) {
        u.current.ship();
        u.current = null;
      }
    };
  }, []);
  (0, p.useListener)(window, "beforeunload", () => {
    if (a.current) {
      a.current.ship(e => {
        (0, o.stashBitarrayData)(e, s.KEYS.USER_ACTIVITY_TIME_SPENT_EVENT);
      });
      a.current = null;
    }
    if (u.current) {
      u.current.ship(e => {
        (0, o.stashBitarrayData)((0, i.preprocessTsArrayData)(e), s.KEYS.TIME_SPENT_BITARRAY_EVENT);
      });
      a.current = null;
    }
    (0, l.setPendingBackgroundNavigation)();
  });
  (0, p.useListener)(window, "blur", l.logTsBackgroundNavigation);
  (0, p.useListener)(r.Cmd, "logout", l.logTsBackgroundNavigation);
  (0, p.useListener)(window, "focus", l.logTsForegroundNavigation);
  (0, p.useListeners)(m.map(e => {
    let {
      source: t,
      name: n
    } = e;
    return {
      source: t,
      eventOrEvents: n,
      callback: g,
      opts: {
        passive: true,
        capture: true
      }
    };
  }));
  (0, p.useListener)(null, "BrowserWindow:minimize", () => {
    var e;
    if (!((e = a.current) === null || e === undefined)) {
      e.shipAndEndSession();
    }
  });
  (0, p.useListener)(null, "BrowserWindow:restore", () => {
    var t;
    if (a.current) {
      e.current = Date.now();
      if (!((t = a.current) === null || t === undefined)) {
        t.update(e.current);
      }
    } else {
      __LOG__(3)`Time Spent Logger not started`;
    }
  });
  return null;
};
var r = require("../app/780549.js");
var o = require("../app/195079.js");
var l = require("../app/717089.js");
var i = require("../app/177733.js");
var u = require("./305005.js");
var s = require("../app/94872.js");
var c = a(require("../app/648598.js"));
var d = require("../vendor/667294.js");
var f = a(require("../app/637660.js"));
var p = require("../app/808446.js");
const m = [{
  source: window,
  name: "focus"
}, {
  source: document,
  name: "wheel"
}, {
  source: document,
  name: "keydown"
}, {
  source: document,
  name: "mouseover"
}, {
  source: document,
  name: "mousemove"
}, {
  source: document,
  name: "click"
}, {
  source: document,
  name: "scroll"
}];
const h = e => {
  const t = new u.UserActivityWamEvent({
    userActivitySessionId: e.sessionId,
    userActivityStartTime: e.startTime,
    userActivityBitmapLen: e.bitmapLen,
    userActivityBitmapLow: e.bitmap[0],
    userActivitySessionSeq: e.sessionSeq,
    userActivitySessionCum: e.sessionCum
  });
  if (e.bitmapLen > 32) {
    t.userActivityBitmapHigh = e.bitmap[1];
  }
  t.commit();
};