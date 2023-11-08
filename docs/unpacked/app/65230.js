Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.attrEnum("verified_level", r.MSG_VERIFIED_LEVEL);
  const n = e.hasContent() ? e.contentBytes() : null;
  const o = e.maybeAttrString("serial");
  const {
    serial: s,
    name: l,
    isApi: u,
    isSmb: c
  } = n && function (e) {
    const t = (0, a.getParsedProtoObjects)(e);
    if (t == null ? undefined : t.details) {
      const {
        name: e,
        serial: n,
        isApi: r,
        isSmb: i
      } = (0, a.extractCertificateDetailsParams)(t.details);
      return {
        name: e,
        serial: String(n),
        isApi: r,
        isSmb: i
      };
    }
  }(n) || {};
  const d = i.ActualActorsEnumType.cast(e.maybeAttrInt("actual_actors"));
  const p = i.HostStorageEnumType.cast(e.maybeAttrInt("host_storage"));
  const f = e.maybeAttrInt("privacy_mode_ts");
  return {
    level: t,
    serial: o || s,
    name: l,
    isApi: u === true,
    isSmb: c === true,
    privacyMode: d != null && p != null && f != null ? {
      actualActors: d,
      hostStorage: p,
      privacyModeTs: f
    } : null
  };
};
var r = require("./883310.js");
var i = require("./257845.js");
var a = require("./929840.js");