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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      stop = _useState[0],
      setStop = _useState[1];

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      widgetEnabled = _useState2[0],
      setWidgetEnabled = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    button1: false,
    button2: false,
    button3: false,
    button4: true
  }),
      pressedObject = _useState3[0],
      setPressedObject = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    button5: false,
    button6: false,
    button7: false,
    button8: true
  }),
      pressedObject2 = _useState4[0],
      setPressedObject2 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      mobileVal = _useState5[0],
      setMobileVal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      desktopVal = _useState6[0],
      setDesktopVal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  }),
      positionDesktop = _useState7[0],
      setPositionDesktop = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    'yAxis': 'bottom',
    'xAxis': 'right'
  }),
      positionMobile = _useState8[0],
      setPositionMobile = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    hue: 227,
    brightness: 0.65,
    saturation: 0.58
  }),
      color = _useState9[0],
      setColor = _useState9[1];

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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
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
      widgetObj = _useState10[0],
      setWidget = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      valID = _useState11[0],
      setValID = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      channelID = _useState12[0],
      setChannelID = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      first = _useState13[0],
      setFirst = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('[Join](https://discord.gg/3FKvVwH) our Discord Server!'),
      notificationValue = _useState14[0],
      setNotificationValue = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('2000'),
      timeoutValue = _useState15[0],
      setTimeoutValue = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('https://cdn.discordapp.com/embed/avatars/0.png'),
      avatarValue = _useState16[0],
      setAvatarValue = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      desktopPreview = _useState17[0],
      setDesktopPreview = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      firstRender = _useState18[0],
      setFirstRender = _useState18[1]; //toast


  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      active = _useState19[0],
      setActive = _useState19[1];

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
      }, 100);
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

