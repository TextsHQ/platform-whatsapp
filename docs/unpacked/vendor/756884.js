var r = require("./727418.js");
var i = {};
var a = {
  getErrorListener: function (e) {
    var t;
    if ((t = i.errorListener) === null || t === undefined) {
      return undefined;
    } else {
      return t.call(i, e);
    }
  },
  logImpression: function (e) {
    var t;
    if (!((t = i.logImpression) === null || t === undefined)) {
      t.call(i, e);
    }
  },
  onTranslationOverride: function (e) {
    var t;
    if (!((t = i.onTranslationOverride) === null || t === undefined)) {
      t.call(i, e);
    }
  },
  getFbsResult: function (e) {
    return i.getFbsResult(e);
  },
  getFbtResult: function (e) {
    return i.getFbtResult(e);
  },
  getNumberFormatConfigOverride: function () {
    var e;
    if ((e = i.getNumberFormatConfigOverride) === null || e === undefined) {
      return undefined;
    } else {
      return e.call(i);
    }
  },
  getTranslatedInput: function (e) {
    var t;
    var n;
    if ((t = (n = i.getTranslatedInput) === null || n === undefined ? undefined : n.call(i, e)) !== null && t !== undefined) {
      return t;
    } else {
      return e;
    }
  },
  getViewerContext: function () {
    return i.getViewerContext();
  },
  register: function (e) {
    r(i, e);
  }
};
module.exports = a;