var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATALOG_EXISTS = exports.BusinessProfileCollectionImpl = exports.BusinessProfileCollection = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./183660.js");
var s = require("./588613.js");
var l = require("./392125.js");
var u = require("./724472.js");
var c = require("./72696.js");
var d = require("./937356.js");
var p = require("./335898.js");
var f = require("./542358.js");
var _ = require("./780549.js");
var g = require("./177938.js");
var m = require("./263079.js");
var h = require("./791171.js");
var y = require("./937001.js");
var E = require("./669050.js");
exports.CATALOG_EXISTS = "catalog_exists";
class S extends l.BaseCollection {
  constructor() {
    super();
    this._inflightDbQueryMap = new Map();
    this.listenTo(y.ServerProps, "change:webBizProfileOptions", (e, t, n) => {
      if ((0, d.isDirectConnectionFlagChanged)(n, t)) {
        __LOG__(2)`[direct-connection] change in direct connection bit detected. marking relevant biz profiles from abprop numbers as stale`;
        this._markBizProfilesAsStale((0, m.directConnectionBusinessNumbersFromAbprop)());
      }
    });
    let e = (0, o.isABPropsAfterFirstSync)() ? (0, m.directConnectionBusinessNumbersFromAbprop)() : null;
    this.listenTo(_.Cmd, "on_ab_props_update", () => {
      try {
        const n = (0, m.directConnectionBusinessNumbersFromAbprop)();
        var t;
        if ((0, d.isDirectConnectionNumbersAbPropChanged)(e, n)) {
          this._markBizProfilesAsStale(Array.from(new Set(((t = e) !== null && t !== undefined ? t : []).concat(n))));
        }
        e = n;
      } catch (e) {
        __LOG__(4, true, new Error(), true)`[direct-connection] Failed to force update biz profiles on abprop biz numbers change`;
        SEND_LOGS("direct-connection-biz-number-abprop-sync-fail" + e);
      }
    });
  }
  findImpl(e) {
    return this._findAndParse(e, {
      queryCatalog: true
    });
  }
  _update(e, t) {
    return this._findAndParse(e, {
      queryCatalog: false,
      getMerchantCompliance: t == null ? undefined : t.getMerchantCompliance
    });
  }
  _findAndParse(e, t) {
    var n = this;
    let {
      queryCatalog: r,
      getMerchantCompliance: o
    } = t;
    return (0, a.default)(function* () {
      const t = n.gadd(e);
      if (!t.id.isUserNotPSA()) {
        __LOG__(2)`Store:BusinessProfile:_findAndParse businessProfile is only available to users (${String(e)})`;
        return Promise.resolve({
          id: e
        });
      }
      let a;
      let l = null;
      const d = (0, u.queryBusinessProfile)([{
        wid: t.id,
        tag: t.tag
      }], o);
      if ((0, c.isCustomURLViaBizProfileEnabled)()) {
        a = yield d;
      } else {
        const [e, n] = yield Promise.all([d, (0, u.queryCustomUrlPaths)(t.id).catch(e => {
          if (e.statusCode !== 404) {
            __LOG__(4, undefined, new Error(), true)`Error retrieving custom url ${e.message}`;
            SEND_LOGS("custom-url-get-error");
          }
        })]);
        a = e;
        if ((n == null ? undefined : n.paths) != null) {
          l = n.paths;
        }
      }
      if (!Array.isArray(a)) {
        __LOG__(3)`Received invalid business profile response`;
        return null;
      }
      if (a.length === 0) {
        __LOG__(2)`Store:BusinessProfile:_findAndParse No businessProfile found for ${String(e)}`;
        return {
          id: e
        };
      }
      const p = a[0];
      const {
        wid: _,
        tag: m
      } = p;
      const y = {
        id: _,
        tag: m,
        dataSource: "server"
      };
      const {
        profile: E
      } = p;
      if (E) {
        const n = g.ContactCollection.get(e);
        if (n && !n.isContactSyncCompleted) {
          n.set("isBusiness", true);
          n.set("forcedBusinessUpdateFromServer", true);
        }
        const a = (0, f.parseBusinessProfile)({
          id: p.wid,
          profile: E,
          queryCatalog: r,
          customUrlPaths: l
        });
        const o = t.dataSource === "placeholder" ? null : t.automatedType;
        const u = a.automatedType;
        yield (0, s.createOrMergeBusinessProfileRecord)({
          id: y.id,
          automatedType: a.automatedType,
          welcomeMsgProtocolMode: a.welcomeMsgProtocolMode,
          prompts: a.prompts,
          commands: a.commands,
          commandsDescription: a.commandsDescription
        });
        yield (0, h.handleBizBotAutomatedTypeTransition)(t.id, o, u);
        return (0, i.default)((0, i.default)({}, a), y);
      }
      return y;
    })();
  }
  fetchBizProfile(e) {
    const t = this.get(e);
    if (t) {
      t.markStale();
    }
    return this.find(e);
  }
  getValid(e) {
    const t = this.get(e);
    if (t == null ? undefined : t.isValid()) {
      return t;
    }
  }
  markProfileAsStale(e) {
    var t;
    if (!((t = this.get(e)) === null || t === undefined)) {
      t.markStale();
    }
  }
  hasBusinessProfileInCache(e) {
    return !!this.get(e);
  }
  _markBizProfilesAsStale(e) {
    var t = this;
    return (0, a.default)(function* () {
      yield Promise.all(e.map(e => (0, E.createUserWid)(e)).filter(e => t.hasBusinessProfileInCache(e)).map(e => {
        __LOG__(2)`[direct-connection] forcefully marking biz profile as stale`;
        t.markProfileAsStale(e);
      }));
    })();
  }
}
exports.BusinessProfileCollectionImpl = S;
S.model = p.BusinessProfile;
S.staleCollection = true;
const v = new S();
exports.BusinessProfileCollection = v;