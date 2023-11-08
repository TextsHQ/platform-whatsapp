/* VelocityJS.org UI Pack (5.2.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function (t) {
  "use strict";

  module.exports = function (e, t, n, r) {
    var i = e.Velocity;
    if (i && i.Utilities) {
      var a = i.Utilities;
      if (u({
        major: 1,
        minor: 1,
        patch: 0
      }, i.version)) {
        var o = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
        alert(o);
        throw new Error(o);
      }
      i.RegisterEffect = i.RegisterUI = function (e, t) {
        function n(e, t, n, r) {
          var o;
          var s = 0;
          a.each(e.nodeType ? [e] : e, function (e, t) {
            if (r) {
              n += e * r;
            }
            o = t.parentNode;
            var u = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
            if (i.CSS.getPropertyValue(t, "boxSizing").toString().toLowerCase() === "border-box") {
              u = ["height"];
            }
            a.each(u, function (e, n) {
              s += parseFloat(i.CSS.getPropertyValue(t, n));
            });
          });
          i.animate(o, {
            height: (t === "In" ? "+" : "-") + "=" + s
          }, {
            queue: false,
            easing: "ease-in-out",
            duration: n * (t === "In" ? 0.6 : 1)
          });
        }
        i.Redirects[e] = function (o, s, u, l, c, f, d) {
          var h = u === l - 1;
          var p = 0;
          d = d || t.loop;
          if (typeof t.defaultDuration == "function") {
            t.defaultDuration = t.defaultDuration.call(c, c);
          } else {
            t.defaultDuration = parseFloat(t.defaultDuration);
          }
          for (var m = 0; m < t.calls.length; m++) {
            if (typeof (w = t.calls[m][1]) == "number") {
              p += w;
            }
          }
          var v = p >= 1 ? 0 : t.calls.length ? (1 - p) / t.calls.length : 1;
          for (m = 0; m < t.calls.length; m++) {
            var g = t.calls[m];
            var y = g[0];
            var b = 1000;
            var w = g[1];
            var _ = g[2] || {};
            var x = {};
            if (s.duration !== r) {
              b = s.duration;
            } else if (t.defaultDuration !== r) {
              b = t.defaultDuration;
            }
            x.duration = b * (typeof w == "number" ? w : v);
            x.queue = s.queue || "";
            x.easing = _.easing || "ease";
            x.delay = parseFloat(_.delay) || 0;
            x.loop = !t.loop && _.loop;
            x._cacheValues = _._cacheValues || true;
            if (m === 0) {
              x.delay += parseFloat(s.delay) || 0;
              if (u === 0) {
                x.begin = function () {
                  if (s.begin) {
                    s.begin.call(c, c);
                  }
                  var t = e.match(/(In|Out)$/);
                  if (t && t[0] === "In" && y.opacity !== r) {
                    a.each(c.nodeType ? [c] : c, function (e, t) {
                      i.CSS.setPropertyValue(t, "opacity", 0);
                    });
                  }
                  if (s.animateParentHeight && t) {
                    n(c, t[0], b + x.delay, s.stagger);
                  }
                };
              }
              if (s.display !== null) {
                if (s.display !== r && s.display !== "none") {
                  x.display = s.display;
                } else if (/In$/.test(e)) {
                  var S = i.CSS.Values.getDisplayType(o);
                  x.display = S === "inline" ? "inline-block" : S;
                }
              }
              if (s.visibility && s.visibility !== "hidden") {
                x.visibility = s.visibility;
              }
            }
            if (m === t.calls.length - 1) {
              var E = function () {
                if (!(s.display !== r && s.display !== "none" || !/Out$/.test(e))) {
                  a.each(c.nodeType ? [c] : c, function (e, t) {
                    i.CSS.setPropertyValue(t, "display", "none");
                  });
                }
                if (s.complete) {
                  s.complete.call(c, c);
                }
                if (f) {
                  f.resolver(c || o);
                }
              };
              x.complete = function () {
                if (d) {
                  i.Redirects[e](o, s, u, l, c, f, d === true || Math.max(0, d - 1));
                }
                if (t.reset) {
                  for (var n in t.reset) {
                    if (t.reset.hasOwnProperty(n)) {
                      var a = t.reset[n];
                      if (!(i.CSS.Hooks.registered[n] !== r || typeof a != "string" && typeof a != "number")) {
                        t.reset[n] = [t.reset[n], t.reset[n]];
                      }
                    }
                  }
                  var p = {
                    duration: 0,
                    queue: false
                  };
                  if (h) {
                    p.complete = E;
                  }
                  i.animate(o, t.reset, p);
                } else if (h) {
                  E();
                }
              };
              if (s.visibility === "hidden") {
                x.visibility = s.visibility;
              }
            }
            i.animate(o, y, x);
          }
        };
        return i;
      };
      i.RegisterEffect.packagedEffects = {
        "callout.bounce": {
          defaultDuration: 550,
          calls: [[{
            translateY: -30
          }, 0.25], [{
            translateY: 0
          }, 0.125], [{
            translateY: -15
          }, 0.125], [{
            translateY: 0
          }, 0.25]]
        },
        "callout.shake": {
          defaultDuration: 800,
          calls: [[{
            translateX: -11
          }], [{
            translateX: 11
          }], [{
            translateX: -11
          }], [{
            translateX: 11
          }], [{
            translateX: -11
          }], [{
            translateX: 11
          }], [{
            translateX: -11
          }], [{
            translateX: 0
          }]]
        },
        "callout.flash": {
          defaultDuration: 1100,
          calls: [[{
            opacity: [0, "easeInOutQuad", 1]
          }], [{
            opacity: [1, "easeInOutQuad"]
          }], [{
            opacity: [0, "easeInOutQuad"]
          }], [{
            opacity: [1, "easeInOutQuad"]
          }]]
        },
        "callout.pulse": {
          defaultDuration: 825,
          calls: [[{
            scaleX: 1.1,
            scaleY: 1.1
          }, 0.5, {
            easing: "easeInExpo"
          }], [{
            scaleX: 1,
            scaleY: 1
          }, 0.5]]
        },
        "callout.swing": {
          defaultDuration: 950,
          calls: [[{
            rotateZ: 15
          }], [{
            rotateZ: -10
          }], [{
            rotateZ: 5
          }], [{
            rotateZ: -5
          }], [{
            rotateZ: 0
          }]]
        },
        "callout.tada": {
          defaultDuration: 1000,
          calls: [[{
            scaleX: 0.9,
            scaleY: 0.9,
            rotateZ: -3
          }, 0.1], [{
            scaleX: 1.1,
            scaleY: 1.1,
            rotateZ: 3
          }, 0.1], [{
            scaleX: 1.1,
            scaleY: 1.1,
            rotateZ: -3
          }, 0.1], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], ["reverse", 0.125], [{
            scaleX: 1,
            scaleY: 1,
            rotateZ: 0
          }, 0.2]]
        },
        "transition.fadeIn": {
          defaultDuration: 500,
          calls: [[{
            opacity: [1, 0]
          }]]
        },
        "transition.fadeOut": {
          defaultDuration: 500,
          calls: [[{
            opacity: [0, 1]
          }]]
        },
        "transition.flipXIn": {
          defaultDuration: 700,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [800, 800],
            rotateY: [0, -55]
          }]],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipXOut": {
          defaultDuration: 700,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [800, 800],
            rotateY: 55
          }]],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipYIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [800, 800],
            rotateX: [0, -45]
          }]],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipYOut": {
          defaultDuration: 800,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [800, 800],
            rotateX: 25
          }]],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.flipBounceXIn": {
          defaultDuration: 900,
          calls: [[{
            opacity: [0.725, 0],
            transformPerspective: [400, 400],
            rotateY: [-10, 90]
          }, 0.5], [{
            opacity: 0.8,
            rotateY: 10
          }, 0.25], [{
            opacity: 1,
            rotateY: 0
          }, 0.25]],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceXOut": {
          defaultDuration: 800,
          calls: [[{
            opacity: [0.9, 1],
            transformPerspective: [400, 400],
            rotateY: -10
          }], [{
            opacity: 0,
            rotateY: 90
          }]],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipBounceYIn": {
          defaultDuration: 850,
          calls: [[{
            opacity: [0.725, 0],
            transformPerspective: [400, 400],
            rotateX: [-10, 90]
          }, 0.5], [{
            opacity: 0.8,
            rotateX: 10
          }, 0.25], [{
            opacity: 1,
            rotateX: 0
          }, 0.25]],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceYOut": {
          defaultDuration: 800,
          calls: [[{
            opacity: [0.9, 1],
            transformPerspective: [400, 400],
            rotateX: -15
          }], [{
            opacity: 0,
            rotateX: 90
          }]],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.swoopIn": {
          defaultDuration: 850,
          calls: [[{
            opacity: [1, 0],
            transformOriginX: ["100%", "50%"],
            transformOriginY: ["100%", "100%"],
            scaleX: [1, 0],
            scaleY: [1, 0],
            translateX: [0, -700],
            translateZ: 0
          }]],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.swoopOut": {
          defaultDuration: 850,
          calls: [[{
            opacity: [0, 1],
            transformOriginX: ["50%", "100%"],
            transformOriginY: ["100%", "100%"],
            scaleX: 0,
            scaleY: 0,
            translateX: -700,
            translateZ: 0
          }]],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%",
            scaleX: 1,
            scaleY: 1,
            translateX: 0
          }
        },
        "transition.whirlIn": {
          defaultDuration: 850,
          calls: [[{
            opacity: [1, 0],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: [1, 0],
            scaleY: [1, 0],
            rotateY: [0, 160]
          }, 1, {
            easing: "easeInOutSine"
          }]]
        },
        "transition.whirlOut": {
          defaultDuration: 750,
          calls: [[{
            opacity: [0, "easeInOutQuint", 1],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: 0,
            scaleY: 0,
            rotateY: 160
          }, 1, {
            easing: "swing"
          }]],
          reset: {
            scaleX: 1,
            scaleY: 1,
            rotateY: 0
          }
        },
        "transition.shrinkIn": {
          defaultDuration: 750,
          calls: [[{
            opacity: [1, 0],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: [1, 1.5],
            scaleY: [1, 1.5],
            translateZ: 0
          }]]
        },
        "transition.shrinkOut": {
          defaultDuration: 600,
          calls: [[{
            opacity: [0, 1],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: 1.3,
            scaleY: 1.3,
            translateZ: 0
          }]],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.expandIn": {
          defaultDuration: 700,
          calls: [[{
            opacity: [1, 0],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: [1, 0.625],
            scaleY: [1, 0.625],
            translateZ: 0
          }]]
        },
        "transition.expandOut": {
          defaultDuration: 700,
          calls: [[{
            opacity: [0, 1],
            transformOriginX: ["50%", "50%"],
            transformOriginY: ["50%", "50%"],
            scaleX: 0.5,
            scaleY: 0.5,
            translateZ: 0
          }]],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            scaleX: [1.05, 0.3],
            scaleY: [1.05, 0.3]
          }, 0.35], [{
            scaleX: 0.9,
            scaleY: 0.9,
            translateZ: 0
          }, 0.2], [{
            scaleX: 1,
            scaleY: 1
          }, 0.45]]
        },
        "transition.bounceOut": {
          defaultDuration: 800,
          calls: [[{
            scaleX: 0.95,
            scaleY: 0.95
          }, 0.35], [{
            scaleX: 1.1,
            scaleY: 1.1,
            translateZ: 0
          }, 0.35], [{
            opacity: [0, 1],
            scaleX: 0.3,
            scaleY: 0.3
          }, 0.3]],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceUpIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            translateY: [-30, 1000]
          }, 0.6, {
            easing: "easeOutCirc"
          }], [{
            translateY: 10
          }, 0.2], [{
            translateY: 0
          }, 0.2]]
        },
        "transition.bounceUpOut": {
          defaultDuration: 1000,
          calls: [[{
            translateY: 20
          }, 0.2], [{
            opacity: [0, "easeInCirc", 1],
            translateY: -1000
          }, 0.8]],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceDownIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            translateY: [30, -1000]
          }, 0.6, {
            easing: "easeOutCirc"
          }], [{
            translateY: -10
          }, 0.2], [{
            translateY: 0
          }, 0.2]]
        },
        "transition.bounceDownOut": {
          defaultDuration: 1000,
          calls: [[{
            translateY: -20
          }, 0.2], [{
            opacity: [0, "easeInCirc", 1],
            translateY: 1000
          }, 0.8]],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceLeftIn": {
          defaultDuration: 750,
          calls: [[{
            opacity: [1, 0],
            translateX: [30, -1250]
          }, 0.6, {
            easing: "easeOutCirc"
          }], [{
            translateX: -10
          }, 0.2], [{
            translateX: 0
          }, 0.2]]
        },
        "transition.bounceLeftOut": {
          defaultDuration: 750,
          calls: [[{
            translateX: 30
          }, 0.2], [{
            opacity: [0, "easeInCirc", 1],
            translateX: -1250
          }, 0.8]],
          reset: {
            translateX: 0
          }
        },
        "transition.bounceRightIn": {
          defaultDuration: 750,
          calls: [[{
            opacity: [1, 0],
            translateX: [-30, 1250]
          }, 0.6, {
            easing: "easeOutCirc"
          }], [{
            translateX: 10
          }, 0.2], [{
            translateX: 0
          }, 0.2]]
        },
        "transition.bounceRightOut": {
          defaultDuration: 750,
          calls: [[{
            translateX: -30
          }, 0.2], [{
            opacity: [0, "easeInCirc", 1],
            translateX: 1250
          }, 0.8]],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpIn": {
          defaultDuration: 900,
          calls: [[{
            opacity: [1, 0],
            translateY: [0, 20],
            translateZ: 0
          }]]
        },
        "transition.slideUpOut": {
          defaultDuration: 900,
          calls: [[{
            opacity: [0, 1],
            translateY: -20,
            translateZ: 0
          }]],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownIn": {
          defaultDuration: 900,
          calls: [[{
            opacity: [1, 0],
            translateY: [0, -20],
            translateZ: 0
          }]]
        },
        "transition.slideDownOut": {
          defaultDuration: 900,
          calls: [[{
            opacity: [0, 1],
            translateY: 20,
            translateZ: 0
          }]],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftIn": {
          defaultDuration: 1000,
          calls: [[{
            opacity: [1, 0],
            translateX: [0, -20],
            translateZ: 0
          }]]
        },
        "transition.slideLeftOut": {
          defaultDuration: 1050,
          calls: [[{
            opacity: [0, 1],
            translateX: -20,
            translateZ: 0
          }]],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightIn": {
          defaultDuration: 1000,
          calls: [[{
            opacity: [1, 0],
            translateX: [0, 20],
            translateZ: 0
          }]]
        },
        "transition.slideRightOut": {
          defaultDuration: 1050,
          calls: [[{
            opacity: [0, 1],
            translateX: 20,
            translateZ: 0
          }]],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpBigIn": {
          defaultDuration: 850,
          calls: [[{
            opacity: [1, 0],
            translateY: [0, 75],
            translateZ: 0
          }]]
        },
        "transition.slideUpBigOut": {
          defaultDuration: 800,
          calls: [[{
            opacity: [0, 1],
            translateY: -75,
            translateZ: 0
          }]],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownBigIn": {
          defaultDuration: 850,
          calls: [[{
            opacity: [1, 0],
            translateY: [0, -75],
            translateZ: 0
          }]]
        },
        "transition.slideDownBigOut": {
          defaultDuration: 800,
          calls: [[{
            opacity: [0, 1],
            translateY: 75,
            translateZ: 0
          }]],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftBigIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            translateX: [0, -75],
            translateZ: 0
          }]]
        },
        "transition.slideLeftBigOut": {
          defaultDuration: 750,
          calls: [[{
            opacity: [0, 1],
            translateX: -75,
            translateZ: 0
          }]],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightBigIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            translateX: [0, 75],
            translateZ: 0
          }]]
        },
        "transition.slideRightBigOut": {
          defaultDuration: 750,
          calls: [[{
            opacity: [0, 1],
            translateX: 75,
            translateZ: 0
          }]],
          reset: {
            translateX: 0
          }
        },
        "transition.perspectiveUpIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [800, 800],
            transformOriginX: [0, 0],
            transformOriginY: ["100%", "100%"],
            rotateX: [0, -180]
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveUpOut": {
          defaultDuration: 850,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [800, 800],
            transformOriginX: [0, 0],
            transformOriginY: ["100%", "100%"],
            rotateX: -180
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveDownIn": {
          defaultDuration: 800,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [800, 800],
            transformOriginX: [0, 0],
            transformOriginY: [0, 0],
            rotateX: [0, 180]
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveDownOut": {
          defaultDuration: 850,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [800, 800],
            transformOriginX: [0, 0],
            transformOriginY: [0, 0],
            rotateX: 180
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveLeftIn": {
          defaultDuration: 950,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [2000, 2000],
            transformOriginX: [0, 0],
            transformOriginY: [0, 0],
            rotateY: [0, -180]
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveLeftOut": {
          defaultDuration: 950,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [2000, 2000],
            transformOriginX: [0, 0],
            transformOriginY: [0, 0],
            rotateY: -180
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        },
        "transition.perspectiveRightIn": {
          defaultDuration: 950,
          calls: [[{
            opacity: [1, 0],
            transformPerspective: [2000, 2000],
            transformOriginX: ["100%", "100%"],
            transformOriginY: [0, 0],
            rotateY: [0, 180]
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveRightOut": {
          defaultDuration: 950,
          calls: [[{
            opacity: [0, 1],
            transformPerspective: [2000, 2000],
            transformOriginX: ["100%", "100%"],
            transformOriginY: [0, 0],
            rotateY: 180
          }]],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        }
      };
      for (var s in i.RegisterEffect.packagedEffects) {
        if (i.RegisterEffect.packagedEffects.hasOwnProperty(s)) {
          i.RegisterEffect(s, i.RegisterEffect.packagedEffects[s]);
        }
      }
      i.RunSequence = function (e) {
        var t = a.extend(true, [], e);
        if (t.length > 1) {
          a.each(t.reverse(), function (e, n) {
            var r = t[e + 1];
            if (r) {
              var o = n.o || n.options;
              var s = r.o || r.options;
              var u = o && o.sequenceQueue === false ? "begin" : "complete";
              var l = s && s[u];
              var c = {};
              c[u] = function () {
                var e = r.e || r.elements;
                var t = e.nodeType ? [e] : e;
                if (l) {
                  l.call(t, t);
                }
                i(n);
              };
              if (r.o) {
                r.o = a.extend({}, s, c);
              } else {
                r.options = a.extend({}, s, c);
              }
            }
          });
          t.reverse();
        }
        i(t[0]);
      };
    } else if (t.console) {
      console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
    }
    function u(e, t) {
      var n = [];
      return !(!e || !t) && (a.each([e, t], function (e, t) {
        var r = [];
        a.each(t, function (e, t) {
          for (; t.toString().length < 5;) {
            t = "0" + t;
          }
          r.push(t);
        });
        n.push(r.join(""));
      }), parseFloat(n[0]) > parseFloat(n[1]));
    }
  }(window.jQuery || window.Zepto || window, window, window && window.document);
}();