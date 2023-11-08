var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    displayAuthor: n,
    displayType: a,
    onMessageClick: m,
    msg: h
  } = e;
  const g = (0, p.useModelValues)(e.mediaData, ["mediaBlob", "mediaStage", "parsedVcards", "size"]);
  const E = () => {
    h.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: c.WEBC_RMR_REASON_CODE.MSG_RENDER,
      isUserInitiated: false
    });
  };
  (0, f.useEffect)(() => {
    if ((0, i.isTrusted)(h.unsafe()) && g.size <= u.MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
      E();
    }
  }, []);
  const v = (0, f.useCallback)((0, r.default)(e => {
    let {
      parsedVcards: t
    } = e;
    if (t) {
      return t.map(e => ({
        parsedVcard: e,
        displayName: (0, s.vcardGetNameFromParsed)(e) || d.fbt._("Contact", null, {
          hk: "30KbdJ"
        }),
        isMultiVcard: false,
        vcard: ""
      }));
    } else {
      return [];
    }
  }), []);
  const {
    parsedVcards: _
  } = g;
  if (_) {
    if (_.length > 1) {
      return f.default.createElement(o.default, {
        msg: h,
        vcardList: v({
          parsedVcards: _
        }),
        quotedMsg: e.getQuotedMsg(),
        displayType: a,
        displayAuthor: n
      });
    } else {
      return f.default.createElement(l.default, {
        msg: h,
        vcard: _[0],
        quotedMsg: e.getQuotedMsg(),
        displayType: a,
        displayAuthor: n,
        onMessageClick: m
      });
    }
  }
  return f.default.createElement(l.default, {
    mediaStage: (t = h.mediaData) === null || t === undefined ? undefined : t.mediaStage,
    msg: h,
    vcard: null,
    quotedMsg: e.getQuotedMsg(),
    displayType: a,
    displayAuthor: n,
    onMessageClick: m,
    downloadMedia: (0, i.isTrusted)(h.unsafe()) ? E : null,
    placeholder: true
  });
};
var r = a(require("../app/939067.js"));
var o = a(require("./579043.js"));
var l = a(require("./359596.js"));
var i = require("../app/435711.js");
var u = require("../app/962260.js");
var s = require("../app/517660.js");
var c = require("../app/885313.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var p = require("../app/655241.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}