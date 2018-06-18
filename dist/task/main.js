(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  height: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div>\n  <app-header></app-header>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _components_component_module__WEBPACK_IMPORTED_MODULE_5__["ComponentModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/activity/activity.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/activity/activity.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/activity/activity.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/activity/activity.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  activity works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/activity/activity.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/activity/activity.component.ts ***!
  \***********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/components/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/components/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/components/component-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/component-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRoutingModule", function() { return ComponentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/members.component */ "./src/app/components/members/members.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'activity', component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__["ActivityComponent"] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_5__["MembersComponent"] },
];
var ComponentRoutingModule = /** @class */ (function () {
    function ComponentRoutingModule() {
    }
    ComponentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ComponentRoutingModule);
    return ComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/component.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-routing.module */ "./src/app/components/component-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/components/activity/activity.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members/members.component */ "./src/app/components/members/members.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_7__["MembersComponent"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_7__["MembersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _component_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentRoutingModule"]
            ],
            providers: []
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Nav Bar*/\r\n\r\n.navbar_main {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 5%;\r\n  background: #211645;\r\n  color: white !important;\r\n}\r\n\r\n.navbar_main a {\r\n  color: white;\r\n}\r\n\r\n.navbar_left {\r\n  float: left;\r\n  min-width: 20%;\r\n}\r\n\r\n.navbar_left i {\r\n  margin: 15px;\r\n}\r\n\r\n.navbar_center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-content: center;\r\n  min-width: 60%;\r\n  color: #ccc !important;\r\n}\r\n\r\n.navbar_center a {\r\n  color: #ccc;\r\n}\r\n\r\n.navbar_right {\r\n  padding: 5px;\r\n  float: right;\r\n  min-width: 20%;\r\n}\r\n\r\n.navbar_right span {\r\n  background: #1d123d;\r\n  border-radius: 100px;\r\n  margin: 0 5px 0 10px;\r\n  float: left;\r\n}\r\n\r\n/* Active Link */\r\n\r\n.active-link {\r\n  border-bottom: 4px solid #ccc;\r\n  color: white !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--    Navigation Part Start's-->\n\n<nav class='navbar_main'>\n  <div class=\"navbar_left\">\n    <i class=\"fas fa-bars\"></i>\n    <a class=\"navbar-brand\" href=\"\">Name of the Project</a>\n  </div>\n  <div class=\"navbar_center\">\n    <a class=\"nav-item nav-link\" routerLink=\"/tasks\" routerLinkActive=\"active-link\">Tasks\n      <span class=\"sr-only\">(current)</span>\n    </a>\n    <a class=\"nav-item nav-link\" routerLink=\"/users\" routerLinkActive=\"active-link\">Users</a>\n    <a class=\"nav-item nav-link\" routerLink=\"/activity\" routerLinkActive=\"active-link\">Activity</a>\n    <a class=\"nav-item nav-link\" routerLink=\"/members\" routerLinkActive=\"active-link\">Members</a>\n  </div>\n  <div class=\"navbar_right\">\n    <span>\n      <a class=\"nav-item nav-link\" routerLink=\"\">\n        <i class=\"fas fa-user-circle\"></i>\n      </a>\n    </span>\n    <span>\n      <a class=\"nav-item nav-link\" routerLink=\"\" >\n        <i class=\"fas fa-life-ring\"></i> Support</a>\n    </span>\n    <span>\n      <a class=\"nav-item nav-link\" routerLink=\"\" >\n        <i class=\"fas fa-comment-alt\"></i>\n      </a>\n    </span>\n  </div>\n</nav>\n\n<!--    Navigation Part End's-->\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/members/members.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/members/members.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/members/members.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/members/members.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  members works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/members/members.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/members/members.component.ts ***!
  \*********************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MembersComponent = /** @class */ (function () {
    function MembersComponent() {
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/components/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/components/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.ts ***!
  \*****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/components/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fonts */\r\n\r\ni {\r\n  color: #b3b3b3;\r\n}\r\n\r\n/*Content*/\r\n\r\n.content_top,\r\n.content_bottom {\r\n  background: white;\r\n  border-bottom: 1.5px solid #ebe9e9;\r\n}\r\n\r\n.content_bottom {\r\n  box-shadow: 1px 1px 2px #ebe9e9;\r\n}\r\n\r\n.avatar-image {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 100%;\r\n}\r\n\r\n.profile-image {\r\n  width: 90px;\r\n  height: 90px;\r\n  border-radius: 100%;\r\n  border: 0.5px solid #b3b3b3;\r\n}\r\n\r\n/*Modal*/\r\n\r\n.modal-header,\r\n.modal-footer {\r\n  border: none;\r\n}\r\n\r\n/*Table*/\r\n\r\nth {\r\n  color: #b3b3b3;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.table_span {\r\n  background: #fafafa;\r\n  border-radius: 5px;\r\n  padding: 1px 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n\n  <!--    Content Top Part Start's-->\n  <div class=\"row content_top p-4\">\n    <div class=\"col\">\n      <div class='row justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center'>\n        <h1>User Directory</h1>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class='row justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center'>\n        <button class='btn btn-primary p-2' data-toggle=\"modal\" data-target=\"#insertModal\">\n          <i class=\"fas fa-plus\" style=\"color: #fff !important\"></i> Add New User</button>\n      </div>\n\n      <!-- Insert Modal -->\n      <div class=\"modal fade bd-example-modal-lg\" id=\"insertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"insertModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"insertModalLabel\">Add New User</h5>\n              <button type=\"button\" class=\"close\" #closeBtn data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body p-5\">\n              <form [formGroup]=\"insertForm\" (ngSubmit)=\"onSubmitInsert()\">\n                <div class='row'>\n                  <div class='col-4'>\n                    <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;\">\n                      <div class=\"card-body\">\n                        <div class=\"row justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center\">\n                          <div class=\"text-center\">\n                            <img src=\"https://cdn-images-1.medium.com/max/1412/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg\" class=\"profile-image\" alt=\"\">\n                          </div>\n                        </div>\n                        <div class=\"row mt-2 justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center\">\n                          <button type=\"button\" class=\"btn btn-primary btn-block\">Upload</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class='col-8'>\n                    <div class=\"form-group\">\n                      <label for=\"insertUserName1\">User Name</label>\n                      <input type=\"text\" class=\"form-control\" id=\"insertUserName1\" formControlName='username' aria-describedby=\"usernameHelp\" placeholder=\"enter username\">\n                      <div *ngIf=\"insertForm.controls['username'].invalid && (insertForm.controls['username'].dirty || insertForm.controls['username'].touched)\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"insertForm.controls['username'].errors.required\">\n                          User Name is required.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"insertAddress1\">Address</label>\n                      <input type=\"text\" class=\"form-control\" id=\"insertAddress1\" formControlName='address' placeholder=\"enter address\">\n                      <div *ngIf=\"insertForm.controls['address'].invalid && (insertForm.controls['address'].dirty || insertForm.controls['address'].touched)\"\n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"insertForm.controls['address'].errors.required\">\n                          Address is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class='row'>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"insertContact1\">Contact</label>\n                      <input type=\"tel\" class=\"form-control\" id=\"insertContact1\" formControlName='contact' aria-describedby=\"contactHelp\" placeholder=\"enter contact\">\n                      <div *ngIf=\"insertForm.controls['contact'].invalid && (insertForm.controls['contact'].dirty || insertForm.controls['contact'].touched)\"\n                        class=\"alert alert-danger\"> Contact should be minimum 10 digits.\n                        <div *ngIf=\"insertForm.controls['contact'].errors.required\">\n                          Contact is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"insertEmail1\">Email</label>\n                      <input type=\"email\" class=\"form-control\" id=\"insertEmail1\" formControlName='email' aria-describedby=\"emailHelp\" placeholder=\"enter email\">\n                      <div *ngIf=\"insertForm.controls['email'].invalid && (insertForm.controls['email'].dirty || insertForm.controls['email'].touched)\"\n                        class=\"alert alert-danger\"> Please, enter a valid email.\n                        <div *ngIf=\"insertForm.controls['email'].errors.required\">\n                          Email is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!insertForm.valid\">Add new user</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!--    Content Top Part End's-->\n\n  <!--    Content Bottom Part Start's-->\n\n  <div class=\"row no-gutters mt-5 justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center\">\n    <div class=\"col-md-10 content_bottom rounded\">\n      <div class='table-responsive text-left'>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th scope=\"col\">USER NAME</th>\n              <th scope=\"col\">ADDRESS</th>\n              <th scope=\"col\">CONTACT</th>\n              <th scope=\"col\">EMAIL</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of users;let i=index;\">\n              <td>\n                <img class='avatar-image' src='https://cdn-images-1.medium.com/fit/c/75/75/1*nbJ41jD1-r2Oe6FsLjKaOg.png'> {{user.username}}\n              </td>\n              <td>{{user.address}}</td>\n              <td>{{user.contact}}</td>\n              <td>{{user.email}}</td>\n              <td data-toggle=\"collapse\" [attr.data-target]=\"'#collapseExample' + i\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                <span class='table_span'>\n                  <i class=\"fas fa-ellipsis-h\"></i>\n                </span>\n                <div class=\"collapse mt-3\" id=\"collapseExample{{i}}\">\n                  <div class=\"card card-body\" style=\"cursor: pointer;\">\n                    <a class='m-2' data-toggle=\"modal\" (click)='selectedUser(user)' data-target=\"#updateModal\">\n                      <i class=\"fas fa-edit\"></i> Edit User Details</a>\n                    <a class='m-2' (click)='deleteUser(user._id)'>\n                      <i class=\"fas fa-trash\" style=\"color: #d0021b !important\"></i> Delete User</a>\n                  </div>\n                </div>\n\n                <!-- Update Modal -->\n                <div class=\"modal fade bd-example-modal-lg\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\"\n                  aria-hidden=\"true\">\n                  <div class=\"modal-dialog modal-lg\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"updateModalLabel\">Edit User</h5>\n                        <button type=\"button\" class=\"close\" #closeBtn data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body p-5\">\n                        <form [formGroup]=\"updateForm\" (ngSubmit)=\"onSubmitUpdate(user._id)\">\n                          <div class='row'>\n                            <div class='col-4'>\n                              <div class=\"card bg-light mb-3\" style=\"max-width: 18rem;\">\n                                <div class=\"card-body\">\n                                  <div class=\"row justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center\">\n                                    <div class=\"text-center profile-image\">\n                                      <img src=\"https://cdn-images-1.medium.com/max/1412/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg\" class=\"profile-image\" alt=\"\">\n                                    </div>\n                                  </div>\n                                  <div class=\"row mt-2 justify-content-md-center justify-content-sm-center justify-content-lg-center justify-content-xl-center\">\n                                    <button type=\"button\" class=\"btn btn-light m-1\">Upload</button>\n                                    <button type=\"button\" class=\"btn btn-light m-1\">\n                                      <i class=\"fas fa-trash\" style=\"color: #d0021b !important\"></i>\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class='col-8'>\n                              <div class=\"form-group\">\n                                <label for=\"updateUserName\">User Name</label>\n                                <input type=\"text\" class=\"form-control\" formControlName='username' id=\"updateUserName\" aria-describedby=\"usernameHelp\">\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"updateAddress\">Address</label>\n                                <input type=\"text\" class=\"form-control\" formControlName='address' id=\"updateAddress\">\n                              </div>\n                            </div>\n                          </div>\n                          <div class='row'>\n                            <div class=\"col\">\n                              <div class=\"form-group\">\n                                <label for=\"updateContact\">Contact</label>\n                                <input type=\"tel\" class=\"form-control\" id=\"updateContact\" formControlName='contact' aria-describedby=\"contactHelp\">\n                              </div>\n                            </div>\n                            <div class=\"col\">\n                              <div class=\"form-group\">\n                                <label for=\"updateEmail\">Email</label>\n                                <input type=\"email\" class=\"form-control\" id=\"updateEmail\" formControlName='email' aria-describedby=\"emailHelp\">\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]='!updateForm.valid'>Save Changes</button>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n  </div>\n\n  <!--    Content Bottom Part End's-->\n</section>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(_userService, fb) {
        this._userService = _userService;
        this.fb = fb;
        this.insertForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
        });
        this.updateForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    /**
     * @description This method triggered by insertForm
     */
    UsersComponent.prototype.onSubmitInsert = function () {
        this.insertUser(this.insertForm.value);
        this.insertForm.reset();
    };
    /**
     * @description This method triggered by updateForm
     */
    UsersComponent.prototype.onSubmitUpdate = function (idToUpdate) {
        this.updateUser(this.updateForm.value, idToUpdate);
        this.updateForm.reset();
    };
    /**
     * @description This method allows to cancel modal
     */
    UsersComponent.prototype.closeModal = function () {
        this.closeBtn.nativeElement.click();
    };
    /**
     * @description This method allows to get all users/documents
     */
    UsersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this._userService.getAllUsers().subscribe(function (data) {
            _this.users = data.json();
        });
    };
    /**
     * @description This method allows to create a user/document
     * @param formValue
     */
    UsersComponent.prototype.insertUser = function (formValue) {
        var _this = this;
        this._userService.insertUser(formValue).subscribe(function (data) {
            _this.ngOnInit();
            _this.closeModal();
        });
    };
    /**
     * @description This method allows to update a user/document
     * @param formValue
     * @param idToUpdate
     */
    UsersComponent.prototype.updateUser = function (formValue, idToUpdate) {
        var _this = this;
        this._userService.updateUser(formValue, idToUpdate).subscribe(function (data) {
            _this.ngOnInit();
            _this.closeModal();
        });
    };
    /**
     * @description This method allows to delete a user/document
     * @param idToRemove
     */
    UsersComponent.prototype.deleteUser = function (idToRemove) {
        var _this = this;
        this._userService.deleteUser(idToRemove).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    /**
     * @description This method allows to set values for updateForm fields
     * @param selectedUserToUpdate
     */
    UsersComponent.prototype.selectedUser = function (selectedUserToUpdate) {
        this.updateForm.setValue({
            username: selectedUserToUpdate.username,
            address: selectedUserToUpdate.address,
            contact: selectedUserToUpdate.contact,
            email: selectedUserToUpdate.email,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UsersComponent.prototype, "closeBtn", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")],
        }),
        __metadata("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_1__["UserserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: User, CONFIGURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIGURL", function() { return CONFIGURL; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var CONFIGURL = '/api/';


/***/ }),

/***/ "./src/app/userservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/userservice.service.ts ***!
  \****************************************/
/*! exports provided: UserserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserserviceService", function() { return UserserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserserviceService = /** @class */ (function () {
    function UserserviceService(_http) {
        this._http = _http;
        this.url = _config_config__WEBPACK_IMPORTED_MODULE_2__["CONFIGURL"];
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    UserserviceService.prototype.getAllUsers = function () {
        return this._http.get(this.url + "users");
    };
    UserserviceService.prototype.insertUser = function (formValue) {
        return this._http.post(this.url + "user", formValue, this.options);
    };
    UserserviceService.prototype.updateUser = function (formValue, idToUpdate) {
        return this._http.put(this.url + "user/" + idToUpdate, formValue, this.options);
    };
    UserserviceService.prototype.deleteUser = function (idToRemove) {
        return this._http.delete(this.url + "user/" + idToRemove);
    };
    UserserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserserviceService);
    return UserserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\teja\Desktop\smartbeings\task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map