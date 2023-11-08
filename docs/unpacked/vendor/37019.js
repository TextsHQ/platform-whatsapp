module.exports = function (e) {
  var t = typeof e;
  if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
    return e !== "__proto__";
  } else {
    return e === null;
  }
};