(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <nav>\r\n    <ul class=\"menu\">\r\n      <li class=\"menu__list-item\"><a routerLink=\"home\" routerLinkActive=\"active\">Home</a></li>\r\n      <li class=\"menu__list-item\"><a routerLink=\"assets\" routerLinkActive=\"active\">Assets</a></li>\r\n      <li class=\"menu__list-item\"><a routerLink=\"details\" routerLinkActive=\"active\">Details</a></li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n<router-outlet></router-outlet> ​\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/assets-grid/assets-grid.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/assets-grid/assets-grid.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-transactions full-width\">\r\n    <ag-grid-angular style=\"height: 500px; width: 100%;\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\r\n    [columnDefs]=\"columnDefs\">\r\n  </ag-grid-angular>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nEVERYTHING BELOW THIS IS FOR REFERENCE AND DEV PURPOSE ONLY. TO BE DELETED. \r\n  <section class=\"stock-transactions full-width\">\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">stock</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">amount</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">current price</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">total</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\"></div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">BYND</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">35</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">253.4</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">8869</span></div>\r\n    <div class=\"stock-transactions__grid-cell center\">\r\n      <a><span class=\"btn-transaction btn-transaction--sell\">sell</span></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">GOOG</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">12</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">1005.3</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">12063.6</span></div>\r\n    <div class=\"stock-transactions__grid-cell center\">\r\n      <a><span class=\"btn-transaction btn-transaction--sell\">sell</span></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">Liquidity</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">100000</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\"></span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">100000</span></div>\r\n    <div class=\"stock-transactions__grid-cell center\"></div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buy-sell-popup/buy-sell-popup.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buy-sell-popup/buy-sell-popup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal modal__buy\" style=\"display: block;\">\r\n  <div class=\"modal__overlay\"></div>\r\n  <div class=\"modal__content modal__content--large\">\r\n    <div class=\"modal__close\" (click)=\"onClose()\">x</div>\r\n    <h2 class=\"modal__h2\">Buy stock</h2>\r\n    <select class=\"modal__dropdown\" [(ngModel)]=\"_transactionInfo.symbol\">\r\n      <option *ngFor=\"let stockInfo of stockList\" [value]=\"stockInfo.symbol\">{{ stockInfo.name }}</option>\r\n    </select>\r\n    <input\r\n      #quant\r\n      class=\"modal__number-box\"\r\n      type=\"number\"\r\n      name=\"quantity\"\r\n      min=\"1\"\r\n      placeholder=\"enter amount\"\r\n      [(ngModel)]=\"_transactionInfo.amount\"\r\n    />\r\n    <button class=\"modal__btn\" [class.sell]=\"_transactionInfo.side === 'SELL'\" (click)=\"onBuySellClick()\">\r\n      {{ _transactionInfo.side }}\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/follow-stocks-popup/follow-stocks-popup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/follow-stocks-popup/follow-stocks-popup.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal visible\">\r\n  <div class=\"modal__overlay\"></div>\r\n  <div class=\"modal__content\">\r\n    <div class=\"modal__close\" (click)=\"onClose()\">x</div>\r\n    <h2 class=\"modal__h2\">Select a new stock to follow</h2>\r\n    <select class=\"modal__dropdown\" (change)=\"onChange($event.target.value)\">\r\n      <option *ngFor=\"let stockInfo of stockList\" [value]=\"stockInfo.symbol\" [disabled]=\"isSymbolInWatchList(stockInfo.symbol)\">\r\n        {{ stockInfo.name }}\r\n      </option>\r\n    </select>\r\n\r\n    <button class=\"modal__btn\" (click)=\"onFollowClick()\">Add</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/follow-stocks/follow-stocks.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/follow-stocks/follow-stocks.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-list\">\r\n  <h2 class=\"stock-list__title\">\r\n    Stocks that I follow <a><span class=\"stock-list__btn stock-list__btn--add\" (click)=\"followPopupOpen = true\">&#43;</span></a>\r\n  </h2>\r\n  <app-follow-stocks-popup *ngIf=\"followPopupOpen\" (followClick)=\"onStockFollow($event)\"></app-follow-stocks-popup>\r\n  <div class=\"stock-list__grid\">\r\n    <app-stock-details\r\n      class=\"stock-list__grid-row\"\r\n      *ngFor=\"let stock of followList; trackBy: trackByFn\"\r\n      (removeClick)=\"onRemoveClick($event)\"\r\n      (stockSelected)=\"onStockSelected($event)\"\r\n      [symbol]=\"stock.symbol\"\r\n      [showRemove]=\"true\"\r\n    ></app-stock-details>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stock-details/stock-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stock-details/stock-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"stock-list__grid-row\">\r\n  <div *ngIf=\"showRemove\" class=\"stock-list__grid-cell\">\r\n    <a (click)=\"onRemove()\"><span class=\"stock-list__btn stock-list__btn--remove\">&ndash;</span></a>\r\n  </div>\r\n  <div *ngIf=\"!showRemove\" class=\"stock-list__grid-cell stock-list__grid-cell--txt-blue\">&#x25BC;</div>\r\n  <div class=\"stock-list__grid-cell\" (click)=\"onStockClick(symbol)\">{{ symbol }}</div>\r\n  <div class=\"stock-list__grid-cell stock-list__grid-cell--txt-blue wide\">{{ currentPrice ? currentPrice.toFixed(3) : '-' }}</div>\r\n  <div class=\"stock-list__grid-cell\">\r\n    <a><span class=\"btn-transaction btn-transaction--buy\" (click)=\"openBuySellPopup('buy')\">buy</span></a>\r\n  </div>\r\n  <ng-container *ngIf=\"amount\">\r\n    <div class=\"stock-list__grid-cell\">\r\n      <a><span class=\"btn-transaction btn-transaction--sell\" (click)=\"openBuySellPopup('sell')\">sell</span></a>\r\n    </div>\r\n    <div class=\"stock-list__grid-cell stock-list__grid-cell--txt-blue\">{{ amount }}</div>\r\n  </ng-container>\r\n</div>\r\n<app-buy-sell-popup\r\n  *ngIf=\"buySellVisible\"\r\n  (transactionClick)=\"onTransaction($event)\"\r\n  [transactionInfo]=\"transactionInfo\"\r\n></app-buy-sell-popup>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stock-graph/stock-graph.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stock-graph/stock-graph.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-graph\">\r\n    <h2 class=\"stock-list__title\">\r\n        Symbol: {{ symbol }}\r\n        <select class=\"modal__dropdown\" [(ngModel)]=\"graphViewMode\" (change)=\"onChange($event.target.value)\">\r\n            <option value=\"today\">Today</option>\r\n            <option value=\"yearly\">Yearly</option>\r\n        </select>\r\n<a *ngIf= \"isHomePage\" class=\"stock-graph__link\" href=\"details/{{symbol}}\">Details</a>\r\n    </h2>\r\n\r\n<div id=\"chartContainer\" class=\"stock-graph__container\" ></div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transaction-grid/transaction-grid.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transaction-grid/transaction-grid.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-transactions full-width\">\r\n<h2>Refresh button is temporary. Need to update list after transaction.</h2>\r\n<button (click)=\"refreshTransactionList()\">REFRESH LIST</button>\r\n  <ag-grid-angular style=\" width: 1200px; height: 500px;\" class=\"ag-theme-balham\" [rowData]=\"transactionList\"\r\n    [columnDefs]=\"columnDefs\">\r\n  </ag-grid-angular>\r\n\r\n<!--\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">Transaction ID</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">stock</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">amount</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">direction</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">price</span>\r\n    </div>\r\n    <div class=\"stock-transactions__grid-cell\">\r\n      <span class=\"stock-transactions__grid-text stock-transactions__grid-text--white\">total</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">tr3</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">AAPL</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">1</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text sell\">SELL</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">256</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">256</span></div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">tr2</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">GOOG</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">5</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text buy\">BUY</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">1001</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">5005</span></div>\r\n  </div>\r\n  <div class=\"stock-transactions__grid-row\">\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">tr1</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">AAPL</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">10</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text buy\">BUY</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">245</span></div>\r\n    <div class=\"stock-transactions__grid-cell\"><span class=\"stock-transactions__grid-text\">2450</span></div>\r\n  </div>\r\n  -->\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/assets/assets.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/assets/assets.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-assets-grid></app-assets-grid>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/details/details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"stock-list\">\r\n  <div class=\"stock-list__grid\">\r\n    <app-stock-details [symbol]=\"selectedSymbol\"></app-stock-details>\r\n  </div>\r\n</section>\r\n<section>\r\n  <app-stock-graph [symbol]=\"selectedSymbol\" [isHomePage]=false></app-stock-graph>\r\n</section>\r\n<div>\r\n<app-transaction-grid [symbol]=\"selectedSymbol\"></app-transaction-grid>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-follow-stocks (stockSelected)=\"onStockSelected($event)\"></app-follow-stocks>\r\n<app-stock-graph [symbol]=\"selectedSymbol\" [isHomePage]=true></app-stock-graph>\r\n<app-transaction-grid></app-transaction-grid>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Mock Trading Server using Angular';
    }
    ngOnInit() {
        console.info('app started with user', this.authService.getUserId());
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/assets/assets.component */ "./src/app/pages/assets/assets.component.ts");
/* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
/* harmony import */ var _components_follow_stocks_follow_stocks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/follow-stocks/follow-stocks.component */ "./src/app/components/follow-stocks/follow-stocks.component.ts");
/* harmony import */ var _components_transaction_grid_transaction_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transaction-grid/transaction-grid.component */ "./src/app/components/transaction-grid/transaction-grid.component.ts");
/* harmony import */ var _components_assets_grid_assets_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/assets-grid/assets-grid.component */ "./src/app/components/assets-grid/assets-grid.component.ts");
/* harmony import */ var _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/stock-details/stock-details.component */ "./src/app/components/stock-details/stock-details.component.ts");
/* harmony import */ var _components_stock_graph_stock_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/stock-graph/stock-graph.component */ "./src/app/components/stock-graph/stock-graph.component.ts");
/* harmony import */ var _services_TokenInterceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/TokenInterceptor */ "./src/app/services/TokenInterceptor.ts");
/* harmony import */ var _components_follow_stocks_popup_follow_stocks_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/follow-stocks-popup/follow-stocks-popup.component */ "./src/app/components/follow-stocks-popup/follow-stocks-popup.component.ts");
/* harmony import */ var _components_buy_sell_popup_buy_sell_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/buy-sell-popup/buy-sell-popup.component */ "./src/app/components/buy-sell-popup/buy-sell-popup.component.ts");



















