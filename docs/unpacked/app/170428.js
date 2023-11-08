var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applySubscriptions = E;
exports.runSubscriptionsManager = h;
var a = i(require("../vendor/348926.js"));
var o = require("./672076.js");
var s = require("./8304.js");
var l = require("./984330.js");
var u = require("./72696.js");
var c = require("./146254.js");
var d = require("./619588.js");
var p = require("./315650.js");
var f = require("./113150.js");
var _ = require("./459857.js");
const g = {
  minTimeout: 1000,
  maxTimeout: 16000,
  retries: 5,
  signal: new r().signal
};
const m = 86400000;
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* () {
    if ((0, u.subscriptionFetchEnabled)()) {
      try {
        yield (0, o.exponentialBackoff)(g, (e, t) => v().catch(n => {
          if (n instanceof l.ServerStatusCodeError) {
            switch (n.statusCode) {
              case 500:
                __LOG__(3)`Subscriptions manager query failed, retriable error: ${n.message}, failCount ${t}`;
                return e(n);
            }
          }
          throw n;
        }));
      } catch (e) {
        __LOG__(4, true, new Error(), true)`Subscriptions manager pull failed, error: ${e}`;
        SEND_LOGS("Subscriptions manager run failed");
        if (!(e instanceof l.ServerStatusCodeError && e.statusCode === 500)) {
          return;
        }
      }
      yield (0, s.delayMs)(m);
      if ((0, _.getMaybeMeUser)()) {
        h();
      }
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e) {
    if ((0, u.subscriptionFetchEnabled)()) {
      const t = ["ACTIVE", "FREE_TRIAL", "IN_GRACE_PERIOD"];
      const n = e.map(e => {
        const n = {
          id: e.id,
          isAutoRenewing: e.status === "ACTIVE",
          isDeactivated: !t.includes(e.status),
          expirationDate: e.expirationDate !== undefined ? parseInt(e.expirationDate, 10) : undefined
        };
        if (e.status === "CANCELED" && (n.expirationDate || 0) > new Date().getTime() / 1000) {
          n.isDeactivated = false;
        }
        return n;
      });
      yield (0, d.getSubscriptionTable)().bulkCreateOrMerge(n);
      p.SubscriptionCollection.add(n, {
        merge: true
      });
      try {
        (0, c.update)();
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`subscription sync: error PremiumAccessEngine ${e}`;
        SEND_LOGS("PremiumAccessEngine");
      }
    }
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* () {
    if (!(0, _.getMaybeMeUser)()) {
      return;
    }
    const e = yield (0, f.querySubscriptions)();
    yield E(e);
  })).apply(this, arguments);
}