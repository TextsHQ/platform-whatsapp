var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = exports.Pending = exports.Download = exports.DocState = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("./89022.js");
var l = require("./839872.js");
var i = require("./503998.js");
var u = require("../app/956113.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
const d = {
  position: "g0rxnol2",
  display: "p357zi0d",
  flex: "kk3akd72",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "tddarlmj",
  height: "jbxl65f1",
  color: "mnd5airb"
};
const f = {
  position: "lhggkp7q",
  top: "hd6b059k",
  left: "qpqgzaqc"
};
const p = e => {
  let {
    children: t,
    onClick: n
  } = e;
  const a = n ? {
    onClick: n
  } : {};
  return s.default.createElement("div", (0, r.default)({
    className: (0, c.default)(d)
  }, a), t);
};
exports.DocState = p;
exports.Download = e => {
  let {
    onClick: t
  } = e;
  return s.default.createElement(p, {
    onClick: t || (() => {})
  }, s.default.createElement(l.AudioDownloadIcon, null));
};
const m = {
  color: "progress"
};
exports.Pending = e => {
  let {
    outgoingMsg: t,
    value: n,
    canCancel: a = false
  } = e;
  const l = n == null ? {
    outgoingMsg: t
  } : m;
  return s.default.createElement(p, null, s.default.createElement("div", {
    className: (0, c.default)(f)
  }, s.default.createElement(u.Spinner, (0, r.default)({
    stroke: 3,
    size: 32,
    value: n
  }, l))), a ? s.default.createElement(o.AudioCancelNoborderIcon, null) : null);
};
exports.Upload = () => s.default.createElement(p, null, s.default.createElement(i.AudioUploadIcon, null));