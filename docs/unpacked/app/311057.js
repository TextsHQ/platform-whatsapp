Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCurrentWebSessionInsidePwa = l;
exports.setAppBadge = function (e) {
  if (e != null) {
    o = e;
  }
  if ((l == null ? undefined : l()) && "setAppBadge" in navigator) {
    if (o === -1 || o === 0) {
      navigator.clearAppBadge().catch(() => {});
    } else {
      navigator.setAppBadge(o).catch(() => {});
    }
  }
};
exports.setDocumentTitle = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (e != null) {
    a = e;
  }
  s(a);
};
var r = require("./755985.js");
let i;
let a = "";
let o = -1;
function s(e) {
  if (l()) {
    document.title = " ";
  } else {
    self.clearTimeout(i);
    document.title += " ";
    i = self.setTimeout(() => {
      document.title = e;
    }, 0);
  }
}
function l() {
  return "matchMedia" in self && window.matchMedia("(display-mode: standalone)").matches;
}
if (!(0, r.isWorker)()) {
  a = document.title;
}