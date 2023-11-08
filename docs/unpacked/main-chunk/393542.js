var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontLoader = exports.Font = undefined;
var r = o(require("../vendor/81109.js"));
o(require("../app/670983.js"));
var a = o(require("../app/556869.js"));
var l = o(require("../vendors-main-chunk/375933.js"));
const i = require("./528757.js");
const s = require("./365057.js");
const u = require("../vendor/76672.js")({
  SANS_SERIF: 0,
  SERIF: 1,
  NORICAN_REGULAR: 2,
  BRYNDAN_WRITE: 3,
  BEBASNEUE_REGULAR: 4,
  OSWALD_HEAVY: 5,
  NOTO_EMOJI: 6
});
exports.Font = u;
const d = {
  [u.SERIF]: {
    google: {
      families: ["Roboto"]
    }
  },
  [u.SANS_SERIF]: {
    google: {
      families: ["Droid Serif"]
    }
  },
  [u.NORICAN_REGULAR]: {
    google: {
      families: ["Norican"]
    }
  },
  [u.BRYNDAN_WRITE]: {
    custom: {
      families: ["Bryndan-Write"]
    }
  },
  [u.OSWALD_HEAVY]: {
    google: {
      families: ["Oswald:bold"]
    }
  }
};
const c = {
  [u.BRYNDAN_WRITE]: `@font-face {font-family:"Bryndan-Write"; src:url("${i}") format("truetype");}`,
  [u.NOTO_EMOJI]: `@font-face {font-family:"Noto-Emoji"; src:url("${s}") format("truetype");}`
};
const f = new class {
  constructor() {
    this.loadedFonts = {};
    this.loadingPromise = {};
  }
  load(e) {
    if (this.loadedFonts[e]) {
      return Promise.resolve();
    }
    if (this.loadingPromise[e]) {
      return this.loadingPromise[e];
    }
    const t = d[e];
    const n = c[e];
    let o;
    o = n ? new Promise((e, t) => {
      const o = document.createElement("style");
      o.appendChild(document.createTextNode(n));
      o.onload = e;
      o.onerror = t;
      if (document.head) {
        document.head.appendChild(o);
      }
    }) : Promise.resolve();
    const i = o.then(() => new Promise((n, o) => {
      const i = (0, r.default)((0, r.default)({}, t), {}, {
        active: () => {
          this.loadedFonts[e] = true;
          n();
        },
        inactive: () => {
          this.loadingPromise[e] = undefined;
          o((0, a.default)(`Failed to load font: ${u.getName(e)}`));
        }
      });
      l.default.load(i);
    }));
    this.loadingPromise[e] = i;
    return i;
  }
  loadMessageFont(e) {
    const t = u.cast(e);
    if (t == null) {
      __LOG__(3)`Unsupported font: ${e}`;
      return this.load(u.SANS_SERIF);
    } else {
      return this.load(t);
    }
  }
  loadAllFonts() {
    return Promise.all(Array.from(u.members()).map(e => this.load(e)));
  }
}();
exports.FontLoader = f;