Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./131736.js");
var i = require("./277594.js");
var a = require("./840669.js");
var o = require("./612975.js");
var s = require("./433541.js");
var l = require("./222125.js");
var u = require("./309998.js");
var c = require("./661062.js");
var d = require("./103435.js");
var p = new Map([[u.DatabaseNames.ModelStorage, o.versionToRollout], [u.DatabaseNames.FtsStorage, r.versionToRollout], [u.DatabaseNames.JobsStorage, i.versionToRollout], [u.DatabaseNames.LruMediaStorage, a.versionToRollout], [u.DatabaseNames.OffdStorage, s.versionToRollout], [u.DatabaseNames.QplStorage, l.versionToRollout], [u.DatabaseNames.SignalStorage, c.versionToRollout], [u.DatabaseNames.WorkerStorage, d.versionToRollout]]);
exports.default = p;