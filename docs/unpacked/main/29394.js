var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconTabs = function (e) {
  const t = (0, s.useRef)(null);
  const n = (0, s.useRef)([]);
  if (e.refs) {
    e.tabConfigs.forEach((t, n) => (0, r.default)(e.refs, "props.refs")[n] = {
      current: (0, r.default)(document.body, "document.body")
    });
  }
  return s.default.createElement(i.HotKeys, {
    role: "tablist",
    handlers: {
      right: () => {
        var a;
        var r;
        const o = (a = t.current) !== null && a !== undefined ? a : e.tabConfigs.length - 1;
        const l = o === e.tabConfigs.length - 1 ? 0 : o + 1;
        if (!((r = n.current[l]) === null || r === undefined)) {
          r.focus();
        }
      },
      left: () => {
        var a;
        var r;
        const o = (a = t.current) !== null && a !== undefined ? a : 0;
        const l = o === 0 ? e.tabConfigs.length - 1 : o - 1;
        if (!((r = n.current[l]) === null || r === undefined)) {
          r.focus();
        }
      }
    }
  }, s.default.createElement(o.FlexRow, null, e.tabConfigs.map((a, r) => {
    let {
      Icon: o,
      iconStyle: i,
      ariaLabel: d
    } = a;
    const p = e.selectedIndex === r;
    const m = r === 0;
    const h = r === e.tabConfigs.length - 1;
    return s.default.createElement(l.default, {
      align: "stretch",
      key: r
    }, s.default.createElement("button", {
      "aria-label": d,
      role: "tab",
      ref: e => n.current[r] = e,
      tabIndex: e.selectedIndex == null && m || p ? 0 : -1,
      "aria-selected": p,
      className: (0, c.default)(p && f.selected, e.theme === "expression-panels" && p && f.expressionsPanelSelectedTab, f.tab, e.theme === "expression-panels" && f.expressionPanelsTab, m && f.firstTab, h && f.lastTab),
      onClick: () => e.onSelect(r),
      onFocus: () => t.current = r
    }, s.default.createElement(o, {
      containerRef: e.refs ? e.refs[r] : undefined,
      iconXstyle: [f.icon, i],
      className: (0, c.default)(m && f.firstIconContainer, h && f.lastIconContainer, e.popupAtLaunch === true && f.popupAnim, u.UA.isElectron && f.electronIconsPerspective),
      style: {
        animationDuration: "0.6s",
        animationDelay: 0.5 + r * 0.3 + "s"
      }
    })));
  })));
};
var r = a(require("../app/670983.js"));
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("../app/81644.js");
var u = require("../app/368170.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var c = a(require("../app/156720.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  selected: {
    backgroundColor: "f7wxzknn"
  },
  tab: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    width: "dq3evca1",
    height: "epwkujcx",
    boxSizing: "cm280p3y",
    borderTop: "lbsrbgll",
    borderEnd: "q49csmvs",
    borderBottom: "bh3h7g0c",
    borderStart: "tqxyxngt",
    borderStartWidth: "ldwklxfk",
    borderEndWidth: "gwvgr1ja"
  },
  firstTab: {
    borderTopStartRadius: "g1jn521u",
    borderBottomStartRadius: "bbs9k8l5",
    borderStartWidth: "mzoqfcbu",
    ":focus": {
      borderTopStartRadius: "oyztl3ar",
      borderBottomStartRadius: "h6r5aqpz"
    }
  },
  lastTab: {
    borderTopEndRadius: "mrnekr2l",
    borderBottomEndRadius: "wu0i2wpa",
    borderEndWidth: "p7waza29",
    ":focus": {
      borderTopEndRadius: "kq55ehwl",
      borderBottomEndRadius: "t2hfvjzt"
    }
  },
  icon: {
    color: "svlsagor",
    width: "hgg0ttet",
    height: "qgpfrw6h"
  },
  firstIconContainer: {
    marginStart: "fooq7fky"
  },
  lastIconContainer: {
    marginEnd: "bugiwsl0"
  },
  popupAnim: {
    animationName: "j6t0p44n"
  },
  electronIconsPerspective: {
    transform: "j8qkm4ft"
  },
  expressionPanelsTab: {
    height: "stnyektq",
    width: "dxy1asz1"
  },
  expressionsPanelSelectedTab: {
    backgroundColor: "dq6qjeyg"
  }
};