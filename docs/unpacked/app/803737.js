var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryExist = m;
exports.queryPhoneExists = function (e) {
  return m({
    type: "phone",
    phone: e
  });
};
exports.queryUsernameExists = function () {
  return E.apply(this, arguments);
};
exports.queryWidExists = function (e) {
  const t = e.isLid() ? "" : `+${e.toString()}`;
  if (e.isLid()) {
    return m({
      type: "lid",
      wid: e
    });
  }
  return m({
    type: "phone",
    phone: t
  });
};
exports.queryWidUsernameExists = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./986120.js");
var o = require("./12643.js");
var s = require("./984330.js");
var l = require("./139374.js");
var u = require("./487837.js");
var c = require("./129417.js");
var d = require("./692269.js");
var p = require("./328606.js");
var f = r(require("./124928.js"));
var _ = require("./669050.js");
var g = r(require("./556869.js"));
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    if (e.type === "lid" && !e.wid.isLid()) {
      throw (0, g.default)("queryExist is provided with invalid lid");
    }
    const t = new p.USyncUser();
    const n = new d.USyncQuery();
    if (e.type === "phone") {
      n.withContactProtocol();
      t.withPhone(e.phone);
    } else {
      t.withId(e.wid);
    }
    n.withLidProtocol();
    if (e.type === "phone") {
      const n = `${(0, a.extractDigits)(e.phone)}@c.us`;
      if (f.default.isWid(n)) {
        const e = (0, o.getCurrentLid)((0, _.createUserWid)(n));
        if (e) {
          t.withLid(e);
        }
      }
    }
    n.withUser(t);
    n.withBusinessProtocol();
    n.withDisappearingModeProtocol();
    if ((0, c.usernameUsyncEnabled)()) {
      n.withUsernameProtocol();
    }
    const r = yield n.execute();
    const i = r.error.all || r.error.contact;
    if (i) {
      throw new s.ServerStatusCodeError(i.errorCode, i.errorText);
    }
    const {
      list: m
    } = r;
    if (m.length !== 1) {
      return null;
    }
    const {
      id: h,
      contact: y,
      business: E,
      disappearing_mode: S,
      lid: v,
      username: T
    } = m[0];
    if (e.type === "phone" && (y == null ? undefined : y.type) !== "in") {
      return null;
    }
    const M = {
      wid: h,
      biz: E != null,
      bizInfo: E
    };
    if (S) {
      M.disappearingMode = {
        duration: S.duration,
        settingTimestamp: S.t
      };
    }
    if (v != null) {
      yield (0, u.createLidPnMappingsJob)([{
        pn: h,
        lid: (0, _.createUserWid)(v, "lid")
      }], true);
    }
    if ((0, c.usernameUsyncEnabled)() && T != null) {
      yield (0, l.setUsernamesJob)([{
        userId: h,
        username: T
      }]);
    } else {
      yield (0, l.setUsernamesJob)([{
        userId: h,
        username: undefined
      }]);
    }
    return M;
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    if (!e.isLid()) {
      return;
    }
    __LOG__(2)`[usync] querying contact: ${e} for username info`;
    const t = new p.USyncUser();
    const n = new d.USyncQuery();
    t.withId(e);
    n.withUser(t);
    n.withUsernameProtocol();
    const r = yield n.execute();
    const i = r.error.all || r.error.contact;
    __LOG__(2)`[usync] username info response`;
    if (i) {
      throw new s.ServerStatusCodeError(i.errorCode, i.errorText);
    }
    const {
      list: a
    } = r;
    if (a.length !== 1) {
      return null;
    }
    const o = a[0];
    const {
      id: u,
      username: c
    } = o;
    if (c != null) {
      yield (0, l.setUsernamesJob)([{
        userId: u,
        username: c
      }]);
    } else if (!o.hasOwnProperty("username")) {
      yield (0, l.setUsernamesJob)([{
        userId: u,
        username: undefined
      }]);
    }
    return {
      wid: u,
      username: c,
      biz: false
    };
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    __LOG__(2)`[usync] querying username: ${e} for contact info`;
    const t = new p.USyncUser();
    const n = new d.USyncQuery();
    n.withUser(t);
    n.withContactProtocol();
    t.withUsername(e);
    const r = yield n.execute();
    const i = r.error.all || r.error.contact;
    __LOG__(2)`[usync] username info response`;
    if (i) {
      throw new s.ServerStatusCodeError(i.errorCode, i.errorText);
    }
    const {
      list: a
    } = r;
    if (a.length !== 1) {
      return null;
    }
    const o = a[0];
    const {
      id: u,
      contact: c
    } = o;
    const {
      username: f,
      type: _
    } = c;
    if (_ === "out") {
      return null;
    } else {
      if (f != null) {
        yield (0, l.setUsernamesJob)([{
          userId: u,
          username: f
        }]);
      } else {
        yield (0, l.setUsernamesJob)([{
          userId: u,
          username: undefined
        }]);
      }
      return {
        wid: u,
        username: f,
        biz: false
      };
    }
  })).apply(this, arguments);
}