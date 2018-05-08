(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
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
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/Login/login.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/Login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4\">\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n    <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\n        <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors['required']\" >Username is required!</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required/>\n        <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors['required']\" >Username is required!</div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\"/>\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/Login/login.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/Login/login.component.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Login = class Login {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    onLogin() {
        this.data.login(this.creds)
            .subscribe(success => {
            if (success) {
                if (this.data.order.items.length == 0) {
                    this.router.navigate(["/"]);
                }
                else {
                    this.router.navigate(["checkout"]);
                }
            }
        }, err => this.errorMessage = "Failed to Login");
    }
};
Login = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "login",
        template: __webpack_require__(/*! ./login.component.html */ "./ClientApp/app/Login/login.component.html"),
    }),
    __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Login);



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Product List';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'the-shop',
        template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/productList.component */ "./ClientApp/app/shop/productList.component.ts");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/cart.component */ "./ClientApp/app/shop/cart.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop/shop.component */ "./ClientApp/app/shop/shop.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./ClientApp/app/checkout/checkout.component.ts");
/* harmony import */ var _Login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Login/login.component */ "./ClientApp/app/Login/login.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dataService */ "./ClientApp/app/shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let routes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["Shop"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["Checkout"] },
    { path: "login", component: _Login_login_component__WEBPACK_IMPORTED_MODULE_10__["Login"] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shop_productList_component__WEBPACK_IMPORTED_MODULE_6__["ProductList"],
            _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__["Cart"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["Shop"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["Checkout"],
            _Login_login_component__WEBPACK_IMPORTED_MODULE_10__["Login"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: true,
                enableTracing: true // for Debugging of the Routes
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        providers: [
            _shared_dataService__WEBPACK_IMPORTED_MODULE_11__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.css":
/*!*******************************************************!*\
  !*** ./ClientApp/app/checkout/checkout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n"

/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/checkout/checkout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n  <h3>Confirm Order</h3>\n  <table class=\"table table-bordered table-hover\">\n    <tr *ngFor=\"let o of data.order.items\">\n      <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\n      <td>{{ o.quantity }}</td>\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\n    </tr>\n  </table>\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\n    <table class=\"table table-condensed\">\n      <tr>\n        <td class=\"text-right\">Subtotal</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Shipping</td>\n        <td class=\"text-right\">$ 0.00</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Total:</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':true }}</td>\n      </tr>\n    </table>\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./ClientApp/app/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Checkout = class Checkout {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
    }
    onCheckout() {
        this.data.checkout().subscribe(success => {
            if (success) {
                this.router.navigate(["/"]);
            }
        }, err => this.errorMessage = "Failed to save order");
    }
};
Checkout = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "checkout",
        template: __webpack_require__(/*! ./checkout.component.html */ "./ClientApp/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./ClientApp/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Checkout);



/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order */ "./ClientApp/app/shared/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.products = [];
    }
    loadProducts() {
        return this.http.get("/api/products").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.products = data;
            return true;
        }));
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http
            .post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.token = data.token;
            this.tokenExpiration = data.expiration;
            return true;
        }));
    }
    checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber =
                this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Authorization", "Bearer " + this.token)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            return true;
        }));
    }
    AddToOrder(newProduct) {
        var item = this.order.items.find(i => i.productId == newProduct.id);
        if (item) {
            item.quantity++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
            item.productId = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    }
};
DataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], DataService);



/***/ }),

/***/ "./ClientApp/app/shared/order.ts":
/*!***************************************!*\
  !*** ./ClientApp/app/shared/order.ts ***!
  \***************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class Order {
    constructor() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    get subtotal() {
        return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, i => i.unitPrice * i.quantity));
    }
    ;
}
class OrderItem {
}


/***/ }),

/***/ "./ClientApp/app/shop/cart.component.html":
/*!************************************************!*\
  !*** ./ClientApp/app/shop/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\n<div>#/Items: {{ data.order.items.length }}</div>\n<div>Subtotal: {{ data.order.subtotal }}</div>\n<table class=\"table table-condensed table-hover\">\n    <thead>\n        <tr>\n            <td>Product</td>\n            <td>#</td>\n            <td>$</td>\n            <td>Total</td>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let o of data.order.items\">\n            <td>{{ o.productCategory }} - {{ o.productTitle }}</td>\n            <td>{{ o.quantity }}</td>\n            <td>{{ o.unitPrice }}</td>\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\n        </tr>\n    </tbody>\n</table>\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>"

/***/ }),

/***/ "./ClientApp/app/shop/cart.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/cart.component.ts ***!
  \**********************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let Cart = class Cart {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    onCheckout() {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            // go to checkout
            this.router.navigate(["checkout"]);
        }
    }
};
Cart = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "the-cart",
        template: __webpack_require__(/*! ./cart.component.html */ "./ClientApp/app/shop/cart.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Cart);



/***/ }),

/***/ "./ClientApp/app/shop/productList.component.css":
/*!******************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img {\n    max-width: 100px;\n    float: left;\n    margin: 0 2px;\n    border: solid 1px black;\n}\n\n.product-info .product-name {\n    font-size: large;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.html":
/*!*******************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\n        <img src=\"/img/{{p.artId}}.jpg\" class=\"img-responsive\" [alt]=\"p.title\"/>\n        <div class=\"product-name\">{{ p.category }} - {{ p.size }}</div>\n        <div><strong>Price:</strong> {{ p.price|currency:\"USD\":true }}</div>\n        <div><strong>Artist</strong>: {{ p.artist }}</div>\n        <div><strong>Title</strong>: {{ p.title }}</div>\n        <div><strong>Description</strong>: {{ p.artDescription }}</div>\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ProductList = class ProductList {
    constructor(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    ngOnInit() {
        this.data.loadProducts()
            .subscribe(success => {
            if (success) {
                this.products = this.data.products;
            }
        });
    }
    addProduct(product) {
        this.data.AddToOrder(product);
    }
};
ProductList = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "product-list",
        template: __webpack_require__(/*! ./productList.component.html */ "./ClientApp/app/shop/productList.component.html"),
        styles: [__webpack_require__(/*! ./productList.component.css */ "./ClientApp/app/shop/productList.component.css")]
    }),
    __metadata("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], ProductList);



/***/ }),

/***/ "./ClientApp/app/shop/shop.component.html":
/*!************************************************!*\
  !*** ./ClientApp/app/shop/shop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"row\">\n    <div class=\"col-md-9\">\n        <h3>{{title}}</h3>\n        <product-list></product-list>\n    </div>\n    <div class=\"col-md-3\">\n        <h3>Cart</h3>\n        <the-cart></the-cart>\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let Shop = class Shop {
};
Shop = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "the-shop",
        template: __webpack_require__(/*! ./shop.component.html */ "./ClientApp/app/shop/shop.component.html")
    })
], Shop);



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jnguyen/git/jnguyen/DutchTreat/DutchTreat/ClientApp/main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map