var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifiedBusinessNameUpdateType = undefined;
exports.convertPrivacyModeFromStorageType = p;
exports.createOrUpdateVerifiedBusinessName = function () {
  return c.apply(this, arguments);
};
exports.getAllVerifiedNames = function () {
  return (0, s.getVerifiedBusinessNameTable)().all();
};
exports.getPrivacyMode = function () {
  return d.apply(this, arguments);
};
exports.getVerifiedBusinessNameRecord = u;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./257845.js");
var s = require("./830627.js");
const l = require("../vendor/76672.js").Mirrored(["Replace", "Merge"]);
function u(e) {
  return (0, s.getVerifiedBusinessNameTable)().get(f(e));
}
function c() {
  return (c = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l.Replace;
    const r = (0, s.getVerifiedBusinessNameTable)();
    const a = f(e);
    const o = (0, i.default)((0, i.default)({}, t), {}, {
      id: a
    });
    if (n === l.Replace) {
      yield r.createOrReplace(o);
    } else {
      yield r.createOrMerge(a, o);
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, a.default)(function* (e) {
    const t = yield u(e);
    if ((t == null ? undefined : t.privacyMode) == null) {
      return null;
    } else {
      return p(t.privacyMode);
    }
  })).apply(this, arguments);
}
function p(e) {
  const t = o.ActualActorsEnumType.cast(e.actualActors);
  const n = o.HostStorageEnumType.cast(e.hostStorage);
  if (t == null || n == null) {
    return null;
  } else {
    return {
      actualActors: t,
      hostStorage: n,
      privacyModeTs: e.privacyModeTs
    };
  }
}
function f(e) {
  if (e.isLid()) {
    return e.toString();
  } else {
    return e.user;
  }
}
exports.VerifiedBusinessNameUpdateType = l;