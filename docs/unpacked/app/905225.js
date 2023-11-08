Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_CHAT_WALLPAPER = undefined;
exports.colorExistsInTheme = function (e, t) {
  const n = d(t);
  if (e === i) {
    return true;
  }
  return n.some(t => t.toUpperCase() === e.toUpperCase());
};
exports.getDoodleAssetName = function (e, t) {
  if (r.ServerProps.wallpapersV2 && t === "light" && e !== i) {
    const n = p(e, t, "doodle");
    if (n) {
      return `data-asset-chat-background-${n}`;
    }
  }
  let n = `data-asset-chat-background-${t}`;
  if (t === "light" && e === i) {
    n = "data-asset-chat-background-dark";
  }
  return n;
};
exports.getDoodleOpacity = function (e, t) {
  if (r.ServerProps.wallpapersV2) {
    const n = p(e, t, "opacity");
    if (n) {
      return n;
    }
  }
  if (t === "light" && e === i) {
    return "0.4";
  }
  return "0.06";
};
exports.getWallpaperColorPropValue = p;
exports.getWallpaperColors = d;
exports.invertTransparentWallpaperColors = function (e, t) {
  if (r.ServerProps.wallpapersV2) {
    return e === "light" && t !== i && !!p(t, e, "invertTransparentWallpaperColors");
  }
  const n = o.includes(t);
  if (!d(e).includes(t)) {
    return false;
  }
  if (n) {
    return e === "light";
  } else {
    return e === "dark";
  }
};
exports.toggleWallpaperColor = function (e, t) {
  const n = d(t);
  if (e === i) {
    return i;
  }
  if (r.ServerProps.wallpapersV2) {
    const r = n.findIndex(t => t.toUpperCase() === e.toUpperCase());
    if (r !== -1) {
      if (t === "light") {
        return c[r];
      } else {
        return u[r];
      }
    }
  }
  return e;
};
var r = require("./937001.js");
const i = "default_chat_wallpaper";
exports.DEFAULT_CHAT_WALLPAPER = i;
const a = ["#ccebdc", "#aed8c7", "#7acba5", "#c7e9eb", "#a9dbd8", "#68d5d9", "#6ec3d4", "#f2dad5", "#f2d5e1", "#fbcad2", "#ffa7a8", "#cbdaec", "#d7d3eb", "#e5c0eb", "#d0deb1", "#dee0b4", "#e6dfa8", "#f7e9a8", "#ffd1a4", "#ff8a8c", "#ff5978", "#f56056", "#dc6e4f", "#e6e365", "#73c780", "#2293a4", "#219ed9", "#2b5aa6", "#74676a", "#48324d", "#dee3e9", "#d9dade", "#c0c1c4", "#7e90a3", "#55626f", "#243640", "#162127"];
const o = ["#ff8a8c", "#ff5978", "#f56056", "#dc6e4f", "#73c780", "#2293a4", "#219ed9", "#2b5aa6", "#74676a", "#48324d", "#7e90a3", "#55626f", "#243640", "#162127"];
const s = {
  "#BBE4E5": {
    doodle: "dark",
    opacity: "0.42"
  },
  "#AED8C7": {
    doodle: "dark",
    opacity: "0.3"
  },
  "#7ACBA5": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#CBDAEC": {
    doodle: "dark",
    opacity: "0.42"
  },
  "#66D2D5": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#63BDCF": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#D6D0F0": {
    doodle: "dark",
    opacity: "0.36"
  },
  "#CECECE": {
    doodle: "dark",
    opacity: "0.36"
  },
  "#D1DABE": {
    doodle: "dark",
    opacity: "0.36"
  },
  "#E6E1B1": {
    doodle: "dark",
    opacity: "0.42"
  },
  "#FEEFA9": {
    doodle: "light",
    opacity: "0.06"
  },
  "#FED297": {
    doodle: "dark",
    opacity: "0.42"
  },
  "#FD9A9B": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#FD6769": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#FB4668": {
    doodle: "dark",
    opacity: "0.26"
  },
  "#922040": {
    doodle: "dark",
    opacity: "0.17",
    invertTransparentWallpaperColors: true
  },
  "#DC6E4F": {
    doodle: "dark",
    opacity: "0.2"
  },
  "#644D52": {
    doodle: "dark",
    opacity: "0.13",
    invertTransparentWallpaperColors: true
  },
  "#517E7E": {
    doodle: "dark",
    opacity: "0.13"
  },
  "#3190BB": {
    doodle: "dark",
    opacity: "0.13"
  },
  "#35558A": {
    doodle: "dark",
    opacity: "0.1",
    invertTransparentWallpaperColors: true
  },
  "#55626F": {
    doodle: "dark",
    opacity: "0.1",
    invertTransparentWallpaperColors: true
  },
  "#1D2326": {
    doodle: "dark",
    opacity: "0.1",
    invertTransparentWallpaperColors: true
  },
  "#301E34": {
    doodle: "dark",
    opacity: "0.1",
    invertTransparentWallpaperColors: true
  },
  "#ECF0F1": {
    doodle: "light",
    opacity: "0.06"
  },
  "#FFFEA2": {
    doodle: "light",
    opacity: "0.06"
  },
  "#E7E8D2": {
    doodle: "light",
    opacity: "0.06"
  }
};
const l = {
  "#0F2424": {
    doodle: "dark",
    opacity: "0.05"
  },
  "#12261F": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#11241C": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#111E27": {
    doodle: "dark",
    opacity: "0.06"
  },
  "#0F2224": {
    doodle: "dark",
    opacity: "0.06"
  },
  "#0E2125": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#1F1D25": {
    doodle: "dark",
    opacity: "0.06"
  },
  "#212121": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#1F211C": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#23231B": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#262419": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#261F17": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#261717": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#260F10": {
    doodle: "dark",
    opacity: "0.06"
  },
  "#260A10": {
    doodle: "dark",
    opacity: "0.07"
  },
  "#19050B": {
    doodle: "dark",
    opacity: "0.075"
  },
  "#21100C": {
    doodle: "dark",
    opacity: "0.07"
  },
  "#0F0C0C": {
    doodle: "dark",
    opacity: "0.065"
  },
  "#101919": {
    doodle: "dark",
    opacity: "0.06"
  },
  "#0A1D25": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#0D1523": {
    doodle: "dark",
    opacity: "0.065"
  },
  "#0D0F11": {
    doodle: "dark",
    opacity: "0.07"
  },
  "#0A0C0D": {
    doodle: "dark",
    opacity: "0.07"
  },
  "#110B12": {
    doodle: "dark",
    opacity: "0.07"
  },
  "#1E1F1F": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#262618": {
    doodle: "dark",
    opacity: "0.055"
  },
  "#23231F": {
    doodle: "dark",
    opacity: "0.055"
  }
};
const u = Object.keys(s);
const c = Object.keys(l);
function d(e) {
  if (r.ServerProps.wallpapersV2) {
    if (e === "light") {
      return u;
    } else {
      return c;
    }
  } else {
    return a;
  }
}
function p(e, t, n) {
  const r = t === "light" ? s : l;
  for (const t in r) {
    if (t.toUpperCase() === e.toUpperCase()) {
      return r[t][n];
    }
  }
  return null;
}