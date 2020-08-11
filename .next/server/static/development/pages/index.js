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






const CREATE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
           scriptTag {
             id
            }
           userErrors {
            field
            message
            }
        }
    }
`;
const GET_STORE = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getStore{ 
    scriptTags(first: 5) {
      edges {
          node {
              id
              src
              displayScope
          }
      }
  }

    shop { 
      myshopifyDomain 
    }      
  }
`;
const urlScriptTags = `https://7732d7f226d5.ngrok.io/test-script.js`;

function AnnotatedLayout() {
  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(CREATE_SCRIPTTAG);
  const {
    0: idset,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: stop,
    1: setStop
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
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
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_STORE);
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const handleTextFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(value => {
    if (/^\d+$/.test(value) || value == '') setTextFieldValue(value); //console.log(textFieldValue);
  }, []);
  const handleTextFieldChange1 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(value => {
    if (/^\d+$/.test(value) || value == '') setTextFieldValue1(value); //console.log(textFieldValue1);
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
    //console.log(Cookies.get("shopOrigin"));
    //location.replace(`https://discord-shopify-app.herokuapp.com/auth?shop=${Cookies.get("shopOrigin")}`)
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

  if (stop && data.scriptTags.edges[0] == undefined) {
    console.log("dublu cacat");
    setStop(false);
    createScripts({
      variables: {
        input: {
          src: urlScriptTags,
          displayScope: "ALL"
        }
      },
      refetchQueries: [{
        query: GET_STORE
      }]
    });
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
    description: "Type the ??guestmode command if you want people who don't have a discord account or are not already in your server to be able to choose a name on spot and write messages. Type ??help for a full list of commands."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiR0VUX1NUT1JFIiwidXJsU2NyaXB0VGFncyIsIkFubm90YXRlZExheW91dCIsImNyZWF0ZVNjcmlwdHMiLCJ1c2VNdXRhdGlvbiIsImlkc2V0Iiwic2V0SWQiLCJ1c2VTdGF0ZSIsInN0b3AiLCJzZXRTdG9wIiwidGV4dEZpZWxkVmFsdWUiLCJzZXRUZXh0RmllbGRWYWx1ZSIsInRleHRGaWVsZFZhbHVlT2xkIiwic2V0VGV4dEZpZWxkVmFsdWVPbGQiLCJ0ZXh0RmllbGRWYWx1ZTEiLCJzZXRUZXh0RmllbGRWYWx1ZTEiLCJ0ZXh0RmllbGRWYWx1ZU9sZDEiLCJzZXRUZXh0RmllbGRWYWx1ZU9sZDEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJmaXJzdCIsInNldEZpcnN0IiwiaGFuZGxlVGV4dEZpZWxkQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInRlc3QiLCJoYW5kbGVUZXh0RmllbGRDaGFuZ2UxIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidG9hc3RNYXJrdXAiLCJ6SW5kZXgiLCJtZXNzYWdlIiwic1VSTCIsIlN0cmluZyIsInNob3AiLCJteXNob3BpZnlEb21haW4iLCJzdWJzdHIiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJzZXJ2ZXJJRCIsImNoYW5uZWxJRCIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsImlucHV0Iiwic3JjIiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIm1ha2VBcGlDYWxsIiwiYWxlcnQiLCJhcHBJbmZvIiwidXJsIiwicG9zdCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Q0FBN0I7QUFjQSxNQUFNQyxTQUFTLEdBQUdELGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0NBQXRCO0FBa0JBLE1BQU1F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Q0FPLHlCQUFxQixDQUFDSCxlQUFELENBQXJCO0FBQ0EwQixnREFBSyxDQUFDc0IsSUFBTixDQUFXRCxHQUFYLEVBQWdCRCxPQUFoQixFQUF5QmxCLElBQXpCLENBQStCQyxNQUFELElBQVksQ0FBRyxDQUE3QyxFQUErQ0csS0FBL0MsQ0FBc0QzQixLQUFELElBQVc7QUFBRTRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZN0IsS0FBSyxDQUFDNEMsUUFBbEI7QUFBNkIsS0FBL0Y7QUFDRDtBQUNGOztBQUVjN0QsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBMYXlvdXQsXHJcbiAgUGFnZSxcclxuICBTdGFjayxcclxuICBUZXh0RmllbGQsXHJcbiAgQmFubmVyLFxyXG4gIEZyYW1lLFxyXG4gIFRvYXN0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmNvbnN0IENSRUFURV9TQ1JJUFRUQUcgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgICAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgR0VUX1NUT1JFID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFN0b3JleyBcclxuICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcclxuICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgICBkaXNwbGF5U2NvcGVcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICBzaG9wIHsgXHJcbiAgICAgIG15c2hvcGlmeURvbWFpbiBcclxuICAgIH0gICAgICBcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IHVybFNjcmlwdFRhZ3MgPSBgaHR0cHM6Ly83NzMyZDdmMjI2ZDUubmdyb2suaW8vdGVzdC1zY3JpcHQuanNgO1xyXG5cclxuZnVuY3Rpb24gQW5ub3RhdGVkTGF5b3V0KCkge1xyXG4gIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRUQUcpO1xyXG4gIGNvbnN0IFtpZHNldCwgc2V0SWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdG9wLCBzZXRTdG9wXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZSwgc2V0VGV4dEZpZWxkVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZU9sZCwgc2V0VGV4dEZpZWxkVmFsdWVPbGRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXh0RmllbGRWYWx1ZTEsIHNldFRleHRGaWVsZFZhbHVlMV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RleHRGaWVsZFZhbHVlT2xkMSwgc2V0VGV4dEZpZWxkVmFsdWVPbGQxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfU1RPUkUpO1xyXG4gIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHRGaWVsZENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSA9PSAnJylcclxuICAgICAgICBzZXRUZXh0RmllbGRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGV4dEZpZWxkVmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHRGaWVsZENoYW5nZTEgPSB1c2VDYWxsYmFjayhcclxuICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT0gJycpXHJcbiAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWUxKHZhbHVlKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0RmllbGRWYWx1ZTEpO1xyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIC8vdG9hc3RcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2FzdE1hcmt1cCA9IGFjdGl2ZSA/IChcclxuICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAnOTk5JyB9fT5cclxuICAgICAgPFRvYXN0IGNvbnRlbnQ9XCJTZXR0aW5ncyBTYXZlZFwiIG9uRGlzbWlzcz17KCkgPT4geyBzZXRBY3RpdmUoIWFjdGl2ZSkgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uPC9kaXY+XHJcbiAgZWxzZSBpZiAoZXJyb3IpIHtcclxuICAgIC8vY29uc29sZS5sb2coQ29va2llcy5nZXQoXCJzaG9wT3JpZ2luXCIpKTtcclxuICAgIC8vbG9jYXRpb24ucmVwbGFjZShgaHR0cHM6Ly9kaXNjb3JkLXNob3BpZnktYXBwLmhlcm9rdWFwcC5jb20vYXV0aD9zaG9wPSR7Q29va2llcy5nZXQoXCJzaG9wT3JpZ2luXCIpfWApXHJcbiAgICByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEucHJpY2VSdWxlcy5lZGdlc1swXS5ub2RlLmRpc2NvdW50Q29kZXMuZWRnZXNbMF0ubm9kZS5pZCk7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YS5wcmljZVJ1bGVzLmVkZ2VzWzBdLm5vZGUuZGlzY291bnRDb2Rlcy5lZGdlc1swXS5ub2RlLmNvZGUpO1xyXG4gIC8vY29uc29sZS5sb2coQ29va2llLmdldChcInNob3BPcmlnaW5cIikpXHJcblxyXG4gIGNvbnN0IHNVUkwgPSBTdHJpbmcoZGF0YS5zaG9wLm15c2hvcGlmeURvbWFpbikuc3Vic3RyKDAsIFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5sZW5ndGggLSAxNClcclxuXHJcbiAgaWYgKGZpcnN0KSB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvZGlzY29yZElELyR7c1VSTH1gKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEICE9IG51bGwpIHtcclxuICAgICAgICBzZXRJZCh0cnVlKTtcclxuICAgICAgICBzZXRUZXh0RmllbGRWYWx1ZShyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEKTtcclxuICAgICAgICBzZXRUZXh0RmllbGRWYWx1ZTEocmVzdWx0LmRhdGEuZGF0YS5jaGFubmVsSUQpO1xyXG4gICAgICAgIHNldFRleHRGaWVsZFZhbHVlT2xkKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgIHNldFRleHRGaWVsZFZhbHVlT2xkMShyZXN1bHQuZGF0YS5kYXRhLmNoYW5uZWxJRCk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICBzZXRGaXJzdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvcCAmJiBkYXRhLnNjcmlwdFRhZ3MuZWRnZXNbMF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImR1Ymx1IGNhY2F0XCIpXHJcbiAgICBzZXRTdG9wKGZhbHNlKTtcclxuICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9TVE9SRSB9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhbWU+XHJcbiAgICAgIDxQYWdlIHRpdGxlPVwiRGlzY29yZGlmeSBTZXJ2ZXIvQ2hhbm5lbCBJRFwiID5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAge3RvYXN0TWFya3VwfVxyXG4gICAgICAgICAgPExheW91dC5TZWN0aW9uID5cclxuICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgIHN0YXR1cz17KGlkc2V0KSA/IFwic3VjY2Vzc1wiIDogXCJjcml0aWNhbFwifVxyXG4gICAgICAgICAgICAgIHRpdGxlPXsoaWRzZXQpID8gXCJTZXJ2ZXIvQ2hhbm5lbCBJRCBTZXRcIiA6IFwiTm8gU2VydmVyL0NoYW5uZWwgSUQgU2V0XCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIHRpdGxlPVwiU3RlcCBPbmVcIiBkZXNjcmlwdGlvbj17PHA+QWRkIFdpZGdldGJvdCB0byB5b3VyIHNlcnZlciA8YSBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD01NDMyMjU3NjQwMzY4NzAxNjcmc2NvcGU9Ym90JnBlcm1pc3Npb25zPTUzNzIxODExMlwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmhlcmU8L2I+PC9hPi4gTWFrZSBzdXJlIHlvdSBnaXZlIFdpZGdldGJvdCBhbGwgdGhlIHBlcm1pc3Npb25zITwvcD59PlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzMS5QTkdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0MTBcIiAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIHRpdGxlPVwiU3RlcCBUd29cIiBkZXNjcmlwdGlvbj1cIlR5cGUgdGhlID8/Z3Vlc3Rtb2RlIGNvbW1hbmQgaWYgeW91IHdhbnQgcGVvcGxlIHdobyBkb24ndCBoYXZlIGEgZGlzY29yZCBhY2NvdW50IG9yIGFyZSBub3QgYWxyZWFkeSBpbiB5b3VyIHNlcnZlciB0byBiZSBhYmxlIHRvIGNob29zZSBhIG5hbWUgb24gc3BvdCBhbmQgd3JpdGUgbWVzc2FnZXMuIFR5cGUgPz9oZWxwIGZvciBhIGZ1bGwgbGlzdCBvZiBjb21tYW5kcy5cIj5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpczIuUE5HXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDEwXCIgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIlN0ZXAgVGhyZWVcIiBkZXNjcmlwdGlvbj0nVHlwZSB0aGUgPz9jcmF0ZSBjb21tYW5kIGluIHRoZSB0ZXh0IGNoYW5uZWwgeW91IHdhbnQgdG8gZGlzcGxheSBpbiB0aGUgd2lkZ2V0IGFmdGVyIGl0IGxvYWRzLiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBTZXJ2ZXIgYW5kIENoYW5uZWwgd2l0aG91dCB0aGUgcXVvdGVzLCBwYXN0ZSB0aGVtIGJlbGxvdyBhbmQgc3VibWl0LiBZb3UgY2FuIGFsd2F5cyBjb21lIGJhY2sgaGVyZSB0byBjaGFuZ2UgdGhlIElEcyc+XHJcbiAgICAgICAgICAgIDwgQ2FyZCBzZWN0aW9uZWQgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzMy5QTkdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0MTBcIiAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYUxvb3NlXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXJ2ZXIgSURcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzdGUgeW91ciBEaXNjb3JkIFNlcnZlciBJRCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRleHRGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hhbm5lbCBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXN0ZSB5b3VyIERpc2NvcmQgQ2hhbm5lbCBJRCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkVmFsdWUxfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0RmllbGRDaGFuZ2UxfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eygodGV4dEZpZWxkVmFsdWUgPT0gJycgfHwgdGV4dEZpZWxkVmFsdWVPbGQgPT0gdGV4dEZpZWxkVmFsdWUpICYmICh0ZXh0RmllbGRWYWx1ZTEgPT0gJycgfHwgdGV4dEZpZWxkVmFsdWVPbGQxID09IHRleHRGaWVsZFZhbHVlMSkpID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RmllbGRWYWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWtlQXBpQ2FsbCh7IHNlcnZlcklEOiB0ZXh0RmllbGRWYWx1ZSwgY2hhbm5lbElEOiB0ZXh0RmllbGRWYWx1ZTEgfSwgc1VSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgcGFzdGUgaW4geW91ciBJRCBmaXJzdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvUGFnZSA+XHJcbiAgICA8L0ZyYW1lPlxyXG4gIClcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwoYXBwSW5mbywgc1VSTCkge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvZGlzY29yZElELyR7c1VSTH1gO1xyXG4gICAgc2V0VGV4dEZpZWxkVmFsdWVPbGQodGV4dEZpZWxkVmFsdWUpO1xyXG4gICAgc2V0VGV4dEZpZWxkVmFsdWVPbGQxKHRleHRGaWVsZFZhbHVlMSk7XHJcbiAgICBheGlvcy5wb3N0KHVybCwgYXBwSW5mbykudGhlbigocmVzdWx0KSA9PiB7IH0pLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9