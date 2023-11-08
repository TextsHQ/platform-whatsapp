var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineNewsletterMessageDeliveryUpdates = d;
exports.getNewsletterMessageDeliveryUpdates = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a.JOB_PRIORITY.LOW;
  return (0, u.createNonPersistedJob)("getNewsletterMessageDeliveryUpdates", (0, i.default)(function* () {
    try {
      const n = yield (0, c.getNewsletterMetadataTable)().get(e);
      if (n == null) {
        return;
      }
      const r = yield (0, o.mexFetchMessageDeliveryUpdates)(e);
      const {
        messageDeliveryUpdates: i = new Map()
      } = n;
      const a = d(r, i);
      if (a == null) {
        return;
      }
      const {
        updatesToAdd: u,
        updatesToRemove: p
      } = a;
      yield (0, l.updateNewsletterMessageDeliveryUpdates)(e, u, p, t);
      return (0, s.getMessageDeliveryUpdatesModelToUpdate)(e, u, p);
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] GET message delivery updates error`;
      throw e;
    }
  }), {
    priority: t
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./212065.js");
var s = require("./202917.js");
var l = require("./787671.js");
var u = require("./899137.js");
var c = require("./876358.js");
function d(e, t) {
  if (e == null) {
    return;
  }
  const n = new Set(e.map(e => e.serverId));
  const r = [];
  if (!(t == null)) {
    t.forEach((e, t) => {
      if (!n.has(t)) {
        r.push(t);
      }
    });
  }
  return {
    updatesToAdd: e.map(e => ({
      id: e.serverId,
      code: e.issueCode
    })),
    updatesToRemove: r
  };
}