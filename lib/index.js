/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(9);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(15);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = [_index2.default, _index4.default, _index6.default];

	var install = function install(Vue) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  /* istanbul ignore if */
	  if (install.installed) return;
	  components.map(function (component) {
	    Vue.component(component.name, component);
	  });
	};

	/* istanbul ignore if */
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	};

	module.exports = {
	  AddressSelect: _index2.default,
	  Prompt: _index4.default,
	  SliderDelete: _index6.default
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addressSelect = __webpack_require__(2);

	var _addressSelect2 = _interopRequireDefault(_addressSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_addressSelect2.default.install = function (Vue) {
	  Vue.component(_addressSelect2.default.name, _addressSelect2.default);
	};

	exports.default = _addressSelect2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(3)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\lvyang\\repositories\\mobile-ui\\packages\\address-select\\src\\address-select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-09ee4a0d"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-09ee4a0d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-09ee4a0d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] address-select.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-09ee4a0d&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address-select.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-09ee4a0d&scoped=true!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./address-select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*地址选择样式 start*/\n.address_roll[data-v-09ee4a0d]{\n\tdisplay: -webkit-box;\n\twidth: 100%;\n\theight: auto;\n\toverflow: hidden;\n\tfont-weight: bold;\n\tfont-size: 0;\n    -webkit-mask: -webkit-linear-gradient(top, #debb47 50%, rgba(36, 142, 36, 0));\n}\n.address_roll > div[data-v-09ee4a0d]{\n\tposition: relative;\n\t-webkit-box-flex:1;\n\twidth: 33.33%;\n\theight: 4.5rem;\n\tfont-size: 0.45rem;\n\ttext-align: center;\n    -webkit-mask: -webkit-linear-gradient(bottom, #debb47 50%, rgba(36, 142, 36, 0));\n}\n.tooth[data-v-09ee4a0d]{\n\theight: 1.3rem;\n\tline-height: 1.3rem;\n\toverflow: hidden;\n}\n.gear[data-v-09ee4a0d]{\n    position: absolute;\n    margin-top: 1.6rem;\n    z-index: 2;\n    width: 100%;\n}\n.address_province[data-v-09ee4a0d],.address_city[data-v-09ee4a0d],.address_county[data-v-09ee4a0d]{\n}\n/*地址选择样式 end*/\n/*地址选择器地址部分*/\n.select_area[data-v-09ee4a0d]{\n\tposition: absolute;\n    top: 1.6rem;\n    width: 100%;\n    margin: 0;\n    height: 1.3rem;\n    box-sizing: border-box;\n    z-index: 0;\n    border-top: 1px solid #e6e6e6;\n    border-bottom: 1px solid #e6e6e6;\n}\n/*地址选择器按钮部分样式*/\n.address_operation[data-v-09ee4a0d]{\n\twidth: 10rem;\n\theight: 1.5rem;\n}\n.address_operation button[data-v-09ee4a0d]{\n\twidth: 2rem;\n\theight: 1.1rem;\n\tline-height: 1.1rem;\n\tmargin: 0.2rem;\n\ttext-align: center;\n\tborder-radius: 5px;\n\tbackground-color: #f24040;\n\tcolor: #ffffff;\n\toutline: none;\n\tborder: none;\n\tfont-size: 0.45rem;\n}\n.address_operation button[data-v-09ee4a0d]:nth-child(1){\n\tfloat: left;\n}\n.address_operation button[data-v-09ee4a0d]:nth-child(2){\n\tfloat: right;\n}\n/*地址选择器定位*/\n.address_select[data-v-09ee4a0d]{\n\tposition: fixed;\n\tbackground-color: #ffffff;\n\twidth: 10rem;\n\theight: 6rem;\n\tbottom: 0px;\n\tfont-size: 0;\n\tz-index: 1000;\n}\n", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		name: "MoAddressSelect",
		data: function data() {
			return {
				index: [0, 0, 0], //选中的下标
				code: [0, 0, 0], //选中的code
				name: ["", "", ""], //选中的name
				province: [], //省
				city: [], //市
				county: [] };
		},

		props: ['data'],
		watch: {
			data: {
				handler: function handler(val, oldVal) {
					//默认
					this.setAddressData();
				}
			}
		},
		methods: {
			cancelAddress: function cancelAddress() {},
			selectAddress: function selectAddress() {
				var x = this.index[0],
				    y = this.index[1],
				    z = this.index[2];
				this.code[0] = this.province[x].code;
				this.name[0] = this.province[x].name;
				if (this.city.length > 0) {
					this.code[1] = this.city[y].code;
					this.name[1] = this.city[y].name;
				}
				if (this.county.length > 0) {
					this.code[2] = this.county[z].code;
					this.name[2] = this.county[z].name;
				}
				console.log(this.code);
				console.log(this.name);
			},
			touchStart: function touchStart(e) {
				e.preventDefault();
				for (var b = e.target;;) {
					if (b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				b["old_" + b.id] = e.targetTouches[0].screenY; //记录手指触摸的初始位置 
				b["o_t_" + b.id] = new Date().getTime(); //记录手指开始触摸的时间
				var currentTop = b.getAttribute("top"); //获取当前高度
				if (currentTop) {
					//记录当前高度
					b["o_d_" + b.id] = parseFloat(currentTop.replace(/rem/g, ""));
				} else {
					b["o_d_" + b.id] = 0;
				}
			},
			touchMove: function touchMove(e) {
				e.preventDefault();
				for (var b = e.target;;) {
					if (b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				b["new_" + b.id] = e.targetTouches[0].screenY; //手指滑动的当前位置
				b["n_t_" + b.id] = new Date().getTime(); //手指滑动的当前时间
				//计算出手指滑动的距离,75 为设计稿宽度/10
				var gap = (b["new_" + b.id] - b["old_" + b.id]) / 75;
				b["pos_" + b.id] = b["o_d_" + b.id] + gap;
				b.style["-webkit-transform"] = "translate3d(0," + b["pos_" + b.id] + "rem,0)";
				b.setAttribute("top", b["pos_" + b.id] + "rem");
			},
			touchEnd: function touchEnd(e) {
				e.preventDefault();
				for (var b = e.target;;) {
					if (b.classList.contains("gear")) break;
					b = b.parentElement;
				}
				//滑动结束时，计算单位毫秒（ms）内，手指滑动的距离
				//				var speed = (b["new_" + b.id] - b["old_" + b.id]) / (b["n_t_" + b.id] - b["o_t_" + b.id]);
				//				b["spd_" + b.id] = speed;

				var pos = Math.round(b["pos_" + b.id] / 1.3) * 1.3;
				//pos大于0,说明到了最上面。强制显示第一条数据。flag做标识
				var flag = 0;
				if (pos > 0) {
					pos = 0;
					flag = !0;
				}
				var gearMax = (b.children.length - 1) * 1.3; //35表示css高度
				//pos小于最大值，说明到了最下面。强制显示最后一条数据。flag做标识
				gearMax < Math.abs(pos) && (pos = -gearMax, flag = !0);

				b["pos_" + b.id] = pos;
				b.style["-webkit-transform"] = "translate3d(0," + pos + "rem,0)";
				b.setAttribute("top", pos + "rem");

				if (b.classList.contains("address_province")) {
					this.index[0] = Math.round(Math.abs(pos / 1.3));
					this.index[1] = 0;
					this.index[2] = 0;
					var city = document.querySelector(".address_city");
					var county = document.querySelector(".address_county");
					city.style["-webkit-transform"] = "translate3d(0,0,0)";
					county.style["-webkit-transform"] = "translate3d(0,0,0)";
				} else if (b.classList.contains("address_city")) {
					this.index[1] = Math.round(Math.abs(pos / 1.3));
					this.index[2] = 0;
					var county = document.querySelector(".address_county");
					county.style["-webkit-transform"] = "translate3d(0,0,0)";
				} else if (b.classList.contains("address_county")) {
					this.index[2] = Math.round(Math.abs(pos / 1.3));
				}
				this.setAddressData();
			},
			setAddressData: function setAddressData() {
				this.province = this.data;
				if (this.data[this.index[0]] != undefined) {
					this.city = this.data[this.index[0]].child_code;
				} else {
					this.city = [];
				}
				if (this.data[this.index[0]] != undefined && this.data[this.index[0]].child_code[this.index[1]] != undefined) {
					this.county = this.data[this.index[0]].child_code[this.index[1]].child_code;
				} else {
					this.county = [];
				}
			}
		}
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "address_select"
	  }, [_c('div', {
	    staticClass: "address_operation"
	  }, [_c('button', {
	    on: {
	      "click": _vm.cancelAddress
	    }
	  }, [_vm._v("取消")]), _vm._v(" "), _c('button', {
	    on: {
	      "click": _vm.selectAddress
	    }
	  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
	    staticClass: "address_roll"
	  }, [_c('div', [_c('div', {
	    staticClass: "gear address_province",
	    on: {
	      "touchstart": function($event) {
	        _vm.touchStart($event)
	      },
	      "touchend": function($event) {
	        _vm.touchEnd($event)
	      },
	      "touchmove": function($event) {
	        _vm.touchMove($event)
	      }
	    }
	  }, _vm._l((_vm.province), function(p) {
	    return _c('div', {
	      ref: p.code,
	      refInFor: true,
	      staticClass: "tooth"
	    }, [_vm._v(_vm._s(p.name))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "select_area"
	  })]), _vm._v(" "), _c('div', [_c('div', {
	    staticClass: "gear address_city",
	    on: {
	      "touchstart": function($event) {
	        _vm.touchStart($event)
	      },
	      "touchend": function($event) {
	        _vm.touchEnd($event)
	      },
	      "touchmove": function($event) {
	        _vm.touchMove($event)
	      }
	    }
	  }, _vm._l((_vm.city), function(c) {
	    return _c('div', {
	      ref: c.code,
	      refInFor: true,
	      staticClass: "tooth"
	    }, [_vm._v(_vm._s(c.name))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "select_area"
	  })]), _vm._v(" "), _c('div', [_c('div', {
	    staticClass: "gear address_county",
	    on: {
	      "touchstart": function($event) {
	        _vm.touchStart($event)
	      },
	      "touchend": function($event) {
	        _vm.touchEnd($event)
	      },
	      "touchmove": function($event) {
	        _vm.touchMove($event)
	      }
	    }
	  }, _vm._l((_vm.county), function(c) {
	    return _c('div', {
	      ref: c.code,
	      refInFor: true,
	      staticClass: "tooth"
	    }, [_vm._v(_vm._s(c.name))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "select_area"
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-09ee4a0d", module.exports)
	  }
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _prompt = __webpack_require__(10);

	var _prompt2 = _interopRequireDefault(_prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_prompt2.default.install = function (Vue) {
	  Vue.component(_prompt2.default.name, _prompt2.default);
	};

	exports.default = _prompt2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(11)

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\lvyang\\repositories\\mobile-ui\\packages\\prompt\\src\\prompt.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e14100a6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e14100a6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] prompt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e14100a6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./prompt.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e14100a6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./prompt.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.error_message{\n\tposition: absolute;\n\tmargin-top: -0.87rem;\n\ttop: 50%;\n\theight: 1.74rem;\n\twidth: 10rem;\n\ttext-align: center;\n\tz-index: 100;\n}\n.error_message .error{\n\tdisplay: inline-block;\n\tbackground-color: rgba(0,0,0,0.8);\n\tborder-radius: 5px;\n\tline-height: 0.5rem;\n\ttext-align: center;\n\tcolor: #ffffff;\n\tfont-size: 0.389rem;\n\tpadding-top: 0.4rem;\n\tpadding-bottom: 0.4rem;\n\tpadding-left: 0.4rem;\n\tpadding-right: 0.4rem;\n}\n", ""]);

	// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//

	exports.default = {
		name: "MoPrompt",
		data: function data() {
			return {
				initTop: 0
			};
		},

		watch: {
			message: {
				handler: function handler(val, oldVal) {
					if (val) {
						var _self = this;
						setTimeout(function () {
							_self.$parent.$data.message = "";
						}, 1500);
					}
				}
			}
		},
		mounted: function mounted() {
			var mTop = $(".error_message").css("margin-top");
			this.initTop = parseFloat(mTop.substring(0, mTop.length - 2));
			var _self = this;
			$(window).scroll(function () {
				var scrollTop = $(this).scrollTop();
				$(".error_message").css("margin-top", _self.initTop + scrollTop + "px");
			});
		},

		props: ['message']
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.message),
	      expression: "message"
	    }],
	    staticClass: "error_message"
	  }, [_c('div', {
	    staticClass: "error"
	  }, [_vm._v(_vm._s(_vm.message))])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e14100a6", module.exports)
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _sliderDelete = __webpack_require__(16);

	var _sliderDelete2 = _interopRequireDefault(_sliderDelete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_sliderDelete2.default.install = function (Vue) {
	  Vue.component(_sliderDelete2.default.name, _sliderDelete2.default);
	};

	exports.default = _sliderDelete2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(17)

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\lvyang\\repositories\\mobile-ui\\packages\\slider-delete\\src\\slider-delete.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f7ebab3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5f7ebab3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] slider-delete.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f7ebab3!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider-delete.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f7ebab3!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider-delete.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.slider_delete{\n\tposition: absolute;\n\tleft: 0;\n\tz-index: 100;\n}\n", ""]);

	// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	/* 
	 * 滑动配置。distance 滑动距离
	 */
	exports.default = {
		name: "MoSliderDelete",
		componentName: 'MoSliderDelete',
		props: ['sliderConf'],
		data: function data() {
			return {
				startPos: { x: 0, y: 0 },
				endPos: { x: 0, y: 0 },
				transformX: 0,
				transformStartX: 0

			};
		},

		methods: {
			touchStart: function touchStart(e) {
				this.startPos.x = e.targetTouches[0].screenX;
				this.transformStartX = this.transformX;
			},
			touchMove: function touchMove(e) {
				e.preventDefault();
				var x = e.targetTouches[0].screenX;
				var temp = (x - this.startPos.x) / 75;
				if (temp > this.sliderConf.distance || this.transformX == 0 && temp > 0) {
					this.transformX = 0;
				} else {
					this.transformX = this.transformStartX + temp;
				}
			},
			touchEnd: function touchEnd(e) {
				if (this.transformX > 0) {
					this.transformX = 0;
				}
				if (this.transformX < 0) {
					this.transformX = -this.sliderConf.distance;
				}
			}
		}
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "slider_delete",
	    style: ({
	      webkitTransform: 'translate3d(' + _vm.transformX + 'rem,0,0)'
	    }),
	    on: {
	      "touchstart": function($event) {
	        _vm.touchStart($event)
	      },
	      "touchend": function($event) {
	        _vm.touchEnd($event)
	      },
	      "touchmove": function($event) {
	        _vm.touchMove($event)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f7ebab3", module.exports)
	  }
	}

/***/ })
/******/ ]);