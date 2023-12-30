/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/addIgnoreControls.js":
/*!****************************************!*\
  !*** ./src/forum/addIgnoreControls.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addIgnoreControls)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




function addIgnoreControls() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default()), 'userControls', function (items, discussion, context) {
    if (app.session.user && !(context instanceof (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default()))) {
      var currentRoute = app.current.get('routeName');
      if (currentRoute === 'index' || currentRoute === 'following') {
        if (discussion.isHidden()) return;
        var subscription = discussion.subscription();
        items.add('ignore', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
          icon: subscription === 'ignore' ? 'fas fa-eye' : 'far fa-eye-slash',
          onclick: function onclick() {
            discussion.save({
              subscription: subscription === 'ignore' ? null : 'ignore'
            });
          }
        }, app.translator.trans(subscription === 'ignore' ? 'flarum-subscriptions.forum.discussion_controls.unignore_button' : 'ekumanov-flarum-add-menu-actions.forum.ignore')));
      }
    }
  });
}

/***/ }),

/***/ "./src/forum/addMarkAsReadControls.js":
/*!********************************************!*\
  !*** ./src/forum/addMarkAsReadControls.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMarkAsReadControls)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




function addMarkAsReadControls() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default()), 'userControls', function (items, discussion, context) {
    if (app.session.user && !(context instanceof (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default()))) {
      var currentRoute = app.current.get('routeName');
      if (currentRoute === 'index' || currentRoute === 'following') {
        if (discussion.isHidden()) return;
        var isRead = discussion.isRead();
        items.add('markAsRead', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
          icon: isRead ? 'fas fa-envelope' : 'fas fa-envelope-open',
          onclick: function onclick() {
            if (isRead) {
              discussion.save({
                lastReadPostNumber: null,
                unread: true
              });
            } else {
              discussion.save({
                lastReadPostNumber: discussion.lastPostNumber()
              });
            }
          }
        }, app.translator.trans(isRead ? 'ekumanov-flarum-add-menu-actions.forum.mark_unread' : 'ekumanov-flarum-add-menu-actions.forum.mark_read')));
      }
    }
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addIgnoreControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIgnoreControls */ "./src/forum/addIgnoreControls.js");
/* harmony import */ var _addMarkAsReadControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addMarkAsReadControls */ "./src/forum/addMarkAsReadControls.js");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('ekumanov/flarum-add-menu-actions', function () {
  (0,_addMarkAsReadControls__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_addIgnoreControls__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map