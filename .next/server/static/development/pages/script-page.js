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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








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
const QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
    query {
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
const urlScriptTags = `https://discord-shopify-app.herokuapp.com/test-script.js`;

function ScriptPage() {
  const {
    0: stop,
    1: setStop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [createScripts] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CREATE_SCRIPTTAG);
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(QUERY_SCRIPTTAGS);
  const {
    0: widgetEnabled,
    1: setWidgetEnabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pressedObject,
    1: setPressedObject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    button1: false,
    button2: false,
    button3: false,
    button4: true
  });
  const {
    0: pressedObject2,
    1: setPressedObject2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    button5: false,
    button6: false,
    button7: false,
    button8: true
  });
  const {
    0: mobileVal,
    1: setMobileVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: desktopVal,
    1: setDesktopVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: positionDesktop,
    1: setPositionDesktop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  });
  const {
    0: positionMobile,
    1: setPositionMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  });
  const {
    0: color,
    1: setColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    hue: 227,
    brightness: 0.65,
    saturation: 0.58
  });

  function setColorPlus(col) {
    setColor(col);
    setWidget({
      desktopPosition: positionDesktop,
      mobilePosition: positionMobile,
      notificationText: notificationValue,
      notificationTimeout: timeoutValue,
      notificationAvatar: avatarValue,
      mobile: mobileVal,
      desktop: desktopVal,
      color: hslToHex(color.hue, color.saturation, color.brightness),
      widgetEnabled: widgetEnabled
    });
  }

  const {
    0: widgetObj,
    1: setWidget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    desktopPosition: {
      'yAxis': 'bottom',
      'xAxis': 'right'
    },
    mobilePosition: {
      'yAxis': 'bottom',
      'xAxis': 'right'
    },
    notificationText: '[Join](https://discord.gg/3FKvVwH) our Discord Server!',
    notificationTimeout: 2000,
    notificationAvatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
    color: '#7289DA',
    mobile: true,
    desktop: true,
    widgetEnabled: false
  });
  const {
    0: valID,
    1: setValID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: channelID,
    1: setChannelID
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: notificationValue,
    1: setNotificationValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('[Join](https://discord.gg/3FKvVwH) our Discord Server!');
  const {
    0: timeoutValue,
    1: setTimeoutValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('2000');
  const {
    0: avatarValue,
    1: setAvatarValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('https://cdn.discordapp.com/embed/avatars/0.png');
  const {
    0: desktopPreview,
    1: setDesktopPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: firstRender,
    1: setFirstRender
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); //toast

  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toastMarkup = active ? __jsx("div", {
    style: {
      zIndex: '999'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
    content: "Settings Saved",
    onDismiss: () => {
      setActive(!active);
    }
  })) : null;

  function buttonPressed(i) {
    if (pressedObject[i] == true) return true;
    return false;
  }

  function buttonPressed2(i) {
    if (pressedObject2[i] == true) return true;
    return false;
  }

  const handleClick = i => {
    var pos = positionDesktop;
    var pos2 = positionMobile;
    if (buttonPressed(i)) return;else if (i == 'button1') {
      setPressedObject({
        button1: true,
        button2: false,
        button3: false,
        button4: false
      });
      setPositionDesktop(pos = {
        'yAxis': 'top',
        'xAxis': 'left'
      });
    } else if (i == 'button2') {
      setPressedObject({
        button1: false,
        button2: true,
        button3: false,
        button4: false
      });
      setPositionDesktop(pos = {
        'yAxis': 'top',
        'xAxis': 'right'
      });
    } else if (i == 'button3') {
      setPressedObject({
        button1: false,
        button2: false,
        button3: true,
        button4: false
      });
      setPositionDesktop(pos = {
        'yAxis': 'bottom',
        'xAxis': 'left'
      });
    } else if (i == 'button4') {
      setPressedObject(pos = {
        button1: false,
        button2: false,
        button3: false,
        button4: true
      });
      setPositionDesktop({
        'yAxis': 'bottom',
        'xAxis': 'right'
      });
    } else if (buttonPressed2(i)) return;else if (i == 'button5') {
      setPressedObject2({
        button5: true,
        button6: false,
        button7: false,
        button8: false
      });
      setPositionMobile(pos2 = {
        'yAxis': 'top',
        'xAxis': 'left'
      });
    } else if (i == 'button6') {
      setPressedObject2({
        button5: false,
        button6: true,
        button7: false,
        button8: false
      });
      setPositionMobile(pos2 = {
        'yAxis': 'top',
        'xAxis': 'right'
      });
    } else if (i == 'button7') {
      setPressedObject2({
        button5: false,
        button6: false,
        button7: true,
        button8: false
      });
      setPositionMobile(pos2 = {
        'yAxis': 'bottom',
        'xAxis': 'left'
      });
    } else if (i == 'button8') {
      setPressedObject2({
        button5: false,
        button6: false,
        button7: false,
        button8: true
      });
      setPositionMobile(pos2 = {
        'yAxis': 'bottom',
        'xAxis': 'right'
      });
    }
    setWidget({
      desktopPosition: pos,
      mobilePosition: pos2,
      notificationText: notificationValue,
      notificationTimeout: timeoutValue,
      notificationAvatar: avatarValue,
      mobile: mobileVal,
      desktop: desktopVal,
      color: hslToHex(color.hue, color.saturation, color.brightness),
      widgetEnabled: widgetEnabled
    });
  };

  function returnIframe(desktop) {
    //console.log(widgetObj)
    if (valID != '') {
      var script = document.createElement("script");
      script.id = "widgetbotscript";
      script.type = "text/javascript";
      script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
      script.text = `
            var crate = new Crate({
                server: '${valID}', 
                channel: '${channelID}', 
                location: ["${desktop ? widgetObj.desktopPosition.yAxis : widgetObj.mobilePosition.yAxis}", "${desktop ? widgetObj.desktopPosition.xAxis : widgetObj.mobilePosition.xAxis}"],                                
                shard: 'https://e.widgetbot.io',                        
                color: '${widgetObj.color}',
                defer: true,                        
            })
            //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                
            crate.notify({
                content: '${widgetObj.notificationText}',
                timeout: ${widgetObj.notificationTimeout},
                avatar: '${widgetObj.notificationAvatar}'                        
              }) 
            `;
      if (document.getElementById('widgetbotiframe') != undefined) document.getElementById('widgetbotiframe').remove();
      var iframe = document.createElement('iframe');
      iframe.id = "widgetbotiframe";
      iframe.width = "100%";
      iframe.height = `${jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).height() - 180}px`;
      iframe.style.border = "none";
      setTimeout(() => {
        try {
          iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
        } catch {}
      }, 500);
      document.getElementById("previewdiv").appendChild(iframe);
    } else {
      return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        status: "critical",
        title: "Please go to Discordify Server/Channel ID and complete the setup first"
      }), __jsx("br", null), __jsx("br", null));
    }
  }

  function returnFirstIframe() {
    console.log("mare pula"); //console.log(widgetObj)

    if (firstRender) {
      if (valID != '') {
        var script = document.createElement("script");
        script.id = "widgetbotscript";
        script.type = "text/javascript";
        script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
        script.text = `
                var crate = new Crate({
                    server: '${valID}', 
                    channel: '${channelID}', 
                    location: ["${widgetObj.desktopPosition.yAxis}", "${widgetObj.desktopPosition.xAxis}"],                                
                    shard: 'https://e.widgetbot.io',                        
                    color: '${widgetObj.color}',
                    defer: true,                        
                })
                //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                
                crate.notify({
                    content: '${widgetObj.notificationText}',
                    timeout: ${widgetObj.notificationTimeout},
                    avatar: '${widgetObj.notificationAvatar}'                        
                  }) 
                `;
        if (document.getElementById('widgetbotiframe') != undefined) document.getElementById('widgetbotiframe').remove();
        var iframe = document.createElement('iframe');
        iframe.id = "widgetbotiframe";
        iframe.width = "100%";
        iframe.height = `${jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).height() - 180}px`;
        iframe.style.border = "none";
        setTimeout(() => {
          try {
            iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
          } catch {}
        }, 500);
        document.getElementById("previewdiv").appendChild(iframe);
      } else {
        return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
          status: "critical",
          title: "Please go to Discordify Server/Channel ID and complete the setup first"
        }), __jsx("br", null), __jsx("br", null));
      }

      setTimeout(() => {
        setFirstRender(false);
      }, 100);
    }
  }

  async function makeApiCall(appInfo, sURL) {
    const url = `/api/widget/${sURL}`;
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(url, appInfo).then(result => {}).catch(error => {
      console.log(error.response);
    });
  }

  function hexToHsl(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);
    return {
      h,
      s,
      l
    };
  }

  function hslToHex(h, s, l) {
    h /= 360; //s /= 100;
    //l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  const shopURL = String(data.shop.myshopifyDomain).substr(0, String(data.shop.myshopifyDomain).length - 14);

  if (first) {
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`/api/discordID/${shopURL}`).then(result => {
      if (result.data.data.serverID != null) {
        setValID(result.data.data.serverID);
        setChannelID(result.data.data.channelID); //console.log(result.data.data.serverID);
      }
    }).catch(error => console.log(error));
    fetch(`/api/widget/${shopURL}`).then(res => res.json()).then(data => {
      var widget = data.data; //console.log(widget)

      if (widget != null) {
        if (widget.desktopPosition.yAxis == 'top' && widget.desktopPosition.xAxis == 'left') {
          setPressedObject({
            button1: true,
            button2: false,
            button3: false,
            button4: false
          });
          setPositionDesktop({
            'yAxis': 'top',
            'xAxis': 'left'
          });
        } else if (widget.desktopPosition.yAxis == 'top' && widget.desktopPosition.xAxis == 'right') {
          setPressedObject({
            button1: false,
            button2: true,
            button3: false,
            button4: false
          });
          setPositionDesktop({
            'yAxis': 'top',
            'xAxis': 'right'
          });
        } else if (widget.desktopPosition.yAxis == 'bottom' && widget.desktopPosition.xAxis == 'left') {
          setPressedObject({
            button1: false,
            button2: false,
            button3: true,
            button4: false
          });
          setPositionDesktop({
            'yAxis': 'bottom',
            'xAxis': 'left'
          });
        } else if (widget.desktopPosition.yAxis == 'bottom' && widget.desktopPosition.xAxis == 'right') {
          setPressedObject({
            button1: false,
            button2: false,
            button3: false,
            button4: true
          });
          setPositionDesktop({
            'yAxis': 'bottom',
            'xAxis': 'right'
          });
        }

        if (widget.mobilePosition.yAxis == 'top' && widget.mobilePosition.xAxis == 'left') {
          setPressedObject2({
            button5: true,
            button6: false,
            button7: false,
            button8: false
          });
          setPositionMobile({
            'yAxis': 'top',
            'xAxis': 'left'
          });
        } else if (widget.mobilePosition.yAxis == 'top' && widget.mobilePosition.xAxis == 'right') {
          setPressedObject2({
            button4: false,
            button6: true,
            button7: false,
            button8: false
          });
          setPositionMobile({
            'yAxis': 'top',
            'xAxis': 'right'
          });
        } else if (widget.mobilePosition.yAxis == 'bottom' && widget.mobilePosition.xAxis == 'left') {
          setPressedObject2({
            button5: false,
            button6: false,
            button7: true,
            button8: false
          });
          setPositionMobile({
            'yAxis': 'bottom',
            'xAxis': 'left'
          });
        } else if (widget.mobilePosition.yAxis == 'bottom' && widget.mobilePosition.xAxis == 'right') {
          setPressedObject2({
            button5: false,
            button6: false,
            button7: false,
            button8: true
          });
          setPositionMobile({
            'yAxis': 'bottom',
            'xAxis': 'right'
          });
        }

        var ccolor = hexToHsl(widget.color);
        setColorPlus({
          hue: ccolor.h,
          saturation: ccolor.s / 100,
          brightness: ccolor.l / 100
        });
        setNotificationValue(widget.notificationText);
        setTimeoutValue(widget.notificationTimeout);
        setAvatarValue(widget.notificationAvatar);
        setDesktopVal(widget.desktop);
        setMobileVal(widget.mobile);
        setWidgetEnabled(widget.widgetEnabled);
      } //console.log(data.data);


      setWidget({
        desktopPosition: widget.desktopPosition,
        mobilePosition: widget.mobilePosition,
        notificationText: widget.notificationText,
        notificationTimeout: widget.notificationTimeout,
        notificationAvatar: widget.notificationAvatar,
        mobile: widget.mobile,
        desktop: widget.desktop,
        color: widget.color,
        widgetEnabled: widget.widgetEnabled
      });
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
        query: QUERY_SCRIPTTAGS
      }]
    });
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    title: "Widget Settings"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    alignment: "center",
    spacing: "extraLoose"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
    fill: true
  }, widgetEnabled ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__["CircleTickMajorMonotone"]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    size: "small"
  }, "Discord Widget is ", __jsx("b", {
    style: {
      color: '#50b83c'
    }
  }, "enabled"))) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_5__["CircleAlertMajorMonotone"]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    size: "small"
  }, "Discord Widget is ", __jsx("b", {
    style: {
      color: '#de3618'
    }
  }, "disabled")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("label", {
    className: "switch"
  }, valID != '' ? __jsx("input", {
    type: "checkbox",
    checked: widgetEnabled,
    onChange: () => {
      if (valID != '') {
        setWidgetEnabled(!widgetEnabled);
        setWidget({
          desktopPosition: positionDesktop,
          mobilePosition: positionMobile,
          notificationText: notificationValue,
          notificationTimeout: timeoutValue,
          notificationAvatar: avatarValue,
          mobile: mobileVal,
          desktop: desktopVal,
          color: hslToHex(color.hue, color.brightness, color.saturation),
          widgetEnabled: !widgetEnabled
        });
        makeApiCall({
          desktopPosition: positionDesktop,
          mobilePosition: positionMobile,
          notificationText: notificationValue,
          notificationTimeout: timeoutValue,
          notificationAvatar: avatarValue,
          mobile: mobileVal,
          desktop: desktopVal,
          color: hslToHex(color.hue, color.brightness, color.saturation),
          widgetEnabled: !widgetEnabled
        }, shopURL);
      }
    }
  }) : '', valID != '' ? __jsx("span", {
    className: "slider round"
  }) : '')))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Device Settings"))
  }, __jsx("p", null, "Show on"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    label: "Desktop",
    checked: desktopVal && !mobileVal,
    onChange: () => {
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: notificationValue,
        notificationTimeout: timeoutValue,
        notificationAvatar: avatarValue,
        mobile: false,
        desktop: true,
        color: hslToHex(color.hue, color.saturation, color.brightness),
        widgetEnabled: widgetEnabled
      });
      setMobileVal(false);
      setDesktopVal(true);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    label: "Mobile",
    checked: mobileVal && !desktopVal,
    onChange: () => {
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: notificationValue,
        notificationTimeout: timeoutValue,
        notificationAvatar: avatarValue,
        mobile: true,
        desktop: false,
        color: hslToHex(color.hue, color.saturation, color.brightness),
        widgetEnabled: widgetEnabled
      });
      setMobileVal(true);
      setDesktopVal(false);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    label: "Both",
    checked: desktopVal && mobileVal,
    onChange: () => {
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: notificationValue,
        notificationTimeout: timeoutValue,
        notificationAvatar: avatarValue,
        mobile: true,
        desktop: true,
        color: hslToHex(color.hue, color.saturation, color.brightness),
        widgetEnabled: widgetEnabled
      });
      setMobileVal(true);
      setDesktopVal(true);
    }
  })), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    spacing: "extraTight",
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    size: "small"
  }, "Desktop Placement"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed('button1'),
    onClick: () => {
      handleClick('button1');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed('button2'),
    onClick: () => {
      handleClick('button2');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed('button3'),
    onClick: () => {
      handleClick('button3');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed('button4'),
    onClick: () => {
      handleClick('button4');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    spacing: "extraTight",
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    size: "small"
  }, "Mobile Placement"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed2('button5'),
    onClick: () => {
      handleClick('button5');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed2('button6'),
    onClick: () => {
      handleClick('button6');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed2('button7'),
    onClick: () => {
      handleClick('button7');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  }), __jsx("div", {
    className: "grid-item"
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    pressed: buttonPressed2('button8'),
    onClick: () => {
      handleClick('button8');
    }
  }, __jsx("div", {
    className: "grid-container"
  }, __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item"
  }), __jsx("div", {
    className: "grid-item",
    style: {
      backgroundColor: '#7289DA'
    }
  })))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Appearance Settings"))
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center",
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
    onChange: setColorPlus,
    color: color
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => {
      setColorPlus({
        hue: 227,
        saturation: 0.58,
        brightness: 0.65
      });
    }
  }, "Set Discord Purple Color"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Widget Notifications")),
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Notification Text",
    value: notificationValue,
    onChange: val => {
      setNotificationValue(val);
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: val,
        notificationTimeout: timeoutValue,
        notificationAvatar: avatarValue,
        mobile: mobileVal,
        desktop: desktopVal,
        color: hslToHex(color.hue, color.brightness, color.saturation),
        widgetEnabled: widgetEnabled
      });
    }
  }), __jsx("br", null), __jsx("p", null, "You can create hyperlinks using markdown like so: [text](link)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Notification Timeout (miliseconds)",
    type: "number",
    value: timeoutValue,
    onChange: val => {
      setTimeoutValue(val);
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: notificationValue,
        notificationTimeout: val,
        notificationAvatar: avatarValue,
        mobile: mobileVal,
        desktop: desktopVal,
        color: hslToHex(color.hue, color.brightness, color.saturation),
        widgetEnabled: widgetEnabled
      });
    }
  }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    label: "Notification Avatar URL",
    value: avatarValue,
    onChange: val => {
      setAvatarValue(val);
      setWidget({
        desktopPosition: positionDesktop,
        mobilePosition: positionMobile,
        notificationText: notificationValue,
        notificationTimeout: timeoutValue,
        notificationAvatar: val,
        mobile: mobileVal,
        desktop: desktopVal,
        color: hslToHex(color.hue, color.brightness, color.saturation),
        widgetEnabled: widgetEnabled
      });
    }
  }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => {
      setAvatarValue('https://cdn.discordapp.com/embed/avatars/0.png');
    }
  }, "Set Default Discord Logo Avatar")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Help and Contact"))
  }, __jsx("p", null, "For any kinds of issues or suggestions, you can email us at ", __jsx("b", null, "blazesoftworks7@gmail.com")), __jsx("br", null), __jsx("p", null, "We are not affiliated with either ", __jsx("i", null, "Widgetbot"), " or ", __jsx("i", null, "Discord"), ". You can learn more about ", __jsx("i", null, "Widgetbot"), " and support them for extra features ", __jsx("b", null, __jsx("a", {
    href: "https://widgetbot.io/",
    target: "_blank"
  }, "here")), "."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Sticky"], {
    offset: true
  }, __jsx("div", {
    style: {
      backgroundColor: '#99aab5',
      borderRadius: '10px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center",
    alignment: "center",
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    size: "small"
  }, "Press the buttons bellow after every change to see the preview")), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    segmented: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    size: "slim",
    pressed: desktopPreview,
    onClick: () => {
      setDesktopPreview(true);

      if (valID != '') {
        returnIframe(true);
        setFirstRender(false);
      }
    }
  }, "Generate Desktop"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    primary: true,
    size: "slim",
    pressed: !desktopPreview,
    onClick: () => {
      setDesktopPreview(false);

      if (valID != '') {
        returnIframe(false);
        setFirstRender(false);
      }
    }
  }, "Generate Mobile")), returnFirstIframe()), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: !desktopPreview ? "center" : "fill"
  }, __jsx("div", {
    id: "previewdiv"
  }))))), __jsx("div", {
    style: {
      position: 'fixed',
      zIndex: '99',
      bottom: '0',
      right: '0',
      padding: '1rem',
      height: '50px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      background: '#F4F6F8',
      borderTop: '1px solid #DFE3E8'
    }
  }, __jsx("div", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: valID == '',
    size: "slim",
    primary: true,
    onClick: () => {
      makeApiCall(widgetObj, shopURL);
      setActive(true);
    }
  }, "Save Settings"))), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#f4f6f8',
      width: '100%',
      marginTop: '20px',
      marginBottom: '77px',
      padding: '20px 24px 20px 0px'
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/script-page.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyProjects\discord-app\pages\script-page.js */"./pages/script-page.js");


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

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2NyaXB0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQ1JFQVRFX1NDUklQVFRBRyIsImdxbCIsIlFVRVJZX1NDUklQVFRBR1MiLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInN0b3AiLCJzZXRTdG9wIiwidXNlU3RhdGUiLCJjcmVhdGVTY3JpcHRzIiwidXNlTXV0YXRpb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJ3aWRnZXRFbmFibGVkIiwic2V0V2lkZ2V0RW5hYmxlZCIsInByZXNzZWRPYmplY3QiLCJzZXRQcmVzc2VkT2JqZWN0IiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJidXR0b24zIiwiYnV0dG9uNCIsInByZXNzZWRPYmplY3QyIiwic2V0UHJlc3NlZE9iamVjdDIiLCJidXR0b241IiwiYnV0dG9uNiIsImJ1dHRvbjciLCJidXR0b244IiwibW9iaWxlVmFsIiwic2V0TW9iaWxlVmFsIiwiZGVza3RvcFZhbCIsInNldERlc2t0b3BWYWwiLCJwb3NpdGlvbkRlc2t0b3AiLCJzZXRQb3NpdGlvbkRlc2t0b3AiLCJwb3NpdGlvbk1vYmlsZSIsInNldFBvc2l0aW9uTW9iaWxlIiwiY29sb3IiLCJzZXRDb2xvciIsImh1ZSIsImJyaWdodG5lc3MiLCJzYXR1cmF0aW9uIiwic2V0Q29sb3JQbHVzIiwiY29sIiwic2V0V2lkZ2V0IiwiZGVza3RvcFBvc2l0aW9uIiwibW9iaWxlUG9zaXRpb24iLCJub3RpZmljYXRpb25UZXh0Iiwibm90aWZpY2F0aW9uVmFsdWUiLCJub3RpZmljYXRpb25UaW1lb3V0IiwidGltZW91dFZhbHVlIiwibm90aWZpY2F0aW9uQXZhdGFyIiwiYXZhdGFyVmFsdWUiLCJtb2JpbGUiLCJkZXNrdG9wIiwiaHNsVG9IZXgiLCJ3aWRnZXRPYmoiLCJ2YWxJRCIsInNldFZhbElEIiwiY2hhbm5lbElEIiwic2V0Q2hhbm5lbElEIiwiZmlyc3QiLCJzZXRGaXJzdCIsInNldE5vdGlmaWNhdGlvblZhbHVlIiwic2V0VGltZW91dFZhbHVlIiwic2V0QXZhdGFyVmFsdWUiLCJkZXNrdG9wUHJldmlldyIsInNldERlc2t0b3BQcmV2aWV3IiwiZmlyc3RSZW5kZXIiLCJzZXRGaXJzdFJlbmRlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInRvYXN0TWFya3VwIiwiekluZGV4IiwiYnV0dG9uUHJlc3NlZCIsImkiLCJidXR0b25QcmVzc2VkMiIsImhhbmRsZUNsaWNrIiwicG9zIiwicG9zMiIsInJldHVybklmcmFtZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwidHlwZSIsInNyYyIsInRleHQiLCJ5QXhpcyIsInhBeGlzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bmRlZmluZWQiLCJyZW1vdmUiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsIiQiLCJ3aW5kb3ciLCJzdHlsZSIsImJvcmRlciIsInNldFRpbWVvdXQiLCJjb250ZW50RG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwicmV0dXJuRmlyc3RJZnJhbWUiLCJjb25zb2xlIiwibG9nIiwibWFrZUFwaUNhbGwiLCJhcHBJbmZvIiwic1VSTCIsInVybCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlc3BvbnNlIiwiaGV4VG9Ic2wiLCJoZXgiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJtYXgiLCJNYXRoIiwibWluIiwiaCIsInMiLCJsIiwiZCIsInJvdW5kIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsInRvSGV4IiwieCIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWVzc2FnZSIsInNob3BVUkwiLCJTdHJpbmciLCJzaG9wIiwibXlzaG9waWZ5RG9tYWluIiwic3Vic3RyIiwiZ2V0Iiwic2VydmVySUQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ3aWRnZXQiLCJjY29sb3IiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSIsIkNpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZSIsImJhY2tncm91bmRDb2xvciIsInZhbCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlclRvcCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDbkQsU0FBRCxFQUFZcUYsT0FBWixDQUFYO0FBQ0F0RSxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFIRCxxQkFkSixDQXZSSixDQWhESixFQW1aSTtBQUFLLFNBQUssRUFBRTtBQUNSa0csYUFBTyxFQUFFLE1BREQ7QUFFUkksbUJBQWEsRUFBRSxLQUZQO0FBR1JYLHFCQUFlLEVBQUUsU0FIVDtBQUlScEUsV0FBSyxFQUFFLE1BSkM7QUFLUmdGLGVBQVMsRUFBRSxNQUxIO0FBTVJDLGtCQUFZLEVBQUUsTUFOTjtBQU9SUCxhQUFPLEVBQUU7QUFQRDtBQUFaLElBblpKLENBREosQ0FESjtBQWlhSDs7QUFFY25LLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyN0JBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzY3JpcHQtcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VMaXN0LCBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZCwgUGFnZSwgTGF5b3V0LCBTdGFjaywgRGlzcGxheVRleHQsIEljb24sIEJ1dHRvbkdyb3VwLCBSYWRpb0J1dHRvbiwgU3RpY2t5LCBCYW5uZXIsIENvbG9yUGlja2VyLCBUb2FzdCwgRnJhbWUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lLCBDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBDUkVBVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XHJcbiAgICAgICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgICAgICBzY3JpcHRUYWcge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvcCB7XHJcbiAgICAgICAgICAgIG15c2hvcGlmeURvbWFpblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgdXJsU2NyaXB0VGFncyA9IGBodHRwczovL2Rpc2NvcmQtc2hvcGlmeS1hcHAuaGVyb2t1YXBwLmNvbS90ZXN0LXNjcmlwdC5qc2A7XHJcblxyXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xyXG4gICAgY29uc3QgW3N0b3AsIHNldFN0b3BdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRUQUcpO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcbiAgICBjb25zdCBbd2lkZ2V0RW5hYmxlZCwgc2V0V2lkZ2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwcmVzc2VkT2JqZWN0LCBzZXRQcmVzc2VkT2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b24xOiBmYWxzZSxcclxuICAgICAgICBidXR0b24yOiBmYWxzZSxcclxuICAgICAgICBidXR0b24zOiBmYWxzZSxcclxuICAgICAgICBidXR0b240OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcHJlc3NlZE9iamVjdDIsIHNldFByZXNzZWRPYmplY3QyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b241OiBmYWxzZSxcclxuICAgICAgICBidXR0b242OiBmYWxzZSxcclxuICAgICAgICBidXR0b243OiBmYWxzZSxcclxuICAgICAgICBidXR0b244OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbW9iaWxlVmFsLCBzZXRNb2JpbGVWYWxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZGVza3RvcFZhbCwgc2V0RGVza3RvcFZhbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbkRlc2t0b3AsIHNldFBvc2l0aW9uRGVza3RvcF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uTW9iaWxlLCBzZXRQb3NpdGlvbk1vYmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaHVlOiAyMjcsXHJcbiAgICAgICAgYnJpZ2h0bmVzczogMC42NSxcclxuICAgICAgICBzYXR1cmF0aW9uOiAwLjU4LFxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvclBsdXMoY29sKSB7XHJcbiAgICAgICAgc2V0Q29sb3IoY29sKTtcclxuICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3dpZGdldE9iaiwgc2V0V2lkZ2V0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNrdG9wUG9zaXRpb246IHtcclxuICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2JpbGVQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRleHQ6ICdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiAnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycsXHJcbiAgICAgICAgY29sb3I6ICcjNzI4OURBJyxcclxuICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICB3aWRnZXRFbmFibGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbElELCBzZXRWYWxJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhbm5lbElELCBzZXRDaGFubmVsSURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbbm90aWZpY2F0aW9uVmFsdWUsIHNldE5vdGlmaWNhdGlvblZhbHVlXSA9IHVzZVN0YXRlKCdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnKTtcclxuICAgIGNvbnN0IFt0aW1lb3V0VmFsdWUsIHNldFRpbWVvdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnMjAwMCcpO1xyXG4gICAgY29uc3QgW2F2YXRhclZhbHVlLCBzZXRBdmF0YXJWYWx1ZV0gPSB1c2VTdGF0ZSgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycpO1xyXG5cclxuICAgIGNvbnN0IFtkZXNrdG9wUHJldmlldywgc2V0RGVza3RvcFByZXZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIC8vdG9hc3RcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3RNYXJrdXAgPSBhY3RpdmUgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6ICc5OTknIH19PlxyXG4gICAgICAgICAgICA8VG9hc3QgY29udGVudD1cIlNldHRpbmdzIFNhdmVkXCIgb25EaXNtaXNzPXsoKSA9PiB7IHNldEFjdGl2ZSghYWN0aXZlKSB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gYnV0dG9uUHJlc3NlZChpKSB7XHJcbiAgICAgICAgaWYgKHByZXNzZWRPYmplY3RbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1dHRvblByZXNzZWQyKGkpIHtcclxuICAgICAgICBpZiAocHJlc3NlZE9iamVjdDJbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGkpID0+IHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb25EZXNrdG9wO1xyXG4gICAgICAgIHZhciBwb3MyID0gcG9zaXRpb25Nb2JpbGU7XHJcblxyXG4gICAgICAgIGlmIChidXR0b25QcmVzc2VkKGkpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMScpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IHRydWUsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24yJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IHRydWUsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24zJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiB0cnVlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjQnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QocG9zID0geyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChidXR0b25QcmVzc2VkMihpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjUnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogdHJ1ZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjYnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IHRydWUsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b243Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogdHJ1ZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b244Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zLFxyXG4gICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zMixcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5JZnJhbWUoZGVza3RvcCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B3aWRnZXRib3QvY3JhdGVAM1wiO1xyXG4gICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgdmFyIGNyYXRlID0gbmV3IENyYXRlKHtcclxuICAgICAgICAgICAgICAgIHNlcnZlcjogJyR7dmFsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogW1wiJHsoZGVza3RvcCkgPyB3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnlBeGlzIDogd2lkZ2V0T2JqLm1vYmlsZVBvc2l0aW9uLnlBeGlzfVwiLCBcIiR7KGRlc2t0b3ApID8gd2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi54QXhpcyA6IHdpZGdldE9iai5tb2JpbGVQb3NpdGlvbi54QXhpc31cIl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNoYXJkOiAnaHR0cHM6Ly9lLndpZGdldGJvdC5pbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICBkZWZlcjogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyYXRlLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGV4dH0nLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25BdmF0YXJ9JyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgaWZyYW1lLmlkID0gXCJ3aWRnZXRib3RpZnJhbWVcIjtcclxuICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXdkaXZcIikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgZ28gdG8gRGlzY29yZGlmeSBTZXJ2ZXIvQ2hhbm5lbCBJRCBhbmQgY29tcGxldGUgdGhlIHNldHVwIGZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5GaXJzdElmcmFtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmUgcHVsYVwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmIChmaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHdpZGdldGJvdC9jcmF0ZUAzXCI7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIHZhciBjcmF0ZSA9IG5ldyBDcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyOiAnJHt2YWxJRH0nLCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFtcIiR7d2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi55QXhpc31cIiwgXCIke3dpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueEF4aXN9XCJdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmQ6ICdodHRwczovL2Uud2lkZ2V0Ym90LmlvJywgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjcmF0ZS5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25UZXh0fScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uQXZhdGFyfScgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5pZCA9IFwid2lkZ2V0Ym90aWZyYW1lXCI7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2h7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aWV3ZGl2XCIpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGdvIHRvIERpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSUQgYW5kIGNvbXBsZXRlIHRoZSBzZXR1cCBmaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaXJzdFJlbmRlcihmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG1ha2VBcGlDYWxsKGFwcEluZm8sIHNVUkwpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS93aWRnZXQvJHtzVVJMfWA7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBhcHBJbmZvKS50aGVuKChyZXN1bHQpID0+IHsgfSkuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoZXhUb0hzbChoZXgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcblxyXG4gICAgICAgIHZhciByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgdmFyIGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG5cclxuICAgICAgICByIC89IDI1NSwgZyAvPSAyNTUsIGIgLz0gMjU1O1xyXG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICAgICAgdmFyIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XHJcblxyXG4gICAgICAgIGlmIChtYXggPT0gbWluKSB7XHJcbiAgICAgICAgICAgIGggPSBzID0gMDsgLy8gYWNocm9tYXRpY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoIC89IDY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzID0gcyAqIDEwMDtcclxuICAgICAgICBzID0gTWF0aC5yb3VuZChzKTtcclxuICAgICAgICBsID0gbCAqIDEwMDtcclxuICAgICAgICBsID0gTWF0aC5yb3VuZChsKTtcclxuICAgICAgICBoID0gTWF0aC5yb3VuZCgzNjAgKiBoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaCwgcywgbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhzbFRvSGV4KGgsIHMsIGwpIHtcclxuICAgICAgICBoIC89IDM2MDtcclxuICAgICAgICAvL3MgLz0gMTAwO1xyXG4gICAgICAgIC8vbCAvPSAxMDA7XHJcbiAgICAgICAgbGV0IHIsIGcsIGI7XHJcbiAgICAgICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh1ZTJyZ2IgPSAocCwgcSwgdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAwKSB0ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA+IDEpIHQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XHJcbiAgICAgICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XHJcbiAgICAgICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xyXG4gICAgICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b0hleCA9IHggPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKHggKiAyNTUpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYCMke3RvSGV4KHIpfSR7dG9IZXgoZyl9JHt0b0hleChiKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxyXG5cclxuICAgIGNvbnN0IHNob3BVUkwgPSBTdHJpbmcoZGF0YS5zaG9wLm15c2hvcGlmeURvbWFpbikuc3Vic3RyKDAsIFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5sZW5ndGggLSAxNCk7XHJcblxyXG4gICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2Rpc2NvcmRJRC8ke3Nob3BVUkx9YCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWxJRChyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEKTtcclxuICAgICAgICAgICAgICAgIHNldENoYW5uZWxJRChyZXN1bHQuZGF0YS5kYXRhLmNoYW5uZWxJRCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgZmV0Y2goYC9hcGkvd2lkZ2V0LyR7c2hvcFVSTH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogdHJ1ZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogdHJ1ZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogdHJ1ZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogdHJ1ZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNDogZmFsc2UsIGJ1dHRvbjY6IHRydWUsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiB0cnVlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2NvbG9yID0gaGV4VG9Ic2wod2lkZ2V0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb2xvclBsdXMoeyBodWU6IGNjb2xvci5oLCBzYXR1cmF0aW9uOiAoY2NvbG9yLnMgLyAxMDApLCBicmlnaHRuZXNzOiAoY2NvbG9yLmwgLyAxMDApIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvblZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25UZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXRWYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uVGltZW91dClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdmF0YXJWYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uQXZhdGFyKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwod2lkZ2V0LmRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHdpZGdldC5tb2JpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0RW5hYmxlZCh3aWRnZXQud2lkZ2V0RW5hYmxlZClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHdpZGdldC5kZXNrdG9wUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHdpZGdldC5tb2JpbGVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiB3aWRnZXQubm90aWZpY2F0aW9uVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB3aWRnZXQubm90aWZpY2F0aW9uVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IHdpZGdldC5ub3RpZmljYXRpb25BdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB3aWRnZXQubW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHdpZGdldC5kZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aWRnZXQuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0LndpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgICAgIHNldEZpcnN0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RvcCAmJiBkYXRhLnNjcmlwdFRhZ3MuZWRnZXNbMF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdWJsdSBjYWNhdFwiKVxyXG4gICAgICAgIHNldFN0b3AoZmFsc2UpO1xyXG4gICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT1cIldpZGdldCBTZXR0aW5nc1wiID5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvYXN0TWFya3VwfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiIHNwYWNpbmc9XCJleHRyYUxvb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aWRnZXRFbmFibGVkKSA/IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZVRpY2tNYWpvck1vbm90b25lfSAvPjxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EaXNjb3JkIFdpZGdldCBpcyA8YiBzdHlsZT17eyBjb2xvcjogJyM1MGI4M2MnIH19PmVuYWJsZWQ8L2I+PC9EaXNwbGF5VGV4dD48L1N0YWNrPiA6IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZX0gLz48RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+RGlzY29yZCBXaWRnZXQgaXMgPGIgc3R5bGU9e3sgY29sb3I6ICcjZGUzNjE4JyB9fT5kaXNhYmxlZDwvYj48L0Rpc3BsYXlUZXh0PjwvU3RhY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt3aWRnZXRFbmFibGVkfSBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldEVuYWJsZWQoIXdpZGdldEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6ICF3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiAhd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbElEICE9ICcnKSA/IDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkRldmljZSBTZXR0aW5nczwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaG93IG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVza3RvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgIW1vYmlsZVZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVWYWwgJiYgIWRlc2t0b3BWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgbW9iaWxlVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFUaWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EZXNrdG9wIFBsYWNlbWVudDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjEnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMScpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjInKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMycpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24zJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uNCcpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b240JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYVRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPk1vYmlsZSBQbGFjZW1lbnQ8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNScpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b241JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjYnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjcnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNycpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b244Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjgnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkFwcGVhcmFuY2UgU2V0dGluZ3M8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIHZlcnRpY2FsID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgb25DaGFuZ2U9e3NldENvbG9yUGx1c30gY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvclBsdXMoeyBodWU6IDIyNywgc2F0dXJhdGlvbjogMC41OCwgYnJpZ2h0bmVzczogMC42NSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IERpc2NvcmQgUHVycGxlIENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5EaXNjb3VudCBmb3IgSm9pbmluZyBTZXJ2ZXI8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaXNjb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNDb2RlRGlzY291bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVzT25jZVBlckN1c3RvbWVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFwiRElTQ09SRDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJTZWxlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckdldHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMC4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRpc2NvcmQgRGlzY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2FnZUxpbWl0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c0F0OiBcIjIwMTktMDctMDNUMjA6NDc6NTVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+V2lkZ2V0IE5vdGlmaWNhdGlvbnM8L2I+PC9EaXNwbGF5VGV4dD59IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gVGV4dFwiIHZhbHVlPXtub3RpZmljYXRpb25WYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25WYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gY3JlYXRlIGh5cGVybGlua3MgdXNpbmcgbWFya2Rvd24gbGlrZSBzbzogW3RleHRdKGxpbmspPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIFRpbWVvdXQgKG1pbGlzZWNvbmRzKVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGltZW91dFZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXRWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBBdmF0YXIgVVJMXCIgdmFsdWU9e2F2YXRhclZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF2YXRhclZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldEF2YXRhclZhbHVlKCdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJykgfX0+U2V0IERlZmF1bHQgRGlzY29yZCBMb2dvIEF2YXRhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5IZWxwIGFuZCBDb250YWN0PC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBhbnkga2luZHMgb2YgaXNzdWVzIG9yIHN1Z2dlc3Rpb25zLCB5b3UgY2FuIGVtYWlsIHVzIGF0IDxiPmJsYXplc29mdHdvcmtzN0BnbWFpbC5jb208L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgbm90IGFmZmlsaWF0ZWQgd2l0aCBlaXRoZXIgPGk+V2lkZ2V0Ym90PC9pPiBvciA8aT5EaXNjb3JkPC9pPi4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IDxpPldpZGdldGJvdDwvaT4gYW5kIHN1cHBvcnQgdGhlbSBmb3IgZXh0cmEgZmVhdHVyZXMgPGI+PGEgaHJlZj1cImh0dHBzOi8vd2lkZ2V0Ym90LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+PC9iPi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreSBvZmZzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5OWFhYjUnLCBib3JkZXJSYWRpdXM6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5QcmVzcyB0aGUgYnV0dG9ucyBiZWxsb3cgYWZ0ZXIgZXZlcnkgY2hhbmdlIHRvIHNlZSB0aGUgcHJldmlldzwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT1cInNsaW1cIiBwcmVzc2VkPXtkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyh0cnVlKTsgaWYgKHZhbElEICE9ICcnKSB7IHJldHVybklmcmFtZSh0cnVlKTsgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpOyB9IH19PkdlbmVyYXRlIERlc2t0b3A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic2xpbVwiIHByZXNzZWQ9eyFkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyhmYWxzZSk7IGlmICh2YWxJRCAhPSAnJykgeyByZXR1cm5JZnJhbWUoZmFsc2UpOyBzZXRGaXJzdFJlbmRlcihmYWxzZSk7IH0gfX0+R2VuZXJhdGUgTW9iaWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkZpcnN0SWZyYW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj17KCFkZXNrdG9wUHJldmlldykgPyBcImNlbnRlclwiIDogXCJmaWxsXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJldmlld2RpdlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6ICc5OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjRjRGNkY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNERkUzRTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt2YWxJRCA9PSAnJ30gc2l6ZT1cInNsaW1cIiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHdpZGdldE9iaiwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgU2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic2xpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsU2NyaXB0VGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBTY3JpcHRUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1NjcmlwdCcsIHBsdXJhbDogJ1NjcmlwdHMnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEuc2NyaXB0VGFncy5lZGdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU2NyaXB0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPiAqL31cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjZmOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc3N3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCAyNHB4IDIwcHggMHB4J1xyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPC9QYWdlID5cclxuICAgICAgICA8L0ZyYW1lID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0UGFnZTtcclxuXHJcblxyXG5cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9