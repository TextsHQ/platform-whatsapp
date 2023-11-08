var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arePollsFastFollowsEnabled = c;
exports.arePollsNotificationsEnabled = function () {
  return (0, i.getABPropConfigValue)("polls_notification_enabled");
};
exports.getMaxPollNameLength = function () {
  return Math.min((0, i.getABPropConfigValue)("poll_name_length"), 500);
};
exports.getMaxPollNameLengthForIncomingMessages = function () {
  return 5000;
};
exports.getMaxPollOptionCount = function () {
  return Math.min((0, i.getABPropConfigValue)("poll_option_count"), 20);
};
exports.getMaxPollOptionLength = function () {
  return Math.min((0, i.getABPropConfigValue)("poll_option_length"), 255);
};
exports.getMaxPollOptionLengthForIncomingMessages = function () {
  return 2500;
};
exports.isPollResultDetailsViewEnabled = function () {
  return (0, i.getABPropConfigValue)("poll_result_details_view_enabled");
};
exports.isPollsCancelationPromptEnabled = function () {
  return c();
};
exports.isPollsChatlistPreviewEnabled = function () {
  return c();
};
exports.isPollsCreationEnabledInCags = u;
exports.isPollsReceivingEnabledInCags = function () {
  if (u()) {
    return true;
  }
  return (0, i.getABPropConfigValue)("poll_receiving_cag_enabled");
};
exports.isPrefillPollQuestionEnabled = function () {
  return c();
};
exports.isSingleOptionPollsReceivingEnabled = function (e) {
  return d(e) || (0, i.getABPropConfigValue)("polls_single_option_receiver_control_enabled");
};
exports.isSingleOptionPollsSendingEnabled = d;
var i = require("./287461.js");
var a = require("./94602.js");
var o = require("./73225.js");
var s = require("./233137.js");
var l = r(require("./124928.js"));
function u() {
  return !((0, a.isSMB)() && !(0, i.getABPropConfigValue)("parent_group_view_enabled_for_smb_on_web")) && !!(0, s.primaryFeatureEnabled)("poll_creation_cag") && (0, i.getABPropConfigValue)("poll_creation_cag_enabled");
}
function c() {
  return (0, i.getABPropConfigValue)("polls_fast_follow_enabled");
}
function d(e) {
  if (l.default.isNewsletter(e) === true) {
    return (0, o.isNewsletterPollsSingleOptionEnabled)();
  } else {
    return (0, i.getABPropConfigValue)("polls_single_option_control_enabled") || (0, i.getABPropConfigValue)("polls_single_option_sender_control_enabled");
  }
}