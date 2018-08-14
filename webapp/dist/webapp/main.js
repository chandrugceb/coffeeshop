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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/user/register/register.component */ "./src/app/component/user/register/register.component.ts");
/* harmony import */ var _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/user/login/login.component */ "./src/app/component/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared_service/user.service */ "./src/app/shared_service/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _component_home_listorder_listorder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/home/listorder/listorder.component */ "./src/app/component/home/listorder/listorder.component.ts");
/* harmony import */ var _component_home_addeditorder_addeditorder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/home/addeditorder/addeditorder.component */ "./src/app/component/home/addeditorder/addeditorder.component.ts");
/* harmony import */ var _shared_service_product_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared_service/product.service */ "./src/app/shared_service/product.service.ts");
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
                _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _component_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _component_home_listorder_listorder_component__WEBPACK_IMPORTED_MODULE_14__["ListorderComponent"],
                _component_home_addeditorder_addeditorder_component__WEBPACK_IMPORTED_MODULE_15__["AddeditorderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])
            ],
            providers: [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true
                }, _shared_service_product_service__WEBPACK_IMPORTED_MODULE_16__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("inside auth interceptor :" + req.headers.get('No-Auth'));
        if (req.headers.get('No-Auth') == "true")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (succ) { }, function (err) {
                //debugger;
                console.log("I'm Here");
                if (err.status == 401)
                    _this.router.navigate(['/login']);
            }));
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/component/home/addeditorder/addeditorder.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/home/addeditorder/addeditorder.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/addeditorder/addeditorder.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/home/addeditorder/addeditorder.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 *ngIf=\"!isOrderAdded\">Add Order</h2>\n<h2 *ngIf=\"isOrderAdded\">Edit Order <strong>{{order.orderId}}</strong> for <strong></strong>{{order.customerName}}</h2>\n<div class=\"tab-pane active in\" >\n    <form class=\"form-horizontal\" #addorderForm=\"ngForm\" class=\"form-horizontal col s12 white\" (ngSubmit)=\"addOrder()\">\n\n            <div *ngIf=\"!isOrderAdded\" class=\"form-group input-field col s6\">\n                    <label for=\"customer\">Customer Name</label>\n                    <input [(ngModel)]=\"customer\" name=\"cust\" class=\"form-control\" required>\n            </div> \n            <div class=\"form-group input-field col s6\">\n            <label for=\"product\">Product</label>\n              <select [(ngModel)]=\"selectedProduct\" name=\"prod\" class=\"form-control\" required>\n                  <option *ngFor=\"let product of products\" [ngValue]=\"product\">\n                       {{product.productName}} (${{product.unitPrice}}) \n                  </option>\n            </select>\n            </div>\n            <div class=\"form-group input-field col s6\">\n            <label for=\"qty\">Quantity</label>\n            <input [(ngModel)]=\"quantity\" name=\"quantity\" class=\"form-control\" required>\n            </div>        \n           <div class=\"form-group\">\n                <!-- Button -->\n                  <button [disabled]=\"!addorderForm.valid\" class=\"btn btn-success\">Add</button>\n           </div>\n    </form>\n</div>\n<br/>\n<div  *ngIf=\"isOrderDetailAdded\">\n    <h2>Orders Details</h2>\n    <table class=\"table table-striped\">\n        <thead class=\"thead-light\">\n            <tr>\n            <th scope=\"col\">Order Detail ID</th>\n            <th scope=\"col\">Product</th>\n            <th scope=\"col\">Quantity</th>\n            <th scope=\"col\">Line Price</th>        \n            <th scope=\"col\">Order Line Status</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let orderdetail of orderdetaillist\" >\n                    <td>{{orderdetail.orderDetailId}}</td>\n                    <td>{{orderdetail.product.productName}}</td>\n                    <td>{{orderdetail.quantity}}</td>\n                    <td>${{orderdetail.linePrice}}</td>          \n                    <td>{{orderdetail.orderDetailStatus}}</td>\n            </tr>      \n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/component/home/addeditorder/addeditorder.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/home/addeditorder/addeditorder.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddeditorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditorderComponent", function() { return AddeditorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared_service/product.service */ "./src/app/shared_service/product.service.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddeditorderComponent = /** @class */ (function () {
    function AddeditorderComponent(_productService, _userService) {
        this._productService = _productService;
        this._userService = _userService;
        this.isOrderAdded = false;
        this.isOrderDetailAdded = false;
        this.orderdetaillist = [];
    }
    AddeditorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.selectedProduct = {"productId":null,"productName":null,"unitPrice":null};
        this._productService.getProducts().subscribe(function (res) {
            _this.products = res;
            console.log(_this.products);
            if (_this.products.size > 0) {
                //this.selectedProduct=this.products[0];
            }
        });
    };
    AddeditorderComponent.prototype.addOrder = function () {
        var _this = this;
        console.log(this.selectedProduct);
        if (this.order == null) {
            this._userService.addOrder(this.customer).subscribe(function (res) {
                _this.order = res;
                _this.isOrderAdded = true;
                console.log("RP1");
                console.log(_this.order);
                _this.addOrderDetail();
            }, function (err) { });
        }
        else {
            this.addOrderDetail();
        }
    };
    AddeditorderComponent.prototype.addOrderDetail = function () {
        var _this = this;
        this.neworderdetail = {
            quantity: this.quantity,
            product: this.selectedProduct
        };
        this._userService.addOrderDetail(this.order.orderId, this.neworderdetail).subscribe(function (res) {
            //this.order = res;
            _this.orderdetaillist.push(res);
            _this.isOrderDetailAdded = true;
            console.log("RP2");
            console.log(_this.order);
        }, function (err) { });
    };
    AddeditorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addeditorder',
            template: __webpack_require__(/*! ./addeditorder.component.html */ "./src/app/component/home/addeditorder/addeditorder.component.html"),
            styles: [__webpack_require__(/*! ./addeditorder.component.css */ "./src/app/component/home/addeditorder/addeditorder.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AddeditorderComponent);
    return AddeditorderComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\" routerLink='/home'>Coffee Shop</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive='active'><a routerLink='/home' >Home</a></li>\n          <li routerLinkActive='active'><a routerLink='/home/addorder'>Add Order</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a (click)=\"Logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n    \n  <div class=\"container\">    \n    <router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser().subscribe(function (res) {
            _this.setUser(res);
        }, function (err) {
        });
    };
    HomeComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/home/listorder/listorder.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/home/listorder/listorder.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/listorder/listorder.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/home/listorder/listorder.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h2 >Active Orders</h2>\n  <table class=\"table table-striped\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">Order Id</th>\n        <th scope=\"col\">Customer Name</th>\n        <th scope=\"col\">Order Price</th>\n        <th scope=\"col\">Order Time</th>        \n        <th scope=\"col\">Order Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of pendingOrders\" >\n              <td>{{order.orderId}}</td>\n              <td>{{order.customerName}}</td>\n              <td>{{order.orderTotalPrice}}</td>\n              <td>{{order.orderTimeStamp}}</td>          \n              <td>{{order.orderStatus}}</td>\n        </tr>      \n    </tbody>\n  </table>\n\n  <h2>Completed Orders</h2>\n  <table class=\"table table-striped\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">Order Id</th>\n        <th scope=\"col\">Customer Name</th>\n        <th scope=\"col\">Order Price</th>\n        <th scope=\"col\">Order Time</th>        \n        <th scope=\"col\">Order Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of completedOrders\" >\n              <td>{{order.orderId}}</td>\n              <td>{{order.customerName}}</td>\n              <td>{{order.orderTotalPrice}}</td>\n              <td>{{order.orderTimeStamp}}</td>          \n              <td>{{order.orderStatus}}</td>\n        </tr>      \n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/component/home/listorder/listorder.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/home/listorder/listorder.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListorderComponent", function() { return ListorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListorderComponent = /** @class */ (function () {
    function ListorderComponent(_userService) {
        this._userService = _userService;
    }
    ListorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getOrders().subscribe(function (res) {
            _this.orders = res;
            console.log(_this.orders);
            _this.pendingOrders = _this.orders.filter(function (order) { return order.orderStatus === 'pending'; });
            _this.completedOrders = _this.orders.filter(function (order) { return order.orderStatus === 'complete'; });
            console.log(_this.pendingOrders);
        }, function (err) { });
    };
    ListorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listorder',
            template: __webpack_require__(/*! ./listorder.component.html */ "./src/app/component/home/listorder/listorder.component.html"),
            styles: [__webpack_require__(/*! ./listorder.component.css */ "./src/app/component/home/listorder/listorder.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ListorderComponent);
    return ListorderComponent;
}());



/***/ }),

