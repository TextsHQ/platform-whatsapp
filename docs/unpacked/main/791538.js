var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUnjoinedGroupsPicsBatched = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/226512.js");
var l = require("../app/446474.js");
function i() {
  return (i = (0, r.default)(function* (e, t, n) {
    if (!e.length) {
      return;
    }
    const a = e.map(e => {
      const t = l.ProfilePicThumbCollection.get(e.toString());
      if (t != null) {
        t.stale = false;
      }
      return {
        groupId: e,
        photoId: t == null ? undefined : t.tag,
        isParentGroup: false
      };
    });
    (yield (0, o.getProfilePics)(a, t, {
      subgroupHintId: n,
      type: o.ProfilePicsTypeEnum.PREVIEW,
      query: o.ProfilePicsQueryEnum.URL
    })).forEach(e => {
      if (e.updatePicture) {
        l.ProfilePicThumbCollection.add({
          id: e.id,
          previewEurl: e.eurl,
          stale: false,
          eurlStale: false,
          tag: e.tag,
          timestamp: Date.now()
        }, {
          merge: true
        });
      }
    });
  })).apply(this, arguments);
}