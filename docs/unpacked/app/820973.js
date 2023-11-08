var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./111804.js");
var s = require("./347387.js");
var l = require("./757453.js");
const u = new s.WapParser("serverProps", e => {
  e.assertTag("iq");
  e.assertAttr("from", "s.whatsapp.net");
  const t = e.child("props");
  const n = {
    serverPropsVersion: t.attrInt("version")
  };
  t.forEachChildWithTag("prop", e => {
    switch (e.attrString("name")) {
      case "ephemeral_messages_allowed_values":
        n.ephemeralMessagesAllowedValues = e.attrString("value");
        break;
      case "gif_provider":
        n.gifProvider = e.attrInt("value") === 1 ? "giphy" : "tenor";
        break;
      case "group_call_max_participants":
        n.groupCallMaxParticipants = e.attrInt("value", 0);
        break;
      case "group_description_length":
        n.groupDescLength = e.attrInt("value");
        break;
      case "hfm_string_changes":
        n.hfmStringChanges = e.attrInt("value") === 1;
        break;
      case "image_quality":
        n.imageQuality = e.attrInt("value") / 100;
        break;
      case "max_participants":
        n.maxParticipants = e.attrInt("value") - 1;
        break;
      case "max_subject":
        n.maxSubject = e.attrInt("value");
        break;
      case "max_keys":
        n.maxKeys = e.attrInt("value");
        break;
      case "media":
        n.media = e.attrInt("value") * 1024 * 1024;
        break;
      case "mms_media_key_ttl":
        n.mmsMediaKeyTTL = e.attrInt("value");
        break;
      case "wallpapers_v2":
        n.wallpapersV2 = e.attrInt("value") === 1;
        break;
      case "shops_product_grid":
        n.shopsProductGrid = e.attrInt("value", 0) === 1;
        break;
      case "mms_hot_content_timespan_in_seconds":
        n.mmsHotContentTimespan = e.attrInt("value");
        break;
      case "mms_vcache_aggregation_enabled":
        n.mmsVCacheAggregationEnabled = e.attrInt("value") === 1;
        break;
      case "status_video_max_duration":
        n.statusVideoMaxDuration = e.attrInt("value");
        break;
      case "syncd_inline_mutations_max_count":
        n.syncdInlineMutationsMaxCount = e.attrInt("value");
        break;
      case "syncd_patch_protobuf_max_size":
        n.syncdPatchProtobufMaxSize = e.attrInt("value");
        break;
      case "syncd_key_max_use_days":
        n.syncdKeyMaxUseDays = e.attrInt("value");
        break;
      case "syncd_wait_for_key_timeout_days":
        n.syncdWaitForKeyTimeoutDays = e.attrInt("value");
        break;
      case "syncd_additional_mutations":
        n.syncdAdditionalMutations = e.attrInt("value");
        break;
      case "syncd_sentinel_timeout_seconds":
        n.syncdSentinelTimeoutSeconds = e.attrInt("value");
        break;
      case "md_pin_chat_enabled":
        n.syncdPinChatEnabled = e.attrInt("value") === 1;
        break;
      case "syncd_qpl_logging_enabled":
        n.syncdQPLLoggingEnabled = e.attrInt("value") === 1;
        break;
      case "web_biz_profile_options":
        n.webBizProfileOptions = e.attrInt("value");
        break;
      case "web_download_status_thumb_mms_enabled":
        n.webDownloadStatusThumbMmsEnabled = e.attrInt("value") === 1;
        break;
      case "web_send_document_thumb_in_message_disabled":
        n.webSendDocumentThumbInMessageDisabled = e.attrInt("value") === 1;
        break;
      case "web_voip_mac_os_min_version":
        n.webVoipMacOsMinVersion = e.attrString("value");
        break;
      case "web_voip_windows_os_min_version":
        n.webVoipWindowsOsMinVersion = e.attrString("value");
        break;
      case "mms_cat_v1_forward_hot_override_enabled":
        n.mmsCatV1ForwardHotOverrideEnabled = e.attrInt("value") === 1;
        break;
      case "ptt_conversation_waveform":
        n.pttConversationWaveform = e.attrInt("value") === 1;
        break;
      case "ptt_oot_playback":
        n.pttOotPlayback = e.attrInt("value") === 1;
        break;
      case "ptt_pausable_enabled":
        n.pttPausableEnabled = e.attrInt("value") === 1;
        break;
      case "ptt_playback_speed_enabled":
        n.pttPlaybackSpeedEnabled = e.attrInt("value") === 1;
        break;
      case "web_product_list_message_page_size":
        n.webProductListMessagePageSize = e.attrInt("value");
        break;
      case "ptt_remember_play_position":
        n.pttRememberPlayPosition = e.attrInt("value") === 1;
        break;
      case "max_electron_file_size":
        n.maxElectronFileSize = e.attrInt("value") * 1024 * 1024;
        break;
      case "max_file_size":
        n.maxFileSize = e.attrInt("value") * 1024 * 1024;
        break;
      case "web_log_upload_download_crashes":
        n.webLogUploadDownloadCrashes = e.attrInt("value") === 1;
        break;
      case "web_graphql_for_catalog_m1":
        n.webGraphQLForCatalogM1 = e.attrInt("value") === 1;
        break;
      case "web_md_mms_sync_deletion_request":
        n.webMdMmsSyncDeletionRequest = e.attrInt("value") === 1;
        break;
      case "web_payment_background_enabled":
        n.webPaymentBackgroundEnabled = e.attrInt("value") === 1;
        break;
      case "streaming_upload_chunk_size":
        n.streamingUploadChunkSize = e.attrInt("value") * 1024 * 1024;
    }
  });
  return {
    values: n,
    attributes: {
      protocol: t.maybeAttrInt("protocol"),
      version: t.attrInt("version"),
      hash: t.maybeAttrString("hash"),
      refresh: t.maybeAttrInt("refresh")
    }
  };
});
function c() {
  return (c = (0, i.default)(function* () {
    var e;
    const t = yield (0, l.getServerPropsAttributes)();
    const n = (0, o.makeGetV2Request)({
      propsHash: (e = t == null ? undefined : t.hash) !== null && e !== undefined ? e : ""
    });
    return (0, a.deprecatedSendIq)(n, u);
  })).apply(this, arguments);
}