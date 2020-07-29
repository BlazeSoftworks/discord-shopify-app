module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const GET_STORE_NAME = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getName{ 
    shop { 
      myshopifyDomain 
    }      
  }
`; // const GET_STORE_DISCOUNTS = gql`
//   query getDiscountCodes{
//     priceRules (first:10) {
//       edges {
//         node {
//           id
//           discountCodes (first:10) {
//             edges {
//               node {
//                 code
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

function AnnotatedLayout() {
  const {
    0: idset,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: textFieldValue,
    1: setTextFieldValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: textFieldValueOld,
    1: setTextFieldValueOld
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: textFieldValue1,
    1: setTextFieldValue1
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: textFieldValueOld1,
    1: setTextFieldValueOld1
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_STORE_NAME);
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const handleTextFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(value => {
    if (/^\d+$/.test(value) || value == '') setTextFieldValue(value);
    console.log(textFieldValue);
  }, []);
  const handleTextFieldChange1 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(value => {
    if (/^\d+$/.test(value) || value == '') setTextFieldValue1(value);
    console.log(textFieldValue1);
  }, []); //toast

  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const toastMarkup = active ? __jsx("div", {
    style: {
      zIndex: '999'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Toast"], {
    content: "Settings Saved",
    onDismiss: () => {
      setActive(!active);
    }
  })) : null;
  if (loading) return __jsx("div", null, "Loading..");else if (error) {
    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("shopOrigin")); //location.replace(`https://discord-shopify-app.herokuapp.com/auth?shop=${Cookies.get("shopOrigin")}`)

    return __jsx("div", null, error.message);
  } // console.log(data.priceRules.edges[0].node.discountCodes.edges[0].node.id);
  // console.log(data.priceRules.edges[0].node.discountCodes.edges[0].node.code);
  //console.log(Cookie.get("shopOrigin"))

  const sURL = String(data.shop.myshopifyDomain).substr(0, String(data.shop.myshopifyDomain).length - 14);

  if (first) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`/api/discordID/${sURL}`).then(result => {
      if (result.data.data.serverID != null) {
        setId(true);
        setTextFieldValue(result.data.data.serverID);
        setTextFieldValue1(result.data.data.channelID);
        setTextFieldValueOld(result.data.data.serverID);
        setTextFieldValueOld1(result.data.data.channelID);
      }
    }).catch(error => console.log(error));
    setFirst(false);
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Page"], {
    title: "Discordify Server/Channel ID"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"], null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Banner"], {
    status: idset ? "success" : "critical",
    title: idset ? "Server/Channel ID Set" : "No Server/Channel ID Set"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"].AnnotatedSection, {
    title: "Step One",
    description: __jsx("p", null, "Add Widgetbot to your server ", __jsx("a", {
      href: "https://discord.com/oauth2/authorize?client_id=543225764036870167&scope=bot&permissions=537218112",
      target: "_blank"
    }, __jsx("b", null, "here")), ". Make sure you give Widgetbot all the permissions!")
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    sectioned: true
  }, __jsx("img", {
    src: "dis1.PNG",
    width: "100%",
    height: "410"
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"].AnnotatedSection, {
    title: "Step Two",
    description: "Type the ??guestmode command if you want people who don't have a discord account to be able to write messages. Type ??help for a full list of commands."
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    sectioned: true
  }, __jsx("img", {
    src: "dis2.PNG",
    width: "100%",
    height: "410"
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"].AnnotatedSection, {
    title: "Step Three",
    description: "Type the ??crate command in the text channel you want to display in the widget after it loads. Copy the values from Server and Channel without the quotes, paste them bellow and submit. You can always come back here to change the IDs"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    sectioned: true
  }, __jsx("img", {
    src: "dis3.PNG",
    width: "100%",
    height: "410"
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
    spacing: "extraLoose"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Stack"].Item, {
    fill: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    label: "Server ID",
    placeholder: "Paste your Discord Server ID here",
    value: textFieldValue,
    onChange: handleTextFieldChange
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
    spacing: "extraLoose"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Stack"].Item, {
    fill: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    label: "Channel ID",
    placeholder: "Paste your Discord Channel ID here",
    value: textFieldValue1,
    onChange: handleTextFieldChange1
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
    distribution: "trailing"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    primary: true,
    disabled: (textFieldValue == '' || textFieldValueOld == textFieldValue) && (textFieldValue1 == '' || textFieldValueOld1 == textFieldValue1) ? true : false,
    type: "submit",
    onClick: () => {
      if (textFieldValue != '') {
        setId(true);
        setActive(true);
        makeApiCall({
          serverID: textFieldValue,
          channelID: textFieldValue1
        }, sURL);
      } else {
        alert("Please paste in your ID first");
      }
    }
  }, "Submit")))))));

  async function makeApiCall(appInfo, sURL) {
    const url = `/api/discordID/${sURL}`;
    setTextFieldValueOld(textFieldValue);
    setTextFieldValueOld1(textFieldValue1);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, appInfo).then(result => {}).catch(error => {
      console.log(error.response);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyProjects\discord-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJHRVRfU1RPUkVfTkFNRSIsImdxbCIsIkFubm90YXRlZExheW91dCIsImlkc2V0Iiwic2V0SWQiLCJ1c2VTdGF0ZSIsInRleHRGaWVsZFZhbHVlIiwic2V0VGV4dEZpZWxkVmFsdWUiLCJ0ZXh0RmllbGRWYWx1ZU9sZCIsInNldFRleHRGaWVsZFZhbHVlT2xkIiwidGV4dEZpZWxkVmFsdWUxIiwic2V0VGV4dEZpZWxkVmFsdWUxIiwidGV4dEZpZWxkVmFsdWVPbGQxIiwic2V0VGV4dEZpZWxkVmFsdWVPbGQxIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiZmlyc3QiLCJzZXRGaXJzdCIsImhhbmRsZVRleHRGaWVsZENoYW5nZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVRleHRGaWVsZENoYW5nZTEiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b2FzdE1hcmt1cCIsInpJbmRleCIsIkNvb2tpZXMiLCJnZXQiLCJtZXNzYWdlIiwic1VSTCIsIlN0cmluZyIsInNob3AiLCJteXNob3BpZnlEb21haW4iLCJzdWJzdHIiLCJsZW5ndGgiLCJheGlvcyIsInRoZW4iLCJyZXN1bHQiLCJzZXJ2ZXJJRCIsImNoYW5uZWxJRCIsImNhdGNoIiwibWFrZUFwaUNhbGwi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QUUsTUFBTTtBQUNiLFVBQUlKLGNBQWMsSUFBSSxFQUF0QixFQUEwQjtBQUN4QkYsYUFBSyxDQUFDLElBQUQsQ0FBTDtBQUNBd0IsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQWtCLG1CQUFXLENBQUM7QUFBRUgsa0JBQVEsRUFBRXJDLGNBQVo7QUFBNEJzQyxtQkFBUyxFQUFFbEM7QUFBdkMsU0FBRCxFQUEyRHdCLElBQTNELENBQVg7QUFDRCxPQUpELE1BS0s7QUFDSGEsYUFBSyxDQUFDLCtCQUFELENBQUw7QUFDRDtBQUNGO0FBYkgsY0FERixDQXpCRixDQURGLENBeEJGLENBREYsQ0FERixDQURGOztBQThFQSxpQkFBZUQsV0FBZixDQUEyQkUsT0FBM0IsRUFBb0NkLElBQXBDLEVBQTBDO0FBQ3hDLFVBQU1lLEdBQUcsR0FBSSxrQkFBaUJmLElBQUssRUFBbkM7QUFDQXpCLHdCQUFvQixDQUFDSCxjQUFELENBQXBCO0FBQ0FPLHlCQUFxQixDQUFDSCxlQUFELENBQXJCO0FBQ0E4QixnREFBSyxDQUFDVSxJQUFOLENBQVdELEdBQVgsRUFBZ0JELE9BQWhCLEVBQXlCUCxJQUF6QixDQUErQkMsTUFBRCxJQUFZLENBQUcsQ0FBN0MsRUFBK0NHLEtBQS9DLENBQXNEOUIsS0FBRCxJQUFXO0FBQUVTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFLLENBQUNvQyxRQUFsQjtBQUE2QixLQUEvRjtBQUNEO0FBQ0Y7O0FBRWNqRCw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDYXJkLFxyXG4gIExheW91dCxcclxuICBQYWdlLFxyXG4gIFN0YWNrLFxyXG4gIFRleHRGaWVsZCxcclxuICBCYW5uZXIsXHJcbiAgRnJhbWUsXHJcbiAgVG9hc3QsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5jb25zdCBHRVRfU1RPUkVfTkFNRSA9IGdxbGBcclxuICBxdWVyeSBnZXROYW1leyBcclxuICAgIHNob3AgeyBcclxuICAgICAgbXlzaG9waWZ5RG9tYWluIFxyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuYFxyXG5cclxuLy8gY29uc3QgR0VUX1NUT1JFX0RJU0NPVU5UUyA9IGdxbGBcclxuLy8gICBxdWVyeSBnZXREaXNjb3VudENvZGVze1xyXG4vLyAgICAgcHJpY2VSdWxlcyAoZmlyc3Q6MTApIHtcclxuLy8gICAgICAgZWRnZXMge1xyXG4vLyAgICAgICAgIG5vZGUge1xyXG4vLyAgICAgICAgICAgaWRcclxuLy8gICAgICAgICAgIGRpc2NvdW50Q29kZXMgKGZpcnN0OjEwKSB7XHJcbi8vICAgICAgICAgICAgIGVkZ2VzIHtcclxuLy8gICAgICAgICAgICAgICBub2RlIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvZGVcclxuLy8gICAgICAgICAgICAgICAgIGlkXHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG5mdW5jdGlvbiBBbm5vdGF0ZWRMYXlvdXQoKSB7XHJcblxyXG4gIGNvbnN0IFtpZHNldCwgc2V0SWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZSwgc2V0VGV4dEZpZWxkVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZU9sZCwgc2V0VGV4dEZpZWxkVmFsdWVPbGRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZTEsIHNldFRleHRGaWVsZFZhbHVlMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RleHRGaWVsZFZhbHVlT2xkMSwgc2V0VGV4dEZpZWxkVmFsdWVPbGQxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfU1RPUkVfTkFNRSk7XHJcbiAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGV4dEZpZWxkQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodmFsdWUpID0+IHtcclxuICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodmFsdWUpIHx8IHZhbHVlID09ICcnKVxyXG4gICAgICAgIHNldFRleHRGaWVsZFZhbHVlKHZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2codGV4dEZpZWxkVmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHRGaWVsZENoYW5nZTEgPSB1c2VDYWxsYmFjayhcclxuICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT0gJycpXHJcbiAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWUxKHZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2codGV4dEZpZWxkVmFsdWUxKTtcclxuICAgIH0sXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICAvL3RvYXN0XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9hc3RNYXJrdXAgPSBhY3RpdmUgPyAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogJzk5OScgfX0+XHJcbiAgICAgIDxUb2FzdCBjb250ZW50PVwiU2V0dGluZ3MgU2F2ZWRcIiBvbkRpc21pc3M9eygpID0+IHsgc2V0QWN0aXZlKCFhY3RpdmUpIH19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbDtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLjwvZGl2PlxyXG4gIGVsc2UgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldChcInNob3BPcmlnaW5cIikpO1xyXG4gICAgLy9sb2NhdGlvbi5yZXBsYWNlKGBodHRwczovL2Rpc2NvcmQtc2hvcGlmeS1hcHAuaGVyb2t1YXBwLmNvbS9hdXRoP3Nob3A9JHtDb29raWVzLmdldChcInNob3BPcmlnaW5cIil9YClcclxuICAgIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGF0YS5wcmljZVJ1bGVzLmVkZ2VzWzBdLm5vZGUuZGlzY291bnRDb2Rlcy5lZGdlc1swXS5ub2RlLmlkKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhLnByaWNlUnVsZXMuZWRnZXNbMF0ubm9kZS5kaXNjb3VudENvZGVzLmVkZ2VzWzBdLm5vZGUuY29kZSk7XHJcbiAgLy9jb25zb2xlLmxvZyhDb29raWUuZ2V0KFwic2hvcE9yaWdpblwiKSlcclxuXHJcbiAgY29uc3Qgc1VSTCA9IFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5zdWJzdHIoMCwgU3RyaW5nKGRhdGEuc2hvcC5teXNob3BpZnlEb21haW4pLmxlbmd0aCAtIDE0KVxyXG5cclxuICBpZiAoZmlyc3QpIHtcclxuICAgIGF4aW9zLmdldChgL2FwaS9kaXNjb3JkSUQvJHtzVVJMfWApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQgIT0gbnVsbCkge1xyXG4gICAgICAgIHNldElkKHRydWUpO1xyXG4gICAgICAgIHNldFRleHRGaWVsZFZhbHVlKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgIHNldFRleHRGaWVsZFZhbHVlMShyZXN1bHQuZGF0YS5kYXRhLmNoYW5uZWxJRCk7XHJcbiAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWVPbGQocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCk7XHJcbiAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWVPbGQxKHJlc3VsdC5kYXRhLmRhdGEuY2hhbm5lbElEKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICBzZXRGaXJzdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYW1lPlxyXG4gICAgICA8UGFnZSB0aXRsZT1cIkRpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSURcIiA+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiA+XHJcbiAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICBzdGF0dXM9eyhpZHNldCkgPyBcInN1Y2Nlc3NcIiA6IFwiY3JpdGljYWxcIn1cclxuICAgICAgICAgICAgICB0aXRsZT17KGlkc2V0KSA/IFwiU2VydmVyL0NoYW5uZWwgSUQgU2V0XCIgOiBcIk5vIFNlcnZlci9DaGFubmVsIElEIFNldFwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIlN0ZXAgT25lXCIgZGVzY3JpcHRpb249ezxwPkFkZCBXaWRnZXRib3QgdG8geW91ciBzZXJ2ZXIgPGEgaHJlZj1cImh0dHBzOi8vZGlzY29yZC5jb20vb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9NTQzMjI1NzY0MDM2ODcwMTY3JnNjb3BlPWJvdCZwZXJtaXNzaW9ucz01MzcyMTgxMTJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Yj5oZXJlPC9iPjwvYT4uIE1ha2Ugc3VyZSB5b3UgZ2l2ZSBXaWRnZXRib3QgYWxsIHRoZSBwZXJtaXNzaW9ucyE8L3A+fT5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpczEuUE5HXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDEwXCIgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIlN0ZXAgVHdvXCIgZGVzY3JpcHRpb249XCJUeXBlIHRoZSA/P2d1ZXN0bW9kZSBjb21tYW5kIGlmIHlvdSB3YW50IHBlb3BsZSB3aG8gZG9uJ3QgaGF2ZSBhIGRpc2NvcmQgYWNjb3VudCB0byBiZSBhYmxlIHRvIHdyaXRlIG1lc3NhZ2VzLiBUeXBlID8/aGVscCBmb3IgYSBmdWxsIGxpc3Qgb2YgY29tbWFuZHMuXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXMyLlBOR1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjQxMFwiIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb24gdGl0bGU9XCJTdGVwIFRocmVlXCIgZGVzY3JpcHRpb249J1R5cGUgdGhlID8/Y3JhdGUgY29tbWFuZCBpbiB0aGUgdGV4dCBjaGFubmVsIHlvdSB3YW50IHRvIGRpc3BsYXkgaW4gdGhlIHdpZGdldCBhZnRlciBpdCBsb2Fkcy4gQ29weSB0aGUgdmFsdWVzIGZyb20gU2VydmVyIGFuZCBDaGFubmVsIHdpdGhvdXQgdGhlIHF1b3RlcywgcGFzdGUgdGhlbSBiZWxsb3cgYW5kIHN1Ym1pdC4gWW91IGNhbiBhbHdheXMgY29tZSBiYWNrIGhlcmUgdG8gY2hhbmdlIHRoZSBJRHMnPlxyXG4gICAgICAgICAgICA8IENhcmQgc2VjdGlvbmVkID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpczMuUE5HXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDEwXCIgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VydmVyIElEXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3RlIHlvdXIgRGlzY29yZCBTZXJ2ZXIgSUQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHRGaWVsZFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0RmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cImV4dHJhTG9vc2VcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoYW5uZWwgSURcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgeW91ciBEaXNjb3JkIENoYW5uZWwgSUQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHRGaWVsZFZhbHVlMX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dEZpZWxkQ2hhbmdlMX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsoKHRleHRGaWVsZFZhbHVlID09ICcnIHx8IHRleHRGaWVsZFZhbHVlT2xkID09IHRleHRGaWVsZFZhbHVlKSAmJiAodGV4dEZpZWxkVmFsdWUxID09ICcnIHx8IHRleHRGaWVsZFZhbHVlT2xkMSA9PSB0ZXh0RmllbGRWYWx1ZTEpKSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEZpZWxkVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldElkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFrZUFwaUNhbGwoeyBzZXJ2ZXJJRDogdGV4dEZpZWxkVmFsdWUsIGNoYW5uZWxJRDogdGV4dEZpZWxkVmFsdWUxIH0sIHNVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHBhc3RlIGluIHlvdXIgSUQgZmlyc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L1BhZ2UgPlxyXG4gICAgPC9GcmFtZT5cclxuICApXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1ha2VBcGlDYWxsKGFwcEluZm8sIHNVUkwpIHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL2Rpc2NvcmRJRC8ke3NVUkx9YDtcclxuICAgIHNldFRleHRGaWVsZFZhbHVlT2xkKHRleHRGaWVsZFZhbHVlKTtcclxuICAgIHNldFRleHRGaWVsZFZhbHVlT2xkMSh0ZXh0RmllbGRWYWx1ZTEpO1xyXG4gICAgYXhpb3MucG9zdCh1cmwsIGFwcEluZm8pLnRoZW4oKHJlc3VsdCkgPT4geyB9KS5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==