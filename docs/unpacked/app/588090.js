var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrReplaceDisplayNamesAndLidPnMappings = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./987189.js");
var o = require("./669050.js");
function s() {
  return (s = (0, i.default)(function* (e, t) {
    const n = [];
    const r = [];
    for (const t of e) {
      if (t == null) {
        continue;
      }
      const {
        id: e,
        displayName: i
      } = t;
      let {
        lid: a,
        phoneNumber: s
      } = t;
      if (e.isLid()) {
        a = e;
      } else {
        s = e;
      }
      if (a != null) {
        a = (0, o.toUserWid)(a);
        if (i != null) {
          n.push({
            lid: a,
            data: {
              displayNameLID: i
            }
          });
        }
        if (s != null) {
          r.push({
            lid: a,
            pn: (0, o.toUserWid)(s)
          });
        }
      }
    }
    yield Promise.all([n.length > 0 ? (0, a.updateLidMetadata)({
      updates: n
    }) : null, r.length > 0 ? (0, a.createLidPnMappings)({
      mappings: r,
      flushImmediately: t
    }) : null].filter(Boolean));
  })).apply(this, arguments);
}