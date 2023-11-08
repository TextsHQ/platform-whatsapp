var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoolOffNux = undefined;
exports.resetCoolOffNuxDate = function () {
  Object.keys(i.CoolOffPeriodKeys).forEach(e => {
    u.default.setUser(i.CoolOffPeriodKeys[e]);
  });
};
exports.resetNuxCoolOff = function (e) {
  u.default.setUser((0, i.asCoolOffNuxType)(e));
};
exports.shouldShowNUX = function (e, t) {
  return new f(e, t).shouldShow();
};
var r = a(require("../vendor/81109.js"));
var o = require("./240045.js");
var l = require("./302505.js");
var i = require("../app/95589.js");
var u = a(require("../app/53575.js"));
var s = require("./493885.js");
var c = a(require("../vendor/730381.js"));
const d = {
  COOL_OFF_DURATION_IN_DAYS: 4,
  VIEWS_BEFORE_COOL_OFF_IN_DAYS: 2,
  CLICKS_BEFORE_COOL_OFF: 1,
  MAX_DISMISSES: 1,
  MAX_CLICKS: 2,
  MAX_VIEWS_IN_DAYS: 4,
  COOL_OFF_START_STORAGE_KEY: i.CoolOffPeriodKeys.DEFAULT,
  storageAccessors: {
    getNuxOptions: e => u.default.getUser(e),
    setNuxOptions: (e, t) => {
      u.default.setUser(e, (0, r.default)((0, r.default)({}, t), {}, {
        lastViewedDay: t.lastViewedDay.toISOString()
      }));
    },
    getCoolOffData: e => u.default.getUser(e),
    setCoolOffData: (e, t) => {
      u.default.setUser(e, (0, r.default)((0, r.default)({}, t), {}, {
        startDate: t.startDate.toISOString()
      }));
    }
  }
};
class f {
  constructor(e, t) {
    this.key = (0, i.asCoolOffNuxType)(e);
    this.config = (0, r.default)((0, r.default)({}, d), t);
    this.nux = this._getNUXOptions();
    this.coolOffData = this._getCoolOffData();
  }
  _getInitialCoolOffOptions() {
    return {
      viewDaysBeforeCoolOff: 0,
      totalViewDays: 0,
      clicks: 0,
      dismisses: 0,
      lastViewedDay: (0, c.default)(0)
    };
  }
  _getNUXOptions() {
    const e = this.config.storageAccessors.getNuxOptions(this.key);
    if (e != null) {
      const t = typeof e.clicks == "number" ? e.clicks : null;
      const n = typeof e.dismisses == "number" ? e.dismisses : null;
      const a = typeof e.totalViewDays == "number" ? e.totalViewDays : null;
      const r = typeof e.viewDaysBeforeCoolOff == "number" ? e.viewDaysBeforeCoolOff : null;
      const o = typeof e.lastViewedDay == "string" ? (0, c.default)(e.lastViewedDay) : null;
      if (t != null && n != null && r != null && a != null && o != null) {
        return {
          clicks: t,
          dismisses: n,
          viewDaysBeforeCoolOff: r,
          totalViewDays: a,
          lastViewedDay: o
        };
      }
    }
    const t = this._getInitialCoolOffOptions();
    this._setNUXOptions(t);
    return t;
  }
  _getCoolOffData() {
    const e = this.config.storageAccessors.getCoolOffData(this.config.COOL_OFF_START_STORAGE_KEY);
    if (e != null) {
      const t = typeof e.startDate == "string" ? (0, c.default)(e.startDate) : null;
      const n = typeof e.duration == "number" ? e.duration : null;
      if (t != null && n != null) {
        return {
          startDate: t,
          duration: n
        };
      }
    }
    return this._setLastCoolOffStartDay((0, c.default)(0));
  }
  _setLastCoolOffStartDay(e) {
    const t = {
      startDate: e,
      duration: this.config.COOL_OFF_DURATION_IN_DAYS
    };
    this.config.storageAccessors.setCoolOffData(this.config.COOL_OFF_START_STORAGE_KEY, (0, r.default)((0, r.default)({}, t), {}, {
      startDate: t.startDate
    }));
    return t;
  }
  _startNewCoolOff(e) {
    const t = this._setLastCoolOffStartDay(e);
    this.coolOffData = t;
  }
  _setNUXOptions(e) {
    this.config.storageAccessors.setNuxOptions(this.key, (0, r.default)((0, r.default)({}, e), {}, {
      lastViewedDay: e.lastViewedDay
    }));
  }
  _updateNUXOptions(e) {
    this._setNUXOptions(Object.assign(this.nux, e));
  }
  _isTodayCoolOff() {
    const e = (0, l.getCurrentMoment)().diff(this.coolOffData.startDate, "days", true);
    return e >= 0 && e < this.coolOffData.duration;
  }
  _logEvent(e) {
    if (this.config.metricField) {
      const t = {
        bannerType: this.config.metricField,
        bannerOperation: e
      };
      if (this.config.bannerId != null) {
        t.bannerId = this.config.bannerId;
      }
      new o.BannerEventWamEvent(t).commit();
    }
  }
  shouldShow() {
    const {
      totalViewDays: e,
      dismisses: t,
      clicks: n
    } = this.nux;
    const {
      MAX_VIEWS_IN_DAYS: a,
      MAX_DISMISSES: r,
      MAX_CLICKS: o
    } = this.config;
    return e < a && t < r && n < o && !this._isTodayCoolOff();
  }
  show() {
    let {
      lastViewedDay: e,
      viewDaysBeforeCoolOff: t,
      totalViewDays: n
    } = this.nux;
    const a = (0, l.getCurrentMoment)();
    if (!e.isSame(a, "day")) {
      t++;
      n++;
      if (t === this.config.VIEWS_BEFORE_COOL_OFF_IN_DAYS) {
        t = 0;
        this._startNewCoolOff((0, c.default)(a).add(1, "days"));
      }
      this._updateNUXOptions({
        viewDaysBeforeCoolOff: t,
        totalViewDays: n,
        lastViewedDay: a
      });
      this._logEvent(s.BANNER_OPERATIONS.SHOWN);
      if (this.config.logImpression) {
        this.config.logImpression();
      }
    }
  }
  click() {
    const e = this.nux.clicks + 1;
    if (e === this.config.CLICKS_BEFORE_COOL_OFF) {
      this.startCoolOffToday();
    }
    this._updateNUXOptions({
      clicks: e
    });
    this._logEvent(s.BANNER_OPERATIONS.CLICK);
  }
  dismiss() {
    this._updateNUXOptions({
      dismisses: this.nux.dismisses + 1
    });
    this._startNewCoolOff((0, l.getCurrentMoment)());
    this._logEvent(s.BANNER_OPERATIONS.DISMISS);
  }
  startCoolOffToday() {
    this._startNewCoolOff((0, l.getCurrentMoment)());
  }
}
exports.CoolOffNux = f;