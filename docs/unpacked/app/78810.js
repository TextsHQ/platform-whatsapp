var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMediaMsgs = function (e, t, n) {
  if (!t) {
    return;
  }
  const r = (0, u.unproxy)(e);
  const a = Array.isArray(t) ? t : [t];
  const s = [];
  const d = [];
  const p = [];
  const f = [];
  a.forEach(e => {
    if (c(e)) {
      s.push(e);
    }
    if ((0, o.getAsDoc)(e)) {
      p.push(e);
    }
    if ((0, l.getGalleryLinks)(e).some(t => t.href !== e.matchedText)) {
      d.push(e);
    }
    if ((0, o.getAsProduct)(e) != null) {
      f.push(e);
    }
  });
  const {
    mediaMsgs: _
  } = r;
  if (_ && s.length) {
    const e = (0, i.default)((0, i.default)({}, n), {}, {
      silent: false
    });
    _.add(s, e);
  }
  if (r.linkMsgs && d.length) {
    r.linkMsgs.add(d, n);
  }
  if (r.docMsgs && p.length) {
    r.docMsgs.add(p, n);
  }
  if (r.productMsgs && f.length) {
    r.productMsgs.add(f, n);
  }
};
exports.constructMediaMsgs = function (e, t) {
  const n = (0, u.unproxy)(e);
  if (!t) {
    return n.getMediaMsgs();
  }
  if (t.isViewOnce) {
    return new a.default();
  }
  let r;
  if (n.getMediaMsgs().includes(t) || t.msgChunk === n.msgs) {
    r = n.getMediaMsgs();
    r.hasMediaAfter = false;
  } else {
    r = new a.default();
  }
  if (!r.includes(t)) {
    if (t.msgChunk) {
      r.add(t.msgChunk.filter(c));
    } else {
      r.add(t);
    }
  }
  return r;
};
exports.countAllMedia = function (e) {
  const t = (0, u.unproxy)(e);
  if (t.promises.sendDelete != null) {
    return Promise.resolve(0);
  }
  return Promise.all([t.getMediaMsgs(), t.getLinkMsgs(), t.getDocMsgs()].map(e => e.count(t))).then(e => e.reduce((e, t) => e + (t != null ? t : 0), 0));
};
exports.resetMediaMsgs = function (e) {
  const t = (0, u.unproxy)(e);
  const {
    mediaMsgs: n,
    linkMsgs: r,
    docMsgs: i,
    productMsgs: a
  } = t;
  if (n) {
    n.delete();
    n.queryMedia({
      chat: t
    });
  }
  if (r) {
    r.delete();
    r.queryLinks(t);
  }
  if (i) {
    i.delete();
    i.queryDocs(t);
  }
  if (a) {
    a.delete();
    a.queryProducts(t);
  }
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./110820.js"));
var o = require("./163755.js");
var s = require("./787742.js");
var l = require("./44118.js");
var u = require("./163139.js");
function c(e) {
  return (0, s.getIsMedia)(e) && !e.isViewOnce;
}