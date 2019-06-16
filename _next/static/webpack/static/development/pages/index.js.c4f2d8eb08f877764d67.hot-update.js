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
        to: "quienes-somos",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1000
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
        name: "quienes-somos",
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
      }, ".banner.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:100px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin:0;max-width:200px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#408AB4;}.contenedor-titulo.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:10px;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:1.2em;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-weight:600;}.btn.__jsx-style-dynamic-selector{border:none;width:60%;padding:15px 35px;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-radius:34px;cursor:pointer;-webkit-transition:all .3s;transition:all .3s;font-size:100%;}.btn.__jsx-style-dynamic-selector:focus{outline:0;}.btn.__jsx-style-dynamic-selector:hover{background-color:#113F67;box-shadow:0 12px 14px 0 rgba(0,0,0,0.30);}.btn-primary.__jsx-style-dynamic-selector{color:white;background-color:#65C6C4;}.btn-secondary.__jsx-style-dynamic-selector{color:white;background-color:#113F67;}.contenedor-titulo-rayita.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#408AB4;font-weight:600;margin-top:5%;}.img-instrucciones.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70%;}.instrucciones.__jsx-style-dynamic-selector{width:80%;font-size:1em;font-weight:bold;color:#113F67;}.instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{list-style:none;border-style:solid;}.instrucciones.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{padding:10px;}@media ".concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:300px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:40%;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;text-align:left;}.titulo.__jsx-style-dynamic-selector{width:100%;text-align:left;}.img-instrucciones.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:45%;height:30%;}.instrucciones.__jsx-style-dynamic-selector{width:90%;font-size:.9em;font-weight:bold;}}@media ").concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.contenedor-titulo.__jsx-style-dynamic-selector{width:45%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;left:2%;}.imagen-principal.__jsx-style-dynamic-selector{width:40%;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:600px;position:relative;left:-2%;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:2.1em;text-align:left;}.contenedor-titulo.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;}.titulo-rayita.__jsx-style-dynamic-selector{font-size:1.5em;}.img-instrucciones.__jsx-style-dynamic-selector{width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img-instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{font-size:1em;width:40%;}.img-instrucciones.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1em;position:relative;left:10px;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhcm9uL0RvY3VtZW50b3MvR2l0aHViL2ZpbGlwcGluaV9ob3NwaXRhbGFyaW8vQ2xpZW50L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJId0IsQUFJdUMsQUFTRSxBQUtKLEFBTUMsQUFTRSxBQUtLLEFBTUosQUFXSCxBQUlnQixBQUtiLEFBS0EsQUFLRCxBQVdDLEFBTUYsQUFLQSxBQVFNLEFBS0gsQUFLaUIsQUFJVixBQUlQLEFBTUMsQUFLUSxBQUlULEFBTUMsQUFXZ0IsQUFJaEIsQUFPQSxBQUlNLEFBTUEsQUFLTixBQUtLLEFBSUwsQUFLSSxBQUtBLEFBTUwsU0ExTEcsQ0FNSixBQStCaEIsQUFvQ0EsQUFLa0IsQUEwQlUsQUFlVCxBQU1JLEFBZU8sQUFPMUIsQUF3Q0EsQ0F6TVksQUFzRUEsQUFzRE8sQUFvRG5CLEFBU3NCLENBNUoxQixBQVdhLEFBb0JnQixBQUtBLENBd0M3QixDQXFGaUIsQUFLUSxFQWpLRixBQWtFQSxBQWNuQixBQW1EcUIsQUFNRixBQVVuQixLQS9DQSxDQTdGa0IsRUFvREYsQUFrR2hCLENBaExKLEFBd0M4QyxBQXFGdEIsRUFmcEIsS0ErQ0EsQUF3QmMsRUE5QkYsQ0FqRWhCLEVBeENBLEFBS0EsR0F4QnNCLENBb0RMLENBK0NiLEFBd0RBLENBOUJBLFlBeEVKLEdBcER5QixTQWF6QixFQXlFSSxLQXhIcUIsQUF3RUEsTUF5R0ssSUFyS0wsQ0FwQkMsQUFzRU4sUUF1Q2hCLEFBd0NBLFFBOUVzQixBQStDSCxPQTNFQSxDQVRILFFBcUZoQixFQW1DcUIsTUF2SHpCLEVBU2tCLFVBK0dILEtBOUdRLEdBK0duQixPQW5KSixBQXdFdUIsVUE1REcsaUJBcUt0QixLQXpMaUIsSUE2Q0YsWUEwQkQsRUF0RUksQ0E2Q3RCLFdBMEJvQixnQkFDRixjQUNsQixDQU9BLGdCQTVEcUIsa0JBQ0gsY0FDbEIsRUFyQnlCLDhFQUN6QiIsImZpbGUiOiIvaG9tZS9hYXJvbi9Eb2N1bWVudG9zL0dpdGh1Yi9maWxpcHBpbmlfaG9zcGl0YWxhcmlvL0NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0ICB7IExpbmsgfSAgZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IFByb2R1Y3Rvc0xheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3Rvc0xheW91dCc7XG5pbXBvcnQgUHJvZHVjdG8gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0byc7XG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcbmltcG9ydCB7IExpbmsgYXMgQW5pbWF0ZWRMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zb2xlLmxvZygn8J+agCBDb2RlZCB3aXRoIGxvdmUgYnkgVGhlIFllbGxvdyBDb2RlJylcbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKCk7IFxuICAgIH07XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiRmlsaXBwaW5pXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XG5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZW4tcHJpbmNpcGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvdW5kcmF3X21lZGljaW5lLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yLXRpdHVsb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXR1bG9cIj4gRmFicmljYW50ZXMgZGUgbmVnYXRvc2NvcGlvcyB5IG1vYmlsaWFyaW8gaG9zcGl0YWxhcmlvIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFRleHRvIHBhcmEgbGxlbmFyIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cInF1aWVuZXMtc29tb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPSB7MTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPiBDb25vY2VyIE3DoXMgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPiAgXG5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluTGVmdFwiIGFuaW1hdGVPbmNlPXt0cnVlfSBkdXJhdGlvbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItdGl0dWxvLXJheWl0YVwiIHJvbGU9XCJtYWluXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXR1bG8tcmF5aXRhXCI+UHJvZHVjdG9zIERlc3RhY2Fkb3M8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblJpZ2h0IFwiIGFuaW1hdGVPbmNlPXt0cnVlfSBkdXJhdGlvbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0b3NMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cInN0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgIDwvUHJvZHVjdG9zTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5cIiBhbmltYXRlT25jZT17dHJ1ZX0gZHVyYXRpb249ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29tby1jb21wcmFyXCIgbmFtZT1cInF1aWVuZXMtc29tb3NcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yLXRpdHVsby1yYXlpdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXR1bG8tcmF5aXRhXCI+wr9Dw7NtbyBDb21wcmFyPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctaW5zdHJ1Y2Npb25lc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL0NvbXByYXMuc3ZnXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJpbnN0cnVjY2lvbmVzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc3RlZCBkZWJlIGNvbnRhY3RhcnNlIGNvbiBub3NvdHJvcyBhIHRyYXbDqXMgZGUgbG9zIG1lZGlvcyBxdWUgbGUgb2ZyZWNlbW9zLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZWJlIHJlYWxpemFyIGVsIGRlcG9zaXRvIGVuIG51ZXN0cmEgY3VlbnRhIGJhbmNhcmlhLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ob3MgZW52w61hIHVuYSBjb3BpYSBkZWwgY29tcHJvYmFudGUgZGUgZGVww7NzaXRvIHkvbyB0cmFuc2ZlcmVuY2lhLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VbmEgdmV6IGFjcmVkaXRhZG8gZWwgcGFnbyBzZSBwcm9jZWRlIGFsIGVtYmFsYWplIHkgZGVzcGFjaG8gZGVsIGFydMOtY3Vsby48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGVzcGFjaGFtb3Mgc3UgcHJvZHVjdG8gcG9yIHVuYSBlbXByZXNhIGRlIGVuY29taWVuZGFzLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VZC4gcmVjaWJlIHN1IHByb2R1Y3RvIGVuIGxhIHRlcm1pbmFsIGRlIHN1IGxvY2FsaWRhZCB5IGFib25hIGVsIHZhbG9yIGRlIGxhIGVuY29taWVuZGEuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFtYmnDqW4gcHVlZGUgcmV0aXJhciBlbCBwcm9kdWN0byBwZXJzb25hbG1lbnRlIGVuIFZpbGxhIERldm90byB5IHBhZ2FyIGFoaSBtaXNtbyBlbiBlZmVjdGl2by48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNpIHJlc2lkZSBlbiBDYXBpdGFsIEZlZGVyYWwgbyBlbiBHcmFuIEJ1ZW5vcyBBaXJlcyBwdWVkZSBzb2xpY2l0YXIgZWwgZW52w61vIGRlbCBwcm9kdWN0byBlbiBtb3RvIChhIGNhcmdvIGRlbCBjb21wcmFkb3IpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Fc3RhbW9zIGEgc3UgZGlzcG9zaWNpw7NuIHBhcmEgY3VhbHF1aWVyIGNvbnN1bHRhLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XG5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIC5pbWFnZW4tcHJpbmNpcGFsIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsb3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDA4QUI0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8gPiAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8gLnRpdHVsb3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuOmZvY3Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzRjY3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNHB4IDAgcmdiYSgwLDAsMCwwLjMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVDNkM0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZWNvbmRhcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNGNjc7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8tcmF5aXRhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDhBQjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMTNGNjc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXMgb2x7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y2Npb25lcyBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbCBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsb3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjY2lvbmVze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UuZGVza3RvcH17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlbi1wcmluY2lwYWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgLmltYWdlbi1wcmluY2lwYWwgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyBidXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0dWxvLXJheWl0YXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgb2x7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/home/aaron/Documentos/Github/filippini_hospitalario/Client/pages/index.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c4f2d8eb08f877764d67.hot-update.js.map