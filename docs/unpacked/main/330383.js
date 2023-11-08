var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/763614.js");
var o = require("../app/676345.js");
var l = require("../app/561912.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
var u = a(require("../app/156720.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  container: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    width: "ln8gz9je",
    paddingTop: "qomlamqu",
    backgroundColor: "rv6u8h8g",
    borderStart: "av6w3u2w"
  },
  body: {
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "tffqa6uj",
    borderTopStartRadius: "es0dlo02",
    borderTopEndRadius: "g4gtvyba",
    borderBottomEndRadius: "cxgkfk16",
    borderBottomStartRadius: "zpv227fn"
  },
  bodyMargin: {
    marginStart: "acy0weht"
  },
  cancelButton: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "otypc3uk",
    minWidth: "lemzf3q7",
    color: "cs9t9or5",
    backgroundColor: "rv6u8h8g"
  },
  transparentBackground: {
    backgroundColor: "thr4l2wc"
  }
};
const d = (0, i.forwardRef)((e, t) => {
  let {
    children: n,
    bodyBackground: a = true,
    attachmentButtonHidden: s = false,
    onOmit: d
  } = e;
  const f = (0, i.useRef)();
  (0, i.useImperativeHandle)(t, () => ({
    getElement: () => f.current
  }));
  return i.default.createElement("div", {
    className: (0, u.default)(c.container),
    ref: f
  }, i.default.createElement("div", {
    className: (0, u.default)(c.body, (0, r.areExpressionPanelsEnabled)() && s === false ? c.bodyMargin : o.uiMargin.start24, !a && c.transparentBackground)
  }, n), i.default.createElement("div", {
    className: (0, u.default)(c.cancelButton)
  }, i.default.createElement("div", {
    role: "button",
    onClick: d
  }, i.default.createElement(l.XIcon, null))));
});
d.displayName = "PopupPanel";
var f = d;
exports.default = f;