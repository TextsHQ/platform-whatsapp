var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemDocuments = function (e) {
  let {
    chat: t,
    dismissMenu: n,
    onDocumentPick: a
  } = e;
  const f = (0, d.useRef)();
  return d.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-document",
    action: e => {
      e.preventDefault();
      return !f.current || (f.current.open(), (0, c.prepareChatForMessageSending)(t), r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.DOCUMENT), false);
    },
    icon: d.default.createElement("svg", {
      height: "20",
      viewBox: "0 0 16 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, d.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 0C0.9 0 0.01 0.9 0.01 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6.83C16 6.3 15.79 5.79 15.41 5.42L10.58 0.59C10.21 0.21 9.7 0 9.17 0H2ZM9 6V1.5L14.5 7H10C9.45 7 9 6.55 9 6ZM4 10C3.44772 10 3 10.4477 3 11C3 11.5523 3.44772 12 4 12H12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10H4ZM10 15C10 14.4477 9.55228 14 9 14H4C3.44772 14 3 14.4477 3 15C3 15.5523 3.44772 16 4 16H9C9.55228 16 10 15.5523 10 15Z",
      fill: "var(--attachment-type-documents-color)"
    })),
    text: (0, l.DocumentText)()
  }, d.default.createElement(i.default, {
    ref: f,
    mimes: s.DOC_MIMES,
    onChange: e => {
      e.stopPropagation();
      const t = e.target.files == null ? [] : Array.from(e.target.files);
      n();
      if (!t.length) {
        return;
      }
      const r = t.map(e => ({
        file: e,
        type: u.FILETYPE.DOCUMENT
      }));
      a(r);
    }
  }));
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = a(require("./688988.js"));
var u = require("../app/698210.js");
var s = require("../app/937484.js");
var c = require("./179268.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}