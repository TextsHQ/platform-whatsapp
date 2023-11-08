var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./908081.js"));
var o = a(require("./324093.js"));
var l = require("./626194.js");
var i = require("../app/81644.js");
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = a(require("./401438.js"));
var d = require("../app/517660.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
exports.default = e => {
  const {
    vcard: t
  } = e;
  return p.default.createElement(u.Modal, {
    type: u.ModalTheme.Box
  }, p.default.createElement(r.default, {
    key: "vcard-modal"
  }, p.default.createElement(l.DrawerHeader, {
    title: f.fbt._("View contact", null, {
      hk: "1HFCMZ"
    }),
    type: l.DRAWER_HEADER_TYPE.POPUP,
    onCancel: () => s.ModalManager.close()
  }), p.default.createElement(o.default, null, p.default.createElement(i.HotKeys, null, p.default.createElement(c.default, {
    parsedVcard: t,
    thumbnail: (0, d.vcardThumbnail)(t)
  })))));
};