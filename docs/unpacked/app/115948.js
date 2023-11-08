var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfilePic = function (e) {
  return m((0, u.unproxy)(e));
};
exports.setProfilePic = function (e, t, n) {
  return g((0, u.unproxy)(e), t, n);
};
var i = require("./122583.js");
var a = require("./328620.js");
var o = require("./984330.js");
var s = require("./710310.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
}(require("./288057.js"));
var u = require("./163139.js");
var c = require("./390737.js");
var d = require("./459857.js");
var p = require("../vendor/548360.js");
var f = r(require("../vendor/667294.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function g(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, a.genId)();
  const {
    id: u
  } = e;
  if (!e.canSet()) {
    return Promise.reject(new l.ActionError());
  }
  const _ = (0, s.sendSetPicture)(u, t, n);
  e.pendingPic = t;
  const m = (0, d.getMaybeMeUser)();
  const h = u.equals(m) ? new a.ActionType(p.fbt._("Setting profile photo", null, {
    hk: "324CKi"
  })) : new a.ActionType(p.fbt._("Setting group icon", null, {
    hk: "29PVcB"
  }));
  const y = _.catch(() => {
    __LOG__(3)`models:ProfilePicThumb:setPicture dropped`;
    throw u.equals(m) ? new a.ActionType(p.fbt._("Couldn't set profile photo.", null, {
      hk: "1805JP"
    })) : new a.ActionType(p.fbt._("Couldn't set group icon.", null, {
      hk: "16OXxw"
    }));
  }).catch((0, i.filteredCatch)(o.ServerStatusCodeError, i => {
    if (i.status >= 400) {
      const i = u.equals(m) ? p.fbt._("Couldn't set profile photo.", null, {
        hk: "1805JP"
      }) : p.fbt._("Couldn't set group icon.", null, {
        hk: "16OXxw"
      });
      return new a.ActionType(i, {
        actionText: p.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => g(e, t, n, r)
      });
    }
  })).then(() => u.equals(m) ? new a.ActionType(p.fbt._("Profile photo set", null, {
    hk: "4iS8OS"
  })) : new a.ActionType(p.fbt._("Group icon set", null, {
    hk: "gjrdK"
  })));
  c.ToastManager.open(f.default.createElement(a.ActionToast, {
    id: r,
    initialAction: h,
    pendingAction: y
  }));
  return _.then(t => {
    e.set({
      tag: t.tag,
      eurl: t.eurl
    });
  }).finally(() => {
    e.pendingPic = undefined;
  });
}
function m(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, a.genId)();
  const {
    id: n
  } = e;
  if (!e.canDelete()) {
    return Promise.reject(new l.ActionError());
  }
  const r = (0, s.requestDeletePicture)(n);
  e.pendingPic = e.fallbackType;
  const u = (0, d.getMaybeMeUser)();
  const _ = n.equals(u) ? new a.ActionType(p.fbt._("Removing profile photo", null, {
    hk: "3Gwsen"
  })) : new a.ActionType(p.fbt._("Removing group icon", null, {
    hk: "4rFMmV"
  }));
  const g = r.catch(() => {
    __LOG__(3)`models:ProfilePicThumb:deletePicture dropped`;
    throw n.equals(u) ? new a.ActionType(p.fbt._("Couldn't remove profile photo.", null, {
      hk: "1cELUg"
    })) : new a.ActionType(p.fbt._("Couldn't remove group icon.", null, {
      hk: "LcYvb"
    }));
  }).catch((0, i.filteredCatch)(o.ServerStatusCodeError, r => {
    if (r.status >= 400) {
      const r = n.equals(u) ? p.fbt._("Couldn't remove profile photo.", null, {
        hk: "1cELUg"
      }) : p.fbt._("Couldn't remove group icon.", null, {
        hk: "LcYvb"
      });
      return new a.ActionType(r, {
        actionText: p.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => m(e, t)
      });
    }
  })).then(() => n.equals(u) ? new a.ActionType(p.fbt._("Profile photo removed", null, {
    hk: "1XFfUT"
  })) : new a.ActionType(p.fbt._("Group icon removed", null, {
    hk: "1RKRHa"
  })));
  c.ToastManager.open(f.default.createElement(a.ActionToast, {
    id: t,
    initialAction: _,
    pendingAction: g
  }));
  return r.then(() => {
    e.set({
      tag: undefined,
      eurl: undefined
    });
  }).finally(() => {
    e.pendingPic = undefined;
  });
}