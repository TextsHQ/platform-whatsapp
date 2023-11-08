var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPin = function (e, t) {
  return p((0, s.unproxy)(e), t);
};
var o = require("../app/898817.js");
var l = require("../app/632157.js");
var i = require("../app/328620.js");
var u = require("./341237.js");
var s = require("../app/163139.js");
var c = require("../app/390737.js");
var d = require("../vendor/548360.js");
var f = r(require("../vendor/667294.js"));
function p(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, i.genId)();
  const {
    promises: r
  } = e;
  if (r.setPin) {
    r.setPin.abortController.abort();
  }
  let s;
  let m = 0;
  const h = (0, l.unixTimeMs)();
  if (t) {
    m = h;
  } else {
    s = e.pin;
  }
  const g = new a();
  const E = g.signal;
  const v = (0, u.setPin)(e.id, m, s, h);
  const _ = t ? new i.ActionType(d.fbt._("Pinning chat", null, {
    hk: "eAuLx"
  })) : new i.ActionType(d.fbt._("Unpinning chat", null, {
    hk: "2MiorL"
  }));
  const y = v.then(() => {
    if (E.aborted) {
      throw new o.AbortError();
    }
    const a = t ? d.fbt._("Chat pinned", null, {
      hk: "CVHOt"
    }) : d.fbt._("Chat unpinned", null, {
      hk: "3oOygP"
    });
    return new i.ActionType(a, {
      actionText: d.fbt._("Undo", null, {
        hk: "4sCkfZ"
      }),
      actionHandler: () => p(e, !t, n)
    });
  }).catch((0, o.catchAbort)(() => {})).catch(a => {
    if (a.status === 405) {
      return new i.ActionType(d.fbt._("You can only pin up to 3 chats.", null, {
        hk: "4fuJ1z"
      }));
    }
    if (a.status >= 400) {
      if (t) {
        return new i.ActionType(d.fbt._("Couldn't pin chat", null, {
          hk: "2iqBn5"
        }));
      } else {
        return new i.ActionType(d.fbt._("Couldn't unpin chat", null, {
          hk: "1AddPz"
        }));
      }
    }
    __LOG__(3)`models:chat:setPin dropped`;
    const r = t ? d.fbt._("Couldn't pin chat", null, {
      hk: "2iqBn5"
    }) : d.fbt._("Couldn't unpin chat", null, {
      hk: "1AddPz"
    });
    return new i.ActionType(r, {
      actionText: d.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => p(e, t, n)
    });
  });
  c.ToastManager.open(f.default.createElement(i.ActionToast, {
    id: n,
    initialAction: _,
    pendingAction: y
  }));
  const C = v.then(() => {
    e.pin = m;
  }).finally(() => {
    r.setPin = null;
  });
  r.setPin = {
    promise: C,
    abortController: g
  };
  return C;
}