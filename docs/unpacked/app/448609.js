Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisappearingModeTrigger = exports.DisappearingModeInitiator = undefined;
const r = require("../vendor/76672.js")({
  ChangedInChat: "chat",
  InitiatedByMe: "me",
  InitiatedByOther: "other"
});
exports.DisappearingModeInitiator = r;
const i = require("../vendor/76672.js")({
  Unknown: "unknown",
  ChatSettings: "chat_settings",
  AccountSettings: "account_settings",
  BulkChange: "bulk_change"
});
exports.DisappearingModeTrigger = i;