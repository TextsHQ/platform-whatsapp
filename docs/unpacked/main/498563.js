var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    isGeosuspended: t,
    isAdminOrOwner: n
  } = e;
  if (t) {
    return p.default.createElement(g, null);
  }
  return p.default.createElement(d.default, {
    theme: "center"
  }, p.default.createElement(s.TextHeader, {
    level: "2",
    size: "16",
    weight: "bold",
    xstyle: c.uiMargin.bottom2,
    testid: "newsletter-suspended-conversation-panel-system-message-header"
  }, f.fbt._("This channel is no longer available", null, {
    hk: "3Q7wOq"
  })), p.default.createElement(s.TextParagraph, {
    testid: "newsletter-suspended-conversation-panel-system-message-paragraph"
  }, n ? f.fbt._("Followers can't see channel history and new updates can't be shared.", null, {
    hk: "30wDfi"
  }) : f.fbt._("You can't see channel history and new updates aren't available.", null, {
    hk: "q01WZ"
  })));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/196554.js"));
var l = require("./949359.js");
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/180519.js");
var c = require("../app/676345.js");
var d = a(require("./929091.js"));
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
a(require("../app/156720.js"));
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
  linkColor: {
    color: "e7al1772",
    textDecoration: "aja0x350"
  }
};
function g() {
  const [e, t] = (0, p.useState)(null);
  (0, p.useEffect)(() => {
    function e() {
      return (e = (0, r.default)(function* () {
        const e = yield (0, l.getGeosuspendedInYourCountryString)({
          isPreview: false
        });
        t(e);
      })).apply(this, arguments);
    }
    !function () {
      e.apply(this, arguments);
    }();
  }, []);
  if (e != null) {
    return p.default.createElement(d.default, {
      theme: "center"
    }, p.default.createElement(o.default, {
      testid: "newsletter-geosuspended-conversation-panel-system-message-link",
      onClick: () => {
        (0, i.openExternalLink)((0, u.getNewsletterGeosuspendFaqUrl)());
      },
      xstyle: h.linkColor
    }, p.default.createElement(s.TextParagraph, {
      testid: "newsletter-geosuspended-conversation-panel-system-message-paragraph"
    }, e), p.default.createElement(s.TextParagraph, null, f.fbt._("Click to learn more", null, {
      hk: "2dRkwu"
    }))));
  }
}