_s(ScriptPage, "HueYi6vQAjpOhldJnAFfGVAHu8k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInVzZVN0YXRlIiwic3RvcCIsInNldFN0b3AiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZVNjcmlwdHMiLCJkZWxldGVTY3JpcHRzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwid2lkZ2V0RW5hYmxlZCIsInNldFdpZGdldEVuYWJsZWQiLCJidXR0b24xIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJidXR0b240IiwicHJlc3NlZE9iamVjdCIsInNldFByZXNzZWRPYmplY3QiLCJidXR0b241IiwiYnV0dG9uNiIsImJ1dHRvbjciLCJidXR0b244IiwicHJlc3NlZE9iamVjdDIiLCJzZXRQcmVzc2VkT2JqZWN0MiIsIm1vYmlsZVZhbCIsInNldE1vYmlsZVZhbCIsImRlc2t0b3BWYWwiLCJzZXREZXNrdG9wVmFsIiwicG9zaXRpb25EZXNrdG9wIiwic2V0UG9zaXRpb25EZXNrdG9wIiwicG9zaXRpb25Nb2JpbGUiLCJzZXRQb3NpdGlvbk1vYmlsZSIsImh1ZSIsImJyaWdodG5lc3MiLCJzYXR1cmF0aW9uIiwiY29sb3IiLCJzZXRDb2xvciIsInNldENvbG9yUGx1cyIsImNvbCIsInNldFdpZGdldCIsImRlc2t0b3BQb3NpdGlvbiIsIm1vYmlsZVBvc2l0aW9uIiwibm90aWZpY2F0aW9uVGV4dCIsIm5vdGlmaWNhdGlvblZhbHVlIiwibm90aWZpY2F0aW9uVGltZW91dCIsInRpbWVvdXRWYWx1ZSIsIm5vdGlmaWNhdGlvbkF2YXRhciIsImF2YXRhclZhbHVlIiwibW9iaWxlIiwiZGVza3RvcCIsImhzbFRvSGV4Iiwid2lkZ2V0T2JqIiwidmFsSUQiLCJzZXRWYWxJRCIsImNoYW5uZWxJRCIsInNldENoYW5uZWxJRCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJzZXROb3RpZmljYXRpb25WYWx1ZSIsInNldFRpbWVvdXRWYWx1ZSIsInNldEF2YXRhclZhbHVlIiwiZGVza3RvcFByZXZpZXciLCJzZXREZXNrdG9wUHJldmlldyIsImZpcnN0UmVuZGVyIiwic2V0Rmlyc3RSZW5kZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b2FzdE1hcmt1cCIsInpJbmRleCIsImJ1dHRvblByZXNzZWQiLCJpIiwiYnV0dG9uUHJlc3NlZDIiLCJoYW5kbGVDbGljayIsInBvcyIsInBvczIiLCJyZXR1cm5JZnJhbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInR5cGUiLCJzcmMiLCJ0ZXh0IiwieUF4aXMiLCJ4QXhpcyIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwicmVtb3ZlIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCIkIiwid2luZG93Iiwic3R5bGUiLCJib3JkZXIiLCJzZXRUaW1lb3V0IiwiY29udGVudERvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInJldHVybkZpcnN0SWZyYW1lIiwiY29uc29sZSIsImxvZyIsIm1ha2VBcGlDYWxsIiwiYXBwSW5mbyIsInNVUkwiLCJ1cmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJoZXhUb0hzbCIsImhleCIsImV4ZWMiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsIm1heCIsIk1hdGgiLCJtaW4iLCJoIiwicyIsImwiLCJkIiwicm91bmQiLCJodWUycmdiIiwicCIsInEiLCJ0IiwidG9IZXgiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJtZXNzYWdlIiwic2hvcFVSTCIsIlN0cmluZyIsInNob3AiLCJteXNob3BpZnlEb21haW4iLCJzdWJzdHIiLCJnZXQiLCJzZXJ2ZXJJRCIsImZldGNoIiwicmVzIiwianNvbiIsIndpZGdldCIsImNjb2xvciIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsInZhcmlhYmxlcyIsImlucHV0IiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNpcmNsZVRpY2tNYWpvck1vbm90b25lIiwiQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lIiwiYmFja2dyb3VuZENvbG9yIiwidmFsIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxrREFBSCxtQkFBdEI7QUFhQSxJQUFNQyxnQkFBZ0IsR0FBR0Qsa0RBQUgsb0JBQXRCO0FBZ0JBLElBQU1FLGdCQUFnQixHQUFHRixrREFBSCxvQkFBdEI7QUFZQSxJQUFNRyxhQUFhLGlEQUFuQjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsSUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBQUEscUJBRU1DLHVFQUFXLENBQUNULGdCQUFELENBRmpCO0FBQUE7QUFBQSxNQUVYVSxhQUZXOztBQUFBLHNCQUdNRCx1RUFBVyxDQUFDTixnQkFBRCxDQUhqQjtBQUFBO0FBQUEsTUFHWFEsYUFIVzs7QUFBQSxrQkFJZUMsb0VBQVEsQ0FBQ1YsZ0JBQUQsQ0FKdkI7QUFBQSxNQUlWVyxPQUpVLGFBSVZBLE9BSlU7QUFBQSxNQUlEQyxLQUpDLGFBSURBLEtBSkM7QUFBQSxNQUlNQyxJQUpOLGFBSU1BLElBSk47O0FBQUEsbUJBS3dCVCxz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QztBQUFSLElBREosQ0FoQkosQ0FESixDQUZKLENBeFVKLEVBd1hJO0FBQUssU0FBSyxFQUFFO0FBQ1JrRyxjQUFRLEVBQUUsT0FERjtBQUVSM0YsWUFBTSxFQUFFLElBRkE7QUFHUjRGLFlBQU0sRUFBRSxHQUhBO0FBSVJDLFdBQUssRUFBRSxHQUpDO0FBS1JDLGFBQU8sRUFBRSxNQUxEO0FBTVJ4RSxZQUFNLEVBQUUsTUFOQTtBQU9SRCxXQUFLLEVBQUUsTUFQQztBQVFSMEUsYUFBTyxFQUFFLE1BUkQ7QUFTUkMsb0JBQWMsRUFBRSxlQVRSO0FBVVJDLGdCQUFVLEVBQUUsU0FWSjtBQVdSQyxlQUFTLEVBQUU7QUFYSDtBQUFaLEtBYUksa0JBYkosRUFjSSxNQUFDLHVEQUFEO0FBQVEsWUFBUSxFQUFFbEgsS0FBSyxJQUFJLEVBQTNCO0FBQStCLFFBQUksRUFBQyxNQUFwQztBQUEyQyxXQUFPLE1BQWxEO0FBQW1ELFdBQU8sRUFBRSxtQkFBTTtBQUM5RGtELGlCQUFXLENBQUNuRCxTQUFELEVBQVlvRixPQUFaLENBQVg7QUFDQXJFLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUhELHFCQWRKLENBeFhKLENBaERKLEVBb2ZJO0FBQUssU0FBSyxFQUFFO0FBQ1JpRyxhQUFPLEVBQUUsTUFERDtBQUVSSSxtQkFBYSxFQUFFLEtBRlA7QUFHUlgscUJBQWUsRUFBRSxTQUhUO0FBSVJuRSxXQUFLLEVBQUUsTUFKQztBQUtSK0UsZUFBUyxFQUFFLE1BTEg7QUFNUkMsa0JBQVksRUFBRSxNQU5OO0FBT1JQLGFBQU8sRUFBRTtBQVBEO0FBQVosSUFwZkosQ0FESixDQURKO0FBa2dCSDs7R0E1K0JRbkssVTtVQUVtQkksK0QsRUFDQUEsK0QsRUFDU0csNEQ7OztLQUo1QlAsVTtBQTgrQk1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzY3JpcHQtcGFnZS5qcy4xYjJhNGQwZmE5ZWZjNzhkMGI3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZUxpc3QsIFRleHRGaWVsZCwgQnV0dG9uLCBDYXJkLCBQYWdlLCBMYXlvdXQsIFN0YWNrLCBEaXNwbGF5VGV4dCwgSWNvbiwgQnV0dG9uR3JvdXAsIFJhZGlvQnV0dG9uLCBTdGlja3ksIEJhbm5lciwgQ29sb3JQaWNrZXIsIFRvYXN0LCBGcmFtZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaXJjbGVBbGVydE1ham9yTW9ub3RvbmUsIENpcmNsZVRpY2tNYWpvck1vbm90b25lIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcy1pY29ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNvbnN0IENSRUFURV9TQ1JJUFRUQUcgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdDcmVhdGUoJGlucHV0OiBTY3JpcHRUYWdJbnB1dCEpIHtcclxuICAgICAgICBzY3JpcHRUYWdDcmVhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgIHNjcmlwdFRhZyB7XHJcbiAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBRVUVSWV9TQ1JJUFRUQUdTID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICAgIHNjcmlwdFRhZ3MoZmlyc3Q6IDUpIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaG9wIHtcclxuICAgICAgICAgICAgbXlzaG9waWZ5RG9tYWluXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IERFTEVURV9TQ1JJUFRUQUcgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBzY3JpcHRUYWdEZWxldGUoJGlkOiBJRCEpIHtcclxuICAgICAgICBzY3JpcHRUYWdEZWxldGUoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICBkZWxldGVkU2NyaXB0VGFnSWRcclxuICAgICAgICAgICAgdXNlckVycm9ycyB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCB1cmxTY3JpcHRUYWdzID0gYGh0dHBzOi8vNzNkYjQzNjQxZTQwLm5ncm9rLmlvL3Rlc3Qtc2NyaXB0LmpzYDtcclxuXHJcbmZ1bmN0aW9uIFNjcmlwdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbc3RvcCwgc2V0U3RvcF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2NyZWF0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1NDUklQVFRBRyk7XHJcbiAgICBjb25zdCBbZGVsZXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihERUxFVEVfU0NSSVBUVEFHKTtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFVRVJZX1NDUklQVFRBR1MpO1xyXG4gICAgY29uc3QgW3dpZGdldEVuYWJsZWQsIHNldFdpZGdldEVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcHJlc3NlZE9iamVjdCwgc2V0UHJlc3NlZE9iamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnV0dG9uMTogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uMjogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uMzogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3ByZXNzZWRPYmplY3QyLCBzZXRQcmVzc2VkT2JqZWN0Ml0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnV0dG9uNTogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNjogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uNzogZmFsc2UsXHJcbiAgICAgICAgYnV0dG9uODogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW21vYmlsZVZhbCwgc2V0TW9iaWxlVmFsXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Rlc2t0b3BWYWwsIHNldERlc2t0b3BWYWxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcG9zaXRpb25EZXNrdG9wLCBzZXRQb3NpdGlvbkRlc2t0b3BdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbk1vYmlsZSwgc2V0UG9zaXRpb25Nb2JpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGh1ZTogMjI3LFxyXG4gICAgICAgIGJyaWdodG5lc3M6IDAuNjUsXHJcbiAgICAgICAgc2F0dXJhdGlvbjogMC41OCxcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gc2V0Q29sb3JQbHVzKGNvbCkge1xyXG4gICAgICAgIHNldENvbG9yKGNvbCk7XHJcbiAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IFt3aWRnZXRPYmosIHNldFdpZGdldF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZGVza3RvcFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9iaWxlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3RpZmljYXRpb25UZXh0OiAnW0pvaW5dKGh0dHBzOi8vZGlzY29yZC5nZy8zRkt2VndIKSBvdXIgRGlzY29yZCBTZXJ2ZXIhJyxcclxuICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMC5wbmcnLFxyXG4gICAgICAgIGNvbG9yOiAnIzcyODlEQScsXHJcbiAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgd2lkZ2V0RW5hYmxlZDogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFt2YWxJRCwgc2V0VmFsSURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2NoYW5uZWxJRCwgc2V0Q2hhbm5lbElEXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW25vdGlmaWNhdGlvblZhbHVlLCBzZXROb3RpZmljYXRpb25WYWx1ZV0gPSB1c2VTdGF0ZSgnW0pvaW5dKGh0dHBzOi8vZGlzY29yZC5nZy8zRkt2VndIKSBvdXIgRGlzY29yZCBTZXJ2ZXIhJyk7XHJcbiAgICBjb25zdCBbdGltZW91dFZhbHVlLCBzZXRUaW1lb3V0VmFsdWVdID0gdXNlU3RhdGUoJzIwMDAnKTtcclxuICAgIGNvbnN0IFthdmF0YXJWYWx1ZSwgc2V0QXZhdGFyVmFsdWVdID0gdXNlU3RhdGUoJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMC5wbmcnKTtcclxuXHJcbiAgICBjb25zdCBbZGVza3RvcFByZXZpZXcsIHNldERlc2t0b3BQcmV2aWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpcnN0UmVuZGVyLCBzZXRGaXJzdFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICAvL3RvYXN0XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0TWFya3VwID0gYWN0aXZlID8gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgekluZGV4OiAnOTk5JyB9fT5cclxuICAgICAgICAgICAgPFRvYXN0IGNvbnRlbnQ9XCJTZXR0aW5ncyBTYXZlZFwiIG9uRGlzbWlzcz17KCkgPT4geyBzZXRBY3RpdmUoIWFjdGl2ZSkgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgOiBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ1dHRvblByZXNzZWQoaSkge1xyXG4gICAgICAgIGlmIChwcmVzc2VkT2JqZWN0W2ldID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidXR0b25QcmVzc2VkMihpKSB7XHJcbiAgICAgICAgaWYgKHByZXNzZWRPYmplY3QyW2ldID09IHRydWUpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpKSA9PiB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uRGVza3RvcDtcclxuICAgICAgICB2YXIgcG9zMiA9IHBvc2l0aW9uTW9iaWxlO1xyXG5cclxuICAgICAgICBpZiAoYnV0dG9uUHJlc3NlZChpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjEnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiB0cnVlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHBvcyA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMicpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiB0cnVlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMycpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogdHJ1ZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b240Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHBvcyA9IHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uUHJlc3NlZDIoaSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b241Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IHRydWUsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b242Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiB0cnVlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uNycpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IHRydWUsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uOCcpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvcyxcclxuICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvczIsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmV0dXJuSWZyYW1lKGRlc2t0b3ApIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldE9iailcclxuICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblxyXG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBcIndpZGdldGJvdHNjcmlwdFwiXHJcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9Ad2lkZ2V0Ym90L2NyYXRlQDNcIjtcclxuICAgICAgICAgICAgc2NyaXB0LnRleHQgPSBgXHJcbiAgICAgICAgICAgIHZhciBjcmF0ZSA9IG5ldyBDcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXI6ICcke3ZhbElEfScsIFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogJyR7Y2hhbm5lbElEfScsIFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFtcIiR7KGRlc2t0b3ApID8gd2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi55QXhpcyA6IHdpZGdldE9iai5tb2JpbGVQb3NpdGlvbi55QXhpc31cIiwgXCIkeyhkZXNrdG9wKSA/IHdpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueEF4aXMgOiB3aWRnZXRPYmoubW9iaWxlUG9zaXRpb24ueEF4aXN9XCJdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzaGFyZDogJ2h0dHBzOi8vZS53aWRnZXRib3QuaW8nLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcke3dpZGdldE9iai5jb2xvcn0nLFxyXG4gICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vY3JhdGUub3B0aW9ucy5jb2xvciA9ICcjJytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjcmF0ZS5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRleHR9JyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRpbWVvdXR9LFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uQXZhdGFyfScgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgICAgIGlmcmFtZS5pZCA9IFwid2lkZ2V0Ym90aWZyYW1lXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gYCR7JCh3aW5kb3cpLmhlaWdodCgpIC0gMTgwfXB4YDtcclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aWV3ZGl2XCIpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGdvIHRvIERpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSUQgYW5kIGNvbXBsZXRlIHRoZSBzZXR1cCBmaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmV0dXJuRmlyc3RJZnJhbWUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXJlIHB1bGFcIilcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldE9iailcclxuICAgICAgICBpZiAoZmlyc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgaWYgKHZhbElEICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuaWQgPSBcIndpZGdldGJvdHNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B3aWRnZXRib3QvY3JhdGVAM1wiO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnRleHQgPSBgXHJcbiAgICAgICAgICAgICAgICB2YXIgY3JhdGUgPSBuZXcgQ3JhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlcjogJyR7dmFsSUR9JywgXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogJyR7Y2hhbm5lbElEfScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBbXCIke3dpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueUF4aXN9XCIsIFwiJHt3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnhBeGlzfVwiXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJkOiAnaHR0cHM6Ly9lLndpZGdldGJvdC5pbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcke3dpZGdldE9iai5jb2xvcn0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVyOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vY3JhdGUub3B0aW9ucy5jb2xvciA9ICcjJytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY3JhdGUubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGV4dH0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6ICR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRpbWVvdXR9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvbkF2YXRhcn0nICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaWQgPSBcIndpZGdldGJvdGlmcmFtZVwiO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gYCR7JCh3aW5kb3cpLmhlaWdodCgpIC0gMTgwfXB4YDtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlld2RpdlwiKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBnbyB0byBEaXNjb3JkaWZ5IFNlcnZlci9DaGFubmVsIElEIGFuZCBjb21wbGV0ZSB0aGUgc2V0dXAgZmlyc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlQXBpQ2FsbChhcHBJbmZvLCBzVVJMKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvd2lkZ2V0LyR7c1VSTH1gO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KHVybCwgYXBwSW5mbykudGhlbigocmVzdWx0KSA9PiB7IH0pLmNhdGNoKChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4VG9Ic2woaGV4KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG5cclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuXHJcbiAgICAgICAgciAvPSAyNTUsIGcgLz0gMjU1LCBiIC89IDI1NTtcclxuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xyXG5cclxuICAgICAgICBpZiAobWF4ID09IG1pbikge1xyXG4gICAgICAgICAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG1heCAtIG1pbjtcclxuICAgICAgICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1heCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaCAvPSA2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcyA9IHMgKiAxMDA7XHJcbiAgICAgICAgcyA9IE1hdGgucm91bmQocyk7XHJcbiAgICAgICAgbCA9IGwgKiAxMDA7XHJcbiAgICAgICAgbCA9IE1hdGgucm91bmQobCk7XHJcbiAgICAgICAgaCA9IE1hdGgucm91bmQoMzYwICogaCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGgsIHMsIGwgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoc2xUb0hleChoLCBzLCBsKSB7XHJcbiAgICAgICAgaCAvPSAzNjA7XHJcbiAgICAgICAgLy9zIC89IDEwMDtcclxuICAgICAgICAvL2wgLz0gMTAwO1xyXG4gICAgICAgIGxldCByLCBnLCBiO1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBodWUycmdiID0gKHAsIHEsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMCkgdCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPiAxKSB0IC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDIpIHJldHVybiBxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgICAgICAgICBjb25zdCBwID0gMiAqIGwgLSBxO1xyXG4gICAgICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xyXG4gICAgICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcclxuICAgICAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9IZXggPSB4ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGV4ID0gTWF0aC5yb3VuZCh4ICogMjU1KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGAjJHt0b0hleChyKX0ke3RvSGV4KGcpfSR7dG9IZXgoYil9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuXHJcbiAgICBjb25zdCBzaG9wVVJMID0gU3RyaW5nKGRhdGEuc2hvcC5teXNob3BpZnlEb21haW4pLnN1YnN0cigwLCBTdHJpbmcoZGF0YS5zaG9wLm15c2hvcGlmeURvbWFpbikubGVuZ3RoIC0gMTQpO1xyXG5cclxuICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9kaXNjb3JkSUQvJHtzaG9wVVJMfWApLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsSUQocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGFubmVsSUQocmVzdWx0LmRhdGEuZGF0YS5jaGFubmVsSUQpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgICAgIGZldGNoKGAvYXBpL3dpZGdldC8ke3Nob3BVUkx9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IHRydWUsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IHRydWUsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IHRydWUsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IHRydWUsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjQ6IGZhbHNlLCBidXR0b242OiB0cnVlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogdHJ1ZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNjb2xvciA9IGhleFRvSHNsKHdpZGdldC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3JQbHVzKHsgaHVlOiBjY29sb3IuaCwgc2F0dXJhdGlvbjogKGNjb2xvci5zIC8gMTAwKSwgYnJpZ2h0bmVzczogKGNjb2xvci5sIC8gMTAwKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25WYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uVGV4dClcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0VmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvblRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXZhdGFyVmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvbkF2YXRhcilcclxuICAgICAgICAgICAgICAgICAgICBzZXREZXNrdG9wVmFsKHdpZGdldC5kZXNrdG9wKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh3aWRnZXQubW9iaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFdpZGdldEVuYWJsZWQod2lkZ2V0LndpZGdldEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiB3aWRnZXQubW9iaWxlUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogd2lkZ2V0Lm5vdGlmaWNhdGlvblRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogd2lkZ2V0Lm5vdGlmaWNhdGlvblRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiB3aWRnZXQubm90aWZpY2F0aW9uQXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogd2lkZ2V0Lm1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiB3aWRnZXQuZGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2lkZ2V0LmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldC53aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgICAgICBzZXRGaXJzdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0b3AgJiYgZGF0YS5zY3JpcHRUYWdzLmVkZ2VzWzBdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHVibHUgY2FjYXRcIilcclxuICAgICAgICBzZXRTdG9wKGZhbHNlKTtcclxuICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsU2NyaXB0VGFncyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZT5cclxuICAgICAgICAgICAgPFBhZ2UgdGl0bGU9XCJXaWRnZXQgU2V0dGluZ3NcIiA+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b2FzdE1hcmt1cH1cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIiBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2lkZ2V0RW5hYmxlZCkgPyA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCI+PEljb24gc291cmNlPXtDaXJjbGVUaWNrTWFqb3JNb25vdG9uZX0gLz48RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+RGlzY29yZCBXaWRnZXQgaXMgPGIgc3R5bGU9e3sgY29sb3I6ICcjNTBiODNjJyB9fT5lbmFibGVkPC9iPjwvRGlzcGxheVRleHQ+PC9TdGFjaz4gOiA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCI+PEljb24gc291cmNlPXtDaXJjbGVBbGVydE1ham9yTW9ub3RvbmV9IC8+PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPkRpc2NvcmQgV2lkZ2V0IGlzIDxiIHN0eWxlPXt7IGNvbG9yOiAnI2RlMzYxOCcgfX0+ZGlzYWJsZWQ8L2I+PC9EaXNwbGF5VGV4dD48L1N0YWNrPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodmFsSUQgIT0gJycpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17d2lkZ2V0RW5hYmxlZH0gb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbElEICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXRFbmFibGVkKCF3aWRnZXRFbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiAhd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlQXBpQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogIXdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNob3BVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh2YWxJRCAhPSAnJykgPyA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+IDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5EZXZpY2UgU2V0dGluZ3M8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2hvdyBvbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2t0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkZXNrdG9wVmFsICYmICFtb2JpbGVWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXNrdG9wVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bW9iaWxlVmFsICYmICFkZXNrdG9wVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXNrdG9wVmFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkZXNrdG9wVmFsICYmIG1vYmlsZVZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXNrdG9wVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cImV4dHJhVGlnaHRcIiBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+RGVza3RvcCBQbGFjZW1lbnQ8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b24xJyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjEnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b24yJyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjInKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjMnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMycpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjQnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNCcpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFUaWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5Nb2JpbGUgUGxhY2VtZW50PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjUnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNScpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b242Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjYnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b243Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjcnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uOCcpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b244JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5BcHBlYXJhbmNlIFNldHRpbmdzPC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIiB2ZXJ0aWNhbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyIG9uQ2hhbmdlPXtzZXRDb2xvclBsdXN9IGNvbG9yPXtjb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3JQbHVzKHsgaHVlOiAyMjcsIHNhdHVyYXRpb246IDAuNTgsIGJyaWdodG5lc3M6IDAuNjUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBEaXNjb3JkIFB1cnBsZSBDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+V2lkZ2V0IExvZ288L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5OWFhYjUnLCBib3JkZXJSYWRpdXM6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwidGlnaHRcIiBkaXN0cmlidXRpb249XCJjZW50ZXJcIiBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy8xYzhhNTRmMjVkMTAxYmRjNjA3Y2VjNzIyODI0N2E5YS5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy8xYzhhNTRmMjVkMTAxYmRjNjA3Y2VjNzIyODI0N2E5YS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvUHJlc3NlZE9iamVjdCh7IGxvZ28xOiB0cnVlLCBsb2dvMjogZmFsc2UsIGxvZ28zOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1VybCgnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2lkdGg9eyhsb2dvUHJlc3NlZE9iamVjdC5sb2dvMSkgPyBcIjgwXCIgOiBcIjYwXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvNDE0ODRkOTJjODc2Zjc2YjIwYzdmNzQ2MjIxZTgxNTEuc3ZnXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvNDE0ODRkOTJjODc2Zjc2YjIwYzdmNzQ2MjIxZTgxNTEuc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1ByZXNzZWRPYmplY3QoeyBsb2dvMTogZmFsc2UsIGxvZ28yOiB0cnVlLCBsb2dvMzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29VcmwoJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdpZHRoPXsobG9nb1ByZXNzZWRPYmplY3QubG9nbzIpID8gXCI4MFwiIDogXCI2MFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzL2Y4Mzg5Y2ExYTc0MWExMTUzMTNiZWRlOWFjMDJlMmMwLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzL2Y4Mzg5Y2ExYTc0MWExMTUzMTNiZWRlOWFjMDJlMmMwLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29QcmVzc2VkT2JqZWN0KHsgbG9nbzE6IGZhbHNlLCBsb2dvMjogZmFsc2UsIGxvZ28zOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvVXJsKCdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3aWR0aD17KGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28zKSA/IFwiODBcIiA6IFwiNjBcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2lkZ2V0IFRoZW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNlZ21lbnRlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17dGhlbWVEYXJrfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogbG9nb1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICdkYXJrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lTmFtZShcImRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVEYXJrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGFyazwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXshdGhlbWVEYXJrfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogbG9nb1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICdsaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZU5hbWUoXCJsaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZURhcmsoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGlnaHQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkRpc2NvdW50IGZvciBKb2luaW5nIFNlcnZlcjwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpc2NvdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNpY0NvZGVEaXNjb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZXNPbmNlUGVyQ3VzdG9tZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogXCJESVNDT1JEMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lclNlbGVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyR2V0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAwLjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGlzY29yZCBEaXNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzYWdlTGltaXQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzQXQ6IFwiMjAxOS0wNy0wM1QyMDo0Nzo1NVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBEaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5XaWRnZXQgTm90aWZpY2F0aW9uczwvYj48L0Rpc3BsYXlUZXh0Pn0gc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBUZXh0XCIgdmFsdWU9e25vdGlmaWNhdGlvblZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvblZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGNhbiBjcmVhdGUgaHlwZXJsaW5rcyB1c2luZyBtYXJrZG93biBsaWtlIHNvOiBbdGV4dF0obGluayk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gVGltZW91dCAobWlsaXNlY29uZHMpXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aW1lb3V0VmFsdWV9IG9uQ2hhbmdlPXsodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dFZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIEF2YXRhciBVUkxcIiB2YWx1ZT17YXZhdGFyVmFsdWV9IG9uQ2hhbmdlPXsodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXZhdGFyVmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0QXZhdGFyVmFsdWUoJ2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMC5wbmcnKSB9fT5TZXQgRGVmYXVsdCBEaXNjb3JkIExvZ28gQXZhdGFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkhlbHAgYW5kIENvbnRhY3Q8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIGFueSBraW5kcyBvZiBpc3N1ZXMgb3Igc3VnZ2VzdGlvbnMsIHlvdSBjYW4gZW1haWwgdXMgYXQgPGI+YmxhemVzb2Z0d29ya3M3QGdtYWlsLmNvbTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5JZiB5b3VyIHdpZGdldCBkb2Vzbid0IGxvYWQsIHBsZWFzZSBjaGVjayBpZiB5b3UndmUgZW50ZXJlZCB0aGUgY29ycmVjdCBJRHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB0aGUgaXNzdWUgcGVyc2lzdHMgcGxlYXNlIHNlbmQgYW4gZW1haWwgd2l0aCBhIHNjcmVlbnNob3Qgb2YgZWFjaCBvZiB0aGUgYXBwJ3MgcGFnZXMgd2l0aCB5b3VyIHNldHRpbmdzIGFuZCB5b3VyIHN0b3JlJ3MgbmFtZSBhbmQgd2UnbGwgZ2xhZGx5IGhlbHAgeW91IHNvbHZlIHRoZSBwcm9ibGVtLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGFyZSBub3QgYWZmaWxpYXRlZCB3aXRoIGVpdGhlciA8aT5XaWRnZXRib3Q8L2k+IG9yIDxpPkRpc2NvcmQ8L2k+LiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgPGk+V2lkZ2V0Ym90PC9pPiBhbmQgc3VwcG9ydCB0aGVtIGZvciBleHRyYSBmZWF0dXJlcyA8Yj48YSBocmVmPVwiaHR0cHM6Ly93aWRnZXRib3QuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT48L2I+LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5IG9mZnNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzk5YWFiNScsIGJvcmRlclJhZGl1czogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIiBhbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPlByZXNzIHRoZSBidXR0b25zIGJlbGxvdyBhZnRlciBldmVyeSBjaGFuZ2UgdG8gc2VlIHRoZSBwcmV2aWV3PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlByZXNzIHRoZSBidXR0b24gYmVsbG93IGFmdGVyIGV2ZXJ5IGNoYW5nZSB0byBzZWUgdGhlIHByZXZpZXc8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc2VnbWVudGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHNpemU9XCJzbGltXCIgcHJlc3NlZD17ZGVza3RvcFByZXZpZXd9IG9uQ2xpY2s9eygpID0+IHsgc2V0RGVza3RvcFByZXZpZXcodHJ1ZSk7IGlmICh2YWxJRCAhPSAnJykgeyByZXR1cm5JZnJhbWUodHJ1ZSk7IHNldEZpcnN0UmVuZGVyKGZhbHNlKTsgfSB9fT5HZW5lcmF0ZSBEZXNrdG9wPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT1cInNsaW1cIiBwcmVzc2VkPXshZGVza3RvcFByZXZpZXd9IG9uQ2xpY2s9eygpID0+IHsgc2V0RGVza3RvcFByZXZpZXcoZmFsc2UpOyBpZiAodmFsSUQgIT0gJycpIHsgcmV0dXJuSWZyYW1lKGZhbHNlKTsgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpOyB9IH19PkdlbmVyYXRlIE1vYmlsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5GaXJzdElmcmFtZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249eyghZGVza3RvcFByZXZpZXcpID8gXCJjZW50ZXJcIiA6IFwiZmlsbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByZXZpZXdkaXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiIHNwYWNpbmc9XCJleHRyYUxvb3NlXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3ZnIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjMwXCIgZmlsbD17aHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2NpcmNsZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvc3ZnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIzcyODlEQSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcykgfX0gY2xhc3NOYW1lPVwiZG90XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkaXNsb2dvLnBuZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjQwcHhcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbElEICE9ICcnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHdpZHRoPVwiODBcIiBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobG9nb1ByZXNzZWRPYmplY3QubG9nbzEpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28yKSA/IFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvNDE0ODRkOTJjODc2Zjc2YjIwYzdmNzQ2MjIxZTgxNTEuc3ZnXCIgOiBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzL2Y4Mzg5Y2ExYTc0MWExMTUzMTNiZWRlOWFjMDJlMmMwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAvPiA6IDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvU3RhY2s+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogJzk5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNGNEY2RjgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI0RGRTNFOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3ZhbElEID09ICcnfSBzaXplPVwic2xpbVwiIHByaW1hcnkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUFwaUNhbGwod2lkZ2V0T2JqLCBzaG9wVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBTZXR0aW5nczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnU2NyaXB0JywgcGx1cmFsOiAnU2NyaXB0cycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNmY4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzc3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4IDI0cHggMjBweCAwcHgnXHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8L1BhZ2UgPlxyXG4gICAgICAgIDwvRnJhbWUgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==