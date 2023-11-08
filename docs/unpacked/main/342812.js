var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/395654.js"));
const o = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5
};
const l = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror"];
const i = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"];
const u = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "msfullscreenchange", "msfullscreenerror"];
let s;
let c;
class d extends r.default {
  constructor() {
    super();
    this.requestFullscreen = e => {
      if (e) {
        if (s) {
          e[s[o.requestFullscreen]]();
        } else {
          __LOG__(3)`Your browser does not support fullscreen API.`;
        }
      } else {
        __LOG__(3)`The element requesting fullscreen is null or undefined.`;
      }
    };
    this._fullscreenChangeTrigger = e => {
      this.trigger("fullscreen_change", e);
    };
    this._fullscreenErrorTrigger = e => {
      this.trigger("fullscreen_error", e);
    };
    if (typeof window != "object" || typeof window.document != "object") {
      return void __LOG__(3)`document object does not exist`;
    }
    c = window.document;
    const e = c;
    if ("fullscreenEnabled" in c) {
      s = Object.keys(o);
    } else if (l[o.fullscreenEnabled] in c) {
      s = l;
    } else if (i[o.fullscreenEnabled] in c) {
      s = i;
    } else if (u[o.fullscreenEnabled] in c) {
      s = u;
    }
    if (!s) {
      return void __LOG__(3)`Your browser does not support fullscreen API.`;
    }
    const t = s;
    e.addEventListener(t[o.fullscreenchange], this._fullscreenChangeTrigger);
    e.addEventListener(t[o.fullscreenerror], this._fullscreenErrorTrigger);
  }
  exitFullscreen() {
    if (c) {
      if (s) {
        return c[s[o.exitFullscreen]].bind(c)();
      } else {
        __LOG__(3)`Your browser does not support fullscreen API.`;
        return Promise.resolve();
      }
    } else {
      __LOG__(3)`document object does not exist`;
      return Promise.resolve();
    }
  }
  isFullscreenMode() {
    if (c) {
      if (s) {
        return !!c[s[o.fullscreenElement]];
      } else {
        __LOG__(3)`Your browser does not support fullscreen API.`;
        return false;
      }
    } else {
      __LOG__(3)`document object does not exist`;
      return false;
    }
  }
  isFullscreenEnabled() {
    if (c) {
      if (s) {
        return Boolean(c[s[o.fullscreenEnabled]]);
      } else {
        __LOG__(3)`Your browser does not support fullscreen API.`;
        return false;
      }
    } else {
      __LOG__(3)`document object does not exist`;
      return false;
    }
  }
  getFullscreenElement() {
    if (c) {
      if (s) {
        return c[s[o.fullscreenElement]];
      }
      __LOG__(3)`Your browser does not support fullscreen API.`;
    } else {
      __LOG__(3)`document object does not exist`;
    }
  }
}
var f = new d();
exports.default = f;