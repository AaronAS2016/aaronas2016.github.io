webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../breakpoints */ "./breakpoints.js");
/* harmony import */ var _components_ProductosLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ProductosLayout */ "./components/ProductosLayout.js");
/* harmony import */ var _components_Producto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Producto */ "./components/Producto.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_18__);




















var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToTop", function () {
      react_scroll__WEBPACK_IMPORTED_MODULE_18__["animateScroll"].scrollToTop();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('🚀 Coded with love by The Yellow Code');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Filippini"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "fadeIn",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "banner"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "imagen-principal"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/undraw_medicine.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo"
      }, " Fabricantes de negatoscopios y mobiliario hospitalario "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, " Texto para llenar "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_18__["Link"], {
        activeClass: "active",
        to: "section1",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "btn btn-primary"
      }, " Conocer M\xE1s ")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "fadeInLeft",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        role: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "Productos Destacados"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "fadeInRight ",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProductosLayout__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "static/camilla.png",
        id: "1"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "bounceIn",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "como-comprar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "\xBFC\xF3mo Comprar?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "img-instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/Compras.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ol", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Usted debe contactarse con nosotros a trav\xE9s de los medios que le ofrecemos."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Debe realizar el deposito en nuestra cuenta bancaria."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Nos env\xEDa una copia del comprobante de dep\xF3sito y/o transferencia."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Una vez acreditado el pago se procede al embalaje y despacho del art\xEDculo."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Despachamos su producto por una empresa de encomiendas."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Ud. recibe su producto en la terminal de su localidad y abona el valor de la encomienda."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Tambi\xE9n puede retirar el producto personalmente en Villa Devoto y pagar ahi mismo en efectivo."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Si reside en Capital Federal o en Gran Buenos Aires puede solicitar el env\xEDo del producto en moto (a cargo del comprador)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3388240792", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Estamos a su disposici\xF3n para cualquier consulta."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3388240792",
        dynamic: [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]
      }, ".banner.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:100px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin:0;max-width:200px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#408AB4;}.contenedor-titulo.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:10px;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:1.2em;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-weight:600;}.btn.__jsx-style-dynamic-selector{border:none;width:60%;padding:15px 35px;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-radius:34px;cursor:pointer;-webkit-transition:all .3s;transition:all .3s;font-size:100%;}.btn.__jsx-style-dynamic-selector:focus{outline:0;}.btn.__jsx-style-dynamic-selector:hover{background-color:#113F67;box-shadow:0 12px 14px 0 rgba(0,0,0,0.30);}.btn-primary.__jsx-style-dynamic-selector{color:white;background-color:#65C6C4;}.btn-secondary.__jsx-style-dynamic-selector{color:white;background-color:#113F67;}.contenedor-titulo-rayita.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#408AB4;font-weight:600;margin-top:5%;}.img-instrucciones.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70%;}.instrucciones.__jsx-style-dynamic-selector{width:80%;font-size:1em;font-weight:bold;color:#113F67;}.instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{list-style:none;border-style:solid;}.instrucciones.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{padding:10px;}@media ".concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:300px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:40%;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;text-align:left;}.titulo.__jsx-style-dynamic-selector{width:100%;text-align:left;}.img-instrucciones.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:45%;height:30%;}.instrucciones.__jsx-style-dynamic-selector{width:90%;font-size:.9em;font-weight:bold;}}@media ").concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.contenedor-titulo.__jsx-style-dynamic-selector{width:45%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;left:2%;}.imagen-principal.__jsx-style-dynamic-selector{width:40%;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:600px;position:relative;left:-2%;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:2.1em;text-align:left;}.contenedor-titulo.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;}.titulo-rayita.__jsx-style-dynamic-selector{font-size:1.5em;}.img-instrucciones.__jsx-style-dynamic-selector{width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img-instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{font-size:1em;width:40%;}.img-instrucciones.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1em;position:relative;left:10px;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhcm9uL0RvY3VtZW50b3MvR2l0aHViL2ZpbGlwcGluaV9ob3NwaXRhbGFyaW8vQ2xpZW50L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJId0IsQUFJdUMsQUFTRSxBQUtKLEFBTUMsQUFTRSxBQUtLLEFBTUosQUFXSCxBQUlnQixBQUtiLEFBS0EsQUFLRCxBQVdDLEFBTUYsQUFLQSxBQVFNLEFBS0gsQUFLaUIsQUFJVixBQUlQLEFBTUMsQUFLUSxBQUlULEFBTUMsQUFXZ0IsQUFJaEIsQUFPQSxBQUlNLEFBTUEsQUFLTixBQUtLLEFBSUwsQUFLSSxBQUtBLEFBTUwsU0ExTEcsQ0FNSixBQStCaEIsQUFvQ0EsQUFLa0IsQUEwQlUsQUFlVCxBQU1JLEFBZU8sQUFPMUIsQUF3Q0EsQ0F6TVksQUFzRUEsQUFzRE8sQUFvRG5CLEFBU3NCLENBNUoxQixBQVdhLEFBb0JnQixBQUtBLENBd0M3QixDQXFGaUIsQUFLUSxFQWpLRixBQWtFQSxBQWNuQixBQW1EcUIsQUFNRixBQVVuQixLQS9DQSxDQTdGa0IsRUFvREYsQUFrR2hCLENBaExKLEFBd0M4QyxBQXFGdEIsRUFmcEIsS0ErQ0EsQUF3QmMsRUE5QkYsQ0FqRWhCLEVBeENBLEFBS0EsR0F4QnNCLENBb0RMLENBK0NiLEFBd0RBLENBOUJBLFlBeEVKLEdBcER5QixTQWF6QixFQXlFSSxLQXhIcUIsQUF3RUEsTUF5R0ssSUFyS0wsQ0FwQkMsQUFzRU4sUUF1Q2hCLEFBd0NBLFFBOUVzQixBQStDSCxPQTNFQSxDQVRILFFBcUZoQixFQW1DcUIsTUF2SHpCLEVBU2tCLFVBK0dILEtBOUdRLEdBK0duQixPQW5KSixBQXdFdUIsVUE1REcsaUJBcUt0QixLQXpMaUIsSUE2Q0YsWUEwQkQsRUF0RUksQ0E2Q3RCLFdBMEJvQixnQkFDRixjQUNsQixDQU9BLGdCQTVEcUIsa0JBQ0gsY0FDbEIsRUFyQnlCLDhFQUN6QiIsImZpbGUiOiIvaG9tZS9hYXJvbi9Eb2N1bWVudG9zL0dpdGh1Yi9maWxpcHBpbmlfaG9zcGl0YWxhcmlvL0NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0ICB7IExpbmsgfSAgZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IFByb2R1Y3Rvc0xheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3Rvc0xheW91dCc7XG5pbXBvcnQgUHJvZHVjdG8gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0byc7XG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcbmltcG9ydCB7IExpbmsgYXMgQW5pbWF0ZWRMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZygn8J+agCBDb2RlZCB3aXRoIGxvdmUgYnkgVGhlIFllbGxvdyBDb2RlJylcbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKCk7IFxuICAgIH07XG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIkZpbGlwcGluaVwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuXG5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGFuaW1hdGVPbmNlPXt0cnVlfSBkdXJhdGlvbj17Mn0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VuLXByaW5jaXBhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL3VuZHJhd19tZWRpY2luZS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvci10aXR1bG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvXCI+IEZhYnJpY2FudGVzIGRlIG5lZ2F0b3Njb3Bpb3MgeSBtb2JpbGlhcmlvIGhvc3BpdGFsYXJpbyA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBUZXh0byBwYXJhIGxsZW5hciA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJzZWN0aW9uMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249IHs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gQ29ub2NlciBNw6FzIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj4gIFxuXG5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJbkxlZnRcIiBhbmltYXRlT25jZT17dHJ1ZX0gZHVyYXRpb249ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW5lZG9yLXRpdHVsby1yYXlpdGFcIiByb2xlPVwibWFpblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0dWxvLXJheWl0YVwiPlByb2R1Y3RvcyBEZXN0YWNhZG9zPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5SaWdodCBcIiBhbmltYXRlT25jZT17dHJ1ZX0gZHVyYXRpb249ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG9zTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCJzdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICA8L1Byb2R1Y3Rvc0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImJvdW5jZUluXCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW8tY29tcHJhclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItdGl0dWxvLXJheWl0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdHVsby1yYXlpdGFcIj7Cv0PDs21vIENvbXByYXI/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1pbnN0cnVjY2lvbmVzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvQ29tcHJhcy5zdmdcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluc3RydWNjaW9uZXNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzdGVkIGRlYmUgY29udGFjdGFyc2UgY29uIG5vc290cm9zIGEgdHJhdsOpcyBkZSBsb3MgbWVkaW9zIHF1ZSBsZSBvZnJlY2Vtb3MuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRlYmUgcmVhbGl6YXIgZWwgZGVwb3NpdG8gZW4gbnVlc3RyYSBjdWVudGEgYmFuY2FyaWEuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vcyBlbnbDrWEgdW5hIGNvcGlhIGRlbCBjb21wcm9iYW50ZSBkZSBkZXDDs3NpdG8geS9vIHRyYW5zZmVyZW5jaWEuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVuYSB2ZXogYWNyZWRpdGFkbyBlbCBwYWdvIHNlIHByb2NlZGUgYWwgZW1iYWxhamUgeSBkZXNwYWNobyBkZWwgYXJ0w61jdWxvLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXNwYWNoYW1vcyBzdSBwcm9kdWN0byBwb3IgdW5hIGVtcHJlc2EgZGUgZW5jb21pZW5kYXMuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVkLiByZWNpYmUgc3UgcHJvZHVjdG8gZW4gbGEgdGVybWluYWwgZGUgc3UgbG9jYWxpZGFkIHkgYWJvbmEgZWwgdmFsb3IgZGUgbGEgZW5jb21pZW5kYS48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYW1iacOpbiBwdWVkZSByZXRpcmFyIGVsIHByb2R1Y3RvIHBlcnNvbmFsbWVudGUgZW4gVmlsbGEgRGV2b3RvIHkgcGFnYXIgYWhpIG1pc21vIGVuIGVmZWN0aXZvLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2kgcmVzaWRlIGVuIENhcGl0YWwgRmVkZXJhbCBvIGVuIEdyYW4gQnVlbm9zIEFpcmVzIHB1ZWRlIHNvbGljaXRhciBlbCBlbnbDrW8gZGVsIHByb2R1Y3RvIGVuIG1vdG8gKGEgY2FyZ28gZGVsIGNvbXByYWRvcik8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzdGFtb3MgYSBzdSBkaXNwb3NpY2nDs24gcGFyYSBjdWFscXVpZXIgY29uc3VsdGEuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIC5pbWFnZW4tcHJpbmNpcGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgLmltYWdlbi1wcmluY2lwYWwgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDhBQjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyA+ICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG46Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNGNjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDE0cHggMCByZ2JhKDAsMCwwLDAuMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuLXByaW1hcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NUM2QzQ7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuLXNlY29uZGFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExM0Y2NzsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsby1yYXlpdGF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQwOEFCNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lcyBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y2Npb25lc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IzExM0Y2NztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y2Npb25lcyBvbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjY2lvbmVzIGxpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIC5pbWFnZW4tcHJpbmNpcGFsIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAke2RldmljZS5kZXNrdG9wfXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG97XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1hZ2VuLXByaW5jaXBhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbCBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0yJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxvIC50aXR1bG97XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxvIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXR1bG8tcmF5aXRhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lcyBvbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lcyBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=/home/aaron/Documentos/Github/filippini_hospitalario/Client/pages/index.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.1e72957b8cb68e1dcac1.hot-update.js.map