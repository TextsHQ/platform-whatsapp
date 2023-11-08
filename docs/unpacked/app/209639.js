Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STALE_TYPES = exports.PARTICIPANT_OPERATION = exports.GroupUnSyncedError = undefined;
require("./862159.js");
const r = Object.freeze({
  ADD: "add",
  REMOVE: "remove",
  DEMOTE: "demote",
  PROMOTE: "promote",
  LINKED_GROUP_PROMOTE: "linked_group_promote",
  LINKED_GROUP_DEMOTE: "linked_group_demote"
});
exports.PARTICIPANT_OPERATION = r;
const i = Object.freeze({
  DEVICE: "device",
  PARTICIPANT: "participant"
});
exports.STALE_TYPES = i;
class a extends Error {
  constructor() {
    super(...arguments);
    this.name = "GroupUnSyncedError";
  }
}
exports.GroupUnSyncedError = a;