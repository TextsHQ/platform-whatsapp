var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDesc = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return g((0, d.unproxy)(e), t);
};
var r = require("../app/122583.js");
var o = require("../app/390934.js");
var l = require("../app/328620.js");
var i = require("../app/984330.js");
var u = require("./892208.js");
var s = require("../app/862159.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
}(require("../app/288057.js"));
var d = require("../app/163139.js");
var f = require("../app/390737.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function g(e) {
  var t;
  var n;
  var a;
  var d;
  let h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let E = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, l.genId)();
  let v = h && h.trim();
  if (v === ((t = e.groupMetadata) === null || t === undefined ? undefined : t.desc)) {
    return Promise.reject(new c.ActionError());
  }
  if (v === "") {
    v = null;
  }
  const _ = (0, u.setGroupDescription)(e.id, v, (0, o.randomHex)(8), (n = e.groupMetadata) === null || n === undefined ? undefined : n.descId);
  const y = ((a = e.groupMetadata) === null || a === undefined ? undefined : a.groupType) === s.GroupType.COMMUNITY;
  const C = (d = e.groupMetadata) === null || d === undefined ? undefined : d.desc;
  const b = new l.ActionType(y ? p.fbt._("Changing community description", null, {
    hk: "28w3c1"
  }) : p.fbt._("Changing group description", null, {
    hk: "29anWE"
  }));
  const M = _.then(() => new l.ActionType(y ? p.fbt._("Community description changed", null, {
    hk: "155OLF"
  }) : p.fbt._("Group description changed", null, {
    hk: "2oOtxG"
  }), {
    actionText: p.fbt._("Undo", null, {
      hk: "4sCkfZ"
    }),
    actionHandler: () => g(e, C, E)
  })).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
    if (e.status >= 400) {
      return new l.ActionType(y ? p.fbt._("Community description change failed", null, {
        hk: "2RvOgf"
      }) : p.fbt._("Group description change failed", null, {
        hk: "orF6o"
      }));
    }
  })).catch(() => {
    __LOG__(3)`models:chat:setDesc dropped`;
    return new l.ActionType(y ? p.fbt._("Community description change failed", null, {
      hk: "2RvOgf"
    }) : p.fbt._("Group description change failed", null, {
      hk: "orF6o"
    }), {
      actionText: p.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => g(e, v, E)
    });
  });
  f.ToastManager.open(m.default.createElement(l.ActionToast, {
    id: E,
    initialAction: b,
    pendingAction: M
  }));
  return _.then(() => {
    var t;
    if (!((t = e.groupMetadata) === null || t === undefined)) {
      t.set({
        desc: v || ""
      });
    }
  }).catch((0, r.filteredCatch)(i.ServerStatusCodeError, () => {}));
}