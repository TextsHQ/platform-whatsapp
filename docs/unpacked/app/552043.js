var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNewsletterMetadataAndPic = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./710310.js");
var s = require("./421324.js");
var l = require("./787671.js");
var u = require("./718561.js");
var c = require("./669050.js");
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    yield (0, l.updateNewsletterMetadata)((0, u.createNewsletterMetadataObjectForStorage)(t));
    if (n.hasOwnProperty("eurl")) {
      var r;
      var i;
      var d;
      var p;
      const e = (0, c.createWid)(n.id.toString());
      yield (0, s.bulkPersistProfilePicChanges)([(0, o.mapProfilePictureToProfilePicThumbRowType)(e, {
        id: e,
        tag: (r = n.tag) !== null && r !== undefined ? r : undefined,
        eurl: (i = n.eurl) !== null && i !== undefined ? i : undefined,
        previewEurl: (d = n.previewEurl) !== null && d !== undefined ? d : undefined,
        stale: n.stale,
        eurlStale: false,
        timestamp: (p = n.timestamp) !== null && p !== undefined ? p : Date.now()
      })]);
    }
    yield (0, a.frontendSendAndReceive)("updateNewsletterMetadata", {
      metadata: t,
      newsletter: e,
      pic: n
    });
  })).apply(this, arguments);
}