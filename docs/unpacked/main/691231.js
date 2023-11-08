Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WamBridgeApi = undefined;
var a = require("./469151.js");
var r = require("../app/575472.js");
var o = require("../app/198740.js");
const l = {
  addPlaceholderWamActions(e) {
    let {
      msgs: t
    } = e;
    (0, o.addPlaceholderActions)(t);
  },
  viewPlaceholderWamActions(e) {
    let {
      msgRows: t
    } = e;
    (0, o.viewPlaceholderActions)(t);
  },
  populatePlaceholderWamActions(e) {
    let {
      msgs: t
    } = e;
    (0, o.populatePlaceholderActions)(t);
  },
  logOlderRequestKicWam(e) {
    let {
      keepInChatMessage: t
    } = e;
    (0, a.logOlderRequestKic)(t);
  },
  logTieBreakIgnoredKicWam(e) {
    let {
      keepInChatMessage: t
    } = e;
    (0, a.logTieBreakIgnoredKic)(t);
  },
  logOTPMessageReceivedActions(e) {
    let {
      msgData: t
    } = e;
    (0, r.logOTPMessageReceived)(t);
  },
  logOTPMessageReadActions(e) {
    let {
      msgRow: t
    } = e;
    (0, r.logOTPMessageRead)(t);
  }
};
exports.WamBridgeApi = l;