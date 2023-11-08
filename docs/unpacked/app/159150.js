Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexPerfTracker = undefined;
exports.createLoggingClientError = function (e, t) {
  return {
    code: e,
    detail: t,
    type: "CLIENT"
  };
};
exports.createLoggingExtensionError = i;
exports.createLoggingTransportError = function (e, t) {
  return {
    code: e,
    detail: t,
    type: "TRANSPORT"
  };
};
var r = require("./787514.js");
function i(e, t) {
  return {
    code: e,
    detail: t,
    type: "EXTENSION"
  };
}
exports.MexPerfTracker = class {
  constructor(e) {
    this._isMex = false;
    this._operationName = "";
    this._queryId = "";
    this._startTime = -1;
    this._endTime = -1;
    this._duration = -1;
    this._hasData = false;
    this._errors = "";
    this._errorCodes = "";
    this._isMex = e;
  }
  start() {
    this._startTime = Date.now();
  }
  stop() {
    this._endTime = Date.now();
    this._duration = this._endTime - this._startTime;
  }
  setQueryId(e) {
    if (e != null) {
      this._queryId = e;
    }
  }
  setOperationName(e) {
    if (e != null) {
      this._operationName = e;
    }
  }
  setHasData(e) {
    this._hasData = e;
  }
  setErrors(e) {
    if (e != null) {
      const t = this.parseErrorsAndCodes(e);
      this._errors = t.errors;
      this._errorCodes = t.errorCodes;
    }
  }
  setExtensionErrors(e) {
    if (e != null) {
      const t = e.filter(e => {
        var t;
        return ((t = e.extensions) === null || t === undefined ? undefined : t.error_code) != null;
      }).map(e => i(e.extensions.error_code, e.message));
      this.setErrors(t);
    }
  }
  logEvent() {
    const e = {
      mexEventV2DurationMs: this._duration,
      mexEventV2EndTime: this._endTime,
      mexEventV2ErrorCodes: this._errorCodes,
      mexEventV2Errors: this._errors,
      mexEventV2HasData: this._hasData,
      mexEventV2IsMex: this._isMex,
      mexEventV2OperationName: this._operationName,
      mexEventV2QueryId: this._queryId,
      mexEventV2StartTime: this._startTime
    };
    new r.MexEventV2WamEvent(e).commit();
  }
  parseErrorsAndCodes(e) {
    const t = e.map(e => e.code);
    return {
      errors: JSON.stringify(e),
      errorCodes: JSON.stringify(t)
    };
  }
};