const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'assets', component: _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_9__["AssetsComponent"] },
    { path: 'details', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"] },
    { path: 'details/:symbol', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_9__["AssetsComponent"],
            _pages_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
            _components_follow_stocks_follow_stocks_component__WEBPACK_IMPORTED_MODULE_11__["FollowStocksComponent"],
            _components_transaction_grid_transaction_grid_component__WEBPACK_IMPORTED_MODULE_12__["TransactionGridComponent"],
            _components_assets_grid_assets_grid_component__WEBPACK_IMPORTED_MODULE_13__["AssetsGridComponent"],
            _components_stock_details_stock_details_component__WEBPACK_IMPORTED_MODULE_14__["StockDetailsComponent"],
            _components_stock_graph_stock_graph_component__WEBPACK_IMPORTED_MODULE_15__["StockGraphComponent"],
            _components_follow_stocks_popup_follow_stocks_popup_component__WEBPACK_IMPORTED_MODULE_17__["FollowStocksPopupComponent"],
            _components_buy_sell_popup_buy_sell_popup_component__WEBPACK_IMPORTED_MODULE_18__["BuySellPopupComponent"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_TokenInterceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/assets-grid/assets-grid.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/assets-grid/assets-grid.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXRzLWdyaWQvYXNzZXRzLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/assets-grid/assets-grid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/assets-grid/assets-grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssetsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsGridComponent", function() { return AssetsGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stocks.service */ "./src/app/services/stocks.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let AssetsGridComponent = class AssetsGridComponent {
    constructor(stockService, userService) {
        this.stockService = stockService;
        this.userService = userService;
        this.columnDefs = [
            { headerName: 'Stock', field: 'symbol', sortable: true, filter: true },
            { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
            { headerName: 'Current Price', field: 'price', sortable: true, filter: true },
            { headerName: 'Total', field: 'total', sortable: true, filter: true },
            { headerName: 'Sell', field: 'sell', sortable: true, filter: true },
        ];
    }
    ngOnInit() {
        this.fetchData();
    }
    fetchData() {
        //local arrays
        let allocationData, currentTicks;
        //get allocations
        this.userService.getAllocations().subscription.subscribe(x => {
            allocationData = x.data;
            console.log('allocationData is:');
            console.log(allocationData);
            //get stock prices
            this.stockService.getStockList().subscribe((data) => {
                //map a simplified version of data object to currentTicks{}
                currentTicks = data.map(x => {
                    return {
                        name: x.lastTick.stock,
                        price: x.lastTick.price.toFixed(2)
                    };
                });
                console.log('currentTicks is:');
                console.log(currentTicks);
                //after mergeArrays, allocationData will now have ticker price
                this.mergeArrays(allocationData, currentTicks);
                //now add the value of asset by multiplying
                allocationData.forEach(element => {
                    element.total = (element.amount * element.price).toFixed(2);
                });
                console.log(allocationData);
                this.rowData = allocationData;
            });
        });
    }
    ngAfterViewInit() {
        this.fetchData();
    }
    mergeArrays(allocs, currTicks) {
        allocs.forEach(a => {
            let found = currTicks.find(function (b) {
                return b.name === a.symbol;
            });
            a.price = found.price;
        });
    }
};
AssetsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-grid',
        template: __webpack_require__(/*! raw-loader!./assets-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/assets-grid/assets-grid.component.html"),
        styles: [__webpack_require__(/*! ./assets-grid.component.css */ "./src/app/components/assets-grid/assets-grid.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], AssetsGridComponent);



/***/ }),

/***/ "./src/app/components/buy-sell-popup/buy-sell-popup.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/buy-sell-popup/buy-sell-popup.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5LXNlbGwtcG9wdXAvYnV5LXNlbGwtcG9wdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/buy-sell-popup/buy-sell-popup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/buy-sell-popup/buy-sell-popup.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuySellPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellPopupComponent", function() { return BuySellPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stocks.service */ "./src/app/services/stocks.service.ts");
/* harmony import */ var _models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/transactionInfo */ "./src/app/models/transactionInfo.ts");
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transaction.service */ "./src/app/services/transaction.service.ts");





let BuySellPopupComponent = class BuySellPopupComponent {
    constructor(stockService, transactionService) {
        this.stockService = stockService;
        this.transactionService = transactionService;
        this.transactionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set transactionInfo(transactionInfo) {
        this._transactionInfo = transactionInfo;
    }
    ngOnInit() {
        this.stockService.getStockList().subscribe((data) => {
            this.stockList = data;
        });
    }
    onChange(symbol) {
        this._transactionInfo.symbol = symbol;
    }
    amountChange(value) {
        this._transactionInfo.amount = value;
    }
    onBuySellClick() {
        this.transactionService.makeTransaction(this._transactionInfo);
        this.onClose();
    }
    onClose() {
        this.transactionClick.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BuySellPopupComponent.prototype, "transactionClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__["TransactionInfo"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__["TransactionInfo"]])
], BuySellPopupComponent.prototype, "transactionInfo", null);
BuySellPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-sell-popup',
        template: __webpack_require__(/*! raw-loader!./buy-sell-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buy-sell-popup/buy-sell-popup.component.html"),
        styles: [__webpack_require__(/*! ./buy-sell-popup.component.css */ "./src/app/components/buy-sell-popup/buy-sell-popup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"], src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"]])
], BuySellPopupComponent);



