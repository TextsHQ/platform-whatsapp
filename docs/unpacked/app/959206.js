var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transitions = undefined;
exports.registerEffects = function () {
  i.default.RegisterEffect("attach.Up", {
    defaultDuration: 300,
    calls: [[{
      opacity: [1, 0],
      translateY: ["0%", "150%"],
      scaleX: [1, 0.3],
      scaleY: [1, 0.3]
    }, 1, {
      easing: [300, 22]
    }]]
  });
  i.default.RegisterEffect("attach.Down", {
    defaultDuration: 200,
    easing: o,
    calls: [[{
      opacity: [0, 1],
      translateY: ["100%", "0%"],
      scaleX: [0.3, 1],
      scaleY: [0.3, 1]
    }, 1, {
      easing: [0.33, 0, 0.39, 0.91]
    }]]
  });
  i.default.RegisterEffect("dropdown.Down", {
    defaultDuration: 200,
    easing: a,
    calls: [[{
      opacity: [1, 0],
      translateY: ["0%", "-15px"]
    }, 1, {
      easing: a
    }]]
  });
};
var i = r(require("../vendor/512641.js"));
const a = [0.1, 0.82, 0.25, 1];
const o = [0.69, 0, 0.79, 0.14];
const s = [0.84, 0.07, 0.93, 0.46];
const l = {
  pop: {
    duration: 200,
    easing: s,
    enter: {
      props: {
        scaleX: [1, 0.5],
        scaleY: [1, 0.5],
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        scaleX: [0.5, 1],
        scaleY: [0.5, 1],
        opacity: [0, 1]
      }
    }
  },
  slide: {
    duration: 200,
    easing: a,
    enter: {
      props: "slideDown"
    },
    leave: {
      props: "slideUp"
    }
  },
  scale: {
    duration: 500,
    easing: a,
    enter: {
      props: {
        scaleX: [1, 0],
        scaleY: [1, 0]
      }
    },
    leave: {
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1]
      }
    }
  },
  fade: {
    duration: 200,
    easing: a,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  messageComposer: {
    duration: 300,
    easing: "easeInOut",
    enter: {
      props: {
        opacity: [1, 0],
        translateX: [0, -100]
      }
    },
    leave: {
      props: {
        opacity: [0, 1],
        translateX: [-100, 0]
      }
    }
  },
  pttComposer: {
    duration: 300,
    easing: "easeInOut",
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  "fade-fast": {
    easing: "ease",
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 150
    },
    leave: {
      props: {
        opacity: [0, 1]
      },
      duration: 100
    }
  },
  "ptt-out-of-chat": {
    enter: {
      props: {
        translateY: ["-100%", "0%"],
        opacity: [1, 0]
      },
      duration: 250,
      delay: 150,
      easing: "ease"
    },
    leave: {
      props: {
        translateY: ["0%", "-100%"],
        opacity: [0, 1]
      },
      duration: 250,
      delay: 150,
      easing: "ease"
    }
  },
  fade_sifo: {
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 250
    },
    leave: {
      props: {
        opacity: [0, 1]
      },
      duration: 100
    }
  },
  capture: {
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 350
    },
    leave: [{
      selector: "[data-animate-capture-snapshot]",
      props: "transition.bounceDownOut",
      duration: 700
    }]
  },
  butterbar: {
    enter: {
      props: "slideDown",
      easing: a,
      duration: 700
    },
    leave: {
      props: "slideUp",
      easing: o,
      duration: 350
    }
  },
  modal: {
    enter: [{
      selector: "[data-animate-modal-backdrop]",
      props: {
        opacity: [1, 0]
      },
      duration: 300,
      easing: [0.19, 0.73, 0.28, 1]
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        scaleX: [1, 0],
        scaleY: [1, 0],
        opacity: [1, 0]
      },
      easing: [0.19, 0.73, 0.28, 1],
      delay: 180,
      duration: 200
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        opacity: [0, 0]
      },
      duration: 180
    }],
    leave: [{
      selector: "[data-animate-modal-backdrop]",
      props: {
        opacity: [0, 1]
      },
      duration: 300,
      easing: o,
      delay: 100
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1]
      },
      easing: o,
      duration: 200
    }]
  },
  "modal-flow": {
    enter: [{
      selector: "[data-animate-modal-backdrop]",
      props: {
        opacity: [1, 0]
      },
      duration: 300,
      easing: [0.19, 0.73, 0.28, 1]
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        scaleX: [1, 0],
        scaleY: [1, 0],
        opacity: [1, 1]
      },
      easing: [0.19, 0.73, 0.28, 1],
      delay: 180,
      duration: 200
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        opacity: [0, 0]
      },
      duration: 180
    }],
    leave: [{
      selector: "[data-animate-modal-backdrop]",
      props: {
        opacity: [0, 1]
      },
      duration: 300,
      easing: o,
      delay: 100
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1]
      },
      easing: o,
      duration: 200
    }]
  },
  "flow-transition-modal-push": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  "flow-transition-modal-pop": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  "flow-transition-box-size-drawer-push": {
    duration: 300,
    easing: a,
    enter: [{
      selector: "[data-animate-modal-body]",
      props: {
        translateX: ["0%", "100%"]
      }
    }],
    leave: [{
      props: {
        background: ["transparent", "transparent"]
      }
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        background: ["transparent", "transparent"],
        boxShadow: ["none", "none"]
      }
    }, {
      selector: "[data-animate-modal-body]",
      props: {
        translateX: ["-100%", "0%"]
      }
    }]
  },
  "flow-transition-box-size-drawer-pop": {
    duration: 300,
    easing: a,
    enter: [{
      selector: "[data-animate-modal-body]",
      props: {
        translateX: ["0%", "-100%"]
      }
    }],
    leave: [{
      props: {
        background: ["transparent", "transparent"]
      }
    }, {
      selector: "[data-animate-modal-popup]",
      props: {
        background: ["transparent", "transparent"],
        boxShadow: ["none", "none"]
      }
    }, {
      selector: "[data-animate-modal-body]",
      props: {
        translateX: ["100%", "0%"]
      }
    }]
  },
  "flow-transition-drawer-push": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateX: ["0%", "100%"]
      }
    },
    leave: {
      props: {
        translateX: ["-100%", "0%"]
      }
    }
  },
  "flow-transition-drawer-pop": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateX: ["0%", "-100%"]
      }
    },
    leave: {
      props: {
        translateX: ["100%", "0%"]
      }
    }
  },
  "drawer-left": {
    duration: 300,
    easing: a,
    enter: [{
      props: {
        translateX: ["0%", "-100%"]
      }
    }, {
      selector: "[data-animate-drawer-title]",
      props: {
        translateX: [0, -50],
        opacity: [1, 0]
      },
      duration: 500,
      easing: "easeOut"
    }],
    leave: {
      props: {
        translateX: ["-100%", "0%"]
      }
    }
  },
  "drawer-left-rtl": {
    duration: 300,
    easing: a,
    enter: [{
      props: {
        translateX: ["0%", "100%"]
      }
    }, {
      selector: "[data-animate-drawer-title]",
      props: {
        translateX: [0, 50],
        opacity: [1, 0]
      },
      duration: 500,
      easing: "easeOut"
    }],
    leave: {
      props: {
        translateX: ["100%", "0%"]
      }
    }
  },
  dropdown: {
    duration: 300,
    easing: a,
    enter: [{
      selector: "[data-animate-dropdown-item]",
      props: "dropdown.Down",
      delay: 50,
      duration: 375,
      stagger: 25,
      drag: true
    }, {
      props: {
        scale: [1, 0]
      }
    }, {
      props: {
        opacity: [1, 0]
      },
      duration: 100
    }],
    leave: {
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1],
        opacity: [0, 1]
      }
    }
  },
  "dropdown-picker": {
    duration: 300,
    easing: a,
    enter: [{
      selector: "[data-animate-dropdown-item]",
      props: {
        opacity: [1, 0]
      },
      delay: 50,
      duration: 200
    }, {
      selector: "[data-animate-dropdown-nib]",
      props: {
        opacity: [1, 0],
        rotateZ: ["45deg"],
        translateY: ["0%", "-100%"]
      }
    }, {
      props: {
        scale: [1, 0]
      }
    }, {
      props: {
        opacity: [1, 0]
      },
      duration: 100
    }],
    leave: [{
      selector: "[data-animate-dropdown-item]",
      props: {
        opacity: [1, 0]
      },
      duration: 100
    }, {
      selector: "[data-animate-dropdown-nib]",
      props: {
        opacity: [1, 0]
      },
      duration: 150
    }, {
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1],
        opacity: [0, 1]
      }
    }]
  },
  "profile-viewer": {
    duration: 500,
    easing: [0.1, 1.03, 0.28, 0.99],
    leave: {
      delay: 400,
      props: {
        opacity: [0, 1]
      }
    }
  },
  "media-viewer": {
    duration: 300,
    easing: [0.1, 1.03, 0.28, 0.99],
    leave: {
      selector: "[data-animate-media-viewer]",
      props: {
        opacity: [0, 1]
      }
    }
  },
  "status-v3-quoted-msg": {
    enter: {
      props: {
        translateY: ["0%", "100%"],
        opacity: [1, 0]
      },
      duration: 200,
      easing: a
    },
    leave: {
      props: {
        translateY: ["100%", "0%"],
        opacity: [0, 1]
      },
      duration: 200,
      easing: o
    }
  },
  "status-v3-quick-reply": {
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 300,
      easing: a
    },
    leave: {
      props: {
        opacity: [0, 1]
      },
      duration: 200,
      easing: o
    }
  },
  "status-v3-panel": {
    enter: {
      props: {
        translateY: ["0%", "100%"],
        opacity: [1, 0]
      },
      duration: 300,
      easing: a
    },
    leave: {
      props: {
        translateY: ["100%", "0%"],
        opacity: [0, 1]
      },
      duration: 200,
      easing: o
    }
  },
  "status-v3-modal": {
    easing: [0.55, 0.085, 0.68, 0.53],
    enter: {
      duration: 100,
      selector: "[data-animate-status-v3-modal-background]",
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      duration: 100,
      selector: "[data-animate-status-v3-modal-background]",
      props: {
        opacity: [0, 1]
      }
    }
  },
  "quoted-status-v3-modal": {
    easing: [0.55, 0.085, 0.68, 0.53],
    enter: {
      duration: 100,
      selector: "[data-animate-status-v3-viewer]",
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      duration: 100,
      selector: "[data-animate-status-v3-viewer]",
      props: {
        opacity: [0, 1]
      }
    }
  },
  "status-v3-player": {
    easing: [0.55, 0.085, 0.68, 0.53],
    enter: {
      duration: 200,
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      duration: 200,
      props: {
        opacity: [0, 1]
      }
    }
  },
  "status-v3-media-loading": {
    duration: 300,
    easing: o,
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  menu: {
    enter: {
      selector: "[data-animate-menu-icons-item]",
      props: "attach.Up",
      duration: 700,
      stagger: 30,
      drag: false
    },
    leave: {
      selector: "[data-animate-menu-icons-item]",
      props: "attach.Down",
      duration: 200,
      stagger: 30
    }
  },
  "slide-left": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateX: ["0%", "100%"]
      }
    },
    leave: {
      props: {
        translateX: ["100%", "0%"]
      }
    }
  },
  "slide-left-rtl": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateX: ["0%", "-100%"]
      }
    },
    leave: {
      props: {
        translateX: ["-100%", "0%"]
      }
    }
  },
  "slide-forward": {
    duration: 200,
    easing: [0.19, 0.93, 0.18, 0.99],
    enter: {
      props: {
        translateX: ["0%", "100%"]
      }
    },
    leave: {
      props: {
        translateX: ["-100%", "0%"]
      }
    }
  },
  "slide-back": {
    duration: 200,
    easing: [0.19, 0.93, 0.18, 0.99],
    enter: {
      props: {
        translateX: ["0%", "-100%"]
      }
    },
    leave: {
      props: {
        translateX: ["100%", "0%"]
      }
    }
  },
  "slide-down-date": {
    duration: 300,
    enter: {
      props: {
        translateY: ["0%", "-130%"],
        opacity: [1, 0]
      },
      easing: a
    },
    leave: {
      props: {
        translateY: ["-130%", "0%"],
        opacity: [0, 1]
      },
      easing: o
    }
  },
  "pop-fast-reverse": {
    duration: 75,
    easing: [0.14, 0.62, 0.33, 0.9],
    enter: [{
      selector: "[data-js-context-icon]",
      props: {
        translateX: ["0%", "-100%"]
      }
    }, {
      props: {
        opacity: [1, 0.5]
      }
    }],
    leave: [{
      selector: "[data-js-context-icon]",
      props: {
        translateX: ["-100%", "0%"]
      }
    }, {
      props: {
        opacity: [0, 1]
      }
    }]
  },
  "pop-fast": {
    duration: 75,
    easing: [0.14, 0.62, 0.33, 0.9],
    enter: [{
      selector: "[data-js-context-icon]",
      props: {
        translateX: ["0%", "100%"]
      }
    }, {
      props: {
        opacity: [1, 0.5]
      }
    }],
    leave: [{
      selector: "[data-js-context-icon]",
      props: {
        translateX: ["100%", "0%"]
      }
    }, {
      props: {
        opacity: [0, 1]
      }
    }]
  },
  "pop-fast-chat": {
    duration: 75,
    easing: [0.14, 0.62, 0.33, 0.9],
    enter: [{
      props: {
        width: ["20px", "5px"],
        opacity: [1, 0.5]
      }
    }],
    leave: [{
      props: {
        width: ["5px", "20px"],
        opacity: [0, 1]
      }
    }]
  },
  "toast-transition": {
    duration: 300,
    easing: a,
    cleanOnComplete: true,
    enter: {
      props: {
        translateY: ["0%", "100%"],
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  "slide-up-down": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateY: ["0%", "100%"]
      }
    },
    leave: {
      props: {
        translateY: ["100%", "0%"]
      }
    }
  },
  "slide-up-down-footer": {
    duration: 200,
    easing: a,
    enter: [{
      props: {
        translateY: ["0%", "100%"]
      }
    }, {
      selector: "[data-animate-btn]",
      props: {
        opacity: [1, 0],
        scale: [1, 0]
      },
      delay: 200,
      duration: 300
    }],
    leave: [{
      props: {
        translateY: ["100%", "0%"]
      },
      delay: 200
    }, {
      selector: "[data-animate-btn]",
      props: {
        opacity: [0, 1],
        scale: [0.6, 1]
      },
      duration: 200
    }]
  },
  "slide-up": {
    duration: 300,
    easing: a,
    enter: {
      props: {
        translateY: ["0%", "100%"]
      }
    },
    leave: {
      props: {
        translateY: ["100%", "0%"]
      }
    }
  },
  "emoji-search-slide-away": {
    duration: 300,
    enter: {
      easing: "easeOutCubic",
      props: {
        translateY: ["0%", "-100%"]
      }
    },
    leave: {
      easing: "easeInCubic",
      props: {
        translateY: ["-100%", "0%"]
      }
    }
  },
  "emoji-search-slide-away-fast": {
    duration: 80,
    enter: {
      easing: "easeOutCubic",
      props: {
        translateY: ["0%", "-100%"]
      }
    },
    leave: {
      easing: "easeInCubic",
      props: {
        translateY: ["-100%", "0%"]
      }
    }
  },
  none: {},
  btn: {
    duration: 300,
    easing: a,
    enter: {
      props: {
        scale: [1, 0],
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        scale: [0, 1],
        opacity: [0, 1]
      }
    }
  },
  pop_delay: {
    duration: 300,
    enter: [{
      props: {
        scale: [1, 0],
        opacity: [1, 0]
      },
      delay: 500,
      easing: a
    }],
    leave: {
      props: "transition.expandOut",
      easing: o
    }
  },
  "delay-leave": {
    duration: 1,
    enter: {
      props: {
        opacity: [1, 1]
      }
    },
    leave: {
      props: {
        opacity: [1, 1]
      },
      delay: 300
    }
  },
  "media-caption": {
    enter: [{
      props: {
        opacity: [0, 0],
        translateY: ["100%", "100%"]
      },
      duration: 200
    }, {
      props: {
        opacity: [1, 0],
        translateY: ["0%", "100%"]
      },
      easing: a,
      delay: 200,
      duration: 300
    }],
    leave: {
      props: {
        opacity: [0, 1]
      },
      easing: "ease",
      duration: 300
    }
  },
  "thumb-scale": {
    duration: 400,
    easing: a,
    enter: {
      props: "transition.expandIn"
    },
    leave: {
      props: "transition.expandOut"
    }
  },
  "thumb-scale-flex": {
    duration: 400,
    easing: a,
    enter: {
      props: {
        scale: [1, 0],
        display: "flex"
      }
    },
    leave: {
      duration: 200,
      props: {
        scale: [0, 1],
        display: "flex"
      }
    }
  },
  default: {
    duration: 300,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  noop: {
    duration: 0
  },
  pip: {
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 400
    },
    leave: {
      props: {
        scaleX: [0.5, 1],
        scaleY: [0.5, 1],
        opacity: [0, 1]
      },
      duration: 200,
      easing: s
    }
  },
  voip: {
    enter: {
      props: {
        opacity: [1, 0]
      },
      duration: 400
    },
    leave: {
      props: {
        scaleX: [0.5, 1],
        scaleY: [0.5, 1],
        opacity: [0, 1]
      },
      duration: 200,
      easing: s
    }
  },
  "replace-fade": {
    enter: [{
      props: {
        opacity: [0, 0]
      },
      duration: 400
    }, {
      props: {
        opacity: [1, 0]
      },
      duration: 400,
      delay: 400
    }],
    leave: {
      props: {
        opacity: [0, 1]
      },
      duration: 400
    }
  },
  scaleAndFade: {
    duration: 300,
    easing: a,
    enter: [{
      props: {
        scale: [1, 0]
      }
    }, {
      props: {
        opacity: [1, 0]
      },
      duration: 100
    }],
    leave: {
      props: {
        scaleX: [0, 1],
        scaleY: [0, 1],
        opacity: [0, 1]
      }
    }
  },
  "fade-ease-out": {
    easing: "ease-out",
    duration: 300,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  },
  "pop-drawer-fast": {
    duration: 50,
    easing: [0.14, 0.62, 0.33, 0.9],
    enter: [{
      selector: "[data-js-navbar]",
      props: {
        translateX: ["0%", "100%"]
      }
    }, {
      props: {
        opacity: [1, 0.5]
      }
    }],
    leave: [{
      selector: "[data-js-navbar]",
      props: {
        translateX: ["100%", "0%"]
      }
    }, {
      props: {
        opacity: [0, 1]
      }
    }]
  },
  "bot-plugin-carousel": {
    duration: 350,
    enter: {
      props: {
        opacity: [1, 0]
      }
    },
    leave: {
      props: {
        opacity: [0, 1]
      }
    }
  }
};
const u = Object.freeze(l);
exports.Transitions = u;