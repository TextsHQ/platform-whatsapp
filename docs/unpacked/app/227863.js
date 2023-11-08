var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElectronDeprecationStage2ExpirationTextSubtitle = function (e) {
  const t = (0, i.secondsUntil)(e);
  const n = Math.floor(t / i.DAY_SECONDS);
  if (n > 0) {
    return a.fbt._({
      "*": "The app you're using now will not be available in {num-days} days",
      _1: "The app you're using now will not be available in 1 day"
    }, [a.fbt._plural(n, "num-days")], {
      hk: "XGOiA"
    });
  }
  const r = Math.floor(t / i.HOUR_SECONDS);
  if (r > 0) {
    return a.fbt._({
      "*": "The app you're using now will not be available in {num-hours} hours",
      _1: "The app you're using now will not be available in 1 hour"
    }, [a.fbt._plural(r, "num-hours")], {
      hk: "26sn0g"
    });
  }
  const o = Math.max(1, Math.floor(t / i.MINUTE_SECONDS));
  return a.fbt._({
    "*": "The app you're using now will not be available in {num-minutes} minutes",
    _1: "The app you're using now will not be available in 1 minute"
  }, [a.fbt._plural(o, "num-minutes")], {
    hk: "3T9zUH"
  });
};
exports.getElectronDeprecationStage2ExpirationTextTitle = function (e) {
  const t = (0, i.secondsUntil)(e);
  const n = Math.floor(t / i.DAY_SECONDS);
  if (n > 0) {
    return a.fbt._({
      "*": "This app will not be available in {num-days} days",
      _1: "This app will not be available in 1 day"
    }, [a.fbt._plural(n, "num-days")], {
      hk: "dyuLu"
    });
  }
  const r = Math.floor(t / i.HOUR_SECONDS);
  if (r > 0) {
    return a.fbt._({
      "*": "This app will not be available in {num-hours} hours",
      _1: "This app will not be available in 1 hour"
    }, [a.fbt._plural(r, "num-hours")], {
      hk: "ZB5Q4"
    });
  }
  const o = Math.max(1, Math.floor(t / i.MINUTE_SECONDS));
  return a.fbt._({
    "*": "This app will not be available in {num-minutes} minutes",
    _1: "This app will not be available in 1 minute"
  }, [a.fbt._plural(o, "num-minutes")], {
    hk: "1hQ54W"
  });
};
exports.getNextExpirationTextUpdateTimestamp = function (e) {
  const t = (0, i.secondsUntil)(e);
  if (Math.floor(t / i.DAY_SECONDS) > 1) {
    return (0, i.futureUnixTime)(i.DAY_SECONDS + 1);
  }
  if (Math.floor(t / i.HOUR_SECONDS) > 1) {
    return (0, i.futureUnixTime)(i.HOUR_SECONDS + 1);
  }
  return (0, i.futureUnixTime)(i.MINUTE_SECONDS + 1);
};
var i = require("./632157.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));