var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/177938.js");
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = require("./512938.js");
var s = a(require("./570834.js"));
var c = require("../app/714574.js");
var d = a(require("./759066.js"));
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
const g = (0, u.FlatListFactory)();
function E(e, t) {
  const {
    onBack: n,
    msg: a
  } = e;
  const u = (0, m.default)(() => new s.default());
  if (a.reporterJidList == null) {
    return null;
  }
  const h = a.reporterJidList.map(e => {
    const t = r.ContactCollection.assertGet(e);
    const n = (0, c.getFormattedName)(t);
    return {
      id: e,
      itemKey: e.toString(),
      contactName: n
    };
  });
  return p.default.createElement(o.default, {
    ref: t,
    testid: "reporters-drawer"
  }, p.default.createElement(i.DrawerHeader, {
    testid: "drawer-title-reporters",
    title: f.fbt._("Sent for review by", null, {
      hk: "2oYAu3"
    }),
    onBack: n,
    type: i.DRAWER_HEADER_TYPE.SMALL,
    focusBackOrCancel: true
  }), p.default.createElement(l.default, {
    flatListControllers: [u.current]
  }, p.default.createElement(g, {
    flatListController: u.current,
    direction: "vertical",
    role: "listitem",
    data: h,
    renderItem: e => p.default.createElement(d.default, {
      reporter: e
    }),
    defaultItemHeight: 68
  })));
}
var v = (0, p.forwardRef)(E);
exports.default = v;