var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    viewers: t,
    onClose: n
  } = e;
  (0, m.useEffect)(() => n);
  const a = (0, f.getUserPrivacySettings)().readReceipts === "none";
  const r = new c.default();
  const u = function (e) {
    const t = e.map(e => ({
      participant: e,
      itemKey: e.id.toString(),
      height: s.DEFAULT_ITEM_HEIGHT
    }));
    t.sort((e, t) => t.participant.t - e.participant.t);
    return t;
  }(t);
  const h = u.length && a !== true ? m.default.createElement(g, {
    flatListController: r,
    direction: "vertical",
    forceConsistentRenderCount: true,
    data: u,
    renderItem: E
  }) : m.default.createElement(_, {
    readReaceiptsOff: a
  });
  const y = a ? 0 : u.length;
  const C = a ? p.fbt._("Views not available", null, {
    hk: "zJOln"
  }) : p.fbt._("Viewed by {status-viewer-count}", [p.fbt._param("status-viewer-count", y)], {
    hk: "3jScvN"
  });
  const b = {
    width: 400,
    height: v(y)
  };
  return m.default.createElement(d.Modal, {
    type: d.ModalTheme.StatusV3ViewerList,
    dimensions: b
  }, m.default.createElement(o.default, {
    theme: "settings"
  }, m.default.createElement(i.DrawerHeader, {
    onCancel: n,
    title: C,
    type: i.DRAWER_HEADER_TYPE.POPUP
  }), m.default.createElement(l.default, {
    flatListControllers: [r]
  }, h)));
};
var r = a(require("./682735.js"));
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = require("./811720.js");
var s = require("./512938.js");
var c = a(require("./570834.js"));
var d = require("../app/118612.js");
var f = require("../app/757453.js");
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
const g = (0, s.FlatListFactory)();
function E(e) {
  const {
    participant: t
  } = e;
  return m.default.createElement(r.default, {
    msgInfoParticipant: t,
    contact: t.contact,
    key: t.id.toString()
  });
}
function v(e) {
  const t = e > 0 ? e * 72 : 100;
  return Math.min(500, t + 59);
}
function _(e) {
  let {
    readReaceiptsOff: t
  } = e;
  return m.default.createElement(u.Empty, null, t ? p.fbt._("Can't see views because you disabled Read Receipts in Settings > Account > Privacy", null, {
    hk: "45oJGn"
  }) : p.fbt._("No views yet", null, {
    hk: "456C0K"
  }));
}