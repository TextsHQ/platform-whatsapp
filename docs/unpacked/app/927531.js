Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterState = exports.NewsletterReactionCodesSetting = exports.NewsletterPrivacy = exports.NewsletterMembershipType = exports.NewsletterInboxFilterTypes = exports.AlertEntryPoint = undefined;
const r = require("../vendor/76672.js")({
  Subscriber: "subscriber",
  Admin: "admin",
  Guest: "guest",
  Owner: "owner"
});
exports.NewsletterMembershipType = r;
const i = require("../vendor/76672.js")({
  Public: "public",
  Private: "private"
});
exports.NewsletterPrivacy = i;
const a = require("../vendor/76672.js")({
  Active: "active",
  Suspended: "suspended",
  GeoSuspended: "geosuspended"
});
exports.NewsletterState = a;
const o = require("../vendor/76672.js")({
  All: 0,
  Basic: 1,
  Blocklist: 2,
  None: 3
});
exports.NewsletterReactionCodesSetting = o;
const s = require("../vendor/76672.js").Mirrored(["ALERT_BANNER", "INFO_DRAWER"]);
exports.AlertEntryPoint = s;
const l = require("../vendor/76672.js").Mirrored(["All", "Unread", "MyChannels"]);
exports.NewsletterInboxFilterTypes = l;