(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/53m":
/*!**********************************************************!*\
  !*** ./src/app/supplier-list/supplier-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SupplierListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierListComponent", function() { return SupplierListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _supplier_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supplier-http.service */ "uG7F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _selected_box_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selected-box.directive */ "IDdD");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supplier/supplier.component */ "MFze");





function SupplierListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierListComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You have selected ", ctx_r0.selectedSupplier == null ? null : ctx_r0.selectedSupplier.companyName, "\n");
} }
function SupplierListComponent_app_supplier_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-supplier", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evt", function SupplierListComponent_app_supplier_3_Template_app_supplier_evt_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.receiveChildrenEvt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("supplier", supplier_r4);
} }
class SupplierListComponent {
    constructor(supplierService) {
        this.supplierService = supplierService;
        this.suppliers = [];
    }
    ngOnInit() {
        this.supplierService.findAll().subscribe(r => this.suppliers = r);
    }
    receiveChildrenEvt(supplier) {
        this.selectedSupplier = supplier;
    }
    close() {
        this.selectedSupplier = undefined;
    }
}
SupplierListComponent.ɵfac = function SupplierListComponent_Factory(t) { return new (t || SupplierListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_supplier_http_service__WEBPACK_IMPORTED_MODULE_1__["SupplierHttpService"])); };
SupplierListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierListComponent, selectors: [["app-supplier-list"]], decls: 4, vars: 2, consts: [["appSelectedBox", "", 4, "ngIf"], [3, "supplier", "evt", 4, "ngFor", "ngForOf"], ["appSelectedBox", ""], ["href", "#", 3, "click"], [3, "supplier", "evt"]], template: function SupplierListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supplier list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupplierListComponent_div_2_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SupplierListComponent_app_supplier_3_Template, 1, 1, "app-supplier", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSupplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suppliers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _selected_box_directive__WEBPACK_IMPORTED_MODULE_3__["SelectedBoxDirective"], _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: lightcyan;\n}\n\n.selected-box[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n  border-left: 3px solid blue;\n}\n\n.selected-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  line-height: 25px;\n  text-decoration: none;\n  color: dimgrey;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1cHBsaWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFERTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUFZLFlBQUE7RUFDWixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJSiIsImZpbGUiOiJzdXBwbGllci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbn1cbi5zZWxlY3RlZC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmx1ZTtcbiAgYSB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6MjVweDsgaGVpZ2h0OjI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogZGltZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomaslhomme/Desktop/AngularDWWM/out/product-manager/src/main.ts */"zUnb");


/***/ }),

/***/ "6PZP":
/*!****************************************************!*\
  !*** ./src/app/delete-box/delete-box.component.ts ***!
  \****************************************************/
/*! exports provided: DeleteBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBoxComponent", function() { return DeleteBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DeleteBoxComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteBoxComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.stateParent(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oui");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteBoxComponent_div_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.stateParent(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "non");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeleteBoxComponent {
    constructor() {
        this.actionEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputValue = '';
    }
    stateParent(etat) {
        this.actionEvt.emit(etat);
    }
    ngOnInit() {
    }
}
DeleteBoxComponent.ɵfac = function DeleteBoxComponent_Factory(t) { return new (t || DeleteBoxComponent)(); };
DeleteBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteBoxComponent, selectors: [["app-delete-box"]], inputs: { inputname: "inputname", inputid: "inputid" }, outputs: { actionEvt: "actionEvt" }, decls: 6, vars: 4, consts: [["type", "text", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "click"]], template: function DeleteBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nTappez \"OUI\" pour confirmer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteBoxComponent_Template_input_ngModelChange_4_listener($event) { return ctx.inputValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeleteBoxComponent_div_5_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Etes vous s\u00FBr de vouloir supprimer l'element: ", ctx.inputname, " (", ctx.inputid, ") ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputValue.toLowerCase() === "oui");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYm94LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'http://localhost:8081/learn/api/'
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

/***/ "DwCH":
/*!************************************************!*\
  !*** ./src/app/anonymize-bank-account.pipe.ts ***!
  \************************************************/