/***/ "./src/app/component/user/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/user/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/user/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane active in\" >\n    <form #loginForm=\"ngForm\" class=\"form-horizontal col s12 white\" (ngSubmit)=\"OnSubmit(UserName.value,Password.value)\">\n      <div class=\"row\">\n        <div class=\"form-group input-field col s12\">\n          <!-- Username -->\n          <label for=\"username\">Username</label>\n            <input type=\"text\" #UserName ngModel name=\"username\" placeholder=\"User Name\" class=\"form-control\" required>\n         </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group input-field col s12\">\n          <!-- Password-->\n          <label for=\"password\">Password</label>\n            <input type=\"password\" #Password ngModel name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\n        </div>\n      </div>\n      <div class=\"row\">    \n        <div class=\"form-group\">\n          <!-- Button -->\n            <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Login</button>\n        </div>\n      </div>\n      <div *ngIf=\"isLoginError\" class=\"alert alert-danger\">\n          <strong>Error!</strong> {{LoginError}}\n        </div>\n    </form>                \n  </div>"

/***/ }),

/***/ "./src/app/component/user/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/user/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.user = {};
        this.isLoginError = false;
        this.LoginError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userToken') != null) {
            //When token available, try route to Home Page
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.OnSubmit = function (userName, password) {
        var _this = this;
        this._userService.login(userName, password).subscribe(function (res) {
            _this.isLoginError = false;
            console.log(res.token);
            localStorage.setItem('userToken', res.token);
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.isLoginError = true;
            _this.LoginError = "Invalid Credentials";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/user/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/user/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/user/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane active in\" >\n    <form class=\"form-horizontal\" #registerForm=\"ngForm\" class=\"form-horizontal col s12 white\" (ngSubmit)=\"OnRegister()\">\n        <div *ngIf=\"isRegisterError\" class=\"alert alert-danger\">\n            <strong>Error!</strong> {{RegisterMessage}}\n          </div>\n          \n        <div *ngIf=\"isRegisterSuccess\" class=\"alert alert-success\">\n            <strong>Success!</strong> {{RegisterMessage}}\n          </div>\n        <div class=\"form-group\">\n            <!-- Username -->\n            <label for=\"username\">Username</label>\n              <input type=\"text\" [(ngModel)]=\"user.userName\" name=\"userName\" placeholder=\"User Name\" class=\"form-control\">\n           </div>\n  \n          <div class=\"form-group\">\n            <!-- Password-->\n            <label for=\"userPassword\">Password</label>\n              <input type=\"password\" [(ngModel)]=\"user.userPassword\" name=\"userPassword\" placeholder=\"Password\" class=\"form-control\">\n          </div>\n          \n          <div class=\"form-group\">\n              <!-- Confirm Password-->\n              <label for=\"confirmPassword\">Confirm Password</label>\n                <input type=\"password\" [(ngModel)]=\"user.userConfirmPassword\" name=\"userConfirmPassword\" placeholder=\"Confirm Password\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <!-- DOB -->\n                <label for=\"dob\">Date of Birth</label>\n                  <input type=\"text\" [(ngModel)]=\"user.DOB\" name=\"DOB\" placeholder=\"YYYY-MM-DD\" class=\"form-control\">\n               </div>\n      <div>\n        <button class=\"btn btn-primary\">Create Account</button>\n      </div>\n      \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/component/user/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/user/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService) {
        this._userService = _userService;
        this.isRegisterError = false;
        this.isRegisterSuccess = false;
        this.RegisterMessage = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    RegisterComponent.prototype.OnRegister = function () {
        var _this = this;
        if (this.user.userPassword == this.user.userConfirmPassword) {
            this.isRegisterError = false;
            this._userService.registerUser(this.user).subscribe(function (res) {
                _this.isRegisterSuccess = true;
                _this.RegisterMessage = "User registration Successfull";
                console.log(res);
                setTimeout(function () {
                    _this.isRegisterSuccess = false;
                    _this.RegisterMessage = "";
                }, 5000);
            }, function (err) {
                _this.isRegisterError = true;
                _this.RegisterMessage = err;
            });
        }
        else {
            this.isRegisterError = true;
            this.RegisterMessage = "Please enter same password in password and confirm password field";
        }
    };
    RegisterComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.user = {
            userName: '',
            userPassword: '',
            userConfirmPassword: '',
            DOB: ''
        };
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/user/user.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/user/user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user/user.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/user/user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n        <div class=\"span12\">\n    \t\t<div class=\"\" id=\"loginModal\">\n              <div class=\"modal-header\">\n                <h3>Coffee Shop</h3>\n              </div>\n              <div class=\"modal-body\">\n                  <ul class=\"nav nav-tabs\">\n                    <li routerLinkActive='active'><a routerLink='/login' >Login</a></li>\n                    <li routerLinkActive='active'><a routerLink='/register'>Register</a></li>\n                  </ul>\n                  <div class=\"tab-content\">\n                    <router-outlet></router-outlet>\n                  </div>\n              </div>\n            </div>\n        </div>\n  </div>\n</div>  \n  "

/***/ }),

/***/ "./src/app/component/user/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/component/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/component/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/user/user.component */ "./src/app/component/user/user.component.ts");
/* harmony import */ var _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/user/login/login.component */ "./src/app/component/user/login/login.component.ts");
/* harmony import */ var _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/user/register/register.component */ "./src/app/component/user/register/register.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _component_home_listorder_listorder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home/listorder/listorder.component */ "./src/app/component/home/listorder/listorder.component.ts");
/* harmony import */ var _component_home_addeditorder_addeditorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/addeditorder/addeditorder.component */ "./src/app/component/home/addeditorder/addeditorder.component.ts");







