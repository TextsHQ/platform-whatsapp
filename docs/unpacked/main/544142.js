var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    title: t,
    headerType: n = i.DRAWER_HEADER_TYPE.SMALL
  } = e;
  const a = (0, r.default)(e, d);
  const f = (0, c.default)();
  return s.default.createElement(o.default, null, s.default.createElement(i.DrawerHeader, {
    title: t,
    type: n,
    onCancel: () => {
      if (!(f == null)) {
        f.requestDismiss();
      }
    }
  }), s.default.createElement(l.default, null, s.default.createElement(u.default, a)));
};
var r = a(require("../vendor/506479.js"));
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = a(require("./876486.js"));
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/321201.js"));
const d = ["title", "headerType"];