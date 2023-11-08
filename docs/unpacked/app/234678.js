var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    encCommentMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    encIv: u,
    encPayload: c,
    targetMessageKey: d
  } = r;
  if (u == null) {
    throw new a.CommentMessageValidationError(a.CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_IV, l.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (c == null) {
    throw new a.CommentMessageValidationError(a.CommentMessageValidationErrorCode.MISSING_COMMENT_ENC_PAYLOAD, l.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const p = (0, o.getMsgKey)(d, n);
  if (d == null || p == null) {
    throw new a.CommentMessageValidationError(a.CommentMessageValidationErrorCode.MISSING_COMMENT_MESSAGE_KEY, l.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (u.byteLength !== 12) {
    throw new a.CommentMessageValidationError(a.CommentMessageValidationErrorCode.INVALID_COMMENT_ENC_IV, l.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: s.MSG_TYPE.COMMENT,
      addonEncrypted: true,
      encIv: u,
      encPayload: c,
      targetMessageKey: p
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./83564.js");
var o = require("./974637.js");
var s = require("./373070.js");
var l = require("./751047.js");