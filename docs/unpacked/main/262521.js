var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgDownloadData = p;
exports.getMultiMsgDownloadData = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./278799.js");
var l = require("../app/196127.js");
var i = a(require("../app/756680.js"));
var u = require("../app/373070.js");
var s = require("../app/885313.js");
var c = require("./96941.js");
var d = a(require("../app/556869.js"));
function f() {
  return (f = (0, r.default)(function* (e) {
    const t = Array.isArray(e) ? e : [e];
    try {
      const e = yield Promise.all(t.map(e => p(e)));
      if (e.length > 1) {
        return {
          blob: yield (0, c.zipFiles)(e),
          name: (0, o.getDefaultName)({
            t: Math.round(Date.now() / 1000),
            type: "unknown",
            mimetype: "application/zip",
            isVcardOverMmsDocument: false,
            filename: "",
            vcardList: []
          })
        };
      }
      return e[0];
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`Failed to get msg download data: ${e.message}`;
      SEND_LOGS("msg-download-data-failed");
      throw e;
    }
  })).apply(this, arguments);
}
function p() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, r.default)(function* (e) {
    const t = "text/vcard";
    if (e.type === u.MSG_TYPE.VCARD) {
      return {
        name: (0, o.getDefaultName)(e),
        blob: new Blob([e.body], {
          type: t
        })
      };
    }
    if (e.type === u.MSG_TYPE.MULTI_VCARD) {
      return {
        name: (0, o.getDefaultName)(e),
        blob: new Blob([e.vcardList.map(e => e.vcard).join("\n")], {
          type: t
        })
      };
    }
    const n = h(e);
    if (n) {
      return n;
    }
    yield e.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: s.WEBC_RMR_REASON_CODE.DOCUMENT_DOWNLOAD,
      isUserInitiated: true
    });
    const a = h(e);
    if (a) {
      return a;
    }
    throw (0, d.default)("Unable to download because blob cannot be found");
  })).apply(this, arguments);
}
function h(e) {
  const {
    filehash: t,
    mediaBlob: n,
    renderableUrl: a
  } = e.mediaData;
  if (n instanceof i.default) {
    return {
      name: (0, o.getDefaultName)(e),
      url: a,
      blob: n.forceToBlob()
    };
  }
  const r = l.InMemoryMediaBlobCache.get(t);
  if (r) {
    return {
      blob: r,
      name: (0, o.getDefaultName)(e),
      url: l.InMemoryMediaBlobCache.getOrCreateURL(t)
    };
  } else {
    return null;
  }
}