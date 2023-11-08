Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, u.useState)(false);
  (0, u.useEffect)(() => {
    var t;
    const s = (() => {
      var t;
      var n;
      if (!(0, r.communitiesEnabled)()) {
        return;
      }
      if ((e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === l.GroupType.COMMUNITY) {
        return e;
      }
      var a;
      if ((e == null || (n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === l.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        if (e == null || (a = e.groupMetadata) === null || a === undefined) {
          return undefined;
        } else {
          return a.getParentGroupChat();
        }
      }
    })();
    if (s && ((t = s.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin()) && (0, a.cagAndCommunitySubjectDiffer)(s)) {
      n(true);
      i.ModalManager.open(u.default.createElement(o.CommunitySubjectSyncingIssuePopup, {
        parentChat: s
      }));
    }
  }, []);
  return t;
};
var a = require("../app/394164.js");
var r = require("../app/174834.js");
var o = require("./771972.js");
var l = require("../app/862159.js");
var i = require("../app/114850.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}