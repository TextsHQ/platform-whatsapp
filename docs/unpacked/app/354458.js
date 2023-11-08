var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bizBotConsentDismissalCooldown = function () {
  return (0, i.getABPropConfigValue)("wabai_consent_cooldown");
};
exports.isBizBot1pEnabled = function () {
  return (0, i.getABPropConfigValue)("wabai_message_rendering_enabled");
};
exports.isBizBot1pFeedbackEnabled = function () {
  return (0, i.getABPropConfigValue)("wabai_message_feedback_enabled");
};
exports.isBizBot3pAvailable = function () {
  return (0, i.getABPropConfigValue)("bot_3p_status") === 2;
};
exports.isBizBot3pEnabled = function () {
  return (0, i.getABPropConfigValue)("bot_3p_status") !== 0;
};
exports.isBizBotConsentRequired = function () {
  return (0, i.getABPropConfigValue)("wabai_consent_required");
};
exports.isBotCarouselEnabled = function () {
  return p() && (0, i.getABPropConfigValue)("bonsai_carousel_enabled");
};
exports.isBotEnabled = d;
exports.isBotIcebreakerUiV2Enabled = function () {
  return false;
};
exports.isBotMsgParseEnabledForFutureproofOrFullRecv = function () {
  return d() || m() || p();
};
exports.isBotPerWordStreamingEnabled = function () {
  return p() && (0, i.getABPropConfigValue)("bonsai_word_streaming_enabled") === true;
};
exports.isBotPttEnabled = function () {
  return d() && (0, i.getABPropConfigValue)("bonsai_ptt_enabled") === true;
};
exports.isBotReceiveEnabled = p;
exports.isBotResponseFutureproofMsgEnabled = m;
exports.isMetaBotCommandsEnabled = function () {
  return d() && (0, i.getABPropConfigValue)("bot_commands_1p_enabled");
};
exports.shouldAnimateAsBotStream = function (e) {
  if (!d()) {
    return false;
  }
  return Boolean((0, l.getIsMetaBotResponse)(e)) || e.subtype === a.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE;
};
var i = require("./287461.js");
var a = require("./169571.js");
var o = r(require("./932325.js"));
var s = require("./94602.js");
var l = require("./787742.js");
var u = require("./60370.js");
var c = require("./819539.js");
function d() {
  return !(0, s.isSMB)() && (!(0, i.getABPropConfigValue)("bonsai_english_only") || o.default.getLanguage() === "en") && (f() ? function () {
    if (!f()) {
      return false;
    }
    if (!g()) {
      return false;
    }
    if (!_()) {
      return false;
    }
    return (0, c.getBotWaitlistState)() === u.HistorySync$BotAIWaitListState.AI_AVAILABLE;
  }() : !f() && _() && g());
}
function p() {
  return (0, i.getABPropConfigValue)("bonsai_receiver_enabled") === true;
}
function f() {
  return (0, i.getABPropConfigValue)("bonsai_waitlist_enabled") === true;
}
function _() {
  return (0, i.getABPropConfigValue)("bonsai_enabled") === true;
}
function g() {
  return (0, i.getABPropConfigValue)("bonsai_entry_point_enabled") === true;
}
function m() {
  return (0, i.getABPropConfigValue)("bot_response_futureproof_message_enabled") === true;
}