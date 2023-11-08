Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementPrinaDailyCount = function (e, t) {
  const n = r.DailyAggregatedStatsCollection.gaddForToday();
  const l = Date.now();
  if (l - n.prinaLastEvent < 1000) {
    return;
  }
  n.prinaLastEvent = l;
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.goldenBoxContactNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.goldenBoxContactDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.goldenBoxContactDialogSelectCount++;
    }
    return;
  }
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.goldenBoxGroupNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.goldenBoxGroupDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.goldenBoxGroupDialogSelectCount++;
    }
    return;
  }
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.infoScreenGroupNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.infoScreenGroupDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.infoScreenGroupDialogSelectCount++;
    }
    return;
  }
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.chatsListNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.chatsListDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.chatsListDialogSelectCount++;
    }
    return;
  }
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.statusListNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.statusListDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.statusListDialogSelectCount++;
    }
    return;
  }
  if (e === o.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLING_SCREEN_AUDIO) {
    switch (t) {
      case a.PrinaDailyActionType.NARRATIVE_APPEAR:
        n.callingScreenAudioNarrativeAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_APPEAR:
        n.callingScreenAudioDialogAppearCount++;
        break;
      case a.PrinaDailyActionType.DIALOG_SELECT:
        n.callingScreenAudioDialogSelectCount++;
    }
  }
};
var a = require("../app/510337.js");
var r = require("../app/355135.js");
var o = require("../app/521394.js");