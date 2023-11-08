Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotationKeyTooLong = function (e, t, n) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.ANNOTATION_KEY_TOO_LONG,
    webcQplHealthEventData: `markerId: ${e}, instanceKey: ${t}, annotationKey: ${n}`
  }).commit();
};
exports.annotationSizeLimitExceeded = function (e, t, n) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.ANNOTATION_SIZE_LIMIT_EXCEEDED,
    webcQplHealthEventData: `markerId: ${e}, instanceKey: ${t}, annotationKey: ${n}`
  }).commit();
};
exports.errorParsingConfig = function (e) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.ERROR_PARSING_CONFIG,
    webcQplHealthEventData: `errorString: ${e}`
  }).commit();
};
exports.errorUploadingChunk = function (e) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.ERROR_UPLOADING_CHUNK,
    webcQplHealthEventData: `errorString: ${e}`
  }).commit();
};
exports.maxPointCountExceeded = function (e, t) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.MAX_POINT_COUNT_EXCEEDED,
    webcQplHealthEventData: `markerId: ${e}, instanceKey: ${t}`
  }).commit();
};
exports.maxStorageEventCountReached = function () {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.MAX_STORAGE_EVENT_COUNT_REACHED
  }).commit();
};
exports.pointDataTooLong = function (e, t, n) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.POINT_DATA_TOO_LONG,
    webcQplHealthEventData: `markerId: ${e}, instanceKey: ${t}, data: ${n}`
  }).commit();
};
exports.pointNameTooLong = function (e, t, n) {
  if (a++ > 5) {
    return;
  }
  new i.WebcQplHealthWamEvent({
    webcQplHealthEventType: r.WEBC_QPL_HEALTH_EVENT_TYPE.POINT_NAME_TOO_LONG,
    webcQplHealthEventData: `markerId: ${e}, instanceKey: ${t}, pointName: ${n}`
  }).commit();
};
var r = require("./876986.js");
var i = require("./256146.js");
let a = 0;