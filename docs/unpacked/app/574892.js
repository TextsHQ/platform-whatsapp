Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextStatusObjectForGetRequest = function (e) {
  var t;
  return {
    jid: e.id.toJid(),
    last_update_time: (t = e.textStatusLastUpdateTime) === null || t === undefined ? undefined : t.toString()
  };
};
exports.createTextStatusObjectForUpdateRequest = function (e) {
  let t = e.textStatusString;
  if (e.textStatusString === "") {
    t = null;
  }
  let n;
  let i = e.textStatusEphemeralDuration;
  if (i == null) {
    i = r.TEXT_STATUS_DURATION_UNSET;
  }
  if (t == null && e.textStatusEmoji == null && i !== r.TEXT_STATUS_DURATION_UNSET) {
    i = r.TEXT_STATUS_DURATION_UNSET;
  }
  if (e.textStatusEmoji != null) {
    n = {
      content: e.textStatusEmoji
    };
  }
  return {
    text: t,
    emoji: n,
    ephemeral_duration_sec: i
  };
};
exports.parseTextStatusServerResponse = function (e) {
  var t;
  return {
    id: (0, i.createWid)(e.jid),
    textStatusString: e.text,
    textStatusEmoji: (t = e.emoji) === null || t === undefined ? undefined : t.content,
    textStatusEphemeralDuration: e.ephemeral_duration_sec,
    textStatusLastUpdateTime: e.last_update_time != null ? Number(e.last_update_time) : undefined
  };
};
var r = require("./596328.js");
var i = require("./669050.js");