Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emojiCompletionTracker = exports.InitialEmojisCompletionContext = exports.EmojiCompletionTracker = undefined;
var r = require("./789379.js");
var i = require("../vendor/667294.js");
class a {
  constructor() {
    var e = this;
    this._loadingEmojisCount = 0;
    this._hasTriggeredEmojiPreload = false;
    this._firstRun = false;
    this.beginPreload = function () {
      let t = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (!e._hasTriggeredEmojiPreload) {
        e._hasTriggeredEmojiPreload = true;
        self.setTimeout(() => {
          r.AssetLoader.loadEmojis();
        }, t ? 1000 : 0);
      }
    };
    this.beginPreloadFallback = () => {
      self.setTimeout(() => {
        this.beginPreload(false);
      }, 5000);
    };
    this.incrementLoadingEmojisCount = () => {
      if (!this._hasTriggeredEmojiPreload) {
        if (!this._firstRun) {
          this._firstRun = true;
          this._firstRunTiming = self.performance.now();
        }
        this._loadingEmojisCount += 1;
      }
    };
    this.decrementLoadingEmojisCount = () => {
      if (!this._hasTriggeredEmojiPreload) {
        this._loadingEmojisCount -= 1;
        if (this._loadingEmojisCount === 0 && this._firstRun) {
          this.beginPreload(true);
          __LOG__(2)`EmojiCompletionTracker:firstScreenEmojis complete in ${Math.ceil(self.performance.now() - this._firstRunTiming)} ms`;
        }
      }
    };
  }
}
exports.EmojiCompletionTracker = a;
const o = new a();
exports.emojiCompletionTracker = o;
const s = (0, i.createContext)(o);
exports.InitialEmojisCompletionContext = s;