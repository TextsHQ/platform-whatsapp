var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS = exports.ServerPropsImpl = exports.ServerProps = exports.DEFAULT_MAX_FILE_SIZE_BYTES = undefined;
exports.getMaxFilesSizeServerProp = function () {
  return d.maxFileSize;
};
var i = require("./481173.js");
var a = r(require("./665810.js"));
var o = require("./694630.js");
require("./755985.js");
var s = require("./130945.js");
const l = 104857600;
exports.DEFAULT_MAX_FILE_SIZE_BYTES = l;
exports.UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS = 3;
const u = 604800;
class c extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.serverPropsVersion = (0, i.prop)();
    this.gifProvider = (0, i.prop)("tenor");
    this.maxParticipants = (0, i.prop)(256);
    this.maxSubject = (0, i.prop)(25);
    this.maxElectronFileSize = (0, i.prop)(l);
    this.maxFileSize = (0, i.prop)(l);
    this.streamingUploadChunkSize = (0, i.prop)(0);
    this.groupDescLength = (0, i.prop)(512);
    this.ephemeralMessagesAllowedValues = (0, i.prop)("604800");
    this.wallpapersV2 = (0, i.prop)(false);
    this.hfmStringChanges = (0, i.prop)(false);
    this.mmsVCacheAggregationEnabled = (0, i.prop)(false);
    this.mmsHotContentTimespan = (0, i.prop)(0);
    this.mmsCatV1ForwardHotOverrideEnabled = (0, i.prop)(false);
    this.pttConversationWaveform = (0, i.prop)(false);
    this.pttOotPlayback = (0, i.prop)(false);
    this.pttPausableEnabled = (0, i.prop)(false);
    this.pttPlaybackSpeedEnabled = (0, i.prop)(false);
    this.pttRememberPlayPosition = (0, i.prop)(false);
    this.mmsMediaKeyTTL = (0, i.prop)(1 / 0);
    this.webSendDocumentThumbInMessageDisabled = (0, i.prop)(false);
    this.webDownloadStatusThumbMmsEnabled = (0, i.prop)(false);
    this.statusVideoMaxDuration = (0, i.prop)(30);
    this.groupCallMaxParticipants = (0, i.prop)(0);
    this.webVoipMacOsMinVersion = (0, i.prop)("");
    this.webVoipWindowsOsMinVersion = (0, i.prop)("");
    this.syncdInlineMutationsMaxCount = (0, i.prop)(1000);
    this.syncdPatchProtobufMaxSize = (0, i.prop)(100);
    this.syncdKeyMaxUseDays = (0, i.prop)(30);
    this.syncdWaitForKeyTimeoutDays = (0, i.prop)(2);
    this.syncdAdditionalMutations = (0, i.prop)(1);
    this.syncdSentinelTimeoutSeconds = (0, i.prop)(3);
    this.syncdPinChatEnabled = (0, i.prop)(false);
    this.syncdQPLLoggingEnabled = (0, i.prop)(false);
    this.webPaymentBackgroundEnabled = (0, i.prop)(false);
    this.webBizProfileOptions = (0, i.prop)(3);
    this.shopsProductGrid = (0, i.prop)(false);
    this.greenAlertBannerDuration = (0, i.prop)(0);
    this.webProductListMessagePageSize = (0, i.prop)(o.PRODUCT_PAGE_SIZE);
    this.blockCatalogCreationEcommerceComplianceIndia = (0, i.prop)(false);
    this.ecommerceComplianceIndia = (0, i.prop)(false);
    this.smbEcommerceComplianceIndiaM4 = (0, i.prop)(false);
    this.smbEcommerceComplianceIndiaM4_5 = (0, i.prop)(false);
    this.webLogUploadDownloadCrashes = (0, i.prop)(false);
    this.webMdMmsSyncDeletionRequest = (0, i.prop)(true);
    this.maxKeys = (0, i.prop)(200);
  }
  delete() {
    super.delete();
    this.updateProps({});
  }
  initialize() {
    super.initialize();
  }
  updateProps(e) {
    let t = e;
    s.Global.set({
      webcBucket: t.bucket || null
    });
    this.__props.forEach(e => {
      let n = t[e];
      if (n === undefined) {
        n = e === "serverPropsVersion" ? this.serverPropsVersion : this.getDefault(e);
      }
      this.set(e, n);
    });
  }
  extendAndOverrideFromURLParams(e) {
    const t = new a.default(window.location.search);
    const n = e;
    this.__props.forEach(e => {
      if (t.has(e) === true) {
        const r = t.get(e);
        if (r == null) {
          return;
        }
        if (r === "true" || r === "false") {
          n[e] = r === "true";
        } else if (isNaN(r) || isNaN(parseFloat(r))) {
          n[e] = r;
        } else {
          n[e] = parseFloat(r);
        }
      }
    });
    return n;
  }
  getEphemeralMessagesAllowedValues() {
    try {
      return this.ephemeralMessagesAllowedValues.split(",").map(e => parseInt(e, 10));
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`[ephemeral] incorrect type for ephemeralMessagesAllowedValues`;
      SEND_LOGS("ephemeral");
      return [u];
    }
  }
}
exports.ServerPropsImpl = c;
c.Proxy = "serverProps";
const d = new ((0, i.defineModel)(c))({
  id: "1"
});
exports.ServerProps = d;