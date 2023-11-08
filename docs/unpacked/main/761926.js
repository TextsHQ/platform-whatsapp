var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, s.useState)(false);
  const {
    rightDrawerOpen: a
  } = (0, r.useAppContext)();
  let d = [e.onClick ? s.default.createElement(u.Round, {
    key: "error-button",
    onClick: e.onClick,
    theme: u.RoundTheme.Error,
    label: e.ariaLabel
  }, s.default.createElement(l.ErrorIcon, null)) : s.default.createElement("div", {
    key: "error-icon",
    className: (0, c.default)(f.error)
  }, s.default.createElement(l.ErrorIcon, null))];
  if (t) {
    const t = s.default.createElement(i.default, {
      key: "error-tooltip",
      fromMe: e.fromMe
    }, e.tooltip);
    d.unshift(t);
  }
  if (e.fromMe === false) {
    d = d.reverse();
  }
  return s.default.createElement("div", {
    className: (0, c.default)([f.container, e.displayType === o.DISPLAY_TYPE.MSG_INFO && f.compact, e.fromMe === false && f.notFromMe, e.isGroupChatProfilePictureDisplayed === true && f.groupChatProfilePictureDisplayed, a && f.containerWithRightDrawer]),
    onMouseEnter: () => n(true),
    onMouseLeave: () => n(false)
  }, d);
};
var r = require("./99186.js");
var o = require("../app/356097.js");
var l = require("./342052.js");
var i = a(require("./585461.js"));
var u = require("./435595.js");
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
  container: {
    alignItems: "gndfcl4n",
    display: "p357zi0d",
    height: "ppled2lx",
    pointerEvents: "m62443ks",
    position: "lhggkp7q",
    end: "s5g3tb4o",
    top: "qq0sjtgm",
    zIndex: "ercejckq",
    "@media screen and (max-width: 900px)": {
      end: "dsjqnkdq"
    },
    "@media screen and (min-width: 901px) and (max-width: 1024px)": {
      marginEnd: "ob6g0szp"
    }
  },
  containerWithRightDrawer: {
    "@media screen and (min-width: 1025px) and (max-width: 1300px)": {
      end: "ls8w87k7"
    }
  },
  groupChatProfilePictureDisplayed: {
    "@media screen and (max-width: 900px)": {
      end: "hmbegz42"
    }
  },
  error: {
    alignItems: "gndfcl4n",
    backgroundColor: "dwekmf2r",
    borderTop: "btsqtxyc",
    borderEnd: "rbfikn5x",
    borderBottom: "ft81lexa",
    borderStart: "r4ixzlli",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    color: "k17s6i4e",
    display: "p357zi0d",
    height: "bmot90v7",
    justifyContent: "ac2vgrno",
    minWidth: "mhp1pqu9",
    pointerEvents: "jv8uhy2r",
    width: "i94gqilv"
  },
  notFromMe: {
    start: "itf0yk5b"
  },
  compact: {
    end: "hsa43hl1"
  }
};