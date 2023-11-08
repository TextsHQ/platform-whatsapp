var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAction = function (e) {
  const {
    key: t,
    ctrlKey: n,
    metaKey: a,
    altKey: r,
    shiftKey: o
  } = e;
  if (t === "Control" || t === "Meta" || t === "Alt" || t === "Shift") {
    return;
  }
  const u = d[function (e, t) {
    if (t && (e === "Tab" || e === "Enter" || e === "Backspace" || e === " ")) {
      return `Shift+${e}`;
    }
    return e;
  }(t, o)];
  if (!u) {
    return;
  }
  const {
    action: s,
    modifiers: {
      mac: c,
      windows: f
    }
  } = u;
  let p = true;
  const m = l.UA.os === l.OS_TYPE.MAC ? c : f;
  if (m.includes(i.Command)) {
    p = p && a;
  }
  if (m.includes(i.Control)) {
    p = p && n;
  }
  if (m.includes(i.Option)) {
    p = p && r;
  }
  if (!p) {
    return;
  }
  return s;
};
exports.getAdditionalShortcuts = function () {
  const e = {};
  Array.from(o.Action.members()).forEach(t => {
    const n = c(t);
    if (!(n.length <= 1)) {
      n.slice(1).forEach(n => {
        let {
          key: a,
          nativeKey: r,
          nativeModifier: o
        } = n;
        const l = r || a;
        if (l) {
          e[f(l, o)] = t;
        }
      });
    }
  });
  return e;
};
exports.getKey = function (e) {
  const t = c(e);
  if (!t.length) {
    return;
  }
  const {
    key: n,
    nativeKey: a,
    nativeModifier: r
  } = t[0];
  const o = a || n;
  if (!o) {
    return;
  }
  return f(o, r);
};
exports.getShortcutKey = function (e) {
  const t = c(e);
  if (t.length) {
    const {
      key: e,
      nativeKey: n,
      webKey: a
    } = t[0];
    return a || e;
  }
  return;
};
exports.getShortcutModifiers = function (e) {
  const t = c(e);
  if (t.length) {
    const {
      webModifiers: e = u,
      nativeModifier: n = s
    } = t[0];
    const a = l.UA.os === l.OS_TYPE.MAC;
    return (a ? e.mac : e.windows).map(e => {
      switch (e) {
        case i.Command:
          return "Cmd";
        case i.Option:
          if (a) {
            return "Option";
          } else {
            return "Alt";
          }
        case i.Control:
          return "Ctrl";
      }
    });
  }
  return;
};
var r = a(require("../app/817173.js"));
var o = require("./861620.js");
var l = require("../app/368170.js");
const i = require("../vendor/76672.js").Mirrored(["Command", "Option", "Control"]);
const u = {
  mac: [i.Command, i.Control],
  windows: [i.Control, i.Option]
};
const s = {
  mac: "Cmd",
  windows: "Ctrl"
};
function c(e) {
  switch (e) {
    case o.Action.CONTACT_US:
      return [{
        key: "H"
      }];
    case o.Action.DELETE_OR_EXIT_CHAT:
      return [{
        key: "Backspace",
        nativeKey: "D"
      }];
    case o.Action.GO_TO_NEXT_CHAT:
      return [{
        key: "Tab",
        nativeModifier: {
          mac: "Ctrl",
          windows: "Ctrl"
        }
      }, {
        key: "}"
      }];
    case o.Action.GO_TO_PREV_CHAT:
      return [{
        key: "Shift+Tab",
        nativeModifier: {
          mac: "Ctrl",
          windows: "Ctrl"
        }
      }, {
        key: "{"
      }];
    case o.Action.CLOSE_CHAT:
      return [{
        key: "Escape",
        webModifiers: {
          mac: [],
          windows: []
        },
        nativeModifier: {
          mac: "",
          windows: ""
        }
      }];
    case o.Action.LOGOUT:
      return [];
    case o.Action.OPEN_NEW_CHAT:
      return [{
        key: "n"
      }];
    case o.Action.OPEN_NEW_GROUP:
      return [{
        key: "N"
      }];
    case o.Action.OPEN_PROFILE:
      return [{
        key: "p"
      }];
    case o.Action.OPEN_SETTINGS:
      return [{
        key: ","
      }];
    case o.Action.SEARCH:
      return [{
        webKey: "/",
        nativeKey: "f"
      }];
    case o.Action.SEARCH_IN_CHAT:
      return [{
        key: "F"
      }];
    case o.Action.TOGGLE_ARCHIVE:
      return [{
        key: "E"
      }];
    case o.Action.TOGGLE_MUTE:
      return [{
        key: "M"
      }];
    case o.Action.TOGGLE_PIN:
      return [{
        key: "P"
      }];
    case o.Action.TOGGLE_UNREAD:
      return [{
        key: "U"
      }];
    case o.Action.ZOOM_IN:
      return [{
        key: "+"
      }, {
        key: "="
      }];
    case o.Action.ZOOM_OUT:
      return [{
        key: "-"
      }];
    case o.Action.ZOOM_RESET:
      return [{
        key: "0"
      }];
    case o.Action.INCREASE_PTT_SPEED:
      return [{
        key: ">"
      }];
    case o.Action.DECREASE_PTT_SPEED:
      return [{
        key: "<"
      }];
    case o.Action.OPEN_EMOJI_PANEL:
      return [{
        key: "e"
      }];
    case o.Action.OPEN_GIF_PANEL:
      return [{
        key: "g"
      }];
    case o.Action.OPEN_STICKER_PANEL:
      return [{
        key: "s"
      }];
    case o.Action.TOGGLE_STICKER_MAKER:
      return [{
        key: "S"
      }];
    case o.Action.TOGGLE_COMMAND_PALETTE:
      return [{
        key: "k",
        webModifiers: {
          mac: [i.Command],
          windows: [i.Option]
        },
        nativeModifier: {
          mac: "Cmd",
          windows: "Alt"
        }
      }];
    case o.Action.LOCK_SCREEN:
      return [{
        key: "l"
      }];
    default:
      return [];
  }
}
const d = function () {
  const e = {};
  Array.from(o.Action.members()).forEach(t => {
    c(t).forEach(n => {
      let {
        key: a,
        webKey: r,
        webModifiers: o = u
      } = n;
      const l = r || a;
      if (l) {
        e[l] = {
          action: t,
          modifiers: o
        };
      }
    });
  });
  return e;
}();
function f(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s;
  const n = t.windows;
  const a = e !== "+" ? e : "Plus";
  const o = a.length === 1 && a.match(/[a-z]/i);
  if (!o) {
    return `${n}+${(0, r.default)(a)}`;
  }
  const l = a.match(/[a-z]/);
  if (l) {
    return `${n}+${(0, r.default)(a)}`;
  } else {
    return `Shift+${n}+${a}`;
  }
}