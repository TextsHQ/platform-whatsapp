var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logChatAssignment = function (e, t, n, r, a) {
  if (!(0, s.chatAssignmentEnabled)()) {
    return;
  }
  let l;
  l = t === "" ? _.CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_UNASSIGNED : n ? _.CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_REASSIGNED : _.CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_ASSIGNED;
  (function (e, t, n) {
    var r;
    var a;
    var s;
    const l = E();
    const u = o.AgentCollection.get(t);
    const c = (0, f.assertGetMe)().getDeviceId();
    const _ = t === (l == null ? undefined : l.id);
    return new d.MdChatAssignmentWamEvent((0, i.default)({
      assignerMdId: c,
      assignerAgentId: (r = l == null ? undefined : l.id) !== null && r !== undefined ? r : "",
      assignerBrowserId: p.default.persistentExpiringId(),
      chatAssignmentAgentId: (a = u == null ? undefined : u.id) !== null && a !== undefined ? a : "",
      chatAssignmentMdId: (s = u == null ? undefined : u.deviceId) !== null && s !== undefined ? s : -1,
      chatAssignmentBrowserId: _ ? p.default.persistentExpiringId() : "",
      chatAssignmentChatType: e.getChatAssignmentChatType()
    }, n));
  })(e, t, {
    chatAssignmentAction: l,
    chatAssignmentEntryPoint: v(r),
    chatsCnt: a
  }).commit();
};
exports.logChatStatusTickerShown = function (e) {
  if (!(0, s.chatAssignmentEnabled)()) {
    return;
  }
  const t = u.ChatCollection.get(e);
  if (t == null) {
    return;
  }
  S(t, {
    mdChatAssignmentSecondaryActionType: h.MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_CHAT_STATUS_TICKER_SHOWN,
    mdChatAssignmentSecondaryActionSource: y.MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE
  }).commit();
};
exports.logNuxShown = function (e) {
  if (!(0, s.chatAssignmentEnabled)()) {
    return;
  }
  S(e, {
    mdChatAssignmentSecondaryActionType: h.MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_TOOLTIP_SHOWN,
    mdChatAssignmentSecondaryActionSource: y.MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE
  }).commit();
};
exports.logSystemMessageFailedToGenerate = function (e) {
  if (!(0, s.chatAssignmentEnabled)()) {
    return;
  }
  S(e, {
    mdChatAssignmentSecondaryActionType: h.MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_SYSTEM_MESSAGE_CREATION_ERROR,
    mdChatAssignmentSecondaryActionSource: y.MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
    mdChatAssignmentSecondaryActionAssignmentType: e.assignedAgent == null ? m.MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED : m.MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED
  }).commit();
};
exports.logSystemMessageGeneratedFromCompanion = function (e) {
  if (!(0, s.chatAssignmentEnabled)()) {
    return;
  }
  S(e, {
    mdChatAssignmentSecondaryActionType: h.MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_SYSTEM_MESSAGE_ADDED_TO_CHAT_HISTORY,
    mdChatAssignmentSecondaryActionSource: y.MD_CHAT_ASSIGNMENT_SOURCE_TYPE.BOOTSTRAP,
    mdChatAssignmentSecondaryActionAssignmentType: e.assignedAgent == null ? m.MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED : m.MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED
  }).commit();
};
var i = r(require("../vendor/81109.js"));
var a = require("./287461.js");
var o = require("./919833.js");
var s = require("./72696.js");
var l = require("./698052.js");
var u = require("./351053.js");
var c = require("./274174.js");
var d = require("./673627.js");
var p = r(require("./524173.js"));
var f = require("./459857.js");
var _ = require("./466993.js");
var g = require("./802783.js");
var m = require("./958926.js");
var h = require("./687110.js");
var y = require("./776345.js");
function E() {
  const e = (0, f.assertGetMe)().getDeviceId();
  return o.AgentCollection.getModelsArray().find(t => t.deviceId === e);
}
function S(e, t) {
  var n;
  var r;
  const o = E();
  if (!(0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_system_messages_logging_v2_enabled")) {
    delete t.mdChatAssignmentSecondaryActionAssignmentType;
  }
  return new c.MdChatAssignmentSecondaryActionWamEvent((0, i.default)({
    mdChatAssignmentSecondaryActionChatType: e == null ? undefined : e.getMdChatAssignmentChatType(),
    mdChatAssignmentSecondaryActionMdId: (n = o == null ? undefined : o.deviceId) !== null && n !== undefined ? n : -1,
    mdChatAssignmentSecondaryActionAgentId: (r = o == null ? undefined : o.id) !== null && r !== undefined ? r : "",
    mdChatAssignmentSecondaryActionBrowserId: p.default.persistentExpiringId()
  }, t));
}
function v(e) {
  switch (e) {
    case l.ChatAssignmentEntryPointType.MULTI_SELECT:
      return g.CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.MULTI_SELECT;
    case l.ChatAssignmentEntryPointType.SYSTEM_MESSAGE:
      return g.CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.SYSTEM_MESSAGE;
    case l.ChatAssignmentEntryPointType.CONVERSATION_MENU:
      return g.CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONVERSATION_OVERFLOW_MENU;
    case l.ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN:
      return g.CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONTACT_INFO_SCREEN;
  }
}