/*! exports provided: AnonymizeBankAccountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymizeBankAccountPipe", function() { return AnonymizeBankAccountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AnonymizeBankAccountPipe {
    transform(value, length) {
        if (!value) {
            return 'ERROR';
        }
        ;
        return (length && value.length > length) ? '[Invalid Bank Account number]' : value.substr(0, 4).padEnd(12, '*');
    }
}
AnonymizeBankAccountPipe.ɵfac = function AnonymizeBankAccountPipe_Factory(t) { return new (t || AnonymizeBankAccountPipe)(); };
AnonymizeBankAccountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "anonymize", type: AnonymizeBankAccountPipe, pure: true });


/***/ }),

/***/ "Hsdx":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-http.service */ "T4jM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selected_box_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selected-box.directive */ "IDdD");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.component */ "LvIC");






function ProductListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" You have selected ", ctx_r0.selectedProduct == null ? null : ctx_r0.selectedProduct.name, " (", ctx_r0.selectedProduct == null ? null : ctx_r0.selectedProduct.category, ")\n");
} }
function ProductListComponent_app_product_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evt", function ProductListComponent_app_product_4_Template_app_product_evt_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.receiveChildrenEvt($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r4);
} }
class ProductListComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        this.productService.findAll().subscribe(r => this.products = r);
    }
    receiveChildrenEvt(product) {
        this.selectedProduct = product;
    }
    close() {
        this.selectedProduct = undefined;
    }
    filterList() {
        return this.filterStr
            ? this.products.filter(s => s.name.toLowerCase().search(this.filterStr.toLowerCase()) !== -1)
            : this.products;
    }
    setFilter(event) {
        this.filterStr = event.target.value;
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductHttpService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 7, vars: 2, consts: [["appSelectedBox", "", "theme", "azur", 4, "ngIf"], [3, "input"], [3, "product", "evt", 4, "ngFor", "ngForOf"], ["routerLink", "/products/add"], ["appSelectedBox", "", "theme", "azur"], ["href", "#", 3, "click"], [3, "product", "evt"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductListComponent_div_2_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductListComponent_Template_input_input_3_listener($event) { return ctx.setFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductListComponent_app_product_4_Template, 1, 1, "app-product", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterList());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _selected_box_directive__WEBPACK_IMPORTED_MODULE_4__["SelectedBoxDirective"], _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: lightcyan;\n}\n\n.selected-box[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n  border-left: 3px solid blue;\n}\n\n.selected-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  line-height: 25px;\n  text-decoration: none;\n  color: dimgrey;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtBQUVGOztBQURFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQVksWUFBQTtFQUNaLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUlKIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XG59XG4uc2VsZWN0ZWQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsdWU7XG4gIGEge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOjI1cHg7IGhlaWdodDoyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGRpbWdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "IDdD":
/*!*******************************************!*\
  !*** ./src/app/selected-box.directive.ts ***!
  \*******************************************/
/*! exports provided: SelectedBoxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedBoxDirective", function() { return SelectedBoxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelectedBoxDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        this.elRef.nativeElement.style.padding = '5px';
        if (this.theme === 'azur') {
            this.elRef.nativeElement.style.color = 'grey';
            this.elRef.nativeElement.style.backgroundColor = 'lightblue';
        }
        else if (this.theme === 'azur-reverse') {
            this.elRef.nativeElement.style.color = 'lightblue';
            this.elRef.nativeElement.style.backgroundColor = 'grey';
            this.elRef.nativeElement.querySelector('a').style.color = 'black';
        }
        else {
            this.elRef.nativeElement.style.color = 'black';
            this.elRef.nativeElement.style.backgroundColor = 'antiquewhite';
        }
    }
}
SelectedBoxDirective.ɵfac = function SelectedBoxDirective_Factory(t) { return new (t || SelectedBoxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SelectedBoxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SelectedBoxDirective, selectors: [["", "appSelectedBox", ""]], inputs: { theme: "theme" } });


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1) { return ["/products", a1]; };
class ProductComponent {
    constructor() {
        this.evt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    productClick() {
        this.evt.emit(this.product);
    }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], hostBindings: function ProductComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_click_HostBindingHandler() { return ctx.productClick(); });
    } }, inputs: { product: "product" }, outputs: { evt: "evt" }, decls: 5, vars: 6, consts: [[3, "routerLink"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.product.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.product.category, ": ", ctx.product.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "MFze":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _anonymize_bank_account_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anonymize-bank-account.pipe */ "DwCH");



class SupplierComponent {
    constructor() {
        this.evt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    productClick() {
        this.evt.emit(this.supplier);
    }
    ngOnInit() {
    }
}
SupplierComponent.ɵfac = function SupplierComponent_Factory(t) { return new (t || SupplierComponent)(); };
SupplierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierComponent, selectors: [["app-supplier"]], hostBindings: function SupplierComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierComponent_click_HostBindingHandler() { return ctx.productClick(); });
    } }, inputs: { supplier: "supplier" }, outputs: { evt: "evt" }, decls: 5, vars: 5, template: function SupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "anonymize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.supplier.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx.supplier.bankAccountNumber, 12));
    } }, pipes: [_anonymize_bank_account_pipe__WEBPACK_IMPORTED_MODULE_1__["AnonymizeBankAccountPipe"]], styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1cHBsaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InN1cHBsaWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ML/o":
