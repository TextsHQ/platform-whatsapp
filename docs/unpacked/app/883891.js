var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./887341.js");
var o = require("./72696.js");
var s = require("./79672.js");
var l = r(require("./528420.js"));
var u = require("./417442.js");
var c = require("./317285.js");
var d = require("./287738.js");
var p = r(require("./298188.js"));
var f = require("./163755.js");
var _ = require("./885908.js");
var g = require("./772358.js");
const m = {
  CHAT: "CHAT",
  MESSAGE: "MESSAGE"
};
const h = e => {
  const t = l.default.get(e.id);
  if (!t) {
    return null;
  }
  const {
    conversionData: n,
    conversionSource: r
  } = t;
  return (0, _.getCTWAEligibilityFromConversion)({
    conversionData: n,
    conversionSource: r
  });
};
const y = function () {
  var e = (0, i.default)(function* () {
    if (!(0, o.smbDataSharingConsentEnabled)()) {
      return null;
    }
    try {
      const e = yield (0, u.getCtwaBizDataSharingSettingJob)();
      if (e) {
        c.CTWADataSharingModel.setValue(e);
        if (e === a.ENUM_FALSE_NOTSET_TRUE.false) {
          p.default.enableUpsell();
        }
      }
      return e;
    } catch (e) {
      __LOG__(4, undefined, new Error())`[ctwa][data_sharing] fetchDataSharingSettingAndUpdateModel: fetch data sharing setting failed`;
      return null;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
var E = {
  SMB_DATA_SHARING_ALLOWED_SOURCE: _.SMB_DATA_SHARING_ALLOWED_SOURCE,
  SmbDataSharingLabelTargetValues: m,
  getCTWAEligibilityFromChat: h,
  shouldDisplayDataSharingSetting: () => {
    const e = c.CTWADataSharingModel.getValue();
    return (e === a.ENUM_FALSE_NOTSET_TRUE.true || e === a.ENUM_FALSE_NOTSET_TRUE.false) && (0, o.shouldShowSMBDataSharingSettings)();
  },
  shouldShowOrderDataSharingDialog: e => !(h(e) == null || !(0, o.smbDataSharingConsentEnabled)() || d.DataSharingOptInCoolOffModel.isCoolOffActive()) && c.CTWADataSharingModel.getValue() === a.ENUM_FALSE_NOTSET_TRUE.notset,
  shouldShowLabelDataSharingDialog: (e, t) => {
    let n;
    if (t === m.CHAT) {
      n = o.isSMBLabelsDataSharingEnabledForChats;
    } else {
      if (t !== m.MESSAGE) {
        __LOG__(4, undefined, new Error())`[ctwa][data_sharing] shouldShowLabelDataSharingDialog: target value must be a chat or a message`;
        return false;
      }
      n = o.isSMBLabelsDataSharingEnabledForMessages;
    }
    return !(h(e) == null || !n() || d.DataSharingOptInCoolOffModel.isCoolOffActive()) && c.CTWADataSharingModel.getValue() === a.ENUM_FALSE_NOTSET_TRUE.notset;
  },
  shouldDisplayDataSharingOrderOptOutOrUpsell: (e, t, n) => {
    if (n < 1 || !(0, o.smbDataSharingConsentEnabled)() || l.default.get(e.id) == null) {
      return false;
    }
    const r = c.CTWADataSharingModel.getValue();
    const i = r === a.ENUM_FALSE_NOTSET_TRUE.true;
    const s = r === a.ENUM_FALSE_NOTSET_TRUE.false && t === "order-create" && p.default.isUpsellEnabled();
    return i || s;
  },
  shouldDisplayDataSharingLabelOptOutOrUpsell: e => {
    if (e.length === 0) {
      return false;
    }
    const t = [];
    const n = e[0];
    if (n instanceof g.Msg) {
      if (!(0, o.isSMBLabelsDataSharingEnabledForMessages)()) {
        return false;
      }
      t.push((0, f.getChat)(n));
    } else {
      if (!(0, o.isSMBLabelsDataSharingEnabledForChats)()) {
        return false;
      }
      e.forEach(e => {
        if (e instanceof s.Chat) {
          t.push(e);
        }
      });
    }
    if (!t.some(e => h(e) != null)) {
      return false;
    }
    const r = c.CTWADataSharingModel.getValue();
    const i = r === a.ENUM_FALSE_NOTSET_TRUE.true;
    const l = r === a.ENUM_FALSE_NOTSET_TRUE.false && p.default.isUpsellEnabled();
    return i || l;
  },
  fetchDataSharingSettingAndUpdateModel: y
};
exports.default = E;