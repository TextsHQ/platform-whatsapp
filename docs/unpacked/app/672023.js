var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    messageProtobuf: r,
    baseMessage: f,
    msgContext: _
  } = e;
  const {
    pollCreationMessage: g,
    pollCreationMessageV2: m,
    pollCreationMessageV3: h
  } = r;
  const y = (t = g != null ? g : m) !== null && t !== undefined ? t : h;
  const E = !p.default.isNewsletter(f.from);
  if (y == null) {
    return null;
  }
  if (y === m && !(0, s.isPollsReceivingEnabledInCags)()) {
    return null;
  }
  if (y === h && !(0, s.isSingleOptionPollsReceivingEnabled)()) {
    return null;
  }
  const {
    name: S,
    options: v,
    selectableOptionsCount: T,
    contextInfo: M
  } = y;
  if (S == null) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.MISSING_NAME, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (S.length === 0 || S.length > (0, s.getMaxPollNameLengthForIncomingMessages)()) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.INVALID_NAME, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (_ === "quoted" || _ === "history_quoted") {
    return {
      msgData: (0, i.default)((0, i.default)({}, f), {}, {
        type: o.MSG_TYPE.POLL_CREATION,
        pollName: S,
        pollOptions: null,
        pollSelectableOptionsCount: null
      }),
      contextInfo: M
    };
  }
  const A = (n = r.messageContextInfo) === null || n === undefined ? undefined : n.messageSecret;
  if (E && A == null) {
    new a.MessageSecretErrorsWamEvent({
      messageSecretAllowedList: c.MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
      messageSecretError: d.MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET
    }).commit();
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.MISSING_MESSAGE_SECRET, u.E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
  }
  if (E && (A == null ? undefined : A.byteLength) !== 32) {
    new a.MessageSecretErrorsWamEvent({
      messageSecretAllowedList: c.MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
      messageSecretError: d.MESSAGE_SECRET_ERROR_TYPE.WRONG_LENGTH
    }).commit();
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.INVALID_MESSAGE_SECRET, u.E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID);
  }
  if (v == null) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.MISSING_OPTIONS, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (T == null) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.MISSING_SELECTABLE_OPTIONS_COUNT, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const b = new Set();
  const C = v.map(e => {
    let {
      optionName: t
    } = e;
    if (t == null || t.length === 0 || t.length > (0, s.getMaxPollOptionLengthForIncomingMessages)()) {
      throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.INVALID_OPTION, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    if (b.has(t)) {
      __LOG__(3, undefined, undefined, true, ["polls"])`PollCreationValidationWarning: ${l.PollCreationValidationWarningCode.DUPLICATE_OPTIONS}`;
      SEND_LOGS(l.PollCreationValidationWarningCode.DUPLICATE_OPTIONS, 1, "polls");
      return null;
    }
    const n = b.size;
    b.add(t);
    return {
      name: t,
      localId: n
    };
  }).filter(Boolean);
  if (C.length < 2 || C.length > (0, s.getMaxPollOptionCount)()) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.INVALID_OPTIONS_COUNT, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (T < 0 || T > C.length) {
    throw new l.PollCreationValidationError(l.PollCreationValidationErrorCode.INVALID_SELECTABLE_OPTIONS_COUNT, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, f), {}, {
      type: o.MSG_TYPE.POLL_CREATION,
      pollName: S,
      pollOptions: C,
      pollSelectableOptionsCount: T
    }),
    contextInfo: M
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./201650.js");
var o = require("./373070.js");
var s = require("./671598.js");
var l = require("./918504.js");
var u = require("./751047.js");
var c = require("./408959.js");
var d = require("./107443.js");
var p = r(require("./124928.js"));