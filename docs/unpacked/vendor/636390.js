module.exports = function (e, t) {
  if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") {
    return e[t];
  }
};