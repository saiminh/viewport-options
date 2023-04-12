/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fullHeight.js":
/*!***************************!*\
  !*** ./src/fullHeight.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const supportedElements = ['core/columns', 'core/column', 'core/video', 'core/image', 'core/group', 'core/cover', 'core/row'];
function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (supportedElements.indexOf(name) > -1) {
      //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        halfHeightMobile: {
          type: 'boolean',
          default: false
        },
        halfHeightDesktop: {
          type: 'boolean',
          default: false
        },
        fullHeightMobile: {
          type: 'boolean',
          default: false
        },
        fullHeightDesktop: {
          type: 'boolean',
          default: false
        },
        className: {
          type: 'string',
          default: ''
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'viewportOptions/full-height', addHideOnMobileToggle);
const addAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    function toggleHideClassInEditor(device, size) {
      if (!device || !size) {
        alert('Missing device or size argument! Contact Simon to fix this.');
      }
      ;
      let classes;
      if (attributes.className) {
        classes = attributes.className;
      } else {
        classes = '';
      }
      classes = classes.replace(/  /g, '');
      if (device == 'mobile' && size == 'full') {
        classes.replace('is-half-height-mobile', '');
        !attributes.fullHeightMobile ? classes = classes + ' is-full-height-mobile' : classes = classes.replace('is-full-height-mobile', '');
        setAttributes({
          fullHeightMobile: !attributes.fullHeightMobile,
          halfHeightMobile: false,
          className: classes
        });
      }
      if (device == 'mobile' && size == 'half') {
        classes.replace('is-full-height-mobile', '');
        !attributes.halfHeightMobile ? classes = classes + ' is-half-height-mobile' : classes = classes.replace('is-half-height-mobile', '');
        setAttributes({
          fullHeightMobile: false,
          halfHeightMobile: !attributes.halfHeightMobile,
          className: classes
        });
      }
      if (device == 'desktop' && size == 'full') {
        classes.replace('is-half-height-desktop', '');
        !attributes.fullHeightDesktop ? classes = classes + ' is-full-height-desktop' : classes = classes.replace('is-full-height-desktop', '');
        setAttributes({
          fullHeightDesktop: !attributes.fullHeightDesktop,
          halfHeightDesktop: false,
          className: classes
        });
      }
      if (device == 'desktop' && size == 'half') {
        classes.replace('is-full-height-desktop', '');
        !attributes.halfHeightDesktop ? classes = classes + ' is-half-height-desktop' : classes = classes.replace('is-half-height-desktop', '');
        setAttributes({
          fullHeightDesktop: false,
          halfHeightDesktop: !attributes.halfHeightDesktop,
          className: classes
        });
      }
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && supportedElements.indexOf(props.name) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        padding: '0 0 16px 16px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Full height on mobile', 'viewportOptions'),
      checked: !!attributes.fullHeightMobile,
      onChange: function () {
        toggleHideClassInEditor('mobile', 'full');
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('50% height on mobile', 'viewportOptions'),
      checked: !!attributes.halfHeightMobile,
      onChange: function () {
        toggleHideClassInEditor('mobile', 'half');
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Full height on desktop', 'viewportOptions'),
      checked: !!attributes.fullHeightDesktop,
      onChange: function () {
        toggleHideClassInEditor('desktop', 'full');
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('50% height on desktop', 'viewportOptions'),
      checked: !!attributes.halfHeightDesktop,
      onChange: function () {
        toggleHideClassInEditor('desktop', 'half');
      }
    }))));
  };
}, 'addAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'viewportOptions/full-height', addAdvancedControls);

/***/ }),

/***/ "./src/hideShowOnVW.js":
/*!*****************************!*\
  !*** ./src/hideShowOnVW.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const supportedElements = ['core/spacer', 'core/separator'];
function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (supportedElements.indexOf(name) > -1) {
      //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        hideOnMobile: {
          type: 'boolean',
          default: false
        },
        hideOnDesktop: {
          type: 'boolean',
          default: false
        },
        className: {
          type: 'string',
          default: ''
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'viewportOptions/hide-on-mobile', addHideOnMobileToggle);
const addAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    function toggleHideClassInEditor(device) {
      let classes;
      if (props.attributes.className) {
        classes = props.attributes.className;
      } else {
        classes = '';
      }
      if (device == 'mobile') {
        if (props.attributes.hideOnMobile) {
          classes = classes.replace('hide-on-mobile', '');
          props.setAttributes({
            hideOnMobile: !attributes.hideOnMobile,
            className: classes
          });
        } else {
          classes = classes + ' hide-on-mobile';
          props.setAttributes({
            hideOnMobile: !attributes.hideOnMobile,
            className: classes
          });
        }
      }
      if (device == 'desktop') {
        if (attributes.hideOnDesktop) {
          classes = classes.replace('hide-on-desktop', '');
          props.setAttributes({
            hideOnDesktop: !attributes.hideOnDesktop,
            className: classes
          });
        } else {
          classes = classes + ' hide-on-desktop';
          props.setAttributes({
            hideOnDesktop: !attributes.hideOnDesktop,
            className: classes
          });
        }
      }
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && supportedElements.indexOf(props.name) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        padding: '0 0 16px 16px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Hide on mobile', 'viewportOptions'),
      checked: !!attributes.hideOnMobile,
      onChange: function () {
        toggleHideClassInEditor('mobile');
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Hide on desktop', 'viewportOptions'),
      checked: !!attributes.hideOnDesktop,
      onChange: function () {
        toggleHideClassInEditor('desktop');
      }
    }))));
  };
}, 'addAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'viewportOptions/hide-on-mobile', addAdvancedControls);

/***/ }),

/***/ "./src/reverseFlex.js":
/*!****************************!*\
  !*** ./src/reverseFlex.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const supportedElements = ['core/columns', 'core/row'];
function addHideOnMobileToggle(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (supportedElements.indexOf(name) > -1) {
      //whichever block you want to target
      settings.attributes = Object.assign(settings.attributes, {
        reverseOnMobile: {
          type: 'boolean',
          default: false
        },
        className: {
          type: 'string',
          default: ''
        }
      });
    }
  }
  return settings;
}
wp.hooks.addFilter('blocks.registerBlockType', 'viewportOptions/reverseFlex', addHideOnMobileToggle);
const addAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      InspectorControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    function toggleHideClassInEditor() {
      let classes;
      if (attributes.className) {
        classes = attributes.className;
      } else {
        classes = '';
      }
      !attributes.reverseOnMobile ? classes = classes + ' is-reversed-mobile' : classes = classes.replace('is-reversed-mobile', '');
      setAttributes({
        reverseOnMobile: !attributes.reverseOnMobile,
        className: classes
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && supportedElements.indexOf(props.name) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        padding: '0 0 16px 16px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Swap container positions on mobile', 'viewportOptions'),
      checked: !!attributes.reverseOnMobile,
      onChange: function () {
        toggleHideClassInEditor();
      }
    }))));
  };
}, 'addAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'viewportOptions/reverseFlex', addAdvancedControls);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hideShowOnVW_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideShowOnVW.js */ "./src/hideShowOnVW.js");
/* harmony import */ var _fullHeight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullHeight.js */ "./src/fullHeight.js");
/* harmony import */ var _reverseFlex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reverseFlex.js */ "./src/reverseFlex.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");




}();
/******/ })()
;
//# sourceMappingURL=index.js.map