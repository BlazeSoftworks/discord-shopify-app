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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zY3JpcHQtcGFnZS5qcyJdLCJuYW1lcyI6WyJDUkVBVEVfU0NSSVBUVEFHIiwiZ3FsIiwiUVVFUllfU0NSSVBUVEFHUyIsIkRFTEVURV9TQ1JJUFRUQUciLCJ1cmxTY3JpcHRUYWdzIiwiU2NyaXB0UGFnZSIsInVzZVN0YXRlIiwic3RvcCIsInNldFN0b3AiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZVNjcmlwdHMiLCJkZWxldGVTY3JpcHRzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwid2lkZ2V0RW5hYmxlZCIsInNldFdpZGdldEVuYWJsZWQiLCJidXR0b24xIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJidXR0b240IiwicHJlc3NlZE9iamVjdCIsInNldFByZXNzZWRPYmplY3QiLCJidXR0b241IiwiYnV0dG9uNiIsImJ1dHRvbjciLCJidXR0b244IiwicHJlc3NlZE9iamVjdDIiLCJzZXRQcmVzc2VkT2JqZWN0MiIsIm1vYmlsZVZhbCIsInNldE1vYmlsZVZhbCIsImRlc2t0b3BWYWwiLCJzZXREZXNrdG9wVmFsIiwicG9zaXRpb25EZXNrdG9wIiwic2V0UG9zaXRpb25EZXNrdG9wIiwicG9zaXRpb25Nb2JpbGUiLCJzZXRQb3NpdGlvbk1vYmlsZSIsImh1ZSIsImJyaWdodG5lc3MiLCJzYXR1cmF0aW9uIiwiY29sb3IiLCJzZXRDb2xvciIsInNldENvbG9yUGx1cyIsImNvbCIsInNldFdpZGdldCIsImRlc2t0b3BQb3NpdGlvbiIsIm1vYmlsZVBvc2l0aW9uIiwibm90aWZpY2F0aW9uVGV4dCIsIm5vdGlmaWNhdGlvblZhbHVlIiwibm90aWZpY2F0aW9uVGltZW91dCIsInRpbWVvdXRWYWx1ZSIsIm5vdGlmaWNhdGlvbkF2YXRhciIsImF2YXRhclZhbHVlIiwibW9iaWxlIiwiZGVza3RvcCIsImhzbFRvSGV4Iiwid2lkZ2V0T2JqIiwidmFsSUQiLCJzZXRWYWxJRCIsImNoYW5uZWxJRCIsInNldENoYW5uZWxJRCIsImZpcnN0Iiwic2V0Rmlyc3QiLCJzZXROb3RpZmljYXRpb25WYWx1ZSIsInNldFRpbWVvdXRWYWx1ZSIsInNldEF2YXRhclZhbHVlIiwiZGVza3RvcFByZXZpZXciLCJzZXREZXNrdG9wUHJldmlldyIsImZpcnN0UmVuZGVyIiwic2V0Rmlyc3RSZW5kZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ0b2FzdE1hcmt1cCIsInpJbmRleCIsImJ1dHRvblByZXNzZWQiLCJpIiwiYnV0dG9uUHJlc3NlZDIiLCJoYW5kbGVDbGljayIsInBvcyIsInBvczIiLCJyZXR1cm5JZnJhbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInR5cGUiLCJzcmMiLCJ0ZXh0IiwieUF4aXMiLCJ4QXhpcyIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwicmVtb3ZlIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCIkIiwid2luZG93Iiwic3R5bGUiLCJib3JkZXIiLCJzZXRUaW1lb3V0IiwiY29udGVudERvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInJldHVybkZpcnN0SWZyYW1lIiwiY29uc29sZSIsImxvZyIsIm1ha2VBcGlDYWxsIiwiYXBwSW5mbyIsInNVUkwiLCJ1cmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0IiwicmVzcG9uc2UiLCJoZXhUb0hzbCIsImhleCIsImV4ZWMiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsIm1heCIsIk1hdGgiLCJtaW4iLCJoIiwicyIsImwiLCJkIiwicm91bmQiLCJodWUycmdiIiwicCIsInEiLCJ0IiwidG9IZXgiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJtZXNzYWdlIiwic2hvcFVSTCIsIlN0cmluZyIsInNob3AiLCJteXNob3BpZnlEb21haW4iLCJzdWJzdHIiLCJnZXQiLCJzZXJ2ZXJJRCIsImZldGNoIiwicmVzIiwianNvbiIsIndpZGdldCIsImNjb2xvciIsInNjcmlwdFRhZ3MiLCJlZGdlcyIsInZhcmlhYmxlcyIsImlucHV0IiwiZGlzcGxheVNjb3BlIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNpcmNsZVRpY2tNYWpvck1vbm90b25lIiwiQ2lyY2xlQWxlcnRNYWpvck1vbm90b25lIiwiYmFja2dyb3VuZENvbG9yIiwidmFsIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyVG9wIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwibm9kZSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBYUEsSUFBTUMsZ0JBQWdCLEdBQUdELGtEQUFILG9CQUF0QjtBQWdCQSxJQUFNRSxnQkFBZ0IsR0FBR0Ysa0RBQUgsb0JBQXRCO0FBWUEsSUFBTUcsYUFBYSxpREFBbkI7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUFBLHFCQUVNQyx1RUFBVyxDQUFDVCxnQkFBRCxDQUZqQjtBQUFBO0FBQUEsTUFFWFUsYUFGVzs7QUFBQSxzQkFHTUQsdUVBQVcsQ0FBQ04sZ0JBQUQsQ0FIakI7QUFBQTtBQUFBLE1BR1hRLGFBSFc7O0FBQUEsa0JBSWVDLG9FQUFRLENBQUNWLGdCQUFELENBSnZCO0FBQUEsTUFJVlcsT0FKVSxhQUlWQSxPQUpVO0FBQUEsTUFJREMsS0FKQyxhQUlEQSxLQUpDO0FBQUEsTUFJ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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNjcmlwdC1wYWdlLmpzLmY0ZDM4ZjliNTFmMGMzMTU3ZjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnksIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCB7IFJlc291cmNlTGlzdCwgVGV4dEZpZWxkLCBCdXR0b24sIENhcmQsIFBhZ2UsIExheW91dCwgU3RhY2ssIERpc3BsYXlUZXh0LCBJY29uLCBCdXR0b25Hcm91cCwgUmFkaW9CdXR0b24sIFN0aWNreSwgQmFubmVyLCBDb2xvclBpY2tlciwgVG9hc3QsIEZyYW1lIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZSwgQ2lyY2xlVGlja01ham9yTW9ub3RvbmUgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzLWljb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY29uc3QgQ1JFQVRFX1NDUklQVFRBRyA9IGdxbGBcclxuICAgIG11dGF0aW9uIHNjcmlwdFRhZ0NyZWF0ZSgkaW5wdXQ6IFNjcmlwdFRhZ0lucHV0ISkge1xyXG4gICAgICAgIHNjcmlwdFRhZ0NyZWF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgICAgICAgc2NyaXB0VGFnIHtcclxuICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICAgICAgZmllbGRcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFFVRVJZX1NDUklQVFRBR1MgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgICAgc2NyaXB0VGFncyhmaXJzdDogNSkge1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNyY1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3Age1xyXG4gICAgICAgICAgICBteXNob3BpZnlEb21haW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuY29uc3QgREVMRVRFX1NDUklQVFRBRyA9IGdxbGBcclxuICAgIG11dGF0aW9uIHNjcmlwdFRhZ0RlbGV0ZSgkaWQ6IElEISkge1xyXG4gICAgICAgIHNjcmlwdFRhZ0RlbGV0ZShpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRTY3JpcHRUYWdJZFxyXG4gICAgICAgICAgICB1c2VyRXJyb3JzIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IHVybFNjcmlwdFRhZ3MgPSBgaHR0cHM6Ly83M2RiNDM2NDFlNDAubmdyb2suaW8vdGVzdC1zY3JpcHQuanNgO1xyXG5cclxuZnVuY3Rpb24gU2NyaXB0UGFnZSgpIHtcclxuICAgIGNvbnN0IFtzdG9wLCBzZXRTdG9wXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbY3JlYXRlU2NyaXB0c10gPSB1c2VNdXRhdGlvbihDUkVBVEVfU0NSSVBUVEFHKTtcclxuICAgIGNvbnN0IFtkZWxldGVTY3JpcHRzXSA9IHVzZU11dGF0aW9uKERFTEVURV9TQ1JJUFRUQUcpO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUllfU0NSSVBUVEFHUyk7XHJcbiAgICBjb25zdCBbd2lkZ2V0RW5hYmxlZCwgc2V0V2lkZ2V0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwcmVzc2VkT2JqZWN0LCBzZXRQcmVzc2VkT2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b24xOiBmYWxzZSxcclxuICAgICAgICBidXR0b24yOiBmYWxzZSxcclxuICAgICAgICBidXR0b24zOiBmYWxzZSxcclxuICAgICAgICBidXR0b240OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbcHJlc3NlZE9iamVjdDIsIHNldFByZXNzZWRPYmplY3QyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBidXR0b241OiBmYWxzZSxcclxuICAgICAgICBidXR0b242OiBmYWxzZSxcclxuICAgICAgICBidXR0b243OiBmYWxzZSxcclxuICAgICAgICBidXR0b244OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbbW9iaWxlVmFsLCBzZXRNb2JpbGVWYWxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZGVza3RvcFZhbCwgc2V0RGVza3RvcFZhbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbkRlc2t0b3AsIHNldFBvc2l0aW9uRGVza3RvcF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uTW9iaWxlLCBzZXRQb3NpdGlvbk1vYmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaHVlOiAyMjcsXHJcbiAgICAgICAgYnJpZ2h0bmVzczogMC42NSxcclxuICAgICAgICBzYXR1cmF0aW9uOiAwLjU4LFxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzZXRDb2xvclBsdXMoY29sKSB7XHJcbiAgICAgICAgc2V0Q29sb3IoY29sKTtcclxuICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3dpZGdldE9iaiwgc2V0V2lkZ2V0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZXNrdG9wUG9zaXRpb246IHtcclxuICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2JpbGVQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRleHQ6ICdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnLFxyXG4gICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiAnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycsXHJcbiAgICAgICAgY29sb3I6ICcjNzI4OURBJyxcclxuICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICB3aWRnZXRFbmFibGVkOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3ZhbElELCBzZXRWYWxJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY2hhbm5lbElELCBzZXRDaGFubmVsSURdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpcnN0LCBzZXRGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbbm90aWZpY2F0aW9uVmFsdWUsIHNldE5vdGlmaWNhdGlvblZhbHVlXSA9IHVzZVN0YXRlKCdbSm9pbl0oaHR0cHM6Ly9kaXNjb3JkLmdnLzNGS3ZWd0gpIG91ciBEaXNjb3JkIFNlcnZlciEnKTtcclxuICAgIGNvbnN0IFt0aW1lb3V0VmFsdWUsIHNldFRpbWVvdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnMjAwMCcpO1xyXG4gICAgY29uc3QgW2F2YXRhclZhbHVlLCBzZXRBdmF0YXJWYWx1ZV0gPSB1c2VTdGF0ZSgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycpO1xyXG5cclxuICAgIGNvbnN0IFtkZXNrdG9wUHJldmlldywgc2V0RGVza3RvcFByZXZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlyc3RSZW5kZXIsIHNldEZpcnN0UmVuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIC8vdG9hc3RcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9hc3RNYXJrdXAgPSBhY3RpdmUgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6ICc5OTknIH19PlxyXG4gICAgICAgICAgICA8VG9hc3QgY29udGVudD1cIlNldHRpbmdzIFNhdmVkXCIgb25EaXNtaXNzPXsoKSA9PiB7IHNldEFjdGl2ZSghYWN0aXZlKSB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gYnV0dG9uUHJlc3NlZChpKSB7XHJcbiAgICAgICAgaWYgKHByZXNzZWRPYmplY3RbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1dHRvblByZXNzZWQyKGkpIHtcclxuICAgICAgICBpZiAocHJlc3NlZE9iamVjdDJbaV0gPT0gdHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGkpID0+IHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb25EZXNrdG9wO1xyXG4gICAgICAgIHZhciBwb3MyID0gcG9zaXRpb25Nb2JpbGU7XHJcblxyXG4gICAgICAgIGlmIChidXR0b25QcmVzc2VkKGkpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoaSA9PSAnYnV0dG9uMScpIHtcclxuICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IHRydWUsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3AocG9zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24yJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IHRydWUsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b24zJykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiB0cnVlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcChwb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjQnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QocG9zID0geyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiB0cnVlLCB9KTtcclxuICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChidXR0b25QcmVzc2VkMihpKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjUnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogdHJ1ZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT0gJ2J1dHRvbjYnKSB7XHJcbiAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IHRydWUsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHBvczIgPSB7XHJcbiAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b243Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogdHJ1ZSwgYnV0dG9uODogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09ICdidXR0b244Jykge1xyXG4gICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0Mih7IGJ1dHRvbjU6IGZhbHNlLCBidXR0b242OiBmYWxzZSwgYnV0dG9uNzogZmFsc2UsIGJ1dHRvbjg6IHRydWUsIH0pO1xyXG4gICAgICAgICAgICBzZXRQb3NpdGlvbk1vYmlsZShwb3MyID0ge1xyXG4gICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAneEF4aXMnOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zLFxyXG4gICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zMixcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpLFxyXG4gICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5JZnJhbWUoZGVza3RvcCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmICh2YWxJRCAhPSAnJykge1xyXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B3aWRnZXRib3QvY3JhdGVAM1wiO1xyXG4gICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgdmFyIGNyYXRlID0gbmV3IENyYXRlKHtcclxuICAgICAgICAgICAgICAgIHNlcnZlcjogJyR7dmFsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogW1wiJHsoZGVza3RvcCkgPyB3aWRnZXRPYmouZGVza3RvcFBvc2l0aW9uLnlBeGlzIDogd2lkZ2V0T2JqLm1vYmlsZVBvc2l0aW9uLnlBeGlzfVwiLCBcIiR7KGRlc2t0b3ApID8gd2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi54QXhpcyA6IHdpZGdldE9iai5tb2JpbGVQb3NpdGlvbi54QXhpc31cIl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNoYXJkOiAnaHR0cHM6Ly9lLndpZGdldGJvdC5pbycsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICBkZWZlcjogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNyYXRlLm5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGV4dH0nLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25BdmF0YXJ9JyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgaWZyYW1lLmlkID0gXCJ3aWRnZXRib3RpZnJhbWVcIjtcclxuICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXdkaXZcIikuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgZ28gdG8gRGlzY29yZGlmeSBTZXJ2ZXIvQ2hhbm5lbCBJRCBhbmQgY29tcGxldGUgdGhlIHNldHVwIGZpcnN0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXR1cm5GaXJzdElmcmFtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmUgcHVsYVwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2lkZ2V0T2JqKVxyXG4gICAgICAgIGlmIChmaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcmlwdC5pZCA9IFwid2lkZ2V0Ym90c2NyaXB0XCJcclxuICAgICAgICAgICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHdpZGdldGJvdC9jcmF0ZUAzXCI7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQudGV4dCA9IGBcclxuICAgICAgICAgICAgICAgIHZhciBjcmF0ZSA9IG5ldyBDcmF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyOiAnJHt2YWxJRH0nLCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiAnJHtjaGFubmVsSUR9JywgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFtcIiR7d2lkZ2V0T2JqLmRlc2t0b3BQb3NpdGlvbi55QXhpc31cIiwgXCIke3dpZGdldE9iai5kZXNrdG9wUG9zaXRpb24ueEF4aXN9XCJdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcmQ6ICdodHRwczovL2Uud2lkZ2V0Ym90LmlvJywgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyR7d2lkZ2V0T2JqLmNvbG9yfScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXI6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy9jcmF0ZS5vcHRpb25zLmNvbG9yID0gJyMnK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjcmF0ZS5ub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcke3dpZGdldE9iai5ub3RpZmljYXRpb25UZXh0fScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uVGltZW91dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiAnJHt3aWRnZXRPYmoubm90aWZpY2F0aW9uQXZhdGFyfScgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWRnZXRib3RpZnJhbWUnKSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZGdldGJvdGlmcmFtZScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5pZCA9IFwid2lkZ2V0Ym90aWZyYW1lXCI7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5oZWlnaHQgPSBgJHskKHdpbmRvdykuaGVpZ2h0KCkgLSAxODB9cHhgO1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2h7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2aWV3ZGl2XCIpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGdvIHRvIERpc2NvcmRpZnkgU2VydmVyL0NoYW5uZWwgSUQgYW5kIGNvbXBsZXRlIHRoZSBzZXR1cCBmaXJzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaXJzdFJlbmRlcihmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG1ha2VBcGlDYWxsKGFwcEluZm8sIHNVUkwpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS93aWRnZXQvJHtzVVJMfWA7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QodXJsLCBhcHBJbmZvKS50aGVuKChyZXN1bHQpID0+IHsgfSkuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoZXhUb0hzbChoZXgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcblxyXG4gICAgICAgIHZhciByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgICAgdmFyIGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG5cclxuICAgICAgICByIC89IDI1NSwgZyAvPSAyNTUsIGIgLz0gMjU1O1xyXG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgbWluID0gTWF0aC5taW4ociwgZywgYik7XHJcbiAgICAgICAgdmFyIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XHJcblxyXG4gICAgICAgIGlmIChtYXggPT0gbWluKSB7XHJcbiAgICAgICAgICAgIGggPSBzID0gMDsgLy8gYWNocm9tYXRpY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xyXG4gICAgICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoIC89IDY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzID0gcyAqIDEwMDtcclxuICAgICAgICBzID0gTWF0aC5yb3VuZChzKTtcclxuICAgICAgICBsID0gbCAqIDEwMDtcclxuICAgICAgICBsID0gTWF0aC5yb3VuZChsKTtcclxuICAgICAgICBoID0gTWF0aC5yb3VuZCgzNjAgKiBoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaCwgcywgbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhzbFRvSGV4KGgsIHMsIGwpIHtcclxuICAgICAgICBoIC89IDM2MDtcclxuICAgICAgICAvL3MgLz0gMTAwO1xyXG4gICAgICAgIC8vbCAvPSAxMDA7XHJcbiAgICAgICAgbGV0IHIsIGcsIGI7XHJcbiAgICAgICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh1ZTJyZ2IgPSAocCwgcSwgdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAwKSB0ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA+IDEpIHQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSAyICogbCAtIHE7XHJcbiAgICAgICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XHJcbiAgICAgICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xyXG4gICAgICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b0hleCA9IHggPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKHggKiAyNTUpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYCMke3RvSGV4KHIpfSR7dG9IZXgoZyl9JHt0b0hleChiKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxyXG5cclxuICAgIGNvbnN0IHNob3BVUkwgPSBTdHJpbmcoZGF0YS5zaG9wLm15c2hvcGlmeURvbWFpbikuc3Vic3RyKDAsIFN0cmluZyhkYXRhLnNob3AubXlzaG9waWZ5RG9tYWluKS5sZW5ndGggLSAxNCk7XHJcblxyXG4gICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2Rpc2NvcmRJRC8ke3Nob3BVUkx9YCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuZGF0YS5zZXJ2ZXJJRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWxJRChyZXN1bHQuZGF0YS5kYXRhLnNlcnZlcklEKTtcclxuICAgICAgICAgICAgICAgIHNldENoYW5uZWxJRChyZXN1bHQuZGF0YS5kYXRhLmNoYW5uZWxJRCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEuc2VydmVySUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuXHJcbiAgICAgICAgZmV0Y2goYC9hcGkvd2lkZ2V0LyR7c2hvcFVSTH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnhBeGlzID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogdHJ1ZSwgYnV0dG9uMjogZmFsc2UsIGJ1dHRvbjM6IGZhbHNlLCBidXR0b240OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ3RvcCcgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QoeyBidXR0b24xOiBmYWxzZSwgYnV0dG9uMjogdHJ1ZSwgYnV0dG9uMzogZmFsc2UsIGJ1dHRvbjQ6IGZhbHNlLCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25EZXNrdG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueUF4aXMgPT0gJ2JvdHRvbScgJiYgd2lkZ2V0LmRlc2t0b3BQb3NpdGlvbi54QXhpcyA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJlc3NlZE9iamVjdCh7IGJ1dHRvbjE6IGZhbHNlLCBidXR0b24yOiBmYWxzZSwgYnV0dG9uMzogdHJ1ZSwgYnV0dG9uNDogZmFsc2UsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbkRlc2t0b3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3lBeGlzJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneEF4aXMnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3aWRnZXQuZGVza3RvcFBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5kZXNrdG9wUG9zaXRpb24ueEF4aXMgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmVzc2VkT2JqZWN0KHsgYnV0dG9uMTogZmFsc2UsIGJ1dHRvbjI6IGZhbHNlLCBidXR0b24zOiBmYWxzZSwgYnV0dG9uNDogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uRGVza3RvcCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAneUF4aXMnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4QXhpcyc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAndG9wJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogdHJ1ZSwgYnV0dG9uNjogZmFsc2UsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICd0b3AnICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNDogZmFsc2UsIGJ1dHRvbjY6IHRydWUsIGJ1dHRvbjc6IGZhbHNlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpZGdldC5tb2JpbGVQb3NpdGlvbi55QXhpcyA9PSAnYm90dG9tJyAmJiB3aWRnZXQubW9iaWxlUG9zaXRpb24ueEF4aXMgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiB0cnVlLCBidXR0b244OiBmYWxzZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod2lkZ2V0Lm1vYmlsZVBvc2l0aW9uLnlBeGlzID09ICdib3R0b20nICYmIHdpZGdldC5tb2JpbGVQb3NpdGlvbi54QXhpcyA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXNzZWRPYmplY3QyKHsgYnV0dG9uNTogZmFsc2UsIGJ1dHRvbjY6IGZhbHNlLCBidXR0b243OiBmYWxzZSwgYnV0dG9uODogdHJ1ZSwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uTW9iaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd5QXhpcyc6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hBeGlzJzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2NvbG9yID0gaGV4VG9Ic2wod2lkZ2V0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb2xvclBsdXMoeyBodWU6IGNjb2xvci5oLCBzYXR1cmF0aW9uOiAoY2NvbG9yLnMgLyAxMDApLCBicmlnaHRuZXNzOiAoY2NvbG9yLmwgLyAxMDApIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvblZhbHVlKHdpZGdldC5ub3RpZmljYXRpb25UZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXRWYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uVGltZW91dClcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdmF0YXJWYWx1ZSh3aWRnZXQubm90aWZpY2F0aW9uQXZhdGFyKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwod2lkZ2V0LmRlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKHdpZGdldC5tb2JpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0RW5hYmxlZCh3aWRnZXQud2lkZ2V0RW5hYmxlZClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHdpZGdldC5kZXNrdG9wUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHdpZGdldC5tb2JpbGVQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiB3aWRnZXQubm90aWZpY2F0aW9uVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB3aWRnZXQubm90aWZpY2F0aW9uVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IHdpZGdldC5ub3RpZmljYXRpb25BdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB3aWRnZXQubW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHdpZGdldC5kZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aWRnZXQuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0LndpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgICAgIHNldEZpcnN0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RvcCAmJiBkYXRhLnNjcmlwdFRhZ3MuZWRnZXNbMF0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdWJsdSBjYWNhdFwiKVxyXG4gICAgICAgIGNyZWF0ZVNjcmlwdHMoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmxTY3JpcHRUYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTY29wZTogXCJBTExcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT1cIldpZGdldCBTZXR0aW5nc1wiID5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvYXN0TWFya3VwfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiIHNwYWNpbmc9XCJleHRyYUxvb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aWRnZXRFbmFibGVkKSA/IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZVRpY2tNYWpvck1vbm90b25lfSAvPjxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EaXNjb3JkIFdpZGdldCBpcyA8YiBzdHlsZT17eyBjb2xvcjogJyM1MGI4M2MnIH19PmVuYWJsZWQ8L2I+PC9EaXNwbGF5VGV4dD48L1N0YWNrPiA6IDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj48SWNvbiBzb3VyY2U9e0NpcmNsZUFsZXJ0TWFqb3JNb25vdG9uZX0gLz48RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+RGlzY29yZCBXaWRnZXQgaXMgPGIgc3R5bGU9e3sgY29sb3I6ICcjZGUzNjE4JyB9fT5kaXNhYmxlZDwvYj48L0Rpc3BsYXlUZXh0PjwvU3RhY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh2YWxJRCAhPSAnJykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt3aWRnZXRFbmFibGVkfSBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsSUQgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldEVuYWJsZWQoIXdpZGdldEVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6ICF3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VBcGlDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5icmlnaHRuZXNzLCBjb2xvci5zYXR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiAhd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2hvcFVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbElEICE9ICcnKSA/IDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkRldmljZSBTZXR0aW5nczwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaG93IG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVza3RvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgIW1vYmlsZVZhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlVmFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVWYWwgJiYgIWRlc2t0b3BWYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Rlc2t0b3BWYWwgJiYgbW9iaWxlVmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGV4dDogbm90aWZpY2F0aW9uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdGltZW91dFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogYXZhdGFyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3Iuc2F0dXJhdGlvbiwgY29sb3IuYnJpZ2h0bmVzcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0RW5hYmxlZDogd2lkZ2V0RW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vYmlsZVZhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlc2t0b3BWYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiZXh0cmFUaWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj5EZXNrdG9wIFBsYWNlbWVudDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjEnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMScpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQoJ2J1dHRvbjInKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uMicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uMycpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b24zJykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzcyODlEQScgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZCgnYnV0dG9uNCcpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b240JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJleHRyYVRpZ2h0XCIgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPk1vYmlsZSBQbGFjZW1lbnQ8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXtidXR0b25QcmVzc2VkMignYnV0dG9uNScpfSBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrKCdidXR0b241JykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjYnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNicpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzI4OURBJyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJlc3NlZD17YnV0dG9uUHJlc3NlZDIoJ2J1dHRvbjcnKX0gb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGljaygnYnV0dG9uNycpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9e2J1dHRvblByZXNzZWQyKCdidXR0b244Jyl9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2soJ2J1dHRvbjgnKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM3Mjg5REEnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPkFwcGVhcmFuY2UgU2V0dGluZ3M8L2I+PC9EaXNwbGF5VGV4dD59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIHZlcnRpY2FsID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXIgb25DaGFuZ2U9e3NldENvbG9yUGx1c30gY29sb3I9e2NvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvclBsdXMoeyBodWU6IDIyNywgc2F0dXJhdGlvbjogMC41OCwgYnJpZ2h0bmVzczogMC42NSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IERpc2NvcmQgUHVycGxlIENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5XaWRnZXQgTG9nbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzk5YWFiNScsIGJvcmRlclJhZGl1czogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCJ0aWdodFwiIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXNlbGVjdFwiIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2Z1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzLzFjOGE1NGYyNWQxMDFiZGM2MDdjZWM3MjI4MjQ3YTlhLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogdGhlbWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wOiBkZXNrdG9wVmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29QcmVzc2VkT2JqZWN0KHsgbG9nbzE6IHRydWUsIGxvZ28yOiBmYWxzZSwgbG9nbzM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvVXJsKCdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy8xYzhhNTRmMjVkMTAxYmRjNjA3Y2VjNzIyODI0N2E5YS5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3aWR0aD17KGxvZ29QcmVzc2VkT2JqZWN0LmxvZ28xKSA/IFwiODBcIiA6IFwiNjBcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdC1zZWxlY3RcIiBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmdcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVBvc2l0aW9uOiBwb3NpdGlvbk1vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICdodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZTogbW9iaWxlVmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dvUHJlc3NlZE9iamVjdCh7IGxvZ28xOiBmYWxzZSwgbG9nbzI6IHRydWUsIGxvZ28zOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1VybCgnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvNDE0ODRkOTJjODc2Zjc2YjIwYzdmNzQ2MjIxZTgxNTEuc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2lkdGg9eyhsb2dvUHJlc3NlZE9iamVjdC5sb2dvMikgPyBcIjgwXCIgOiBcIjYwXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcFBvc2l0aW9uOiBwb3NpdGlvbkRlc2t0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiB0aGVtZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nb1ByZXNzZWRPYmplY3QoeyBsb2dvMTogZmFsc2UsIGxvZ28yOiBmYWxzZSwgbG9nbzM6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ29VcmwoJ2h0dHBzOi8vZGlzY29yZC5jb20vYXNzZXRzL2Y4Mzg5Y2ExYTc0MWExMTUzMTNiZWRlOWFjMDJlMmMwLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdpZHRoPXsobG9nb1ByZXNzZWRPYmplY3QubG9nbzMpID8gXCI4MFwiIDogXCI2MFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaWRnZXQgVGhlbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc2VnbWVudGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmVzc2VkPXt0aGVtZURhcmt9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBsb2dvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVOYW1lKFwiZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZURhcmsodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EYXJrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByZXNzZWQ9eyF0aGVtZURhcmt9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBsb2dvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lTmFtZShcImxpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lRGFyayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MaWdodDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+RGlzY291bnQgZm9yIEpvaW5pbmcgU2VydmVyPC9iPjwvRGlzcGxheVRleHQ+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGlzY291bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2ljQ29kZURpc2NvdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllc09uY2VQZXJDdXN0b21lcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBcIkRJU0NPUkQxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyU2VsZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJHZXRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEaXNjb3JkIERpc2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNhZ2VMaW1pdDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHNBdDogXCIyMDE5LTA3LTAzVDIwOjQ3OjU1WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIERpc2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17PERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxiPldpZGdldCBOb3RpZmljYXRpb25zPC9iPjwvRGlzcGxheVRleHQ+fSBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm90aWZpY2F0aW9uIFRleHRcIiB2YWx1ZT17bm90aWZpY2F0aW9uVmFsdWV9IG9uQ2hhbmdlPXsodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uVmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQ6IHRpbWVvdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQXZhdGFyOiBhdmF0YXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBtb2JpbGVWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3A6IGRlc2t0b3BWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLmJyaWdodG5lc3MsIGNvbG9yLnNhdHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRFbmFibGVkOiB3aWRnZXRFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGNyZWF0ZSBoeXBlcmxpbmtzIHVzaW5nIG1hcmtkb3duIGxpa2Ugc286IFt0ZXh0XShsaW5rKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vdGlmaWNhdGlvbiBUaW1lb3V0IChtaWxpc2Vjb25kcylcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3RpbWVvdXRWYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0VmFsdWUodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRnZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNrdG9wUG9zaXRpb246IHBvc2l0aW9uRGVza3RvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlUG9zaXRpb246IHBvc2l0aW9uTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UZXh0OiBub3RpZmljYXRpb25WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uVGltZW91dDogdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25BdmF0YXI6IGF2YXRhclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJOb3RpZmljYXRpb24gQXZhdGFyIFVSTFwiIHZhbHVlPXthdmF0YXJWYWx1ZX0gb25DaGFuZ2U9eyh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdmF0YXJWYWx1ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFdpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2t0b3BQb3NpdGlvbjogcG9zaXRpb25EZXNrdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVQb3NpdGlvbjogcG9zaXRpb25Nb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblRleHQ6IG5vdGlmaWNhdGlvblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UaW1lb3V0OiB0aW1lb3V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkF2YXRhcjogdmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IG1vYmlsZVZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVza3RvcDogZGVza3RvcFZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbFRvSGV4KGNvbG9yLmh1ZSwgY29sb3IuYnJpZ2h0bmVzcywgY29sb3Iuc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEVuYWJsZWQ6IHdpZGdldEVuYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRBdmF0YXJWYWx1ZSgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vZW1iZWQvYXZhdGFycy8wLnBuZycpIH19PlNldCBEZWZhdWx0IERpc2NvcmQgTG9nbyBBdmF0YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkIHRpdGxlPXs8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PGI+SGVscCBhbmQgQ29udGFjdDwvYj48L0Rpc3BsYXlUZXh0Pn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Gb3IgYW55IGtpbmRzIG9mIGlzc3VlcyBvciBzdWdnZXN0aW9ucywgeW91IGNhbiBlbWFpbCB1cyBhdCA8Yj5ibGF6ZXNvZnR3b3JrczdAZ21haWwuY29tPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPklmIHlvdXIgd2lkZ2V0IGRvZXNuJ3QgbG9hZCwgcGxlYXNlIGNoZWNrIGlmIHlvdSd2ZSBlbnRlcmVkIHRoZSBjb3JyZWN0IElEcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHRoZSBpc3N1ZSBwZXJzaXN0cyBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB3aXRoIGEgc2NyZWVuc2hvdCBvZiBlYWNoIG9mIHRoZSBhcHAncyBwYWdlcyB3aXRoIHlvdXIgc2V0dGluZ3MgYW5kIHlvdXIgc3RvcmUncyBuYW1lIGFuZCB3ZSdsbCBnbGFkbHkgaGVscCB5b3Ugc29sdmUgdGhlIHByb2JsZW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgYXJlIG5vdCBhZmZpbGlhdGVkIHdpdGggZWl0aGVyIDxpPldpZGdldGJvdDwvaT4gb3IgPGk+RGlzY29yZDwvaT4uIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCA8aT5XaWRnZXRib3Q8L2k+IGFuZCBzdXBwb3J0IHRoZW0gZm9yIGV4dHJhIGZlYXR1cmVzIDxiPjxhIGhyZWY9XCJodHRwczovL3dpZGdldGJvdC5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPjwvYj4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3kgb2Zmc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTlhYWI1JywgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cImNlbnRlclwiIGFsaWdubWVudD1cImNlbnRlclwiIHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+UHJlc3MgdGhlIGJ1dHRvbnMgYmVsbG93IGFmdGVyIGV2ZXJ5IGNoYW5nZSB0byBzZWUgdGhlIHByZXZpZXc8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+UHJlc3MgdGhlIGJ1dHRvbiBiZWxsb3cgYWZ0ZXIgZXZlcnkgY2hhbmdlIHRvIHNlZSB0aGUgcHJldmlldzwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzZWdtZW50ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT1cInNsaW1cIiBwcmVzc2VkPXtkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyh0cnVlKTsgaWYgKHZhbElEICE9ICcnKSB7IHJldHVybklmcmFtZSh0cnVlKTsgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpOyB9IH19PkdlbmVyYXRlIERlc2t0b3A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPVwic2xpbVwiIHByZXNzZWQ9eyFkZXNrdG9wUHJldmlld30gb25DbGljaz17KCkgPT4geyBzZXREZXNrdG9wUHJldmlldyhmYWxzZSk7IGlmICh2YWxJRCAhPSAnJykgeyByZXR1cm5JZnJhbWUoZmFsc2UpOyBzZXRGaXJzdFJlbmRlcihmYWxzZSk7IH0gfX0+R2VuZXJhdGUgTW9iaWxlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkZpcnN0SWZyYW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj17KCFkZXNrdG9wUHJldmlldykgPyBcImNlbnRlclwiIDogXCJmaWxsXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJldmlld2RpdlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCIgc3BhY2luZz1cImV4dHJhTG9vc2VcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzdmcgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiMzBcIiBmaWxsPXtoc2xUb0hleChjb2xvci5odWUsIGNvbG9yLnNhdHVyYXRpb24sIGNvbG9yLmJyaWdodG5lc3MpfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvY2lyY2xlPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9zdmc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAjNzI4OURBICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaHNsVG9IZXgoY29sb3IuaHVlLCBjb2xvci5zYXR1cmF0aW9uLCBjb2xvci5icmlnaHRuZXNzKSB9fSBjbGFzc05hbWU9XCJkb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJjZW50ZXJcIiBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRpc2xvZ28ucG5nXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNDBweFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsSUQgIT0gJycpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGltZyBjbGFzc05hbWU9XCJub3Qtc2VsZWN0XCIgd2lkdGg9XCI4MFwiIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2dvUHJlc3NlZE9iamVjdC5sb2dvMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy8xYzhhNTRmMjVkMTAxYmRjNjA3Y2VjNzIyODI0N2E5YS5zdmdcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobG9nb1ByZXNzZWRPYmplY3QubG9nbzIpID8gXCJodHRwczovL2Rpc2NvcmQuY29tL2Fzc2V0cy80MTQ4NGQ5MmM4NzZmNzZiMjBjN2Y3NDYyMjFlODE1MS5zdmdcIiA6IFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hc3NldHMvZjgzODljYTFhNzQxYTExNTMxM2JlZGU5YWMwMmUyYzAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IC8+IDogPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9TdGFjaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAnOTknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0Y0RjZGOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjREZFM0U4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dmFsSUQgPT0gJyd9IHNpemU9XCJzbGltXCIgcHJpbWFyeSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlQXBpQ2FsbCh3aWRnZXRPYmosIHNob3BVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIFNldHRpbmdzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic2xpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsU2NyaXB0VGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNjb3BlOiBcIkFMTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogUVVFUllfU0NSSVBUVEFHUyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBTY3JpcHRUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1NjcmlwdCcsIHBsdXJhbDogJ1NjcmlwdHMnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEuc2NyaXB0VGFncy5lZGdlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5vZGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU2NyaXB0cyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubm9kZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IFFVRVJZX1NDUklQVFRBR1MgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFNjcmlwdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNmY4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzc3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4IDI0cHggMjBweCAwcHgnXHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8L1BhZ2UgPlxyXG4gICAgICAgIDwvRnJhbWUgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRQYWdlO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==