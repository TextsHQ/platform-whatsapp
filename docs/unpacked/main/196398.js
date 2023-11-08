var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralPopup = function (e) {
  const [t, n] = (0, m.useState)(e.initialDuration);
  const [a, g] = (0, h.default)(c.NUX.EPHEMERAL);
  let v;
  v = a ? m.default.createElement(l.default, {
    fromMe: true
  }) : m.default.createElement(m.default.Fragment, null, m.default.createElement(f.TextParagraph, {
    xstyle: E.explanation
  }, p.fbt._("All new messages in this chat will disappear after the selected duration.", null, {
    hk: "4lToiN"
  })), (0, o.getDefaultEphemeralityDurations)().map(e => {
    let {
      value: a,
      label: r
    } = e;
    return m.default.createElement(d.RadioWithLabel, {
      key: a,
      name: "duration",
      value: a,
      label: r,
      checked: a === t,
      onChange: () => (e => {
        n(e);
      })(a)
    });
  }));
  return m.default.createElement(r.ConfirmPopup, {
    testid: "ephemeral_popup",
    title: a ? undefined : p.fbt._("Disappearing messages", null, {
      hk: "384ocn"
    }),
    onOK: a ? () => {
      g();
    } : () => {
      e.onDurationSelected(t);
      s.ModalManager.close();
    },
    onCancel: a ? () => {
      (0, i.openExternalLink)((0, u.getEphemeralFaqUrl)());
    } : () => {
      s.ModalManager.close();
    },
    cancelText: a ? p.fbt._("Learn more", null, {
      hk: "1rcCLt"
    }) : p.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, v);
};
var r = require("../app/103440.js");
var o = require("./741917.js");
var l = a(require("./113124.js"));
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/114850.js");
var c = require("../app/95589.js");
var d = require("./695431.js");
var f = require("../app/180519.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
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
a(require("../app/156720.js"));
var h = a(require("./157558.js"));
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
  explanation: {
    marginBottom: "t4zgqcuo"
  }
};