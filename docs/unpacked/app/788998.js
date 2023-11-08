var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./952543.js");
var o = require("./392125.js");
var s = require("./698210.js");
var l = r(require("./932325.js"));
var u = r(require("./409701.js"));
var c = require("./75421.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var p = require("./962260.js");
var f = require("./937001.js");
var _ = r(require("./237889.js"));
var g = require("./456277.js");
var m = require("../vendor/548360.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  IMAGE: y,
  VIDEO: E,
  DOCUMENT: S,
  AUDIO: v
} = s.FILETYPE;
const {
  READY: T,
  ERROR: M,
  PROCESSING: A
} = a.ATTACH_MEDIA_STATE;
let b = 1;
class C extends o.BaseCollection {
  constructor(e) {
    let {
      chatParticipantCount: t
    } = e;
    super();
    this.errorMsgs = null;
    this.ignored = 0;
    this.mediaPickerStatsLogger = new g.MediaPickerStatsLogger();
    this.selection = new _.default([], e => e.id, "prev");
    this.isStickerMaker = false;
    this.mediaPickerStatsLogger.chatRecipients = t;
    this.listenTo(this.selection, "all", this._handleSelectionEvents.bind(this));
  }
  _handleSelectionEvents(e, t) {
    if (!(t !== "focus" && t !== false)) {
      this.trigger("active-change");
    }
  }
  removeSingleton(e, t) {
    var n;
    if (e) {
      if (!t) {
        this.mediaPickerStatsLogger.logDelete(e.id);
      }
      if (e.url) {
        window.URL.revokeObjectURL(e.url);
      }
      if ((n = e.original) === null || n === undefined ? undefined : n.url) {
        window.URL.revokeObjectURL(e.original.url);
      }
    }
  }
  remove(e, t) {
    const n = super.remove(e, t);
    n.forEach(e => this.removeSingleton(e, t));
    this.selection.init(this.getPreviewableMedias(), true);
    return n;
  }
  delete() {
    super.delete();
    this.forEach(e => this.removeSingleton(e));
    this.selection.init(this.getPreviewableMedias(), true);
  }
  reorder(e, t) {
    this.reorderMutate(e, t);
    this.selection.init(this.getPreviewableMedias(), true);
    return this.getPreviewableMedias();
  }
  replace(e, t) {
    const n = this.get(e);
    if (!n) {
      return;
    }
    const {
      quality: r,
      supportedTypes: i
    } = n;
    const o = this.indexOf(n);
    const s = n.caption;
    this.remove(n, {
      silent: true
    });
    n.delete();
    const l = new a.AttachMedia({
      id: e,
      caption: s,
      file: this._normalizeAttachment(t),
      quality: r,
      supportedTypes: i
    });
    this.add(l, o ? {
      at: o
    } : {});
    return l.processPromise;
  }
  getValidMedias() {
    return this.filter(e => e.state === T || e.state === A);
  }
  getPreviewableMedias() {
    return this.filter(e => e.previewable);
  }
  getActive() {
    return this.selection.getVal();
  }
  setActive(e) {
    this.selection.setVal(e);
  }
  unsetActive() {
    this.selection.unset();
  }
  setNextAsActive() {
    const e = this.selection.list.length - 1;
    if (!(this.selection.index === -1 || this.selection.index === e)) {
      this.selection.setNext();
    }
    return this.selection.getVal();
  }
  setPrevAsActive() {
    if (!(this.selection.index === -1 || this.selection.index === 0)) {
      this.selection.setPrev();
    }
    return this.selection.getVal();
  }
  processAttachments(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      const i = r.getPreviewableMedias().length;
      const o = (0, c.getMaxNumberSelectableMedia)(e.length + i, n.id);
      const s = e.length + i > o ? Math.max(o - i, 0) : e.length;
      const l = e.length - s;
      if (s === 0) {
        if (l) {
          r.trigger("max_upload_limit", l);
        }
      } else {
        r.ignore(l);
      }
      const u = e.slice(0, s).map(e => new a.AttachMedia({
        id: b++,
        file: r._normalizeAttachment(e),
        fileOrigin: t,
        supportedTypes: (0, c.getSupportedMediaTypesForChat)(n)
      }));
      r.add(u);
      const d = r.getActive();
      r.unsetActive();
      Promise.all(e).then(() => {
        r._attemptToSetNextActiveFromAdded(u, d);
      });
      yield Promise.all(u.map(e => e.processPromise));
      u.forEach(e => r._logMediaAdd(e, t));
      return r._attemptToSetNextActiveFromAdded(u, d);
    })();
  }
  _attemptToSetNextActiveFromAdded(e, t) {
    if (this.getActive()) {
      return;
    }
    if (this.getModelsArray().some(e => e.state === A && !e.previewable)) {
      return;
    }
    let n = e.find(e => e.previewable);
    if (!n) {
      n = t;
    }
    this.selection.init(this.getPreviewableMedias());
    if (n) {
      this.setActive(n);
    }
  }
  _logMediaAdd(e, t) {
    if (t == null) {
      return;
    }
    const n = e.isGif ? "gif" : e.type;
    this.mediaPickerStatsLogger.logAdd(e.id, n, t);
  }
  _normalizeAttachment(e) {
    return (0, i.default)(function* () {
      const t = yield Promise.resolve(e);
      if (!t.filename) {
        t.filename = t.file.name;
      }
      if (!t.mimetype) {
        t.mimetype = t.file.type;
      }
      if (!t.type) {
        t.type = (0, s.typeFromMimetype)(t.file.type);
      }
      if (!t.type && t.mimetype) {
        t.type = (0, s.typeFromMimetype)(t.mimetype);
      }
      return t;
    })();
  }
  ignore(e) {
    if (e > 0) {
      this.ignored += e;
    }
  }
  uiProcessMsgs(e) {
    let t;
    let n = [];
    let r = 0;
    let i = 0;
    let a = 0;
    let o = 0;
    let s = 0;
    let _ = 0;
    let g = 0;
    let h = 0;
    let T = 0;
    let b = 0;
    let C = 0;
    let P = false;
    const O = l.default.filesize((0, f.getMaxFilesSizeServerProp)());
    const I = l.default.filesize(p.VCARD_MAX_SIZE_KB * 1024);
    this.forEach(e => {
      if (!e.uiProcessed && (!t && e.previewable && (t = e), e.state !== A && (e.uiProcessed = true, e.state === M))) {
        if (e.exception instanceof u.default) {
          switch (e.getFileType()) {
            case y:
              r += 1;
              break;
            case E:
              i += 1;
              break;
            case v:
              a += 1;
              break;
            case S:
              if (e.isVcardOverMmsDocument) {
                s += e.documentPageCount;
              } else {
                o += 1;
              }
          }
        } else if (e.exception instanceof d.MediaFileEmpty) {
          switch (e.getFileType()) {
            case y:
              _ += 1;
              break;
            case E:
              g += 1;
              break;
            case v:
              h += 1;
              break;
            case S:
              if (e.isVcardOverMmsDocument) {
                b += e.documentPageCount;
              } else {
                T += 1;
              }
          }
        } else if (e.exception instanceof d.MediaFileFailedLoad) {
          P = true;
        } else {
          C += 1;
        }
      }
    });
    if (r > 0) {
      n.push(m.fbt._({
        "*": "{number} images you tried adding are larger than the {maxSize} limit.",
        _1: "1 image you tried adding is larger than the {maxSize} limit."
      }, [m.fbt._plural(r, "number"), m.fbt._param("maxSize", l.default.filesize((0, c.getUploadLimit)("image")))], {
        hk: "39Yyoc"
      }));
    }
    if (i > 0) {
      n.push(m.fbt._({
        "*": "{number} videos you tried adding are larger than the {maxSize} limit.",
        _1: "1 video you tried adding is larger than the {maxSize} limit."
      }, [m.fbt._plural(i, "number"), m.fbt._param("maxSize", l.default.filesize((0, c.getUploadLimit)("video")))], {
        hk: "D8fWp"
      }));
    }
    if (a > 0) {
      n.push(m.fbt._({
        "*": "{number} audio files you tried adding are larger than the {maxSize} limit.",
        _1: "{number} audio you tried adding is larger than the {maxSize} limit."
      }, [m.fbt._plural(a), m.fbt._param("number", l.default.n(a)), m.fbt._param("maxSize", l.default.filesize((0, c.getUploadLimit)("audio")))], {
        hk: "3QLVjP"
      }));
    }
    if (o > 0) {
      n.push(m.fbt._({
        "*": "{number} documents you tried adding are larger than the {maxSize} limit.",
        _1: "{number} document you tried adding is larger than the {maxSize} limit."
      }, [m.fbt._plural(o), m.fbt._param("number", l.default.n(o)), m.fbt._param("maxSize", O)], {
        hk: "113b1o"
      }));
    }
    if (s > 0) {
      n.push(m.fbt._({
        "*": "The contacts that you tried to add are larger than the {maxSize} limit.",
        _1: "The contact that you tried to add is larger than the {maxSize} limit."
      }, [m.fbt._plural(s), m.fbt._param("maxSize", I)], {
        hk: "2hamEm"
      }));
    }
    if (_ > 0) {
      n.push(m.fbt._({
        "*": "{number} images you tried adding have no content.",
        _1: "1 image you tried adding has no content."
      }, [m.fbt._plural(_, "number")], {
        hk: "20kgZ7"
      }));
    }
    if (g > 0) {
      n.push(m.fbt._({
        "*": "{number} videos you tried adding have no content.",
        _1: "1 video you tried adding has no content."
      }, [m.fbt._plural(g, "number")], {
        hk: "oNVh4"
      }));
    }
    if (h > 0) {
      n.push(m.fbt._({
        "*": "{number} audio files you tried adding have no content.",
        _1: "{number} audio file you tried adding has no content."
      }, [m.fbt._plural(h), m.fbt._param("number", l.default.n(h))], {
        hk: "MH6GK"
      }));
    }
    if (T > 0) {
      n.push(m.fbt._({
        "*": "{number} documents you tried adding have no content.",
        _1: "{number} document you tried adding has no content."
      }, [m.fbt._plural(T), m.fbt._param("number", l.default.n(T))], {
        hk: "3wF4WN"
      }));
    }
    if (b > 0) {
      n.push(m.fbt._({
        "*": "{number} contacts that you tried to add have no content.",
        _1: "{number} contact that you tried to add has no content."
      }, [m.fbt._plural(b), m.fbt._param("number", l.default.n(b))], {
        hk: "J4rKR"
      }));
    }
    if (C > 0) {
      n.push(m.fbt._({
        "*": "{number} files you tried adding are not supported.",
        _1: "1 file you tried adding is not supported."
      }, [m.fbt._plural(C, "number")], {
        hk: "22MqXs"
      }));
    }
    if (P) {
      n = [];
      n.push(m.fbt._("The item you tried adding failed to load.", null, {
        hk: "1MmBvO"
      }));
    }
    if (n.length > 1) {
      n = [];
      const e = r + i + a + o;
      const t = _ + g + h + T;
      const s = e + t + C;
      if (C === 0) {
        if (e !== 0) {
          n.push(m.fbt._({
            "*": "{number} files you tried adding are larger than the {maxSize} limit.",
            _1: "1 file you tried adding is larger than the {maxSize} limit."
          }, [m.fbt._plural(e, "number"), m.fbt._param("maxSize", O)], {
            hk: "hGLp3"
          }));
        }
        if (t !== 0) {
          n.push(m.fbt._({
            "*": "{number} files you tried adding have no content.",
            _1: "1 file you tried adding has no content."
          }, [m.fbt._plural(t, "number")], {
            hk: "f3UOh"
          }));
        }
      } else {
        n.push(m.fbt._({
          "*": "{number} files could not be added.",
          _1: "1 file could not be added."
        }, [m.fbt._plural(s, "number")], {
          hk: "mGlGQ"
        }));
      }
    }
    const R = n.join(" ");
    this.errorMsgs = R;
    const N = this.getPreviewableMedias().length;
    this.ignore(N - (0, c.getMaxNumberSelectableMedia)(N, e.id));
    const D = this.ignored;
    this.ignored = 0;
    if (D) {
      this.trigger("max_upload_limit", D);
    }
    if (C > 0) {
      this.trigger("files_not_supported");
    }
    return {
      errorMsgs: R
    };
  }
  canSend() {
    return !this.getModelsArray().some(e => e.state === A && !e.previewable);
  }
}
exports.default = C;
C.model = a.AttachMedia;