var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrQueryUsyncInfo = function () {
  return m.apply(this, arguments);
};
exports.queryUsyncBusiness = function () {
  return h.apply(this, arguments);
};
exports.usyncContactCached = function () {
  return new a.default(d.queryPhoneExists, {
    maxCached: 100,
    maxAge: 360000,
    shouldCache: e => !!e
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./8490.js"));
var o = require("./984330.js");
var s = require("./768798.js");
var l = r(require("./913430.js"));
var u = require("./351053.js");
var c = require("./177938.js");
var d = require("./803737.js");
var p = require("./622868.js");
var f = require("./692269.js");
var _ = require("./328606.js");
var g = r(require("./556869.js"));
function m() {
  return (m = (0, i.default)(function* (e) {
    let {
      forceUsync: t
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      forceUsync: false
    };
    const n = c.ContactCollection.get(e);
    var r;
    var i;
    if (t !== true && n != null && (n.name != null || u.ChatCollection.get(e) != null)) {
      return {
        wid: e,
        biz: n.isBusiness,
        bizInfo: n.isBusiness ? {
          verifiedName: {
            level: (0, l.default)(n.verifiedLevel),
            serial: null,
            name: n.verifiedName,
            isApi: Boolean(n.isEnterprise),
            isSmb: Boolean(n.isSmb),
            privacyMode: n.privacyMode
          }
        } : null,
        disappearingMode: {
          duration: (r = n.disappearingModeDuration) !== null && r !== undefined ? r : 0,
          settingTimestamp: (i = n.disappearingModeSettingTimestamp) !== null && i !== undefined ? i : 0
        }
      };
    }
    const a = yield (0, d.queryWidExists)(e);
    if (a) {
      const {
        biz: t,
        bizInfo: r,
        disappearingMode: i
      } = a;
      if (t && r != null) {
        yield (0, s.updateVerifiedInfo)(e, r.verifiedName);
      }
      if (i && n != null) {
        yield (0, p.updateDisappearingModeForContact)(e, i.duration, i.settingTimestamp);
      }
      return a;
    }
    return Promise.reject((0, g.default)("Invalid number"));
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    __LOG__(2)`[usync] querying for biz info`;
    const t = new _.USyncUser();
    const n = new f.USyncQuery();
    if (e.isLid()) {
      t.withId(e);
    } else {
      n.withContactProtocol();
      t.withPhone(e.toString());
    }
    n.withUser(t);
    n.withBusinessProtocol();
    const r = yield n.execute();
    const i = r.error.all || r.error.contact;
    __LOG__(2)`[usync] biz info response`;
    if (i) {
      throw new o.ServerStatusCodeError(i.errorCode, i.errorText);
    }
    const {
      list: a
    } = r;
    if (a.length !== 1) {
      return null;
    }
    const {
      id: l,
      business: u
    } = a[0];
    if (u != null) {
      yield (0, s.updateVerifiedInfo)(e, u.verifiedName);
    }
    return {
      wid: l,
      biz: u != null,
      bizInfo: u
    };
  })).apply(this, arguments);
}