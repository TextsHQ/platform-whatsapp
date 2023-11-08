Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFiles = function (e, t) {
  var n;
  const l = e.target.files || ((n = e.dataTransfer) === null || n === undefined ? undefined : n.files);
  let i = l ? Array.from(l) : [];
  if (t) {
    const e = (typeof t == "string" ? [t] : t).map(e => new RegExp(e));
    i = i.filter(t => e.some(e => t.type.match(e)));
  }
  if (i.length) {
    return Promise.resolve(i);
  }
  const u = e.dataTransfer;
  if (u && u.getData("text/uri-list")) {
    return r.urlToFile(u.getData("text/uri-list")).then(e => [(0, a.createFile)([e], "", {
      type: e.type
    })]);
  }
  if (u && u.getData("text/html")) {
    const e = new DOMParser().parseFromString(u.getData("text/html"), "text/html");
    if (e.createNodeIterator(e.childNodes[0], NodeFilter.SHOW_TEXT).nextNode()) {
      if (u.getData("text/plain")) {
        return Promise.reject(new o.MediaDragDropError("dropped html has text nodes"));
      }
    } else {
      const t = e.getElementsByTagName("img");
      if (t.length) {
        return r.urlToFile(t[0].src).then(e => [(0, a.createFile)([e], "", {
          type: e.type
        })]);
      }
    }
  }
  return Promise.resolve([]);
};
var a = require("../app/698210.js");
var r = i(require("../app/428363.js"));
var o = i(require("../app/288057.js"));
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function i(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, o, i);
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
}