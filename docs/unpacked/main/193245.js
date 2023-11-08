var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = t => {
    var n;
    t.stopPropagation();
    t.preventDefault();
    if (!((n = e.onDismissClicked) === null || n === undefined)) {
      n.call(e);
    }
  };
  const n = u.default.createElement(r.default, {
    testid: "popup-controls-support",
    type: "secondary",
    onClick: t => {
      var n;
      t.stopPropagation();
      t.preventDefault();
      if (!((n = e.onSupportClicked) === null || n === undefined)) {
        n.call(e);
      }
    }
  }, i.fbt._("Support", null, {
    hk: "21xceR"
  }));
  const a = u.default.createElement(r.default, {
    testid: "popup-controls-dismiss",
    type: "primary",
    onClick: t
  }, i.fbt._("Dismiss", null, {
    hk: "OiOSP"
  }));
  const s = u.default.createElement(u.default.Fragment, null, e.showSupportBtn && n, a);
  return u.default.createElement(o.HotKeys, {
    handlers: {
      escape: t
    }
  }, u.default.createElement(l.Modal, {
    actions: s,
    children: e.children,
    title: e.title
  }));
};
var r = a(require("../app/692629.js"));
var o = require("../app/81644.js");
var l = require("../app/118612.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));