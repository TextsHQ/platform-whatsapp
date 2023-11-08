Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = undefined;
exports.getLabel = function (e) {
  switch (e) {
    case r.TOGGLE_UNREAD:
      return a.fbt._("Mark as Unread", null, {
        hk: "16cAJt"
      });
    case r.TOGGLE_MUTE:
      return a.fbt._("Mute", null, {
        hk: "iQFad"
      });
    case r.TOGGLE_ARCHIVE:
      return a.fbt._("Archive Chat", null, {
        hk: "2jhTGG"
      });
    case r.DELETE_OR_EXIT_CHAT:
      return a.fbt._("Delete Chat", null, {
        hk: "36GBPf"
      });
    case r.TOGGLE_PIN:
      return a.fbt._("Pin Chat", null, {
        hk: "3l6ovX"
      });
    case r.SEARCH:
      return a.fbt._("Search", null, {
        hk: "3CChip"
      });
    case r.SEARCH_IN_CHAT:
      return a.fbt._("Search Chat", null, {
        hk: "eUGKg"
      });
    case r.OPEN_NEW_CHAT:
      return a.fbt._("New Chat", null, {
        hk: "3eK2Xn"
      });
    case r.GO_TO_NEXT_CHAT:
      return a.fbt._("Next Chat", null, {
        hk: "9CYM9"
      });
    case r.GO_TO_PREV_CHAT:
      return a.fbt._("Previous Chat", null, {
        hk: "4c01Vh"
      });
    case r.CLOSE_CHAT:
      return a.fbt._("Close Chat", null, {
        hk: "4pF7QC"
      });
    case r.OPEN_NEW_GROUP:
      return a.fbt._("New Group", null, {
        hk: "3GXdU5"
      });
    case r.OPEN_PROFILE:
      return a.fbt._("Profile and About", null, {
        hk: "1EEiLO"
      });
    case r.INCREASE_PTT_SPEED:
      return a.fbt._("Increase Speed of Selected Voice Message", null, {
        hk: "YQPbc"
      });
    case r.DECREASE_PTT_SPEED:
      return a.fbt._("Decrease Speed of Selected Voice Message", null, {
        hk: "uHTZ8"
      });
    case r.OPEN_SETTINGS:
      return a.fbt._("Settings", null, {
        hk: "csrEJ"
      });
    case r.OPEN_EMOJI_PANEL:
      return a.fbt._("Emoji Panel", null, {
        hk: "2sDpHl"
      });
    case r.OPEN_GIF_PANEL:
      return a.fbt._("Gif Panel", null, {
        hk: "28HQaF"
      });
    case r.OPEN_STICKER_PANEL:
      return a.fbt._("Sticker Panel", null, {
        hk: "4y6bgb"
      });
    case r.LOCK_SCREEN:
      return a.fbt._("Lock Screen", null, {
        hk: "3aaImO"
      });
    case r.TOGGLE_COMMAND_PALETTE:
      return a.fbt._("Extended Search", null, {
        hk: "14n1j0"
      });
    default:
      return "";
  }
};
var a = require("../vendor/548360.js");
const r = require("../vendor/76672.js").Mirrored(["CONTACT_US", "LICENSES", "DECREASE_PTT_SPEED", "DELETE_OR_EXIT_CHAT", "GO_TO_NEXT_CHAT", "GO_TO_PREV_CHAT", "INCREASE_PTT_SPEED", "LOGOUT", "OPEN_NEW_CHAT", "OPEN_NEW_GROUP", "OPEN_PROFILE", "OPEN_SETTINGS", "CLOSE_CHAT", "SEARCH", "SEARCH_IN_CHAT", "TOGGLE_ARCHIVE", "TOGGLE_MUTE", "TOGGLE_PIN", "TOGGLE_UNREAD", "ZOOM_IN", "ZOOM_OUT", "ZOOM_RESET", "OPEN_EMOJI_PANEL", "OPEN_GIF_PANEL", "OPEN_STICKER_PANEL", "TOGGLE_STICKER_MAKER", "TOGGLE_COMMAND_PALETTE", "LOCK_SCREEN"]);
exports.Action = r;