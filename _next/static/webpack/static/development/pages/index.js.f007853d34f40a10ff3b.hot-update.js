webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/really-smooth-scroll/build/really-smooth-scroll.js":
/*!*************************************************************************!*\
  !*** ./node_modules/really-smooth-scroll/build/really-smooth-scroll.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SmoothScroll = __webpack_require__(1);
	var spring = __webpack_require__(9);
	
	var mousewheelSensitivity = 6;
	var keydownSensitivity = 6;
	var forceStop = false;
	
	function getSpringVal(val) {
	  if (typeof val === 'number') return val;
	  return val.val;
	}
	
	function stayInRange(min, max, value) {
	  return Math.min(max, Math.max(min, value));
	}
	
	function difference(a, b) {
	  return Math.abs(a - b);
	}
	
	var moving = false;
	var scrollY = spring(0);
	
	var smoothScroll = new SmoothScroll({
	  style: { scrollY: 0 },
	  defaultStyle: { scrollY: 0 },
	  onRest: function onRest() {
	    moving = false;
	  }
	});
	
	function move(deltaY) {
	  if (!moving) {
	    if (difference(getSpringVal(scrollY), Math.round(window.scrollY)) > 4) {
	      scrollY = window.scrollY;
	      smoothScroll.componentWillReceiveProps({
	        style: { scrollY: scrollY }
	      });
	    }
	    moving = true;
	  }
	
	  if (document.querySelector('html').style.overflowY === 'hidden') {
	    return;
	  }
	
	  scrollY = stayInRange(0, document.querySelector('html').offsetHeight - window.innerHeight,
	  // getSpringVal(scrollY) + deltaY
	  window.scrollY + deltaY * mousewheelSensitivity);
	  window.scrollTo(window.scrollX, scrollY);
	}
	
	function onkeydown(e) {
	  if (e.target === document.body && e.key === 'ArrowDown') {
	    e.preventDefault();
	    move(keydownSensitivity * 3);
	  } else if (e.target === document.body && e.key === 'ArrowUp') {
	    e.preventDefault();
	    move(-keydownSensitivity * 3);
	  }
	}
	
	var mousewheelTimeout = void 0;
	var maxDeltaY = 0;
	function onmousewheel(e) {
	  var deltaY = stayInRange(-50, 50, e.deltaY);
	
	  if (maxDeltaY === 0 || !forceStop) {
	    maxDeltaY = deltaY;
	    // console.log('Set maxDeltaY');
	  }
	  if (document.body.contains(e.target) || e.target === document.body) {
	    e.preventDefault();
	    if (forceStop) {
	      // console.log(Math.abs(maxDeltaY), Math.abs(deltaY));
	      if (Math.abs(maxDeltaY) < Math.abs(deltaY) || maxDeltaY * deltaY < 0) {
	        // console.log('Should disable forceStop now 2');
	        forceStop = false;
	      } else {
	        maxDeltaY = deltaY;
	      }
	
	      if (mousewheelTimeout) clearTimeout(mousewheelTimeout);
	      mousewheelTimeout = setTimeout(function () {
	        // console.log('Should disable forceStop now');
	        forceStop = false;
	        maxDeltaY = 0;
	      }, 100);
	      return;
	    }
	    // console.log('Wheeling', forceStop);
	    move(deltaY);
	  }
	}
	
	window._scrollTo = window.scrollTo.bind(window);
	exports.shim = function shim() {
	  window.addEventListener('wheel', onmousewheel);
	  window.addEventListener('keydown', onkeydown);
	
	  if (!window.oldScrollTo) {
	    window.oldScrollTo = function () {
	      if (moving) {
	        window.stopScrolling();
	      }
	
	      smoothScroll.componentWillReceiveProps({
	        style: { scrollY: arguments.length <= 1 ? undefined : arguments[1] }
	      });
	    };
	
	    window.scrollTo = function (x, y) {
	      window._scrollTo(x, window.scrollY);
	      smoothScroll.componentWillReceiveProps({
	        style: { scrollY: spring(y) }
	      });
	    };
	  }
	  window.stopScrolling = function () {
	    forceStop = true;
	    smoothScroll.componentWillReceiveProps({
	      style: { scrollY: window.scrollY }
	    });
	  };
	};
	
	exports.config = function config(options) {
	  if (options.mousewheelSensitivity) {
	    mousewheelSensitivity = options.mousewheelSensitivity;
	  }
	  if (options.keydownSensitivity) {
	    keydownSensitivity = options.keydownSensitivity;
	  }
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var mapToZero = __webpack_require__(2);
	var stripStyle = __webpack_require__(3);
	var stepper = __webpack_require__(4);
	var defaultNow = __webpack_require__(5);
	var defaultRaf = __webpack_require__(7);
	var shouldStopAnimation = __webpack_require__(8);
	
	var msPerFrame = 1000 / 60;
	
	module.exports = function () {
	  function SmoothScroll(props) {
	    var _this = this;
	
	    _classCallCheck(this, SmoothScroll);
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state,
	          currentStyle = _state.currentStyle,
	          currentVelocity = _state.currentVelocity,
	          lastIdealStyle = _state.lastIdealStyle,
	          lastIdealVelocity = _state.lastIdealVelocity;
	
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = defaultRaf(function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (shouldStopAnimation(_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || defaultNow();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = stepper(msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var _stepper2 = _slicedToArray(_stepper, 2);
	
	              newLastIdealStyleValue = _stepper2[0];
	              newLastIdealVelocityValue = _stepper2[1];
	            }
	
	            var _stepper3 = stepper(msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision),
	                _stepper4 = _slicedToArray(_stepper3, 2),
	                nextIdealX = _stepper4[0],
	                nextIdealV = _stepper4[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    // it's possible that currentStyle's value is stale: if props is immediately
	    // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	    // at 0 (didn't have time to tick and interpolate even once). If we naively
	    // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	    // In reality currentStyle should be 400
	    this.unreadPropStyle = null;
	    // after checking for unreadPropStyle != null, we manually go set the
	    // non-interpolating values (those that are a number, without a spring
	    // config)
	
	
	    this.props = props;
	    this.state = this.defaultState();
	
	    this.prevTime = defaultNow();
	    this.startAnimationIfNecessary();
	  }
	
	  _createClass(SmoothScroll, [{
	    key: 'defaultState',
	    value: function defaultState() {
	      var _props = this.props,
	          defaultStyle = _props.defaultStyle,
	          style = _props.style;
	
	      var currentStyle = defaultStyle || stripStyle(style);
	      var currentVelocity = mapToZero(currentStyle);
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: currentVelocity,
	        lastIdealStyle: currentStyle,
	        lastIdealVelocity: currentVelocity
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.unreadPropStyle != null) {
	        // previous props haven't had the chance to be set yet; set them here
	        this.clearUnreadPropStyle(this.unreadPropStyle);
	      }
	
	      this.unreadPropStyle = nextProps.style;
	      if (this.animationID == null) {
	        this.prevTime = defaultNow();
	        this.startAnimationIfNecessary();
	      }
	
	      this.props = _extends({}, this.props, nextProps);
	    }
	  }, {
	    key: 'setState',
	    value: function setState(newState) {
	      this.state = _extends({}, this.state, newState);
	
	      window._scrollTo(window.scrollX, this.state.currentStyle.scrollY);
	    }
	  }]);
	
	  return SmoothScroll;
	}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	// currently used to initiate the velocity style object to 0
	module.exports = function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	/* @flow */
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	module.exports = function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	/* @flow */
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	// array reference around.
	var reusedTuple = [0, 0];
	module.exports = function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	// Generated by CoffeeScript 1.12.2
	(function () {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if (typeof performance !== "undefined" && performance !== null && performance.now) {
	    module.exports = function () {
	      return performance.now();
	    };
	  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
	    module.exports = function () {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function getNanoSeconds() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function () {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function () {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	}).call(undefined);
	
	//# sourceMappingURL=performance-now.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var now = __webpack_require__(5),
	    root = typeof window === 'undefined' ? global : window,
	    vendors = ['moz', 'webkit'],
	    suffix = 'AnimationFrame',
	    raf = root['request' + suffix],
	    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
	
	for (var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix];
	  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
	}
	
	// Some versions of FF have rAF but not cAF
	if (!raf || !caf) {
	  var last = 0,
	      id = 0,
	      queue = [],
	      frameDuration = 1000 / 60;
	
	  raf = function raf(callback) {
	    if (queue.length === 0) {
	      var _now = now(),
	          next = Math.max(0, frameDuration - (_now - last));
	      last = next + _now;
	      setTimeout(function () {
	        var cp = queue.slice(0);
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0;
	        for (var i = 0; i < cp.length; i++) {
	          if (!cp[i].cancelled) {
	            try {
	              cp[i].callback(last);
	            } catch (e) {
	              setTimeout(function () {
	                throw e;
	              }, 0);
	            }
	          }
	        }
	      }, Math.round(next));
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    });
	    return id;
	  };
	
	  caf = function caf(handle) {
	    for (var i = 0; i < queue.length; i++) {
	      if (queue[i].handle === handle) {
	        queue[i].cancelled = true;
	      }
	    }
	  };
	}
	
	module.exports = function (fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn);
	};
	module.exports.cancel = function () {
	  caf.apply(root, arguments);
	};
	module.exports.polyfill = function () {
	  root.requestAnimationFrame = raf;
	  root.cancelAnimationFrame = caf;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	module.exports = function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var presets = __webpack_require__(10);
	
	var defaultConfig = _extends({}, presets.noWobble, {
	  precision: 0.01
	});
	
	module.exports = function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=really-smooth-scroll.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../breakpoints */ "./breakpoints.js");
/* harmony import */ var _components_ProductosLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ProductosLayout */ "./components/ProductosLayout.js");
/* harmony import */ var _components_Producto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Producto */ "./components/Producto.js");















