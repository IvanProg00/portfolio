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

    var AppComponent = /*@__PURE__*/function () {
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
        styles: ["div.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cbiIsImRpdi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xufSJdfQ== */"]
      });
      return AppComponent;
    }();
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

    var AppModule = /*@__PURE__*/function () {
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
      return AppModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _main_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _main_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _main_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _main_education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var FooterComponent = /*@__PURE__*/function () {
      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.date = new Date();
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
        decls: 5,
        vars: 4,
        consts: [[1, "foot"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.date, "yyyy"), " Ivan Gavrilov");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["footer[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  background-color: #1f2235;\n  color: #fff;\n}\nfooter[_ngcontent-%COMP%]   div.foot[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFuZWsv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0Lsv0J/RgNC+0LXQutGC0YsvUG9ydGZvbGlvL2FwcC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsZUFBQTtFQUNBLHlCQ3dCVTtFRHZCVixXQ3dCYTtBQ3pCZDtBRkVDO0VBQ0MsZ0JDdUJlO0VEdEJmLGNBQUE7RUFDQSxrQkFBQTtBRUFGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG5mb290ZXIge1xuXHRwYWRkaW5nOiA0MHB4IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiZ0Zvb3Rlcjtcblx0Y29sb3I6ICRjb2xvckZvb3Rlcjtcblx0ZGl2LmZvb3Qge1xuXHRcdG1heC13aWR0aDogJG1heFdpZHRoRm9vdGVyO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufVxuIiwiJGJnSGVhZGVyOiAjMWYyMjM1O1xuJGNvbG9ySGVhZGVyOiAjZmZmO1xuJGhvdmVyQ29sb3JIZWFkZXI6ICNmZjUxNTE7XG4kbWF4V2lkdGhIZWFkZXI6IDcwMHB4O1xuXG4kY29sb3JIYW1idXJnZXI6ICRjb2xvckhlYWRlcjtcbiRiZ0hhbWJ1cmdlcjogIzFmMjIzNTtcbiRjb2xvckhhbWJ1cmdlck5hdjogI2ZmZjtcbiRhbmltYXRlSGFtYnVyZ2VyOiAwLjNzIGVhc2UtaW4tb3V0O1xuXG4kY29sb3JIb21lOiAjZmZmO1xuXG4kYmdNYWluOiB0cmFuc3BhcmVudDtcbiRjb2xvck1haW46ICMyMTI1Mjk7XG4kbWF4V2lkdGhNYWluOiA5MDBweDtcblxuJHNraWxzQ29sb3JMaW5lOiAjMDA2YmQ2O1xuJHNraWxzQ29sb3JDaXJjbGU6ICRza2lsc0NvbG9yTGluZTtcblxuJGhvdmVyQ29sb3JDb250YWN0OiAjMDAwNGU3O1xuXG4kd2lkdGhFZHVjYXRpb246IDgwMHB4O1xuJG1heFdpZHRoRWR1Y2F0aW9uOiA1MDBweDtcbiRiZ0VkdWNhdGlvbkNhcmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiRjb2xvckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG4kY29sb3JFZHVjYXRpb25UaXRsZUNhcmQ6ICMxNmMwZjA7XG4kYm9yZGVyRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcblxuJGJnRm9vdGVyOiAjMWYyMjM1O1xuJGNvbG9yRm9vdGVyOiAjZmZmO1xuJG1heFdpZHRoRm9vdGVyOiA3MDBweDtcblxuJHNjcmVlbk1heFdpZHRoMTogODAwcHg7XG4kc2NyZWVuTWF4V2lkdGgyOiA2ODBweDtcbiRzY3JlZW5NYXhXaWR0aDM6IDQwMHB4O1xuJHNjcmVlbk1heFdpZHRoNDogNzQwcHg7XG5cbiRiZ1NlY3Rpb25Ta2lsbHM6IHJnYigyNDMsIDI0MiwgMjQ5KTtcbiIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjIzNTtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgZGl2LmZvb3Qge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      return FooterComponent;
    }();
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

    var HeaderComponent = /*@__PURE__*/function () {
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
        styles: ["header[_ngcontent-%COMP%] {\n  background-color: #1f2235;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  max-width: 700px;\n  width: 95%;\n  margin: 0 auto;\n  overflow: auto;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n  z-index: 100;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 12px;\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 12px;\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(45deg);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(-45deg);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  right: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n  position: absolute;\n  background-color: #fff;\n  height: 6px;\n  width: 100%;\n  border-radius: 3px;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 12px;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 24px;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%]   span.line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 12px;\n}\n@media screen and (min-width: 741px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.hamburger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   div.dark[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(51, 51, 51, 0.5);\n}\nheader[_ngcontent-%COMP%]   div.nav.selected[_ngcontent-%COMP%]   div.dark[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    right: -100%;\n    top: 0;\n    bottom: 0;\n    background-color: #1f2235;\n    transition: all 0.3s ease-in-out;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 20px;\n  }\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  color: #fff;\n  font-weight: 400;\n  font-size: 18px;\n  padding: 10px 3px;\n  transition: color 0.15s ease-in;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #ff5151;\n}\nheader[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.selected[_ngcontent-%COMP%] {\n  color: #ff5151;\n}\n@media screen and (max-width: 740px) {\n  header[_ngcontent-%COMP%]   div.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    display: block;\n    color: #fff;\n    padding-left: 50px;\n    padding-right: 30px;\n    padding: 20px 40px 20px 50px;\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFuZWsv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0Lsv0J/RgNC+0LXQutGC0YsvUG9ydGZvbGlvL2FwcC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0MseUJDUFU7RURRVixlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBRUxEO0FGTUM7RUFDQyxlQUFBO0VBQ0EsZ0JDWmU7RURhZixVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUVKRjtBRk1HO0VBQ0MsWUFBQTtBRUpKO0FGTUs7RUFDQyxTQXBCTztFQXFCUCxVQUFBO0FFSk47QUZNSztFQUNDLFNBeEJPO0VBeUJQLFVBQUE7QUVKTjtBRk1LO0VBQ0Msd0JBQUE7QUVKTjtBRk1LO0VBQ0MseUJBQUE7QUVKTjtBRlFHO0VBQ0MsUUFBQTtBRU5KO0FGU0U7RUFDQyxXQTFDYTtFQTJDYixZQTNDYTtFQTRDYixrQkFBQTtFQUNBLGVBQUE7QUVQSDtBRlFHO0VBQ0MsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQ2xEVTtFRG1EVixXQWpEUztFQWtEVCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FFTko7QUZPSTtFQUNDLE1BQUE7QUVMTDtBRk9JO0VBQ0MsU0F4RFE7QUVtRGI7QUZPSTtFQUNDLFNBQUE7QUVMTDtBRk9JO0VBQ0MsU0E5RFE7QUV5RGI7QUZRRztFQTFCRDtJQTJCRSxhQUFBO0VFTEY7QUFDRjtBRk9FO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUNBQUE7QUVMSDtBRlFHO0VBQ0MsY0FBQTtBRU5KO0FGVUc7RUFERDtJQUVFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EseUJDeEZVO0lEeUZWLGdDQUFBO0VFUEY7QUFDRjtBRlFHO0VBQ0MsYUFBQTtFQUNBLHdCQUFBO0FFTko7QUZPSTtFQUhEO0lBSUUsY0FBQTtJQUNBLGdCQUFBO0VFSkg7QUFDRjtBRktJO0VBQ0MsV0FBQTtBRUhMO0FGSUs7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQzVHUTtFRDZHUixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FFRk47QUZHTTtFQUNDLGNDakhZO0FDZ0huQjtBRkdNO0VBQ0MsY0NwSFk7QUNtSG5CO0FGR007RUFkRDtJQWVFLGNBQUE7SUFDQSxXQ25IYTtJRG9IYixrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VFQUw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuJGhhbWJ1cmdlclNpemU6IDMwcHg7XG4kbGluZUhlaWdodDogJGhhbWJ1cmdlclNpemUgLyA1O1xuJG1pZGRsZUxpbmU6ICgoJGhhbWJ1cmdlclNpemUgLSAkbGluZUhlaWdodCkgLyA1KSAqIDIuNTtcblxuaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJnSGVhZGVyO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHotaW5kZXg6IDk5OTtcblx0ZGl2Lm5hdiB7XG5cdFx0cGFkZGluZzogMTVweCAwO1xuXHRcdG1heC13aWR0aDogJG1heFdpZHRoSGVhZGVyO1xuXHRcdHdpZHRoOiA5NSU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0Ji5zZWxlY3RlZCB7XG5cdFx0XHRkaXYuaGFtYnVyZ2VyIHtcblx0XHRcdFx0ei1pbmRleDogMTAwO1xuXHRcdFx0XHRzcGFuLmxpbmUge1xuXHRcdFx0XHRcdCY6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRcdHRvcDogJG1pZGRsZUxpbmU7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0XHR0b3A6ICRtaWRkbGVMaW5lO1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOm50aC1jaGlsZCg0KSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bmF2IHtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRpdi5oYW1idXJnZXIge1xuXHRcdFx0d2lkdGg6ICRoYW1idXJnZXJTaXplO1xuXHRcdFx0aGVpZ2h0OiAkaGFtYnVyZ2VyU2l6ZTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHNwYW4ubGluZSB7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAkYW5pbWF0ZUhhbWJ1cmdlcjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JIYW1idXJnZXI7XG5cdFx0XHRcdGhlaWdodDogJGxpbmVIZWlnaHQ7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHQmOm50aC1jaGlsZCgxKSB7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bnRoLWNoaWxkKDIpIHtcblx0XHRcdFx0XHR0b3A6ICRtaWRkbGVMaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6bnRoLWNoaWxkKDMpIHtcblx0XHRcdFx0XHR0b3A6ICRoYW1idXJnZXJTaXplIC0gJGxpbmVIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0JjpudGgtY2hpbGQoNCkge1xuXHRcdFx0XHRcdHRvcDogJG1pZGRsZUxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICgkc2NyZWVuTWF4V2lkdGg0ICsgMXB4KSkge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkaXYuZGFyayB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjUpO1xuXHRcdH1cblx0XHQmLnNlbGVjdGVkIHtcblx0XHRcdGRpdi5kYXJrIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5hdiB7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuTWF4V2lkdGg0KSB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdHJpZ2h0OiAtMTAwJTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRiZ0hhbWJ1cmdlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsICRhbmltYXRlSGFtYnVyZ2VyO1xuXHRcdFx0fVxuXHRcdFx0dWwge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW5NYXhXaWR0aDQpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdD4gbGkge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdD4gYSB7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiAkY29sb3JIZWFkZXI7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTBweCAzcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluO1xuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkaG92ZXJDb2xvckhlYWRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCYuc2VsZWN0ZWQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGhvdmVyQ29sb3JIZWFkZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuTWF4V2lkdGg0KSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogJGNvbG9ySGFtYnVyZ2VyTmF2O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA4MDBweDtcbiRtYXhXaWR0aEVkdWNhdGlvbjogNTAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMjM1O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmhlYWRlciBkaXYubmF2IHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5oZWFkZXIgZGl2Lm5hdi5zZWxlY3RlZCBkaXYuaGFtYnVyZ2VyIHtcbiAgei1pbmRleDogMTAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiAxMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuaGVhZGVyIGRpdi5uYXYuc2VsZWN0ZWQgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmU6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbmhlYWRlciBkaXYubmF2LnNlbGVjdGVkIG5hdiB7XG4gIHJpZ2h0OiAwO1xufVxuaGVhZGVyIGRpdi5uYXYgZGl2LmhhbWJ1cmdlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIGRpdi5uYXYgZGl2LmhhbWJ1cmdlciBzcGFuLmxpbmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMikge1xuICB0b3A6IDEycHg7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoMykge1xuICB0b3A6IDI0cHg7XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHNwYW4ubGluZTpudGgtY2hpbGQoNCkge1xuICB0b3A6IDEycHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDFweCkge1xuICBoZWFkZXIgZGl2Lm5hdiBkaXYuaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5oZWFkZXIgZGl2Lm5hdiBkaXYuZGFyayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XG59XG5oZWFkZXIgZGl2Lm5hdi5zZWxlY3RlZCBkaXYuZGFyayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjIzNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuaGVhZGVyIGRpdi5uYXYgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5oZWFkZXIgZGl2Lm5hdiBuYXYgdWwgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIGRpdi5uYXYgbmF2IHVsID4gbGkgPiBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAzcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW47XG59XG5oZWFkZXIgZGl2Lm5hdiBuYXYgdWwgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNTE1MTtcbn1cbmhlYWRlciBkaXYubmF2IG5hdiB1bCA+IGxpID4gYS5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmY1MTUxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaGVhZGVyIGRpdi5uYXYgbmF2IHVsID4gbGkgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufSJdfQ== */"]
      });
      return HeaderComponent;
    }();
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

    var AboutComponent = /*@__PURE__*/function () {
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
            key: 'Nationality',
            value: 'Russia'
          }, {
            key: 'Phone',
            value: '+34 (690) 235 078'
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hola, me llamo Ivan. Yo soy Full Stack Developer con experiencia de 2 a\xF1o. Yo programo adaptivos p\xE1ginas web. Programo mis scripts y uso externos scripts. Yo uso las nuevas tecnolog\xEDas: HTML5 (Pug), CSS3 (Flexbox, Grid, conexi\xF3n de fuentes, animaciones, Sass/Scss), Bootstrap, JavaScript (ES6). Aprend\xED frameworks y bibliotecas modernas - Vue, Angular, React. Aprend\xED control de versiones - Git (Aprend\xED hacer push,pull, crear ramas y etc). Aprend\xED automatizaci\xF3n de dise\xF1o - Gulp y Webpack. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Siempre evoluciono y mejoro mis habilidades. Tengo ganas de trabajar en equipo. Adem\xE1s, me gusta mi trabajo, por eso hago la con m\xE1xima esfuerza. ");

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
        styles: ["section[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 800px) {\n  section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    row-gap: 50px;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%] {\n  margin: 20px 0 30px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70px 1fr;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  margin: 10px 0;\n}\n@media screen and (max-width: 400px) {\n  section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   div.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmFuZWsv0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0Lsv0J/RgNC+0LXQutGC0YsvUG9ydGZvbGlvL2FwcC9zcmMvYXBwL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsZ0JDV2M7RURWZCxVQUFBO0VBQ0EsY0FBQTtBRUREO0FGRUM7RUFKRDtJQUtFLDBCQUFBO0lBQ0EsYUFBQTtFRUNBO0FBQ0Y7QUZBQztFQUNDLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FFRUY7QUZBRztFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7QUVFSjtBRkFHO0VBQ0MsbUJBQUE7QUVFSjtBRkRJO0VBQ0MsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGNBQUE7QUVHTDtBRkZLO0VBTEQ7SUFNRSwwQkFBQTtFRUtKO0FBQ0Y7QUZKSztFQUNDLDBCQUFBO0FFTU4iLCJmaWxlIjoic3JjL2FwcC9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuXHRtYXgtd2lkdGg6ICRtYXhXaWR0aE1haW47XG5cdHdpZHRoOiA5NSU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuTWF4V2lkdGgxKSB7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0cm93LWdhcDogNTBweDtcblx0fVxuXHQ+IGRpdi5jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDgwcHggMDtcblx0XHRjb2x1bW4tZ2FwOiAyMHB4O1xuXHRcdGRpdi50ZXh0IHtcblx0XHRcdGgyIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LmluZm8ge1xuXHRcdFx0XHRtYXJnaW46IDIwcHggMCAzMHB4O1xuXHRcdFx0XHRsaSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwcHggMWZyO1xuXHRcdFx0XHRcdGNvbHVtbi1nYXA6IDIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbk1heFdpZHRoMykge1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNwYW4ubGFiZWwge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogODAwcHg7XG4kbWF4V2lkdGhFZHVjYXRpb246IDUwMHB4O1xuJGJnRWR1Y2F0aW9uQ2FyZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJGNvbG9yRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcbiRjb2xvckVkdWNhdGlvblRpdGxlQ2FyZDogIzE2YzBmMDtcbiRib3JkZXJFZHVjYXRpb25DYXJkOiAjZmZmO1xuXG4kYmdGb290ZXI6ICMxZjIyMzU7XG4kY29sb3JGb290ZXI6ICNmZmY7XG4kbWF4V2lkdGhGb290ZXI6IDcwMHB4O1xuXG4kc2NyZWVuTWF4V2lkdGgxOiA4MDBweDtcbiRzY3JlZW5NYXhXaWR0aDI6IDY4MHB4O1xuJHNjcmVlbk1heFdpZHRoMzogNDAwcHg7XG4kc2NyZWVuTWF4V2lkdGg0OiA3NDBweDtcblxuJGJnU2VjdGlvblNraWxsczogcmdiKDI0MywgMjQyLCAyNDkpO1xuIiwic2VjdGlvbiB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcm93LWdhcDogNTBweDtcbiAgfVxufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIge1xuICBwYWRkaW5nOiA4MHB4IDA7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYudGV4dCBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi50ZXh0IGRpdi5pbmZvIHtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi50ZXh0IGRpdi5pbmZvIGxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDFmcjtcbiAgY29sdW1uLWdhcDogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBzZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYudGV4dCBkaXYuaW5mbyBsaSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi50ZXh0IGRpdi5pbmZvIGxpIHNwYW4ubGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */"]
      });
      return AboutComponent;
    }();
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

    var ContactComponent = /*@__PURE__*/function () {
      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.contacts = [{
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ivan-gavrilov-9369331a3/',
            icon: 'fab fa-linkedin',
            "class": 'linkedin'
          }, {
            title: 'WhatsApp',
            link: 'https://wa.me/34690235078',
            icon: 'fab fa-whatsapp-square',
            "class": 'whatsapp'
          }, {
            title: 'GitHub',
            link: 'https://github.com/IvanProg00',
            icon: 'fab fa-github-square',
            "class": 'github'
          }, {
            title: 'Email',
            link: 'mailto:gavrilovivan2000@gmail.com',
            icon: 'fas fa-envelope',
            "class": 'email'
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
        styles: ["section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 40px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 40px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 22px;\n  margin: 15px 0;\n  display: block;\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  transition: color 0.2s ease-in-out;\n  margin-right: 10px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.linkedin[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.linkedin[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #0074af;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.whatsapp[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.whatsapp[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #0ab426;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.github[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.github[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #323131;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.email[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span.email[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #1762AB;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%] {\n  color: #0004e7;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9tYWluL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxnQkNVYTtFRFRiLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUVGRjtBRkdFO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFREg7QUZNSzs7RUFFQyxjQ0xNO0VETU4sZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFSk47QUZLTTs7RUFDQyxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBRUZQO0FGSU07O0VBQ0MsZ0JBQUE7QUVEUDtBRkdNOztFQUNDLGNBQUE7QUVBUDtBRkVNOztFQUNDLGNBQUE7QUVDUDtBRkNNOztFQUNDLGNBQUE7QUVFUDtBRkFNOztFQUNDLGNBQUE7QUVHUDtBRkFLO0VBQ0MsY0MzQmM7RUQ0QmQsMEJBQUE7QUVFTiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbnNlY3Rpb24ge1xuXHQ+IGRpdi5jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogJG1heFdpZHRoTWFpbjtcblx0XHR3aWR0aDogOTUlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRcdGgyIHtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHRcdH1cblx0XHRhZGRyZXNzIHtcblx0XHRcdHVsIHtcblx0XHRcdFx0bGkge1xuXHRcdFx0XHRcdD4gYSxcblx0XHRcdFx0XHQ+IHNwYW4ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvck1haW47XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDE1cHggMDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHQ+IGkge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD4gc3BhbiB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQmLmxpbmtlZGluID4gaSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDA3NGFmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji53aGF0c2FwcCA+IGkge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzBhYjQyNjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCYuZ2l0aHViID4gaSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzIzMTMxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ji5lbWFpbCA+IGkge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzE3NjJBQjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PiBhOmhvdmVyID4gc3BhbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJGhvdmVyQ29sb3JDb250YWN0O1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogODAwcHg7XG4kbWF4V2lkdGhFZHVjYXRpb246IDUwMHB4O1xuJGJnRWR1Y2F0aW9uQ2FyZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJGNvbG9yRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcbiRjb2xvckVkdWNhdGlvblRpdGxlQ2FyZDogIzE2YzBmMDtcbiRib3JkZXJFZHVjYXRpb25DYXJkOiAjZmZmO1xuXG4kYmdGb290ZXI6ICMxZjIyMzU7XG4kY29sb3JGb290ZXI6ICNmZmY7XG4kbWF4V2lkdGhGb290ZXI6IDcwMHB4O1xuXG4kc2NyZWVuTWF4V2lkdGgxOiA4MDBweDtcbiRzY3JlZW5NYXhXaWR0aDI6IDY4MHB4O1xuJHNjcmVlbk1heFdpZHRoMzogNDAwcHg7XG4kc2NyZWVuTWF4V2lkdGg0OiA3NDBweDtcblxuJGJnU2VjdGlvblNraWxsczogcmdiKDI0MywgMjQyLCAyNDkpO1xuIiwic2VjdGlvbiA+IGRpdi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBhLFxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IHNwYW4ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gYSA+IGksXG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gc3BhbiA+IGkge1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBhID4gc3BhbixcbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBzcGFuID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gYS5saW5rZWRpbiA+IGksXG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBhZGRyZXNzIHVsIGxpID4gc3Bhbi5saW5rZWRpbiA+IGkge1xuICBjb2xvcjogIzAwNzRhZjtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBhLndoYXRzYXBwID4gaSxcbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBzcGFuLndoYXRzYXBwID4gaSB7XG4gIGNvbG9yOiAjMGFiNDI2O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IGEuZ2l0aHViID4gaSxcbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBzcGFuLmdpdGh1YiA+IGkge1xuICBjb2xvcjogIzMyMzEzMTtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBhLmVtYWlsID4gaSxcbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGFkZHJlc3MgdWwgbGkgPiBzcGFuLmVtYWlsID4gaSB7XG4gIGNvbG9yOiAjMTc2MkFCO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgYWRkcmVzcyB1bCBsaSA+IGE6aG92ZXIgPiBzcGFuIHtcbiAgY29sb3I6ICMwMDA0ZTc7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"]
      });
      return ContactComponent;
    }();
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.school);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, item_r1.dateStart, "yyyy, MM"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, item_r1.dateEnd, "yyyy, MM"), "");
      }
    }

    var EducationComponent = /*@__PURE__*/function () {
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
            school: 'IFP - Innovación en Formación Profesional',
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EducationComponent_div_6_Template, 9, 10, "div", 4);

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
        styles: ["section[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%] {\n  background-image: url('background_education.webp');\n  background-size: cover;\n  background-position: 50% 50%;\n  padding: 60px 0;\n  margin-top: 60px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 95%;\n  margin: 0 auto;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  row-gap: 20px;\n}\n@media screen and (max-width: 500px) {\n  section[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 20px 12px;\n  border: 2px solid #fff;\n  border-radius: 4px;\n  margin: 0 10px;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #16c0f0;\n  text-align: center;\n  line-height: 160%;\n  margin-bottom: 20px;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n  line-height: 130%;\n  display: block;\n}\nsection[_ngcontent-%COMP%]   div.study[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.card[_ngcontent-%COMP%]   span.school[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9tYWluL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNERDtBREVDO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBQ0FGO0FERUM7RUFDQyxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBQ0NIO0FEQ0U7RUFDQyxnQkVSYztFRlNkLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FDQ0g7QURBRztFQVJEO0lBU0UsMEJBQUE7RUNHRjtBQUNGO0FERkc7RUFDQyxvQ0VqQmM7RUZrQmQsV0VqQmlCO0VGa0JqQixrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FDSUo7QURISTtFQUNDLGNFeEJxQjtFRnlCckIsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDS0w7QURISTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDS0w7QURKSztFQUNDLG1CQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9tYWluL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuc2VjdGlvbiB7XG5cdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcblx0aDIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cdGRpdi5zdHVkeSB7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2VkdWNhdGlvbi53ZWJwXCIpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcblx0XHRwYWRkaW5nOiA2MHB4IDA7XG5cdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdD4gZGl2Lm92ZXJsYXkge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcblx0XHR9XG5cdFx0PiBkaXYuY29udGFpbmVyIHtcblx0XHRcdG1heC13aWR0aDogJHdpZHRoRWR1Y2F0aW9uO1xuXHRcdFx0d2lkdGg6IDk1JTtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG5cdFx0XHRyb3ctZ2FwOiAyMHB4O1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1heFdpZHRoRWR1Y2F0aW9uKSB7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0fVxuXHRcdFx0ZGl2LmNhcmQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmdFZHVjYXRpb25DYXJkO1xuXHRcdFx0XHRjb2xvcjogJGNvbG9yRWR1Y2F0aW9uQ2FyZDtcblx0XHRcdFx0cGFkZGluZzogMjBweCAxMnB4O1xuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyRWR1Y2F0aW9uQ2FyZDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMTBweDtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0Y29sb3I6ICRjb2xvckVkdWNhdGlvblRpdGxlQ2FyZDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE2MCU7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMzAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCYuc2Nob29sIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJzZWN0aW9uIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xufVxuc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnNlY3Rpb24gZGl2LnN0dWR5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2VkdWNhdGlvbi53ZWJwXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gZGl2LnN0dWR5ID4gZGl2Lm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbnNlY3Rpb24gZGl2LnN0dWR5ID4gZGl2LmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHJvdy1nYXA6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBzZWN0aW9uIGRpdi5zdHVkeSA+IGRpdi5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5zZWN0aW9uIGRpdi5zdHVkeSA+IGRpdi5jb250YWluZXIgZGl2LmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cbnNlY3Rpb24gZGl2LnN0dWR5ID4gZGl2LmNvbnRhaW5lciBkaXYuY2FyZCBoNCB7XG4gIGNvbG9yOiAjMTZjMGYwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuc2VjdGlvbiBkaXYuc3R1ZHkgPiBkaXYuY29udGFpbmVyIGRpdi5jYXJkIHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5zZWN0aW9uIGRpdi5zdHVkeSA+IGRpdi5jb250YWluZXIgZGl2LmNhcmQgc3Bhbi5zY2hvb2wge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufSIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA4MDBweDtcbiRtYXhXaWR0aEVkdWNhdGlvbjogNTAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iXX0= */"]
      });
      return EducationComponent;
    }();
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

    var HomeComponent = /*@__PURE__*/function () {
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
              loop: true,
              typeSpeed: 80,
              backSpeed: 50,
              backDelay: 2500,
              contentType: null
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
        styles: ["section[_ngcontent-%COMP%] {\n  background-image: url('home.webp');\n  background-position: 50% 50%;\n  background-size: cover;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   div.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 100px 10px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n  color: #fff;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\nsection[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YW5lay/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy/Qn9GA0L7QtdC60YLRiy9Qb3J0Zm9saW8vYXBwL3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0REO0FERUM7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBQ0FGO0FERUM7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0VWVTtBRFVaO0FEQ0U7RUFDQyxjQUFBO0FDQ0g7QURBRztFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0U7RUFDQyx5QkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuc2VjdGlvbiB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS53ZWJwXCIpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpdi5vdmVybGF5IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0fVxuXHRkaXYuY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTAwcHggMTBweCAxMDBweDtcblx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGNvbG9yOiAkY29sb3JIb21lO1xuXHRcdGgyIHtcblx0XHRcdG1hcmdpbjogMzBweCAwO1xuXHRcdFx0YiB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoMyB7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdH1cblx0fVxufVxuIiwic2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS53ZWJwXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uIGRpdi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbnNlY3Rpb24gZGl2LmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTAwcHggMTBweCAxMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZmZmO1xufVxuc2VjdGlvbiBkaXYuY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5zZWN0aW9uIGRpdi5jb250YWluZXIgaDIgYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuc2VjdGlvbiBkaXYuY29udGFpbmVyIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iLCIkYmdIZWFkZXI6ICMxZjIyMzU7XG4kY29sb3JIZWFkZXI6ICNmZmY7XG4kaG92ZXJDb2xvckhlYWRlcjogI2ZmNTE1MTtcbiRtYXhXaWR0aEhlYWRlcjogNzAwcHg7XG5cbiRjb2xvckhhbWJ1cmdlcjogJGNvbG9ySGVhZGVyO1xuJGJnSGFtYnVyZ2VyOiAjMWYyMjM1O1xuJGNvbG9ySGFtYnVyZ2VyTmF2OiAjZmZmO1xuJGFuaW1hdGVIYW1idXJnZXI6IDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiRjb2xvckhvbWU6ICNmZmY7XG5cbiRiZ01haW46IHRyYW5zcGFyZW50O1xuJGNvbG9yTWFpbjogIzIxMjUyOTtcbiRtYXhXaWR0aE1haW46IDkwMHB4O1xuXG4kc2tpbHNDb2xvckxpbmU6ICMwMDZiZDY7XG4kc2tpbHNDb2xvckNpcmNsZTogJHNraWxzQ29sb3JMaW5lO1xuXG4kaG92ZXJDb2xvckNvbnRhY3Q6ICMwMDA0ZTc7XG5cbiR3aWR0aEVkdWNhdGlvbjogODAwcHg7XG4kbWF4V2lkdGhFZHVjYXRpb246IDUwMHB4O1xuJGJnRWR1Y2F0aW9uQ2FyZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJGNvbG9yRWR1Y2F0aW9uQ2FyZDogI2ZmZjtcbiRjb2xvckVkdWNhdGlvblRpdGxlQ2FyZDogIzE2YzBmMDtcbiRib3JkZXJFZHVjYXRpb25DYXJkOiAjZmZmO1xuXG4kYmdGb290ZXI6ICMxZjIyMzU7XG4kY29sb3JGb290ZXI6ICNmZmY7XG4kbWF4V2lkdGhGb290ZXI6IDcwMHB4O1xuXG4kc2NyZWVuTWF4V2lkdGgxOiA4MDBweDtcbiRzY3JlZW5NYXhXaWR0aDI6IDY4MHB4O1xuJHNjcmVlbk1heFdpZHRoMzogNDAwcHg7XG4kc2NyZWVuTWF4V2lkdGg0OiA3NDBweDtcblxuJGJnU2VjdGlvblNraWxsczogcmdiKDI0MywgMjQyLCAyNDkpO1xuIl19 */"]
      });
      return HomeComponent;
    }();
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

    var MainComponent = /*@__PURE__*/function () {
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
      return MainComponent;
    }();
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

    var SkillsComponent = /*@__PURE__*/function () {
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
            progress: 45
          }, {
            name: 'Angular',
            progress: 45
          }, {
            name: 'Vue.js',
            progress: 55
          }, {
            name: 'React',
            progress: 40
          }, {
            name: 'JQuery',
            progress: 50
          }, {
            name: 'NodeJS',
            progress: 75
          }, {
            name: 'Express',
            progress: 80
          }, {
            name: 'Gulp',
            progress: 60
          }, {
            name: 'Webpack',
            progress: 30
          }, {
            name: 'Electron',
            progress: 25
          }, {
            name: 'React Native',
            progress: 25
          }, {
            name: 'NPM',
            progress: 60
          }, {
            name: 'Python',
            progress: 30
          }, {
            name: 'Django',
            progress: 20
          }, {
            name: 'PHP',
            progress: 65
          }, {
            name: 'Laravel',
            progress: 10
          }, {
            name: 'WordPress',
            progress: 10
          }, {
            name: 'Java',
            progress: 15
          }, {
            name: 'Spring',
            progress: 5
          }, {
            name: 'GIT',
            progress: 55
          }, {
            name: 'Linux',
            progress: 20
          }, {
            name: 'Docker',
            progress: 10
          }, {
            name: 'SQL (MySQL)',
            progress: 40
          }, {
            name: 'MongoDB',
            progress: 40
          }, {
            name: 'XML',
            progress: 40
          }]
        }, {
          title: 'Languages',
          elems: [{
            name: 'Spanish',
            progress: 60
          }, {
            name: 'English',
            progress: 30
          }, {
            name: 'Russian',
            progress: 100
          }, {
            name: 'Italian',
            progress: 15
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
        styles: ["section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  color: #212529;\n  background-color: #f3f2f9;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  width: 95%;\n  margin: 0 auto;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: uppercase;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n@media screen and (max-width: 680px) {\n  section[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: #006bd6;\n  border-radius: 10px;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%]   div.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  border-radius: 100%;\n  background-color: #fff;\n  transform: translate(0%, -50%);\n  border: 3px solid #006bd6;\n  top: 50%;\n  right: 0;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   div.progress[_ngcontent-%COMP%]   div.circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: 4px;\n}\nsection[_ngcontent-%COMP%]    > div.container[_ngcontent-%COMP%]   div.skills[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]   div.elem[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhbmVrL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L9Cf0YDQvtC10LrRgtGLL1BvcnRmb2xpby9hcHAvc3JjL2FwcC9tYWluL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS92YW5lay/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy/Qn9GA0L7QtdC60YLRiy9Qb3J0Zm9saW8vYXBwL3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21haW4vc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGVBQUE7RUFDQSxjQ1NXO0VEUlgseUJDZ0NpQjtBQ2pDbEI7QUZFQztFQUNDLGdCQ09hO0VETmIsVUFBQTtFQUNBLGNBQUE7QUVBRjtBRkNFO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBRUNIO0FGQ0U7RUFDQyxnQkFBQTtBRUNIO0FGQUc7RUFDQyxtQkFBQTtBRUVKO0FGQUc7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FFRUo7QUZESTtFQUpEO0lBS0UsMEJBQUE7RUVJSDtBQUNGO0FGSEk7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBRUtMO0FGSks7RUFDQyxXQUFBO0VBQ0EseUJDaEJXO0VEaUJYLG1CQUFBO0VBQ0Esa0JBQUE7QUVNTjtBRkxNO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUVPUDtBRk5PO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRVFSO0FGSks7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FFTU4iLCJmaWxlIjoic3JjL2FwcC9tYWluL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcblxuc2VjdGlvbiB7XG5cdHBhZGRpbmc6IDgwcHggMDtcblx0Y29sb3I6ICRjb2xvck1haW47XG5cdGJhY2tncm91bmQtY29sb3I6ICRiZ1NlY3Rpb25Ta2lsbHM7XG5cdD4gZGl2LmNvbnRhaW5lciB7XG5cdFx0bWF4LXdpZHRoOiAkbWF4V2lkdGhNYWluO1xuXHRcdHdpZHRoOiA5NSU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0aDIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR9XG5cdFx0ZGl2LnNraWxscyB7XG5cdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0aDMge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0fVxuXHRcdFx0ZGl2LmNvbnRhaW5lciB7XG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG5cdFx0XHRcdGNvbHVtbi1nYXA6IDIwcHg7XG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzY3JlZW5NYXhXaWR0aDIpIHtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkaXYuZWxlbSB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG5cdFx0XHRcdFx0ZGl2LnByb2dyZXNzIHtcblx0XHRcdFx0XHRcdGhlaWdodDogOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHNraWxzQ29sb3JMaW5lO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGRpdi5jaXJjbGUge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAzcHggc29saWQgJHNraWxzQ29sb3JDaXJjbGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogNTAlO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRcdHRvcDogLTIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIiRiZ0hlYWRlcjogIzFmMjIzNTtcbiRjb2xvckhlYWRlcjogI2ZmZjtcbiRob3ZlckNvbG9ySGVhZGVyOiAjZmY1MTUxO1xuJG1heFdpZHRoSGVhZGVyOiA3MDBweDtcblxuJGNvbG9ySGFtYnVyZ2VyOiAkY29sb3JIZWFkZXI7XG4kYmdIYW1idXJnZXI6ICMxZjIyMzU7XG4kY29sb3JIYW1idXJnZXJOYXY6ICNmZmY7XG4kYW5pbWF0ZUhhbWJ1cmdlcjogMC4zcyBlYXNlLWluLW91dDtcblxuJGNvbG9ySG9tZTogI2ZmZjtcblxuJGJnTWFpbjogdHJhbnNwYXJlbnQ7XG4kY29sb3JNYWluOiAjMjEyNTI5O1xuJG1heFdpZHRoTWFpbjogOTAwcHg7XG5cbiRza2lsc0NvbG9yTGluZTogIzAwNmJkNjtcbiRza2lsc0NvbG9yQ2lyY2xlOiAkc2tpbHNDb2xvckxpbmU7XG5cbiRob3ZlckNvbG9yQ29udGFjdDogIzAwMDRlNztcblxuJHdpZHRoRWR1Y2F0aW9uOiA4MDBweDtcbiRtYXhXaWR0aEVkdWNhdGlvbjogNTAwcHg7XG4kYmdFZHVjYXRpb25DYXJkOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kY29sb3JFZHVjYXRpb25DYXJkOiAjZmZmO1xuJGNvbG9yRWR1Y2F0aW9uVGl0bGVDYXJkOiAjMTZjMGYwO1xuJGJvcmRlckVkdWNhdGlvbkNhcmQ6ICNmZmY7XG5cbiRiZ0Zvb3RlcjogIzFmMjIzNTtcbiRjb2xvckZvb3RlcjogI2ZmZjtcbiRtYXhXaWR0aEZvb3RlcjogNzAwcHg7XG5cbiRzY3JlZW5NYXhXaWR0aDE6IDgwMHB4O1xuJHNjcmVlbk1heFdpZHRoMjogNjgwcHg7XG4kc2NyZWVuTWF4V2lkdGgzOiA0MDBweDtcbiRzY3JlZW5NYXhXaWR0aDQ6IDc0MHB4O1xuXG4kYmdTZWN0aW9uU2tpbGxzOiByZ2IoMjQzLCAyNDIsIDI0OSk7XG4iLCJzZWN0aW9uIHtcbiAgcGFkZGluZzogODBweCAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJmOTtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5zZWN0aW9uID4gZGl2LmNvbnRhaW5lciBkaXYuc2tpbGxzIGRpdi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMgZGl2LmNvbnRhaW5lciBkaXYuZWxlbSBkaXYucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmJkNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIGRpdi5wcm9ncmVzcyBkaXYuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDZiZDY7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbn1cbnNlY3Rpb24gPiBkaXYuY29udGFpbmVyIGRpdi5za2lsbHMgZGl2LmNvbnRhaW5lciBkaXYuZWxlbSBkaXYucHJvZ3Jlc3MgZGl2LmNpcmNsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICByaWdodDogNHB4O1xufVxuc2VjdGlvbiA+IGRpdi5jb250YWluZXIgZGl2LnNraWxscyBkaXYuY29udGFpbmVyIGRpdi5lbGVtIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */"]
      });
      return SkillsComponent;
    }();
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
    /*! /home/vanek/Рабочий стол/Проекты/Portfolio/app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map