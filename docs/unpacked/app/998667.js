var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyAllOrphansAndUnsupported = function () {
  return m.apply(this, arguments);
};
exports.checkOrphanAgents = function () {
  return h.apply(this, arguments);
};
exports.checkOrphanChatAssignments = function () {
  return y.apply(this, arguments);
};
exports.checkOrphanChats = p;
exports.checkOrphanMessages = c;
exports.checkOrphanMutations = function () {
  return u.apply(this, arguments);
};
exports.checkOrphanUserStatusMutes = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./526835.js");
var o = require("./53648.js");
var s = require("./122393.js");
var l = require("./272961.js");
function u() {
  return (u = (0, i.default)(function* (e, t) {
    if ((0, l.isSyncdDisabled)()) {
      return Promise.resolve();
    }
    yield Promise.all([c(e), p(t)]);
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    yield _(e, s.SyncModelType.Msg);
  })).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    yield _(e, s.SyncModelType.Chat);
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if ((0, l.isSyncdDisabled)()) {
      return Promise.resolve();
    }
    const n = yield (0, a.getSyncActionsByModelInfosInTransaction)(e.map(e => [e, t, s.SyncActionState.Orphan]));
    yield (0, o.applyIndividualMutations)(n);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    if ((0, l.isSyncdDisabled)()) {
      return Promise.resolve();
    }
    __LOG__(2)`syncd: start applyAllOrphansAndUnsupported`;
    const e = yield (0, a.getSyncActionsByActionStatesInTransaction)([s.SyncActionState.Orphan, s.SyncActionState.Unsupported]);
    yield (0, o.applyIndividualMutations)(e);
    __LOG__(2)`syncd: end applyAllOrphansAndUnsupported`;
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    yield _(e, s.SyncModelType.Agent);
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    yield _(e, s.SyncModelType.ChatAssignment);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    yield _(e, s.SyncModelType.UserStatusMute);
  })).apply(this, arguments);
}