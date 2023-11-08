module.exports = {
  getEnumResult: function (e) {
    return [[e], null];
  },
  getGenderResult: function (e, t, n) {
    return [e, t];
  },
  getNumberResult: function (e, t, n) {
    return [e, t];
  },
  getSubstitution: function (e) {
    return [null, e];
  },
  getPronounResult: function (e) {
    return [[e, "*"], null];
  }
};