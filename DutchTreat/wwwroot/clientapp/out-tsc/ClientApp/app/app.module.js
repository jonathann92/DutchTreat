var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
let routes = [
    { path: "", component: Shop },
    { path: "/checkout", component: Checkout }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ProductList,
            Cart,
            Shop,
            Checkout
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: true // for Debugging of the Routes
            })
        ],
        providers: [
            DataService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map