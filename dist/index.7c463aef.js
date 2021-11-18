// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8iqBh":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "72b240747c463aef";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"95H7P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSupportedBrowser = require("./helpers/isSupportedBrowser");
var _isSupportedBrowserDefault = parcelHelpers.interopDefault(_isSupportedBrowser);
var _viewport = require("./helpers/viewport");
var _convertToArray = require("./helpers/convertToArray");
var _convertToArrayDefault = parcelHelpers.interopDefault(_convertToArray);
var _parallax = require("./instances/parallax");
var _parallaxDefault = parcelHelpers.interopDefault(_parallax);
let isInit = false;
let instances = [];
let frameID;
let resizeID;
class SimpleParallax {
    constructor(elements, options){
        if (!elements) return;
        // check if the browser support simpleParallax
        if (!_isSupportedBrowserDefault.default()) return;
        this.elements = _convertToArrayDefault.default(elements);
        this.defaults = {
            delay: 0,
            orientation: 'up',
            scale: 1.3,
            overflow: false,
            transition: 'cubic-bezier(0,0,0,1)',
            customContainer: '',
            customWrapper: '',
            maxTransition: 0
        };
        this.settings = Object.assign(this.defaults, options);
        if (this.settings.customContainer) [this.customContainer] = _convertToArrayDefault.default(this.settings.customContainer);
        this.lastPosition = -1;
        this.resizeIsDone = this.resizeIsDone.bind(this);
        this.refresh = this.refresh.bind(this);
        this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
        this.init();
    }
    init() {
        _viewport.viewport.setViewportAll(this.customContainer);
        instances = [
            ...this.elements.map((element)=>new _parallaxDefault.default(element, this.settings)
            ),
            ...instances
        ];
        // update the instance length
        // instancesLength = instances.length;
        // only if this is the first simpleParallax init
        if (!isInit) {
            // init the frame
            this.proceedRequestAnimationFrame();
            window.addEventListener('resize', this.resizeIsDone);
            isInit = true;
        }
    }
    // wait for resize to be completely done
    resizeIsDone() {
        clearTimeout(resizeID);
        resizeID = setTimeout(this.refresh, 200);
    }
    // animation frame
    proceedRequestAnimationFrame() {
        // get the offset top of the viewport
        _viewport.viewport.setViewportTop(this.customContainer);
        if (this.lastPosition === _viewport.viewport.positions.top) {
            // if last position if the same than the curent one
            // callback the animationFrame and exit the current loop
            frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
            return;
        }
        // get the offset bottom of the viewport
        _viewport.viewport.setViewportBottom();
        // proceed with the current element
        instances.forEach((instance)=>{
            this.proceedElement(instance);
        });
        // callback the animationFrame
        frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
        // store the last position
        this.lastPosition = _viewport.viewport.positions.top;
    }
    // proceed the element
    proceedElement(instance1) {
        let isVisible = false;
        // if this is a custom container
        // use old function to check if element visible
        if (this.customContainer) isVisible = instance1.checkIfVisible();
        else isVisible = instance1.isVisible;
        // if element not visible, stop it
        if (!isVisible) return;
        // if percentage is equal to the last one, no need to continue
        if (!instance1.getTranslateValue()) return;
        // animate the image
        instance1.animate();
    }
    refresh() {
        // re-get all the viewport positions
        _viewport.viewport.setViewportAll(this.customContainer);
        instances.forEach((instance)=>{
            // re-get the current element offset
            instance.getElementOffset();
            // re-get the range if the current element
            instance.getRangeMax();
        });
        // force the request animation frame to fired
        this.lastPosition = -1;
    }
    destroy() {
        const instancesToDestroy = [];
        // remove all instances that need to be destroyed from the instances array
        instances = instances.filter((instance)=>{
            if (this.elements.includes(instance.element)) {
                // push instance that need to be destroyed into instancesToDestroy
                instancesToDestroy.push(instance);
                return false;
            }
            return instance;
        });
        instancesToDestroy.forEach((instance)=>{
            // unset style
            instance.unSetStyle();
            if (this.settings.overflow === false) // if overflow option is set to false
            // unwrap the element from .simpleParallax wrapper container
            instance.unWrapElement();
        });
        // if no instances left, remove the raf and resize event = simpleParallax fully destroyed
        if (!instances.length) {
            // cancel the animation frame
            window.cancelAnimationFrame(frameID);
            // detach the resize event
            window.removeEventListener('resize', this.refresh);
            // Reset isInit
            isInit = false;
        }
    }
}
exports.default = SimpleParallax;

},{"./helpers/isSupportedBrowser":"ccED4","./helpers/viewport":"gssKT","./helpers/convertToArray":"6rtge","./instances/parallax":"6Yx7a","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ccED4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// need closest support
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
// need Intersection Observer support
// https://github.com/w3c/IntersectionObserver/tree/master/polyfill
const isSupportedBrowser = ()=>Element.prototype.closest && 'IntersectionObserver' in window
;
exports.default = isSupportedBrowser;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gssKT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "viewport", ()=>viewport
);
parcelHelpers.export(exports, "default", ()=>viewport
);
class Viewport {
    constructor(){
        this.positions = {
            top: 0,
            bottom: 0,
            height: 0
        };
    }
    setViewportTop(container) {
        // if this is a custom container, user the scrollTop
        this.positions.top = container ? container.scrollTop : window.pageYOffset;
        return this.positions;
    }
    setViewportBottom() {
        this.positions.bottom = this.positions.top + this.positions.height;
        return this.positions;
    }
    setViewportAll(container1) {
        // if this is a custom container, user the scrollTop
        this.positions.top = container1 ? container1.scrollTop : window.pageYOffset;
        // if this is a custom container, get the height from the custom container itself
        this.positions.height = container1 ? container1.clientHeight : document.documentElement.clientHeight;
        this.positions.bottom = this.positions.top + this.positions.height;
        return this.positions;
    }
}
const viewport = new Viewport();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6rtge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// check whether the element is a Node List, a HTML Collection or an array
// return an array of nodes
const convertToArray = (elements)=>{
    if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements)) return Array.from(elements);
    if (typeof elements === 'string' || elements instanceof String) return document.querySelectorAll(elements);
    return [
        elements
    ];
};
exports.default = convertToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Yx7a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cssTransform = require("../helpers/cssTransform");
var _cssTransformDefault = parcelHelpers.interopDefault(_cssTransform);
var _isImageLoaded = require("../helpers/isImageLoaded");
var _isImageLoadedDefault = parcelHelpers.interopDefault(_isImageLoaded);
var _viewport = require("../helpers/viewport");
class ParallaxInstance {
    constructor(element, options){
        // set the element & settings
        this.element = element;
        this.elementContainer = element;
        this.settings = options;
        this.isVisible = true;
        this.isInit = false;
        this.oldTranslateValue = -1;
        this.init = this.init.bind(this);
        this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null;
        // check if images has not been loaded yet
        if (_isImageLoadedDefault.default(element)) this.init();
        else this.element.addEventListener('load', ()=>{
            // timeout to ensure the image is fully loaded into the DOM
            setTimeout(()=>{
                this.init(true);
            }, 50);
        });
    }
    init(asyncInit) {
        // for some reason, <picture> are init an infinite time on windows OS
        if (this.isInit) return;
        if (asyncInit) // in case the image is lazy loaded, the rangemax should be cleared
        // so it will be updated in the next getTranslateValue()
        this.rangeMax = null;
        // check if element has not been already initialized with simpleParallax
        if (this.element.closest('.simpleParallax')) return;
        if (this.settings.overflow === false) // if overflow option is set to false
        // wrap the element into a div to apply overflow
        this.wrapElement(this.element);
        // apply the transform style on the image
        this.setTransformCSS();
        // get the current element offset
        this.getElementOffset();
        // init the Intesection Observer
        this.intersectionObserver();
        // get its translated value
        this.getTranslateValue();
        // apply its translation even if not visible for the first init
        this.animate();
        // if a delay has been set
        if (this.settings.delay > 0) // apply a timeout to avoid buggy effect
        setTimeout(()=>{
            // apply the transition style on the image
            this.setTransitionCSS();
            //add isInit class
            this.elementContainer.classList.add('simple-parallax-initialized');
        }, 10);
        else //add isInit class
        this.elementContainer.classList.add('simple-parallax-initialized');
        // for some reason, <picture> are init an infinite time on windows OS
        this.isInit = true;
    }
    // if overflow option is set to false
    // wrap the element into a .simpleParallax div and apply overflow hidden to hide the image excedant (result of the scale)
    wrapElement() {
        // check is current image is in a <picture> tag
        const elementToWrap = this.element.closest('picture') || this.element;
        // create a .simpleParallax wrapper container
        // if there is a custom wrapper
        // override the wrapper with it
        let wrapper = this.customWrapper || document.createElement('div');
        wrapper.classList.add('simpleParallax');
        wrapper.style.overflow = 'hidden';
        // append the image inside the new wrapper
        if (!this.customWrapper) {
            elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
            wrapper.appendChild(elementToWrap);
        }
        this.elementContainer = wrapper;
    }
    // unwrap the element from .simpleParallax wrapper container
    unWrapElement() {
        const wrapper = this.elementContainer;
        // if there is a custom wrapper, we jusy need to remove the class and style
        if (this.customWrapper) {
            wrapper.classList.remove('simpleParallax');
            wrapper.style.overflow = '';
        } else wrapper.replaceWith(...wrapper.childNodes);
    }
    // apply default style on element
    setTransformCSS() {
        if (this.settings.overflow === false) // if overflow option is set to false
        // add scale style so the image can be translated without getting out of its container
        this.element.style[_cssTransformDefault.default] = `scale(${this.settings.scale})`;
        // add will-change CSS property to improve perfomance
        this.element.style.willChange = 'transform';
    }
    // apply the transition effet
    setTransitionCSS() {
        // add transition option
        this.element.style.transition = `transform ${this.settings.delay}s ${this.settings.transition}`;
    }
    // remove style of the element
    unSetStyle() {
        // remove will change inline style
        this.element.style.willChange = '';
        this.element.style[_cssTransformDefault.default] = '';
        this.element.style.transition = '';
    }
    // get the current element offset
    getElementOffset() {
        // get position of the element
        const positions = this.elementContainer.getBoundingClientRect();
        // get height
        this.elementHeight = positions.height;
        // get offset top
        this.elementTop = positions.top + _viewport.viewport.positions.top;
        // if there is a custom container
        if (this.settings.customContainer) {
            // we need to do some calculation to get the position from the parent rather than the viewport
            const parentPositions = this.settings.customContainer.getBoundingClientRect();
            this.elementTop = positions.top - parentPositions.top + _viewport.viewport.positions.top;
        }
        // get offset bottom
        this.elementBottom = this.elementHeight + this.elementTop;
    }
    // build the Threshold array to cater change for every pixel scrolled
    buildThresholdList() {
        const thresholds = [];
        for(let i = 1; i <= this.elementHeight; i++){
            const ratio = i / this.elementHeight;
            thresholds.push(ratio);
        }
        return thresholds;
    }
    // create the Intersection Observer
    intersectionObserver() {
        const options = {
            root: null,
            threshold: this.buildThresholdList()
        };
        this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
        this.observer.observe(this.element);
    }
    // Intersection Observer Callback to set the element at visible state or not
    intersectionObserverCallback(entries) {
        entries.forEach((entry)=>{
            if (entry.isIntersecting) this.isVisible = true;
            else this.isVisible = false;
        });
    }
    // check if the current element is visible in the Viewport
    // for browser that not support Intersection Observer API
    checkIfVisible() {
        return this.elementBottom > _viewport.viewport.positions.top && this.elementTop < _viewport.viewport.positions.bottom;
    }
    // calculate the range between image will be translated
    getRangeMax() {
        // get the real height of the image without scale
        const elementImageHeight = this.element.clientHeight;
        // range is calculate with the image height by the scale
        this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
    }
    // get the percentage and the translate value to apply on the element
    getTranslateValue() {
        // calculate the % position of the element comparing to the viewport
        // rounding percentage to a 1 number float to avoid unn unnecessary calculation
        let percentage = ((_viewport.viewport.positions.bottom - this.elementTop) / ((_viewport.viewport.positions.height + this.elementHeight) / 100)).toFixed(1);
        // sometime the percentage exceeds 100 or goes below 0
        percentage = Math.min(100, Math.max(0, percentage));
        // if a maxTransition has been set, we round the percentage to that number
        if (this.settings.maxTransition !== 0 && percentage > this.settings.maxTransition) percentage = this.settings.maxTransition;
        // sometime the same percentage is returned
        // if so we don't do anything
        if (this.oldPercentage === percentage) return false;
        // if not range max is set, recalculate it
        if (!this.rangeMax) this.getRangeMax();
        // transform this % into the max range of the element
        // rounding translateValue to a non float int - as minimum pixel for browser to render is 1 (no 0.5)
        this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0);
        // sometime the same translate value is returned
        // if so we don't do anything
        if (this.oldTranslateValue === this.translateValue) return false;
        // store the current percentage
        this.oldPercentage = percentage;
        this.oldTranslateValue = this.translateValue;
        return true;
    }
    // animate the image
    animate() {
        let translateValueY = 0;
        let translateValueX = 0;
        let inlineCss;
        if (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) // if orientation option is left or right
        // use horizontal axe - X axe
        translateValueX = `${this.settings.orientation.includes('left') ? this.translateValue * -1 : this.translateValue}px`;
        if (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) // if orientation option is up or down
        // use vertical axe - Y axe
        translateValueY = `${this.settings.orientation.includes('up') ? this.translateValue * -1 : this.translateValue}px`;
        // set style to apply to the element
        if (this.settings.overflow === false) // if overflow option is set to false
        // add the scale style
        inlineCss = `translate3d(${translateValueX}, ${translateValueY}, 0) scale(${this.settings.scale})`;
        else inlineCss = `translate3d(${translateValueX}, ${translateValueY}, 0)`;
        // add style on the element using the adequate CSS transform
        this.element.style[_cssTransformDefault.default] = inlineCss;
    }
}
exports.default = ParallaxInstance;

},{"../helpers/cssTransform":"1auz9","../helpers/isImageLoaded":"64nts","../helpers/viewport":"gssKT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1auz9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Detect css transform
const cssTransform = ()=>{
    const prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ');
    let transform;
    let i = 0;
    while(transform === undefined){
        transform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
        i += 1;
    }
    return transform;
};
exports.default = cssTransform();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"64nts":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// check if media is fully loaded
const isImageLoaded = (media)=>{
    // if the media is a video, return true
    if (media.tagName.toLowerCase() !== 'img' && media.tagName.toLowerCase() !== 'picture') return true;
    // check if media is set as the parameter
    if (!media) return false;
    // check if media has been 100% loaded
    if (!media.complete) return false;
    // check if the media is displayed
    if (typeof media.naturalWidth !== 'undefined' && media.naturalWidth === 0) return false;
    return true;
};
exports.default = isImageLoaded;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["8iqBh","95H7P"], "95H7P", "parcelRequire716c")

//# sourceMappingURL=index.7c463aef.js.map
