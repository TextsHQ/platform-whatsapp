var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreviewIconComponent = function (e) {
  const {
    msg: t
  } = e;
  const n = l(t.type, t.subtype);
  if (n == null) {
    return undefined;
  } else {
    return n.renderPreviewIcon;
  }
};
var r = require("./572695.js");
var o = a(require("./331798.js"));
const l = (0, r.createMsgTypeRegistryLookup)(o.default);