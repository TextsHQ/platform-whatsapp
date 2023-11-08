Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./685639.js");
exports.default = class {
  constructor(e) {
    this.sequenceId = 0;
    this.ship = e => {
      var t;
      const n = this.bitmap;
      if (!n) {
        return;
      }
      const r = Date.now();
      if (r > this.lastActiveInMS) {
        this.bitmapLength = Math.min(64, Math.ceil(r / 1000 - this.startTimeInSec));
      }
      const i = {
        sessionId: this.sessionId,
        startTime: this.startTimeInSec,
        bitmap: n,
        bitmapLen: this.bitmapLength,
        sessionSeq: this.sequenceId,
        sessionCum: this.cumulativeBitsSet,
        relativeStartTimeMs: (t = this.relativeStartTimeMs) !== null && t !== undefined ? t : undefined
      };
      (e || this.loggingCallback)(i);
      this.timer.cancel();
      this.bitmap = null;
    };
    this.loggingCallback = e.loggingCallback;
    this.timer = new r.ShiftTimer(this.ship);
    const {
      getSessionData: t,
      postUpdate: n
    } = e;
    if (t != null) {
      this.fetchAndUpdateSession = () => {
        const {
          id: e,
          relativeTimeMs: n
        } = t();
        this.sessionId = e;
        this.relativeStartTimeMs = n;
        this.cumulativeBitsSet = 0;
      };
    }
    this.postUpdate = n;
    this._initSession();
    this._initArray(Math.floor(Date.now() / 1000));
  }
  _initSession() {
    if (this.fetchAndUpdateSession != null) {
      this.fetchAndUpdateSession();
    } else {
      this.sessionId = Math.floor(Math.random() * 2147483648).toString(36);
      this.cumulativeBitsSet = 0;
      this.sequenceId = -1;
    }
  }
  _initArray(e) {
    var t;
    if (this.fetchAndUpdateSession != null) {
      this.fetchAndUpdateSession();
    }
    __LOG__(2)`[time-spent] _initArray at time ${e}`;
    this.startTimeInSec = e;
    this.lastActiveInMS = this.startTimeInSec * 1000;
    this.bitmap = new Int32Array(2);
    this.bitmap[0] = 1;
    this.bitmapLength = 1;
    this.cumulativeBitsSet += 1;
    this.sequenceId += 1;
    if (!((t = this.postUpdate) === null || t === undefined)) {
      t.call(this);
    }
    this.timer.debounceAndCap(64000, 64000);
  }
  _doUpdate(e) {
    const t = e - this.startTimeInSec;
    if (this.bitmap && (t < 0 || t >= 64)) {
      this.ship();
    }
    if (this.bitmap) {
      this.bitmap[t >> 5] |= 1 << (t & 31);
      this.bitmapLength = t + 1;
      this.cumulativeBitsSet += 1;
      this.lastActiveInMS = e * 1000;
    } else {
      this._initArray(e);
    }
  }
  update(e) {
    var t;
    if (!(e >= this.lastActiveInMS && e - this.lastActiveInMS < 1000)) {
      this._doUpdate(Math.floor(e / 1000));
      if (!((t = this.postUpdate) === null || t === undefined)) {
        t.call(this);
      }
    }
  }
  shipAndEndSession(e) {
    this.ship(e);
    this._initSession();
  }
};