/***/ }),

/***/ "./src/app/components/follow-stocks-popup/follow-stocks-popup.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/follow-stocks-popup/follow-stocks-popup.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LXN0b2Nrcy1wb3B1cC9mb2xsb3ctc3RvY2tzLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/follow-stocks-popup/follow-stocks-popup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/follow-stocks-popup/follow-stocks-popup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FollowStocksPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowStocksPopupComponent", function() { return FollowStocksPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/stocks.service */ "./src/app/services/stocks.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




let FollowStocksPopupComponent = class FollowStocksPopupComponent {
    constructor(stockService, userService) {
        this.stockService = stockService;
        this.userService = userService;
        this.followClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.stockService.getStockList().subscribe((data) => {
            this.stockList = data;
            this.selectedSymbol = this.stockList[0].symbol;
        });
        this.userService.getWatchList().subscribe((data) => {
            this.watchList = data;
        });
    }
    isSymbolInWatchList(symbol) {
        return this.watchList ? this.watchList.find((x) => x.symbol === symbol) : false;
    }
    onChange(symbol) {
        this.selectedSymbol = symbol;
    }
    onFollowClick() {
        this.userService.addToWatchList(this.selectedSymbol).subscribe((response) => {
            this.followClick.emit(this.selectedSymbol);
        });
    }
    onClose() {
        this.followClick.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FollowStocksPopupComponent.prototype, "followClick", void 0);
FollowStocksPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-stocks-popup',
        template: __webpack_require__(/*! raw-loader!./follow-stocks-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/follow-stocks-popup/follow-stocks-popup.component.html"),
        styles: [__webpack_require__(/*! ./follow-stocks-popup.component.css */ "./src/app/components/follow-stocks-popup/follow-stocks-popup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], FollowStocksPopupComponent);



/***/ }),

/***/ "./src/app/components/follow-stocks/follow-stocks.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/follow-stocks/follow-stocks.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93LXN0b2Nrcy9mb2xsb3ctc3RvY2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/follow-stocks/follow-stocks.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/follow-stocks/follow-stocks.component.ts ***!
  \*********************************************************************/
/*! exports provided: FollowStocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowStocksComponent", function() { return FollowStocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



let FollowStocksComponent = class FollowStocksComponent {
    constructor(userService) {
        this.userService = userService;
        this.stockSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.followList = [];
        this.followPopupOpen = false;
    }
    ngOnInit() {
        this.fetchData();
    }
    trackByFn(index, item) {
        return item.symbol;
    }
    onStockFollow(symbol) {
        this.followPopupOpen = false;
        this.fetchData();
    }
    onRemoveClick(symbol) {
        this.userService.removeFromWatchList(symbol).subscribe((success) => {
            this.fetchData();
        });
    }
    fetchData() {
        this.userService.getWatchList().subscribe((data) => {
            this.followList = data;
        });
    }
    onStockSelected(symbol) {
        console.log('event - stock selected', symbol);
        this.stockSelected.next(symbol);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FollowStocksComponent.prototype, "stockSelected", void 0);
FollowStocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-follow-stocks',
        template: __webpack_require__(/*! raw-loader!./follow-stocks.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/follow-stocks/follow-stocks.component.html"),
        styles: [__webpack_require__(/*! ./follow-stocks.component.css */ "./src/app/components/follow-stocks/follow-stocks.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], FollowStocksComponent);



/***/ }),

