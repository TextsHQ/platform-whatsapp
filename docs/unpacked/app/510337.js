Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrinaDailyActionType = exports.DailyAggregatedStats = undefined;
var r = require("./481173.js");
const i = require("../vendor/76672.js")({
  NARRATIVE_APPEAR: 1,
  DIALOG_APPEAR: 2,
  DIALOG_SELECT: 3
});
exports.PrinaDailyActionType = i;
const a = 86400000;
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.startTime = (0, r.prop)();
    this.pttCancelBroadcast = (0, r.prop)(0);
    this.pttCancelGroup = (0, r.prop)(0);
    this.pttCancelIndividual = (0, r.prop)(0);
    this.pttCancelNewsletter = (0, r.prop)(0);
    this.pttDraftReviewBroadcast = (0, r.prop)(0);
    this.pttDraftReviewGroup = (0, r.prop)(0);
    this.pttDraftReviewIndividual = (0, r.prop)(0);
    this.pttDraftReviewNewsletter = (0, r.prop)(0);
    this.pttFastplaybackBroadcast = (0, r.prop)(0);
    this.pttFastplaybackGroup = (0, r.prop)(0);
    this.pttFastplaybackIndividual = (0, r.prop)(0);
    this.pttFastplaybackNewsletter = (0, r.prop)(0);
    this.pttLockBroadcast = (0, r.prop)(0);
    this.pttLockGroup = (0, r.prop)(0);
    this.pttLockIndividual = (0, r.prop)(0);
    this.pttLockNewsletter = (0, r.prop)(0);
    this.pttPlaybackBroadcast = (0, r.prop)(0);
    this.pttPlaybackGroup = (0, r.prop)(0);
    this.pttPlaybackIndividual = (0, r.prop)(0);
    this.pttPlaybackNewsletter = (0, r.prop)(0);
    this.pttRecordBroadcast = (0, r.prop)(0);
    this.pttRecordGroup = (0, r.prop)(0);
    this.pttRecordIndividual = (0, r.prop)(0);
    this.pttRecordNewsletter = (0, r.prop)(0);
    this.pttSendBroadcast = (0, r.prop)(0);
    this.pttSendGroup = (0, r.prop)(0);
    this.pttSendIndividual = (0, r.prop)(0);
    this.pttSendNewsletter = (0, r.prop)(0);
    this.pttPausedRecordBroadcast = (0, r.prop)(0);
    this.pttPausedRecordGroup = (0, r.prop)(0);
    this.pttPausedRecordIndividual = (0, r.prop)(0);
    this.pttPausedRecordNewsletter = (0, r.prop)(0);
    this.pttStopTapBroadcast = (0, r.prop)(0);
    this.pttStopTapGroup = (0, r.prop)(0);
    this.pttStopTapIndividual = (0, r.prop)(0);
    this.pttStopTapNewsletter = (0, r.prop)(0);
    this.pttOutOfChatBroadcast = (0, r.prop)(0);
    this.pttOutOfChatGroup = (0, r.prop)(0);
    this.pttOutOfChatIndividual = (0, r.prop)(0);
    this.pttOutOfChatNewsletter = (0, r.prop)(0);
    this.goldenBoxContactNarrativeAppearCount = (0, r.prop)(0);
    this.goldenBoxContactDialogAppearCount = (0, r.prop)(0);
    this.goldenBoxContactDialogSelectCount = (0, r.prop)(0);
    this.goldenBoxGroupNarrativeAppearCount = (0, r.prop)(0);
    this.goldenBoxGroupDialogAppearCount = (0, r.prop)(0);
    this.goldenBoxGroupDialogSelectCount = (0, r.prop)(0);
    this.infoScreenContactNarrativeAppearCount = (0, r.prop)(0);
    this.infoScreenContactDialogAppearCount = (0, r.prop)(0);
    this.infoScreenContactDialogSelectCount = (0, r.prop)(0);
    this.infoScreenGroupNarrativeAppearCount = (0, r.prop)(0);
    this.infoScreenGroupDialogAppearCount = (0, r.prop)(0);
    this.infoScreenGroupDialogSelectCount = (0, r.prop)(0);
    this.chatsListNarrativeAppearCount = (0, r.prop)(0);
    this.chatsListDialogAppearCount = (0, r.prop)(0);
    this.chatsListDialogSelectCount = (0, r.prop)(0);
    this.statusListNarrativeAppearCount = (0, r.prop)(0);
    this.statusListDialogAppearCount = (0, r.prop)(0);
    this.statusListDialogSelectCount = (0, r.prop)(0);
    this.callingScreenAudioNarrativeAppearCount = (0, r.prop)(0);
    this.callingScreenAudioDialogAppearCount = (0, r.prop)(0);
    this.callingScreenAudioDialogSelectCount = (0, r.prop)(0);
    this.prinaLastEvent = (0, r.prop)(0);
    this.communityTabGroupNavigations = (0, r.prop)(0);
    this.communityTabToHomeViews = (0, r.prop)(0);
    this.communityTabViews = (0, r.prop)(0);
    this.communityTabViewsViaContextMenu = (0, r.prop)(0);
    this.communityNoActionTabViews = (0, r.prop)(0);
    this.communityHome = (0, r.prop)(() => ({}));
    this.pnhCagActions = (0, r.prop)(() => ({}));
    this.pnhCtwaActions = (0, r.prop)(() => ({}));
    this.kicGroupNotificationTaps = (0, r.prop)(0);
    this.kicGroupNotifications = (0, r.prop)(0);
    this.kicNotificationTaps = (0, r.prop)(0);
    this.kicNotifications = (0, r.prop)(0);
  }
  initialize() {
    super.initialize();
  }
  getEndTime() {
    return this.startTime + a;
  }
  shouldBeSubmitted() {
    return !this.isExpired() && this.getEndTime() < Date.now();
  }
  isExpired() {
    const e = Date.now() - 1814400000;
    return this.startTime < e;
  }
}
o.Proxy = "daily-aggregated-stats";
const s = (0, r.defineModel)(o);
exports.DailyAggregatedStats = s;