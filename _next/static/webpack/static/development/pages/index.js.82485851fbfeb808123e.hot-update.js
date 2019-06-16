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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      navBarTrasparent: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('🚀 Coded with love by The Yellow Code');

      window.onscroll = function () {
        if (window.pageYOffset >= 100) {
          _this2.setState({
            navBarTrasparent: true
          });
        } else {
          _this2.setState({
            navBarTrasparent: false
          });
        }
      };
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "banner"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "imagen-principal"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/undraw_medicine.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo"
      }, " Fabricantes de negatoscopios y mobiliario hospitalario "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, " Texto para llenar "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "btn btn-primary"
      }, " Conocer M\xE1s "))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "fadeInLeft",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        role: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "Productos Destacados"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "fadeInRight ",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProductosLayout__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Producto__WEBPACK_IMPORTED_MODULE_16__["default"], {
        title: "Nombre del Producto",
        precio: "$199,99",
        imagen: "/static/camilla.png",
        id: "1"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_17___default.a, {
        animateIn: "bounceIn",
        animateOnce: true,
        duration: 2
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "como-comprar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "contenedor-titulo-rayita"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "titulo-rayita"
      }, "\xBFC\xF3mo Comprar?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "img-instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "static/Compras.svg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ol", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]]) + " " + "instrucciones"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Usted debe contactarse con nosotros a trav\xE9s de los medios que le ofrecemos."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Debe realizar el deposito en nuestra cuenta bancaria."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Nos env\xEDa una copia del comprobante de dep\xF3sito y/o transferencia."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Una vez acreditado el pago se procede al embalaje y despacho del art\xEDculo."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Despachamos su producto por una empresa de encomiendas."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Ud. recibe su producto en la terminal de su localidad y abona el valor de la encomienda."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Tambi\xE9n puede retirar el producto personalmente en Villa Devoto y pagar ahi mismo en efectivo."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Si reside en Capital Federal o en Gran Buenos Aires puede solicitar el env\xEDo del producto en moto (a cargo del comprador)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["455180931", [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]]])
      }, "Estamos a su disposici\xF3n para cualquier consulta."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "455180931",
        dynamic: [_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, _breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop]
      }, ".banner.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:100px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin:0;max-width:200px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#408AB4;}.contenedor-titulo.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:10px;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:1.2em;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-weight:600;}.btn.__jsx-style-dynamic-selector{border:none;width:60%;padding:15px 35px;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-radius:34px;cursor:pointer;-webkit-transition:all .3s;transition:all .3s;font-size:100%;}.btn.__jsx-style-dynamic-selector:hover{background-color:#113F67;box-shadow:0 12px 14px 0 rgba(0,0,0,0.30);}.btn-primary.__jsx-style-dynamic-selector{color:white;background-color:#65C6C4;}.btn-secondary.__jsx-style-dynamic-selector{color:white;background-color:#113F67;}.contenedor-titulo-rayita.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2em;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#408AB4;font-weight:600;margin-top:5%;}.img-instrucciones.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:70%;}.instrucciones.__jsx-style-dynamic-selector{width:80%;font-size:1em;font-weight:bold;color:#113F67;}.instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{list-style:none;border-style:solid;}.instrucciones.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{padding:10px;}@media ".concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].tablet, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:300px;}.contenedor-titulo.__jsx-style-dynamic-selector{width:40%;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;text-align:left;}.titulo.__jsx-style-dynamic-selector{width:100%;text-align:left;}.img-instrucciones.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:45%;height:30%;}.instrucciones.__jsx-style-dynamic-selector{width:90%;font-size:.9em;font-weight:bold;}}@media ").concat(_breakpoints__WEBPACK_IMPORTED_MODULE_14__["device"].desktop, "{.banner.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.contenedor-titulo.__jsx-style-dynamic-selector{width:45%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;left:2%;}.imagen-principal.__jsx-style-dynamic-selector{width:40%;}.banner.__jsx-style-dynamic-selector .imagen-principal.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:600px;position:relative;left:-2%;}.contenedor-titulo.__jsx-style-dynamic-selector .titulo.__jsx-style-dynamic-selector{font-size:2.1em;text-align:left;}.contenedor-titulo.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%;}.titulo-rayita.__jsx-style-dynamic-selector{font-size:1.5em;}.img-instrucciones.__jsx-style-dynamic-selector{width:100%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img-instrucciones.__jsx-style-dynamic-selector ol.__jsx-style-dynamic-selector{font-size:1em;width:40%;}.img-instrucciones.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:1em;position:relative;left:10px;}.img-instrucciones.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fhcm9uL0RvY3VtZW50b3MvR2l0aHViL2ZpbGlwcGluaV9ob3NwaXRhbGFyaW8vQ2xpZW50L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRId0IsQUFJdUMsQUFTRSxBQUtKLEFBTUMsQUFTRSxBQUtLLEFBTUosQUFZYSxBQUtiLEFBS0EsQUFLRCxBQVdDLEFBTUYsQUFLQSxBQVFNLEFBS0gsQUFLaUIsQUFJVixBQUlQLEFBTUMsQUFLUSxBQUlULEFBTUMsQUFXZ0IsQUFJaEIsQUFPQSxBQUlNLEFBTUEsQUFLTixBQUtLLEFBSUwsQUFLSSxBQUtBLEFBTUwsU0F2TEcsQ0FNSixBQWdFaEIsQUFLa0IsQUEwQlUsQUFlVCxBQU1JLEFBZU8sQUFPMUIsQUF3Q0EsQ0F0TVksQUFtRUEsQUFzRE8sQUFvRG5CLEFBU3NCLENBekoxQixBQVdhLEFBaUJnQixBQUtBLENBd0M3QixDQXFGaUIsQUFLUSxFQTlKRixBQStEQSxBQWNuQixBQW1EcUIsQUFNRixBQVVuQixLQS9DQSxDQTFGa0IsRUFpREYsQUFrR2hCLENBN0tKLEFBcUM4QyxBQXFGdEIsRUFmcEIsS0ErQ0EsQUF3QmMsRUE5QkYsQ0FqRWhCLEVBeENBLEFBS0EsR0FyQnNCLENBaURMLENBK0NiLEFBd0RBLENBOUJBLFlBeEVKLEdBakR5QixTQVV6QixFQXlFSSxLQXJIcUIsQUFxRUEsTUF5R0ssSUFsS0wsQ0FwQkMsQUFtRU4sUUF1Q2hCLEFBd0NBLFFBOUVzQixBQStDSCxPQXhFQSxDQVRILFFBa0ZoQixFQW1DcUIsTUFwSHpCLEVBU2tCLFVBNEdILEtBM0dRLEdBNEduQixPQWhKSixBQXFFdUIsVUF6REcsaUJBa0t0QixLQXRMaUIsSUE2Q0YsWUF1QkQsRUFuRUksQ0E2Q3RCLFdBdUJvQixnQkFDRixjQUNsQixDQU9BLGdCQXpEcUIsa0JBQ0gsY0FDbEIsRUFyQnlCLDhFQUN6QiIsImZpbGUiOiIvaG9tZS9hYXJvbi9Eb2N1bWVudG9zL0dpdGh1Yi9maWxpcHBpbmlfaG9zcGl0YWxhcmlvL0NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0ICB7IExpbmsgfSAgZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IFByb2R1Y3Rvc0xheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3Rvc0xheW91dCc7XG5pbXBvcnQgUHJvZHVjdG8gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0byc7XG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmF2QmFyVHJhc3BhcmVudCA6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ/CfmoAgQ29kZWQgd2l0aCBsb3ZlIGJ5IFRoZSBZZWxsb3cgQ29kZScpXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+e1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID49MTAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbmF2QmFyVHJhc3BhcmVudCA6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG5hdkJhclRyYXNwYXJlbnQgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiRmlsaXBwaW5pXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XG5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZW4tcHJpbmNpcGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL3VuZHJhd19tZWRpY2luZS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvci10aXR1bG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvXCI+IEZhYnJpY2FudGVzIGRlIG5lZ2F0b3Njb3Bpb3MgeSBtb2JpbGlhcmlvIGhvc3BpdGFsYXJpbyA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBUZXh0byBwYXJhIGxsZW5hciA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+IENvbm9jZXIgTcOhcyA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+ICBcblxuXG4gICAgICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5MZWZ0XCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVuZWRvci10aXR1bG8tcmF5aXRhXCIgcm9sZT1cIm1haW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdHVsby1yYXlpdGFcIj5Qcm9kdWN0b3MgRGVzdGFjYWRvczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluUmlnaHQgXCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Rvc0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwiL3N0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cIi9zdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCIvc3RhdGljL2NhbWlsbGEucG5nXCIgaWQ9XCIxXCI+PC9Qcm9kdWN0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwiL3N0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cIi9zdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RvIHRpdGxlPVwiTm9tYnJlIGRlbCBQcm9kdWN0b1wiIHByZWNpbz1cIiQxOTksOTlcIiBpbWFnZW49XCIvc3RhdGljL2NhbWlsbGEucG5nXCIgaWQ9XCIxXCI+PC9Qcm9kdWN0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0byB0aXRsZT1cIk5vbWJyZSBkZWwgUHJvZHVjdG9cIiBwcmVjaW89XCIkMTk5LDk5XCIgaW1hZ2VuPVwiL3N0YXRpYy9jYW1pbGxhLnBuZ1wiIGlkPVwiMVwiPjwvUHJvZHVjdG8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdG8gdGl0bGU9XCJOb21icmUgZGVsIFByb2R1Y3RvXCIgcHJlY2lvPVwiJDE5OSw5OVwiIGltYWdlbj1cIi9zdGF0aWMvY2FtaWxsYS5wbmdcIiBpZD1cIjFcIj48L1Byb2R1Y3RvPlxuICAgICAgICAgICAgICAgICAgICA8L1Byb2R1Y3Rvc0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImJvdW5jZUluXCIgYW5pbWF0ZU9uY2U9e3RydWV9IGR1cmF0aW9uPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbW8tY29tcHJhclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItdGl0dWxvLXJheWl0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdHVsby1yYXlpdGFcIj7Cv0PDs21vIENvbXByYXI/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1pbnN0cnVjY2lvbmVzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvQ29tcHJhcy5zdmdcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluc3RydWNjaW9uZXNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzdGVkIGRlYmUgY29udGFjdGFyc2UgY29uIG5vc290cm9zIGEgdHJhdsOpcyBkZSBsb3MgbWVkaW9zIHF1ZSBsZSBvZnJlY2Vtb3MuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRlYmUgcmVhbGl6YXIgZWwgZGVwb3NpdG8gZW4gbnVlc3RyYSBjdWVudGEgYmFuY2FyaWEuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vcyBlbnbDrWEgdW5hIGNvcGlhIGRlbCBjb21wcm9iYW50ZSBkZSBkZXDDs3NpdG8geS9vIHRyYW5zZmVyZW5jaWEuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVuYSB2ZXogYWNyZWRpdGFkbyBlbCBwYWdvIHNlIHByb2NlZGUgYWwgZW1iYWxhamUgeSBkZXNwYWNobyBkZWwgYXJ0w61jdWxvLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXNwYWNoYW1vcyBzdSBwcm9kdWN0byBwb3IgdW5hIGVtcHJlc2EgZGUgZW5jb21pZW5kYXMuPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVkLiByZWNpYmUgc3UgcHJvZHVjdG8gZW4gbGEgdGVybWluYWwgZGUgc3UgbG9jYWxpZGFkIHkgYWJvbmEgZWwgdmFsb3IgZGUgbGEgZW5jb21pZW5kYS48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UYW1iacOpbiBwdWVkZSByZXRpcmFyIGVsIHByb2R1Y3RvIHBlcnNvbmFsbWVudGUgZW4gVmlsbGEgRGV2b3RvIHkgcGFnYXIgYWhpIG1pc21vIGVuIGVmZWN0aXZvLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2kgcmVzaWRlIGVuIENhcGl0YWwgRmVkZXJhbCBvIGVuIEdyYW4gQnVlbm9zIEFpcmVzIHB1ZWRlIHNvbGljaXRhciBlbCBlbnbDrW8gZGVsIHByb2R1Y3RvIGVuIG1vdG8gKGEgY2FyZ28gZGVsIGNvbXByYWRvcik8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVzdGFtb3MgYSBzdSBkaXNwb3NpY2nDs24gcGFyYSBjdWFscXVpZXIgY29uc3VsdGEuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIC5pbWFnZW4tcHJpbmNpcGFse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgLmltYWdlbi1wcmluY2lwYWwgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDhBQjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyA+ICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzRjY3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNHB4IDAgcmdiYSgwLDAsMCwwLjMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1wcmltYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVDNkM0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bi1zZWNvbmRhcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTNGNjc7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVuZWRvci10aXR1bG8tcmF5aXRhe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDhBQjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiMxMTNGNjc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RydWNjaW9uZXMgb2x7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdHJ1Y2Npb25lcyBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lciAuaW1hZ2VuLXByaW5jaXBhbCBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsb3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0cnVjY2lvbmVze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgJHtkZXZpY2UuZGVza3RvcH17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJhbm5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbmVkb3ItdGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltYWdlbi1wcmluY2lwYWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgLmltYWdlbi1wcmluY2lwYWwgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyAudGl0dWxve1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW5lZG9yLXRpdHVsbyBidXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0dWxvLXJheWl0YXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctaW5zdHJ1Y2Npb25lc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgb2x7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1pbnN0cnVjY2lvbmVzIHB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWluc3RydWNjaW9uZXMgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=/home/aaron/Documentos/Github/filippini_hospitalario/Client/pages/index.js */")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.82485851fbfeb808123e.hot-update.js.map