/***/ "./src/app/components/stock-details/stock-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/stock-details/stock-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2stZGV0YWlscy9zdG9jay1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/stock-details/stock-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/stock-details/stock-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: StockDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDetailsComponent", function() { return StockDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/stocks.service */ "./src/app/services/stocks.service.ts");
/* harmony import */ var _models_transactionInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/transactionInfo */ "./src/app/models/transactionInfo.ts");







let StockDetailsComponent = class StockDetailsComponent {
    constructor(userService, stockService) {
        this.userService = userService;
        this.stockService = stockService;
        this.removeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRemove = false;
        this.symbol = '';
        this.stockSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trash = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.fetchData();
    }
    ngOnDestroy() {
        this.trash.next();
        this.trash.complete();
        this.stockService.unsubscribeStockPrice(this.symbol);
    }
    fetchData() {
        let result = this.userService.getAllocationsForAsset(this.symbol);
        if (result.data) {
            this.amount = result.data.amount;
        }
        result.subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.trash)).subscribe((data) => {
            if (data) {
                this.amount = data.amount;
            }
            else {
                this.amount = null;
            }
        });
        this.stockService
            .getStockPriceSubscription(this.symbol)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.trash))
            .subscribe((tick) => {
            if (tick) {
                this.currentPrice = tick.price;
            }
            else {
                this.currentPrice = null;
            }
        });
    }
    onRemove() {
        this.removeClick.emit(this.symbol);
    }
    onStockClick(symbol) {
        console.log('event - stock selected', symbol);
        this.stockSelected.next(symbol);
    }
    onTransaction() {
        this.buySellVisible = false;
    }
    openBuySellPopup(side) {
        this.transactionInfo = new _models_transactionInfo__WEBPACK_IMPORTED_MODULE_6__["TransactionInfo"]({ side: side, symbol: this.symbol, amount: 10 });
        this.buySellVisible = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StockDetailsComponent.prototype, "removeClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], StockDetailsComponent.prototype, "showRemove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StockDetailsComponent.prototype, "symbol", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StockDetailsComponent.prototype, "stockSelected", void 0);
StockDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-details',
        template: __webpack_require__(/*! raw-loader!./stock-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stock-details/stock-details.component.html"),
        styles: [__webpack_require__(/*! ./stock-details.component.css */ "./src/app/components/stock-details/stock-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_5__["StocksService"]])
], StockDetailsComponent);



/***/ }),

/***/ "./src/app/components/stock-graph/stock-graph.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/stock-graph/stock-graph.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvY2stZ3JhcGgvc3RvY2stZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/stock-graph/stock-graph.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/stock-graph/stock-graph.component.ts ***!
  \*****************************************************************/
/*! exports provided: StockGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockGraphComponent", function() { return StockGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stocks.service */ "./src/app/services/stocks.service.ts");




let StockGraphComponent = class StockGraphComponent {
    constructor(stockService) {
        this.stockService = stockService;
        this.graphViewMode = 'today';
    }
    ngOnInit() {
        this.initializeOptionsObject();
        this.updateStockPrices(this.symbol, this.graphViewMode);
    }
    ngAfterViewInit() {
        //MATT: I don't think I need this, but it was suggested to be used for 3rd party libraries
    }
    ngOnChanges(changes) {
        //make sure following lines don't run on initial page load
        if (!changes.symbol.firstChange) {
            this.updateStockPrices(this.symbol, this.graphViewMode);
        }
    }
    //triggered when dropdown changes
    onChange(eventVal) {
        this.graphViewMode = eventVal;
        this.updateStockPrices(this.symbol, this.graphViewMode);
    }
    updateStockPrices(stockSymbol, mode) {
        //tempData will hold values that will eventually be pushed to options object
        var tempData = {
            detailed: [],
            aggregated: []
        };
        this.options.series = [];
        this.stockService.getStockPrices(stockSymbol, mode).subscribe((x) => {
            x.aggregated.forEach(element => {
                tempData.aggregated.push(element);
            });
            x.detailed.forEach(element => {
                tempData.detailed.push(element);
            });
            //push detailed series onto the series array
            this.options.series.push({
                name: 'detailed',
                data: tempData.detailed.map((obj) => {
                    return {
                        x: new Date(obj.date),
                        y: obj.price
                    };
                })
            });
            //push detailed series onto the series array
            this.options.series.push({
                name: 'aggregated',
                data: tempData.aggregated.map((obj) => {
                    return {
                        x: new Date(obj.date),
                        y: obj.price
                    };
                })
            });
            //place the chart in our HTML
            highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('chartContainer', this.options);
        });
    } //end of updateStockPrices()
    //initialize our Options object to be passed to HighCharts
    initializeOptionsObject() {
        this.options = {
            chart: {
                type: 'line',
                height: 400
            },
            title: {
                text: 'Sample Scatter Plot'
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function () {
                    return 'x: ' + highcharts__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]('%e %b %y %H:%M:%S', this.x) + ' y: ' + this.y.toFixed(2);
                }
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    formatter: function () {
                        return highcharts__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]('%e %b %y', this.value);
                    }
                }
            },
            series: []
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StockGraphComponent.prototype, "symbol", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], StockGraphComponent.prototype, "isHomePage", void 0);
StockGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock-graph',
        template: __webpack_require__(/*! raw-loader!./stock-graph.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stock-graph/stock-graph.component.html"),
        styles: [__webpack_require__(/*! ./stock-graph.component.css */ "./src/app/components/stock-graph/stock-graph.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__["StocksService"]])
], StockGraphComponent);



