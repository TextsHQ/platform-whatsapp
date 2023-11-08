Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContextProvider = function (e) {
  const {
    children: t,
    rightDrawerOpen: n,
    chatListCollapsed: r
  } = e;
  return a.default.createElement(l.Provider, {
    value: {
      rightDrawerOpen: n,
      chatListCollapsed: r
    }
  }, t);
};
exports.useAppContext = function () {
  const e = (0, a.useContext)(l);
  (0, a.useEffect)(() => {
    if (e === o) {
      __LOG__(3)`[AppContext] 'useAppContext' must be used in a child of an 'AppContext' provider`;
    }
  }, []);
  return e;
};
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = r(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, l, i);
      } else {
        a[l] = e[l];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function r(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (r = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const o = {
  rightDrawerOpen: false,
  chatListCollapsed: false
};
const l = (0, a.createContext)(o);