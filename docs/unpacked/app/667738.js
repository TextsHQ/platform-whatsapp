var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContext = exports.THEME_ASSETS = undefined;
exports.applyThemeToUI = c;
exports.getTheme = l;
exports.isDarkTheme = function () {
  return l() === "dark";
};
exports.isLightTheme = function () {
  return l() === "light";
};
exports.setTheme = u;
exports.useTheme = exports.useIsDarkTheme = undefined;
var i = r(require("./614495.js"));
var a = require("./757453.js");
var o = require("../vendor/667294.js");
const s = {
  light: [{
    id: "bg-chat-light",
    selectors: ["[data-asset-chat-background-light]"],
    low: {
      default: require("./217498.js")
    },
    high: {
      default: require("./217498.js")
    }
  }, {
    id: "bg-chat-dark",
    selectors: ["[data-asset-chat-background-dark]"],
    low: {
      default: require("./754057.js")
    },
    high: {
      default: require("./754057.js")
    }
  }],
  dark: [{
    id: "bg-chat-dark",
    selectors: ["[data-asset-chat-background-dark]"],
    low: {
      default: require("./754057.js")
    },
    high: {
      default: require("./754057.js")
    }
  }]
};
function l() {
  if ((0, a.getSystemThemeMode)()) {
    return i.default.getCurrentTheme();
  } else {
    return (0, a.getTheme)();
  }
}
function u(e) {
  (0, a.setTheme)(e);
  c(e);
}
function c(e) {
  const t = document.body;
  if (!(t == null)) {
    t.classList.toggle("dark", e === "dark");
  }
}
exports.THEME_ASSETS = s;
const d = {
  theme: i.default.getCurrentTheme(),
  systemThemeMode: true,
  setTheme: u,
  setSystemThemeMode: a.setSystemThemeMode
};
const p = (0, o.createContext)(d);
exports.ThemeContext = p;
const f = () => (0, o.useContext)(p);
exports.useTheme = f;
exports.useIsDarkTheme = () => f().theme === "dark";