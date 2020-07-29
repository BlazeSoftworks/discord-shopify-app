webpackHotUpdate("static\\development\\pages\\script-page.js",{

/***/ "./pages/script-page.js":
/*!******************************!*\
  !*** ./pages/script-page.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);





var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    mutation scriptTagDelete($id: ID!) {\n        scriptTagDelete(id: $id) {\n            deletedScriptTagId\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    query {\n        scriptTags(first: 5) {\n            edges {\n                node {\n                    id\n                    src\n                    displayScope\n                }\n            }\n        }\n        shop {\n            myshopifyDomain\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    mutation scriptTagCreate($input: ScriptTagInput!) {\n        scriptTagCreate(input: $input) {\n           scriptTag {\n             id\n            }\n           userErrors {\n            field\n            message\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var CREATE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var QUERY_SCRIPTTAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2());
var DELETE_SCRIPTTAG = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3());
var urlScriptTags = "https://73db43641e40.ngrok.io/test-script.js";

function ScriptPage() {
  _s();

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(CREATE_SCRIPTTAG),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      createScripts = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(DELETE_SCRIPTTAG),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation3, 1),
      deleteScripts = _useMutation4[0];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(QUERY_SCRIPTTAGS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      widgetEnabled = _useState[0],
      setWidgetEnabled = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    button1: false,
    button2: false,
    button3: false,
    button4: true
  }),
      pressedObject = _useState2[0],
      setPressedObject = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    button5: false,
    button6: false,
    button7: false,
    button8: true
  }),
      pressedObject2 = _useState3[0],
      setPressedObject2 = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      mobileVal = _useState4[0],
      setMobileVal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      desktopVal = _useState5[0],
      setDesktopVal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  }),
      positionDesktop = _useState6[0],
      setPositionDesktop = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  }),
      positionMobile = _useState7[0],
      setPositionMobile = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    hue: 227,
    brightness: 0.65,
    saturation: 0.58
  }),
      color = _useState8[0],
      setColor = _useState8[1];

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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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
  }),
      widgetObj = _useState9[0],
      setWidget = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      valID = _useState10[0],
      setValID = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      channelID = _useState11[0],
      setChannelID = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      first = _useState12[0],
      setFirst = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('[Join](https://discord.gg/3FKvVwH) our Discord Server!'),
      notificationValue = _useState13[0],
      setNotificationValue = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('2000'),
      timeoutValue = _useState14[0],
      setTimeoutValue = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('https://cdn.discordapp.com/embed/avatars/0.png'),
      avatarValue = _useState15[0],
      setAvatarValue = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      desktopPreview = _useState16[0],
      setDesktopPreview = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      firstRender = _useState17[0],
      setFirstRender = _useState17[1]; //toast


  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      active = _useState18[0],
      setActive = _useState18[1];

  var toastMarkup = active ? __jsx("div", {
    style: {
      zIndex: '999'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Toast"], {
    content: "Settings Saved",
    onDismiss: function onDismiss() {
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

  var handleClick = function handleClick(i) {
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
      script.text = "\n            var crate = new Crate({\n                server: '".concat(valID, "', \n                channel: '").concat(channelID, "', \n                location: [\"").concat(desktop ? widgetObj.desktopPosition.yAxis : widgetObj.mobilePosition.yAxis, "\", \"").concat(desktop ? widgetObj.desktopPosition.xAxis : widgetObj.mobilePosition.xAxis, "\"],                                \n                shard: 'https://e.widgetbot.io',                        \n                color: '").concat(widgetObj.color, "',\n                defer: true,                        \n            })\n            //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                \n            crate.notify({\n                content: '").concat(widgetObj.notificationText, "',\n                timeout: ").concat(widgetObj.notificationTimeout, ",\n                avatar: '").concat(widgetObj.notificationAvatar, "'                        \n              }) \n            ");
      if (document.getElementById('widgetbotiframe') != undefined) document.getElementById('widgetbotiframe').remove();
      var iframe = document.createElement('iframe');
      iframe.id = "widgetbotiframe";
      iframe.width = "100%";
      iframe.height = "".concat(jquery__WEBPACK_IMPORTED_MODULE_11___default()(window).height() - 180, "px");
      iframe.style.border = "none";
      setTimeout(function () {
        try {
          iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
        } catch (_unused) {}
      }, 500);
      document.getElementById("previewdiv").appendChild(iframe);
    } else {
      return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Banner"], {
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
        script.text = "\n                var crate = new Crate({\n                    server: '".concat(valID, "', \n                    channel: '").concat(channelID, "', \n                    location: [\"").concat(widgetObj.desktopPosition.yAxis, "\", \"").concat(widgetObj.desktopPosition.xAxis, "\"],                                \n                    shard: 'https://e.widgetbot.io',                        \n                    color: '").concat(widgetObj.color, "',\n                    defer: true,                        \n                })\n                //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                \n                crate.notify({\n                    content: '").concat(widgetObj.notificationText, "',\n                    timeout: ").concat(widgetObj.notificationTimeout, ",\n                    avatar: '").concat(widgetObj.notificationAvatar, "'                        \n                  }) \n                ");
        if (document.getElementById('widgetbotiframe') != undefined) document.getElementById('widgetbotiframe').remove();
        var iframe = document.createElement('iframe');
        iframe.id = "widgetbotiframe";
        iframe.width = "100%";
        iframe.height = "".concat(jquery__WEBPACK_IMPORTED_MODULE_11___default()(window).height() - 180, "px");
        iframe.style.border = "none";
        setTimeout(function () {
          try {
            iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
          } catch (_unused2) {}
        }, 500);
        document.getElementById("previewdiv").appendChild(iframe);
      } else {
        return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Banner"], {
          status: "critical",
          title: "Please go to Discordify Server/Channel ID and complete the setup first"
        }), __jsx("br", null), __jsx("br", null));
      }

      setTimeout(function () {
        setFirstRender(false);
      }, 1000);
    }
  }

  function makeApiCall(_x, _x2) {
    return _makeApiCall.apply(this, arguments);
  }

  function _makeApiCall() {
    _makeApiCall = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appInfo, sURL) {
      var url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "/api/widget/".concat(sURL);
              axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, appInfo).then(function (result) {})["catch"](function (error) {
                console.log(error.response);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _makeApiCall.apply(this, arguments);
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
      h: h,
      s: s,
      l: l
    };
  }

  function hslToHex(h, s, l) {
    h /= 360; //s /= 100;
    //l /= 100;

    var r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    var toHex = function toHex(x) {
      var hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
  }

  if (loading) return __jsx("div", null, "Loading...");
  if (error) return __jsx("div", null, error.message);
  var shopURL = String(data.shop.myshopifyDomain).substr(0, String(data.shop.myshopifyDomain).length - 14);

  if (first) {
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/discordID/".concat(shopURL)).then(function (result) {
      if (result.data.data.serverID != null) {
        setValID(result.data.data.serverID);
        setChannelID(result.data.data.channelID); //console.log(result.data.data.serverID);
      }
    })["catch"](function (error) {
      return console.log(error);
    });
    fetch("/api/widget/".concat(shopURL)).then(function (res) {
      return res.json();
    }).then(function (data) {
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
    })["catch"](function (error) {
      return console.log(error);
    });
    setFirst(false);
  }

  if (data.scriptTags.edges[0] == undefined) {
    console.log("dublu cacat");
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

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    title: "Widget Settings"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, toastMarkup, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    alignment: "center",
    spacing: "extraLoose"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, {
    fill: true
  }, widgetEnabled ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__["CircleTickMajorMonotone"]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
    size: "small"
  }, "Discord Widget is ", __jsx("b", {
    style: {
      color: '#50b83c'
    }
  }, "enabled"))) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    alignment: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    source: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_9__["CircleAlertMajorMonotone"]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
    size: "small"
  }, "Discord Widget is ", __jsx("b", {
    style: {
      color: '#de3618'
    }
  }, "disabled")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, null, __jsx("label", {
    className: "switch"
  }, valID != '' ? __jsx("input", {
    type: "checkbox",
    checked: widgetEnabled,
    onChange: function onChange() {
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
  }) : '')))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Device Settings"))
  }, __jsx("p", null, "Show on"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["RadioButton"], {
    label: "Desktop",
    checked: desktopVal && !mobileVal,
    onChange: function onChange() {
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
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["RadioButton"], {
    label: "Mobile",
    checked: mobileVal && !desktopVal,
    onChange: function onChange() {
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
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["RadioButton"], {
    label: "Both",
    checked: desktopVal && mobileVal,
    onChange: function onChange() {
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
  })), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    spacing: "extraTight",
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
    size: "small"
  }, "Desktop Placement"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed('button1'),
    onClick: function onClick() {
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
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed('button2'),
    onClick: function onClick() {
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
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed('button3'),
    onClick: function onClick() {
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
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed('button4'),
    onClick: function onClick() {
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
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    spacing: "extraTight",
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
    size: "small"
  }, "Mobile Placement"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed2('button5'),
    onClick: function onClick() {
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
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed2('button6'),
    onClick: function onClick() {
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
  }))))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed2('button7'),
    onClick: function onClick() {
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
  }))), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    pressed: buttonPressed2('button8'),
    onClick: function onClick() {
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
  })))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Appearance Settings"))
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    distribution: "center",
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
    onChange: setColorPlus,
    color: color
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: function onClick() {
      setColorPlus({
        hue: 227,
        saturation: 0.58,
        brightness: 0.65
      });
    }
  }, "Set Discord Purple Color"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Widget Notifications")),
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    label: "Notification Text",
    value: notificationValue,
    onChange: function onChange(val) {
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
  }), __jsx("br", null), __jsx("p", null, "You can create hyperlinks using markdown like so: [text](link)"), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    label: "Notification Timeout (miliseconds)",
    type: "number",
    value: timeoutValue,
    onChange: function onChange(val) {
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
  }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    label: "Notification Avatar URL",
    value: avatarValue,
    onChange: function onChange(val) {
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
  }), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: function onClick() {
      setAvatarValue('https://cdn.discordapp.com/embed/avatars/0.png');
    }
  }, "Set Default Discord Logo Avatar")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    sectioned: true,
    title: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
      size: "small"
    }, __jsx("b", null, "Help and Contact"))
  }, __jsx("p", null, "For any kinds of issues or suggestions, you can email us at ", __jsx("b", null, "blazesoftworks7@gmail.com")), __jsx("br", null), __jsx("p", null, "We are not affiliated with either ", __jsx("i", null, "Widgetbot"), " or ", __jsx("i", null, "Discord"), ". You can learn more about ", __jsx("i", null, "Widgetbot"), " and support them for extra features ", __jsx("b", null, __jsx("a", {
    href: "https://widgetbot.io/",
    target: "_blank"
  }, "here")), "."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"].Section, null, __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Sticky"], {
    offset: true
  }, __jsx("div", {
    style: {
      backgroundColor: '#99aab5',
      borderRadius: '10px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    distribution: "center",
    alignment: "center",
    vertical: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["DisplayText"], {
    size: "small"
  }, "Press the buttons bellow after every change to see the preview")), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    distribution: "center"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    segmented: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    primary: true,
    size: "slim",
    pressed: desktopPreview,
    onClick: function onClick() {
      setDesktopPreview(true);
      if (valID != '') returnIframe(true);
    }
  }, "Generate Desktop"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    primary: true,
    size: "slim",
    pressed: !desktopPreview,
    onClick: function onClick() {
      setDesktopPreview(false);
      if (valID != '') returnIframe(false);
    }
  }, "Generate Mobile")), returnFirstIframe()), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
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
  }, __jsx("div", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    disabled: valID == '',
    size: "slim",
    primary: true,
    onClick: function onClick() {
      makeApiCall(widgetObj, shopURL);
      setActive(true);
    }
  }, "Save Settings")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    primary: true,
    size: "slim",
    type: "submit",
    onClick: function onClick() {
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
  }, "Create ScriptTag")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ResourceList"], {
    showHeader: true,
    resourceName: {
      singular: 'Script',
      plural: 'Scripts'
    },
    items: data.scriptTags.edges,
    renderItem: function renderItem(item) {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["ResourceList"].Item, {
        id: item.node.id
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, null, __jsx("p", null, item.node.id)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "submit",
        onClick: function onClick() {
          deleteScripts({
            variables: {
              id: item.node.id
            },
            refetchQueries: [{
              query: QUERY_SCRIPTTAGS
            }]
          });
        }
      }, "Delete ScriptTag"))));
    }
  })))), __jsx("div", {
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

_s(ScriptPage, "/5fP0pdM9zqrzDBlpwmVGPWJVUg=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
});

_c = ScriptPage;
/* harmony default export */ __webpack_exports__["default"] = (ScriptPage);

var _c;

$RefreshReg$(_c, "ScriptPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInVzZU11dGF0aW9uIiwiY3JlYXRlU2NyaXB0cyIsImRlbGV0ZVNjcmlwdHMiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VTdGF0ZSIsIndpZGdldEVuYWJsZWQiLCJzZXRXaWRnZXRFbmFibGVkIiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJidXR0b24zIiwiYnV0dG9uNCIsInByZXNzZWRPYmplY3QiLCJzZXRQcmVzc2VkT2JqZWN0IiwiYnV0dG9uNSIsImJ1dHRvbjYiLCJidXR0b243IiwiYnV0dG9uOCIsInByZXNzZWRPYmplY3QyIiwic2V0UHJlc3NlZE9iamVjdDIiLCJtb2JpbGVWYWwiLCJzZXRNb2JpbGVWYWwiLCJkZXNrdG9wVmFsIiwic2V0RGVza3RvcFZhbCIsInBvc2l0aW9uRGVza3RvcCIsInNldFBvc2l0aW9uRGVza3RvcCIsInBvc2l0aW9uTW9iaWxlIiwic2V0UG9zaXRpb25Nb2JpbGUiLCJodWUiLCJicmlnaHRuZXNzIiwic2F0dXJhdGlvbiIsImNvbG9yIiwic2V0Q29sb3IiLCJzZXRDb2xvclBsdXMiLCJjb2wiLCJzZXRXaWRnZXQiLCJkZXNrdG9wUG9zaXRpb24iLCJtb2JpbGVQb3NpdGlvbiIsIm5vdGlmaWNhdGlvblRleHQiLCJub3RpZmljYXRpb25WYWx1ZSIsIm5vdGlmaWNhdGlvblRpbWVvdXQiLCJ0aW1lb3V0VmFsdWUiLCJub3RpZmljYXRpb25BdmF0YXIiLCJhdmF0YXJWYWx1ZSIsIm1vYmlsZSIsImRlc2t0b3AiLCJoc2xUb0hleCIsIndpZGdldE9iaiIsInZhbElEIiwic2V0VmFsSUQiLCJjaGFubmVsSUQiLCJzZXRDaGFubmVsSUQiLCJmaXJzdCIsInNldEZpcnN0Iiwic2V0Tm90aWZpY2F0aW9uVmFsdWUiLCJzZXRUaW1lb3V0VmFsdWUiLCJzZXRBdmF0YXJWYWx1ZSIsImRlc2t0b3BQcmV2aWV3Iiwic2V0RGVza3RvcFByZXZpZXciLCJmaXJzdFJlbmRlciIsInNldEZpcnN0UmVuZGVyIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidG9hc3RNYXJrdXAiLCJ6SW5kZXgiLCJidXR0b25QcmVzc2VkIiwiaSIsImJ1dHRvblByZXNzZWQyIiwiaGFuZGxlQ2xpY2siLCJwb3MiLCJwb3MyIiwicmV0dXJuSWZyYW1lIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0eXBlIiwic3JjIiwidGV4dCIsInlBeGlzIiwieEF4aXMiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInJlbW92ZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiJCIsIndpbmRvdyIsInN0eWxlIiwiYm9yZGVyIiwic2V0VGltZW91dCIsImNvbnRlbnREb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJyZXR1cm5GaXJzdElmcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlQXBpQ2FsbCIsImFwcEluZm8iLCJzVVJMIiwidXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsInJlc3BvbnNlIiwiaGV4VG9Ic2wiLCJoZXgiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJtYXgiLCJNYXRoIiwibWluIiwiaCIsInMiLCJsIiwiZCIsInJvdW5kIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsInRvSGV4IiwieCIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWVzc2FnZSIsInNob3BVUkwiLCJTdHJpbmciLCJzaG9wIiwibXlzaG9waWZ5RG9tYWluIiwic3Vic3RyIiwiZ2V0Iiwic2VydmVySUQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ3aWRnZXQiLCJjY29sb3IiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSIsIkNpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZSIsImJhY2tncm91bmRDb2xvciIsInZhbCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlclRvcCIsInNpbmd1bGFyIiwicGx1cmFsIiwiaXRlbSIsIm5vZGUiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQWFBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7QUFnQkEsSUFBTUUsZ0JBQWdCLEdBQUdGLGtEQUFILG9CQUF0QjtBQVlBLElBQU1HLGFBQWEsaURBQW5COztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxxQkFDTUMsdUVBQVcsQ0FBQ04sZ0JBQUQsQ0FEakI7QUFBQTtBQUFBLE1BQ1hPLGFBRFc7O0FBQUEsc0JBRU1ELHVFQUFXLENBQUNILGdCQUFELENBRmpCO0FBQUE7QUFBQSxNQUVYSyxhQUZXOztBQUFBLGtCQUdlQyxvRUFBUSxDQUFDUCxnQkFBRCxDQUh2QjtBQUFBLE1BR1ZRLE9BSFUsYUFHVkEsT0FIVTtBQUFBLE1BR0RDLEtBSEMsYUFHREEsS0FIQztBQUFBLE1BR01DLElBSE4sYUFHTUEsSUFITjs7QUFBQSxrQkFJd0JDLHNEQUFRLENBQUMsS0FBRCxDQUpoQztBQUFBLE1BSVhDLGFBSlc7QUFBQSxNQUlJQyxn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QUQsQ0FBYyxJQUFkO0FBQ0ksVUFBRSxFQUFFQSxJQUFJLENBQUNDLElBQUwsQ0FBVTNGO0FBRGxCLFNBR0ksTUFBQyxzREFBRCxRQUNJLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksaUJBQ0swRixJQUFJLENBQUNDLElBQUwsQ0FBVTNGLEVBRGYsQ0FESixDQURKLEVBTUksTUFBQyxzREFBRCxDQUFPLElBQVAsUUFDSSxNQUFDLHVEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFLG1CQUFNO0FBQ2pDM0UsdUJBQWEsQ0FBQztBQUNWaUoscUJBQVMsRUFBRTtBQUNQdEUsZ0JBQUUsRUFBRTBGLElBQUksQ0FBQ0MsSUFBTCxDQUFVM0Y7QUFEUCxhQUREO0FBSVZ5RSwwQkFBYyxFQUFFLENBQUM7QUFBRUMsbUJBQUssRUFBRTNKO0FBQVQsYUFBRDtBQUpOLFdBQUQsQ0FBYjtBQU1IO0FBUEQsNEJBREosQ0FOSixDQUhKLENBREo7QUF5Qkg7QUE5QkwsSUFESixDQXBCSixDQTVZSixDQWhESixFQW9mSTtBQUFLLFNBQUssRUFBRTtBQUNScUssYUFBTyxFQUFFLE1BREQ7QUFFUlEsbUJBQWEsRUFBRSxLQUZQO0FBR1JmLHFCQUFlLEVBQUUsU0FIVDtBQUlSbkUsV0FBSyxFQUFFLE1BSkM7QUFLUm1GLGVBQVMsRUFBRSxNQUxIO0FBTVJDLGtCQUFZLEVBQUUsTUFOTjtBQU9SWCxhQUFPLEVBQUU7QUFQRDtBQUFaLElBcGZKLENBREosQ0FESjtBQWtnQkg7O0dBMStCUWpLLFU7VUFDbUJDLCtELEVBQ0FBLCtELEVBQ1NHLDREOzs7S0FINUJKLFU7QUE0K0JNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2NyaXB0LXBhZ2UuanMuMWNlYzMxNDkyZmY0NTRjMDVkZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VMaXN0LCBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZCwgUGFnZSwgTGF5b3V0LCBTdGFjaywgRGlzcGxheVRleHQsIEljb24sIEJ1dHRvbkdyb3VwLCBSYWRpb0J1dHRvbiwgU3RpY2t5LCBCYW5uZXIsIENvbG9yUGlja2VyLCBUb2FzdCwgRnJhbWUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lLCBDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBDUkVBVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XHJcbiAgICAgICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgICAgICBzY3JpcHRUYWcge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvcCB7XHJcbiAgICAgICAgICAgIG15c2hvcGlmeURvbWFpblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBERUxFVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgICAgICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICAgICAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgdXJsU2NyaXB0VGFncyA9IGBodHRwczovLzczZGI0MzY0MWU0MC5uZ3Jvay5pby90ZXN0LXNjcmlwdC5qc2A7XHJcblxyXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xyXG4gICAgY29uc3QgW2NyZWF0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1NDUklQVFRBRyk7XHJcbiAgICBjb25zdCBbZGVsZXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUVEFHKTtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFVRVJZX1NDUklQVFRBR1MpO1xyXG4gICAgY29uc3QgW3dpZGdldEVuYWJsZWQsIHNldFdpZGdldEVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcHJlc3NlZE9iamVjdCwgc2V0UHJlc3NlZE9iamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnV0dG9uMTogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uMjogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uMzogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3ByZXNzZWRPYmplY3QyLCBzZXRQcmVzc2VkT2JqZWN0Ml0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnV0dG9uNTogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNjogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNzogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uODogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW21vYmlsZVZhbCwgc2V0TW9iaWxlVmFsXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Rlc2t0b3BWYWwsIHNldERlc2t0b3BWYWxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcG9zaXRpb25EZXNrdG9wLCBzZXRQb3NpdGlvbkRlc2t0b3BdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbk1vYmlsZSwgc2V0UG9zaXRpb25Nb2JpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGh1ZTogMjI3LFxyXG4gICAgICAgIGJyaWdodG5lc3M6IDAuNjUsXHJcbiAgICAgICAgc2F0dXJhdGlvbjogMC41OCxcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gc2V0Q29sb3JQbHVzKGNvbCkge1xyXG4gICAgICAgIHNldENvbG9yKGNvbCk7XHJcbiAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IFt3aWRnZXRPYmosIHNldFdpZGdldF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGVza3RvcFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9iaWxlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3RpZmljYXRpb25UZXh0OiAnW0pvaW5dKGh0dHBzOi8vZGlzY29yZC5nZy8zRkt2VndIKSBvdXIgRGlzY29yZCBTZXJ2ZXIhJyxcclxuICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMC5wbmcnLFxyXG4gICAgICAgIGNvbG9yOiAnIzcyODlEQScsXHJcbiAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgd2lkZ2V0RW5hYmxlZDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFt2YWxJRCwgc2V0VmFsSURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NoYW5uZWxJRCwgc2V0Q2hhbm5lbElEXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW25vdGlmaWNhdGlvblZhbHVlLCBzZXROb3RpZmljYXRpb25WYWx1ZV0gPSB1c2VTdGF0ZSgnW0pvaW5dKGh0dHBzOi8vZGlzY29yZC5nZy8zRkt2VndIKSBvdXIgRGlzY29yZCBTZXJ2ZXIhJyk7XHJcbiAgICBjb25zdCBbdGltZW91dFZhbHVlLCBzZXRUaW1lb3V0VmFsdWVdID0gdXNlU3RhdGUoJzIwMDAnKTtcclxuICAgIGNvbnN0IFthdmF0YXJWYWx1ZSwgc2V0QXZhdGFyVmFsdWVdID0gdXNlU3RhdGUoJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMC5wbmcnKTtcclxuXHJcbiAgICBjb25zdCBbZGVza3RvcFByZXZpZXcsIHNldERlc2t0b3BQcmV2aWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpcnN0UmVuZGVyLCBzZXRGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICAvL3RvYXN0XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0TWFya3VwID0gYWN0aXZlID8gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAnOTk5JyB9fT5cclxuICAgICAgICAgICAgPFRvYXN0IGNvbnRlbnQ9XCJTZXR0aW5ncyBTYXZlZFwiIG9uRGlzbWlzcz17KCkgPT4geyBzZXRBY3RpdmUoIWFjdGl2ZSkgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgOiBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ1dHRvblByZXNzZWQoaSkge1xyXG4gICAgICAgIGlmIChwcmVzc2VkT2JqZWN0W2ldID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidXR0b25QcmVzc2VkMihpKSB7XHJcbiAgICAgICAgaWYgKHByZXNzZWRPYmplY3QyW2ldID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpKSA9PiB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uRGVza3RvcDtcclxuICAgICAgICB2YXIgcG9zMiA9IHBvc2l0aW9uTW9iaWxlO1xyXG5cclxuICAgICAgICBpZiAoYnV0dG9uUHJlc3NlZChpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjEnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiB0cnVlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHBvcyA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMicpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiB0cnVlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMycpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogdHJ1ZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b240Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHBvcyA9IHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uUHJlc3NlZDIoaSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b241Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IHRydWUsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b242Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiB0cnVlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uNycpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IHRydWUsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uOCcpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvcyxcclxuICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvczIsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmV0dXJuSWZyYW1lKGRlc2t0b3ApIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldE9iailcclxuICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblxyXG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBcIndpZGdldGJvdHNjcmlwdFwiXHJcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9Ad2lkZ2V0Ym90L2NyYXRlQDNcIjtcclxuICAgICAgICAgICAgc2NyaXB0LnRleHQgPSBgXHJcbiAgICAgICAgICAgIHZhciBjcmF0ZSA9IG5ldyBDcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXI6ICcke3ZhbElEfScsIFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogJyR7Y2hhbm5lbElEfScsIFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFtcIiR7KGRlc2t0b3ApID8gd2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi55QXhpcyA6IHdpZGdldE9iai5tb2JpbGVQb3NpdGlvbi55QXhpc31cIiwgXCIkeyhkZXNrdG9wKSA/IHdpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueEF4aXMgOiB3aWRnZXRPYmoubW9iaWxlUG9zaXRpb24ueEF4aXN9XCJdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzaGFyZDogJ2h0dHBzOi8vZS53aWRnZXRib3QuaW8nLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcke3dpZGdldE9iai5jb2xvcn0nLFxyXG4gICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vY3JhdGUub3B0aW9ucy5jb2xvciA9ICcjJytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmF0ZS5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRleHR9JyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRpbWVvdXR9LFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uQXZhdGFyfScgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgICAgIGlmcmFtZS5pZCA9IFwid2lkZ2V0Ym90aWZyYW1lXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gYCR7JCh3aW5kb3cpLmhlaWdodCgpIC0gMTgwfXB4YDtcclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aWV3ZGl2XCIpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGdvIHRvIERpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSUQgYW5kIGNvbXBsZXRlIHRoZSBzZXR1cCBmaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmV0dXJuRmlyc3RJZnJhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXJlIHB1bGFcIilcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldE9iailcclxuICAgICAgICBpZiAoZmlyc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgaWYgKHZhbElEICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuaWQgPSBcIndpZGdldGJvdHNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B3aWRnZXRib3QvY3JhdGVAM1wiO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnRleHQgPSBgXHJcbiAgICAgICAgICAgICAgICB2YXIgY3JhdGUgPSBuZXcgQ3JhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlcjogJyR7dmFsSUR9JywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogJyR7Y2hhbm5lbElEfScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBbXCIke3dpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueUF4aXN9XCIsIFwiJHt3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnhBeGlzfVwiXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJkOiAnaHR0cHM6Ly9lLndpZGdldGJvdC5pbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcke3dpZGdldE9iai5jb2xvcn0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVyOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vY3JhdGUub3B0aW9ucy5jb2xvciA9ICcjJytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3JhdGUubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGV4dH0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRpbWVvdXR9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvbkF2YXRhcn0nICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaWQgPSBcIndpZGdldGJvdGlmcmFtZVwiO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gYCR7JCh3aW5kb3cpLmhlaWdodCgpIC0gMTgwfXB4YDtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlld2RpdlwiKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBnbyB0byBEaXNjb3JkaWZ5IFNlcnZlci9DaGFubmVsIElEIGFuZCBjb21wbGV0ZSB0aGUgc2V0dXAgZmlyc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwoYXBwSW5mbywgc1VSTCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAvYXBpL3dpZGdldC8ke3NVUkx9YDtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGFwcEluZm8pLnRoZW4oKHJlc3VsdCkgPT4geyB9KS5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhleFRvSHNsKGhleCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuXHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcblxyXG4gICAgICAgIHIgLz0gMjU1LCBnIC89IDI1NSwgYiAvPSAyNTU7XHJcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcclxuXHJcbiAgICAgICAgaWYgKG1heCA9PSBtaW4pIHtcclxuICAgICAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGggLz0gNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHMgPSBzICogMTAwO1xyXG4gICAgICAgIHMgPSBNYXRoLnJvdW5kKHMpO1xyXG4gICAgICAgIGwgPSBsICogMTAwO1xyXG4gICAgICAgIGwgPSBNYXRoLnJvdW5kKGwpO1xyXG4gICAgICAgIGggPSBNYXRoLnJvdW5kKDM2MCAqIGgpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBoLCBzLCBsIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaHNsVG9IZXgoaCwgcywgbCkge1xyXG4gICAgICAgIGggLz0gMzYwO1xyXG4gICAgICAgIC8vcyAvPSAxMDA7XHJcbiAgICAgICAgLy9sIC89IDEwMDtcclxuICAgICAgICBsZXQgciwgZywgYjtcclxuICAgICAgICBpZiAocyA9PT0gMCkge1xyXG4gICAgICAgICAgICByID0gZyA9IGIgPSBsOyAvLyBhY2hyb21hdGljXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDApIHQgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0ID4gMSkgdCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcclxuICAgICAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcclxuICAgICAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XHJcbiAgICAgICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvSGV4ID0geCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhleCA9IE1hdGgucm91bmQoeCAqIDI1NSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBgIyR7dG9IZXgocil9JHt0b0hleChnKX0ke3RvSGV4KGIpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcblxyXG4gICAgY29uc3Qgc2hvcFVSTCA9IFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5zdWJzdHIoMCwgU3RyaW5nKGRhdGEuc2hvcC5teXNob3BpZnlEb21haW4pLmxlbmd0aCAtIDE0KTtcclxuXHJcbiAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvZGlzY29yZElELyR7c2hvcFVSTH1gKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbElEKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hhbm5lbElEKHJlc3VsdC5kYXRhLmRhdGEuY2hhbm5lbElEKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICBmZXRjaChgL2FwaS93aWRnZXQvJHtzaG9wVVJMfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldClcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiB0cnVlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiB0cnVlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiB0cnVlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiB0cnVlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b240OiBmYWxzZSwgYnV0dG9uNjogdHJ1ZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IHRydWUsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjY29sb3IgPSBoZXhUb0hzbCh3aWRnZXQuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbG9yUGx1cyh7IGh1ZTogY2NvbG9yLmgsIHNhdHVyYXRpb246IChjY29sb3IucyAvIDEwMCksIGJyaWdodG5lc3M6IChjY29sb3IubCAvIDEwMCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uVmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvblRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dFZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25UaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEF2YXRhclZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25BdmF0YXIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh3aWRnZXQuZGVza3RvcClcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwod2lkZ2V0Lm1vYmlsZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXRFbmFibGVkKHdpZGdldC53aWRnZXRFbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IHdpZGdldC5ub3RpZmljYXRpb25UZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHdpZGdldC5ub3RpZmljYXRpb25UaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogd2lkZ2V0Lm5vdGlmaWNhdGlvbkF2YXRhcixcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHdpZGdldC5tb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogd2lkZ2V0LmRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdpZGdldC5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXQud2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICAgICAgc2V0Rmlyc3QoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnNjcmlwdFRhZ3MuZWRnZXNbMF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdWJsdSBjYWNhdFwiKVxyXG4gICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT1cIldpZGdldCBTZXR0aW5nc1wiID5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvYXN0TWFya3VwfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiIHNwYWNpbmc9XCJleHRyYUxvb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aWRnZXRFbmFibGVkKSA/IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZVRpY2tNYWpvck1vbm90b25lfSAvPjxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EaXNjb3JkIFdpZGdldCBpcyA8YiBzdHlsZT17eyBjb2xvcjogJyM1MGI4M2MnIH19PmVuYWJsZWQ8L2I+PC9EaXNwbGF5VGV4dD48L1N0YWNrPiA6IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZX0gLz48RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+RGlzY29yZCBXaWRnZXQgaXMgPGIgc3R5bGU9e3sgY29sb3I6ICcjZGUzNjE4JyB9fT5kaXNhYmxlZDwvYj48L0Rpc3BsYXlUZXh0PjwvU3RhY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt3aWRnZXRFbmFibGVkfSBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldEVuYWJsZWQoIXdpZGdldEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6ICF3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiAhd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbElEICE9ICcnKSA/IDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkRldmljZSBTZXR0aW5nczwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaG93IG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVza3RvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgIW1vYmlsZVZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVWYWwgJiYgIWRlc2t0b3BWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgbW9iaWxlVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFUaWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EZXNrdG9wIFBsYWNlbWVudDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjEnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMScpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjInKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMycpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24zJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uNCcpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b240JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYVRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPk1vYmlsZSBQbGFjZW1lbnQ8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNScpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b241JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjYnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjcnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNycpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b244Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjgnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkFwcGVhcmFuY2UgU2V0dGluZ3M8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIHZlcnRpY2FsID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgb25DaGFuZ2U9e3NldENvbG9yUGx1c30gY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvclBsdXMoeyBodWU6IDIyNywgc2F0dXJhdGlvbjogMC41OCwgYnJpZ2h0bmVzczogMC42NSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IERpc2NvcmQgUHVycGxlIENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5XaWRnZXQgTG9nbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzk5YWFiNScsIGJvcmRlclJhZGl1czogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJ0aWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29QcmVzc2VkT2JqZWN0KHsgbG9nbzE6IHRydWUsIGxvZ28yOiBmYWxzZSwgbG9nbzM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvVXJsKCdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy8xYzhhNTRmMjVkMTAxYmRjNjA3Y2VjNzIyODI0N2E5YS5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3aWR0aD17KGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28xKSA/IFwiODBcIiA6IFwiNjBcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvUHJlc3NlZE9iamVjdCh7IGxvZ28xOiBmYWxzZSwgbG9nbzI6IHRydWUsIGxvZ28zOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1VybCgnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvNDE0ODRkOTJjODc2Zjc2YjIwYzdmNzQ2MjIxZTgxNTEuc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2lkdGg9eyhsb2dvUHJlc3NlZE9iamVjdC5sb2dvMikgPyBcIjgwXCIgOiBcIjYwXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1ByZXNzZWRPYmplY3QoeyBsb2dvMTogZmFsc2UsIGxvZ28yOiBmYWxzZSwgbG9nbzM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29VcmwoJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzL2Y4Mzg5Y2ExYTc0MWExMTUzMTNiZWRlOWFjMDJlMmMwLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdpZHRoPXsobG9nb1ByZXNzZWRPYmplY3QubG9nbzMpID8gXCI4MFwiIDogXCI2MFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaWRnZXQgVGhlbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc2VnbWVudGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXt0aGVtZURhcmt9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBsb2dvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVOYW1lKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZURhcmsodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EYXJrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9eyF0aGVtZURhcmt9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBsb2dvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lTmFtZShcImxpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lRGFyayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MaWdodDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+RGlzY291bnQgZm9yIEpvaW5pbmcgU2VydmVyPC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlzY291bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2ljQ29kZURpc2NvdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllc09uY2VQZXJDdXN0b21lcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBcIkRJU0NPUkQxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyU2VsZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJHZXRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEaXNjb3JkIERpc2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNhZ2VMaW1pdDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHNBdDogXCIyMDE5LTA3LTAzVDIwOjQ3OjU1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIERpc2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPldpZGdldCBOb3RpZmljYXRpb25zPC9iPjwvRGlzcGxheVRleHQ+fSBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIFRleHRcIiB2YWx1ZT17bm90aWZpY2F0aW9uVmFsdWV9IG9uQ2hhbmdlPXsodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uVmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGNyZWF0ZSBoeXBlcmxpbmtzIHVzaW5nIG1hcmtkb3duIGxpa2Ugc286IFt0ZXh0XShsaW5rKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBUaW1lb3V0IChtaWxpc2Vjb25kcylcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RpbWVvdXRWYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0VmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gQXZhdGFyIFVSTFwiIHZhbHVlPXthdmF0YXJWYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdmF0YXJWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRBdmF0YXJWYWx1ZSgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycpIH19PlNldCBEZWZhdWx0IERpc2NvcmQgTG9nbyBBdmF0YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+SGVscCBhbmQgQ29udGFjdDwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Gb3IgYW55IGtpbmRzIG9mIGlzc3VlcyBvciBzdWdnZXN0aW9ucywgeW91IGNhbiBlbWFpbCB1cyBhdCA8Yj5ibGF6ZXNvZnR3b3JrczdAZ21haWwuY29tPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPklmIHlvdXIgd2lkZ2V0IGRvZXNuJ3QgbG9hZCwgcGxlYXNlIGNoZWNrIGlmIHlvdSd2ZSBlbnRlcmVkIHRoZSBjb3JyZWN0IElEcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHRoZSBpc3N1ZSBwZXJzaXN0cyBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB3aXRoIGEgc2NyZWVuc2hvdCBvZiBlYWNoIG9mIHRoZSBhcHAncyBwYWdlcyB3aXRoIHlvdXIgc2V0dGluZ3MgYW5kIHlvdXIgc3RvcmUncyBuYW1lIGFuZCB3ZSdsbCBnbGFkbHkgaGVscCB5b3Ugc29sdmUgdGhlIHByb2JsZW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgYXJlIG5vdCBhZmZpbGlhdGVkIHdpdGggZWl0aGVyIDxpPldpZGdldGJvdDwvaT4gb3IgPGk+RGlzY29yZDwvaT4uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCA8aT5XaWRnZXRib3Q8L2k+IGFuZCBzdXBwb3J0IHRoZW0gZm9yIGV4dHJhIGZlYXR1cmVzIDxiPjxhIGhyZWY9XCJodHRwczovL3dpZGdldGJvdC5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPjwvYj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3kgb2Zmc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTlhYWI1JywgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+UHJlc3MgdGhlIGJ1dHRvbnMgYmVsbG93IGFmdGVyIGV2ZXJ5IGNoYW5nZSB0byBzZWUgdGhlIHByZXZpZXc8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+UHJlc3MgdGhlIGJ1dHRvbiBiZWxsb3cgYWZ0ZXIgZXZlcnkgY2hhbmdlIHRvIHNlZSB0aGUgcHJldmlldzwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT1cInNsaW1cIiBwcmVzc2VkPXtkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyh0cnVlKTsgaWYgKHZhbElEICE9ICcnKSByZXR1cm5JZnJhbWUodHJ1ZSk7IH19PkdlbmVyYXRlIERlc2t0b3A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic2xpbVwiIHByZXNzZWQ9eyFkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyhmYWxzZSk7IGlmICh2YWxJRCAhPSAnJykgcmV0dXJuSWZyYW1lKGZhbHNlKSB9fT5HZW5lcmF0ZSBNb2JpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRmlyc3RJZnJhbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPXsoIWRlc2t0b3BQcmV2aWV3KSA/IFwiY2VudGVyXCIgOiBcImZpbGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3ZGl2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIiBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2ZyBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIzMFwiIGZpbGw9e2hzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyl9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9jaXJjbGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3N2Zz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICM3Mjg5REEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpIH19IGNsYXNzTmFtZT1cImRvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzbG9nby5wbmdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiB3aWR0aD1cIjgwXCIgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28xKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2Z1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2dvUHJlc3NlZE9iamVjdC5sb2dvMikgPyBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2Z1wiIDogXCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz4gOiA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L1N0YWNrPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6ICc5OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjRjRGNkY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNERkUzRTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt2YWxJRCA9PSAnJ30gc2l6ZT1cInNsaW1cIiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHdpZGdldE9iaiwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgU2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnU2NyaXB0JywgcGx1cmFsOiAnU2NyaXB0cycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNGY2ZjgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNzdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHggMjRweCAyMHB4IDBweCdcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvUGFnZSA+XHJcbiAgICAgICAgPC9GcmFtZSA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9