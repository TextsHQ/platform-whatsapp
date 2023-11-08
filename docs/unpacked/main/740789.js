var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningKICMeUserExitedModal = function (e) {
  let {
    action: t,
    message: n,
    onClose: a
  } = e;
  (0, p.useEffect)(() => {
    (0, r.default)(function* () {
      const e = t === "keep" ? c.KeepType.KEEP_FOR_ALL : c.KeepType.UNDO_KEEP_FOR_ALL;
      const a = yield (0, l.getBaseErrorLog)(n, e);
      a.set({
        kicErrorCode: d.KIC_ERROR_CODE_TYPE.NOT_PART_OF_THE_GROUP
      });
      a.commit();
    })();
  }, []);
  let o = null;
  o = t === "keep" ? f.fbt._("You can't keep this message because you left the chat.", null, {
    hk: "2vInDd"
  }) : f.fbt._("You can't unkeep this message because you left the chat.", null, {
    hk: "1OKuRJ"
  });
  return p.default.createElement(h, {
    content: o,
    onClose: a
  });
};
exports.WarningKICSenderExitedModal = function (e) {
  let {
    action: t,
    message: n,
    onClose: a
  } = e;
  (0, p.useEffect)(() => {
    (0, r.default)(function* () {
      const e = t === "keep" ? c.KeepType.KEEP_FOR_ALL : c.KeepType.UNDO_KEEP_FOR_ALL;
      const a = yield (0, l.getBaseErrorLog)(n, e);
      a.set({
        kicErrorCode: d.KIC_ERROR_CODE_TYPE.MESSAGE_FROM_EX_MEMBER
      });
      a.commit();
    })();
  }, []);
  let o = null;
  o = t === "keep" ? f.fbt._("This message can't be kept because the message author left the chat.", null, {
    hk: "4vTPvT"
  }) : f.fbt._("This message can't be unkept because the message author left the chat.", null, {
    hk: "1lFw4o"
  });
  return p.default.createElement(h, {
    content: o,
    onClose: a
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/103440.js");
var l = require("./469151.js");
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/114850.js");
var c = require("../app/533494.js");
var d = require("./483618.js");
var f = require("../vendor/548360.js");
var p = function (e, t) {
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
function h(e) {
  let {
    content: t,
    onClose: n
  } = e;
  return p.default.createElement(o.ConfirmPopup, {
    onOK: () => {
      if (n != null) {
        n();
      }
      s.ModalManager.close();
    },
    cancelText: f.fbt._("learn more", null, {
      hk: "3hjRVy"
    }),
    onCancel: () => {
      (0, i.openExternalLink)((0, u.getEphemeralFaqUrl)());
      if (n != null) {
        n();
      }
      s.ModalManager.close();
    }
  }, t);
}