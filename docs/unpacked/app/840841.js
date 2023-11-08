var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
r(require("../vendor/81109.js"));
var i = require("./685639.js");
require("./724976.js");
var a = new class {
  constructor() {
    this.dbLockStats = new Map();
    this.dbReadWriteStats = new Map();
    this.seen = new Map();
    this.reports = {};
    this.removeOlderLockStatsTimer = new i.ShiftTimer(() => {});
    this.logReadWriteStatsTimer = new i.ShiftTimer(() => {});
  }
  recordReadStat(e) {}
  recordWriteStat(e) {}
  recordLockStat(e) {}
  lockReport() {
    return [];
  }
  logDbReadWriteStats() {}
  export() {
    return "";
  }
  getAllReports() {
    return {};
  }
}();
exports.default = a;