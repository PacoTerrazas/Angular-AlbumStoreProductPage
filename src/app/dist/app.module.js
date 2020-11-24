"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var product_page_component_1 = require("./product-page/product-page.component");
var product_description_component_1 = require("./product-description/product-description.component");
var product_service_1 = require("./product.service");
var product_tracklisting_component_1 = require("./product-tracklisting/product-tracklisting.component");
var product_list_component_1 = require("./product-list/product-list.component");
var appRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_page_component_1.ProductPageComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_page_component_1.ProductPageComponent,
                product_description_component_1.ProductDescriptionComponent,
                product_tracklisting_component_1.ProductTracklistingComponent,
                product_list_component_1.ProductListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [
                product_service_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
