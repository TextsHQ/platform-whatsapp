var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageEditAddOnProvider = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./52045.js");
var o = require("./803328.js");
var s = require("./483460.js");
var l = require("./591988.js");
var u = require("./373070.js");
const c = {
  type: o.MessageAddOnType.MessageEdit,
  matches: e => e.type === u.MSG_TYPE.PROTOCOL && e.subtype === "message_edit",
  matchesFutureproof: e => e.type === u.MSG_TYPE.UNKNOWN && e.futureproofType === u.MSG_TYPE.PROTOCOL && e.futureproofSubtype === "message_edit",
  canRenderInUi(e) {
    const t = e.editMsgType ? (0, l.getMsgEditType)(e.editMsgType) : l.MsgEditType.TextEdit;
    if (!t) {
      return false;
    }
    switch (t) {
      case l.MsgEditType.TextEdit:
        return (0, s.receiveTextEditEnabled)();
      case l.MsgEditType.CaptionEdit:
        return (0, s.receiveCaptionEditEnabled)();
    }
  },
  processOrphansForNewMsg: (e, t, n) => (0, i.default)(function* () {
    var t;
    const r = (t = (yield (0, a.processEditProtocolMsgs)(n.map(e => e.parsedMsgPayload))).find(t => t.parentMsg.id.equals(e.id))) === null || t === undefined ? undefined : t.editedMsgData;
    if (r) {
      Object.assign(e, r);
    }
  })()
};
exports.messageEditAddOnProvider = c;