var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaThumbError = function (e) {
  return i.default.createElement("button", {
    tabIndex: -1,
    className: (0, u.default)(s.container),
    onClick: e.onClick
  }, i.default.createElement(c, {
    mediaType: e.mediaType
  }));
};
exports.MediaThumbLoading = function (e) {
  return i.default.createElement("div", {
    className: (0, u.default)(s.container)
  }, i.default.createElement(c, {
    mediaType: e.mediaType
  }));
};
exports.MediaThumbNeedsPoke = function (e) {
  return i.default.createElement("div", {
    className: (0, u.default)(s.container)
  }, i.default.createElement(o.Download, {
    tabIndex: -1,
    onClick: e.onClick
  }));
};
var r = require("./510565.js");
var o = require("./870338.js");
var l = require("./27414.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  container: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    zIndex: "jnl3jror",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  icon: {
    color: "cyi0n1nm"
  }
};
function c(e) {
  if (e.mediaType === "video") {
    return i.default.createElement(l.VideoPlaceholderIcon, {
      xstyle: s.icon
    });
  } else {
    return i.default.createElement(r.ImgPlaceholderIcon, {
      xstyle: s.icon
    });
  }
}