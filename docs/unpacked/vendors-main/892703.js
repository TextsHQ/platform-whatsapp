var n = require("./150414.js");
function a() {}
function o() {}
o.resetWarningCache = a;
module.exports = function () {
  function e(e, t, r, a, o, i) {
    if (i !== n) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      u.name = "Invariant Violation";
      throw u;
    }
  }
  function t() {
    return e;
  }
  e.isRequired = e;
  var r = {
    array: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: o,
    resetWarningCache: a
  };
  r.PropTypes = r;
  return r;
};