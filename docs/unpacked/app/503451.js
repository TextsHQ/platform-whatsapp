var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdQPL = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./819416.js");
var o = require("./15842.js");
var s = require("./220816.js");
var l = r(require("./97359.js"));
var u = require("./316348.js");
var c = require("./555622.js");
var d = r(require("./556869.js"));
const p = ["source"];
function f(e) {
  if ((e == null ? undefined : e.string) == null) {
    return;
  }
  const t = e.string;
  const n = {};
  Object.keys(e.string).forEach(e => {
    if (!p.includes(e)) {
      n[e] = t[e];
    }
  });
  e.string = n;
}
exports.SyncdQPL = class {
  constructor() {
    this._when = (0, l.default)(require("./775410.js")).isSyncDBootstrapInProcess() ? "bootstrap" : require("./359484.js").OfflineMessageHandler.isResumeFromRestartComplete() ? "online" : "offline_resume";
    this._loggingEnabled = (0, a.getConfig)().syncdQPLLoggingEnabled() && (this._when === "bootstrap" || this._when === "offline_resume");
    if (this._loggingEnabled) {
      this._instanceKey = c.QPL.getNextMarkerInstanceValue(u.QuickLogMarkerId.SYNCD);
    }
  }
  _validate() {
    if (!this._loggingEnabled) {
      return false;
    }
    if (!this._started) {
      throw (0, d.default)("QPL instance ${this._instanceKey} is not started");
    }
    return true;
  }
  start() {
    if (this._loggingEnabled) {
      c.QPL.markerStart(u.QuickLogMarkerId.SYNCD, {
        instanceKey: this._instanceKey
      });
      this._started = true;
      this.annotate({
        when: this._when
      });
    }
  }
  annotate(e) {
    if (!this._validate()) {
      return;
    }
    const t = (0, s.constructAnnotationsFromContext)(e);
    f(t);
    if (t) {
      c.QPL.markerAnnotate(u.QuickLogMarkerId.SYNCD, t, {
        instanceKey: this._instanceKey
      });
    }
  }
  mark(e, t) {
    if (!this._validate()) {
      return;
    }
    const n = (0, s.constructAnnotationsFromContext)(t);
    this._markInternal(e, n);
  }
  markAnnotations(e, t) {
    if (this._validate()) {
      this._markInternal(e, t);
    }
  }
  _markInternal(e, t) {
    const n = function (e, t) {
      var n;
      if ((t == null || (n = t.string) === null || n === undefined ? undefined : n.source) == null) {
        return e;
      }
      const r = t.string;
      return [Object.keys(r).filter(e => p.includes(e)).map(e => r[e]), e].join("_");
    }(e, t);
    f(t);
    c.QPL.markerPoint(u.QuickLogMarkerId.SYNCD, n, (0, i.default)((0, i.default)({}, t && {
      data: t
    }), {}, {
      instanceKey: this._instanceKey
    }));
  }
  end() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (this._validate()) {
      this._started = false;
      c.QPL.markerEnd(u.QuickLogMarkerId.SYNCD, e ? o.QuickLogActionType.FAIL : o.QuickLogActionType.SUCCESS, {
        instanceKey: this._instanceKey
      });
    }
  }
};