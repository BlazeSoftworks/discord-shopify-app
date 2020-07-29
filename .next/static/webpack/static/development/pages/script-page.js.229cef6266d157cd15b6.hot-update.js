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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInVzZVN0YXRlIiwic3RvcCIsInNldFN0b3AiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZVNjcmlwdHMiLCJkZWxldGVTY3JpcHRzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwid2lkZ2V0RW5hYmxlZCIsInNldFdpZGdldEVuYWJsZWQiLCJidXR0b24xIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJidXR0b240IiwicHJlc3NlZE9iamVjdCIsInNldFByZXNzZWRPYmplY3QiLCJidXR0b241IiwiYnV0dG9uNiIsImJ1dHRvbjciLCJidXR0b244IiwicHJlc3NlZE9iamVjdDIiLCJzZXRQcmVzc2VkT2JqZWN0MiIsIm1vYmlsZVZhbCIsInNldE1vYmlsZVZhbCIsImRlc2t0b3BWYWwiLCJzZXREZXNrdG9wVmFsIiwicG9zaXRpb25EZXNrdG9wIiwic2V0UG9zaXRpb25EZXNrdG9wIiwicG9zaXRpb25Nb2JpbGUiLCJzZXRQb3NpdGlvbk1vYmlsZSIsImh1ZSIsImJyaWdodG5lc3MiLCJzYXR1cmF0aW9uIiwiY29sb3IiLCJzZXRDb2xvciIsInNldENvbG9yUGx1cyIsImNvbCIsInNldFdpZGdldCIsImRlc2t0b3BQb3NpdGlvbiIsIm1vYmlsZVBvc2l0aW9uIiwibm90aWZpY2F0aW9uVGV4dCIsIm5vdGlmaWNhdGlvblZhbHVlIiwibm90aWZpY2F0aW9uVGltZW91dCIsInRpbWVvdXRWYWx1ZSIsIm5vdGlmaWNhdGlvbkF2YXRhciIsImF2YXRhclZhbHVlIiwibW9iaWxlIiwiZGVza3RvcCIsImhzbFRvSGV4Iiwid2lkZ2V0T2JqIiwidmFsSUQiLCJzZXRWYWxJRCIsImNoYW5uZWxJRCIsInNldENoYW5uZWxJRCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJzZXROb3RpZmljYXRpb25WYWx1ZSIsInNldFRpbWVvdXRWYWx1ZSIsInNldEF2YXRhclZhbHVlIiwiZGVza3RvcFByZXZpZXciLCJzZXREZXNrdG9wUHJldmlldyIsImZpcnN0UmVuZGVyIiwic2V0Rmlyc3RSZW5kZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b2FzdE1hcmt1cCIsInpJbmRleCIsImJ1dHRvblByZXNzZWQiLCJpIiwiYnV0dG9uUHJlc3NlZDIiLCJoYW5kbGVDbGljayIsInBvcyIsInBvczIiLCJyZXR1cm5JZnJhbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInR5cGUiLCJzcmMiLCJ0ZXh0IiwieUF4aXMiLCJ4QXhpcyIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwicmVtb3ZlIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCIkIiwid2luZG93Iiwic3R5bGUiLCJib3JkZXIiLCJzZXRUaW1lb3V0IiwiY29udGVudERvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInJldHVybkZpcnN0SWZyYW1lIiwiY29uc29sZSIsImxvZyIsIm1ha2VBcGlDYWxsIiwiYXBwSW5mbyIsInNVUkwiLCJ1cmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJoZXhUb0hzbCIsImhleCIsImV4ZWMiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsIm1heCIsIk1hdGgiLCJtaW4iLCJoIiwicyIsImwiLCJkIiwicm91bmQiLCJodWUycmdiIiwicCIsInEiLCJ0IiwidG9IZXgiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJtZXNzYWdlIiwic2hvcFVSTCIsIlN0cmluZyIsInNob3AiLCJteXNob3BpZnlEb21haW4iLCJzdWJzdHIiLCJnZXQiLCJzZXJ2ZXJJRCIsImZldGNoIiwicmVzIiwianNvbiIsIndpZGdldCIsImNjb2xvciIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsInZhcmlhYmxlcyIsImlucHV0IiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNpcmNsZVRpY2tNYWpvck1vbm90b25lIiwiQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lIiwiYmFja2dyb3VuZENvbG9yIiwidmFsIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwibm9kZSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBYUEsSUFBTUMsZ0JBQWdCLEdBQUdELGtEQUFILG9CQUF0QjtBQWdCQSxJQUFNRSxnQkFBZ0IsR0FBR0Ysa0RBQUgsb0JBQXRCO0FBWUEsSUFBTUcsYUFBYSxpREFBbkI7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUFBLHFCQUVNQyx1RUFBVyxDQUFDVCxnQkFBRCxDQUZqQjtBQUFBO0FBQUEsTUFFWFUsYUFGVzs7QUFBQSxzQkFHTUQsdUVBQVcsQ0FBQ04sZ0JBQUQsQ0FIakI7QUFBQTtBQUFBLE1BR1hRLGFBSFc7O0FBQUEsa0JBSWVDLG9FQUFRLENBQUNWLGdCQUFELENBSnZCO0FBQUEsTUFJVlcsT0FKVSxhQUlWQSxPQUpVO0FBQUEsTUFJREMsS0FKQyxhQUlEQSxLQUpDO0FBQUEsTUFJ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LDREOzs7S0FKNUJQLFU7QUE4K0JNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2NyaXB0LXBhZ2UuanMuMjI5Y2VmNjI2NmQxNTdjZDE1YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VMaXN0LCBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FyZCwgUGFnZSwgTGF5b3V0LCBTdGFjaywgRGlzcGxheVRleHQsIEljb24sIEJ1dHRvbkdyb3VwLCBSYWRpb0J1dHRvbiwgU3RpY2t5LCBCYW5uZXIsIENvbG9yUGlja2VyLCBUb2FzdCwgRnJhbWUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lLCBDaXJjbGVUaWNrTWFqb3JNb25vdG9uZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMtaWNvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBDUkVBVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnQ3JlYXRlKCRpbnB1dDogU2NyaXB0VGFnSW5wdXQhKSB7XHJcbiAgICAgICAgc2NyaXB0VGFnQ3JlYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgICAgICBzY3JpcHRUYWcge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgUVVFUllfU0NSSVBUVEFHUyA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBzY3JpcHRUYWdzKGZpcnN0OiA1KSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvcCB7XHJcbiAgICAgICAgICAgIG15c2hvcGlmeURvbWFpblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5jb25zdCBERUxFVEVfU0NSSVBUVEFHID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2NyaXB0VGFnRGVsZXRlKCRpZDogSUQhKSB7XHJcbiAgICAgICAgc2NyaXB0VGFnRGVsZXRlKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlZFNjcmlwdFRhZ0lkXHJcbiAgICAgICAgICAgIHVzZXJFcnJvcnMge1xyXG4gICAgICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgdXJsU2NyaXB0VGFncyA9IGBodHRwczovLzczZGI0MzY0MWU0MC5uZ3Jvay5pby90ZXN0LXNjcmlwdC5qc2A7XHJcblxyXG5mdW5jdGlvbiBTY3JpcHRQYWdlKCkge1xyXG4gICAgY29uc3QgW3N0b3AsIHNldFN0b3BdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjcmVhdGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKENSRUFURV9TQ1JJUFRUQUcpO1xyXG4gICAgY29uc3QgW2RlbGV0ZVNjcmlwdHNdID0gdXNlTXV0YXRpb24oREVMRVRFX1NDUklQVFRBRyk7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRVUVSWV9TQ1JJUFRUQUdTKTtcclxuICAgIGNvbnN0IFt3aWRnZXRFbmFibGVkLCBzZXRXaWRnZXRFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3ByZXNzZWRPYmplY3QsIHNldFByZXNzZWRPYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGJ1dHRvbjE6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjI6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjM6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjQ6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtwcmVzc2VkT2JqZWN0Miwgc2V0UHJlc3NlZE9iamVjdDJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGJ1dHRvbjU6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjY6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjc6IGZhbHNlLFxyXG4gICAgICAgIGJ1dHRvbjg6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFttb2JpbGVWYWwsIHNldE1vYmlsZVZhbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtkZXNrdG9wVmFsLCBzZXREZXNrdG9wVmFsXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uRGVza3RvcCwgc2V0UG9zaXRpb25EZXNrdG9wXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcG9zaXRpb25Nb2JpbGUsIHNldFBvc2l0aW9uTW9iaWxlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBodWU6IDIyNyxcclxuICAgICAgICBicmlnaHRuZXNzOiAwLjY1LFxyXG4gICAgICAgIHNhdHVyYXRpb246IDAuNTgsXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIHNldENvbG9yUGx1cyhjb2wpIHtcclxuICAgICAgICBzZXRDb2xvcihjb2wpO1xyXG4gICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBbd2lkZ2V0T2JqLCBzZXRXaWRnZXRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlc2t0b3BQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vYmlsZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogJ1tKb2luXShodHRwczovL2Rpc2NvcmQuZ2cvM0ZLdlZ3SCkgb3VyIERpc2NvcmQgU2VydmVyIScsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogMjAwMCxcclxuICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6ICdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJyxcclxuICAgICAgICBjb2xvcjogJyM3Mjg5REEnLFxyXG4gICAgICAgIG1vYmlsZTogdHJ1ZSxcclxuICAgICAgICBkZXNrdG9wOiB0cnVlLFxyXG4gICAgICAgIHdpZGdldEVuYWJsZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbdmFsSUQsIHNldFZhbElEXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtjaGFubmVsSUQsIHNldENoYW5uZWxJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmlyc3QsIHNldEZpcnN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtub3RpZmljYXRpb25WYWx1ZSwgc2V0Tm90aWZpY2F0aW9uVmFsdWVdID0gdXNlU3RhdGUoJ1tKb2luXShodHRwczovL2Rpc2NvcmQuZ2cvM0ZLdlZ3SCkgb3VyIERpc2NvcmQgU2VydmVyIScpO1xyXG4gICAgY29uc3QgW3RpbWVvdXRWYWx1ZSwgc2V0VGltZW91dFZhbHVlXSA9IHVzZVN0YXRlKCcyMDAwJyk7XHJcbiAgICBjb25zdCBbYXZhdGFyVmFsdWUsIHNldEF2YXRhclZhbHVlXSA9IHVzZVN0YXRlKCdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJyk7XHJcblxyXG4gICAgY29uc3QgW2Rlc2t0b3BQcmV2aWV3LCBzZXREZXNrdG9wUHJldmlld10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmaXJzdFJlbmRlciwgc2V0Rmlyc3RSZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgLy90b2FzdFxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2FzdE1hcmt1cCA9IGFjdGl2ZSA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogJzk5OScgfX0+XHJcbiAgICAgICAgICAgIDxUb2FzdCBjb250ZW50PVwiU2V0dGluZ3MgU2F2ZWRcIiBvbkRpc21pc3M9eygpID0+IHsgc2V0QWN0aXZlKCFhY3RpdmUpIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBidXR0b25QcmVzc2VkKGkpIHtcclxuICAgICAgICBpZiAocHJlc3NlZE9iamVjdFtpXSA9PSB0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnV0dG9uUHJlc3NlZDIoaSkge1xyXG4gICAgICAgIGlmIChwcmVzc2VkT2JqZWN0MltpXSA9PSB0cnVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaSkgPT4ge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbkRlc2t0b3A7XHJcbiAgICAgICAgdmFyIHBvczIgPSBwb3NpdGlvbk1vYmlsZTtcclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvblByZXNzZWQoaSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24xJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogdHJ1ZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjInKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogdHJ1ZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHBvcyA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjMnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IHRydWUsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHBvcyA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uNCcpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdChwb3MgPSB7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGJ1dHRvblByZXNzZWQyKGkpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uNScpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiB0cnVlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uNicpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogdHJ1ZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUocG9zMiA9IHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjcnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiB0cnVlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjgnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3MsXHJcbiAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3MyLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJldHVybklmcmFtZShkZXNrdG9wKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3aWRnZXRPYmopXHJcbiAgICAgICAgaWYgKHZhbElEICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cclxuICAgICAgICAgICAgc2NyaXB0LmlkID0gXCJ3aWRnZXRib3RzY3JpcHRcIlxyXG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHdpZGdldGJvdC9jcmF0ZUAzXCI7XHJcbiAgICAgICAgICAgIHNjcmlwdC50ZXh0ID0gYFxyXG4gICAgICAgICAgICB2YXIgY3JhdGUgPSBuZXcgQ3JhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VydmVyOiAnJHt2YWxJRH0nLCBcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6ICcke2NoYW5uZWxJRH0nLCBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBbXCIkeyhkZXNrdG9wKSA/IHdpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueUF4aXMgOiB3aWRnZXRPYmoubW9iaWxlUG9zaXRpb24ueUF4aXN9XCIsIFwiJHsoZGVza3RvcCkgPyB3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnhBeGlzIDogd2lkZ2V0T2JqLm1vYmlsZVBvc2l0aW9uLnhBeGlzfVwiXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2hhcmQ6ICdodHRwczovL2Uud2lkZ2V0Ym90LmlvJywgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnJHt3aWRnZXRPYmouY29sb3J9JyxcclxuICAgICAgICAgICAgICAgIGRlZmVyOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2NyYXRlLm9wdGlvbnMuY29sb3IgPSAnIycrTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3JhdGUubm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25UZXh0fScsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAke3dpZGdldE9iai5ub3RpZmljYXRpb25UaW1lb3V0fSxcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvbkF2YXRhcn0nICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgICAgICBpZnJhbWUuaWQgPSBcIndpZGdldGJvdGlmcmFtZVwiO1xyXG4gICAgICAgICAgICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGAkeyQod2luZG93KS5oZWlnaHQoKSAtIDE4MH1weGA7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldmlld2RpdlwiKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBnbyB0byBEaXNjb3JkaWZ5IFNlcnZlci9DaGFubmVsIElEIGFuZCBjb21wbGV0ZSB0aGUgc2V0dXAgZmlyc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJldHVybkZpcnN0SWZyYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFyZSBwdWxhXCIpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3aWRnZXRPYmopXHJcbiAgICAgICAgaWYgKGZpcnN0UmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NyaXB0LmlkID0gXCJ3aWRnZXRib3RzY3JpcHRcIlxyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9Ad2lkZ2V0Ym90L2NyYXRlQDNcIjtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyYXRlID0gbmV3IENyYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXI6ICcke3ZhbElEfScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6ICcke2NoYW5uZWxJRH0nLCBcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogW1wiJHt3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnlBeGlzfVwiLCBcIiR7d2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi54QXhpc31cIl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzaGFyZDogJ2h0dHBzOi8vZS53aWRnZXRib3QuaW8nLCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnJHt3aWRnZXRPYmouY29sb3J9JyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcjogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL2NyYXRlLm9wdGlvbnMuY29sb3IgPSAnIycrTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMiwgOCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNyYXRlLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyR7d2lkZ2V0T2JqLm5vdGlmaWNhdGlvblRleHR9JyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAke3dpZGdldE9iai5ub3RpZmljYXRpb25UaW1lb3V0fSxcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25BdmF0YXJ9JyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkZ2V0Ym90aWZyYW1lJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmlkID0gXCJ3aWRnZXRib3RpZnJhbWVcIjtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmhlaWdodCA9IGAkeyQod2luZG93KS5oZWlnaHQoKSAtIDE4MH1weGA7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXdkaXZcIikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgZ28gdG8gRGlzY29yZGlmeSBTZXJ2ZXIvQ2hhbm5lbCBJRCBhbmQgY29tcGxldGUgdGhlIHNldHVwIGZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEZpcnN0UmVuZGVyKGZhbHNlKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbWFrZUFwaUNhbGwoYXBwSW5mbywgc1VSTCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAvYXBpL3dpZGdldC8ke3NVUkx9YDtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCh1cmwsIGFwcEluZm8pLnRoZW4oKHJlc3VsdCkgPT4geyB9KS5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhleFRvSHNsKGhleCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuXHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcblxyXG4gICAgICAgIHIgLz0gMjU1LCBnIC89IDI1NSwgYiAvPSAyNTU7XHJcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcclxuICAgICAgICB2YXIgaCwgcywgbCA9IChtYXggKyBtaW4pIC8gMjtcclxuXHJcbiAgICAgICAgaWYgKG1heCA9PSBtaW4pIHtcclxuICAgICAgICAgICAgaCA9IHMgPSAwOyAvLyBhY2hyb21hdGljXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XHJcbiAgICAgICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcjogaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgZzogaCA9IChiIC0gcikgLyBkICsgMjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGI6IGggPSAociAtIGcpIC8gZCArIDQ7IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGggLz0gNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHMgPSBzICogMTAwO1xyXG4gICAgICAgIHMgPSBNYXRoLnJvdW5kKHMpO1xyXG4gICAgICAgIGwgPSBsICogMTAwO1xyXG4gICAgICAgIGwgPSBNYXRoLnJvdW5kKGwpO1xyXG4gICAgICAgIGggPSBNYXRoLnJvdW5kKDM2MCAqIGgpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBoLCBzLCBsIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaHNsVG9IZXgoaCwgcywgbCkge1xyXG4gICAgICAgIGggLz0gMzYwO1xyXG4gICAgICAgIC8vcyAvPSAxMDA7XHJcbiAgICAgICAgLy9sIC89IDEwMDtcclxuICAgICAgICBsZXQgciwgZywgYjtcclxuICAgICAgICBpZiAocyA9PT0gMCkge1xyXG4gICAgICAgICAgICByID0gZyA9IGIgPSBsOyAvLyBhY2hyb21hdGljXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaHVlMnJnYiA9IChwLCBxLCB0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDApIHQgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0ID4gMSkgdCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICAgICAgY29uc3QgcCA9IDIgKiBsIC0gcTtcclxuICAgICAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcclxuICAgICAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XHJcbiAgICAgICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvSGV4ID0geCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhleCA9IE1hdGgucm91bmQoeCAqIDI1NSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBgIyR7dG9IZXgocil9JHt0b0hleChnKX0ke3RvSGV4KGIpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcblxyXG4gICAgY29uc3Qgc2hvcFVSTCA9IFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5zdWJzdHIoMCwgU3RyaW5nKGRhdGEuc2hvcC5teXNob3BpZnlEb21haW4pLmxlbmd0aCAtIDE0KTtcclxuXHJcbiAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvZGlzY29yZElELyR7c2hvcFVSTH1gKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbElEKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hhbm5lbElEKHJlc3VsdC5kYXRhLmRhdGEuY2hhbm5lbElEKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgICAgICBmZXRjaChgL2FwaS93aWRnZXQvJHtzaG9wVVJMfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHdpZGdldClcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiB0cnVlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiB0cnVlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiB0cnVlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiB0cnVlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b240OiBmYWxzZSwgYnV0dG9uNjogdHJ1ZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IHRydWUsIGJ1dHRvbjg6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQubW9iaWxlUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnhBeGlzID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdDIoeyBidXR0b241OiBmYWxzZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25Nb2JpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjY29sb3IgPSBoZXhUb0hzbCh3aWRnZXQuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvbG9yUGx1cyh7IGh1ZTogY2NvbG9yLmgsIHNhdHVyYXRpb246IChjY29sb3IucyAvIDEwMCksIGJyaWdodG5lc3M6IChjY29sb3IubCAvIDEwMCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uVmFsdWUod2lkZ2V0Lm5vdGlmaWNhdGlvblRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dFZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25UaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEF2YXRhclZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25BdmF0YXIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh3aWRnZXQuZGVza3RvcClcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwod2lkZ2V0Lm1vYmlsZSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXRFbmFibGVkKHdpZGdldC53aWRnZXRFbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogd2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IHdpZGdldC5ub3RpZmljYXRpb25UZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHdpZGdldC5ub3RpZmljYXRpb25UaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogd2lkZ2V0Lm5vdGlmaWNhdGlvbkF2YXRhcixcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHdpZGdldC5tb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogd2lkZ2V0LmRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdpZGdldC5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXQud2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICAgICAgc2V0Rmlyc3QoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdG9wICYmIGRhdGEuc2NyaXB0VGFncy5lZGdlc1swXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImR1Ymx1IGNhY2F0XCIpXHJcbiAgICAgICAgc2V0U3RvcChmYWxzZSk7XHJcbiAgICAgICAgY3JlYXRlU2NyaXB0cyh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHVybFNjcmlwdFRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhbWU+XHJcbiAgICAgICAgICAgIDxQYWdlIHRpdGxlPVwiV2lkZ2V0IFNldHRpbmdzXCIgPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICB7dG9hc3RNYXJrdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCIgc3BhY2luZz1cImV4dHJhTG9vc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpZGdldEVuYWJsZWQpID8gPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiPjxJY29uIHNvdXJjZT17Q2lyY2xlVGlja01ham9yTW9ub3RvbmV9IC8+PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPkRpc2NvcmQgV2lkZ2V0IGlzIDxiIHN0eWxlPXt7IGNvbG9yOiAnIzUwYjgzYycgfX0+ZW5hYmxlZDwvYj48L0Rpc3BsYXlUZXh0PjwvU3RhY2s+IDogPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiPjxJY29uIHNvdXJjZT17Q2lyY2xlQWxlcnRNYWpvck1vbm90b25lfSAvPjxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EaXNjb3JkIFdpZGdldCBpcyA8YiBzdHlsZT17eyBjb2xvcjogJyNkZTM2MTgnIH19PmRpc2FibGVkPC9iPjwvRGlzcGxheVRleHQ+PC9TdGFjaz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbElEICE9ICcnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3dpZGdldEVuYWJsZWR9IG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0RW5hYmxlZCghd2lkZ2V0RW5hYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogIXdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZUFwaUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6ICF3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzaG9wVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodmFsSUQgIT0gJycpID8gPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+RGV2aWNlIFNldHRpbmdzPC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNob3cgb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNrdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGVza3RvcFZhbCAmJiAhbW9iaWxlVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2JpbGVWYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vYmlsZVZhbCAmJiAhZGVza3RvcFZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGVza3RvcFZhbCAmJiBtb2JpbGVWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVza3RvcFZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYVRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPkRlc2t0b3AgUGxhY2VtZW50PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMScpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24xJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMicpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24yJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b24zJyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjMnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkKCdidXR0b240Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjQnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cImV4dHJhVGlnaHRcIiBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+TW9iaWxlIFBsYWNlbWVudDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b241Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjUnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNicpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b242JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNycpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b243JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjgnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uOCcpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+QXBwZWFyYW5jZSBTZXR0aW5nczwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgdmVydGljYWwgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlciBvbkNoYW5nZT17c2V0Q29sb3JQbHVzfSBjb2xvcj17Y29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yUGx1cyh7IGh1ZTogMjI3LCBzYXR1cmF0aW9uOiAwLjU4LCBicmlnaHRuZXNzOiAwLjY1IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgRGlzY29yZCBQdXJwbGUgQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPldpZGdldCBMb2dvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTlhYWI1JywgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cInRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvMWM4YTU0ZjI1ZDEwMWJkYzYwN2NlYzcyMjgyNDdhOWEuc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1ByZXNzZWRPYmplY3QoeyBsb2dvMTogdHJ1ZSwgbG9nbzI6IGZhbHNlLCBsb2dvMzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29VcmwoJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdpZHRoPXsobG9nb1ByZXNzZWRPYmplY3QubG9nbzEpID8gXCI4MFwiIDogXCI2MFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29QcmVzc2VkT2JqZWN0KHsgbG9nbzE6IGZhbHNlLCBsb2dvMjogdHJ1ZSwgbG9nbzM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvVXJsKCdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3aWR0aD17KGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28yKSA/IFwiODBcIiA6IFwiNjBcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvUHJlc3NlZE9iamVjdCh7IGxvZ28xOiBmYWxzZSwgbG9nbzI6IGZhbHNlLCBsb2dvMzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1VybCgnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2lkdGg9eyhsb2dvUHJlc3NlZE9iamVjdC5sb2dvMykgPyBcIjgwXCIgOiBcIjYwXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldpZGdldCBUaGVtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e3RoZW1lRGFya30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IGxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZU5hbWUoXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lRGFyayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRhcms8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17IXRoZW1lRGFya30gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IGxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVOYW1lKFwibGlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVEYXJrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxpZ2h0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5EaXNjb3VudCBmb3IgSm9pbmluZyBTZXJ2ZXI8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaXNjb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNDb2RlRGlzY291bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVzT25jZVBlckN1c3RvbWVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IFwiRElTQ09SRDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJTZWxlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lckdldHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMC4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRpc2NvcmQgRGlzY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2FnZUxpbWl0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c0F0OiBcIjIwMTktMDctMDNUMjA6NDc6NTVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRGlzY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+V2lkZ2V0IE5vdGlmaWNhdGlvbnM8L2I+PC9EaXNwbGF5VGV4dD59IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gVGV4dFwiIHZhbHVlPXtub3RpZmljYXRpb25WYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25WYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBjYW4gY3JlYXRlIGh5cGVybGlua3MgdXNpbmcgbWFya2Rvd24gbGlrZSBzbzogW3RleHRdKGxpbmspPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIFRpbWVvdXQgKG1pbGlzZWNvbmRzKVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGltZW91dFZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXRWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBBdmF0YXIgVVJMXCIgdmFsdWU9e2F2YXRhclZhbHVlfSBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF2YXRhclZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldEF2YXRhclZhbHVlKCdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9lbWJlZC9hdmF0YXJzLzAucG5nJykgfX0+U2V0IERlZmF1bHQgRGlzY29yZCBMb2dvIEF2YXRhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQgdGl0bGU9ezxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48Yj5IZWxwIGFuZCBDb250YWN0PC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBhbnkga2luZHMgb2YgaXNzdWVzIG9yIHN1Z2dlc3Rpb25zLCB5b3UgY2FuIGVtYWlsIHVzIGF0IDxiPmJsYXplc29mdHdvcmtzN0BnbWFpbC5jb208L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+SWYgeW91ciB3aWRnZXQgZG9lc24ndCBsb2FkLCBwbGVhc2UgY2hlY2sgaWYgeW91J3ZlIGVudGVyZWQgdGhlIGNvcnJlY3QgSURzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgdGhlIGlzc3VlIHBlcnNpc3RzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHdpdGggYSBzY3JlZW5zaG90IG9mIGVhY2ggb2YgdGhlIGFwcCdzIHBhZ2VzIHdpdGggeW91ciBzZXR0aW5ncyBhbmQgeW91ciBzdG9yZSdzIG5hbWUgYW5kIHdlJ2xsIGdsYWRseSBoZWxwIHlvdSBzb2x2ZSB0aGUgcHJvYmxlbS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBhcmUgbm90IGFmZmlsaWF0ZWQgd2l0aCBlaXRoZXIgPGk+V2lkZ2V0Ym90PC9pPiBvciA8aT5EaXNjb3JkPC9pPi4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IDxpPldpZGdldGJvdDwvaT4gYW5kIHN1cHBvcnQgdGhlbSBmb3IgZXh0cmEgZmVhdHVyZXMgPGI+PGEgaHJlZj1cImh0dHBzOi8vd2lkZ2V0Ym90LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+PC9iPi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreSBvZmZzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM5OWFhYjUnLCBib3JkZXJSYWRpdXM6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCIgYWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5QcmVzcyB0aGUgYnV0dG9ucyBiZWxsb3cgYWZ0ZXIgZXZlcnkgY2hhbmdlIHRvIHNlZSB0aGUgcHJldmlldzwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5QcmVzcyB0aGUgYnV0dG9uIGJlbGxvdyBhZnRlciBldmVyeSBjaGFuZ2UgdG8gc2VlIHRoZSBwcmV2aWV3PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNlZ21lbnRlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic2xpbVwiIHByZXNzZWQ9e2Rlc2t0b3BQcmV2aWV3fSBvbkNsaWNrPXsoKSA9PiB7IHNldERlc2t0b3BQcmV2aWV3KHRydWUpOyBpZiAodmFsSUQgIT0gJycpIHsgcmV0dXJuSWZyYW1lKHRydWUpOyBzZXRGaXJzdFJlbmRlcihmYWxzZSk7IH0gfX0+R2VuZXJhdGUgRGVza3RvcDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHNpemU9XCJzbGltXCIgcHJlc3NlZD17IWRlc2t0b3BQcmV2aWV3fSBvbkNsaWNrPXsoKSA9PiB7IHNldERlc2t0b3BQcmV2aWV3KGZhbHNlKTsgaWYgKHZhbElEICE9ICcnKSB7IHJldHVybklmcmFtZShmYWxzZSk7IHNldEZpcnN0UmVuZGVyKGZhbHNlKTsgfSB9fT5HZW5lcmF0ZSBNb2JpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRmlyc3RJZnJhbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPXsoIWRlc2t0b3BQcmV2aWV3KSA/IFwiY2VudGVyXCIgOiBcImZpbGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmV2aWV3ZGl2XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIiBzcGFjaW5nPVwiZXh0cmFMb29zZVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHN2ZyBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIzMFwiIGZpbGw9e2hzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyl9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9jaXJjbGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L3N2Zz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICM3Mjg5REEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpIH19IGNsYXNzTmFtZT1cImRvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGlzbG9nby5wbmdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiB3aWR0aD1cIjgwXCIgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28xKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2Z1wiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2dvUHJlc3NlZE9iamVjdC5sb2dvMikgPyBcImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzQxNDg0ZDkyYzg3NmY3NmIyMGM3Zjc0NjIyMWU4MTUxLnN2Z1wiIDogXCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy9mODM4OWNhMWE3NDFhMTE1MzEzYmVkZTlhYzAyZTJjMC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz4gOiA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L1N0YWNrPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6ICc5OScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjRjRGNkY4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNERkUzRTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt2YWxJRCA9PSAnJ30gc2l6ZT1cInNsaW1cIiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHdpZGdldE9iaiwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmUgU2V0dGluZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbGltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U2NvcGU6IFwiQUxMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBRVUVSWV9TQ1JJUFRUQUdTIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnU2NyaXB0JywgcGx1cmFsOiAnU2NyaXB0cycgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5zY3JpcHRUYWdzLmVkZ2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5ub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgU2NyaXB0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dCA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNGY2ZjgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNzdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHggMjRweCAyMHB4IDBweCdcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvUGFnZSA+XHJcbiAgICAgICAgPC9GcmFtZSA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmlwdFBhZ2U7XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9