var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNewsletterMetadata = function (e) {
  return (0, c.createNonPersistedJob)("deleteNewsletterMetadata", () => (0, d.getNewsletterMetadataTable)().remove(e), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.deleteNewsletterPicture = function (e) {
  return (0, c.createNonPersistedJob)("deleteNewsletterPicture", () => (0, p.getProfilePicThumbTable)().remove(e), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.editNewsletterMetadata = function (e, t, n) {
  return (0, c.createNonPersistedJob)("editNewsletterMetadata", () => {
    const {
      picture: r
    } = n;
    const i = (0, l.encodePicture)(r);
    return (0, u.editNewsletterMetadataQuery)(e, t, (0, o.default)((0, o.default)({}, n), {}, {
      picture: i
    }));
  }, {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.geosuspendNewsletter = function (e) {
  return (0, c.createNonPersistedJob)("geosuspendNewsletter", () => (0, d.getNewsletterMetadataTable)().merge(e, {
    id: e,
    suspended: true,
    geosuspended: true
  }), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.getAllNewslettersMetadata = function () {
  return (0, c.createNonPersistedJob)("getAllNewslettersMetadata", () => (0, u.queryAllNewslettersMetadata)(), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.getNewsletterMetadata = function (e, t, n) {
  return (0, c.createNonPersistedJob)("getNewsletterMetadata", () => (0, u.queryNewsletterMetadataByJid)(e, t, n), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.suspendNewsletter = function (e) {
  return (0, c.createNonPersistedJob)("suspendNewsletter", () => (0, d.getNewsletterMetadataTable)().merge(e, {
    id: e,
    suspended: true
  }), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.updateNewsletterMessageDeliveryUpdates = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : s.JOB_PRIORITY.LOW;
  return (0, c.createNonPersistedJob)("updateNewsletterMessageDeliveryUpdates", (0, a.default)(function* () {
    const r = yield (0, d.getNewsletterMetadataTable)().get(e);
    if (r == null) {
      return Promise.resolve();
    }
    const {
      messageDeliveryUpdates: a = new Map()
    } = r;
    n.forEach(e => {
      if (!(a == null)) {
        a.delete(e);
      }
    });
    t.forEach(e => {
      const {
        id: t
      } = e;
      const n = (0, i.default)(e, f);
      if (!(a == null)) {
        a.set(t, n);
      }
    });
    r.messageDeliveryUpdates = a;
    return (0, d.getNewsletterMetadataTable)().merge(e, r);
  }), {
    priority: r
  }).waitUntilCompleted();
};
exports.updateNewsletterMetadata = function (e) {
  return (0, c.createNonPersistedJob)("updateNewsletterMetadata", () => Array.isArray(e) ? (0, d.getNewsletterMetadataTable)().bulkCreateOrMerge(e) : (0, d.getNewsletterMetadataTable)().createOrMerge(e.id, e), {
    priority: s.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/81109.js"));
var s = require("./775593.js");
var l = require("./800413.js");
var u = require("./657987.js");
var c = require("./899137.js");
var d = require("./876358.js");
var p = require("./829884.js");
const f = ["id"];