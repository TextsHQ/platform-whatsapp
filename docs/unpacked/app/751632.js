var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCommunityProfilePic = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./226512.js");
function s() {
  return (s = (0, a.default)(function* (e, t, n) {
    var r;
    var a;
    var s;
    var l;
    var u;
    const c = {
      id: e
    };
    const d = {
      groupId: e,
      photoId: n != null ? String(n) : null,
      isParentGroup: e.equals(t)
    };
    const [p, f] = yield Promise.all([(0, o.getProfilePics)([d], t, {
      type: o.ProfilePicsTypeEnum.IMAGE
    }), (0, o.getProfilePics)([d], t, {
      type: o.ProfilePicsTypeEnum.PREVIEW
    })]);
    if (f[0] && f[0].updatePicture && p[0] && p[0].updatePicture) {
      return (0, i.default)((0, i.default)({}, c), {}, {
        eurl: (r = p[0].eurl) !== null && r !== undefined ? r : undefined,
        fullDirectPath: (a = p[0].directPath) !== null && a !== undefined ? a : undefined,
        previewEurl: (s = f[0].eurl) !== null && s !== undefined ? s : undefined,
        previewDirectPath: (l = f[0].directPath) !== null && l !== undefined ? l : undefined,
        tag: (u = p[0].tag) !== null && u !== undefined ? u : undefined,
        timestamp: Date.now(),
        eurlStale: false,
        stale: false
      });
    } else {
      return c;
    }
  })).apply(this, arguments);
}