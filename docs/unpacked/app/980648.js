var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    message: t,
    json: n,
    mediaMetadata: r,
    contextInfo: l
  } = e;
  let u = (0, i.default)({}, t);
  if (n.headerType === s.Message$ButtonsMessage$HeaderType.IMAGE) {
    const {
      imageMessage: e
    } = (0, o.default)({
      json: n,
      mediaMetadata: r,
      contextInfo: undefined
    });
    u = (0, i.default)((0, i.default)({}, u), {}, {
      imageMessage: e
    });
  }
  u = (0, a.createDynamicReplyButtonsMessage)(u, n, l);
  u.buttonsMessage = (0, i.default)((0, i.default)({}, u.buttonsMessage), {}, {
    buttons: n.nativeFlowButtons
  });
  return u;
};
var i = r(require("../vendor/81109.js"));
var a = require("./878797.js");
var o = r(require("./920697.js"));
var s = require("./533494.js");