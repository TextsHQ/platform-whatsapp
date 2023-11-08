Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LwiScreenWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./8372.js");
var o = require("./34631.js");
var l = require("./905241.js");
var i = require("./822039.js");
var u = require("./862372.js");
var s = require("./868052.js");
var c = require("./893300.js");
var d = require("./268793.js");
var f = require("./646564.js");
var p = require("./563994.js");
var m = require("./32469.js");
var h = require("./611690.js");
var g = require("./339798.js");
var E = require("./282952.js");
var v = require("./409969.js");
var _ = require("./493757.js");
var y = require("./229619.js");
const {
  BOOLEAN: C,
  INTEGER: b,
  STRING: M
} = a.TYPES;
const S = (0, a.defineEvents)({
  LwiScreen: [2772, {
    adContentRecommendation: [41, r.AD_CONTENT_RECOMMENDATION_TYPE],
    adMediaOriginalAspectRatio: [47, M],
    adMediaPreviewAspectRatio: [48, M],
    adMediaTypeSelected: [40, f.LWI_AD_MEDIA_TYPE],
    adsContentSelected: [42, c.LWI_ADS_CONTENT_TYPE],
    alertCount: [33, b],
    audienceType: [45, o.AUDIENCE_TYPE],
    billingStatus: [36, l.BILLING_STATUS],
    createAdEnabled: [12, C],
    ctwaAdAccountType: [58, i.CTWA_AD_ACCOUNT_TYPE],
    ctwaLoginType: [59, u.CTWA_LOGIN_TYPE],
    defaultAdsContentSelected: [9, c.LWI_ADS_CONTENT_TYPE],
    defaultAudienceLocationType: [57, s.DEFAULT_AUDIENCE_LOCATION_TYPE],
    itemCount: [39, b],
    lwiAdCampaignId: [46, M],
    lwiAdsIdentityType: [22, d.LWI_ADS_IDENTITY_TYPE],
    lwiAlertReason: [6, p.LWI_ALERT_REASON],
    lwiBudgetInLocal: [15, b],
    lwiBudgetOptionsInLocal: [54, M],
    lwiCtwaAdCtaType: [24, m.LWI_CTWA_AD_CTA_TYPE],
    lwiCtwaAdStatusType: [25, h.LWI_CTWA_AD_STATUS_TYPE],
    lwiCurrency: [16, M],
    lwiDefaultBudgetInLocal: [17, b],
    lwiDefaultDurationInDays: [18, b],
    lwiDefaultTargetingSpec: [19, g.LWI_DEFAULT_TARGETING_SPEC],
    lwiDurationInDays: [20, b],
    lwiEventSequenceNumber: [2, b],
    lwiExtras: [30, M],
    lwiFlowId: [1, M],
    lwiIsFbAppInstalled: [27, C],
    lwiIsIgAppInstalled: [51, C],
    lwiLocationTypesSetOnAudienceSelection: [55, M],
    lwiMaxDurationInDays: [52, b],
    lwiMinDurationInDays: [53, b],
    lwiScreenAction: [5, E.LWI_SCREEN_ACTION],
    lwiScreenReference: [4, v.LWI_SCREEN_REFERENCE],
    lwiTargetingSpec: [21, M],
    lwiTotalCtwaAds: [26, b],
    lwiViewerHasEditPermission: [28, C],
    lwiViewerHasPromotePermission: [32, C],
    mediaEdited: [49, C],
    onboardingEntryPoint: [38, _.ONBOARDING_ENTRY_POINT],
    paymentMethodSet: [13, C],
    productId: [3, M],
    selectedProductsIdsList: [8, M],
    totalMediaCount: [50, b],
    usedSavedAudience: [31, C],
    userHasAdvancedAudience: [35, C],
    userHasBpCredentials: [43, C],
    userHasCatalogItemsToPromote: [10, C],
    userHasChangedDefaultCityLevelAudience: [56, C],
    userHasLinkedFbPage: [7, C],
    userHasMultisourceMedia: [60, C],
    userHasSeenRecommendedBudget: [34, C],
    userHasStatusToPromote: [11, C],
    userProvidedFbConsent: [14, C],
    userWentThroughFbWebLogin: [23, C],
    validationStatus: [37, y.VALIDATION_STATUS],
    waAdAccountId: [44, M]
  }, [1, 1, 1], "regular"]
});
exports.LwiScreenWamEvent = S;