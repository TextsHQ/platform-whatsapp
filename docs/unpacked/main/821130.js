var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSaver = undefined;
var r = require("../app/8304.js");
var o = require("../app/103440.js");
var l = require("./236714.js");
var i = a(require("../app/395767.js"));
var u = require("./262521.js");
var s = a(require("./339044.js"));
var c = a(require("../app/524173.js"));
var d = require("../app/114850.js");
var f = require("../app/223713.js");
var p = require("./425448.js");
var m = a(require("../vendor/667294.js"));
const h = new class {
  downloadData(e, t, n) {
    const a = window.URL.createObjectURL(e);
    const o = (0, l.createDataLink)(a);
    o.style.display = "none";
    o.download = `${t}${n}`;
    if (document.body) {
      document.body.appendChild(o);
    }
    o.click();
    if (document.body) {
      document.body.removeChild(o);
    }
    (0, r.delayMs)(100).then(() => {
      window.URL.revokeObjectURL(o.href);
    });
    return Promise.resolve();
  }
  initDownload(e) {
    let t = e;
    if (!(0, f.getModernizr)().adownload) {
      d.ModalManager.open(m.default.createElement(o.ConfirmPopup, {
        onOK: () => d.ModalManager.close(),
        okText: (0, i.default)("OK")
      }, m.default.createElement(p.SafariLimitedText, null)));
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      return void SEND_LOGS("safari, adownload is false in download mgr");
    }
    c.default.startDownloading();
    (0, u.getMultiMsgDownloadData)(t).then(e => {
      if (!e.url && !e.blob) {
        const e = t;
        __LOG__(4, undefined, new Error(), true)`Assertion failed! ${Array.isArray(e) ? "download a zip file" : `download ${e.id.toString()} type ${e.type} with state ${e.mediaData && e.mediaData.mediaStage}`}`;
        SEND_LOGS("download-url-creation-error");
      }
      const n = e.url || window.URL.createObjectURL(e.blob);
      [].concat(t).forEach(e => {
        var t;
        if ((0, s.default)(e)) {
          if (!((t = e.mediaObject) === null || t === undefined)) {
            t.clearBlob({
              reset: true
            });
          }
        }
      });
      const a = (0, l.createDataLink)(n);
      a.download = e.name;
      a.style.display = "none";
      if (Array.isArray(t) && t.length === 1) {
        t = t[0];
      }
      if (!a.href) {
        const e = t;
        __LOG__(4, undefined, new Error(), true)`Assertion failed! ${Array.isArray(e) ? "download a zip file" : `download ${e.id.toString()} type ${e.type} with state ${e.mediaData && e.mediaData.mediaStage}`}`;
        SEND_LOGS("no-download-url");
      }
      if (document.body) {
        document.body.appendChild(a);
      }
      a.click();
      if (document.body) {
        document.body.removeChild(a);
      }
      if (!e.url) {
        (0, r.delayMs)(100).then(() => {
          window.URL.revokeObjectURL(a.href);
        });
      }
    }).catch(e => {
      __LOG__(3)`Download failed, error: ${String(e)}`;
    });
  }
}();
exports.FileSaver = h;