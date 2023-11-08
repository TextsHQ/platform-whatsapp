var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  const a = e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType;
  const [m, h] = (0, p.default)(s.NUX.COMMUNITY_HOME);
  const g = (0, f.default)(r.ChatCollection, ["add"], () => {
    var t;
    if (a === i.GroupType.COMMUNITY) {
      return e;
    } else if (e == null || (t = e.groupMetadata) === null || t === undefined) {
      return undefined;
    } else {
      return t.getParentGroupChat();
    }
  });
  const E = (0, f.default)(g == null || (n = g.groupMetadata) === null || n === undefined ? undefined : n.participants, ["bulk_add"], () => {
    var e;
    return Boolean(g == null || (e = g.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmAdmin());
  });
  const v = (0, d.useCallback)(() => {
    var t;
    if ((0, o.communitiesEnabled)()) {
      if (m && !E) {
        if (e != null && e.isGroup && a != null && a !== i.GroupType.DEFAULT && (a === i.GroupType.COMMUNITY || ((t = e.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember())) && g != null) {
          u.ModalManager.open(d.default.createElement(l.default, {
            parentChat: g,
            onClose: () => {
              h();
            }
          }));
        }
      } else if ((0, c.shouldOpenCommunityAdminPromotionNotificationPopup)(e)) {
        (0, c.openCommunityAdminPromotionNotificationPopup)(e);
      }
    }
  }, [E]);
  (0, d.useEffect)(() => {
    v();
  }, [v]);
};
var r = require("../app/351053.js");
var o = require("../app/174834.js");
var l = a(require("./419923.js"));
var i = require("../app/862159.js");
var u = require("../app/114850.js");
var s = require("../app/95589.js");
var c = require("./375395.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var f = a(require("../app/524578.js"));
var p = a(require("./157558.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}