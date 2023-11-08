module.exports = function (e) {
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  return function () {
    var t = arguments;
    switch (t.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, t[0]);
      case 2:
        return !e.call(this, t[0], t[1]);
      case 3:
        return !e.call(this, t[0], t[1], t[2]);
    }
    return !e.apply(this, t);
  };
};