var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onCancel: t,
    onReport: n,
    contact: a
  } = e;
  const [m, g] = (0, f.useState)(false);
  const E = f.default.createElement(u.Name, {
    contact: a
  });
  const v = d.fbt._("Report {contact}?", [d.fbt._param("contact", E)], {
    hk: "4raiS"
  });
  let _;
  _ = a.isBusiness ? d.fbt._("This business's status update will be forwarded to WhatsApp. This business will not be notified.", null, {
    hk: "3c08c7"
  }) : d.fbt._("This contact's status update will be forwarded to WhatsApp. This contact will not be notified.", null, {
    hk: "2FK7Nz"
  });
  const y = d.fbt._("Block contact", null, {
    hk: "I7Mhc"
  });
  return f.default.createElement(l.ConfirmPopup, {
    onOK: () => n(m),
    type: i.ModalTheme.StatusV3Report,
    okText: d.fbt._("OK", null, {
      hk: "TvIHt"
    }),
    onCancel: t,
    title: v
  }, (0, r.getABPropConfigValue)("enable_status_report_and_block") && f.default.createElement("div", {
    className: (0, p.default)(c.uiMargin.vert12, c.uiPadding.bottom20, h, c.uiMargin.end0)
  }, f.default.createElement(o.CheckBox, {
    onChange: () => g(e => !e),
    checked: m,
    id: "status-report-upsell-block"
  }), f.default.createElement(s.TextLabel, {
    className: (0, p.default)(c.uiMargin.start8),
    htmlFor: "status-report-upsell-block"
  }, y)), f.default.createElement(s.TextParagraph, {
    xstyle: c.uiMargin.bottom12
  }, _));
};
var r = require("../app/287461.js");
var o = require("./468926.js");
var l = require("../app/103440.js");
var i = require("../app/118612.js");
var u = require("../app/21645.js");
var s = require("../app/180519.js");
var c = require("../app/676345.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
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
var p = a(require("../app/156720.js"));
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
const h = {
  borderBottom: "j4zbmt6h"
};