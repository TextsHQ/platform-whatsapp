var t = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
var n = {
  REACT_ELEMENT_TYPE: t,
  injectReactShim: function (e) {
    var t = {
      validated: true
    };
    e._store = t;
  }
};
module.exports = n;