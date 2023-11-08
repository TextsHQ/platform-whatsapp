Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttDailyWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  PttDaily: [2938, {
    pttCancelBroadcast: [9, i],
    pttCancelGroup: [8, i],
    pttCancelIndividual: [7, i],
    pttCancelNewsletter: [32, i],
    pttDraftReviewBroadcast: [15, i],
    pttDraftReviewGroup: [14, i],
    pttDraftReviewIndividual: [13, i],
    pttDraftReviewNewsletter: [33, i],
    pttFastplaybackBroadcast: [21, i],
    pttFastplaybackGroup: [20, i],
    pttFastplaybackIndividual: [19, i],
    pttFastplaybackNewsletter: [34, i],
    pttLockBroadcast: [12, i],
    pttLockGroup: [11, i],
    pttLockIndividual: [10, i],
    pttLockNewsletter: [35, i],
    pttOutOfChatBroadcast: [29, i],
    pttOutOfChatGroup: [30, i],
    pttOutOfChatIndividual: [31, i],
    pttOutOfChatNewsletter: [36, i],
    pttPausedRecordBroadcast: [22, i],
    pttPausedRecordGroup: [23, i],
    pttPausedRecordIndividual: [24, i],
    pttPausedRecordNewsletter: [37, i],
    pttPlaybackBroadcast: [18, i],
    pttPlaybackGroup: [17, i],
    pttPlaybackIndividual: [16, i],
    pttPlaybackNewsletter: [38, i],
    pttRecordBroadcast: [3, i],
    pttRecordGroup: [2, i],
    pttRecordIndividual: [1, i],
    pttRecordNewsletter: [39, i],
    pttSendBroadcast: [6, i],
    pttSendGroup: [5, i],
    pttSendIndividual: [4, i],
    pttSendNewsletter: [40, i],
    pttStopTapBroadcast: [25, i],
    pttStopTapGroup: [26, i],
    pttStopTapIndividual: [27, i],
    pttStopTapNewsletter: [41, i]
  }, [1, 1, 1], "regular"]
});
exports.PttDailyWamEvent = a;