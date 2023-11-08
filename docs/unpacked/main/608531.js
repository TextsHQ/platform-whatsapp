var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewAllVotesDrawer = undefined;
var r = a(require("../app/670983.js"));
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = a(require("./570834.js"));
var s = require("../app/44118.js");
var c = require("./484590.js");
var d = require("./620283.js");
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
}(require("../vendor/667294.js"));
var m = a(require("../app/637660.js"));
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
function g(e, t) {
  const {
    msg: n,
    optionLocalId: a,
    onBack: h
  } = e;
  const g = (0, d.useResults)(n);
  const E = Array.from(g.keys()).find(e => e.localId === a);
  const v = (0, m.default)(() => new u.default());
  if (E == null) {
    __LOG__(4, undefined, new Error(), true)`[Polls] Unable to find poll option in ViewAllVotesDrawer`;
    SEND_LOGS("null-poll-option");
    return null;
  }
  const _ = (0, r.default)(g.get(E), "optionsToResults.get(option)");
  return p.default.createElement(o.default, {
    ref: t,
    key: "poll-details-drawer",
    theme: "striped",
    testid: "poll-details-drawer"
  }, p.default.createElement(i.DrawerHeader, {
    title: f.fbt._("Poll Results", null, {
      hk: "49h1Kj"
    }),
    type: i.DRAWER_HEADER_TYPE.SMALL,
    onBack: h,
    rtlFixIfOnDarwin: true,
    focusBackOrCancel: true
  }), p.default.createElement(l.default, {
    flatListControllers: [v.current]
  }, p.default.createElement(c.OptionSection, {
    option: E,
    result: _,
    links: (0, s.getPollOptionLinks)(n.unsafe(), E),
    isPollFromMe: n.id.fromMe,
    flatListController: v.current
  })));
}
const E = (0, p.forwardRef)(g);
exports.ViewAllVotesDrawer = E;
E.displayName = "ViewAllVotesDrawer";