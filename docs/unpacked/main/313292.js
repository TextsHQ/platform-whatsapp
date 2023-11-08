var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const n = (t = e.product.getPreviewImage()) === null || t === undefined ? undefined : t.mediaData;
  if (!n) {
    return null;
  }
  return u.default.createElement(c, (0, r.default)({
    mediaData: n
  }, e));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("./774838.js"));
var l = require("../app/172259.js");
var i = a(require("./698690.js"));
var u = a(require("../vendor/667294.js"));
var s = require("../app/655241.js");
const c = function (e) {
  const {
    product: t,
    selections: n,
    active: a,
    onClick: r
  } = e;
  const c = (0, s.useModelValues)(e.mediaData, ["mediaStage"]).mediaStage !== l.MEDIA_DATA_STAGE.RESOLVED;
  const d = c ? () => {} : r;
  return u.default.createElement(o.default, {
    key: t.id.toString(),
    model: t,
    selections: n,
    disabled: c
  }, u.default.createElement(i.default, {
    product: t,
    onClick: d,
    active: a,
    checkbox: true,
    disableOutOfStockAppearance: true,
    isMuted: c
  }));
};