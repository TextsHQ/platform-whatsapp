Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQlPerfTracker = undefined;
var r = require("./287461.js");
var i = require("./852889.js");
class a {
  constructor(e) {
    this._isMex = false;
    this._operation = "not provided";
    this._startTime = -1;
    this._endTime = -1;
    this._errorCode = -1;
    this._iqResponseStatus = -1;
    this._gqlResponseStatus = -1;
    this._operation = e;
    this._isMex = a.isGraphQLenabled();
  }
  toUseGraphQL() {
    return this._isMex;
  }
  start() {
    this._startTime = Date.now();
  }
  stop() {
    this._endTime = Date.now();
  }
  logEvent(e) {
    let {
      envelopeResponseStatus: t,
      payloadResponseStatus: n
    } = e;
    if (a.isExperimentEnabled()) {
      new i.MexEventWamEvent({
        isMex: this._isMex,
        mexEventOperation: this._operation,
        mexEventStartTime: this._startTime,
        mexEventEndTime: this._endTime,
        mexEventPayloadResponseStatus: n,
        mexEventEnvelopeResponseStatus: t,
        mexEventRequestSize: 1
      }).commit();
    }
  }
  static isExperimentEnabled() {
    return (0, r.getABPropConfigValue)("mex_phase3_enabled");
  }
  static isGraphQLenabled() {
    return a.isExperimentEnabled() && a.isGraphQLFlagSet();
  }
  static isGraphQLFlagSet() {
    return a.isFlagSet(1);
  }
  static isFlagSet(e) {
    return ((0, r.getABPropConfigValue)("mex_phase3_status_flags") & e) === e;
  }
}
exports.GraphQlPerfTracker = a;