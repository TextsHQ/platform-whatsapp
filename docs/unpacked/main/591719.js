var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.classnamesConvertMeToStylexPlease)("overlay", u.default.mediaViewer);
  const n = f.default.createElement(d.XViewerIcon, null);
  const a = () => c.ModalManager.closeMedia();
  return f.default.createElement("div", null, f.default.createElement("div", {
    className: t,
    "data-animate-media-viewer": true
  }, f.default.createElement("div", {
    className: i.default.mediaPanelHeader
  }, f.default.createElement("div", {
    className: i.default.info
  }), f.default.createElement("div", {
    className: i.default.mediaPanelTools
  }, f.default.createElement(s.MenuBar, {
    key: "media-panel-header",
    theme: "strong"
  }, f.default.createElement(s.MenuBarItem, {
    testid: "btn-close",
    icon: n,
    title: (0, o.default)("Close"),
    onClick: a
  })))), f.default.createElement("div", {
    className: u.default.mediaContent,
    dir: "ltr",
    onClick: a
  }, f.default.createElement("div", {
    className: u.default.media
  }, f.default.createElement(l.default, {
    error: e.error
  })))));
};
var r = require("../app/396574.js");
var o = a(require("../app/395767.js"));
var l = a(require("./876486.js"));
var i = a(require("./423359.js"));
var u = a(require("./192639.js"));
var s = require("./526795.js");
var c = require("../app/114850.js");
var d = require("./776770.js");
var f = a(require("../vendor/667294.js"));