/***/ }),

/***/ "./src/app/components/transaction-grid/transaction-grid.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/transaction-grid/transaction-grid.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24tZ3JpZC90cmFuc2FjdGlvbi1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/transaction-grid/transaction-grid.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/transaction-grid/transaction-grid.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGridComponent", function() { return TransactionGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transaction.service */ "./src/app/services/transaction.service.ts");



let TransactionGridComponent = class TransactionGridComponent {
    //DI of the transaction service
    constructor(transactionService) {
        this.transactionService = transactionService;
        this.symbol = '';
        this.transactionList = [];
        this.columnDefs = [
            { headerName: 'Date', field: 'date', sortable: true, filter: true },
            { headerName: 'Side', field: 'side', sortable: true, filter: true, cellClass: function (params) {
                    return params.value
                        === 'BUY' ? 'rag-green' : 'rag-red';
                } },
            { headerName: 'Symbol', field: 'symbol', sortable: true, filter: true },
            { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
            { headerName: 'Price', field: 'tickPrice', sortable: true, filter: true },
            { headerName: 'Cost', field: 'cost', sortable: true, filter: true }
        ];
    }
    ngOnInit() {
        this.fetchData();
    }
    refreshTransactionList() {
        this.fetchData();
    }
    changemade() {
        this.transactionList = null;
    }
    fetchData() {
        this.transactionService.getTransactionList(this.symbol).subscribe((data) => {
            this.transactionList = data;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TransactionGridComponent.prototype, "symbol", void 0);
TransactionGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-grid',
        template: __webpack_require__(/*! raw-loader!./transaction-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transaction-grid/transaction-grid.component.html"),
        styles: [__webpack_require__(/*! ./transaction-grid.component.css */ "./src/app/components/transaction-grid/transaction-grid.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]])
], TransactionGridComponent);



/***/ }),

/***/ "./src/app/models/stock.ts":
/*!*********************************!*\
  !*** ./src/app/models/stock.ts ***!
  \*********************************/
/*! exports provided: StockTick, StockInfo, AllocationInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockTick", function() { return StockTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockInfo", function() { return StockInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocationInfo", function() { return AllocationInfo; });
class StockTick {
    constructor(data) {
        this.stock = data.stock;
        this.price = data.price;
        this.date = new Date(data.date);
    }
}
class StockInfo {
    constructor(data) {
        this.name = data.name;
        this.symbol = data.symbol;
        this.lastTick = data.lastTick ? new StockTick(data.lastTick) : null;
    }
}
class AllocationInfo {
}


/***/ }),

