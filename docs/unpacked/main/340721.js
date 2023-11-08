var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = t => {
    var n;
    t.stopPropagation();
    t.preventDefault();
    if (!((n = e.onLearnMoreClicked) === null || n === undefined)) {
      n.call(e);
    }
  };
  const n = s.default.createElement(r.default, {
    testid: "popup-controls-learn-more",
    type: "secondary",
    onClick: t
  }, u.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }));
  const a = s.default.createElement(r.default, {
    testid: "popup-controls-ok",
    type: "primary",
    onClick: t => {
      var n;
      t.stopPropagation();
      t.preventDefault();
      if (!((n = e.onOkClicked) === null || n === undefined)) {
        n.call(e);
      }
    }
  }, (0, o.default)("OK"));
  const c = {
    escape: e.onLearnMoreClicked ? t : () => {}
  };
  const d = s.default.createElement(s.default.Fragment, null, n, a);
  return s.default.createElement(l.HotKeys, {
    handlers: c
  }, s.default.createElement(i.Modal, {
    actions: d,
    children: e.children,
    title: e.title
  }));
};
var r = a(require("../app/692629.js"));
var o = a(require("../app/395767.js"));
var l = require("../app/81644.js");
var i = require("../app/118612.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));