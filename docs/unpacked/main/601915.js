var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    vcards: t
  } = e;
  return p.default.createElement(u.Modal, {
    type: u.ModalTheme.Box
  }, p.default.createElement(r.default, null, p.default.createElement(l.DrawerHeader, {
    title: f.fbt._({
      "*": "{count} contacts",
      _1: "1 contact"
    }, [f.fbt._plural(t.length, "count")], {
      hk: "13EUBn"
    }),
    type: l.DRAWER_HEADER_TYPE.POPUP,
    onCancel: () => s.ModalManager.close()
  }), p.default.createElement(o.default, null, p.default.createElement(i.HotKeys, null, p.default.createElement("div", {
    className: (0, m.default)(h)
  }, t.map((e, t) => e ? p.default.createElement("div", {
    className: (0, m.default)(g),
    key: t
  }, p.default.createElement(c.default, {
    parsedVcard: e,
    thumbnail: (0, d.vcardThumbnail)(e)
  })) : null))))));
};
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
var m = a(require("../app/156720.js"));
const h = {
  paddingTop: "emrlamx0"
};
const g = {
  position: "g0rxnol2",
  marginBottom: "brac1wpa",
  backgroundColor: "ihvf49ua",
  boxShadow: "tio0brup"
};