/***/ "./src/app/models/transactionInfo.ts":
/*!*******************************************!*\
  !*** ./src/app/models/transactionInfo.ts ***!
  \*******************************************/
/*! exports provided: TransactionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionInfo", function() { return TransactionInfo; });
class TransactionInfo {
    constructor(data) {
        this.side = data.side.toUpperCase();
        this.symbol = data.symbol;
        this.amount = data.amount;
        this.cost = data.cost;
        this.date = data.date ? new Date(data.date) : null;
        this.tickPrice = data.tickPrice;
    }
}


/***/ }),

/***/ "./src/app/pages/assets/assets.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/assets/assets.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/assets/assets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/assets/assets.component.ts ***!
  \**************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsComponent = class AssetsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets',
        template: __webpack_require__(/*! raw-loader!./assets.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/assets/assets.component.html"),
        styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/pages/assets/assets.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssetsComponent);



/***/ }),

/***/ "./src/app/pages/details/details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/details/details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/details/details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DetailsComponent = class DetailsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.get('symbol')) {
                this.selectedSymbol = params.get('symbol').toUpperCase();
            }
            else {
                this.router.navigateByUrl('details/acme');
            }
        });
    }
    onStockSelected(symbol) {
        this.selectedSymbol = symbol;
    }
};
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DetailsComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.selectedSymbol = 'STRK';
    }
    ngOnInit() { }
    onStockSelected(symbol) {
        this.selectedSymbol = symbol;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/services/TokenInterceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/TokenInterceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");

// src/app/auth/token.interceptor.ts


let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                userid: this.authService.getUserId()
            }
        });
        return next.handle(request);
    }
};
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        // this is Deni's code
        /*if (!localStorage['userId']) {
          localStorage['userId'] = 'User' + new Date().getMilliseconds();
          }
          */
        //Matt's code: hardcode in user id as matthew.cameron
        if (!localStorage['userId']) {
            localStorage['userId'] = 'matthew.cameron';
        }
    }
    getUserId() {
        return localStorage['userId'];
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthService);



/***/ }),

/***/ "./src/app/services/connectivity.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/connectivity.service.ts ***!
  \**************************************************/
/*! exports provided: ConnectivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectivityService", function() { return ConnectivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hapi/nes/lib/Client */ "./node_modules/@hapi/nes/lib/Client.js");
/* harmony import */ var _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_3__);




let ConnectivityService = class ConnectivityService {
    constructor() { }
    connect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.nesClient) {
                this.nesClient = new _hapi_nes_lib_Client__WEBPACK_IMPORTED_MODULE_3__["Client"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].webSocketUrl);
                yield this.nesClient.connect();
            }
            return this.nesClient;
        });
    }
};
ConnectivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConnectivityService);



/***/ }),

/***/ "./src/app/services/stocks.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/stocks.service.ts ***!
  \********************************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _connectivity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connectivity.service */ "./src/app/services/connectivity.service.ts");
/* harmony import */ var _models_stock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/stock */ "./src/app/models/stock.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_7__);








