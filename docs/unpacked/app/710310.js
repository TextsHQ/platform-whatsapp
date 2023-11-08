var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapProfilePictureToProfilePicThumbRowType = T;
exports.persistProfilePicToDB = M;
exports.profilePicFind = b;
exports.profilePicResync = function (e) {
  return Promise.all(e.map(function () {
    var e = (0, a.default)(function* (e) {
      try {
        const t = yield b(e.id);
        return {
          id: e.id,
          eurl: t.eurl,
          tag: t.tag,
          previewEurl: t.previewEurl,
          previewDirectPath: t.previewDirectPath,
          fullDirectPath: t.fullDirectPath,
          filehash: t.filehash,
          stale: false,
          eurlStale: false,
          timestamp: Date.now()
        };
      } catch (t) {
        if (t instanceof l.ServerStatusCodeError) {
          switch (t.status) {
            case 401:
            case 404:
              return {
                tag: "",
                id: e.id,
                stale: false,
                eurlStale: false,
                timestamp: Date.now()
              };
            default:
              __LOG__(3)`ProfilePicThumb:resyncPictures error - ${t.status}, ${t.message}`;
              return {
                id: e.id,
                stale: false,
                eurlStale: false,
                timestamp: Date.now()
              };
          }
        }
        throw t;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }()));
};
exports.requestDeletePicture = function () {
  return S.apply(this, arguments);
};
exports.requestProfilePicFromServer = function () {
  return R.apply(this, arguments);
};
exports.sendSetPicture = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./417405.js");
var s = require("./122583.js");
var l = require("./984330.js");
var u = require("./421324.js");
var c = require("./751632.js");
var d = require("./326651.js");
var p = require("./650572.js");
var f = require("./97858.js");
var _ = require("./476314.js");
var g = r(require("./921733.js"));
var m = r(require("./79291.js"));
var h = require("./459857.js");
var y = require("./673168.js");
var E = require("./669050.js");
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = (0, g.default)(e, null).then(() => ({
      status: 200
    }));
    const r = yield t;
    (0, require("./150501.js").changeProfilePicThumb)(e, _.PROFILE_PIC_COMMAND.REMOVE);
    return r;
  })).apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t, r) {
    const i = m.default.parseDataURL(r).data;
    const s = (0, o.decodeB64)(i);
    const l = (0, g.default)(e, s).then((0, a.default)(function* () {
      const t = yield (0, p.getProfilePic)(e, {
        preview: false
      });
      return {
        tag: t.tag,
        eurl: t.eurl,
        fullDirectPath: t.directPath,
        filehash: t.filehash,
        status: 200
      };
    }));
    const u = yield l;
    (0, require("./150501.js").changeProfilePicThumb)(e, _.PROFILE_PIC_COMMAND.SET);
    return u;
  })).apply(this, arguments);
}
function T(e, t) {
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  return {
    id: e.toString(),
    eurl: (n = t == null ? undefined : t.eurl) !== null && n !== undefined ? n : null,
    previewEurl: (r = t == null ? undefined : t.previewEurl) !== null && r !== undefined ? r : null,
    tag: (i = t == null ? undefined : t.tag) !== null && i !== undefined ? i : null,
    previewDirectPath: (a = t == null ? undefined : t.previewDirectPath) !== null && a !== undefined ? a : null,
    fullDirectPath: (o = t == null ? undefined : t.fullDirectPath) !== null && o !== undefined ? o : null,
    filehash: (s = t == null ? undefined : t.filehash) !== null && s !== undefined ? s : null,
    timestamp: Date.now()
  };
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e, t) {
    const n = T(e, t);
    yield (0, u.persistProfilePicBatched)(n);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e, t) {
    const n = Promise.all([(0, p.getProfilePic)(e, (0, i.default)((0, i.default)({}, t), {}, {
      preview: false
    })), (0, p.getProfilePic)(e, (0, i.default)((0, i.default)({}, t), {}, {
      preview: true
    }))]).then(e => {
      var t;
      const n = e[0];
      const r = e[1];
      const i = {
        eurl: n.eurl,
        tag: n.tag,
        previewEurl: r.eurl,
        previewDirectPath: r.directPath,
        fullDirectPath: n.directPath
      };
      const a = (t = r.filehash) !== null && t !== undefined ? t : n.filehash;
      if (a != null) {
        i.filehash = a;
      }
      return i;
    });
    try {
      const t = yield n;
      M(e, t).catch(e => {
        __LOG__(3)`persistProfilePicToDB failed with error ${e.message}`;
      });
      I(e, t.eurl);
    } catch (t) {
      I(e);
      yield P(e, t);
    }
    return n;
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e, t) {
    if (t instanceof l.ServerStatusCodeError) {
      const n = t.status;
      if (n === 500 || n === 501 || n === 503) {
        __LOG__(3)`profilePicFind failed with serverCode: ${n}`;
      } else if (n === 404) {
        yield M(e);
      } else if (!(n !== 401 || e.isGroup())) {
        yield M(e);
      }
    }
  })).apply(this, arguments);
}
function I(e, t) {
  if ((0, f.screenLockFeatureSupported)() && e.equals((0, h.getMaybeMeUser)())) {
    (0, y.setCachedProfilePicEURL)(t != null ? t : "");
  }
}
function R() {
  return (R = (0, a.default)(function* (e, t) {
    try {
      if (e.isNewsletter()) {
        const t = yield (0, d.fetchNewsletterProfilePic)((0, E.toNewsletterWid)(e));
        M(e, t).catch(e => {
          __LOG__(3)`persistProfilePicToDB failed with error ${e.message}`;
        });
        return t;
      }
      if (t != null) {
        const n = yield (0, c.fetchCommunityProfilePic)(e, t);
        M(e, n).catch(e => {
          __LOG__(3)`persistProfilePicToDB failed with error ${e.message}`;
        });
        return n;
      }
      const n = yield b(e);
      return (0, i.default)((0, i.default)({}, n), {}, {
        id: e,
        timestamp: Date.now(),
        eurlStale: false,
        stale: false
      });
    } catch (t) {
      return (0, s.filteredCatch)(l.ServerStatusCodeError, t => {
        const n = {
          id: e
        };
        switch (t.status) {
          case 401:
          case 404:
            n.tag = "";
            n.timestamp = Date.now();
            n.eurlStale = false;
            n.stale = false;
            break;
          case 423:
          case 429:
            n.stale = true;
            break;
          default:
            n.eurlStale = false;
        }
        return Promise.resolve(n);
      })(t);
    }
  })).apply(this, arguments);
}