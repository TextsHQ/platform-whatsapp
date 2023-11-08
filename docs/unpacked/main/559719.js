var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const n = (0, p.useRef)();
  const [a, g] = (0, p.useState)(null);
  const [v, _] = (0, p.useState)(false);
  const [y, C] = (0, p.useState)(false);
  (0, h.useListener)(o.Cmd, "edit_group_subject", () => {
    var e;
    var t;
    if (!((e = n.current) === null || e === undefined)) {
      e.restoreFocus();
    }
    if (!((t = n.current) === null || t === undefined)) {
      t.triggerSelect();
    }
  });
  const b = function () {
    var t = (0, r.default)(function* () {
      C(false);
      if (a && a !== e.subject) {
        _(true);
        try {
          yield e.onSave(a);
        } finally {
          _(false);
          g(null);
        }
      } else {
        g(null);
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  const M = [s.TextInputCustomStyleThemes.groupInfoName, s.TextInputCustomStyleThemes.chatInfoLargeText];
  return p.default.createElement("div", {
    className: (0, m.default)(E.container, y && E.editing, d.uiMargin.end24)
  }, p.default.createElement(s.RichTextField, {
    ref: n,
    testid: (t = e.testid) !== null && t !== undefined ? t : "group-info-drawer-subject-input",
    title: a != null ? a : e.subject,
    value: a != null ? a : e.subject,
    pending: v,
    showRemaining: true,
    validate: e => !(!e || !e.trim()),
    maxLength: c.ServerProps.maxSubject,
    onBeginEdit: () => {
      C(true);
    },
    onChange: t => {
      let {
        text: n
      } = t;
      var a;
      if (y) {
        g(n);
        if (!((a = e.onChange) === null || a === undefined)) {
          a.call(e, n);
        }
      }
    },
    onSave: b,
    onError: () => {
      u.ModalManager.open(p.default.createElement(l.ConfirmPopup, {
        onOK: () => u.ModalManager.close(),
        okText: (0, i.default)("OK")
      }, e.emptyErrorMessage != null ? e.emptyErrorMessage : f.fbt._("Group subject can't be empty", null, {
        hk: "UkdpA"
      })));
    },
    onCancel: () => {
      C(false);
      g(null);
    },
    supportsEmoji: true,
    lockable: true,
    lowProfile: true,
    constrainedWidth: true,
    theme: "large",
    customStyleThemes: M,
    showEditOnHover: true,
    showHighlightOnHover: true,
    editable: e.editable,
    editRestrictionInfo: e.editRestrictionInfo,
    onBlur: e.onBlur,
    direction: e.direction
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/780549.js");
var l = require("../app/103440.js");
var i = a(require("../app/395767.js"));
var u = require("../app/114850.js");
var s = require("./202391.js");
var c = require("../app/937001.js");
var d = require("../app/676345.js");
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
  var n = g(t);
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
var m = a(require("../app/156720.js"));
var h = require("../app/808446.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  container: {
    textAlign: "qfejxiq4",
    maxWidth: "laorhtua"
  },
  editing: {
    width: "ln8gz9je",
    textAlign: "ljrqcn24",
    "@media (max-width: 1441px)": {
      width: "o135me7o"
    }
  }
};