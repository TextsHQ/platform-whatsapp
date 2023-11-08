var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPORTED_DIRTY_TYPE = exports.SUPPORTED_DIRTY_PROTOCOLS = undefined;
exports.handleDirtyBits = function () {
  return R.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./280015.js");
var o = require("./122393.js");
var s = require("./696155.js");
var l = require("./853670.js");
var u = require("./359987.js");
var c = require("./273500.js");
var d = require("./780549.js");
var p = r(require("./797137.js"));
var f = require("./791509.js");
var _ = require("./73225.js");
var g = require("./280464.js");
var m = require("./359484.js");
var h = require("./359099.js");
var y = require("./274054.js");
var E = require("./126592.js");
var S = require("./87429.js");
var v = require("./459857.js");
const T = {
  groups: "groups",
  account_sync: "account_sync",
  syncd_app_state: "syncd_app_state",
  newsletter_metadata: "newsletter_metadata"
};
exports.SUPPORTED_DIRTY_TYPE = T;
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let t = e.map(e => s.ACCOUNT_SYNC_TYPE.cast(e)).filter(Boolean);
    if (t.length === 0) {
      t = Array.from(s.ACCOUNT_SYNC_TYPE.members());
    }
    yield Promise.all(t.map(e => e === s.ACCOUNT_SYNC_TYPE.DEVICES ? P() : e === s.ACCOUNT_SYNC_TYPE.PICTURE ? (0, s.getAndUpdateProfilePicture)() : void (e === s.ACCOUNT_SYNC_TYPE.PRIVACY ? (0, s.updatePrivacySettings)() : e === s.ACCOUNT_SYNC_TYPE.BLOCKLIST ? (0, s.updateBlocklist)() : e === s.ACCOUNT_SYNC_TYPE.NOTICE && O())));
  })).apply(this, arguments);
}
function b(e) {
  return e.patches != null && e.patches.length > 0 || e.snapshot != null;
}
function C() {
  d.Cmd.once(d.APP_STATE_SYNC_COMPLETED, e => {
    const t = e.some(b);
    new f.MdAppStateDirtyBitsWamEvent({
      dirtyBitsFalsePositive: !t
    }).commit();
  });
  return (0, a.markCollectionsForSync)(Array.from(o.CollectionName.members()));
}
function P() {
  const e = String((0, v.getMeUser)());
  if (m.OfflineMessageHandler.isResumeFromRestartComplete()) {
    if (m.OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
      return (0, l.addUserToPendingDeviceSync)([e]);
    } else {
      return (0, s.getDevices)("notification");
    }
  } else {
    g.OfflinePendingDeviceCache.addOfflinePendingDevice(e, null);
    return Promise.resolve();
  }
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* () {
    yield S.TosManager.run();
    const e = [(0, _.getNewsletterProducerTos)(), (0, _.getNewsletterConsumerTos)()];
    const t = [];
    e.map(e => {
      const n = {
        id: e,
        accepted: S.TosManager.getState(e) === h.NOTICE_STATUS.ACCEPTED
      };
      t.push(n);
    });
    return (0, u.frontendFireAndForget)("updateUserDisclosures", {
      userDisclosures: t
    });
  })).apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e) {
    const {
      supported: t,
      unsupported: n,
      protocols: r
    } = e;
    __LOG__(2)`handleDirtyBits: handle dirty bits, supported: ${t.map(e => e.type).join(",")}, unsupported: ${n.map(e => e.type).join(",")}`;
    const i = [...n, ...t];
    yield Promise.all(t.map(e => {
      const t = e.type;
      if (t === T.groups) {
        return (0, p.default)().then(() => (0, y.queryAndUpdateAllGroupMetadata)());
      } else if (t === T.newsletter_metadata) {
        return (0, p.default)().then(() => (0, E.queryAndUpdateAllNewsletterMetadataAction)(E.NewsletterMetadataUpdateEntryPoint.DirtyBit, {
          messageCount: 1
        }));
      } else if (t === T.account_sync) {
        return M(r);
      } else if (t === T.syncd_app_state) {
        return C();
      } else {
        return undefined;
      }
    }));
    return (0, c.clearDirtyBits)(i);
  })).apply(this, arguments);
}
exports.SUPPORTED_DIRTY_PROTOCOLS = {
  devices: "devices",
  picture: "picture",
  privacy: "privacy",
  blocklist: "blocklist",
  notice: "notice"
};