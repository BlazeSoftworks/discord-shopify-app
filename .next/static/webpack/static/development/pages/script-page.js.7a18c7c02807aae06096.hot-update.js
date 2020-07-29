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

      if (valID != '') {
        returnIframe(true);
        setFirstRender(false);
      }
    }
  }, "Generate Desktop"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    primary: true,
    size: "slim",
    pressed: !desktopPreview,
    onClick: function onClick() {
      setDesktopPreview(false);

      if (valID != '') {
        returnIframe(false);
        setFirstRender(false);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInVzZU11dGF0aW9uIiwiY3JlYXRlU2NyaXB0cyIsImRlbGV0ZVNjcmlwdHMiLCJ1c2VRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VTdGF0ZSIsIndpZGdldEVuYWJsZWQiLCJzZXRXaWRnZXRFbmFibGVkIiwiYnV0dG9uMSIsImJ1dHRvbjIiLCJidXR0b24zIiwiYnV0dG9uNCIsInByZXNzZWRPYmplY3QiLCJzZXRQcmVzc2VkT2JqZWN0IiwiYnV0dG9uNSIsImJ1dHRvbjYiLCJidXR0b243IiwiYnV0dG9uOCIsInByZXNzZWRPYmplY3QyIiwic2V0UHJlc3NlZE9iamVjdDIiLCJtb2JpbGVWYWwiLCJzZXRNb2JpbGVWYWwiLCJkZXNrdG9wVmFsIiwic2V0RGVza3RvcFZhbCIsInBvc2l0aW9uRGVza3RvcCIsInNldFBvc2l0aW9uRGVza3RvcCIsInBvc2l0aW9uTW9iaWxlIiwic2V0UG9zaXRpb25Nb2JpbGUiLCJodWUiLCJicmlnaHRuZXNzIiwic2F0dXJhdGlvbiIsImNvbG9yIiwic2V0Q29sb3IiLCJzZXRDb2xvclBsdXMiLCJjb2wiLCJzZXRXaWRnZXQiLCJkZXNrdG9wUG9zaXRpb24iLCJtb2JpbGVQb3NpdGlvbiIsIm5vdGlmaWNhdGlvblRleHQiLCJub3RpZmljYXRpb25WYWx1ZSIsIm5vdGlmaWNhdGlvblRpbWVvdXQiLCJ0aW1lb3V0VmFsdWUiLCJub3RpZmljYXRpb25BdmF0YXIiLCJhdmF0YXJWYWx1ZSIsIm1vYmlsZSIsImRlc2t0b3AiLCJoc2xUb0hleCIsIndpZGdldE9iaiIsInZhbElEIiwic2V0VmFsSUQiLCJjaGFubmVsSUQiLCJzZXRDaGFubmVsSUQiLCJmaXJzdCIsInNldEZpcnN0Iiwic2V0Tm90aWZpY2F0aW9uVmFsdWUiLCJzZXRUaW1lb3V0VmFsdWUiLCJzZXRBdmF0YXJWYWx1ZSIsImRlc2t0b3BQcmV2aWV3Iiwic2V0RGVza3RvcFByZXZpZXciLCJmaXJzdFJlbmRlciIsInNldEZpcnN0UmVuZGVyIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidG9hc3RNYXJrdXAiLCJ6SW5kZXgiLCJidXR0b25QcmVzc2VkIiwiaSIsImJ1dHRvblByZXNzZWQyIiwiaGFuZGxlQ2xpY2siLCJwb3MiLCJwb3MyIiwicmV0dXJuSWZyYW1lIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0eXBlIiwic3JjIiwidGV4dCIsInlBeGlzIiwieEF4aXMiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInJlbW92ZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiJCIsIndpbmRvdyIsInN0eWxlIiwiYm9yZGVyIiwic2V0VGltZW91dCIsImNvbnRlbnREb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJyZXR1cm5GaXJzdElmcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYWtlQXBpQ2FsbCIsImFwcEluZm8iLCJzVVJMIiwidXJsIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3VsdCIsInJlc3BvbnNlIiwiaGV4VG9Ic2wiLCJoZXgiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJtYXgiLCJNYXRoIiwibWluIiwiaCIsInMiLCJsIiwiZCIsInJvdW5kIiwiaHVlMnJnYiIsInAiLCJxIiwidCIsInRvSGV4IiwieCIsInRvU3RyaW5nIiwibGVuZ3RoIiwibWVzc2FnZSIsInNob3BVUkwiLCJTdHJpbmciLCJzaG9wIiwibXlzaG9waWZ5RG9tYWluIiwic3Vic3RyIiwiZ2V0Iiwic2VydmVySUQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ3aWRnZXQiLCJjY29sb3IiLCJzY3JpcHRUYWdzIiwiZWRnZXMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRpc3BsYXlTY29wZSIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSIsIkNpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZSIsImJhY2tncm91bmRDb2xvciIsInZhbCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJvcmRlclRvcCIsInNpbmd1bGFyIiwicGx1cmFsIiwiaXRlbSIsIm5vZGUiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQWFBLElBQU1DLGdCQUFnQixHQUFHRCxrREFBSCxvQkFBdEI7QUFnQkEsSUFBTUUsZ0JBQWdCLEdBQUdGLGtEQUFILG9CQUF0QjtBQVlBLElBQU1HLGFBQWEsaURBQW5COztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxxQkFDTUMsdUVBQVcsQ0FBQ04sZ0JBQUQsQ0FEakI7QUFBQTtBQUFBLE1BQ1hPLGFBRFc7O0FBQUEsc0JBRU1ELHVFQUFXLENBQUNILGdCQUFELENBRmpCO0FBQUE7QUFBQSxNQUVYSyxhQUZXOztBQUFBLGtCQUdlQyxvRUFBUSxDQUFDUCxnQkFBRCxDQUh2QjtBQUFBLE1BR1ZRLE9BSFUsYUFHVkEsT0FIVTtBQUFBLE1BR0RDLEtBSEMsYUFHREEsS0FIQztBQUFBLE1BR01DLElBSE4sYUFHTUEsSUFITjs7QUFBQSxrQkFJd0JDLHNEQUFRLENBQUMsS0FBRCxDQUpoQztBQUFBLE1BSVhDLGFBSlc7QUFBQSxNQUlJQyxn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QUksQ0FBQzJJLFVBQUwsQ0FBZ0JDLEtBSDNCO0FBSUksY0FBVSxFQUFFLG9CQUFBcUIsSUFBSSxFQUFJO0FBQ2hCLGFBQ0ksTUFBQyw2REFBRCxDQUFjLElBQWQ7QUFDSSxVQUFFLEVBQUVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVM0Y7QUFEbEIsU0FHSSxNQUFDLHNEQUFELFFBQ0ksTUFBQyxzREFBRCxDQUFPLElBQVAsUUFDSSxpQkFDSzBGLElBQUksQ0FBQ0MsSUFBTCxDQUFVM0YsRUFEZixDQURKLENBREosRUFNSSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNJLE1BQUMsdURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUUsbUJBQU07QUFDakMzRSx1QkFBYSxDQUFDO0FBQ1ZpSixxQkFBUyxFQUFFO0FBQ1B0RSxnQkFBRSxFQUFFMEYsSUFBSSxDQUFDQyxJQUFMLENBQVUzRjtBQURQLGFBREQ7QUFJVnlFLDBCQUFjLEVBQUUsQ0FBQztBQUFFQyxtQkFBSyxFQUFFM0o7QUFBVCxhQUFEO0FBSk4sV0FBRCxDQUFiO0FBTUg7QUFQRCw0QkFESixDQU5KLENBSEosQ0FESjtBQXlCSDtBQTlCTCxJQURKLENBcEJKLENBNVlKLENBaERKLEVBb2ZJO0FBQUssU0FBSyxFQUFFO0FBQ1JxSyxhQUFPLEVBQUUsTUFERDtBQUVSUSxtQkFBYSxFQUFFLEtBRlA7QUFHUmYscUJBQWUsRUFBRSxTQUhUO0FBSVJuRSxXQUFLLEVBQUUsTUFKQztBQUtSbUYsZUFBUyxFQUFFLE1BTEg7QUFNUkMsa0JBQVksRUFBRSxNQU5OO0FBT1JYLGFBQU8sRUFBRTtBQVBEO0FBQVosSUFwZkosQ0FESixDQURKO0FBa2dCSDs7R0ExK0JRakssVTtVQUNtQkMsK0QsRUFDQUEsK0QsRUFDU0csNEQ7OztLQUg1QkosVTtBQTQrQk1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzY3JpcHQtcGFnZS5qcy43YTE4YzdjMDI4MDdhYWUwNjA5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZUxpc3QsIFRleHRGaWVsZCwgQnV0dG9uLCBDYXJkLCBQYWdlLCBMYXlvdXQsIFN0YWNrLCBEaXNwbGF5VGV4dCwgSWNvbiwgQnV0dG9uR3JvdXAsIFJhZGlvQnV0dG9uLCBTdGlja3ksIEJhbm5lciwgQ29sb3JQaWNrZXIsIFRvYXN0LCBGcmFtZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaXJjbGVBbGVydE1ham9yTW9ub3RvbmUsIENpcmNsZVRpY2tNYWpvck1vbm90b25lIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNvbnN0IENSRUFURV9TQ1JJUFRUQUcgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgICAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBRVUVSWV9TQ1JJUFRUQUdTID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaG9wIHtcclxuICAgICAgICAgICAgbXlzaG9waWZ5RG9tYWluXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IERFTEVURV9TQ1JJUFRUQUcgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICAgICAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICBkZWxldGVkU2NyaXB0VGFnSWRcclxuICAgICAgICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCB1cmxTY3JpcHRUYWdzID0gYGh0dHBzOi8vNzNkYjQzNjQxZTQwLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzYDtcclxuXHJcbmZ1bmN0aW9uIFNjcmlwdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbY3JlYXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihDUkVBVEVfU0NSSVBUVEFHKTtcclxuICAgIGNvbnN0IFtkZWxldGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKERFTEVURV9TQ1JJUFRUQUcpO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcbiAgICBjb25zdCBbd2lkZ2V0RW5hYmxlZCwgc2V0V2lkZ2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwcmVzc2VkT2JqZWN0LCBzZXRQcmVzc2VkT2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b24xOiBmYWxzZSxcclxuICAgICAgICBidXR0b24yOiBmYWxzZSxcclxuICAgICAgICBidXR0b24zOiBmYWxzZSxcclxuICAgICAgICBidXR0b240OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcHJlc3NlZE9iamVjdDIsIHNldFByZXNzZWRPYmplY3QyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b241OiBmYWxzZSxcclxuICAgICAgICBidXR0b242OiBmYWxzZSxcclxuICAgICAgICBidXR0b243OiBmYWxzZSxcclxuICAgICAgICBidXR0b244OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbW9iaWxlVmFsLCBzZXRNb2JpbGVWYWxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZGVza3RvcFZhbCwgc2V0RGVza3RvcFZhbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbkRlc2t0b3AsIHNldFBvc2l0aW9uRGVza3RvcF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uTW9iaWxlLCBzZXRQb3NpdGlvbk1vYmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaHVlOiAyMjcsXHJcbiAgICAgICAgYnJpZ2h0bmVzczogMC42NSxcclxuICAgICAgICBzYXR1cmF0aW9uOiAwLjU4LFxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvclBsdXMoY29sKSB7XHJcbiAgICAgICAgc2V0Q29sb3IoY29sKTtcclxuICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3dpZGdldE9iaiwgc2V0V2lkZ2V0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNrdG9wUG9zaXRpb246IHtcclxuICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2JpbGVQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRleHQ6ICdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiAnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycsXHJcbiAgICAgICAgY29sb3I6ICcjNzI4OURBJyxcclxuICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICB3aWRnZXRFbmFibGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbElELCBzZXRWYWxJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhbm5lbElELCBzZXRDaGFubmVsSURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbbm90aWZpY2F0aW9uVmFsdWUsIHNldE5vdGlmaWNhdGlvblZhbHVlXSA9IHVzZVN0YXRlKCdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnKTtcclxuICAgIGNvbnN0IFt0aW1lb3V0VmFsdWUsIHNldFRpbWVvdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnMjAwMCcpO1xyXG4gICAgY29uc3QgW2F2YXRhclZhbHVlLCBzZXRBdmF0YXJWYWx1ZV0gPSB1c2VTdGF0ZSgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycpO1xyXG5cclxuICAgIGNvbnN0IFtkZXNrdG9wUHJldmlldywgc2V0RGVza3RvcFByZXZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIC8vdG9hc3RcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3RNYXJrdXAgPSBhY3RpdmUgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6ICc5OTknIH19PlxyXG4gICAgICAgICAgICA8VG9hc3QgY29udGVudD1cIlNldHRpbmdzIFNhdmVkXCIgb25EaXNtaXNzPXsoKSA9PiB7IHNldEFjdGl2ZSghYWN0aXZlKSB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gYnV0dG9uUHJlc3NlZChpKSB7XHJcbiAgICAgICAgaWYgKHByZXNzZWRPYmplY3RbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1dHRvblByZXNzZWQyKGkpIHtcclxuICAgICAgICBpZiAocHJlc3NlZE9iamVjdDJbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGkpID0+IHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb25EZXNrdG9wO1xyXG4gICAgICAgIHZhciBwb3MyID0gcG9zaXRpb25Nb2JpbGU7XHJcblxyXG4gICAgICAgIGlmIChidXR0b25QcmVzc2VkKGkpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMScpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IHRydWUsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24yJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IHRydWUsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24zJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiB0cnVlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjQnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QocG9zID0geyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChidXR0b25QcmVzc2VkMihpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjUnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogdHJ1ZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjYnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IHRydWUsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b243Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogdHJ1ZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b244Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zLFxyXG4gICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zMixcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5JZnJhbWUoZGVza3RvcCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B3aWRnZXRib3QvY3JhdGVAM1wiO1xyXG4gICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgdmFyIGNyYXRlID0gbmV3IENyYXRlKHtcclxuICAgICAgICAgICAgICAgIHNlcnZlcjogJyR7dmFsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogW1wiJHsoZGVza3RvcCkgPyB3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnlBeGlzIDogd2lkZ2V0T2JqLm1vYmlsZVBvc2l0aW9uLnlBeGlzfVwiLCBcIiR7KGRlc2t0b3ApID8gd2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi54QXhpcyA6IHdpZGdldE9iai5tb2JpbGVQb3NpdGlvbi54QXhpc31cIl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNoYXJkOiAnaHR0cHM6Ly9lLndpZGdldGJvdC5pbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICBkZWZlcjogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyYXRlLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGV4dH0nLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25BdmF0YXJ9JyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgaWZyYW1lLmlkID0gXCJ3aWRnZXRib3RpZnJhbWVcIjtcclxuICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXdkaXZcIikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgZ28gdG8gRGlzY29yZGlmeSBTZXJ2ZXIvQ2hhbm5lbCBJRCBhbmQgY29tcGxldGUgdGhlIHNldHVwIGZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5GaXJzdElmcmFtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmUgcHVsYVwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmIChmaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHdpZGdldGJvdC9jcmF0ZUAzXCI7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIHZhciBjcmF0ZSA9IG5ldyBDcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyOiAnJHt2YWxJRH0nLCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFtcIiR7d2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi55QXhpc31cIiwgXCIke3dpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueEF4aXN9XCJdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmQ6ICdodHRwczovL2Uud2lkZ2V0Ym90LmlvJywgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjcmF0ZS5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25UZXh0fScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uQXZhdGFyfScgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5pZCA9IFwid2lkZ2V0Ym90aWZyYW1lXCI7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2h7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aWV3ZGl2XCIpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGdvIHRvIERpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSUQgYW5kIGNvbXBsZXRlIHRoZSBzZXR1cCBmaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaXJzdFJlbmRlcihmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlQXBpQ2FsbChhcHBJbmZvLCBzVVJMKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvd2lkZ2V0LyR7c1VSTH1gO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KHVybCwgYXBwSW5mbykudGhlbigocmVzdWx0KSA9PiB7IH0pLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4VG9Ic2woaGV4KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG5cclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuXHJcbiAgICAgICAgciAvPSAyNTUsIGcgLz0gMjU1LCBiIC89IDI1NTtcclxuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xyXG5cclxuICAgICAgICBpZiAobWF4ID09IG1pbikge1xyXG4gICAgICAgICAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaCAvPSA2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcyA9IHMgKiAxMDA7XHJcbiAgICAgICAgcyA9IE1hdGgucm91bmQocyk7XHJcbiAgICAgICAgbCA9IGwgKiAxMDA7XHJcbiAgICAgICAgbCA9IE1hdGgucm91bmQobCk7XHJcbiAgICAgICAgaCA9IE1hdGgucm91bmQoMzYwICogaCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGgsIHMsIGwgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoc2xUb0hleChoLCBzLCBsKSB7XHJcbiAgICAgICAgaCAvPSAzNjA7XHJcbiAgICAgICAgLy9zIC89IDEwMDtcclxuICAgICAgICAvL2wgLz0gMTAwO1xyXG4gICAgICAgIGxldCByLCBnLCBiO1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBodWUycmdiID0gKHAsIHEsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMCkgdCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPiAxKSB0IC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xyXG4gICAgICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xyXG4gICAgICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcclxuICAgICAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9IZXggPSB4ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGV4ID0gTWF0aC5yb3VuZCh4ICogMjU1KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGAjJHt0b0hleChyKX0ke3RvSGV4KGcpfSR7dG9IZXgoYil9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuXHJcbiAgICBjb25zdCBzaG9wVVJMID0gU3RyaW5nKGRhdGEuc2hvcC5teXNob3BpZnlEb21haW4pLnN1YnN0cigwLCBTdHJpbmcoZGF0YS5zaG9wLm15c2hvcGlmeURvbWFpbikubGVuZ3RoIC0gMTQpO1xyXG5cclxuICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9kaXNjb3JkSUQvJHtzaG9wVVJMfWApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsSUQocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGFubmVsSUQocmVzdWx0LmRhdGEuZGF0YS5jaGFubmVsSUQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgIGZldGNoKGAvYXBpL3dpZGdldC8ke3Nob3BVUkx9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IHRydWUsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IHRydWUsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IHRydWUsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IHRydWUsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjQ6IGZhbHNlLCBidXR0b242OiB0cnVlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogdHJ1ZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNjb2xvciA9IGhleFRvSHNsKHdpZGdldC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3JQbHVzKHsgaHVlOiBjY29sb3IuaCwgc2F0dXJhdGlvbjogKGNjb2xvci5zIC8gMTAwKSwgYnJpZ2h0bmVzczogKGNjb2xvci5sIC8gMTAwKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25WYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uVGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0VmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvblRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXZhdGFyVmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvbkF2YXRhcilcclxuICAgICAgICAgICAgICAgICAgICBzZXREZXNrdG9wVmFsKHdpZGdldC5kZXNrdG9wKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh3aWRnZXQubW9iaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFdpZGdldEVuYWJsZWQod2lkZ2V0LndpZGdldEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiB3aWRnZXQubW9iaWxlUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogd2lkZ2V0Lm5vdGlmaWNhdGlvblRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogd2lkZ2V0Lm5vdGlmaWNhdGlvblRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiB3aWRnZXQubm90aWZpY2F0aW9uQXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogd2lkZ2V0Lm1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiB3aWRnZXQuZGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2lkZ2V0LmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldC53aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgICAgICBzZXRGaXJzdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEuc2NyaXB0VGFncy5lZGdlc1swXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImR1Ymx1IGNhY2F0XCIpXHJcbiAgICAgICAgY3JlYXRlU2NyaXB0cyh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybFNjcmlwdFRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhbWU+XHJcbiAgICAgICAgICAgIDxQYWdlIHRpdGxlPVwiV2lkZ2V0IFNldHRpbmdzXCIgPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICB7dG9hc3RNYXJrdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCIgc3BhY2luZz1cImV4dHJhTG9vc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpZGdldEVuYWJsZWQpID8gPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiPjxJY29uIHNvdXJjZT17Q2lyY2xlVGlja01ham9yTW9ub3RvbmV9IC8+PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPkRpc2NvcmQgV2lkZ2V0IGlzIDxiIHN0eWxlPXt7IGNvbG9yOiAnIzUwYjgzYycgfX0+ZW5hYmxlZDwvYj48L0Rpc3BsYXlUZXh0PjwvU3RhY2s+IDogPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiPjxJY29uIHNvdXJjZT17Q2lyY2xlQWxlcnRNYWpvck1vbm90b25lfSAvPjxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EaXNjb3JkIFdpZGdldCBpcyA8YiBzdHlsZT17eyBjb2xvcjogJyNkZTM2MTgnIH19PmRpc2FibGVkPC9iPjwvRGlzcGxheVRleHQ+PC9TdGFjaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbElEICE9ICcnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3dpZGdldEVuYWJsZWR9IG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0RW5hYmxlZCghd2lkZ2V0RW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogIXdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUFwaUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6ICF3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzaG9wVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodmFsSUQgIT0gJycpID8gPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+RGV2aWNlIFNldHRpbmdzPC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNob3cgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNrdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGVza3RvcFZhbCAmJiAhbW9iaWxlVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vYmlsZVZhbCAmJiAhZGVza3RvcFZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGVza3RvcFZhbCAmJiBtb2JpbGVWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYVRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPkRlc2t0b3AgUGxhY2VtZW50PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMScpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24xJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMicpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24yJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b24zJyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjMnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b240Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjQnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cImV4dHJhVGlnaHRcIiBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+TW9iaWxlIFBsYWNlbWVudDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b241Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjUnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNicpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b242JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNycpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b243JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjgnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uOCcpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+QXBwZWFyYW5jZSBTZXR0aW5nczwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgdmVydGljYWwgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlciBvbkNoYW5nZT17c2V0Q29sb3JQbHVzfSBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yUGx1cyh7IGh1ZTogMjI3LCBzYXR1cmF0aW9uOiAwLjU4LCBicmlnaHRuZXNzOiAwLjY1IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgRGlzY29yZCBQdXJwbGUgQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPldpZGdldCBMb2dvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTlhYWI1JywgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cInRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1ByZXNzZWRPYmplY3QoeyBsb2dvMTogdHJ1ZSwgbG9nbzI6IGZhbHNlLCBsb2dvMzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29VcmwoJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdpZHRoPXsobG9nb1ByZXNzZWRPYmplY3QubG9nbzEpID8gXCI4MFwiIDogXCI2MFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29QcmVzc2VkT2JqZWN0KHsgbG9nbzE6IGZhbHNlLCBsb2dvMjogdHJ1ZSwgbG9nbzM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvVXJsKCdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3aWR0aD17KGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28yKSA/IFwiODBcIiA6IFwiNjBcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvUHJlc3NlZE9iamVjdCh7IGxvZ28xOiBmYWxzZSwgbG9nbzI6IGZhbHNlLCBsb2dvMzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1VybCgnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2lkdGg9eyhsb2dvUHJlc3NlZE9iamVjdC5sb2dvMykgPyBcIjgwXCIgOiBcIjYwXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldpZGdldCBUaGVtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e3RoZW1lRGFya30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IGxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZU5hbWUoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lRGFyayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRhcms8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17IXRoZW1lRGFya30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IGxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVOYW1lKFwibGlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVEYXJrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxpZ2h0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5EaXNjb3VudCBmb3IgSm9pbmluZyBTZXJ2ZXI8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaXNjb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNDb2RlRGlzY291bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVzT25jZVBlckN1c3RvbWVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFwiRElTQ09SRDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJTZWxlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckdldHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMC4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRpc2NvcmQgRGlzY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2FnZUxpbWl0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c0F0OiBcIjIwMTktMDctMDNUMjA6NDc6NTVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+V2lkZ2V0IE5vdGlmaWNhdGlvbnM8L2I+PC9EaXNwbGF5VGV4dD59IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gVGV4dFwiIHZhbHVlPXtub3RpZmljYXRpb25WYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25WYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gY3JlYXRlIGh5cGVybGlua3MgdXNpbmcgbWFya2Rvd24gbGlrZSBzbzogW3RleHRdKGxpbmspPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIFRpbWVvdXQgKG1pbGlzZWNvbmRzKVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGltZW91dFZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXRWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBBdmF0YXIgVVJMXCIgdmFsdWU9e2F2YXRhclZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF2YXRhclZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldEF2YXRhclZhbHVlKCdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJykgfX0+U2V0IERlZmF1bHQgRGlzY29yZCBMb2dvIEF2YXRhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5IZWxwIGFuZCBDb250YWN0PC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBhbnkga2luZHMgb2YgaXNzdWVzIG9yIHN1Z2dlc3Rpb25zLCB5b3UgY2FuIGVtYWlsIHVzIGF0IDxiPmJsYXplc29mdHdvcmtzN0BnbWFpbC5jb208L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+SWYgeW91ciB3aWRnZXQgZG9lc24ndCBsb2FkLCBwbGVhc2UgY2hlY2sgaWYgeW91J3ZlIGVudGVyZWQgdGhlIGNvcnJlY3QgSURzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgdGhlIGlzc3VlIHBlcnNpc3RzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHdpdGggYSBzY3JlZW5zaG90IG9mIGVhY2ggb2YgdGhlIGFwcCdzIHBhZ2VzIHdpdGggeW91ciBzZXR0aW5ncyBhbmQgeW91ciBzdG9yZSdzIG5hbWUgYW5kIHdlJ2xsIGdsYWRseSBoZWxwIHlvdSBzb2x2ZSB0aGUgcHJvYmxlbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgbm90IGFmZmlsaWF0ZWQgd2l0aCBlaXRoZXIgPGk+V2lkZ2V0Ym90PC9pPiBvciA8aT5EaXNjb3JkPC9pPi4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IDxpPldpZGdldGJvdDwvaT4gYW5kIHN1cHBvcnQgdGhlbSBmb3IgZXh0cmEgZmVhdHVyZXMgPGI+PGEgaHJlZj1cImh0dHBzOi8vd2lkZ2V0Ym90LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+PC9iPi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreSBvZmZzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5OWFhYjUnLCBib3JkZXJSYWRpdXM6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5QcmVzcyB0aGUgYnV0dG9ucyBiZWxsb3cgYWZ0ZXIgZXZlcnkgY2hhbmdlIHRvIHNlZSB0aGUgcHJldmlldzwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5QcmVzcyB0aGUgYnV0dG9uIGJlbGxvdyBhZnRlciBldmVyeSBjaGFuZ2UgdG8gc2VlIHRoZSBwcmV2aWV3PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNlZ21lbnRlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic2xpbVwiIHByZXNzZWQ9e2Rlc2t0b3BQcmV2aWV3fSBvbkNsaWNrPXsoKSA9PiB7IHNldERlc2t0b3BQcmV2aWV3KHRydWUpOyBpZiAodmFsSUQgIT0gJycpIHsgcmV0dXJuSWZyYW1lKHRydWUpOyBzZXRGaXJzdFJlbmRlcihmYWxzZSk7IH0gfX0+R2VuZXJhdGUgRGVza3RvcDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHNpemU9XCJzbGltXCIgcHJlc3NlZD17IWRlc2t0b3BQcmV2aWV3fSBvbkNsaWNrPXsoKSA9PiB7IHNldERlc2t0b3BQcmV2aWV3KGZhbHNlKTsgaWYgKHZhbElEICE9ICcnKSB7IHJldHVybklmcmFtZShmYWxzZSk7IHNldEZpcnN0UmVuZGVyKGZhbHNlKTsgfSB9fT5HZW5lcmF0ZSBNb2JpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRmlyc3RJZnJhbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPXsoIWRlc2t0b3BQcmV2aWV3KSA/IFwiY2VudGVyXCIgOiBcImZpbGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3ZGl2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIiBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2ZyBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIzMFwiIGZpbGw9e2hzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyl9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9jaXJjbGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3N2Zz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICM3Mjg5REEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpIH19IGNsYXNzTmFtZT1cImRvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzbG9nby5wbmdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiB3aWR0aD1cIjgwXCIgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28xKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2Z1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2dvUHJlc3NlZE9iamVjdC5sb2dvMikgPyBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2Z1wiIDogXCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz4gOiA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L1N0YWNrPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6ICc5OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjRjRGNkY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNERkUzRTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt2YWxJRCA9PSAnJ30gc2l6ZT1cInNsaW1cIiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHdpZGdldE9iaiwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgU2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnU2NyaXB0JywgcGx1cmFsOiAnU2NyaXB0cycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNGY2ZjgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNzdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHggMjRweCAyMHB4IDBweCdcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvUGFnZSA+XHJcbiAgICAgICAgPC9GcmFtZSA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9