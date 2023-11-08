var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    reporter: t
  } = e;
  return i.default.createElement(i.default.Fragment, null, i.default.createElement(o.default, {
    contextEnabled: () => false,
    image: i.default.createElement(l.DetailImage, {
      id: t.id,
      size: l.DetailImageSize.Small
    }),
    primary: t.contactName,
    idle: true
  }), i.default.createElement(r.default, null));
};
var r = a(require("./579484.js"));
var o = a(require("./991370.js"));
var l = require("../app/23641.js");
var i = a(require("../vendor/667294.js"));