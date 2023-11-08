var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseMirror = undefined;
exports.genBitMask = function (e, t) {
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const i = e[`change:${t[r]}`];
    const a = Math.floor(i / 32);
    o(n, a + 1);
    n[a] |= 1 << i % 32;
  }
  return n;
};
exports.genMirrorMask = function (e) {
  const t = {};
  let n = 0;
  const r = e => {
    t[`change:${e}`] = n++;
  };
  if (e.props) {
    Object.keys(e.props).forEach(r);
  }
  if (e.session) {
    Object.keys(e.session).forEach(r);
  }
  if (e.derived) {
    Object.keys(e.derived).forEach(r);
  }
  return t;
};
var i = r(require("../vendor/604788.js"));
function a(e, t) {
  e[t] = e[e.length - 1];
  e.pop();
}
function o(e, t) {
  if (t <= e.length) {
    return;
  }
  const n = t - e.length;
  for (let t = 0; t < n; t++) {
    e.push(0);
  }
}
exports.BaseMirror = class {
  constructor(e) {
    this.state = e;
  }
  destructor() {
    this.state.off("all", this.onGatherEvent, this);
  }
  initListener() {
    this.state.on("all", this.onGatherEvent, this);
    this.masks = [];
    this.listeners = [];
    this.changeEvents = [];
  }
  onGatherEvent(e) {
    if (e === "change") {
      if (!this.changeEvents.filter(Boolean).length) {
        return;
      }
      this.onChange();
      this.changeEvents = [];
    } else {
      const t = this.state.mirrorMask[e];
      if (t === undefined) {
        return;
      }
      const n = t / 32 | 0;
      o(this.changeEvents, n + 1);
      this.changeEvents[n] |= 1 << (t % 32 | 0);
    }
  }
  onChange() {
    const e = this.state;
    const t = this.changeEvents;
    (0, i.default)(this.masks, this.listeners).forEach(n => {
      let [r, i] = n;
      const a = Math.min(t.length, r.length);
      for (let n = 0; n < a; n++) {
        if (t[n] & r[n]) {
          const [t, n] = i;
          if (t != null && n != null) {
            t(n, e);
          }
          break;
        }
      }
    });
  }
  addListener(e, t, n) {
    if (!this.listeners) {
      this.initListener();
    }
    this.masks.push(t);
    this.listeners.push([e, n]);
  }
  removeListener(e) {
    const t = this.listeners;
    for (let n = 0; n < t.length; n++) {
      if (t[n][0] === e) {
        t[n][0] = null;
        t[n][1] = null;
        a(this.masks, n);
        a(t, n);
      }
    }
  }
};