var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return m.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/417405.js");
var l = require("../app/250281.js");
var i = require("../app/716358.js");
var u = require("../app/347387.js");
var s = require("../app/984330.js");
var c = require("../app/533494.js");
var d = require("../app/669050.js");
var f = a(require("../app/556869.js"));
const p = new u.WapParser("ctwaContext", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("context");
  if (e.hasChild("error")) {
    (function (e) {
      const t = e && e.maybeAttrString("code");
      const n = e && e.maybeAttrString("text");
      __LOG__(3)`getCtwaContext error: code ${t} text ${n}`;
    })(e.child("error"));
    throw (0, f.default)("invalid response");
  }
  const n = {
    sourceUrl: t.child("source").child("url").contentString(),
    sourceId: t.child("source").child("id").contentString(),
    sourceType: t.child("source").child("type").contentString()
  };
  if (t.hasChild("headline")) {
    n.title = t.child("headline").contentString();
  }
  if (t.hasChild("body")) {
    n.description = t.child("body").contentString();
  }
  if (t.hasChild("thumbnail")) {
    if (t.child("thumbnail").hasChild("url")) {
      n.thumbnailUrl = t.child("thumbnail").child("url").contentString();
    }
    if (t.child("thumbnail").hasChild("bytes")) {
      n.thumbnail = (0, o.encodeB64)(t.child("thumbnail").child("bytes").contentBytes());
    }
    if (t.hasChild("video")) {
      n.mediaUrl = t.child("video").child("url").contentString();
      n.mediaType = c.ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO;
    } else {
      n.mediaType = c.ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE;
    }
  }
  return n;
});
function m() {
  return (m = (0, r.default)(function* (e, t, n) {
    const a = (0, d.createWid)(e).toString({
      legacy: true
    });
    const r = (0, i.wap)("iq", {
      xmlns: "fb:thrift_iq",
      id: (0, i.generateId)(),
      type: "get",
      to: i.S_WHATSAPP_NET,
      smax_id: "4"
    }, (0, i.wap)("account_number", null, a), (0, i.wap)("code", null, t), (0, i.wap)("expected_source_url", null, n));
    const o = yield (0, l.deprecatedSendIq)(r, p);
    if (o.success) {
      return o.result;
    }
    throw new s.ServerStatusCodeError(o.errorCode);
  })).apply(this, arguments);
}