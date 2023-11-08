var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePicThumb = exports.FALLBACK = undefined;
var i = require("./287461.js");
var a = require("./481173.js");
var o = require("./643235.js");
var s = require("./99245.js");
var l = r(require("./180813.js"));
var u = require("./708761.js");
var c = require("./459857.js");
var d = r(require("./124928.js"));
const p = {
  SINGLE: "SINGLE",
  GROUP: "GROUP"
};
exports.FALLBACK = p;
class f extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.tag = (0, a.prop)();
    this.raw = (0, a.prop)();
    this.eurl = (0, a.prop)();
    this.previewEurl = (0, a.prop)();
    this.fullDirectPath = (0, a.prop)();
    this.previewDirectPath = (0, a.prop)();
    this.filehash = (0, a.prop)();
    this.stale = (0, a.session)(true);
    this.eurlStale = (0, a.session)(false);
    this.pendingPic = (0, a.session)();
    this.timestamp = (0, a.session)();
    this.hostRetryCount = (0, a.session)(0);
    this.lastHostUsed = (0, a.session)();
    this.img = (0, a.derived)(function () {
      if (this.raw) {
        return "data:image/jpeg;base64," + this.raw;
      } else if (!this.tag && this.stale) {
        return null;
      } else if (this.tag) {
        if (_() && this.previewDirectPath != null) {
          return this._getMms4DownloadUrl(this.previewDirectPath, this.filehash);
        } else {
          return this.previewEurl;
        }
      } else {
        return undefined;
      }
    }, ["tag", "raw", "stale", "eurl", "eurlStale", "previewEurl", "previewDirectPath", "hostRetryCount"]);
    this.imgFull = (0, a.derived)(function () {
      if (!this.raw && this.tag || !this.stale) {
        if (!this.raw && this.tag) {
          if (_() && this.fullDirectPath != null) {
            return this._getMms4DownloadUrl(this.fullDirectPath, this.filehash);
          } else {
            return this.eurl;
          }
        } else {
          return undefined;
        }
      } else {
        return null;
      }
    }, ["tag", "raw", "stale", "eurl", "eurlStale", "fullDirectPath", "hostRetryCount"]);
    this.fallbackType = (0, a.derived)(function () {
      if (d.default.isUser(this.id)) {
        return p.SINGLE;
      } else {
        d.default.isGroup(this.id);
        return p.GROUP;
      }
    }, ["id"]);
  }
  markStale(e) {
    this.stale = true;
    if ((e == null ? undefined : e.eurl) === true) {
      this.eurlStale = true;
    }
  }
  markMms4HostSuccess() {
    this.hostRetryCount = 0;
  }
  markMms4HostFailure() {
    this.hostRetryCount++;
  }
  validate() {
    if (this.stale || this.eurlStale) {
      return this.getCollection().update(this.id);
    }
  }
  canSet() {
    if (d.default.isGroup(this.id)) {
      var e;
      const t = require("./351053.js").ChatCollection.get(this.id);
      return !(t == null || (e = t.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmRestrictedMember());
    }
    return !!this.id.equals((0, c.getMaybeMeUser)());
  }
  canDelete() {
    if (d.default.isGroup(this.id) && this.tag) {
      var e;
      const t = require("./351053.js").ChatCollection.get(this.id);
      return !(t == null || (e = t.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmRestrictedMember());
    }
    return !(!this.id.equals((0, c.getMaybeMeUser)()) || !this.tag);
  }
  getCollection() {
    return require("./446474.js").ProfilePicThumbCollection;
  }
  _getMms4DownloadUrl(e, t) {
    let n = "pps.whatsapp.net";
    try {
      n = this._getPreferredHostName(e, t).hostname;
    } catch (e) {
      __LOG__(3, undefined, undefined, undefined, ["mms4"])`Failed to resolve mms4 hostname for profile-pic, falling back to static host. Error : ${e}.`;
    }
    return `https://${n}${e}`;
  }
  _getPreferredHostName(e, t) {
    const {
      selectedHost: n,
      fallbackHost: r
    } = o.mediaHosts.getCachedHostsInfo({
      directPath: e,
      encFilehash: t,
      operation: s.OPERATIONS.DOWNLOAD,
      type: u.MEDIA_TYPES.PPIC
    });
    const i = (0, l.default)({
      selectedHost: n,
      fallbackHost: r,
      attemptCount: this.hostRetryCount,
      lastHostUsed: this.lastHostUsed,
      lastFetchMadeProgress: this.hostRetryCount === 0
    });
    this.lastHostUsed = i;
    return i;
  }
}
function _() {
  return (0, i.getABPropConfigValue)("web_enable_profile_pic_thumb_download_over_mms4");
}
f.Proxy = "profilePicThumb";
f.idClass = d.default;
const g = (0, a.defineModel)(f);
exports.ProfilePicThumb = g;