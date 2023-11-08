var n;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function () {
  "use strict";

  var r = {}.hasOwnProperty;
  function i() {
    for (var e = [], t = 0; t < arguments.length; t++) {
      var n = arguments[t];
      if (n) {
        var a = typeof n;
        if (a === "string" || a === "number") {
          e.push(n);
        } else if (Array.isArray(n)) {
          e.push(i.apply(null, n));
        } else if (a === "object") {
          for (var o in n) {
            if (r.call(n, o) && n[o]) {
              e.push(o);
            }
          }
        }
      }
    }
    return e.join(" ");
  }
  if (module.exports) {
    module.exports = i;
  } else if (!((n = function () {
    return i;
  }.apply(exports, [])) === undefined)) {
    module.exports = n;
  }
}();