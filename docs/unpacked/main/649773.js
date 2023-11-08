var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatListFilters = undefined;
var r = require("../app/2754.js");
var o = require("../main-chunk/206563.js");
var l = require("../app/81644.js");
var i = a(require("../app/932325.js"));
var u = require("./990276.js");
var s = require("../main-chunk/931109.js");
var c = require("../app/454905.js");
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
const h = [{
  label: f.fbt._("All", null, {
    hk: "4uA4Xh"
  })
}, {
  filter: r.SEARCH_FILTERS.UNREAD,
  label: f.fbt._("Unread", null, {
    hk: "4aVUCt"
  })
}, {
  filter: r.SEARCH_FILTERS.CONTACT,
  label: f.fbt._("Contacts", null, {
    hk: "1PV0Wd"
  })
}, {
  filter: r.SEARCH_FILTERS.GROUP,
  label: f.fbt._("Groups", null, {
    hk: "JpETu"
  })
}];
const g = {
  filtersContainer: {
    backgroundColor: "ocsria88",
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    flexWrap: "lkhkxwyq",
    flexShrink: "oq44ahr5",
    rowGap: "i6vnu1w3",
    columnGap: "qjslfuze",
    minWidth: "ktfrpxia",
    minHeight: "nu7pwgvd"
  },
  filtersContainerBorder: {
    borderBottomWidth: "oteuebma",
    borderBottomStyle: "cmcp1to6",
    borderBottomColor: "mj87wc59"
  }
};
function E(e, t) {
  const n = (0, p.useRef)([]);
  const a = (0, p.useRef)(null);
  const r = (0, p.useRef)(null);
  const f = e => {
    if (e) {
      e.focus();
      r.current = e;
    }
  };
  (0, p.useImperativeHandle)(t, () => ({
    focus: () => {
      f(a.current);
    }
  }));
  return p.default.createElement(l.HotKeys, {
    handlers: {
      up: t => {
        var n;
        if (!((n = e.onPrevControl) === null || n === undefined)) {
          n.call(e, t);
        }
      },
      down: t => {
        var n;
        if (!((n = e.onNextControl) === null || n === undefined)) {
          n.call(e, t);
        }
      },
      left: () => {
        const e = n.current.indexOf(r.current);
        let t;
        t = i.default.isRTL() ? e + 1 : e - 1;
        const a = n.current[t];
        if (a) {
          f(a);
        }
      },
      right: () => {
        const e = n.current.indexOf(r.current);
        let t;
        t = i.default.isRTL() ? e - 1 : e + 1;
        const a = n.current[t];
        if (a) {
          f(a);
        }
      }
    },
    xstyle: [g.filtersContainer, !(0, c.topMenuRedesignEnabled)() && g.filtersContainerBorder, d.uiPadding.top2, d.uiPadding.bottom7, d.uiPadding.horiz16]
  }, h.map((t, r) => {
    let {
      filter: l,
      label: i
    } = t;
    return p.default.createElement(u.ListFilterButton, {
      key: l || "all",
      tabOrder: s.TAB_ORDER.CHAT_LIST_FILTER,
      ref: t => ((t, r) => {
        if (h[r].filter === e.filter) {
          a.current = t;
        }
        n.current[r] = t;
      })(t, r),
      label: i,
      selected: e.filter === l || e.filter == null && l == null,
      onClick: () => (t => {
        var n;
        const a = t === e.filter ? null : t;
        if (((n = e.filterSession) === null || n === undefined ? undefined : n.sessionId) != null) {
          (0, o.logSelectFilterEvent)(e.filterSession.newSessionId(), {
            kind: a
          });
        }
        e.onFilter(a);
      })(l)
    });
  }));
}
const v = (0, p.forwardRef)(E);
exports.ChatListFilters = v;
v.displayName = "ChatListFilters";