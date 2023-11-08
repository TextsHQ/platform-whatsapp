var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContactRecordsById = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./732011.js");
var o = require("./691195.js");
var s = require("./409847.js");
var l = require("./669050.js");
function u() {
  return (u = (0, i.default)(function* () {
    yield (0, a.getStorage)().lock(["contact", "user-prefs"], (0, i.default)(function* () {
      if (s.userPrefsIdb.get("WAContactMigrationIdComplete")) {
        return void __LOG__(2)`mergeContactRecordsById: migration already complete`;
      }
      __LOG__(2)`mergeContactRecordsById: start migration`;
      const e = (yield (0, o.getContactTable)().all()).filter(e => e.id.endsWith("@c.us"));
      yield (0, o.getContactTable)().bulkCreateOrMerge(e.map(e => {
        let {
          id: t,
          pushname: n
        } = e;
        return {
          id: (0, l.createWid)(t).toJid(),
          pushname: n
        };
      }));
      yield (0, o.getContactTable)().bulkRemove(e.map(e => {
        let {
          id: t
        } = e;
        return t;
      }));
      yield s.userPrefsIdb.set("WAContactMigrationIdComplete", true);
      __LOG__(2)`mergeContactRecordsById: end migration`;
    }));
  })).apply(this, arguments);
}