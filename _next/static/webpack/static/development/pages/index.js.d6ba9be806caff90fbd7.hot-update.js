webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_icons_CodeWars_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/icons/CodeWars.svg */ "./public/icons/CodeWars.svg");
/* harmony import */ var _public_ReverseRibbon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/ReverseRibbon.png */ "./public/ReverseRibbon.png");
var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\PhpstormProjects\\Traning\\nextportfolio\\components\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Menu__Wrapper",
  componentId: "sc-1hvodif-0"
})(["background-color:#231d1c;font-family:Scribble,\"Segoe UI\",serif;display:flex;flex-direction:column;align-items:center;border-radius:4px;img.ReverseRibbon{width:100%;height:100%;object-fit:cover;object-position:0 0;position:relative;top:5px;}div.head{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;align-items:center;height:75px;font-size:30px;color:white;@media (max-width:700px){flex-wrap:wrap;font-size:20px;}@media (max-width:500px){display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;flex-wrap:nowrap;height:auto;line-height:2;font-size:30px;margin:20px 0;}div{a{color:white;div.button:hover{cursor:pointer;opacity:0.9;}}}}div.icons{height:40px;width:325px;display:flex;flex-direction:row;justify-content:space-evenly;align-items:start;margin-bottom:30px;margin-top:10px;@media (max-width:700px){flex-wrap:wrap;width:300px;}div.icon{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:start;a{i{transform:scale(3);color:white;}}a:hover{opacity:0.9;}}}"]);
var content = [{
  name: "HOME"
}, {
  name: "ABOUT"
}, {
  name: "PORTFOLIO"
}, {
  name: "CONTACTS"
}];

var Menu = function Menu() {
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, content.map(function (_ref) {
    var name = _ref.name;
    return __jsx("div", {
      key: name + name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#" + name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, name)));
  })), __jsx("div", {
    className: "icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/Automedon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-github display-4 text-white",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/frontreactdeveloper/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fa fa-linkedin display-4 text-white",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://www.codewars.com/users/Valefar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_icons_CodeWars_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    style: {
      width: "48px"
    },
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })))), __jsx("img", {
    className: "ReverseRibbon",
    src: _public_ReverseRibbon_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.d6ba9be806caff90fbd7.hot-update.js.map