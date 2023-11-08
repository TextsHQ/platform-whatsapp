Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupChatSearch = exports.ContactChatSearch = exports.ChatSearch = undefined;
var a = require("../app/351053.js");
var r = require("./608456.js");
var o = require("./281173.js");
var l = require("./900359.js");
class i extends o.Search {
  constructor() {
    super(...arguments);
    this.id = "ChatSearch";
    this.type = "chat";
  }
  queryFn(e, t) {
    const n = (0, l.normalizeString)(e);
    const o = (0, r.numberSearch)(n);
    const {
      results: i,
      pagination: u
    } = (0, l.filterPaginate)(a.ChatCollection.getModelsArray(), t => !!t.shouldAppearInList && !(this.type === "group" && !t.isGroup) && (this.type !== "1-1" || !t.isGroup) && (e === "" || t.contact.searchMatch(n, o)), t == null ? undefined : t.pagination);
    return {
      type: this.type,
      pagination: u,
      results: i.map(e => ({
        id: e.id.toString(),
        type: this.type,
        data: e
      }))
    };
  }
}
exports.ChatSearch = i;
exports.GroupChatSearch = class extends i {
  constructor() {
    super(...arguments);
    this.id = "GroupSearch";
    this.type = "group";
  }
};
exports.ContactChatSearch = class extends i {
  constructor() {
    super(...arguments);
    this.id = "ContactChatSearch";
    this.type = "1-1";
  }
};