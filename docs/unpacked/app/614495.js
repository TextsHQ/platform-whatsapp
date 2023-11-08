var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./395654.js"));
class a extends i.default {
  constructor() {
    super();
    this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.theme = this.getCurrentTheme();
    this.handleThemeChange = () => {
      const e = this.getCurrentTheme();
      if (e !== this.theme) {
        this.theme = e;
        this.trigger("system_theme_change", e);
      }
    };
    this.mediaQuery.addListener(this.handleThemeChange);
  }
  getCurrentTheme() {
    if (this.mediaQuery.matches) {
      return "dark";
    } else {
      return "light";
    }
  }
}
var o = new a();
exports.default = o;