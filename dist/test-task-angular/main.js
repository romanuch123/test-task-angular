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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_components_nested_route_loader_nested_route_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/nested-route-loader/nested-route-loader.component */ "./src/app/core/components/nested-route-loader/nested-route-loader.component.ts");
/* harmony import */ var _modules_user_pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/user/pages/user-dashboard/user-dashboard.component */ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _modules_user_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user/pages/login/login.component */ "./src/app/modules/user/pages/login/login.component.ts");
/* harmony import */ var _modules_user_pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/user/pages/tasks/tasks.component */ "./src/app/modules/user/pages/tasks/tasks.component.ts");
/* harmony import */ var _modules_user_pages_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/user/pages/completed-tasks/completed-tasks.component */ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.ts");
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/guards/auth-guard.service */ "./src/app/core/guards/auth-guard.service.ts");










var routes = [
    {
        path: '',
        component: _core_components_nested_route_loader_nested_route_loader_component__WEBPACK_IMPORTED_MODULE_3__["NestedRouteLoaderComponent"],
        children: [
            {
                path: '',
                component: _modules_user_pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["UserDashboardComponent"],
            },
            {
                path: 'tasks',
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                component: _modules_user_pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"],
            },
            {
                path: 'completed-tasks',
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                component: _modules_user_pages_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_7__["CompletedTasksComponent"],
            },
            {
                path: 'login',
                canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
                component: _modules_user_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            },
        ],
    },
    {
        path: 'not-found',
        component: _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
    },
    {
        path: '**',
        redirectTo: '/not-found'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-notification></app-notification>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-task-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _modules_user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/user/user.module */ "./src/app/modules/user/user.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _modules_user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/dashboard-menu/dashboard-menu.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/dashboard-menu/dashboard-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"dashboard-menu__list\">\n    <li *ngFor=\"let menuItem of menuList\" (click)=\"hideMenu.emit()\" class=\"dashboard-menu__list__item\">\n      <a\n        routerLink=\"/{{menuItem.path}}\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact:true}\"\n      >\n        <span><i [ngClass]=\"menuItem.icon\"></i></span>{{ menuItem.name }}\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/dashboard-menu/dashboard-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/components/dashboard-menu/dashboard-menu.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-menu__list {\n  list-style-type: none; }\n  .dashboard-menu__list__item a {\n    padding: 10px;\n    text-decoration: none;\n    color: #000;\n    display: block;\n    box-sizing: border-box; }\n  .dashboard-menu__list__item a:hover {\n      background: #ececec; }\n  .dashboard-menu__list__item a.active {\n      background: lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Rhc2hib2FyZC1tZW51L0Q6XFxQcm9ncmFtaW5nXFxHaXRIdWJcXHRlc3QtdGFzay1hbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxkYXNoYm9hcmQtbWVudVxcZGFzaGJvYXJkLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBQTtFQUNwQjtJQUVHLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0IsRUFBQTtFQU56QjtNQVFLLG1CQUErQixFQUFBO0VBUnBDO01BV0sscUJBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZGFzaGJvYXJkLW1lbnUvZGFzaGJvYXJkLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLW1lbnVfX2xpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAmX19pdGVtIHtcclxuICAgIGEge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNmOWY5ZjksIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNmOWY5ZjksIDE1JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/dashboard-menu/dashboard-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/dashboard-menu/dashboard-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuComponent", function() { return DashboardMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardMenuComponent = /** @class */ (function () {
    function DashboardMenuComponent(router) {
        this.router = router;
        this.hideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuList = [
            {
                id: '1',
                name: 'Home',
                icon: 'fas fa-users-class',
                path: '',
            },
            {
                id: '2',
                name: 'Tasks',
                icon: '',
                path: 'tasks',
            },
            {
                id: '3',
                name: 'Completed tasks',
                icon: '',
                path: 'completed-tasks',
            },
        ];
    }
    DashboardMenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardMenuComponent.prototype, "hideMenu", void 0);
    DashboardMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-menu',
            template: __webpack_require__(/*! ./dashboard-menu.component.html */ "./src/app/core/components/dashboard-menu/dashboard-menu.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-menu.component.scss */ "./src/app/core/components/dashboard-menu/dashboard-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardMenuComponent);
    return DashboardMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/components/nested-route-loader/nested-route-loader.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/nested-route-loader/nested-route-loader.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-header\">\n  <!-- <div class=\"dashboard-menu-button\" (click)=\"openNav()\" [ngClass]=\"open ? 'dashboard-menu-open' : ''\">\n    <i class=\"fas fa-bars\"></i>\n    <i class=\"fas fa-times\"></i>\n  </div> -->\n  <div class=\"dashboard-header__logo logo\">\n    <a routerLink=\"/\">\n       LOGO\n    </a>\n  </div>\n  <div class=\"dashboard-header__user-info\">\n    <ng-container *ngIf=\"authService.isUserAuthorized(); else authUser\">\n      <span class=\"greeting\">Hey, {{user?.firstName}}</span>\n      <span (click)=\"logout()\" class=\"sign-control\">Logout\n        <!-- <i class=\"far fa-power-off icon-right\"></i> -->\n      </span>\n    </ng-container>\n    <ng-template #authUser>\n      <span>\n        <a routerLink=\"/login\" class=\"sign-control\">\n          Login\n       </a>\n      </span>\n    </ng-template>\n\n  </div>\n</div>\n\n<div class=\"dashboard\" [ngClass]=\"open ? 'dashboard-menu-open' : ''\">\n  <div class=\"dashboard__menu\">\n    <app-dashboard-menu (hideMenu)=\"open = false;\"></app-dashboard-menu>\n  </div>\n  <div class=\"dashboard__content\">\n    <div class=\"content-data\">\n      <router-outlet>\n      </router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/components/nested-route-loader/nested-route-loader.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/nested-route-loader/nested-route-loader.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 100;\n  box-sizing: border-box;\n  min-height: 64px;\n  background: #244632;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px; }\n  .dashboard-header__logo {\n    color: #fff; }\n  .dashboard-header__logo a {\n      color: #fff;\n      text-decoration: none; }\n  .dashboard-header__logo a:hover {\n        color: #e6e5e5; }\n  .dashboard-header__user-info {\n    color: #fff; }\n  .dashboard-header__user-info a {\n      color: #fff;\n      text-decoration: none; }\n  .dashboard-header__user-info .sign-control {\n      border: 1px solid #fff;\n      border-radius: 7px;\n      padding: 5px 20px;\n      margin-left: 10px; }\n  .dashboard-header__user-info .sign-control:hover {\n        cursor: pointer; }\n  .dashboard__menu {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  width: 200px;\n  background: #f9f9f9;\n  min-height: 100vh; }\n  .dashboard__content {\n  padding: 64px 0 0 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25lc3RlZC1yb3V0ZS1sb2FkZXIvRDpcXFByb2dyYW1pbmdcXEdpdEh1YlxcdGVzdC10YXNrLWFuZ3VsYXIvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXG5lc3RlZC1yb3V0ZS1sb2FkZXJcXG5lc3RlZC1yb3V0ZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUNmO0lBQ0UsV0FBVyxFQUFBO0VBRFo7TUFHRyxXQUFXO01BQ1gscUJBQXFCLEVBQUE7RUFKeEI7UUFNSyxjQUF3QixFQUFBO0VBSTlCO0lBQ0UsV0FBVyxFQUFBO0VBRFo7TUFHRyxXQUFXO01BQ1gscUJBQXFCLEVBQUE7RUFKeEI7TUFPRyxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtFQVZwQjtRQVlLLGVBQWUsRUFBQTtFQU1yQjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uZXN0ZWQtcm91dGUtbG9hZGVyL25lc3RlZC1yb3V0ZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyNDQ2MzI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgJl9fbG9nb3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oI2ZmZiwgMTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX191c2VyLWluZm8ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5zaWduLWNvbnRyb2wge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kYXNoYm9hcmQge1xyXG4gICZfX21lbnUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA2NHB4IDAgMCAyMDBweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/nested-route-loader/nested-route-loader.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/core/components/nested-route-loader/nested-route-loader.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NestedRouteLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedRouteLoaderComponent", function() { return NestedRouteLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/core/services/auth.service.ts");





var NestedRouteLoaderComponent = /** @class */ (function () {
    function NestedRouteLoaderComponent(router, userService, authService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.open = false;
        this.currentPage = '';
        this.isLoaded = false;
        this.isLoading = true;
    }
    NestedRouteLoaderComponent.prototype.ngOnInit = function () {
    };
    NestedRouteLoaderComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) {
            _this.user = data;
        });
    };
    NestedRouteLoaderComponent.prototype.openNav = function () {
        this.open = !this.open;
    };
    NestedRouteLoaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NestedRouteLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nested-route-loader',
            template: __webpack_require__(/*! ./nested-route-loader.component.html */ "./src/app/core/components/nested-route-loader/nested-route-loader.component.html"),
            styles: [__webpack_require__(/*! ./nested-route-loader.component.scss */ "./src/app/core/components/nested-route-loader/nested-route-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NestedRouteLoaderComponent);
    return NestedRouteLoaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/core/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/components/notification/notification.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/notification/notification.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification-zone\">\n  <div\n    *ngFor=\"let notification of notifications; let i = index\"\n    class=\"single-notification {{notification.status}}\"\n  >\n    <i class=\"icon material-icons\">grade</i>\n    <div class=\"message\">\n      <span class=\"title\"> {{ notification.title }}</span>\n      <p>{{notification.message}}</p>\n    </div>\n    <div class=\"close-icon\" (click)=\"deleteNotification(i)\"><i class=\"material-icons\">close</i></div>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/core/components/notification/notification.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/notification/notification.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-zone {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  min-width: 200px;\n  z-index: 10000 !important; }\n  .notification-zone .single-notification {\n    margin-bottom: 7px;\n    position: relative;\n    padding: 7px 15px 7px 15px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n    border-radius: 7px;\n    background: #aaa;\n    color: #ffffff;\n    opacity: 1; }\n  .notification-zone .single-notification:last-child {\n      margin-bottom: 0; }\n  .notification-zone .single-notification.success {\n      background: #7db4a3; }\n  .notification-zone .single-notification.info {\n      background: #566a82; }\n  .notification-zone .single-notification.error {\n      background: #e6375c; }\n  .notification-zone .single-notification p {\n      padding: 0 0 3px;\n      margin: 0; }\n  .notification-zone .single-notification p .badge {\n        padding: 2px 6px;\n        letter-spacing: 0;\n        margin: 0 3px;\n        background: rgba(0, 0, 0, 0.3);\n        font-style: normal;\n        font-weight: 300; }\n  .notification-zone .single-notification .title {\n      padding: 2px 20px 5px 0;\n      display: block;\n      font-size: 16px;\n      font-style: normal;\n      font-weight: 300; }\n  .notification-zone .single-notification .title i,\n      .notification-zone .single-notification .title svg {\n        margin-right: 5px;\n        font-size: 16px; }\n  .notification-zone .single-notification .title:last-child {\n        padding: 0; }\n  .notification-zone .single-notification .icon {\n      position: absolute;\n      display: inline-block;\n      left: 11px;\n      top: 9px;\n      padding: 0;\n      font-size: 24px; }\n  .notification-zone .single-notification .message {\n      padding: 0;\n      margin-left: 30px; }\n  .notification-zone .single-notification .message p {\n        font-size: 13px;\n        font-style: normal;\n        font-weight: 200; }\n  .notification-zone .single-notification .close-icon {\n      z-index: 100;\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      cursor: pointer;\n      font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9EOlxcUHJvZ3JhbWluZ1xcR2l0SHViXFx0ZXN0LXRhc2stYW5ndWxhci9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7RUFMM0I7SUFRSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQ0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVSxFQUFBO0VBZmQ7TUFpQk0sZ0JBQWdCLEVBQUE7RUFqQnRCO01BcUJNLG1CQUFtQixFQUFBO0VBckJ6QjtNQXlCTSxtQkFBbUIsRUFBQTtFQXpCekI7TUE2Qk0sbUJBQW1CLEVBQUE7RUE3QnpCO01BaUNNLGdCQUFnQjtNQUNoQixTQUFTLEVBQUE7RUFsQ2Y7UUFxQ1EsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixnQkFBZ0IsRUFBQTtFQTFDeEI7TUErQ00sdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0VBbkR0Qjs7UUF1RFEsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQXhEdkI7UUE0RFEsVUFBVSxFQUFBO0VBNURsQjtNQWlFTSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixRQUFRO01BQ1IsVUFBVTtNQUNWLGVBQWUsRUFBQTtFQXRFckI7TUEwRU0sVUFBVTtNQUNWLGlCQUFpQixFQUFBO0VBM0V2QjtRQThFUSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBO0VBaEZ4QjtNQXFGTSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsZUFBZTtNQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi16b25lIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuXHJcbiAgLnNpbmdsZS1ub3RpZmljYXRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogN3B4IDE1cHggN3B4IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN1Y2Nlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjN2RiNGEzO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NjZhODI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5lcnJvciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlNjM3NWM7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAzcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAyMHB4IDVweCAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICAgICBpLFxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbGVmdDogMTFweDtcclxuICAgICAgdG9wOiA5cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlLWljb24ge1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA4cHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/notification/notification.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/notification/notification.component.ts ***!
  \************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/core/services/notification.service.ts");



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
        this.notifications = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.notificationSubscription) {
            this.notificationSubscription = this.notificationService
                .notifications.subscribe(function (notification) {
                _this.notifications.push(notification);
                setTimeout(function () {
                    var index = _this.notifications.indexOf(notification);
                    if (index !== -1) {
                        _this.notifications.splice(index, 1);
                    }
                }, 3000);
            });
        }
    };
    NotificationComponent.prototype.deleteNotification = function (index) {
        this.notifications.splice(index, 1);
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        if (this.notificationSubscription) {
            this.notificationSubscription.unsubscribe();
        }
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/core/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/core/components/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_nested_route_loader_nested_route_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nested-route-loader/nested-route-loader.component */ "./src/app/core/components/nested-route-loader/nested-route-loader.component.ts");
/* harmony import */ var _components_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard-menu/dashboard-menu.component */ "./src/app/core/components/dashboard-menu/dashboard-menu.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/core/components/notification/notification.component.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [],
            declarations: [
                _components_nested_route_loader_nested_route_loader_component__WEBPACK_IMPORTED_MODULE_5__["NestedRouteLoaderComponent"],
                _components_dashboard_menu_dashboard_menu_component__WEBPACK_IMPORTED_MODULE_6__["DashboardMenuComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
            ],
            exports: [
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"],
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guards/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserAuthorized() && state.url !== '/login') {
            return true;
        }
        if (this.authService.isUserAuthorized() && state.url === '/login') {
            this.router.navigate(['']);
            return false;
        }
        if (state.url === '/login') {
            return true;
        }
        this.router.navigate(['login']);
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (email, password) {
        var users = JSON.parse(localStorage.getItem('users'));
        var user = users.find(function (el) { return el.email === email && el.password === password; });
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Boolean(user));
    };
    AuthService.prototype.registration = function (user) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var isUserExist = users.find(function (el) { return el.email === user.email; });
        if (!isUserExist) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('user', JSON.stringify(user));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Boolean(isUserExist));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
    };
    AuthService.prototype.isUserAuthorized = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return Boolean(user);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NotificationService.prototype.sendErrorNotification = function (title, message) {
        this.sendNotification('error', title, message);
    };
    NotificationService.prototype.sendInfoNotification = function (title, message) {
        this.sendNotification('info', title, message);
    };
    NotificationService.prototype.sendSuccessNotification = function (title, message) {
        this.sendNotification('success', title, message);
    };
    NotificationService.prototype.sendNotification = function (status, title, message) {
        this.notifications.next({ status: status, title: title, message: message });
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/services/task.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/task.service.ts ***!
  \***********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");





var TaskService = /** @class */ (function () {
    function TaskService(userService) {
        this.userService = userService;
    }
    TaskService.prototype.addNewTask = function (task) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.uncompletedTasks.unshift(task);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateUser(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateAllUsers(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task);
        }));
    };
    TaskService.prototype.getUserCompletedTasks = function () {
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user.completedTasks);
        }));
    };
    TaskService.prototype.getUserUncompletedTasks = function () {
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user.uncompletedTasks);
        }));
    };
    TaskService.prototype.getAllTasks = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user.tasks);
    };
    TaskService.prototype.updateTask = function (task) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.uncompletedTasks = user.uncompletedTasks.map(function (el) {
                if (el.id === task.id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, el, task);
                }
                return el;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateUser(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateAllUsers(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task);
        }));
    };
    TaskService.prototype.makeTaskCompleted = function (task) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.uncompletedTasks = user.uncompletedTasks.filter(function (el) { return el.id !== task.id; });
            user.completedTasks.unshift(task);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateUser(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateAllUsers(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task);
        }));
    };
    TaskService.prototype.makeTaskUncompleted = function (task) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.completedTasks = user.completedTasks.filter(function (el) { return el.id !== task.id; });
            user.uncompletedTasks.unshift(task);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateUser(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateAllUsers(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task);
        }));
    };
    TaskService.prototype.deleteTask = function (taskId) {
        var _this = this;
        return this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            user.uncompletedTasks = user.uncompletedTasks.filter(function (el) { return el.id !== taskId; });
            user.completedTasks = user.completedTasks.filter(function (el) { return el.id !== taskId; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateUser(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            _this.userService.updateAllUsers(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }));
    };
    TaskService.prototype.shareTask = function (task, user) {
        var userRecipient = user;
        userRecipient.uncompletedTasks.unshift(task);
        this.userService.updateAllUsers(userRecipient);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user.email);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem('user')));
    };
    UserService.prototype.getAllUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem('users')));
    };
    UserService.prototype.updateUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.updateAllUsers = function (user) {
        var users = JSON.parse(localStorage.getItem('users'));
        users = users.map(function (el) {
            if (el.id === user.id) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, el, user);
            }
            return el;
        });
        localStorage.setItem('users', JSON.stringify(users));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user/pages/completed-tasks/completed-tasks.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-wrapper\">\n  <h1>Completed tasks</h1>\n  <app-tasks-list\n    [tasksList]=\"tasksList\"\n    (onUpdateTask)=\"updateTask($event)\"\n    (onChangeTaskStatus)=\"changeTaskStatus($event)\"\n    (onDeleteTask)=\"deleteTask($event)\"\n  ></app-tasks-list>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user/pages/completed-tasks/completed-tasks.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9jb21wbGV0ZWQtdGFza3MvY29tcGxldGVkLXRhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user/pages/completed-tasks/completed-tasks.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompletedTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedTasksComponent", function() { return CompletedTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");




var CompletedTasksComponent = /** @class */ (function () {
    function CompletedTasksComponent(taskService, notificationService) {
        this.taskService = taskService;
        this.notificationService = notificationService;
        this.tasksList = [];
    }
    CompletedTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getUserCompletedTasks().subscribe(function (data) {
            _this.tasksList = data;
        });
    };
    CompletedTasksComponent.prototype.updateTask = function (task) {
        var _this = this;
        this.taskService.updateTask(task).subscribe(function () {
            _this.tasksList.forEach(function (el) {
                if (el.id === task.id) {
                    el.isComplete = task.isComplete;
                }
            });
            _this.notificationService.sendSuccessNotification('Updated', 'Task successfully updated');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    CompletedTasksComponent.prototype.changeTaskStatus = function (task) {
        var _this = this;
        var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { isComplete: false });
        this.taskService.makeTaskUncompleted(newTask).subscribe(function () {
            _this.tasksList = _this.tasksList.filter(function (el) { return el.id !== task.id; });
            _this.notificationService.sendSuccessNotification('Completed', 'Task was completed');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    CompletedTasksComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        this.taskService.deleteTask(taskId).subscribe(function () {
            _this.tasksList = _this.tasksList.filter(function (el) { return el.id !== taskId; });
            _this.notificationService.sendSuccessNotification('Deleted', 'Task successfully Deleted');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    CompletedTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-completed-tasks',
            template: __webpack_require__(/*! ./completed-tasks.component.html */ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.html"),
            styles: [__webpack_require__(/*! ./completed-tasks.component.scss */ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], CompletedTasksComponent);
    return CompletedTasksComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <form *ngIf=\"currentPage === 'login'\" class=\"login-form\" autocomplete=\"off\" [formGroup]=\"loginDataForm\">\n    <h1 class=\"title\">\n      Login\n    </h1>\n    <div class=\"form-row\">\n      <label for=\"login\">E-mail</label>\n      <input type=\"email\" name=\"email\" id=\"email\" class=\"form-field\" placeholder=\"E-mail\" formControlName=\"email\">\n      <span class=\"validate-msg\">The E-mail is required.</span>\n    </div>\n    <div class=\"form-row\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" id=\"password\" class=\"form-field\" placeholder=\"Password\" formControlName=\"password\">\n      <span class=\"validate-msg\">The Password is required.</span>\n    </div>\n    <div class=\"form-row text-center\">\n      <button class=\"login-btn\" (click)=\"login()\">Login</button>\n      <span *ngIf=\"!isAuthSuccess\" class=\"exist-user-msg\">Incorect user email or password.</span>\n    </div>\n    <div class=\"form-row text-center\">\n      <a (click)=\"currentPage = 'registration'\">Create new account</a>\n    </div>\n  </form>\n  <form *ngIf=\"currentPage === 'registration'\" class=\"login-form\" [formGroup]=\"registrationDataForm\">\n    <h1 class=\"login100-form-title p-b-59\">\n      Create new account\n    </h1>\n    <div class=\"form-row\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" name=\"first-name\" id=\"first-name\" class=\"form-field\" placeholder=\"First Name\" formControlName=\"firstName\">\n      <span class=\"validate-msg\">The First Name is required.</span>\n    </div>\n    <div class=\"form-row\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" name=\"last-name\" id=\"last-name\" class=\"form-field\" placeholder=\"Last Name\" formControlName=\"lastName\">\n      <span class=\"validate-msg\">The Last Name is required.</span>\n    </div>\n    <div class=\"form-row\">\n      <label for=\"username\">E-mail</label>\n      <input type=\"email\" name=\"email\" id=\"email\" class=\"form-field\" placeholder=\"E-mail\" formControlName=\"email\">\n      <span class=\"validate-msg\">The E-mail is required.</span>\n    </div>\n    <div class=\"form-row\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" name=\"password\" id=\"password\" class=\"form-field\" placeholder=\"Password\" formControlName=\"password\">\n      <span class=\"validate-msg\">The Password must be at least 6 characters long</span>\n    </div>\n    <div class=\"form-row\">\n      <label for=\"confirm-password\">Confirm Password</label>\n      <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" class=\"form-field\" placeholder=\"Confirm assword\" formControlName=\"confirmPassword\">\n      <span class=\"validate-msg\">The Confirm Password confirmation does not match.</span>\n    </div>\n    <div class=\"form-row text-center\">\n      <button class=\"login-btn\" (click)=\"registration()\">Create</button>\n      <span *ngIf=\"isUserExist\" class=\"exist-user-msg\">User with email {{ emailOfExistUser }} is exist.</span>\n    </div>\n    <div class=\"form-row text-center\">\n      <a (click)=\"currentPage = 'login'\">back to login</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user/pages/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n  padding: 5px 0; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.login-form .form-row {\n    width: 50%;\n    margin: 10px;\n    position: relative; }\n\n.login-form .form-row .validate-msg {\n      color: red;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      display: none; }\n\n.login-form .form-row .login-btn {\n      margin: 0 auto;\n      display: block;\n      background: #244632;\n      color: #fff;\n      width: 150px;\n      padding: 10px 0;\n      border-radius: 7px; }\n\n.login-form .form-row .login-btn:hover {\n        background: #13241a; }\n\n.login-form .form-row a {\n      text-decoration: underline; }\n\n.login-form .form-row a:hover {\n        cursor: pointer; }\n\n.exist-user-msg {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL2xvZ2luL0Q6XFxQcm9ncmFtaW5nXFxHaXRIdWJcXHRlc3QtdGFzay1hbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUhyQjtJQUtJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBUHRCO01BU00sVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsT0FBTztNQUNQLGFBQWEsRUFBQTs7QUFibkI7TUFnQk0sY0FBYztNQUNkLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7O0FBdEJ4QjtRQXdCUSxtQkFBZ0MsRUFBQTs7QUF4QnhDO01BNEJNLDBCQUEwQixFQUFBOztBQTVCaEM7UUE4QlEsZUFBZSxFQUFBOztBQUt2QjtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuZm9ybS1yb3cge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC52YWxpZGF0ZS1tc2cge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNDQ2MzI7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oIzI0NDYzMiwgMTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmV4aXN0LXVzZXItbXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/user/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/must-match.validator */ "./src/app/shared/helpers/must-match.validator.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");




// import { MustMatch } from '../../../../shared/helpers/must-match.validator';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, userService, authService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.currentPage = 'login';
        this.isUserExist = false;
        this.emailOfExistUser = '';
        this.isAuthSuccess = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginDataForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.registrationDataForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validator: Object(src_app_shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword'),
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginDataForm.valid) {
            var _a = this.loginDataForm.value, email = _a.email, password = _a.password;
            this.authService.login(email, password).subscribe(function (data) {
                if (data) {
                    _this.isAuthSuccess = true;
                    _this.router.navigate(['/']);
                }
                else {
                    _this.isAuthSuccess = false;
                }
            });
        }
        else {
            for (var prop in this.loginDataForm.controls) {
                if (this.loginDataForm.controls.hasOwnProperty(prop)) {
                    this.loginDataForm.controls[prop].markAsTouched();
                }
            }
        }
    };
    LoginComponent.prototype.registration = function () {
        var _this = this;
        if (this.registrationDataForm.valid) {
            var id = "f" + (+new Date).toString(16);
            var user = {
                id: id,
                firstName: this.registrationDataForm.value.firstName,
                lastName: this.registrationDataForm.value.lastName,
                email: this.registrationDataForm.value.email,
                password: this.registrationDataForm.value.password,
                completedTasks: [],
                uncompletedTasks: [],
            };
            this.authService.registration(user).subscribe(function (isUserExist) {
                _this.isUserExist = isUserExist;
                if (isUserExist) {
                    _this.emailOfExistUser = _this.registrationDataForm.value.email;
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            for (var prop in this.registrationDataForm.controls) {
                if (this.registrationDataForm.controls.hasOwnProperty(prop)) {
                    this.registrationDataForm.controls[prop].markAsTouched();
                }
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/user/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/user/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/tasks/tasks.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/pages/tasks/tasks.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-wrapper\">\n  <h1>Add new task</h1>\n  <div class=\"add-new-task\">\n    <input type=\"text\" class=\"form-field\" placeholder=\"Add new task\" [(ngModel)]=\"newTaskTitle\">\n    <button (click)=\"addNewTask()\" class=\"add-new-task__btn\" [disabled]=\"newTaskTitle.trim() === ''\"><i class=\"material-icons\">add</i></button>\n  </div>\n  <div class=\"task-list-wrapper\">\n    <h2>Task list</h2>\n    <app-tasks-list\n      [tasksList]=\"tasksList\"\n      (onUpdateTask)=\"updateTask($event)\"\n      (onChangeTaskStatus)=\"changeTaskStatus($event)\"\n      (onDeleteTask)=\"deleteTask($event)\"\n    ></app-tasks-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user/pages/tasks/tasks.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/pages/tasks/tasks.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new-task {\n  display: flex;\n  padding: 0 20px; }\n  .add-new-task__btn {\n    background: #244632;\n    color: #fff;\n    width: 60px;\n    padding: 10px 0;\n    border-radius: 7px;\n    margin-left: 10px; }\n  .add-new-task__btn:hover {\n      background: #13241a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Rhc2tzL0Q6XFxQcm9ncmFtaW5nXFxHaXRIdWJcXHRlc3QtdGFzay1hbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFxwYWdlc1xcdGFza3NcXHRhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUNmO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQU5sQjtNQVFHLG1CQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1uZXctdGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgJl9fYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNDQ2MzI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCMyNDQ2MzIsIDEwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/user/pages/tasks/tasks.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/pages/tasks/tasks.component.ts ***!
  \*************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");




var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService, notificationService) {
        this.taskService = taskService;
        this.notificationService = notificationService;
        this.newTaskTitle = '';
        this.tasksList = [];
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getUserUncompletedTasks().subscribe(function (data) {
            _this.tasksList = data;
        });
    };
    TasksComponent.prototype.addNewTask = function () {
        var _this = this;
        this.newTaskTitle = this.newTaskTitle.trim();
        var id = "f" + (+new Date).toString(16);
        var newTask = {
            id: id,
            title: this.newTaskTitle,
            isComplete: false,
            sharedFromUser: '',
        };
        this.taskService.addNewTask(newTask).subscribe(function (data) {
            _this.tasksList.unshift(data);
            _this.newTaskTitle = '';
            _this.notificationService.sendSuccessNotification('Added', 'Task successfully added');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    TasksComponent.prototype.updateTask = function (task) {
        var _this = this;
        this.taskService.updateTask(task).subscribe(function () {
            _this.tasksList.forEach(function (el) {
                if (el.id === task.id) {
                    el.title = task.title;
                    el.isComplete = task.isComplete;
                }
            });
            _this.notificationService.sendSuccessNotification('Updated', 'Task successfully updated');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    TasksComponent.prototype.changeTaskStatus = function (task) {
        var _this = this;
        var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { isComplete: true });
        this.taskService.makeTaskCompleted(newTask).subscribe(function () {
            _this.tasksList = _this.tasksList.filter(function (el) { return el.id !== task.id; });
            _this.notificationService.sendSuccessNotification('Completed', 'Task was completed');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    TasksComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        this.taskService.deleteTask(taskId).subscribe(function () {
            _this.tasksList = _this.tasksList.filter(function (el) { return el.id !== taskId; });
            _this.notificationService.sendSuccessNotification('Deleted', 'Task successfully Deleted');
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/modules/user/pages/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/modules/user/pages/tasks/tasks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-dashboard/user-dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-dashboard\">\n  <div class=\"user-dashboard__img-wrapper\">\n    <img src=\"./assets/images/angular.png\" alt=\"angular\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-dashboard/user-dashboard.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-dashboard {\n  min-height: calc(100vh - 64px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .user-dashboard__img-wrapper {\n    width: 30%; }\n  .user-dashboard__img-wrapper img {\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3VzZXItZGFzaGJvYXJkL0Q6XFxQcm9ncmFtaW5nXFxHaXRIdWJcXHRlc3QtdGFzay1hbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFxwYWdlc1xcdXNlci1kYXNoYm9hcmRcXHVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0VBQ3ZCO0lBQ0UsVUFBVSxFQUFBO0VBRFg7TUFHRyxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXIvcGFnZXMvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kYXNoYm9hcmQge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAmX19pbWctd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-dashboard/user-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-dashboard/user-dashboard.component */ "./src/app/modules/user/pages/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/user/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tasks/tasks.component */ "./src/app/modules/user/pages/tasks/tasks.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/completed-tasks/completed-tasks.component */ "./src/app/modules/user/pages/completed-tasks/completed-tasks.component.ts");









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            declarations: [
                _pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"],
                _pages_completed_tasks_completed_tasks_component__WEBPACK_IMPORTED_MODULE_8__["CompletedTasksComponent"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/shared/components/tasks-item/tasks-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/tasks-item/tasks-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"task-item\" appClickOutside (clickOutside)=\"clickOutsideEdit($event)\" #taskItemContainer>\n  <div *ngIf=\"!isEdit\" class=\"task-item__info\">\n    <input type=\"checkbox\" name=\"is-tasck-complete\" [checked]=\"tasksItem.isComplete\" (click)=\"changeTaskStatus()\">\n    <span class=\"task-item__title\">{{ tasksItem.title }}</span>\n  </div>\n  <input *ngIf=\"isEdit\" type=\"text\" class=\"form-field\" placeholder=\"Task title\" [(ngModel)]=\"newTaskTitle\">\n  <div *ngIf=\"!isEdit\" class=\"task-item__controls\">\n    <button (click)=\"isSharedOpen = true\"  #sharedButton><i class=\"material-icons\">reply</i></button>\n    <button *ngIf=\"!tasksItem.isComplete\" (click)=\"isEdit = true\"><i class=\"material-icons\">edit</i></button>\n    <button (click)=\"deleteTask(tasksItem.id)\"><i class=\"material-icons\">delete</i></button>\n  </div>\n  <div *ngIf=\"isEdit\" class=\"task-item__controls\">\n    <button (click)=\"updateTask()\" [disabled]=\"newTaskTitle.trim() === ''\"><i class=\"material-icons\">check</i></button>\n    <button (click)=\"closeEditing()\"><i class=\"material-icons\">close</i></button>\n  </div>\n  <span *ngIf=\"tasksItem.sharedFromUser !== ''\" class=\"task-item__shared-from\">Shared from: {{ tasksItem.sharedFromUser }}</span>\n  <div *ngIf=\"isSharedOpen\" class=\"task-item__shared-box shared-box\" appClickOutside (clickOutside)=\"clickOutsideSharedBlock($event)\">\n    <button (click)=\"isSharedOpen = false\" class=\"shared-box__close-btn\"><i class=\"material-icons\">close</i></button>\n    <span>Shared task with:</span>\n    <hr>\n    <div class=\"shared-box__content\">\n      <button *ngFor=\"let user of sharedUsers\" (click)=\"sharedTask(tasksItem, user)\">{{ user.email }}</button>\n    </div>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/shared/components/tasks-item/tasks-item.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/tasks-item/tasks-item.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-item {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  align-items: center;\n  padding: 10px 20px;\n  margin: 15px 20px;\n  border: 1px solid grey;\n  border-radius: 7px;\n  background: #f5f5f5; }\n  .task-item__info {\n    display: flex;\n    align-items: center; }\n  .task-item__info input {\n      margin-right: 10px; }\n  .task-item__controls {\n    display: flex; }\n  .task-item__controls button {\n      background: transparent; }\n  .task-item__shared-box {\n    position: absolute;\n    top: 110%;\n    right: 0;\n    z-index: 10;\n    width: 200px;\n    padding: 10px 20px;\n    border: 1px solid grey;\n    border-radius: 7px;\n    background: #f5f5f5;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n  .task-item__shared-from {\n    position: absolute;\n    top: -11px;\n    background: white;\n    border: 1px solid silver;\n    border-radius: 7px;\n    padding: 1px 5px; }\n  .shared-box {\n  text-align: center; }\n  .shared-box__close-btn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background: transparent;\n    padding: 3px; }\n  .shared-box__content {\n    max-height: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFza3MtaXRlbS9EOlxcUHJvZ3JhbWluZ1xcR2l0SHViXFx0ZXN0LXRhc2stYW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx0YXNrcy1pdGVtXFx0YXNrcy1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUNuQjtJQUNFLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUZwQjtNQUlHLGtCQUFrQixFQUFBO0VBR3RCO0lBQ0UsYUFBYSxFQUFBO0VBRGQ7TUFHRyx1QkFBdUIsRUFBQTtFQUczQjtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVDQUFvQyxFQUFBO0VBRXRDO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNFLGtCQUFrQixFQUFBO0VBQ2xCO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLFlBQVksRUFBQTtFQUVkO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Rhc2tzLWl0ZW0vdGFza3MtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDE1cHggMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICZfX2luZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19zaGFyZWQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTEwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICB9XHJcbiAgJl9fc2hhcmVkLWZyb20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTFweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcGFkZGluZzogMXB4IDVweDtcclxuICB9XHJcbn1cclxuLnNoYXJlZC1ib3gge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmX19jbG9zZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/tasks-item/tasks-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tasks-item/tasks-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: TasksItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksItemComponent", function() { return TasksItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");





var TasksItemComponent = /** @class */ (function () {
    function TasksItemComponent(taskService, userService, notificationService) {
        this.taskService = taskService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.onUpdateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangeTaskStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEdit = false;
        this.isSharedOpen = false;
        this.isStartEdit = true;
        this.newTaskTitle = '';
        this.users = [];
    }
    TasksItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newTaskTitle = this.tasksItem.title;
        this.userService.getAllUsers().subscribe(function (data) {
            _this.users = data;
        });
        this.userService.getUser().subscribe(function (data) {
            _this.user = data;
        });
    };
    Object.defineProperty(TasksItemComponent.prototype, "sharedUsers", {
        get: function () {
            var _this = this;
            return this.users.filter(function (el) { return el.id !== _this.user.id; });
        },
        enumerable: true,
        configurable: true
    });
    TasksItemComponent.prototype.updateTask = function () {
        this.newTaskTitle = this.newTaskTitle.trim();
        var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tasksItem, { title: this.newTaskTitle });
        this.onUpdateTask.emit(newTask);
        this.isEdit = false;
    };
    TasksItemComponent.prototype.changeTaskStatus = function () {
        this.onChangeTaskStatus.emit(this.tasksItem);
    };
    TasksItemComponent.prototype.deleteTask = function (taskId) {
        this.onDeleteTask.emit(taskId);
    };
    TasksItemComponent.prototype.closeEditing = function () {
        this.isEdit = false;
        this.newTaskTitle = this.tasksItem.title;
    };
    TasksItemComponent.prototype.sharedTask = function (task, user) {
        var _this = this;
        var sharedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { sharedFromUser: this.user.email });
        this.taskService.shareTask(sharedTask, user).subscribe(function (data) {
            _this.isSharedOpen = false;
            _this.notificationService.sendSuccessNotification('Shared', "Task shared with " + user.email);
        }, function () {
            _this.notificationService.sendErrorNotification('Error', 'Error');
        });
    };
    TasksItemComponent.prototype.clickOutsideSharedBlock = function (event) {
        if (!this.sharedButton || !this.sharedButton.nativeElement.contains(event)) {
            this.isSharedOpen = false;
        }
    };
    TasksItemComponent.prototype.clickOutsideEdit = function (event) {
        if (!this.isStartEdit) {
            this.isEdit = false;
            this.isStartEdit = true;
        }
        else if (this.taskItemContainer.nativeElement.children[0].value) {
            this.isStartEdit = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksItemComponent.prototype, "tasksItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksItemComponent.prototype, "onUpdateTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksItemComponent.prototype, "onChangeTaskStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksItemComponent.prototype, "onDeleteTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sharedButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TasksItemComponent.prototype, "sharedButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taskItemContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TasksItemComponent.prototype, "taskItemContainer", void 0);
    TasksItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-item',
            template: __webpack_require__(/*! ./tasks-item.component.html */ "./src/app/shared/components/tasks-item/tasks-item.component.html"),
            styles: [__webpack_require__(/*! ./tasks-item.component.scss */ "./src/app/shared/components/tasks-item/tasks-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], TasksItemComponent);
    return TasksItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tasks-list/tasks-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/tasks-list/tasks-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!tasksList.length\" class=\"empty\">Task list is empty...</p>\n<ul *ngIf=\"tasksList.length\" class=\"tasks-list\">\n  <app-tasks-item\n    *ngFor=\"let tasksItem of tasksList\"\n    [tasksItem]=\"tasksItem\"\n    (onUpdateTask)=\"updateTask($event)\"\n    (onChangeTaskStatus)=\"changeTaskStatus($event)\"\n    (onDeleteTask)=\"deleteTask($event)\"\n  ></app-tasks-item>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/components/tasks-list/tasks-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/tasks-list/tasks-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Rhc2tzLWxpc3QvdGFza3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/tasks-list/tasks-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tasks-list/tasks-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksListComponent = /** @class */ (function () {
    function TasksListComponent() {
        this.tasksList = [];
        this.onUpdateTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangeTaskStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TasksListComponent.prototype.ngOnInit = function () {
    };
    TasksListComponent.prototype.updateTask = function (task) {
        this.onUpdateTask.emit(task);
    };
    TasksListComponent.prototype.changeTaskStatus = function (task) {
        this.onChangeTaskStatus.emit(task);
    };
    TasksListComponent.prototype.deleteTask = function (taskId) {
        this.onDeleteTask.emit(taskId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TasksListComponent.prototype, "tasksList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksListComponent.prototype, "onUpdateTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksListComponent.prototype, "onChangeTaskStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TasksListComponent.prototype, "onDeleteTask", void 0);
    TasksListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/shared/components/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.scss */ "./src/app/shared/components/tasks-list/tasks-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/click-outside.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(targetElement);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClickOutside]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/helpers/must-match.validator.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/helpers/must-match.validator.ts ***!
  \********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tasks-list/tasks-list.component */ "./src/app/shared/components/tasks-list/tasks-list.component.ts");
/* harmony import */ var _components_tasks_item_tasks_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks-item/tasks-item.component */ "./src/app/shared/components/tasks-item/tasks-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/shared/directives/click-outside.directive.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [
                _components_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_3__["TasksListComponent"],
                _components_tasks_item_tasks_item_component__WEBPACK_IMPORTED_MODULE_4__["TasksItemComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideDirective"],
            ],
            exports: [
                _components_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_3__["TasksListComponent"],
                _components_tasks_item_tasks_item_component__WEBPACK_IMPORTED_MODULE_4__["TasksItemComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideDirective"],
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programing\GitHub\test-task-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map