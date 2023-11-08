var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  const r = t.interactivePayload;
  const {
    type: s
  } = r;
  const l = (0, i.default)(r, o);
  const u = (0, a.getInteractiveResponseMessageFieldNameForType)(s);
  return {
    interactiveResponseMessage: {
      body: {
        text: t.body
      },
      [u]: l,
      contextInfo: n
    }
  };
};
var i = r(require("../vendor/506479.js"));
var a = require("./974637.js");
const o = ["type"];