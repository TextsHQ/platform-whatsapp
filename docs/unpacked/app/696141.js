var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    contactsArrayMessage: u
  } = t;
  if (u == null) {
    return;
  }
  const {
    contacts: c,
    contextInfo: d,
    displayName: p
  } = u;
  if ((0, a.isMessageDropValidationEnabled)(r)) {
    if (c == null || c.length === 0) {
      throw new s.MultiVcardMessageValidationError(s.MultiVcardValidationErrorCode.EMPTY_LIST, l.E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
    }
    if (c.length > 257) {
      throw new s.MultiVcardMessageValidationError(s.MultiVcardValidationErrorCode.INVALID_LIST_SIZE, l.E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
    }
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.MULTI_VCARD,
      vcardFormattedName: p,
      vcardList: Array.isArray(c) ? c.map(e => ({
        displayName: e.displayName,
        vcard: e.vcard,
        isMultiVcard: false
      })) : []
    }),
    contextInfo: d
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./177205.js");
var o = require("./373070.js");
var s = require("./377125.js");
var l = require("./751047.js");