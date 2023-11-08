var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processGroupMessage = m;
exports.processPhoneNumberMapping = function () {
  return y.apply(this, arguments);
};
exports.processUserMessage = _;
var i = r(require("../vendor/348926.js"));
var a = require("./12643.js");
var o = require("./139374.js");
var s = require("./487837.js");
var l = require("./459857.js");
var u = require("./669050.js");
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    const {
      recipientPn: r,
      recipientUsername: i,
      chat: c,
      author: d
    } = e;
    if ((0, l.isMeAccount)(d)) {
      if (i != null) {
        yield (0, o.setUsernamesJob)([{
          userId: (0, u.toUserWid)(c),
          username: i
        }]);
      }
      if ((t == null ? undefined : t.origin) !== "username") {
        if (r != null) {
          yield Promise.all([(0, s.createLidPnMappingsJob)([{
            lid: (0, u.toUserWid)(c),
            pn: (0, u.toUserWid)(r)
          }], n), (0, s.updateLidMetadataJob)([{
            lid: (0, u.toUserWid)(c),
            data: {
              shareOwnPn: false
            }
          }])]);
        } else {
          const e = yield (0, a.getContactRecord)(c);
          if (!(e != null && (e == null ? undefined : e.shareOwnPn) === true)) {
            (0, s.updateLidMetadataJob)([{
              lid: (0, u.toUserWid)(c),
              data: {
                shareOwnPn: true
              }
            }]);
          }
        }
      }
      return;
    }
    const {
      displayName: p
    } = e;
    if (p != null) {
      yield (0, s.updateLidMetadataJob)([{
        lid: (0, u.toUserWid)(d),
        data: {
          displayNameLID: p
        }
      }]);
    }
    if ((t == null ? undefined : t.origin) === "username") {
      const {
        username: t
      } = e;
      const n = [];
      const r = (0, u.toUserWid)(d);
      if (t != null) {
        n.push({
          userId: r,
          username: t
        });
      } else {
        n.push({
          userId: r
        });
      }
      yield (0, o.setUsernamesJob)(n);
    }
    const {
      senderPn: f
    } = e;
    if (f != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: (0, u.toUserWid)(d),
        pn: (0, u.toUserWid)(f)
      }], n);
    }
    if ((t == null ? undefined : t.origin) !== "username" && f == null) {
      yield (0, s.updateLidMetadataJob)([{
        lid: (0, u.toUserWid)(d),
        data: {
          shareOwnPn: true
        }
      }]);
    }
  })).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    const {
      recipientLid: r,
      chat: i,
      author: a
    } = e;
    if ((0, l.isMeAccount)(a) && r != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: (0, u.toUserWid)(r),
        pn: (0, u.toUserWid)(i)
      }], n);
    }
    const {
      senderLid: o
    } = e;
    if (o != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: (0, u.toUserWid)(o),
        pn: (0, u.toUserWid)(a)
      }], n);
    }
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    const {
      author: r
    } = e;
    if (r.isLid()) {
      return c(e, t, n);
    } else {
      return p(e, t, n);
    }
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const {
      participantPn: n,
      participantLid: r,
      author: i
    } = e;
    if (n != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: (0, u.toUserWid)(i),
        pn: (0, u.toUserWid)(n)
      }], t);
    }
    if (r != null) {
      yield (0, s.createLidPnMappingsJob)([{
        lid: (0, u.toUserWid)(r),
        pn: (0, u.toUserWid)(i)
      }], t);
    }
    const {
      displayName: a
    } = e;
    if (!((0, l.isMeAccount)(i) || a == null)) {
      yield (0, s.updateLidMetadataJob)([{
        lid: (0, u.toUserWid)(i),
        data: {
          displayNameLID: a
        }
      }]);
    }
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    const {
      chat: r
    } = e;
    if (r.isUser()) {
      return _(e, t, n);
    } else if (r.isGroup()) {
      return m(e, n);
    } else {
      return undefined;
    }
  })).apply(this, arguments);
}