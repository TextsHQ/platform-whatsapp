Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorMessage = function (e) {
  const {
    onlyOneTryRemaining: t,
    emptyInputEntered: n,
    incorrectPasscode: i,
    triesExceeded: a
  } = e;
  if (a) {
    return r.fbt._("Incorrect password entered too many times. Please log out.", null, {
      hk: "1Dn3k1"
    });
  }
  if (t) {
    if (n == null) {
      return r.fbt._("Retry limit reached. You will be logged out if your next attempt fails.", null, {
        hk: "1Vpz0l"
      });
    }
    if (n === true) {
      return r.fbt._("Empty password. You will be logged out if your next attempt fails.", null, {
        hk: "341aFr"
      });
    }
    if (i && n === false) {
      return r.fbt._("Incorrect password. You will be logged out if your next attempt fails.", null, {
        hk: "3st1FR"
      });
    }
  }
  if (n === true) {
    return r.fbt._("Empty password. Try again.", null, {
      hk: "4uz66M"
    });
  }
  if (i) {
    return r.fbt._("Incorrect password. Try again.", null, {
      hk: "2GUxic"
    });
  }
};
var r = require("../vendor/548360.js");