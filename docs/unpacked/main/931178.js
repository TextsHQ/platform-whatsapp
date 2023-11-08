var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyImageToClipboard = function (e) {
  if (!l()) {
    throw (0, o.default)("Clipboard API not supported");
  }
  if (e.type === "image/png") {
    const t = new window.ClipboardItem({
      "image/png": e
    });
    navigator.clipboard.write([t]);
  } else {
    const t = new Image();
    t.onload = e => {
      let {
        target: t
      } = e;
      const n = document.createElement("canvas");
      const a = n.getContext("2d");
      n.width = t.naturalWidth;
      n.height = t.naturalHeight;
      a.drawImage(t, 0, 0);
      n.toBlob(e => {
        const t = new window.ClipboardItem({
          [e.type]: e
        });
        try {
          navigator.clipboard.write([t]);
        } catch (e) {
          __LOG__(2, undefined, undefined, true)`Write image to clipboard failed`;
          SEND_LOGS(e);
        }
      }, "image/png", 1);
    };
    t.src = URL.createObjectURL(e);
  }
};
exports.supportsCopyImageToClipboard = l;
var r = require("../app/368170.js");
var o = a(require("../app/556869.js"));
function l() {
  return "clipboard" in navigator && "ClipboardItem" in window && r.UA.browser !== r.BROWSER_TYPE.SAFARI;
}