function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXIge1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xufVxuIiwiZGl2LmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/home/home.component */
    "./src/app/main/home/home.component.ts");
    /* harmony import */


    var _main_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/about/about.component */
    "./src/app/main/about/about.component.ts");
    /* harmony import */


    var _main_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/skills/skills.component */
    "./src/app/main/skills/skills.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/contact/contact.component */
    "./src/app/main/contact/contact.component.ts");
    /* harmony import */


    var _main_education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/education/education.component */
    "./src/app/main/education/education.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _main_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _main_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _main_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _main_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _main_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _main_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 4,
      vars: 0,
      consts: [[1, "foot"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \xA9 2020 Ivan Gavrilov | All Rights Reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  background-color: #1f2235;\n  color: #fff;\n}\nfooter[_ngcontent-%COMP%]   div.foot[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YW5lay/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy/Qn9GA0L7QtdC60YLRiy9taWdodHktZXNjYXJwbWVudC03MDM5OC9hcHAvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGVBQUE7RUFDQSx5QkN1QlU7RUR0QlYsV0N1QmE7QUN4QmQ7QUZFQztFQUNDLGdCQ3NCZTtFRHJCZixjQUFBO0VBQ0Esa0JBQUE7QUVBRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuZm9vdGVyIHtcblx0cGFkZGluZzogNDBweCAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmdGb290ZXI7XG5cdGNvbG9yOiAkY29sb3JGb290ZXI7XG5cdGRpdi5mb290IHtcblx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEZvb3Rlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbn1cbiIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA2MDBweDtcbiRiZ0VkdWNhdGlvbkNhcmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRjb2xvckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG4kY29sb3JFZHVjYXRpb25UaXRsZUNhcmQ6ICMxNmMwZjA7XG4kYm9yZGVyRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcblxuJGJnRm9vdGVyOiAjMWYyMjM1O1xuJGNvbG9yRm9vdGVyOiAjZmZmO1xuJG1heFdpZHRoRm9vdGVyOiA3MDBweDtcblxuJHNjcmVlbk1heFdpZHRoMTogODAwcHg7XG4kc2NyZWVuTWF4V2lkdGgyOiA2ODBweDtcbiRzY3JlZW5NYXhXaWR0aDM6IDQwMHB4O1xuJHNjcmVlbk1heFdpZHRoNDogNzQwcHg7XG5cbiRiZ1NlY3Rpb25Ta2lsbHM6IHJnYigyNDMsIDI0MiwgMjQ5KTtcbiIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjIzNTtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgZGl2LmZvb3Qge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headerElems = document.querySelectorAll('header div.nav a');
          this.header = document.querySelector('header');
          this.main = document.querySelector('main');
          this.sections = document.querySelectorAll('section');
          this.hamburger = document.querySelector('header > div.nav > div.hamburger');
          this.nav = document.querySelector('header > div.nav');
          this.setMainMargin();
          this.hamburgerNavigation();
          this.navigation();
          this.position();
        }
      }, {
        key: "setMainMargin",
        value: function setMainMargin() {
          this.headerSize = this.header.offsetHeight;
          this.main.style.marginTop = "".concat(this.headerSize, "px");
        }
      }, {
        key: "hamburgerNavigation",
        value: function hamburgerNavigation() {
          var _this = this;

          this.hamburger.addEventListener('click', function () {
            _this.nav.classList.toggle('selected');
          });
        }
      }, {
        key: "navigation",
        value: function navigation() {
          var _this2 = this;

          this.headerElems.forEach(function (item) {
            item.addEventListener('click', function (event) {
              event.preventDefault();

              _this2.closeHamburger();

              var idElement = event.target.getAttribute('href');
              var elem = document.querySelector(idElement);

              var pos = _this2.getPositionElement(elem);

              window.scrollTo({
                behavior: 'smooth',
                top: pos
              });
            });
          });
        }
      }, {
        key: "closeHamburger",
        value: function closeHamburger() {
          this.nav.classList.remove('selected');
        }
      }, {
        key: "getPositionElement",
        value: function getPositionElement(elem) {
          return elem.offsetTop - this.headerSize;
        }
      }, {
        key: "position",
        value: function position() {
          var _this3 = this;

          this.animatePos();
          window.addEventListener('scroll', function () {
            _this3.animatePos();

            _this3.setMainMargin();
          });
          window.addEventListener('resize', function () {
            _this3.animatePos();

            _this3.setMainMargin();
          });
        }
      }, {
        key: "animatePos",
        value: function animatePos() {
          var _this4 = this;

          var pos = this.getPosition();
          this.clearHeaderElems();
          this.sections.forEach(function (item) {
            var top = _this4.getPositionElement(item);

            var bottom = top + item.offsetHeight;

            if (top <= pos && bottom > pos) {
              _this4.searchHeaderElems(item.id);
            }
          });
        }
      }, {
        key: "clearHeaderElems",
        value: function clearHeaderElems() {
          this.headerElems.forEach(function (item) {
            item.classList.remove('selected');
          });
        }
      }, {
        key: "searchHeaderElems",
        value: function searchHeaderElems(id) {
          this.headerElems.forEach(function (item) {
            if (item.getAttribute('href') === "#".concat(id)) {
              item.classList.add('selected');
            }
          });
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return window.pageYOffset;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 25,
      vars: 0,
      consts: [[1, "nav"], [1, "hamburger"], [1, "line"], [1, "dark"], ["href", "#home"], ["href", "#about"], ["href", "#skills"], ["href", "#contact"], ["href", "#education"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\n  background-color: #1f2235;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  max-width: 700px;\n  width: 95%;\n  margin: 0 auto;\n  overflow: auto;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n  z-index: 100;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 12px;\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 12px;\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(45deg);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(-45deg);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  right: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  background-color: #fff;\n  height: 6px;\n  width: 100%;\n  border-radius: 3px;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 12px;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 24px;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 12px;\n}\n@media screen and (min-width: 741px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.dark[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(51, 51, 51, 0.5);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.dark[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    right: -100%;\n    top: 0;\n    bottom: 0;\n    background-color: #1f2235;\n    transition: all 0.3s ease-in-out;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 20px;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  color: #fff;\n  font-weight: 400;\n  font-size: 18px;\n  padding: 10px 3px;\n  transition: color 0.15s ease-in;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #ff5151;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.selected[_ngcontent-%COMP%] {\n  color: #ff5151;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block;\n    color: #fff;\n    padding-left: 50px;\n    padding-right: 30px;\n    padding: 20px 40px 20px 50px;\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YW5lay/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy/Qn9GA0L7QtdC60YLRiy9taWdodHktZXNjYXJwbWVudC03MDM5OC9hcHAvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNDLHlCQ1BVO0VEUVYsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUVMRDtBRk1DO0VBQ0MsZUFBQTtFQUNBLGdCQ1plO0VEYWYsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FFSkY7QUZNRztFQUNDLFlBQUE7QUVKSjtBRk1LO0VBQ0MsU0FwQk87RUFxQlAsVUFBQTtBRUpOO0FGTUs7RUFDQyxTQXhCTztFQXlCUCxVQUFBO0FFSk47QUZNSztFQUNDLHdCQUFBO0FFSk47QUZNSztFQUNDLHlCQUFBO0FFSk47QUZRRztFQUNDLFFBQUE7QUVOSjtBRlNFO0VBQ0MsV0ExQ2E7RUEyQ2IsWUEzQ2E7RUE0Q2Isa0JBQUE7RUFDQSxlQUFBO0FFUEg7QUZRRztFQUNDLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkNsRFU7RURtRFYsV0FqRFM7RUFrRFQsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRU5KO0FGT0k7RUFDQyxNQUFBO0FFTEw7QUZPSTtFQUNDLFNBeERRO0FFbURiO0FGT0k7RUFDQyxTQUFBO0FFTEw7QUZPSTtFQUNDLFNBOURRO0FFeURiO0FGUUc7RUExQkQ7SUEyQkUsYUFBQTtFRUxGO0FBQ0Y7QUZPRTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0FFTEg7QUZRRztFQUNDLGNBQUE7QUVOSjtBRlVHO0VBREQ7SUFFRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLHlCQ3hGVTtJRHlGVixnQ0FBQTtFRVBGO0FBQ0Y7QUZRRztFQUNDLGFBQUE7RUFDQSx3QkFBQTtBRU5KO0FGT0k7RUFIRDtJQUlFLGNBQUE7SUFDQSxnQkFBQTtFRUpIO0FBQ0Y7QUZLSTtFQUNDLFdBQUE7QUVITDtBRklLO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0M1R1E7RUQ2R1IsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBRUZOO0FGR007RUFDQyxjQ2pIWTtBQ2dIbkI7QUZHTTtFQUNDLGNDcEhZO0FDbUhuQjtBRkdNO0VBZEQ7SUFlRSxjQUFBO0lBQ0EsV0NuSGE7SURvSGIsa0JBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFRUFMO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbiRoYW1idXJnZXJTaXplOiAzMHB4O1xuJGxpbmVIZWlnaHQ6ICRoYW1idXJnZXJTaXplIC8gNTtcbiRtaWRkbGVMaW5lOiAoKCRoYW1idXJnZXJTaXplIC0gJGxpbmVIZWlnaHQpIC8gNSkgKiAyLjU7XG5cbmhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiZ0hlYWRlcjtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiA5OTk7XG5cdGRpdi5uYXYge1xuXHRcdHBhZGRpbmc6IDE1cHggMDtcblx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEhlYWRlcjtcblx0XHR3aWR0aDogOTUlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdCYuc2VsZWN0ZWQge1xuXHRcdFx0ZGl2LmhhbWJ1cmdlciB7XG5cdFx0XHRcdHotaW5kZXg6IDEwMDtcblx0XHRcdFx0c3Bhbi5saW5lIHtcblx0XHRcdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdFx0XHR0b3A6ICRtaWRkbGVMaW5lO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoMykge1xuXHRcdFx0XHRcdFx0dG9wOiAkbWlkZGxlTGluZTtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoNCkge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG5hdiB7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkaXYuaGFtYnVyZ2VyIHtcblx0XHRcdHdpZHRoOiAkaGFtYnVyZ2VyU2l6ZTtcblx0XHRcdGhlaWdodDogJGhhbWJ1cmdlclNpemU7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRzcGFuLmxpbmUge1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGVIYW1idXJnZXI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9ySGFtYnVyZ2VyO1xuXHRcdFx0XHRoZWlnaHQ6ICRsaW5lSGVpZ2h0O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0JjpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdFx0dG9wOiAkbWlkZGxlTGluZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0dG9wOiAkaGFtYnVyZ2VyU2l6ZSAtICRsaW5lSGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bnRoLWNoaWxkKDQpIHtcblx0XHRcdFx0XHR0b3A6ICRtaWRkbGVMaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAoJHNjcmVlbk1heFdpZHRoNCArIDFweCkpIHtcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZGl2LmRhcmsge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC41KTtcblx0XHR9XG5cdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRkaXYuZGFyayB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRuYXYge1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbk1heFdpZHRoNCkge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRyaWdodDogLTEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmdIYW1idXJnZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAkYW5pbWF0ZUhhbWJ1cmdlcjtcblx0XHRcdH1cblx0XHRcdHVsIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuTWF4V2lkdGg0KSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQ+IGxpIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHQ+IGEge1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGNvbG9ySGVhZGVyO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggM3B4O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbjtcblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGhvdmVyQ29sb3JIZWFkZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmLnNlbGVjdGVkIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICRob3ZlckNvbG9ySGVhZGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbk1heFdpZHRoNCkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvckhhbWJ1cmdlck5hdjtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA1MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogNjAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMjM1O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmhlYWRlciBkaXYubmF2IHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5oZWFkZXIgZGl2Lm5hdi5zZWxlY3RlZCBkaXYuaGFtYnVyZ2VyIHtcbiAgei1pbmRleDogMTAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbmhlYWRlciBkaXYubmF2LnNlbGVjdGVkIG5hdiB7XG4gIHJpZ2h0OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYgZGl2LmhhbWJ1cmdlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIGRpdi5uYXYgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMikge1xuICB0b3A6IDEycHg7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMykge1xuICB0b3A6IDI0cHg7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoNCkge1xuICB0b3A6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDFweCkge1xuICBoZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuZGFyayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XG59XG5oZWFkZXIgZGl2Lm5hdi5zZWxlY3RlZCBkaXYuZGFyayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjIzNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuaGVhZGVyIGRpdi5uYXYgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5oZWFkZXIgZGl2Lm5hdiBuYXYgdWwgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIGRpdi5uYXYgbmF2IHVsID4gbGkgPiBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAzcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW47XG59XG5oZWFkZXIgZGl2Lm5hdiBuYXYgdWwgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNTE1MTtcbn1cbmhlYWRlciBkaXYubmF2IG5hdiB1bCA+IGxpID4gYS5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmY1MTUxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHVsID4gbGkgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/about/about.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/main/about/about.component.ts ***!
    \***********************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppMainAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1["key"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", item_r1["value"], "");
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.info = [{
          key: 'Name',
          value: 'Ivan Gavrilov'
        }, {
          key: 'Date Of Birth',
          value: '30/10/2000'
        }, {
          key: 'Address',
          value: "Spain, Barcelona, Vall d'Hebron, 128, 7A"
        }, {
          key: 'Nationality',
          value: 'Russia'
        }, {
          key: 'Phone',
          value: '+34 (690) 235 078'
        }, {
          key: 'Email',
          value: 'gavrilovivan2000@gmail.com'
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 13,
      vars: 1,
      consts: [["id", "about"], [1, "container"], [1, "text"], [1, "info"], [1, "keys"], [4, "ngFor", "ngForOf"], [1, "label"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_li_7_Template, 5, 2, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Yo soy programador con experiencia de 1 a\xF1o. Yo programo adaptivos p\xE1ginas web. Programo mis scripts y uso externos scripts. Yo uso las nuevas tecnolog\xEDas: HTML5 (Pug), CSS3 (Flexbox, Grid, conexi\xF3n de fuentes, animaciones, Sass/Scss), Bootstrap, JavaScript (ES6), Vue.js (Vue CLI, Vue Component, Vue Router, Vue Formulate), JQuery, Git, Gulp, NodeJS, NPM, PHP (Laravel), consola (Linux), SQL, MySQL comandos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Siempre evoluciono y mejoro mis habilidades, tengo ganas de trabajar en equipo, ademas me gusta mi trabajo, por eso hago la con m\xE1xima esfuerza. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 800px) {\n  section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    row-gap: 50px;\n    -moz-column-gap: 0;\n         column-gap: 0;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%] {\n  margin: 20px 0 30px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70px 1fr;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  margin: 10px 0;\n}\n@media screen and (max-width: 400px) {\n  section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YW5lay/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy/Qn9GA0L7QtdC60YLRiy9taWdodHktZXNjYXJwbWVudC03MDM5OC9hcHAvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGdCQ1djO0VEVmQsVUFBQTtFQUNBLGNBQUE7QUVERDtBRkVDO0VBSkQ7SUFLRSwwQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtTQUFBLGFBQUE7RUVDQTtBQUNGO0FGQUM7RUFDQyxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBRUVGO0FGQUc7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0FFRUo7QUZBRztFQUNDLG1CQUFBO0FFRUo7QUZESTtFQUNDLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxjQUFBO0FFR0w7QUZGSztFQUxEO0lBTUUsMEJBQUE7RUVLSjtBQUNGO0FGSks7RUFDQywwQkFBQTtBRU1OIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5zZWN0aW9uIHtcblx0bWF4LXdpZHRoOiAkbWF4V2lkdGhNYWluO1xuXHR3aWR0aDogOTUlO1xuXHRtYXJnaW46IDAgYXV0bztcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbk1heFdpZHRoMSkge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdHJvdy1nYXA6IDUwcHg7XG5cdFx0Y29sdW1uLWdhcDogMDtcblx0fVxuXHQ+IGRpdi5jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDgwcHggMDtcblx0XHRjb2x1bW4tZ2FwOiAyMHB4O1xuXHRcdGRpdi50ZXh0IHtcblx0XHRcdGgyIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LmluZm8ge1xuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAzMHB4O1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwcHggMWZyO1xuXHRcdFx0XHRcdGNvbHVtbi1nYXA6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbk1heFdpZHRoMykge1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNwYW4ubGFiZWwge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogNjAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iLCJzZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBzZWN0aW9uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICByb3ctZ2FwOiA1MHB4O1xuICAgIGNvbHVtbi1nYXA6IDA7XG4gIH1cbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogODBweCAwO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnRleHQgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYudGV4dCBkaXYuaW5mbyB7XG4gIG1hcmdpbjogMjBweCAwIDMwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYudGV4dCBkaXYuaW5mbyBsaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzBweCAxZnI7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnRleHQgZGl2LmluZm8gbGkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYudGV4dCBkaXYuaW5mbyBsaSBzcGFuLmxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/contact/contact.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/contact/contact.component.ts ***!
    \***************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppMainContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_li_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
      }
    }

    function ContactComponent_li_6_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
      }
    }

    function ContactComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_li_6_span_1_Template, 4, 5, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_li_6_ng_template_2_Template, 4, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.link === undefined)("ngIfElse", _r3);
      }
    }

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.contacts = [{
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/ivan-gavrilov-9369331a3/',
          icon: 'fab fa-linkedin',
          "class": 'linkedin'
        }, {
          title: 'WhatsApp +34 (690) 235 078',
          icon: 'fab fa-whatsapp-square',
          "class": 'whatsapp'
        }];
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 7,
      vars: 1,
      consts: [["id", "contact"], [1, "container"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf", "ngIfElse"], ["linkFunc", ""], [3, "href"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContactComponent_li_6_Template, 4, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n  padding: 40px 0;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 40px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 22px;\n  margin: 15px 0;\n  display: block;\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  transition: color 0.2s ease-in-out;\n  margin-right: 10px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.linkedin[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.linkedin[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #0074af;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.whatsapp[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.whatsapp[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #0ab426;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%] {\n  color: #0004e7;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFuZWsv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0Lsv0J/RgNC+0LXQutGC0YsvbWlnaHR5LWVzY2FycG1lbnQtNzAzOTgvYXBwL3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDO0VBQ0MsZ0JDVWE7RURUYixVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVGRjtBRkdFO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFREg7QUZNSzs7RUFFQyxjQ0xNO0VETU4sZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFSk47QUZLTTs7RUFDQyxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBRUZQO0FGSU07O0VBQ0MsZ0JBQUE7QUVEUDtBRkdNOztFQUNDLGNBQUE7QUVBUDtBRkVNOztFQUNDLGNBQUE7QUVDUDtBRkVLO0VBQ0MsY0NyQmM7RURzQmQsMEJBQUE7QUVBTiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuXHQ+IGRpdi5jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogJG1heFdpZHRoTWFpbjtcblx0XHR3aWR0aDogOTUlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHBhZGRpbmc6IDQwcHggMDtcblx0XHRoMiB7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0XHR9XG5cdFx0YWRkcmVzcyB7XG5cdFx0XHR1bCB7XG5cdFx0XHRcdGxpIHtcblx0XHRcdFx0XHQ+IGEsXG5cdFx0XHRcdFx0PiBzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAkY29sb3JNYWluO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAxNXB4IDA7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0PiBpIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ+IHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji5saW5rZWRpbiA+IGkge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwNzRhZjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCYud2hhdHNhcHAgPiBpIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwYWI0MjY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD4gYTpob3ZlciA+IHNwYW4ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRob3ZlckNvbG9yQ29udGFjdDtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiJGJnSGVhZGVyOiAjMWYyMjM1O1xuJGNvbG9ySGVhZGVyOiAjZmZmO1xuJGhvdmVyQ29sb3JIZWFkZXI6ICNmZjUxNTE7XG4kbWF4V2lkdGhIZWFkZXI6IDcwMHB4O1xuXG4kY29sb3JIYW1idXJnZXI6ICRjb2xvckhlYWRlcjtcbiRiZ0hhbWJ1cmdlcjogIzFmMjIzNTtcbiRjb2xvckhhbWJ1cmdlck5hdjogI2ZmZjtcbiRhbmltYXRlSGFtYnVyZ2VyOiAwLjNzIGVhc2UtaW4tb3V0O1xuXG4kY29sb3JIb21lOiAjZmZmO1xuXG4kYmdNYWluOiB0cmFuc3BhcmVudDtcbiRjb2xvck1haW46ICMyMTI1Mjk7XG4kbWF4V2lkdGhNYWluOiA5MDBweDtcblxuJHNraWxzQ29sb3JMaW5lOiAjMDA2YmQ2O1xuJHNraWxzQ29sb3JDaXJjbGU6ICRza2lsc0NvbG9yTGluZTtcblxuJGhvdmVyQ29sb3JDb250YWN0OiAjMDAwNGU3O1xuXG4kd2lkdGhFZHVjYXRpb246IDYwMHB4O1xuJGJnRWR1Y2F0aW9uQ2FyZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJGNvbG9yRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcbiRjb2xvckVkdWNhdGlvblRpdGxlQ2FyZDogIzE2YzBmMDtcbiRib3JkZXJFZHVjYXRpb25DYXJkOiAjZmZmO1xuXG4kYmdGb290ZXI6ICMxZjIyMzU7XG4kY29sb3JGb290ZXI6ICNmZmY7XG4kbWF4V2lkdGhGb290ZXI6IDcwMHB4O1xuXG4kc2NyZWVuTWF4V2lkdGgxOiA4MDBweDtcbiRzY3JlZW5NYXhXaWR0aDI6IDY4MHB4O1xuJHNjcmVlbk1heFdpZHRoMzogNDAwcHg7XG4kc2NyZWVuTWF4V2lkdGg0OiA3NDBweDtcblxuJGJnU2VjdGlvblNraWxsczogcmdiKDI0MywgMjQyLCAyNDkpO1xuIiwic2VjdGlvbiA+IGRpdi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNDBweCAwO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gYSxcbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBzcGFuIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IGEgPiBpLFxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IHNwYW4gPiBpIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gYSA+IHNwYW4sXG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gc3BhbiA+IHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IGEubGlua2VkaW4gPiBpLFxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IHNwYW4ubGlua2VkaW4gPiBpIHtcbiAgY29sb3I6ICMwMDc0YWY7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gYS53aGF0c2FwcCA+IGksXG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gc3Bhbi53aGF0c2FwcCA+IGkge1xuICBjb2xvcjogIzBhYjQyNjtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBhOmhvdmVyID4gc3BhbiB7XG4gIGNvbG9yOiAjMDAwNGU3O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/education/education.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/education/education.component.ts ***!
    \*******************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppMainEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EducationComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.school);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, item_r1.dateStart, "yyyy, MM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, item_r1.dateEnd, "yyyy, MM"), "");
      }
    }

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);

        this.cards = [{
          title: 'Desarrollo e Implementación de Applicaciones Web',
          school: 'Espai',
          dateStart: new Date(2018, 8),
          dateEnd: new Date(2019, 5)
        }, {
          title: 'DAM - Desarollo de Aplicaciones Multiplataforma',
          school: 'IFP - Formación Profesional Oficial',
          dateStart: new Date(2019, 8),
          dateEnd: new Date(2021, 5)
        }];
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 7,
      vars: 1,
      consts: [["id", "education"], [1, "study"], [1, "overlay"], [1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "school"], [1, "date"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EducationComponent_div_6_Template, 11, 10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%] {\n  background-image: url('background_education.jpg');\n  background-size: cover;\n  background-position: 50% 50%;\n  padding: 60px 0;\n  margin-top: 60px;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 95%;\n  margin: 0 auto;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 20px 12px;\n  row-gap: 10px;\n  border: 2px solid #fff;\n  border-radius: 4px;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #16c0f0;\n  text-align: center;\n  margin-bottom: 30px;\n  line-height: 160%;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 130%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL21haW4vZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFuZWsv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0Lsv0J/RgNC+0LXQutGC0YsvbWlnaHR5LWVzY2FycG1lbnQtNzAzOTgvYXBwL3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0FDRkY7QURJQztFQUNDLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRkY7QURHRTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FDREg7QURHRTtFQUNDLGdCRUZjO0VGR2QsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QUNESDtBREVHO0VBQ0Msb0NFVGM7RUZVZCxXRVRpQjtFRlVqQixrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNDLGNFZHFCO0VGZXJCLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NMO0FEQ0k7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0FDQ0wiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuc2VjdGlvbiB7XG5cdGgyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0fVxuXHRkaXYuc3R1ZHkge1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9lZHVjYXRpb24uanBnXCIpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcblx0XHRwYWRkaW5nOiA2MHB4IDA7XG5cdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0PiBkaXYub3ZlcmxheSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpXG5cdFx0fVxuXHRcdD4gZGl2LmNvbnRhaW5lciB7XG5cdFx0XHRtYXgtd2lkdGg6ICR3aWR0aEVkdWNhdGlvbjtcblx0XHRcdHdpZHRoOiA5NSU7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRcdFx0Y29sdW1uLWdhcDogMjBweDtcblx0XHRcdGRpdi5jYXJkIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGJnRWR1Y2F0aW9uQ2FyZDtcblx0XHRcdFx0Y29sb3I6ICRjb2xvckVkdWNhdGlvbkNhcmQ7XG5cdFx0XHRcdHBhZGRpbmc6IDIwcHggMTJweDtcblx0XHRcdFx0cm93LWdhcDogMTBweDtcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgJGJvcmRlckVkdWNhdGlvbkNhcmQ7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdGNvbG9yOiAkY29sb3JFZHVjYXRpb25UaXRsZUNhcmQ7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE2MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTMwJTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwic2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnNlY3Rpb24gZGl2LnN0dWR5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2VkdWNhdGlvbi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbiBkaXYuc3R1ZHkgPiBkaXYub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuc2VjdGlvbiBkaXYuc3R1ZHkgPiBkaXYuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgY29sdW1uLWdhcDogMjBweDtcbn1cbnNlY3Rpb24gZGl2LnN0dWR5ID4gZGl2LmNvbnRhaW5lciBkaXYuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTJweDtcbiAgcm93LWdhcDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuc2VjdGlvbiBkaXYuc3R1ZHkgPiBkaXYuY29udGFpbmVyIGRpdi5jYXJkIGg0IHtcbiAgY29sb3I6ICMxNmMwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG59XG5zZWN0aW9uIGRpdi5zdHVkeSA+IGRpdi5jb250YWluZXIgZGl2LmNhcmQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufSIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA2MDBweDtcbiRiZ0VkdWNhdGlvbkNhcmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRjb2xvckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG4kY29sb3JFZHVjYXRpb25UaXRsZUNhcmQ6ICMxNmMwZjA7XG4kYm9yZGVyRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcblxuJGJnRm9vdGVyOiAjMWYyMjM1O1xuJGNvbG9yRm9vdGVyOiAjZmZmO1xuJG1heFdpZHRoRm9vdGVyOiA3MDBweDtcblxuJHNjcmVlbk1heFdpZHRoMTogODAwcHg7XG4kc2NyZWVuTWF4V2lkdGgyOiA2ODBweDtcbiRzY3JlZW5NYXhXaWR0aDM6IDQwMHB4O1xuJHNjcmVlbk1heFdpZHRoNDogNzQwcHg7XG5cbiRiZ1NlY3Rpb25Ta2lsbHM6IHJnYigyNDMsIDI0MiwgMjQ5KTtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppMainHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! typed.js */
    "./node_modules/typed.js/lib/typed.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.words = ['Web Developer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer'];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('h2 > span.text', {
            strings: this.words,
            typeSpeed: 50,
            loop: true,
            backSpeed: 40
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [["id", "home"], [1, "overlay"], [1, "container"], [1, "text"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I Am ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hola, me llamo Ivan. Yo soy Full Stack Developer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n  background-image: url('home.jpg');\n  background-position: 50% 50%;\n  background-size: cover;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   div.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 100px 10px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n  color: #fff;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNERDtBREVDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdFVlU7QURVWjtBRENFO0VBQ0MsY0FBQTtBQ0NIO0FEQUc7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRENFO0VBQ0MseUJBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUuanBnXCIpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpdi5vdmVybGF5IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0fVxuXHRkaXYuY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTAwcHggMTBweCAxMDBweDtcblx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGNvbG9yOiAkY29sb3JIb21lO1xuXHRcdGgyIHtcblx0XHRcdG1hcmdpbjogMzBweCAwO1xuXHRcdFx0YiB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoMyB7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cblx0fVxufVxuIiwic2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24gZGl2Lm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuc2VjdGlvbiBkaXYuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMDBweCAxMHB4IDEwMHB4O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNmZmY7XG59XG5zZWN0aW9uIGRpdi5jb250YWluZXIgaDIge1xuICBtYXJnaW46IDMwcHggMDtcbn1cbnNlY3Rpb24gZGl2LmNvbnRhaW5lciBoMiBiIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5zZWN0aW9uIGRpdi5jb250YWluZXIgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA2MDBweDtcbiRiZ0VkdWNhdGlvbkNhcmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRjb2xvckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG4kY29sb3JFZHVjYXRpb25UaXRsZUNhcmQ6ICMxNmMwZjA7XG4kYm9yZGVyRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcblxuJGJnRm9vdGVyOiAjMWYyMjM1O1xuJGNvbG9yRm9vdGVyOiAjZmZmO1xuJG1heFdpZHRoRm9vdGVyOiA3MDBweDtcblxuJHNjcmVlbk1heFdpZHRoMTogODAwcHg7XG4kc2NyZWVuTWF4V2lkdGgyOiA2ODBweDtcbiRzY3JlZW5NYXhXaWR0aDM6IDQwMHB4O1xuJHNjcmVlbk1heFdpZHRoNDogNzQwcHg7XG5cbiRiZ1NlY3Rpb25Ta2lsbHM6IHJnYigyNDMsIDI0MiwgMjQ5KTtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/main/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/main/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/main/skills/skills.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/main/contact/contact.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/main/education/education.component.ts");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 7,
      vars: 0,
      consts: [[1, "container"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/skills/skills.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/main/skills/skills.component.ts ***!
    \*************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppMainSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function SkillsComponent_div_4_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item2_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r3["name"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item2_r3["progress"] + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item2_r3["progress"], "%");
      }
    }

    function SkillsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_div_4_Template, 7, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item1_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item1_r1["title"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item1_r1["elems"]);
      }
    }

    var SkillsComponent = function SkillsComponent() {
      _classCallCheck(this, SkillsComponent);

      this.skills = [{
        title: 'Programming',
        elems: [{
          name: 'HTML5 (Pug, Ejs)',
          progress: 80
        }, {
          name: 'CSS3 (Flexbox, Sass, Scss)',
          progress: 80
        }, {
          name: 'JavaScript (ES6)',
          progress: 70
        }, {
          name: 'TypeScript',
          progress: 30
        }, {
          name: 'Angular',
          progress: 40
        }, {
          name: 'Vue.js',
          progress: 50
        }, {
          name: 'JQuery',
          progress: 35
        }, {
          name: 'NodeJS',
          progress: 75
        }, {
          name: 'Express',
          progress: 80
        }, {
          name: 'Gulp',
          progress: 50
        }, {
          name: 'PHP',
          progress: 70
        }, {
          name: 'Laravel',
          progress: 20
        }, {
          name: 'GIT',
          progress: 50
        }, {
          name: 'Java',
          progress: 15
        }, {
          name: 'Linux',
          progress: 15
        }, {
          name: 'SQL',
          progress: 40
        }, {
          name: 'MySQL',
          progress: 40
        }, {
          name: 'NPM',
          progress: 80
        }]
      }, {
        title: "Languages",
        elems: [{
          name: "Spain",
          progress: 60
        }, {
          name: "English",
          progress: 20
        }, {
          name: "Russian",
          progress: 100
        }, {
          name: "Italian",
          progress: 12
        }]
      }];
    };

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 5,
      vars: 1,
      consts: [["id", "skills"], [1, "container"], ["class", "skills", 4, "ngFor", "ngForOf"], [1, "skills"], ["class", "elem", 4, "ngFor", "ngForOf"], [1, "elem"], [1, "progress", 3, "ngStyle"], [1, "circle"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 5, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: ["section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  color: #212529;\n  background-color: #f3f2f9;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n@media screen and (max-width: 680px) {\n  section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: #006bd6;\n  border-radius: 10px;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%]   div.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  border-radius: 100%;\n  background-color: #fff;\n  transform: translate(0%, -50%);\n  border: 3px solid #006bd6;\n  top: 50%;\n  right: 0;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%]   div.circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: 4px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL21haW4vc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL21pZ2h0eS1lc2NhcnBtZW50LTcwMzk4L2FwcC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWluL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxlQUFBO0VBQ0EsY0NTVztFRFJYLHlCQytCaUI7QUNoQ2xCO0FGRUM7RUFDQyxnQkNPYTtFRE5iLFVBQUE7RUFDQSxjQUFBO0FFQUY7QUZDRTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7QUVDSDtBRkNFO0VBQ0MsZ0JBQUE7QUVDSDtBRkFHO0VBQ0MsbUJBQUE7QUVFSjtBRkFHO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBRUVKO0FGREk7RUFKRDtJQUtFLDBCQUFBO0VFSUg7QUFDRjtBRkhJO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUVLTDtBRkpLO0VBQ0MsV0FBQTtFQUNBLHlCQ2hCVztFRGlCWCxtQkFBQTtFQUNBLGtCQUFBO0FFTU47QUZMTTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FFT1A7QUZOTztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUVRUjtBRkpLO0VBQ0MsZ0JBQUE7RUFDQSxtQkFBQTtBRU1OIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuXHRwYWRkaW5nOiA4MHB4IDA7XG5cdGNvbG9yOiAkY29sb3JNYWluO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmdTZWN0aW9uU2tpbGxzO1xuXHQ+IGRpdi5jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogJG1heFdpZHRoTWFpbjtcblx0XHR3aWR0aDogOTUlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGgyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0fVxuXHRcdGRpdi5za2lsbHMge1xuXHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdGgzIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdH1cblx0XHRcdGRpdi5jb250YWluZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRcdFx0XHRjb2x1bW4tZ2FwOiAyMHB4O1xuXHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuTWF4V2lkdGgyKSB7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGl2LmVsZW0ge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuXHRcdFx0XHRcdGRpdi5wcm9ncmVzcyB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDhweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRza2lsc0NvbG9yTGluZTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRkaXYuY2lyY2xlIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICRza2lsc0NvbG9yQ2lyY2xlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IDUwJTtcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHR0b3A6IC0yMHB4O1xuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0OiA0cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDhweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI1cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogNjAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iLCJzZWN0aW9uIHtcbiAgcGFkZGluZzogODBweCAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmOTtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYuc2tpbGxzIGRpdi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMgZGl2LmNvbnRhaW5lciBkaXYuZWxlbSBkaXYucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmJkNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIGRpdi5wcm9ncmVzcyBkaXYuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDZiZDY7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMgZGl2LmNvbnRhaW5lciBkaXYuZWxlbSBkaXYucHJvZ3Jlc3MgZGl2LmNpcmNsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogNHB4O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/vanek/Рабочий стол/Проекты/mighty-escarpment-70398/app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map