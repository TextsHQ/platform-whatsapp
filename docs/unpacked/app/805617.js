Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryFeaturesClass = exports.PrimaryFeatures = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.features = (0, r.prop)();
    this.ddmSettings = (0, r.prop)(false);
    this.clearAndDeleteChatSync = (0, r.prop)(false);
    this.viewOnceSpReceiver = (0, r.prop)(false);
    this.recentSticker = (0, r.prop)(false);
    this.favoriteSticker = (0, r.prop)(false);
    this.linkPreview = (0, r.prop)(false);
    this.hqLinkPreview = (0, r.prop)(false);
    this.pollCreationInCags = (0, r.prop)(false);
    this.newsletter = (0, r.prop)(false);
    this.externalWebBetaOptIn = (0, r.prop)(false);
    this.historySyncOnDemand = (0, r.prop)(false);
    this.webLinkPreviewNseSupport = (0, r.prop)(false);
    this.messagePlaceholderResendNseSupport = (0, r.prop)(false);
    this.isPrimaryBetaBuild = (0, r.prop)(false);
    this.primaryCampaignIdInHistorySyncSupport = (0, r.prop)(false);
  }
  setPrimaryFeatures(e) {
    this.features = e;
    const t = new Set(e);
    this.ddmSettings = t.has("ddm_settings");
    this.clearAndDeleteChatSync = t.has("clear_and_delete_chat_sync");
    this.viewOnceSpReceiver = t.has("vo_sp_receiver");
    this.recentSticker = t.has("recent_sticker");
    this.favoriteSticker = t.has("favorite_sticker");
    this.linkPreview = t.has("link_preview");
    this.hqLinkPreview = t.has("link_preview_hq_thumbnail");
    this.pollCreationInCags = t.has("poll_creation_cag");
    this.newsletter = t.has("newsletter");
    this.externalWebBetaOptIn = t.has("external_web_beta_opt_in");
    this.historySyncOnDemand = t.has("history_sync_on_demand");
    this.webLinkPreviewNseSupport = t.has("web_link_preview_nse_support");
    this.messagePlaceholderResendNseSupport = t.has("message_placeholder_resend_nse_support");
    this.isPrimaryBetaBuild = t.has("is_primary_beta_build");
    this.primaryCampaignIdInHistorySyncSupport = t.has("primary_campaign_id_in_history_sync_support");
  }
}
exports.PrimaryFeaturesClass = i;
i.Proxy = "primaryFeatures";
const a = new ((0, r.defineModel)(i))({
  id: "1"
});
exports.PrimaryFeatures = a;