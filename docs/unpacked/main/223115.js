var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttDailyCountKind = undefined;
exports.incrementPttDailyCount = function (e, t) {
  const n = o.DailyAggregatedStatsCollection.gaddForToday();
  switch (t) {
    case r.ChatKindType.Chat:
      if (e === u.CANCEL) {
        n.pttCancelIndividual++;
      } else if (e === u.SEND) {
        n.pttSendIndividual++;
      } else if (e === u.RECORD) {
        n.pttRecordIndividual++;
      } else if (e === u.DRAFT_REVIEW) {
        n.pttDraftReviewIndividual++;
      } else if (e === u.PLAYBACK) {
        n.pttPlaybackIndividual++;
      } else if (e === u.FAST_PLAYBACK) {
        n.pttFastplaybackIndividual++;
      } else if (e === u.PAUSED_RECORD) {
        n.pttPausedRecordIndividual++;
      } else if (e === u.STOP_TAP) {
        n.pttStopTapIndividual++;
      } else {
        if (e !== u.OOC_PLAYBACK) {
          throw (0, i.default)(`Invalid count kind ${e}`);
        }
        n.pttOutOfChatIndividual++;
      }
      break;
    case r.ChatKindType.Group:
      if (e === u.CANCEL) {
        n.pttCancelGroup++;
      } else if (e === u.SEND) {
        n.pttSendGroup++;
      } else if (e === u.RECORD) {
        n.pttRecordGroup++;
      } else if (e === u.DRAFT_REVIEW) {
        n.pttDraftReviewGroup++;
      } else if (e === u.PLAYBACK) {
        n.pttPlaybackGroup++;
      } else if (e === u.FAST_PLAYBACK) {
        n.pttFastplaybackGroup++;
      } else if (e === u.PAUSED_RECORD) {
        n.pttPausedRecordGroup++;
      } else if (e === u.STOP_TAP) {
        n.pttStopTapGroup++;
      } else {
        if (e !== u.OOC_PLAYBACK) {
          throw (0, i.default)(`Invalid count kind ${e}`);
        }
        n.pttOutOfChatGroup++;
      }
      break;
    case r.ChatKindType.Broadcast:
      if (e === u.CANCEL) {
        n.pttCancelBroadcast++;
      } else if (e === u.SEND) {
        n.pttSendBroadcast++;
      } else if (e === u.RECORD) {
        n.pttRecordBroadcast++;
      } else if (e === u.DRAFT_REVIEW) {
        n.pttDraftReviewBroadcast++;
      } else if (e === u.PLAYBACK) {
        n.pttPlaybackBroadcast++;
      } else if (e === u.FAST_PLAYBACK) {
        n.pttFastplaybackBroadcast++;
      } else if (e === u.PAUSED_RECORD) {
        n.pttPausedRecordBroadcast++;
      } else if (e === u.STOP_TAP) {
        n.pttStopTapBroadcast++;
      } else {
        if (e !== u.OOC_PLAYBACK) {
          throw (0, i.default)(`Invalid count kind ${e}`);
        }
        n.pttOutOfChatBroadcast++;
      }
      break;
    case r.ChatKindType.Community:
    case r.ChatKindType.Newsletter:
      if (!(0, l.isNewsletterPTTLoggingEnabled)()) {
        return;
      }
      if (e === u.CANCEL) {
        n.pttCancelNewsletter++;
      } else if (e === u.SEND) {
        n.pttSendNewsletter++;
      } else if (e === u.RECORD) {
        n.pttRecordNewsletter++;
      } else if (e === u.DRAFT_REVIEW) {
        n.pttDraftReviewNewsletter++;
      } else if (e === u.PLAYBACK) {
        n.pttPlaybackNewsletter++;
      } else if (e === u.FAST_PLAYBACK) {
        n.pttFastplaybackNewsletter++;
      } else if (e === u.PAUSED_RECORD) {
        n.pttPausedRecordNewsletter++;
      } else if (e === u.STOP_TAP) {
        n.pttStopTapNewsletter++;
      } else {
        if (e !== u.OOC_PLAYBACK) {
          throw (0, i.default)(`Invalid count kind ${e}`);
        }
        n.pttOutOfChatNewsletter++;
      }
  }
};
var r = require("../app/953213.js");
var o = require("../app/355135.js");
var l = require("../app/73225.js");
var i = a(require("../app/556869.js"));
const u = require("../vendor/76672.js").Mirrored(["CANCEL", "SEND", "RECORD", "DRAFT_REVIEW", "PLAYBACK", "FAST_PLAYBACK", "PAUSED_RECORD", "STOP_TAP", "OOC_PLAYBACK"]);
exports.PttDailyCountKind = u;