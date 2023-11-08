var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    messageProtobuf: n,
    baseMessage: r
  } = e;
  const {
    highlyStructuredMessage: s
  } = n;
  if (s == null) {
    return;
  }
  const l = (t = s.hydratedHsm) === null || t === undefined ? undefined : t.hydratedTemplate;
  return {
    msgData: (0, i.default)((0, i.default)({}, r), {}, {
      type: o.MSG_TYPE.HSM,
      body: l ? (0, a.convertToTextWithoutSpecialEmojis)(l.hydratedContentText) : r.body
    }),
    contextInfo: undefined
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");