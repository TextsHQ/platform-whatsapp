Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderType = exports.MessageOverwriteOption = exports.MESSAGE_TYPE = exports.HostStorageEnumType = exports.E2EProcessResult = exports.ActualActorsEnumType = undefined;
const r = require("../vendor/76672.js")({
  Self: 1,
  Bsp: 2
});
exports.ActualActorsEnumType = r;
const i = require("../vendor/76672.js")({
  OnPremise: 1,
  Facebook: 2
});
exports.HostStorageEnumType = i;
const a = require("../vendor/76672.js").Mirrored(["SUCCESS", "RETRY", "HSM_MISMATCH", "BACKFILL", "PARSE_ERROR", "PARSE_VALIDATION_ERROR", "SIGNAL_OLD_COUNTER_ERROR"]);
exports.E2EProcessResult = a;
const o = require("../vendor/76672.js").Mirrored(["E2E", "FANOUT", "BOT_UNAVAILABLE_FANOUT"]);
exports.PlaceholderType = o;
const s = require("../vendor/76672.js")({
  NO_OVERWRITE: 0,
  RETRY: 1,
  FUTURE_PROOF: 2,
  PEER_RETRY: 3
});
exports.MessageOverwriteOption = s;
const l = Object.freeze({
  CHAT: "chat",
  GROUP: "group",
  PEER_BROADCAST: "peer_broadcast",
  OTHER_BROADCAST: "other_broadcast",
  DIRECT_PEER_STATUS: "direct_peer_status",
  OTHER_STATUS: "other_status"
});
exports.MESSAGE_TYPE = l;