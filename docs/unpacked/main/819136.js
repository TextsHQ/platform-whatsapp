Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/953213.js");
var r = require("../app/374660.js");
var o = require("../app/675085.js");
var l = require("../app/97858.js");
var i = require("./983271.js");
var u = require("../vendor/548360.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var c = require("../app/655241.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f(e) {
  const t = () => {
    (0, i.openExitAndDeleteGroupModal)(e.chat);
  };
  const n = (0, c.useModelValues)(e.chat, ["isReadOnly", "kind"]);
  const {
    isReadOnly: d,
    kind: f
  } = n;
  let p;
  let m = e.onDeleteOrExit;
  if (f != null) {
    switch (f) {
      case a.ChatKindType.Group:
        if (d) {
          p = u.fbt._("Delete group", null, {
            hk: "2MKJYs"
          });
        } else if (!(0, r.isCommunityAnnouncementGroup)(n) && (0, r.isSuspendedGroup)(n) && (0, l.isGroupSuspendV2Enabled)()) {
          p = u.fbt._("Exit group and delete", null, {
            hk: "1Szubg"
          });
          m = t;
        } else {
          p = u.fbt._("Exit group", null, {
            hk: "3EOkxm"
          });
        }
        break;
      case a.ChatKindType.Broadcast:
        p = u.fbt._("Delete broadcast list", null, {
          hk: "3xAxXY"
        });
        break;
      case a.ChatKindType.Chat:
        p = u.fbt._("Delete chat", null, {
          hk: "3Vq9G4"
        });
    }
  }
  return s.default.createElement(o.DropdownItem, {
    testid: "mi-delete",
    action: m,
    disabled: e.disabled
  }, p);
}
var p = (0, s.memo)(f);
exports.default = p;