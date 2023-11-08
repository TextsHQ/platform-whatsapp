var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePicThumbCollectionImpl = exports.ProfilePicThumbCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./632157.js");
var s = require("./984330.js");
var l = require("./997853.js");
var u = require("./392125.js");
var c = require("./710310.js");
var d = r(require("./97359.js"));
var p = require("./862159.js");
var f = require("./476314.js");
var _ = require("./392332.js");
var g = require("./94872.js");
var m = require("./517660.js");
var h = r(require("./124928.js"));
const y = o.WEEK_MILLISECONDS;
class E extends u.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = e => {
      var t;
      var r;
      var i;
      var a;
      const o = (e.isNewsletter() ? (0, d.default)(require("./358533.js")) : require("./351053.js").ChatCollection).get(e);
      const s = (o == null || (t = o.groupMetadata) === null || t === undefined ? undefined : t.groupType) === p.GroupType.COMMUNITY;
      const l = (0, d.default)(require("./22368.js")).get(e.toString());
      if ((o == null ? undefined : o.isReadOnly) && !s && !(o == null ? undefined : o.isNewsletter) && l == null || (o == null || (r = o.groupMetadata) === null || r === undefined ? undefined : r.terminated) || (o == null || (i = o.newsletterMetadata) === null || i === undefined ? undefined : i.terminated) || (o == null || (a = o.newsletterMetadata) === null || a === undefined ? undefined : a.isPreview)) {
        return Promise.resolve({
          id: e,
          stale: true
        });
      }
      if ((h.default.isUser(e) || h.default.isGroup(e) || h.default.isNewsletter(e)) && !h.default.isPSA(e)) {
        var u;
        let t = s ? e : o == null || (u = o.groupMetadata) === null || u === undefined ? undefined : u.parentGroup;
        if (l != null) {
          t = l.parentGroupId;
        }
        return (0, c.requestProfilePicFromServer)(e, t);
      }
      return Promise.resolve({
        id: e,
        tag: null
      });
    };
  }
  get(e) {
    const t = super.get(e);
    if (this.isProfilePicRefreshNeeded(t == null ? undefined : t.timestamp, t == null ? undefined : t.eurlStale)) {
      if (!(t == null)) {
        t.markStale({
          eurl: true
        });
      }
    }
    this.modelClass.prototype.isIdType(e);
    return t;
  }
  imageChanged(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n.gadd(e);
      if (t === f.PROFILE_PIC_COMMAND.REMOVE) {
        r.set({
          tag: undefined,
          eurl: undefined,
          previewEurl: undefined,
          previewDirectPath: undefined,
          fullDirectPath: undefined,
          filehash: undefined
        });
        yield (0, c.persistProfilePicToDB)(e);
      } else if (!(t !== f.PROFILE_PIC_COMMAND.SET && r.tag === t)) {
        yield n.update(r.id);
      }
    })();
  }
  resyncPictures(e) {
    if (e.length === 0) {
      return Promise.resolve();
    } else {
      return (0, c.profilePicResync)(e.map(function (e) {
        return {
          id: e.id,
          tag: e.tag
        };
      })).then(t => {
        __LOG__(2)`ProfilePicThumbStore:resyncPictures success`;
        t.forEach(t => {
          const n = this.get(t.id);
          if (n) {
            n.set({
              tag: t.tag,
              raw: undefined,
              stale: false,
              eurl: t.eurl,
              eurlStale: false,
              previewEurl: t.previewEurl,
              previewDirectPath: t.previewDirectPath,
              fullDirectPath: t.fullDirectPath,
              filehash: t.filehash,
              timestamp: Date.now()
            });
          }
          e.forEach(e => {
            if (e.eurlStale) {
              this.update(e.id);
            }
          });
          e.forEach(e => {
            e.stale = false;
          });
        });
      }).catch((0, a.filteredCatch)(s.ServerStatusCodeError, e => {
        if (e.status === 423 || e.status === 429) {
          __LOG__(3)`ProfilePicThumbStore:resyncPictures blocked ${e.status}`;
        } else if (e.status >= 400) {
          __LOG__(3)`ProfilePicThumbStore:resyncPictures dropped: ${String(e)}`;
        }
      })).catch(function (e) {
        __LOG__(3)`ProfilePicThumbStore:resyncPictures dropped: ${String(e)}`;
      });
    }
  }
  findThumbnailWid(e) {
    return e.find(e => {
      var t;
      if ((t = this.get(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t.img;
      }
    });
  }
  getThumbnailWidFromVcard(e) {
    if (!e) {
      return null;
    }
    const t = (0, m.vcardWids)(e);
    if (!t) {
      return;
    }
    const n = this.findThumbnailWid(t);
    return n || (t.length ? t[0] : null);
  }
  isProfilePicRefreshNeeded(e) {
    if (e == null || arguments.length > 1 && arguments[1] !== undefined && arguments[1]) {
      return true;
    }
    return Date.now() - e > y;
  }
}
exports.ProfilePicThumbCollectionImpl = E;
E.model = _.ProfilePicThumb;
E.staleCollection = true;
E.cachePolicy = {
  id: g.COLLECTIONS_KEYS.PROFILE_PIC_THUMB_COLLECTION,
  trigger: "change:tag",
  policy: l.CACHE_POLICY.NONE,
  delay: 5000
};
const S = new E();
exports.ProfilePicThumbCollection = S;