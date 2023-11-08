var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setArchive = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./61229.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    yield (0, o.getChatTable)().bulkCreateOrMerge(e);
    const t = e.map(e => ({
      id: (0, s.createWid)(e.id),
      archive: e.archive
    }));
    (0, a.frontendFireAndForget)("chatCollectionUpdate", {
      updates: t
    });
  })).apply(this, arguments);
}