let StocksService = class StocksService {
    constructor(http, connection) {
        this.http = http;
        this.connection = connection;
    }
    get stockListUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'stocks';
    }
    getStockList() {
        return this.http.get(this.stockListUrl).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_7__["map"])((x) => {
            return x.map((s) => new _models_stock__WEBPACK_IMPORTED_MODULE_6__["StockInfo"](s));
        }));
    }
    //MATT: pass this function a stock ticker and a mode (either today or yearly)
    getStockPrices(symbol, mode) {
        //MATT
        return this.http.get(this.stockListUrl + `/${symbol}/price/${mode}`).pipe(
        //MATT: this map doesn't do anything, but is here for example purposes if needed in future
        Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_7__["map"])((x) => x));
    }
    getStockPriceSubscription(symbol) {
        let priceSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.connection.connect().then((client) => {
            client.subscribe('/livestream/' + symbol, (update) => {
                priceSubscription.next(new _models_stock__WEBPACK_IMPORTED_MODULE_6__["StockTick"](update));
            });
        });
        return priceSubscription;
    }
    unsubscribeStockPrice(symbol) {
        this.connection.connect().then((client) => {
            client.unsubscribe('/livestream/' + symbol);
        });
    }
};
StocksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _connectivity_service__WEBPACK_IMPORTED_MODULE_5__["ConnectivityService"]])
], StocksService);



/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transaction.service.ts ***!
  \*************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/transactionInfo */ "./src/app/models/transactionInfo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let TransactionService = class TransactionService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.transactionSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    get transactionUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl + 'transactions';
    }
    makeTransaction(transactionInfo) {
        this.http
            .post(this.transactionUrl, transactionInfo)
            .toPromise()
            .then((response) => {
            this.addTransaction(response.transaction);
            this.userService.updateAllocations(response.allocations, false, response.transaction.symbol);
        });
    }
    addTransaction(transaction) {
        if (this.transactions) {
            this.transactions.push(transaction);
            this.transactionSubscription.next({
                symbol: transaction.symbol,
                data: this.transactions
            });
        }
    }
    getTransactionList(symb) {
        if (symb) {
            return this.http.get(this.transactionUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((x) => {
                return x.map((s) => new _models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__["TransactionInfo"](s)).filter(z => z.symbol === symb);
            }));
        }
        else {
            return this.http.get(this.transactionUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((x) => {
                return x.map((s) => new _models_transactionInfo__WEBPACK_IMPORTED_MODULE_3__["TransactionInfo"](s));
            }));
        }
    }
};
TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], TransactionService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_stock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/stock */ "./src/app/models/stock.ts");







let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.allocationsSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get watchListUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + 'userdata/watchlist';
    }
    get allocationsUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverUrl + 'userdata/allocations';
    }
    /**
     * The pattern which we follow here is to get the data from server only once and share subscription for future updates
     *
     * @returns
     * @memberof UserService
     */
    getAllocations(isInit = false) {
        if (!this.allocations || isInit) {
            this.allocations = this.allocations || [];
            this.http.get(this.allocationsUrl).subscribe((data) => {
                this.updateAllocations(data, true);
            });
        }
        return {
            subscription: this.allocationsSubscription,
            data: this.allocations
        };
    }
    updateAllocations(data, isInit, symbol) {
        this.allocations = data;
        this.allocationsSubscription.next({
            isInit: isInit,
            symbol: symbol,
            data: this.allocations
        });
    }
    /**
     * This method shares the same subscription as getting all assets and adds pipe to only return data for a single asset
     *
     * @param {*} symbol
     * @returns
     * @memberof UserService
     */
    getAllocationsForAsset(symbol) {
        let subscription = this.getAllocations().subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((response) => {
            return response.isInit || response.symbol === symbol;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => this.mapSingleAssetFromList(result.data, symbol)));
        return {
            subscription: subscription,
            data: this.mapSingleAssetFromList(this.allocations, symbol)
        };
    }
    mapSingleAssetFromList(list, symbol) {
        return list.find((x) => x.symbol === symbol);
    }
    getWatchList() {
        return this.http.get(this.watchListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((x) => {
            return x.map((s) => new _models_stock__WEBPACK_IMPORTED_MODULE_6__["StockInfo"](s));
        }));
    }
    addToWatchList(symbol) {
        return this.http.post(this.watchListUrl, {
            symbol: symbol,
            action: 'ADD'
        }, {
            responseType: 'text'
        });
    }
    removeFromWatchList(symbol) {
        return this.http.post(this.watchListUrl, {
            symbol: symbol,
            action: 'REMOVE'
        }, {
            responseType: 'text'
        });
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    serverUrl: 'https://demomocktradingserver.azurewebsites.net/',
    webSocketUrl: 'wss://demomocktradingserver.azurewebsites.net/',
    production: true
};


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
const environment = {
    serverUrl: 'https://demomocktradingserver.azurewebsites.net/',
    webSocketUrl: 'wss://demomocktradingserver.azurewebsites.net/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\bootcamp\mock-trading-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map