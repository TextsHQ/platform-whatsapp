var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    statusV3: t,
    msgKey: n,
    onMsgNotFound: a,
    onClose: l,
    rowSection: i,
    rowIndex: u
  } = e;
  return o.default.createElement(r.default, {
    initialStatusV3: t,
    quotedMsgKey: n,
    closeStatusViewer: l,
    onMsgNotFound: a,
    rowSection: i,
    rowIdx: u
  });
};
var r = a(require("./564479.js"));
var o = a(require("../vendor/667294.js"));