var appRoutes = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{ path: '', component: _component_home_listorder_listorder_component__WEBPACK_IMPORTED_MODULE_5__["ListorderComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }]
    },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{ path: 'addorder', component: _component_home_addeditorder_addeditorder_component__WEBPACK_IMPORTED_MODULE_6__["AddeditorderComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }]
    },
    { path: 'login', component: _component_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [{ path: '', component: _component_user_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }]
    },
    { path: 'register', component: _component_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [{ path: '', component: _component_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/shared_service/product.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared_service/product.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080';
        this.authheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this.baseUrl + '/api/secured/products', { headers: this.authheaders });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared_service/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared_service/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080';
        this.noAuthheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'No-Auth': 'true' });
        this.authheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this.baseUrl + '/api/secured/users', { headers: this.noAuthheaders });
    };
    UserService.prototype.getCurrentUser = function () {
        return this._http.get(this.baseUrl + '/api/secured/currentuser', { headers: this.authheaders });
    };
    UserService.prototype.getOrders = function () {
        return this._http.get(this.baseUrl + '/api/secured/myorders', { headers: this.authheaders });
    };
    UserService.prototype.registerUser = function (user) {
        return this._http.post(this.baseUrl + '/api/signup', JSON.stringify(user), { headers: this.noAuthheaders });
    };
    UserService.prototype.addOrder = function (customerName) {
        var newOrder = "{\"customerName\":\"" + customerName + "\",\"orderTimeStamp\":\"" + this.formatDate(new Date()) + "\"}";
        return this._http.post(this.baseUrl + '/api/secured/order', newOrder, { headers: this.authheaders });
    };
    UserService.prototype.addOrderDetail = function (orderId, newOrderDetail) {
        console.log("add order detail");
        return this._http.post(this.baseUrl + '/api/secured/order/' + orderId + '/orderdetails', JSON.stringify(newOrderDetail), { headers: this.authheaders });
    };
    UserService.prototype.login = function (un, ps) {
        var data = "{\"userName\":\"" + un + "\",\"userPassword\":\"" + ps + "\"}";
        return this._http.post(this.baseUrl + '/api/login', data, { headers: this.noAuthheaders });
    };
    UserService.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! C:\SRC_Github\coffeeshop\webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map