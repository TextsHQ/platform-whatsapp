Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiMessageYourselfSearchAction = exports.UiMessageYourselfNewChatAction = undefined;
var o = require("../app/390934.js");
var r = require("../app/735618.js");
var a = require("./923949.js");
var l = require("./662374.js");
var i = require("./492330.js");
class s {
  constructor(e) {
    this._funnelName = e;
  }
  _commitAction(e) {
    new a.UiMessageYourselfActionWamEvent({
      uiMessageYourselfActionSessionId: this._sessionId,
      uiMessageYourselfActionType: e,
      uiMessageYourselfFunnelName: this._funnelName
    }).commit();
  }
  startSession() {
    this._sessionId = (0, o.randomHex)(16);
  }
  newChatPressed() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_CHAT_PRESSED);
  }
  youSelected() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.YOU_SELECTED);
  }
  searchBarPressed() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_BAR_PRESSED);
  }
  logMessageYourselfOpenedEvent(e, t) {
    if (t) {
      this.searchFullNameYouSelected();
    } else {
      this.youSelected();
    }
    if (e.msgs.length || e.endOfHistoryTransferType === r.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE) {
      this.existingMessageYourselfOpened();
    } else {
      this.newMessageYourselfCreated();
    }
  }
  searchFullNameYouSelected() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.SEARCH_FULL_NAME_YOU_SELECTED);
  }
  newMessageYourselfCreated() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.NEW_NTS_CREATED);
  }
  existingMessageYourselfOpened() {
    this._commitAction(l.UI_MESSAGE_YOURSELF_ACTION_TYPE.EXISTING_NTS_OPENED);
  }
}
const u = new s(i.UI_MESSAGE_YOURSELF_FUNNEL_NAME.NEW_CHAT);
exports.UiMessageYourselfNewChatAction = u;
const d = new s(i.UI_MESSAGE_YOURSELF_FUNNEL_NAME.CONTACT_AND_GLOBAL_SEARCH);
exports.UiMessageYourselfSearchAction = d;