/*!********************************************************!*\
  !*** ./src/app/supplier-add/supplier-add.component.ts ***!
  \********************************************************/
/*! exports provided: SupplierAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierAddComponent", function() { return SupplierAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-http.service */ "T4jM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SupplierAddComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Company name is mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierAddComponent_ul_0_li_2_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierAddComponent_ul_0_li_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "The field is too short");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupplierAddComponent_ul_0_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "There is an error with the bank account number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SupplierAddComponent_ul_0_li_2_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SupplierAddComponent_ul_0_li_2_li_4_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["bankAccountNumber"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["bankAccountNumber"].errors.minlength);
} }
function SupplierAddComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SupplierAddComponent_ul_0_li_1_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SupplierAddComponent_ul_0_li_2_Template, 5, 2, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["companyName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["bankAccountNumber"].invalid);
} }
class SupplierAddComponent {
    constructor(fb, productService) {
        this.fb = fb;
        this.productService = productService;
        this.formSubmitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            bankAccountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10)]],
        });
    }
    add() {
        this.formSubmitted = true;
        if (this.form.valid) {
            this.productService.add(this.form.value).subscribe();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
SupplierAddComponent.ɵfac = function SupplierAddComponent_Factory(t) { return new (t || SupplierAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductHttpService"])); };
SupplierAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupplierAddComponent, selectors: [["app-supplier-add"]], decls: 12, vars: 2, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], ["for", "companyName"], ["type", "text", "id", "companyName", "formControlName", "companyName"], ["for", "bankAccountNumber"], ["type", "text", "id", "bankAccountNumber", "formControlName", "bankAccountNumber"], ["type", "submit"]], template: function SupplierAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SupplierAddComponent_ul_0_Template, 3, 2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SupplierAddComponent_Template_form_ngSubmit_1_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "bank account number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["[_nghost-%COMP%]{\n  display:block;\n  background-color: wheat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzdXBwbGllci1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'products-manager';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 1200px;\n  margin: 0 auto;\n  background: linear-gradient(to bottom, white, #d9fcb1);\n  border: 1px solid grey;\n  padding: 10px;\n  border-bottom: 10px solid grey;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0RBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjZDlmY2IxKTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbToxMHB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });


/***/ }),

/***/ "T4jM":
/*!*****************************************!*\
  !*** ./src/app/product-http.service.ts ***!
  \*****************************************/
/*! exports provided: ProductHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHttpService", function() { return ProductHttpService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductHttpService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'products';
    }
    add(product) {
        return this.http.post(this.apiUrl, product);
    }
    findAll() {
        return this.http.get(this.apiUrl);
    }
    getOne(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    delete(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
ProductHttpService.ɵfac = function ProductHttpService_Factory(t) { return new (t || ProductHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductHttpService, factory: ProductHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 9, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Suppliers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  justify-content: space-between;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  border-bottom: 4px solid #d9fcb1;\n  padding: 10px;\n  display: inline-block;\n  width: auto;\n  flex: 1;\n  cursor: pointer;\n  text-align: center;\n  background-color: #d9fcb1;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  border-bottom: 4px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQUk7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBRU4iLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzowO1xuICBtYXJnaW46MDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZDlmY2IxO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbGV4OjE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWZjYjE7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmVkO1xuICAgIH1cblxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplier-list/supplier-list.component */ "/53m");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supplier/supplier.component */ "MFze");
/* harmony import */ var _anonymize_bank_account_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anonymize-bank-account.pipe */ "DwCH");
/* harmony import */ var _selected_box_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selected-box.directive */ "IDdD");
/* harmony import */ var _supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplier.service */ "wVJS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _supplier_add_supplier_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./supplier-add/supplier-add.component */ "ML/o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-add/product-add.component */ "kxNz");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "vR3N");
/* harmony import */ var _delete_box_delete_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./delete-box/delete-box.component */ "6PZP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const routes = [
    { path: 'products/add', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_13__["ProductAddComponent"] },
    { path: 'products/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_16__["ProductDetailComponent"] },
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
        _supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_5__["SupplierListComponent"],
        _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_6__["SupplierComponent"],
        _anonymize_bank_account_pipe__WEBPACK_IMPORTED_MODULE_7__["AnonymizeBankAccountPipe"],
        _selected_box_directive__WEBPACK_IMPORTED_MODULE_8__["SelectedBoxDirective"],
        _supplier_add_supplier_add_component__WEBPACK_IMPORTED_MODULE_11__["SupplierAddComponent"],
        _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_13__["ProductAddComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_16__["ProductDetailComponent"],
        _delete_box_delete_box_component__WEBPACK_IMPORTED_MODULE_17__["DeleteBoxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();


/***/ }),

/***/ "kxNz":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-http.service */ "T4jM");
/* harmony import */ var _supplier_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supplier-http.service */ "uG7F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductAddComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is mandatory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductAddComponent_ul_0_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductAddComponent_ul_0_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price is manfatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductAddComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductAddComponent_ul_0_li_1_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductAddComponent_ul_0_li_2_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductAddComponent_ul_0_li_3_Template, 2, 0, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["name"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["category"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["price"].invalid);
} }
function ProductAddComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r5.companyName);
} }
class ProductAddComponent {
    constructor(fb, productService, supplierService, router) {
        this.fb = fb;
        this.productService = productService;
        this.supplierService = supplierService;
        this.router = router;
        this.formSubmitted = false;
    }
    ngOnInit() {
        this.form = this.fb.group({
            active: ['true',],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            description: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            promo: [''],
            supplier: this.fb.group({ id: 1 })
        });
        this.suppliers = this.supplierService.findAll();
    }
    add() {
        this.formSubmitted = true;
        if (this.form.valid) {
            this.productService.add(this.form.value).subscribe(v => this.router.navigateByUrl('/products'));
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
ProductAddComponent.ɵfac = function ProductAddComponent_Factory(t) { return new (t || ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_product_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_supplier_http_service__WEBPACK_IMPORTED_MODULE_3__["SupplierHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ProductAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductAddComponent, selectors: [["app-product-add"]], decls: 34, vars: 5, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], ["for", "category"], ["type", "text", "id", "category", "formControlName", "category"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description"], ["for", "price"], ["type", "text", "id", "price", "formControlName", "price"], ["for", "promo"], ["type", "text", "id", "promo", "formControlName", "promo"], ["for", "active"], ["type", "checkbox", "id", "active", "formControlName", "active"], ["formGroupName", "supplier"], ["for", "supplierid"], ["formControlName", "id", "id", "supplierid"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"]], template: function ProductAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductAddComponent_ul_0_Template, 4, 3, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductAddComponent_Template_form_ngSubmit_1_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Promo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProductAddComponent_option_30_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 3, ctx.suppliers));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWFkZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "sr+r":
/*!***********************************!*\
  !*** ./src/app/model/Supplier.ts ***!
  \***********************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
class Supplier {
    constructor($id, $companyName, $bankAccountNumber, $ca) {
        this.$id = $id;
        this.$companyName = $companyName;
        this.$bankAccountNumber = $bankAccountNumber;
        this.$ca = $ca;
    }
    get companyName() {
        return this.$companyName;
    }
    set companyName(value) {
        this.$companyName = value;
    }
    get bankAccountNumber() {
        return this.$bankAccountNumber;
    }
    set bankAccountNumber(value) {
        this.$bankAccountNumber = value;
    }
    get id() {
        return this.$id;
    }
    set id(value) {
        this.$id = value;
    }
    get ca() {
        return this.$ca;
    }
    set ca(value) {
        this.$ca = value;
    }
    calculatedCa() {
        return this.ca * .8;
    }
}


/***/ }),

/***/ "uG7F":
/*!******************************************!*\
  !*** ./src/app/supplier-http.service.ts ***!
  \******************************************/
/*! exports provided: SupplierHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierHttpService", function() { return SupplierHttpService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SupplierHttpService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + 'suppliers';
    }
    add(supplier) {
        return this.http.post(this.apiUrl, supplier);
    }
    delete(supplierId) {
        return this.delete(supplierId);
    }
    update(supplier) {
        return this.http.put(this.apiUrl + '/' + supplier.id, supplier);
    }
    findAll() {
        return this.http.get(this.apiUrl);
    }
    findOne(id) {
        return this.http.get(this.apiUrl + '/' + id);
    }
}
SupplierHttpService.ɵfac = function SupplierHttpService_Factory(t) { return new (t || SupplierHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SupplierHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SupplierHttpService, factory: SupplierHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vR3N":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-http.service */ "T4jM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _delete_box_delete_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-box/delete-box.component */ "6PZP");





function ProductDetailComponent_app_delete_box_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-box", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionEvt", function ProductDetailComponent_app_delete_box_2_Template_app_delete_box_actionEvt_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.getEtatFromParent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputname", ctx_r0.product.name)("inputid", ctx_r0.product.id);
} }
class ProductDetailComponent {
    constructor(activatedRoute, productService, router) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        this.deleteBoxActivated = false;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.productService.getOne(Number(id)).subscribe(prod => this.product = prod);
    }
    getEtatFromParent(etat) {
        if (etat) {
            this.deleteProd();
        }
        else {
            this.deleteBoxActivated = false;
        }
    }
    deleteProd() {
        this.productService.delete(this.product.id).subscribe(v => this.router.navigateByUrl('/products'));
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_http_service__WEBPACK_IMPORTED_MODULE_2__["ProductHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 12, vars: 6, consts: [[3, "inputname", "inputid", "actionEvt", 4, "ngIf"], [3, "click"], [3, "inputname", "inputid", "actionEvt"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_app_delete_box_2_Template, 1, 2, "app-delete-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_10_listener() { return ctx.deleteBoxActivated = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Product name: ", ctx.product == null ? null : ctx.product.name, " (", ctx.product == null ? null : ctx.product.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteBoxActivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx.product == null ? null : ctx.product.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prix: ", ctx.product == null ? null : ctx.product.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Promo: ", ctx.product == null ? null : ctx.product.promo, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _delete_box_delete_box_component__WEBPACK_IMPORTED_MODULE_4__["DeleteBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "wVJS":
/*!*************************************!*\
  !*** ./src/app/supplier.service.ts ***!
  \*************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _model_Supplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Supplier */ "sr+r");

class SupplierService {
    constructor() {
        this.suppliers = [
            new _model_Supplier__WEBPACK_IMPORTED_MODULE_0__["Supplier"](1, 'La ferme des 10 vaches', '12345678912', 1000),
            new _model_Supplier__WEBPACK_IMPORTED_MODULE_0__["Supplier"](2, 'Le moulin de pepere', '123112341234', 2500),
            new _model_Supplier__WEBPACK_IMPORTED_MODULE_0__["Supplier"](3, 'Motorhead', '1234123412349', 7000),
        ];
    }
    add(supplier) {
        this.suppliers.push(supplier);
    }
    delete(supplierId) {
        this.suppliers = this.suppliers.filter(s => s.id !== supplierId);
    }
    update(supplier) {
        const supplierArr = this.suppliers.find(s => s.id === supplier.id)[0];
        if (!supplierArr) {
            return null;
        }
        const index = this.suppliers.indexOf(supplierArr);
        this.suppliers[index] = supplier;
    }
    findAll() {
        return this.suppliers;
    }
    findOne(id) {
        return this.suppliers.filter(s => s.id === id)[0];
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map