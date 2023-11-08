Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderMarker = undefined;
var a = require("../app/15842.js");
var r = require("../app/555622.js");
exports.RenderMarker = class {
  constructor(e) {
    let {
      markerId: t,
      annotations: n
    } = e;
    this._markerId = t;
    this._instanceKey = r.QPL.markerStart(this._markerId, {
      annotations: n,
      instanceKeyOption: a.QplInstanceKeyOptions.AUTO_INCREMENT
    }).instanceKey;
  }
  markDOMCommit() {
    r.QPL.markerPoint(this._markerId, "DOM_commit", {
      instanceKey: this._instanceKey
    });
  }
  markMounted() {
    r.QPL.markerPoint(this._markerId, "mounted", {
      instanceKey: this._instanceKey
    });
  }
  markPaintedStart() {
    r.QPL.markerPoint(this._markerId, "painted_start", {
      instanceKey: this._instanceKey
    });
  }
  markPaintedEnd() {
    r.QPL.markerPoint(this._markerId, "painted_end", {
      instanceKey: this._instanceKey
    });
  }
  commit(e) {
    r.QPL.markerEnd(this._markerId, e, {
      instanceKey: this._instanceKey
    });
  }
};