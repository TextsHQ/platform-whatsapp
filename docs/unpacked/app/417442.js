var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCtwaBizDataSharingSettingJob = function () {
  return s.apply(this, arguments);
};
exports.setCtwaBizDataSharingSettingJob = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./694196.js");
var o = require("./669738.js");
function s() {
  return (s = (0, i.default)(function* () {
    const e = yield (0, a.sendGetPrivacySettingRPC)();
    switch (e.name) {
      case "GetPrivacySettingResponseError":
        {
          const {
            code: t,
            text: n
          } = e.value.errorIQErrorBadRequestOrFeatureNotImplementedOrServiceUnavailableOrInternalServerErrorMixinGroup.value;
          __LOG__(4, undefined, new Error())`[ctwa][data_sharing] GetPrivacySettingResponseError: fetch data sharing setting failed`;
          return null;
        }
      default:
        e.name;
        return e.value.privacySmbDataSharingSettingMixin.value;
    }
  })).apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield (0, o.sendSetPrivacySettingRPC)({
      smbDataSharingSettingMixinArgs: {
        anyValue: e
      }
    });
    switch (t.name) {
      case "SetPrivacySettingResponseError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorIQErrorBadRequestOrFeatureNotImplementedOrServiceUnavailableOrInternalServerErrorMixinGroup.value;
          __LOG__(4, undefined, new Error())`[ctwa][data_sharing] SetPrivacySettingResponseError: changing data sharing setting failed`;
          return null;
        }
      default:
        var n;
        var r;
        t.name;
        if (t.value.privacySmbDataSharingSettingMixin == null) {
          __LOG__(4, undefined, new Error())`[ctwa][data_sharing] GetPrivacySettingResponseError: changing data sharing setting returned null value`;
        }
        if ((n = (r = t.value.privacySmbDataSharingSettingMixin) === null || r === undefined ? undefined : r.value) !== null && n !== undefined) {
          return n;
        } else {
          return null;
        }
    }
  })).apply(this, arguments);
}