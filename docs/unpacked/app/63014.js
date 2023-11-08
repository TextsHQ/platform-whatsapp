var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SKEW_CHANGE_EVENT = exports.MUTE_ALWAYS_EXPIRATION_SENTINEL = exports.HOUR24_FORMAT_CHANGE_EVENT = exports.Clock = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./632157.js");
var o = require("./660666.js");
var s = r(require("./395654.js"));
var l = require("./714574.js");
var u = r(require("./932325.js"));
var c = require("./256354.js");
var d = r(require("./627162.js"));
var p = r(require("./556869.js"));
var f = require("../vendor/548360.js");
var _ = r(require("../vendor/730381.js"));
r(require("../vendor/667294.js"));
const g = ["fi", "id", "ms", "ms-my"];
const m = "skew_change";
exports.SKEW_CHANGE_EVENT = m;
const h = "hour24_format_change";
exports.HOUR24_FORMAT_CHANGE_EVENT = h;
exports.MUTE_ALWAYS_EXPIRATION_SENTINEL = -1;
class y extends s.default {
  constructor() {
    super();
    this.is24h = false;
    this.skewMS = 0;
    this.skew = 0;
    if (Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions) {
      const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (e) {
        __LOG__(2)`Intl.DateTimeFormat().resolvedOptions().timeZone is ${e}`;
      } else {
        __LOG__(2)`Intl.DateTimeFormat().resolvedOptions().timeZone does not exist`;
      }
      switch (e) {
        case "America/Sao_Paulo":
          this.timeZoneHardCode = "America/Belem";
          break;
        case "America/Campo_Grande":
        case "America/Cuiaba":
          this.timeZoneHardCode = "America/Porto_Velho";
      }
    }
  }
  getIs24Hour() {
    return this.is24h;
  }
  setIs24Hour(e) {
    if (e !== this.is24h) {
      this.is24h = e;
      d.default.setHour24(e);
      this.trigger(h);
    }
  }
  setIs24HourBasedOnLocale() {
    const e = d.default.getHour24();
    if (e != null) {
      this.setIs24Hour(e);
    } else {
      this.setIs24Hour(c.LOCALES_THAT_PREFER_24HOUR_TIME.has(u.default.getLocale()));
    }
  }
  setSkew(e) {
    if (Math.abs(e) > 60000) {
      __LOG__(2)`Setting large clockskew: ${e}ms`;
    }
    const t = this.skewMS;
    this.skewMS = e;
    this.skew = Math.round(e / 1000);
    if (Math.abs(t - this.skewMS) > 1000) {
      this.trigger(m);
    }
  }
  getSkew() {
    return this.skew;
  }
  convertGlobalToLocalUnixTime(e) {
    return e + this.skew;
  }
  relativeStr(e) {
    const t = e + this.skew;
    if (t >= (0, _.default)().startOf("day").unix()) {
      return this._timestampStr(t);
    } else {
      return this._dateRelativeStr(t, false);
    }
  }
  relativeDateStr(e) {
    return this._dateRelativeStr(e + this.skew, false);
  }
  relativeDateAndTimeStr(e) {
    return this._dateRelativeStr(e + this.skew, true);
  }
  monthStr(e) {
    const t = e + this.skew;
    const n = t * 1000;
    if (t >= (0, _.default)().startOf("month").unix() && t <= (0, _.default)().endOf("month").unix()) {
      return f.fbt._("This Month", null, {
        hk: "3BBgGL"
      });
    } else if (t >= (0, _.default)().startOf("year").unix() && t <= (0, _.default)().endOf("year").unix()) {
      return Intl.DateTimeFormat(_.default.locale(), {
        month: "long"
      }).format(n);
    } else {
      return Intl.DateTimeFormat(_.default.locale(), {
        month: "long",
        year: "numeric"
      }).format(n);
    }
  }
  timeStr(e) {
    if (this.shouldUseIntlDateTimeFormat()) {
      const t = (e + this.skew) * 1000;
      let n = {
        hour12: !this.is24h,
        hour: "numeric",
        minute: "numeric"
      };
      let r = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      if (this.timeZoneHardCode != null) {
        n = (0, i.default)((0, i.default)({}, n), {}, {
          timeZone: this.timeZoneHardCode
        });
        r = (0, i.default)((0, i.default)({}, r), {}, {
          timeZone: this.timeZoneHardCode
        });
      }
      return `${Intl.DateTimeFormat(_.default.locale(), n).format(t)}, ${Intl.DateTimeFormat(_.default.locale(), r).format(t)}`;
    }
    return _.default.unix(e + this.skew).format(this.is24h ? `HH${this._hmsSeparator()}mm, l` : "LT, l");
  }
  timestampStr(e) {
    return this._timestampStr(e + this.skew);
  }
  timestampStrFormat() {
    if (this.is24h) {
      return `HH${this._hmsSeparator()}mm`;
    } else {
      return "LT";
    }
  }
  timestampHour(e) {
    const t = e + this.skew;
    const n = _.default.unix(t).hour();
    if (this.is24h) {
      return n;
    } else {
      return n % 12;
    }
  }
  textStatusExpiryStr(e) {
    const t = e + this.skew;
    this._timestampStr(t);
    this._dateRelativeStr(t, false);
    return f.fbt._("", null, {
      hk: "3TNgw7"
    });
  }
  newsletterDescriptionCreatedStr(e) {
    const t = this.daysDelta(e);
    const n = e + this.skew;
    const r = this._timestampStr(n);
    if (t === 0) {
      return f.fbt._("Created today at {time}", [f.fbt._param("time", r)], {
        hk: "30ODYG"
      });
    }
    if (t === 1) {
      return f.fbt._("Created yesterday at {time}", [f.fbt._param("time", r)], {
        hk: "4DouWj"
      });
    }
    if (t < 7) {
      const e = this._dateRelativeStr(n, false);
      return f.fbt._("Created {day} at {time}", [f.fbt._param("day", e), f.fbt._param("time", r)], {
        hk: "3jKaup"
      });
    }
    const i = this._dateRelativeStr(n, false);
    return f.fbt._("Created {date} at {time}", [f.fbt._param("date", i), f.fbt._param("time", r)], {
      hk: "34jLbA"
    });
  }
  createdStr(e) {
    const t = this.daysDelta(e);
    const n = e + this.skew;
    const r = this._timestampStr(n);
    if (t === 0) {
      return f.fbt._("Created today at {time}", [f.fbt._param("time", r)], {
        hk: "3pAHvf"
      });
    }
    if (t === 1) {
      return f.fbt._("Created yesterday at {time}", [f.fbt._param("time", r)], {
        hk: "rlNGE"
      });
    }
    if (t < 7) {
      const e = this._dateRelativeStr(n, false);
      return f.fbt._("Created {day} at {time}", [f.fbt._param("day", e), f.fbt._param("time", r)], {
        hk: "ze39H"
      });
    }
    const i = this._dateRelativeStr(n, false);
    return f.fbt._("Created {date} at {time}", [f.fbt._param("date", i), f.fbt._param("time", r)], {
      hk: "1BGRAS"
    });
  }
  groupCreatedByStr(e, t, n) {
    const r = this.daysDelta(e);
    const i = e + this.skew;
    const a = this._timestampStr(i);
    if (r === 0) {
      if (n) {
        return f.fbt._("Group created by you, today at {time}", [f.fbt._param("time", a)], {
          hk: "iXiVl"
        });
      } else {
        return f.fbt._("Group created by {name}, today at {time}", [f.fbt._param("name", t), f.fbt._param("time", a)], {
          hk: "fw38E"
        });
      }
    }
    if (r === 1) {
      if (n) {
        return f.fbt._("Group created by you, yesterday at {time}", [f.fbt._param("time", a)], {
          hk: "11GIEz"
        });
      } else {
        return f.fbt._("Group created by {name}, yesterday at {time}", [f.fbt._param("name", t), f.fbt._param("time", a)], {
          hk: "49uj1d"
        });
      }
    }
    if (r < 7) {
      const r = this._dayNameStr(e);
      if (n) {
        return f.fbt._("Group created by you, {on_day} at {time}", [f.fbt._param("on_day", r), f.fbt._param("time", a)], {
          hk: "2dwUQV"
        });
      } else {
        return f.fbt._("Group created by {name}, {on_day} at {time}", [f.fbt._param("name", t), f.fbt._param("on_day", r), f.fbt._param("time", a)], {
          hk: "34crrC"
        });
      }
    }
    const o = this._dateRelativeStr(i, false);
    if (n) {
      return f.fbt._("Group created by you, on {date} at {time}", [f.fbt._param("date", o), f.fbt._param("time", a)], {
        hk: "Rnryw"
      });
    } else {
      return f.fbt._("Group created by {name}, on {date} at {time}", [f.fbt._param("name", t), f.fbt._param("date", o), f.fbt._param("time", a)], {
        hk: "2w4lTa"
      });
    }
  }
  createdByOnDateStr(e, t) {
    const n = this._dateStr(e);
    if (t) {
      if ((0, o.getIsMe)(t)) {
        return f.fbt._("Created by you on {date}", [f.fbt._param("date", n)], {
          hk: "4vAzF8"
        });
      }
      if ((0, o.getIsMyContact)(t)) {
        return f.fbt._("Created by {name} on {date}", [f.fbt._param("name", (0, l.getFormattedName)(t)), f.fbt._param("date", n)], {
          hk: "w6Jgu"
        });
      }
    }
    return f.fbt._("Created on {date}", [f.fbt._param("date", n)], {
      hk: "16kFZm"
    });
  }
  suggestedOnDateStr(e) {
    const t = _.default.unix(e).format("l");
    return f.fbt._("Suggested on {date}", [f.fbt._param("date", t)], {
      hk: "7OIg6"
    });
  }
  communityCreatedByStr(e, t, n) {
    const r = this.daysDelta(e);
    const i = e + this.skew;
    const a = this._timestampStr(i);
    if (r === 0) {
      if (n) {
        return f.fbt._("Created by you, today at {time}", [f.fbt._param("time", a)], {
          hk: "1APjBQ"
        });
      } else {
        return f.fbt._("Created by {name}, today at {time}", [f.fbt._param("name", t), f.fbt._param("time", a)], {
          hk: "3aMutp"
        });
      }
    }
    if (r === 1) {
      if (n) {
        return f.fbt._("Created by you, yesterday at {time}", [f.fbt._param("time", a)], {
          hk: "3tKfYk"
        });
      } else {
        return f.fbt._("Created by {name}, yesterday at {time}", [f.fbt._param("name", t), f.fbt._param("time", a)], {
          hk: "2QSPRR"
        });
      }
    }
    if (r < 7) {
      const r = this._dayNameStr(e);
      if (n) {
        return f.fbt._("Created by you, {on-day} at {time}", [f.fbt._param("on-day", r), f.fbt._param("time", a)], {
          hk: "3LS4Zd"
        });
      } else {
        return f.fbt._("Created by {name}, {on-day} at {time}", [f.fbt._param("name", t), f.fbt._param("on-day", r), f.fbt._param("time", a)], {
          hk: "VjhAq"
        });
      }
    }
    const o = this._dateRelativeStr(i, false);
    if (n) {
      return f.fbt._("Created by you, on {date} at {time}", [f.fbt._param("date", o), f.fbt._param("time", a)], {
        hk: "49W8YX"
      });
    } else {
      return f.fbt._("Created by {name}, on {date} at {time}", [f.fbt._param("name", t), f.fbt._param("date", o), f.fbt._param("time", a)], {
        hk: "12CZNa"
      });
    }
  }
  _dayNameStr(e) {
    const t = e + this.skew;
    switch (_.default.unix(t).day()) {
      case 0:
        return f.fbt._("on Sunday", null, {
          hk: "3hQdLv"
        });
      case 1:
        return f.fbt._("on Monday", null, {
          hk: "4uZn7B"
        });
      case 2:
        return f.fbt._("on Tuesday", null, {
          hk: "4llPGV"
        });
      case 3:
        return f.fbt._("on Wednesday", null, {
          hk: "4afKlR"
        });
      case 4:
        return f.fbt._("on Thursday", null, {
          hk: "49dOXK"
        });
      case 5:
        return f.fbt._("on Friday", null, {
          hk: "3P0f1f"
        });
      case 6:
        return f.fbt._("on Saturday", null, {
          hk: "1I5myq"
        });
      default:
        throw (0, p.default)("Unexpected day number");
    }
  }
  untilStr(e) {
    if (e === -1) {
      return f.fbt._("Always", null, {
        hk: "26Zr18"
      });
    }
    const t = this.daysDelta(e);
    const n = e + this.skew;
    const r = this._timestampStr(n);
    if (t === 0) {
      return f.fbt._("Until today at {time}", [f.fbt._param("time", r)], {
        hk: "DnYUu"
      });
    }
    if (t === 1) {
      return f.fbt._("Until tomorrow at {time}", [f.fbt._param("time", r)], {
        hk: "12SQOs"
      });
    }
    if (t < 7) {
      const e = this._dateRelativeStr(n, false);
      return f.fbt._("Until {day} at {time}", [f.fbt._param("day", e), f.fbt._param("time", r)], {
        hk: "4BBEz3"
      });
    }
    const i = this._dateRelativeStr(n, false);
    return f.fbt._("Until {date} at {time}", [f.fbt._param("date", i), f.fbt._param("time", r)], {
      hk: "K19y5"
    });
  }
  lastSeenStr(e) {
    const t = this.daysDelta(e);
    const n = e + this.skew;
    const r = this._timestampStr(n);
    if (t === 0) {
      return f.fbt._("last seen today at {time}", [f.fbt._param("time", r)], {
        hk: "18DWyY"
      });
    }
    if (t === 1) {
      return f.fbt._("last seen yesterday at {time}", [f.fbt._param("time", r)], {
        hk: "3zoCiV"
      });
    }
    if (t < 7) {
      const e = this._dateRelativeStr(n, false);
      return f.fbt._("last seen {date} at {time}", [f.fbt._param("date", e), f.fbt._param("time", r)], {
        hk: "3PefxM"
      });
    }
    const i = this._dateRelativeStr(n, false);
    return f.fbt._("last seen {date} at {time}", [f.fbt._param("date", i), f.fbt._param("time", r)], {
      hk: "4CZSMU"
    });
  }
  daysDelta(e, t) {
    const n = _.default.unix(e).startOf("day");
    const r = (t === undefined ? (0, _.default)().startOf("day") : _.default.unix(t).startOf("day")).diff(n, "days");
    return Math.abs(r);
  }
  durationStr(e) {
    const t = typeof e == "string" ? parseInt(e, 10) : e;
    const n = _.default.utc(t * 1000);
    if (n.isValid()) {
      const e = t < a.HOUR_SECONDS ? "m:ss" : "H:mm:ss";
      return n.format(e);
    }
    return "";
  }
  _getShortTimeLeftStr(e) {
    const t = Math.floor(e / 86400);
    if (t > 0) {
      return {
        time: u.default.t(142, {
          days: t,
          _plural: t
        }),
        _plural: t
      };
    }
    const n = Math.floor(e / 3600);
    if (n > 0) {
      return {
        time: u.default.t(143, {
          hours: n,
          _plural: n
        }),
        _plural: n
      };
    }
    const r = Math.floor(e / 60);
    if (r > 0) {
      return {
        time: u.default.t(144, {
          minutes: r,
          _plural: r
        }),
        _plural: r
      };
    } else {
      return {
        time: u.default.t(145, {
          seconds: e,
          _plural: e
        }),
        _plural: e
      };
    }
  }
  timeLeftStr(e) {
    return u.default.t(149, this._getShortTimeLeftStr(e));
  }
  paymentTimestampStr(e) {
    const t = e + this.skew;
    const n = _.default.unix(t);
    const r = n.startOf("day");
    const i = (0, _.default)().startOf("day").diff(r, "days");
    if (i === 0) {
      return f.fbt._("today", null, {
        hk: "445Hu3"
      });
    }
    if (i === 1) {
      return f.fbt._("yesterday", null, {
        hk: "qICUM"
      });
    }
    if (!(i < 7)) {
      const e = n.format("MMMM d");
      return f.fbt._("on {date}", [f.fbt._param("date", e)], {
        hk: "32eCbW"
      });
    }
    switch (n.day()) {
      case 0:
      default:
        return f.fbt._("on Sunday", null, {
          hk: "2gwfdl"
        });
      case 1:
        return f.fbt._("on Monday", null, {
          hk: "4ww1V1"
        });
      case 2:
        return f.fbt._("on Tuesday", null, {
          hk: "3Bz1cZ"
        });
      case 3:
        return f.fbt._("on Wednesday", null, {
          hk: "493Z1"
        });
      case 4:
        return f.fbt._("on Thursday", null, {
          hk: "2pNhJx"
        });
      case 5:
        return f.fbt._("on Friday", null, {
          hk: "Tf9gq"
        });
      case 6:
        return f.fbt._("on Saturday", null, {
          hk: "1SPYjP"
        });
    }
  }
  pastParticipantOnDateAtTime(e, t) {
    const n = this.daysDelta(e);
    const r = e + this.skew;
    const i = this._timestampStr(r);
    if (n === 0) {
      return f.fbt._("{action} today at {time}", [f.fbt._param("action", t), f.fbt._param("time", i)], {
        hk: "lDUJQ"
      });
    }
    if (n === 1) {
      return f.fbt._("{action} yesterday at {time}", [f.fbt._param("action", t), f.fbt._param("time", i)], {
        hk: "3aI8Lj"
      });
    }
    const a = this._dateRelativeStr(r, false);
    return f.fbt._("{action} {date} at {time}", [f.fbt._param("action", t), f.fbt._param("date", a), f.fbt._param("time", i)], {
      hk: "2No8oD"
    });
  }
  membershipApprovalRequestSectionDate(e) {
    const t = this.daysDelta(e);
    const n = e + this.skew;
    if (t === 0) {
      return f.fbt._("Today", null, {
        hk: "iPr8R"
      });
    } else if (t === 1) {
      return f.fbt._("Yesterday", null, {
        hk: "3EEW9m"
      });
    } else {
      return _.default.unix(n).format("LL");
    }
  }
  _timestampStr(e) {
    if (this.shouldUseIntlDateTimeFormat()) {
      let t = {
        hour12: !this.is24h,
        hour: "numeric",
        minute: "numeric"
      };
      if (this.timeZoneHardCode != null) {
        t = (0, i.default)((0, i.default)({}, t), {}, {
          timeZone: this.timeZoneHardCode
        });
      }
      const n = Intl.DateTimeFormat(_.default.locale(), t).format(e * 1000);
      if (this.is24h) {
        return n.replace(/^24/, "00");
      } else {
        return n.replace(/^0/, "12");
      }
    }
    return _.default.unix(e).format(this.timestampStrFormat());
  }
  _dateStr(e) {
    if (this.shouldUseIntlDateTimeFormat()) {
      let t = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      if (this.timeZoneHardCode != null) {
        t = (0, i.default)((0, i.default)({}, t), {}, {
          timeZone: this.timeZoneHardCode
        });
      }
      return Intl.DateTimeFormat(_.default.locale(), t).format(e * 1000);
    }
    return _.default.unix(e).format("l");
  }
  _dateRelativeStr(e, t) {
    const n = (0, _.default)().startOf("day");
    const r = _.default.unix(e).startOf("day");
    const i = n.diff(r, "days");
    const a = this._timestampStr(e);
    if (i === 0) {
      if (t) {
        return f.fbt._("today at {time}", [f.fbt._param("time", a)], {
          hk: "31zq7p"
        });
      } else {
        return f.fbt._("today", null, {
          hk: "445Hu3"
        });
      }
    }
    if (i === 1) {
      if (t) {
        return f.fbt._("yesterday at {time}", [f.fbt._param("time", a)], {
          hk: "4zzLDM"
        });
      } else {
        return f.fbt._("yesterday", null, {
          hk: "qICUM"
        });
      }
    }
    if (!t && Math.abs(i) < 7) {
      return _.default.unix(e).format("dddd");
    }
    const o = this._dateStr(e);
    if (t) {
      return f.fbt._("{date} at {time}", [f.fbt._param("date", o), f.fbt._param("time", a)], {
        hk: "2P3yfr"
      });
    } else {
      return o;
    }
  }
  _hmsSeparator() {
    const e = _.default.locale();
    if (g.includes(e)) {
      return ".";
    } else {
      return ":";
    }
  }
  shouldUseIntlDateTimeFormat() {
    return Intl.DateTimeFormat && !c.LOCALE_DATE_TIME_CUSTOMIZATIONS[_.default.locale()] && !c.SHOULD_USE_MOMENT_LOCALE_FORMAT.has(_.default.locale());
  }
}
const E = new y();
exports.Clock = E;