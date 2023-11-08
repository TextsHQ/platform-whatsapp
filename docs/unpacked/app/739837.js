Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    encCommentMessage: {
      targetMessageKey: (0, r.encodeKey)(t.targetMessageKey),
      encIv: t.encIv,
      encPayload: t.encPayload
    }
  };
};
var r = require("./974637.js");