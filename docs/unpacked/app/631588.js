var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYNC_LOADING = exports.SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = exports.SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER = exports.SYNCING_PAUSED_POPUP_TITLE = exports.SYNCING_PAUSED_POPUP_DESC = exports.SYNCING_PAUSED_GLOBAL_SETTINGS_TITLE = exports.SYNCING_PAUSED_GLOBAL_SETTINGS_SUBTITLE = exports.SYNCING_PAUSED_CONTEXTUAL_TEXT = exports.SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = exports.SYNCING_ON_DEMAND_ERROR_POPUP_TITLE = exports.SYNCING_ON_DEMAND_ERROR_POPUP_DESC = exports.SYNCING_OLDER_MESSAGES_SETTINGS_TITLE = exports.SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE = exports.SYNCING_OLDER_MESSAGES_MODAL_TITLE = exports.SYNCING_OLDER_MESSAGES_MODAL_TEXT = exports.SYNCING_OLDER_MESSAGES_MODAL_PERCENT = undefined;
var i = r(require("./932325.js"));
var a = require("../vendor/548360.js");
var o = r(require("../vendor/667294.js"));
var s = r(require("./156720.js"));
exports.SYNC_LOADING = () => a.fbt._("Loading your chats", null, {
  hk: "3MKQFN"
});
const l = {
  color: "o0rubyzf"
};
exports.SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER = e => a.fbt._("Syncing older messages. {=m2}", [a.fbt._implicitParam("=m2", o.default.createElement("button", {
  className: (0, s.default)(l),
  onClick: e
}, a.fbt._("See progress.", null, {
  hk: "4CKjfo"
})))], {
  hk: "2cSiNF"
});
exports.SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = () => a.fbt._("Syncing older messages. Click to see progress.", null, {
  hk: "1oO7fI"
});
exports.SYNCING_OLDER_MESSAGES_MODAL_TITLE = () => a.fbt._("Syncing older messages", null, {
  hk: "1vqx6P"
});
exports.SYNCING_OLDER_MESSAGES_MODAL_TEXT = () => a.fbt._("Keep WhatsApp open on your phone while syncing older messages. To see your full chat history, check your phone.", null, {
  hk: "wyKZj"
});
exports.SYNCING_OLDER_MESSAGES_MODAL_PERCENT = e => a.fbt._("{percentage}%", [a.fbt._param("percentage", i.default.n(e))], {
  hk: "3H6Dmy"
});
exports.SYNCING_OLDER_MESSAGES_SETTINGS_TITLE = () => a.fbt._("Syncing older messages", null, {
  hk: "1Xai8l"
});
exports.SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE = e => a.fbt._("{percentage}% complete", [a.fbt._param("percentage", i.default.n(e))], {
  hk: "4atZtF"
});
exports.SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = () => a.fbt._("Syncing paused. Open WhatsApp on your phone to continue syncing.", null, {
  hk: "ggemw"
});
exports.SYNCING_PAUSED_CONTEXTUAL_TEXT = () => a.fbt._("Syncing paused. Open WhatsApp on your phone to continue syncing.", null, {
  hk: "3QYMEE"
});
exports.SYNCING_PAUSED_GLOBAL_SETTINGS_TITLE = () => a.fbt._("Syncing paused", null, {
  hk: "2BDp2y"
});
exports.SYNCING_PAUSED_GLOBAL_SETTINGS_SUBTITLE = () => a.fbt._("Open WhatsApp on your phone", null, {
  hk: "t4E8m"
});
exports.SYNCING_PAUSED_POPUP_TITLE = () => a.fbt._("Syncing paused", null, {
  hk: "4nq42Y"
});
exports.SYNCING_PAUSED_POPUP_DESC = () => a.fbt._("Syncing of older messages has paused. Open WhatsApp on your phone to continue syncing. You can still send and receive messages here.", null, {
  hk: "2pa5qD"
});
exports.SYNCING_ON_DEMAND_ERROR_POPUP_TITLE = () => a.fbt._("Something went wrong", null, {
  hk: "4L3rH"
});
exports.SYNCING_ON_DEMAND_ERROR_POPUP_DESC = () => a.fbt._("Be sure that WhatsApp is open on your phone and try again.", null, {
  hk: "2oBPcO"
});