var ReallySmoothScroll = __webpack_require__(/*! really-smooth-scroll */ "./node_modules/really-smooth-scroll/build/really-smooth-scroll.js");

ReallySmoothScroll.shim();

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('🚀 Coded with love by The Yellow Code');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Filippini"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "banner"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "imagen-principal"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/undraw_medicine.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "contenedor-titulo"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "titulo"
      }, " Fabricantes de negatoscopios y mobiliario hospitalario "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, " Texto para llenar "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "btn btn-primary"
      }, " Conocer M\xE1s ")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        role: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "Productos Destacados")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ProductosLayout__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "como-comprar"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "\xBFComo Comprar?")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "img-instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "static/Compras.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]]) + " " + "instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Usted debe contactarse con nosotros a traves de los medios que le ofrecemos."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Debe realizar el deposito en nuestra cuenta bancaria."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Nos env\xEDa una copia del comprobante de dep\xF3sito y/o transferencia."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Una vez acreditado el pago se procede al embalaje y despacho del art\xEDculo."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Despachamos su producto por una empresa de encomiendas."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1078160047", [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]]])
      }, "Ud. recibe su producto en la terminal de su localidad y abona el valor de la encomienda.")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1078160047",
        dynamic: [_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop]
      }, ".banner.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:100px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin:0;max-width:200px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#408AB4;}.contenedor-titulo.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:10px;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:1.2em;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-weight:600;}.btn.__jsx-style-dynamic-selector{border:none;width:60%;padding:15px 35px;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-radius:34px;cursor:pointer;-webkit-transition:all .3s;transition:all .3s;font-size:100%;}.btn.__jsx-style-dynamic-selector:hover{background-color:#113F67;box-shadow:0 12px 14px 0 rgba(0,0,0,0.30);}.btn-primary.__jsx-style-dynamic-selector{color:white;background-color:#65C6C4;}.btn-secondary.__jsx-style-dynamic-selector{color:white;background-color:#113F67;}.contenedor-titulo-rayita.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#408AB4;font-weight:600;margin-top:5%;}.img-instrucciones.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70%;height:30%;}.instrucciones.__jsx-style-dynamic-selector{width:80%;font-size:1em;font-weight:bold;color:#113F67;}.instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{list-style:none;border-style:solid;}.instrucciones.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{padding:10px;}@media ".concat(_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].tablet, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:300px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:40%;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;text-align:left;}.titulo.__jsx-style-dynamic-selector{width:100%;text-align:left;}.img-instrucciones.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:45%;height:30%;}.instrucciones.__jsx-style-dynamic-selector{width:90%;font-size:.9em;font-weight:bold;}}@media ").concat(_breakpoints__WEBPACK_IMPORTED_MODULE_11__["device"].desktop, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.contenedor-titulo.__jsx-style-dynamic-selector{width:45%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;left:2%;}.imagen-principal.__jsx-style-dynamic-selector{width:40%;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:600px;position:relative;left:-2%;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:2.1em;text-align:left;}.contenedor-titulo.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;}.titulo-rayita.__jsx-style-dynamic-selector{font-size:1.5em;}.img-instrucciones.__jsx-style-dynamic-selector{width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img-instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{font-size:1.1em;width:40%;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxmaWxpcHBpbmlfaG9zcGl0YWxhcmlvXFxDbGllbnRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RndCLEFBSXVDLEFBU0UsQUFLSixBQU1DLEFBU0UsQUFLSyxBQU1KLEFBWWEsQUFLYixBQUtBLEFBS0QsQUFXQyxBQU9GLEFBTUEsQUFRTSxBQUtILEFBS2lCLEFBSVYsQUFJUCxBQU1DLEFBS1EsQUFJVCxBQU1DLEFBV2dCLEFBSWhCLEFBT0EsQUFJTSxBQU1BLEFBS04sQUFNSyxBQUlMLEFBS00sQUFJUCxTQW5MRyxDQU1KLEFBaUVELEFBTUcsQUEwQlUsQUFlVCxBQU1JLEFBZU8sQUFPMUIsQUFrQ0EsQ0FsTVksQUFtRUEsQUF3RE8sQUFvRG5CLEFBVXNCLENBNUoxQixBQVdhLEFBaUJnQixBQUtBLENBMEM3QixHQXRFdUIsQUFpRUEsQUFjbkIsQUFtRHFCLEFBTUYsQUFXbkIsQUFTYSxLQXhHakIsQUErQ0ksQ0E1RmtCLEVBbURGLENBN0VwQixBQXFDOEMsQUF1RnRCLENBb0RwQixDQW5FQSxLQStDQSxFQU5ZLENBakVoQixFQTFDQSxBQUtBLEdBckJzQixDQW1ETCxDQStDYixDQTBCQSxZQXhFSixHQW5EeUIsU0FVekIsRUEyRUksS0F2SHFCLEFBcUVBLE1BNEdLLElBcktMLENBcEJDLEFBbUVOLFFBeUNoQixBQXdDQSxRQWhGc0IsQUFpREgsT0ExRUEsQ0FUSCxRQW9GaEIsRUFtQ3FCLE1BdEh6QixFQVNrQixVQThHSCxLQTdHUSxHQThHbkIsT0FsSkosQUFxRXVCLFVBekRHLGlCQXFLdEIsS0F6TGlCLElBNkNGLFlBdUJELEVBbkVJLENBNkN0QixXQXVCb0IsZ0JBQ0YsY0FDbEIsQ0FRQSxnQkExRHFCLGtCQUNILGNBQ2xCLEVBckJ5Qiw4RUFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYXJvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGZpbGlwcGluaV9ob3NwaXRhbGFyaW9cXENsaWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgIHsgTGluayB9ICBmcm9tICcuLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICcuLi9icmVha3BvaW50cydcclxuaW1wb3J0IFByb2R1Y3Rvc0xheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3Rvc0xheW91dCc7XHJcbmltcG9ydCBQcm9kdWN0byBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RvJztcclxuY29uc3QgUmVhbGx5U21vb3RoU2Nyb2xsID0gcmVxdWlyZSgncmVhbGx5LXNtb290aC1zY3JvbGwnKTtcclxuXHJcblJlYWxseVNtb290aFNjcm9sbC5zaGltKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5qAIENvZGVkIHdpdGggbG92ZSBieSBUaGUgWWVsbG93IENvZGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJGaWxpcHBpbmlcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlbi1wcmluY2lwYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdW5kcmF3X21lZGljaW5lLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yLXRpdHVsb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvXCI+IEZhYnJpY2FudGVzIGRlIG5lZ2F0b3Njb3Bpb3MgeSBtb2JpbGlhcmlvIGhvc3BpdGFsYXJpbyA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gVGV4dG8gcGFyYSBsbGVuYXIgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+IENvbm9jZXIgTcOhcyA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItdGl0dWxvLXJheWl0YVwiIHJvbGU9XCJtYWluXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXR1bG8tcmF5aXRhXCI+UHJvZHVjdG9zIERlc3RhY2Fkb3M8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwic3RhdGljL2NhbWlsbGEucG5nXCIgaWQ9XCIxXCI+PC9Qcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwic3RhdGljL2NhbWlsbGEucG5nXCIgaWQ9XCIxXCI+PC9Qcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwic3RhdGljL2NhbWlsbGEucG5nXCIgaWQ9XCIxXCI+PC9Qcm9kdWN0bz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3Rvc0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tby1jb21wcmFyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItdGl0dWxvLXJheWl0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdHVsby1yYXlpdGFcIj7Cv0NvbW8gQ29tcHJhcj88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWluc3RydWNjaW9uZXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInN0YXRpYy9Db21wcmFzLnN2Z1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiaW5zdHJ1Y2Npb25lc1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXN0ZWQgZGViZSBjb250YWN0YXJzZSBjb24gbm9zb3Ryb3MgYSB0cmF2ZXMgZGUgbG9zIG1lZGlvcyBxdWUgbGUgb2ZyZWNlbW9zLjwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZWJlIHJlYWxpemFyIGVsIGRlcG9zaXRvIGVuIG51ZXN0cmEgY3VlbnRhIGJhbmNhcmlhLjwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ob3MgZW52w61hIHVuYSBjb3BpYSBkZWwgY29tcHJvYmFudGUgZGUgZGVww7NzaXRvIHkvbyB0cmFuc2ZlcmVuY2lhLjwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VbmEgdmV6IGFjcmVkaXRhZG8gZWwgcGFnbyBzZSBwcm9jZWRlIGFsIGVtYmFsYWplIHkgZGVzcGFjaG8gZGVsIGFydMOtY3Vsby48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXNwYWNoYW1vcyBzdSBwcm9kdWN0byBwb3IgdW5hIGVtcHJlc2EgZGUgZW5jb21pZW5kYXMuPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVkLiByZWNpYmUgc3UgcHJvZHVjdG8gZW4gbGEgdGVybWluYWwgZGUgc3UgbG9jYWxpZGFkIHkgYWJvbmEgZWwgdmFsb3IgZGUgbGEgZW5jb21pZW5kYS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQwOEFCNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxvID4gKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNGNjc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMTRweCAwIHJnYmEoMCwwLDAsMC4zMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NUM2QzQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNGNjc7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8tcmF5aXRhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDA4QUI0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lcyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y2Npb25lc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojMTEzRjY3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXMgb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXMgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgLmltYWdlbi1wcmluY2lwYWwgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXR1bG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjY2lvbmVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5kZXNrdG9wfXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2VuLXByaW5jaXBhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIC5pbWFnZW4tcHJpbmNpcGFsIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6LTIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8gLnRpdHVsb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxvIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdHVsby1yYXlpdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIG9se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\filippini_hospitalario\\Client\\pages\\index.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f007853d34f40a10ff3b.hot-update.js.map