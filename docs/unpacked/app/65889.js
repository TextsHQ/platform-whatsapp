var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireCallCollection = function () {
  return y.apply(this, arguments);
};
exports.requireChatCollection = function () {
  return g.apply(this, arguments);
};
exports.requireClearAppStates = function () {
  return p.apply(this, arguments);
};
exports.requireContactCollection = function () {
  return l.apply(this, arguments);
};
exports.requireEmojiAssetMapCreator = function () {
  return c.apply(this, arguments);
};
exports.requireEmojiConfig = function () {
  return u.apply(this, arguments);
};
exports.requireHandleVideoStreamingRequest = function () {
  return f.apply(this, arguments);
};
exports.requireLabelCollection = function () {
  return _.apply(this, arguments);
};
exports.requireMain = function () {
  return s.apply(this, arguments);
};
exports.requireMsgCollection = function () {
  return m.apply(this, arguments);
};
exports.requireSetFrontendHandlers = function () {
  return v.apply(this, arguments);
};
exports.requireSetWorkerSafeHandlers = function () {
  return T.apply(this, arguments);
};
exports.requireStatusV3Collection = function () {
  return d.apply(this, arguments);
};
exports.requireStickerPackCollection = function () {
  return h.apply(this, arguments);
};
exports.requireVoip = function () {
  return E.apply(this, arguments);
};
exports.requireVoipCommonDisabled = function () {
  return S.apply(this, arguments);
};
exports.setMainBundleModules = function (e) {
  a.resolve(e);
  return e;
};
var i = r(require("../vendor/348926.js"));
const a = new (require("./950376.js").Resolvable)();
function o() {
  return a.promise;
}
function s() {
  return (s = (0, i.default)(function* () {
    return (yield o()).requireMain();
  })).apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* () {
    return (yield o()).requireContactCollection();
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* () {
    return (yield o()).requireEmojiConfig();
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* () {
    return (yield o()).requireEmojiAssetMapCreator();
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {
    return (yield o()).requireStatusV3Collection();
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* () {
    return (yield o()).requireClearAppStates();
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    return (yield o()).requireHandleVideoStreamingRequest();
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    return (yield o()).requireLabelCollection();
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* () {
    return (yield o()).requireChatCollection();
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    return (yield o()).requireMsgCollection();
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    return (yield o()).requireStickerPackCollection();
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    return (yield o()).requireCallCollection();
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* () {
    return (yield o()).requireVoip();
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    return (yield o()).requireVoipCommonDisabled();
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* () {
    return (yield o()).requireSetFrontendHandlers();
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* () {
    return (yield o()).requireSetWorkerSafeHandlers();
  })).apply(this, arguments);
}