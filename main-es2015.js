(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ng-sidebar-accordion/__ivy_ngcc__/fesm2015/ng-sidebar-accordion.js":
/*!*****************************************************************************************************************************!*\
  !*** D:/Projects/Glowbyte/VTB/ng-sidebar-accordion/dist/ng-sidebar-accordion/__ivy_ngcc__/fesm2015/ng-sidebar-accordion.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: SidebarAccordionModule, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAccordionModule", function() { return SidebarAccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SidebarHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SidebarAccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SidebarContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SidebarAccordionContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = [[["ng-sidebar", "position", "left"]], [["ng-sidebar", "position", "top"]], [["ng-sidebar", "position", "right"]], [["ng-sidebar-accordion-content"]], [["ng-sidebar", "position", "bottom"]]];
const _c1 = ["ng-sidebar[position=left]", "ng-sidebar[position=top]", "ng-sidebar[position=right]", "ng-sidebar-accordion-content", "ng-sidebar[position=bottom]"];
const _c2 = [[["ng-sidebar-header"], ["", "ng-sidebar-header", ""]], [["ng-sidebar-content"], ["", "ng-sidebar-content", ""]]];
const _c3 = ["ng-sidebar-header, [ng-sidebar-header]", "ng-sidebar-content, [ng-sidebar-content]"];
const _c4 = ["*"];
let SidebarAccordionComponent = class SidebarAccordionComponent {
    constructor() {
        this.classNameSidebarAccordion = true;
        this._sidebars = [];
        this.groupBy = (xs, key) => {
            return xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    _addSidebar(sidebar) {
        this._sidebars.push(sidebar);
        this.subscribe(sidebar);
    }
    _removeSidebar(sidebar) {
        const index = this._sidebars.indexOf(sidebar);
        if (index !== -1) {
            this._sidebars.splice(index, 1);
        }
    }
    open(value, index = 0) {
        this.sidebarToggle(value, index, true);
    }
    close(value) {
        this.sidebarToggle(value, null, false);
    }
    sidebarToggle(position, index, opened) {
        const groupByPosition = this.groupBy(this._sidebars, 'position');
        if (groupByPosition.hasOwnProperty('left')) {
            groupByPosition['left'].reverse();
        }
        if (groupByPosition.hasOwnProperty('top')) {
            groupByPosition['top'].reverse();
        }
        switch (position) {
            case 'all':
                Object.keys(groupByPosition).forEach(key => {
                    opened
                        ? groupByPosition[key][index].open()
                        : index
                            ? groupByPosition[key][index].close()
                            : groupByPosition[key].forEach(s => s.close());
                });
                break;
            default:
                opened
                    ? groupByPosition[position][index].open()
                    : index
                        ? groupByPosition[position][index].close()
                        : groupByPosition[position].forEach(s => s.close());
                break;
        }
    }
    subscribe(sidebar) {
        sidebar.toggle.subscribe((e) => {
            e.opened ? e.close() : e.open();
        });
        sidebar.openedChange.subscribe((e) => {
            if (e.opened) {
                this._sidebars.filter(s => s.opened && s != e.sender &&
                    s.position === e.sender.position).forEach(s => s.close());
            }
        });
    }
    unsubscribe() {
        this._sidebars.forEach(sidebar => {
            sidebar.toggle.unsubscribe();
            sidebar.openedChange.unsubscribe();
        });
    }
};
SidebarAccordionComponent.ɵfac = function SidebarAccordionComponent_Factory(t) { return new (t || SidebarAccordionComponent)(); };
SidebarAccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarAccordionComponent, selectors: [["ng-sidebar-accordion"]], hostVars: 8, hostBindings: function SidebarAccordionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-sidebar-accordion", ctx.classNameSidebarAccordion);
    } }, inputs: { width: "width", height: "height", className: "className" }, ngContentSelectors: _c1, decls: 10, vars: 0, consts: [[1, "ng-sidebar-accordion__left-pane"], [1, "ng-sidebar-accordion__top-pane"], [1, "ng-sidebar-accordion__right-pane"], [1, "ng-sidebar-accordion__content-pane"], [1, "ng-sidebar-accordion__bottom-pane"]], template: function SidebarAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".ng-sidebar-accordion .ng-sidebar-header,  .ng-sidebar-accordion__bottom-pane,  .ng-sidebar-accordion__bottom-pane .ng-sidebar,  .ng-sidebar-accordion__content-pane,  .ng-sidebar-accordion__left-pane,  .ng-sidebar-accordion__left-pane .ng-sidebar,  .ng-sidebar-accordion__right-pane,  .ng-sidebar-accordion__right-pane .ng-sidebar,  .ng-sidebar-accordion__top-pane,  .ng-sidebar-accordion__top-pane .ng-sidebar{position:relative;display:flex;flex-wrap:nowrap} :root{--ng-sidebar-accordion-space-header:40px;--ng-sidebar-accordion-space-header-border:2px;--ng-sidebar-accordion-space-content:300px;--ng-sidebar-accordion-color-bg:#ffffff;--ng-sidebar-accordion-color-header:#ffffff;--ng-sidebar-accordion-color-header-bg:#337ab7;--ng-sidebar-accordion-animation-duration:0.5s} .ng-sidebar-accordion{background-color:var(--ng-sidebar-accordion-color-bg);display:grid;position:relative;height:100%;width:100%;overflow:hidden;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;grid-template-areas:\"left-pane top-pane right-pane\" \"left-pane content-pane right-pane\" \"left-pane bottom-pane right-pane\"} .ng-sidebar-accordion__top-pane{-ms-grid-row:1;-ms-grid-column:2;flex-direction:column;grid-area:top-pane;margin-top:calc(var(--ng-sidebar-accordion-space-header-border) * -1)} .ng-sidebar-accordion__top-pane .ng-sidebar-header{border-top:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)} .ng-sidebar-accordion__top-pane .ng-sidebar{flex-direction:column-reverse} .ng-sidebar-accordion__bottom-pane{-ms-grid-row:3;-ms-grid-column:2;flex-direction:column;grid-area:bottom-pane;margin-bottom:calc(var(--ng-sidebar-accordion-space-header-border) * -1)} .ng-sidebar-accordion__bottom-pane .ng-sidebar-header{border-bottom:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)} .ng-sidebar-accordion__bottom-pane .ng-sidebar{flex-direction:column} .ng-sidebar-accordion__left-pane{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:1;grid-area:left-pane;margin-left:calc(var(--ng-sidebar-accordion-space-header-border) * -1)} .ng-sidebar-accordion__left-pane .ng-sidebar-header{border-left:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)} .ng-sidebar-accordion__left-pane .ng-sidebar{flex-direction:row-reverse} .ng-sidebar-accordion__right-pane{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;grid-area:right-pane;margin-right:calc(var(--ng-sidebar-accordion-space-header-border) * -1)} .ng-sidebar-accordion__right-pane .ng-sidebar-header{border-right:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)} .ng-sidebar-accordion__content-pane{-ms-grid-row:2;-ms-grid-column:2;flex-direction:column;grid-area:content-pane} .ng-sidebar-accordion__bottom-pane .ng-sidebar_opened .ng-sidebar-content,  .ng-sidebar-accordion__top-pane .ng-sidebar_opened .ng-sidebar-content{height:var(--ng-sidebar-accordion-space-content);max-height:var(--ng-sidebar-accordion-space-content);transition:height var(--ng-sidebar-accordion-animation-duration)} .ng-sidebar-accordion__bottom-pane .ng-sidebar-header,  .ng-sidebar-accordion__top-pane .ng-sidebar-header{justify-content:center;height:var(--ng-sidebar-accordion-space-header);align-items:center} .ng-sidebar-accordion__bottom-pane .ng-sidebar-content,  .ng-sidebar-accordion__top-pane .ng-sidebar-content{height:0;overflow:hidden;transition:height var(--ng-sidebar-accordion-animation-duration)} .ng-sidebar-accordion__left-pane .ng-sidebar_opened .ng-sidebar-content,  .ng-sidebar-accordion__right-pane .ng-sidebar_opened .ng-sidebar-content{max-width:var(--ng-sidebar-accordion-space-content);width:var(--ng-sidebar-accordion-space-content);transition:width var(--ng-sidebar-accordion-animation-duration)} .ng-sidebar-accordion__left-pane .ng-sidebar-header__content,  .ng-sidebar-accordion__right-pane .ng-sidebar-header__content{width:var(--ng-sidebar-accordion-space-header);align-self:center} .ng-sidebar-accordion__left-pane .ng-sidebar-header__wrapper,  .ng-sidebar-accordion__right-pane .ng-sidebar-header__wrapper{white-space:nowrap;transform:rotate(270deg)} .ng-sidebar-accordion__left-pane .ng-sidebar-content,  .ng-sidebar-accordion__right-pane .ng-sidebar-content{width:0;overflow:hidden;transition:width var(--ng-sidebar-accordion-animation-duration)} .ng-sidebar-accordion .ng-sidebar-header{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--ng-sidebar-accordion-color-header-bg);color:var(--ng-sidebar-accordion-color-header)}"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar-accordion')
], SidebarAccordionComponent.prototype, "classNameSidebarAccordion", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')
], SidebarAccordionComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')
], SidebarAccordionComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidebarAccordionComponent.prototype, "className", void 0);

let SidebarComponent = class SidebarComponent {
    constructor(_container) {
        this._container = _container;
        this.classNameSidebar = true;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classNameSidebarOpened = false;
        this._headers = [];
        this._contents = [];
        this._opened = false;
        if (!this._container) {
            throw new Error('<ng-sidebar-accordion> must be inside a <ng-sidebar-accordion></ng-sidebar-accordion>.');
        }
    }
    get opened() {
        return this._opened;
    }
    ;
    set opened(value) {
        this._opened = value;
        this.classNameSidebarOpened = value;
        this.openedChange.emit({ sender: this, opened: value });
    }
    get _headersLength() {
        return this._headers.length;
    }
    get _contentsLength() {
        return this._contents.length;
    }
    ngOnInit() {
        this._container._addSidebar(this);
    }
    ngOnDestroy() {
        this._container._removeSidebar(this);
        this.unsubscribe();
    }
    _addHeader(header) {
        if (this._headersLength > 0) {
            throw new Error('<ng-sidebar-header> must be only one.');
        }
        this._headers.push(header);
        this.subscribe(header);
    }
    _removeHeader(header) {
        const index = this._headers.indexOf(header);
        if (index !== -1) {
            this._headers.splice(index, 1);
        }
    }
    _addContent(content) {
        if (this._contentsLength > 0) {
            throw new Error('<ng-sidebar-content> must be only one.');
        }
        this._contents.push(content);
    }
    _removeContent(content) {
        const index = this._contents.indexOf(content);
        if (index !== -1) {
            this._contents.splice(index, 1);
        }
    }
    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
    subscribe(header) {
        header.clicked.subscribe(() => {
            this.toggle.emit(this);
        });
    }
    unsubscribe() {
        this._headers.forEach(header => header.clicked.unsubscribe());
    }
};
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SidebarAccordionComponent, 8)); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["ng-sidebar"]], hostVars: 9, hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("position", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-sidebar", ctx.classNameSidebar)("ng-sidebar_opened", ctx.classNameSidebarOpened);
    } }, inputs: { classNameSidebar: "classNameSidebar", opened: "opened", position: "position", className: "className", style: "style" }, outputs: { toggle: "toggle", openedChange: "openedChange" }, ngContentSelectors: _c3, decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    } }, encapsulation: 2, changeDetection: 0 });
SidebarComponent.ctorParameters = () => [
    { type: SidebarAccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.position')
], SidebarComponent.prototype, "position", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar')
], SidebarComponent.prototype, "classNameSidebar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidebarComponent.prototype, "className", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style')
], SidebarComponent.prototype, "style", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "toggle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "openedChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar_opened')
], SidebarComponent.prototype, "classNameSidebarOpened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarComponent.prototype, "opened", null);
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], SidebarComponent);

let SidebarHeaderComponent = class SidebarHeaderComponent {
    constructor(_container) {
        this._container = _container;
        this.classNameSidebarHeader = true;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this._container) {
            throw new Error('<ng-sidebar-header> must be inside a <ng-sidebar></ng-sidebar>.');
        }
    }
    onHeaderClick(e) {
        this.clicked.emit(e);
    }
    ngOnInit() {
        this._container._addHeader(this);
    }
    ngOnDestroy() {
        this._container._removeHeader(this);
    }
};
SidebarHeaderComponent.ɵfac = function SidebarHeaderComponent_Factory(t) { return new (t || SidebarHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SidebarComponent, 8)); };
SidebarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarHeaderComponent, selectors: [["ng-sidebar-header"]], hostVars: 4, hostBindings: function SidebarHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseup", function SidebarHeaderComponent_mouseup_HostBindingHandler($event) { return ctx.onHeaderClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-sidebar-header", ctx.classNameSidebarHeader);
    } }, inputs: { className: "className" }, outputs: { clicked: "clicked" }, ngContentSelectors: _c4, decls: 3, vars: 0, consts: [[1, "ng-sidebar-header__content"], [1, "ng-sidebar-header__wrapper"]], template: function SidebarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
SidebarHeaderComponent.ctorParameters = () => [
    { type: SidebarComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar-header')
], SidebarHeaderComponent.prototype, "classNameSidebarHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidebarHeaderComponent.prototype, "className", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarHeaderComponent.prototype, "clicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event'])
], SidebarHeaderComponent.prototype, "onHeaderClick", null);
SidebarHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], SidebarHeaderComponent);

let SidebarContentComponent = class SidebarContentComponent {
    constructor(_container, element) {
        this._container = _container;
        this.element = element;
        this.classNameSidebarContent = true;
        if (!this._container) {
            throw new Error('<ng-sidebar-content> must be inside a <ng-sidebar></ng-sidebar>.');
        }
    }
    ngOnInit() {
        this._container._addContent(this);
    }
    ngOnDestroy() {
        this._container._removeContent(this);
    }
};
SidebarContentComponent.ɵfac = function SidebarContentComponent_Factory(t) { return new (t || SidebarContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SidebarComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
SidebarContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarContentComponent, selectors: [["ng-sidebar-content"]], hostVars: 4, hostBindings: function SidebarContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-sidebar-content", ctx.classNameSidebarContent);
    } }, inputs: { className: "className" }, ngContentSelectors: _c4, decls: 1, vars: 0, template: function SidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
SidebarContentComponent.ctorParameters = () => [
    { type: SidebarComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar-content')
], SidebarContentComponent.prototype, "classNameSidebarContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidebarContentComponent.prototype, "className", void 0);
SidebarContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], SidebarContentComponent);

let SidebarAccordionContentComponent = class SidebarAccordionContentComponent {
    constructor(_container) {
        this._container = _container;
        this.classNameSidebarAccordionContent = true;
        if (!this._container) {
            throw new Error('<ng-sidebar-accordion-content> must be inside a <ng-sidebar-accordion></ng-sidebar-accordion>.');
        }
    }
};
SidebarAccordionContentComponent.ɵfac = function SidebarAccordionContentComponent_Factory(t) { return new (t || SidebarAccordionContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SidebarAccordionComponent, 8)); };
SidebarAccordionContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarAccordionContentComponent, selectors: [["ng-sidebar-accordion-content"]], hostVars: 4, hostBindings: function SidebarAccordionContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.className);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-sidebar-accordion-content", ctx.classNameSidebarAccordionContent);
    } }, inputs: { className: "className" }, ngContentSelectors: _c4, decls: 1, vars: 0, template: function SidebarAccordionContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
SidebarAccordionContentComponent.ctorParameters = () => [
    { type: SidebarAccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ng-sidebar-accordion-content')
], SidebarAccordionContentComponent.prototype, "classNameSidebarAccordionContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SidebarAccordionContentComponent.prototype, "className", void 0);
SidebarAccordionContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], SidebarAccordionContentComponent);

let SidebarAccordionModule = class SidebarAccordionModule {
};
SidebarAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SidebarAccordionModule });
SidebarAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SidebarAccordionModule_Factory(t) { return new (t || SidebarAccordionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarAccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-sidebar-accordion',
                template: `
    <div class="ng-sidebar-accordion__left-pane">
      <ng-content select="ng-sidebar[position=left]"></ng-content>
    </div>
    <div class="ng-sidebar-accordion__top-pane">
      <ng-content select="ng-sidebar[position=top]"></ng-content>
    </div>
    <div class="ng-sidebar-accordion__right-pane">
      <ng-content select="ng-sidebar[position=right]"></ng-content>
    </div>
    <div class="ng-sidebar-accordion__content-pane">
      <ng-content select="ng-sidebar-accordion-content"></ng-content>
    </div>
    <div class="ng-sidebar-accordion__bottom-pane">
      <ng-content select="ng-sidebar[position=bottom]"></ng-content>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: ["::ng-deep.ng-sidebar-accordion .ng-sidebar-header,::ng-deep.ng-sidebar-accordion__bottom-pane,::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar,::ng-deep.ng-sidebar-accordion__content-pane,::ng-deep.ng-sidebar-accordion__left-pane,::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar,::ng-deep.ng-sidebar-accordion__right-pane,::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar,::ng-deep.ng-sidebar-accordion__top-pane,::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar{position:relative;display:flex;flex-wrap:nowrap}::ng-deep:root{--ng-sidebar-accordion-space-header:40px;--ng-sidebar-accordion-space-header-border:2px;--ng-sidebar-accordion-space-content:300px;--ng-sidebar-accordion-color-bg:#ffffff;--ng-sidebar-accordion-color-header:#ffffff;--ng-sidebar-accordion-color-header-bg:#337ab7;--ng-sidebar-accordion-animation-duration:0.5s}::ng-deep.ng-sidebar-accordion{background-color:var(--ng-sidebar-accordion-color-bg);display:grid;position:relative;height:100%;width:100%;overflow:hidden;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr auto;grid-template-areas:\"left-pane top-pane right-pane\" \"left-pane content-pane right-pane\" \"left-pane bottom-pane right-pane\"}::ng-deep.ng-sidebar-accordion__top-pane{-ms-grid-row:1;-ms-grid-column:2;flex-direction:column;grid-area:top-pane;margin-top:calc(var(--ng-sidebar-accordion-space-header-border) * -1)}::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar-header{border-top:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)}::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar{flex-direction:column-reverse}::ng-deep.ng-sidebar-accordion__bottom-pane{-ms-grid-row:3;-ms-grid-column:2;flex-direction:column;grid-area:bottom-pane;margin-bottom:calc(var(--ng-sidebar-accordion-space-header-border) * -1)}::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar-header{border-bottom:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)}::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar{flex-direction:column}::ng-deep.ng-sidebar-accordion__left-pane{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:1;grid-area:left-pane;margin-left:calc(var(--ng-sidebar-accordion-space-header-border) * -1)}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar-header{border-left:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar{flex-direction:row-reverse}::ng-deep.ng-sidebar-accordion__right-pane{-ms-grid-row:1;-ms-grid-row-span:3;-ms-grid-column:3;grid-area:right-pane;margin-right:calc(var(--ng-sidebar-accordion-space-header-border) * -1)}::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar-header{border-right:var(--ng-sidebar-accordion-space-header-border) solid var(--ng-sidebar-accordion-color-bg)}::ng-deep.ng-sidebar-accordion__content-pane{-ms-grid-row:2;-ms-grid-column:2;flex-direction:column;grid-area:content-pane}::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar_opened .ng-sidebar-content,::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar_opened .ng-sidebar-content{height:var(--ng-sidebar-accordion-space-content);max-height:var(--ng-sidebar-accordion-space-content);transition:height var(--ng-sidebar-accordion-animation-duration)}::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar-header,::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar-header{justify-content:center;height:var(--ng-sidebar-accordion-space-header);align-items:center}::ng-deep.ng-sidebar-accordion__bottom-pane .ng-sidebar-content,::ng-deep.ng-sidebar-accordion__top-pane .ng-sidebar-content{height:0;overflow:hidden;transition:height var(--ng-sidebar-accordion-animation-duration)}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar_opened .ng-sidebar-content,::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar_opened .ng-sidebar-content{max-width:var(--ng-sidebar-accordion-space-content);width:var(--ng-sidebar-accordion-space-content);transition:width var(--ng-sidebar-accordion-animation-duration)}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar-header__content,::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar-header__content{width:var(--ng-sidebar-accordion-space-header);align-self:center}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar-header__wrapper,::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar-header__wrapper{white-space:nowrap;transform:rotate(270deg)}::ng-deep.ng-sidebar-accordion__left-pane .ng-sidebar-content,::ng-deep.ng-sidebar-accordion__right-pane .ng-sidebar-content{width:0;overflow:hidden;transition:width var(--ng-sidebar-accordion-animation-duration)}::ng-deep.ng-sidebar-accordion .ng-sidebar-header{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--ng-sidebar-accordion-color-header-bg);color:var(--ng-sidebar-accordion-color-header)}"]
            }]
    }], function () { return []; }, { classNameSidebarAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar-accordion']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-sidebar',
                template: `
    <ng-content select="ng-sidebar-header, [ng-sidebar-header]"></ng-content>
    <ng-content select="ng-sidebar-content, [ng-sidebar-content]"></ng-content>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SidebarAccordionComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { classNameSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar']
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], classNameSidebarOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar_opened']
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.position']
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-sidebar-header',
                template: `
    <div class="ng-sidebar-header__content">
      <div class="ng-sidebar-header__wrapper">
        <ng-content></ng-content>
      </div>
    </div>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SidebarComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { classNameSidebarHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar-header']
        }], clicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onHeaderClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseup', ['$event']]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-sidebar-content',
                template: `
    <ng-content></ng-content>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SidebarComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { classNameSidebarContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar-content']
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarAccordionContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-sidebar-accordion-content',
                template: `
    <ng-content></ng-content>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SidebarAccordionComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { classNameSidebarAccordionContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-sidebar-accordion-content']
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidebarAccordionModule, { declarations: function () { return [SidebarHeaderComponent,
        SidebarContentComponent,
        SidebarComponent,
        SidebarAccordionContentComponent,
        SidebarAccordionComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SidebarHeaderComponent,
        SidebarContentComponent,
        SidebarComponent,
        SidebarAccordionContentComponent,
        SidebarAccordionComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                declarations: [
                    SidebarHeaderComponent,
                    SidebarContentComponent,
                    SidebarComponent,
                    SidebarAccordionContentComponent,
                    SidebarAccordionComponent
                ],
                exports: [
                    SidebarHeaderComponent,
                    SidebarContentComponent,
                    SidebarComponent,
                    SidebarAccordionContentComponent,
                    SidebarAccordionComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-sidebar-accordion
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-sidebar-accordion.js.map

/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-sidebar-accordion */ "../../dist/ng-sidebar-accordion/__ivy_ngcc__/fesm2015/ng-sidebar-accordion.js");



class AppComponent {
    constructor() {
        this.title = 'demo';
        this._theme = '';
    }
    onChangeTheme() {
        this._theme ? this._theme = null : this._theme = 'dark';
        document.getElementsByTagName('html')[0].setAttribute('theme', this._theme);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 71, vars: 1, consts: [["accordion", ""], ["position", "top"], [2, "height", "150px"], ["position", "bottom"], ["position", "left"], ["position", "right", 3, "opened"], ["sidebar", ""], ["position", "right"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-sidebar-accordion", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "top-pane2-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "top-pane2-row1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "top-pane2-row2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ng-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "top-pane1-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "top-pane1-row1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "top-pane1-row2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-sidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "bottom-pane1-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "bottom-pane1-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ng-sidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "bottom-pane2-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "bottom-pane2-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ng-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "left-pane2-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "left-pane2-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ng-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "left-pane1-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "left-pane1-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ng-sidebar", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "right-pane1-header-row1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "right-pane1-header-row2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " right-pane1-content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ng-sidebar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " right-pane2-content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ng-sidebar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ng-sidebar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " right-pane3-header ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ng-sidebar-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " right-pane3-content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ng-sidebar-accordion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return _r1.opened = !_r1.opened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "click by tagName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.open("all", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "open all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.close("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "close all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.open("right", 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "open right pane 2 index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.close("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "close all right pane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_67_listener() { return ctx.onChangeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "change theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "content-pane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", true);
    } }, directives: [ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__["ɵc"], ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__["ɵb"], ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__["ɵa"], ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__["ɵd"], ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_1__["ɵe"]], styles: [":root[theme=dark] {\n  --ng-sidebar-accordion-space-header: 40px;\n  --ng-sidebar-accordion-space-header-border: 2px;\n  --ng-sidebar-accordion-space-content: 300px;\n  --ng-sidebar-accordion-color-bg: #2b2b2b;\n  --ng-sidebar-accordion-color-header: #a3a2a1;\n  --ng-sidebar-accordion-color-header-bg: #4e5254;\n  --ng-sidebar-accordion-animation-duration: 0.5s;\n  --color: #a3a2a1;\n}\n\n :root {\n  --color: #000000;\n}\n\nbody[_ngcontent-%COMP%], .ng-sidebar-content[_ngcontent-%COMP%], .ng-sidebar-accordion-content[_ngcontent-%COMP%] {\n  color: var(--color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL2FwcC9EOlxcUHJvamVjdHNcXEdsb3dieXRlXFxWVEJcXG5nLXNpZGViYXItYWNjb3JkaW9uL3Byb2plY3RzXFxkZW1vXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQ0FBQTtFQUNBLCtDQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FESUE7OztFQUdFLG1CQUFBO0FDREYiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcDpyb290W3RoZW1lPVwiZGFya1wiXSB7XHJcbiAgLS1uZy1zaWRlYmFyLWFjY29yZGlvbi1zcGFjZS1oZWFkZXI6IDQwcHg7XHJcbiAgLS1uZy1zaWRlYmFyLWFjY29yZGlvbi1zcGFjZS1oZWFkZXItYm9yZGVyOiAycHg7XHJcbiAgLS1uZy1zaWRlYmFyLWFjY29yZGlvbi1zcGFjZS1jb250ZW50OiAzMDBweDtcclxuICAtLW5nLXNpZGViYXItYWNjb3JkaW9uLWNvbG9yLWJnOiAjMmIyYjJiO1xyXG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tY29sb3ItaGVhZGVyOiAjYTNhMmExO1xyXG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tY29sb3ItaGVhZGVyLWJnOiAjNGU1MjU0O1xyXG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG5cclxuICAtLWNvbG9yOiAjYTNhMmExO1xyXG59XHJcblxyXG46Om5nLWRlZXA6cm9vdCB7XHJcbiAgLS1jb2xvcjogIzAwMDAwMDtcclxuICAvLy0tbmctc2lkZWJhci1hY2NvcmRpb24tc3BhY2UtaGVhZGVyOiA3MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuYm9keSxcclxuLm5nLXNpZGViYXItY29udGVudCxcclxuLm5nLXNpZGViYXItYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbn1cclxuIiwiOjpuZy1kZWVwOnJvb3RbdGhlbWU9ZGFya10ge1xuICAtLW5nLXNpZGViYXItYWNjb3JkaW9uLXNwYWNlLWhlYWRlcjogNDBweDtcbiAgLS1uZy1zaWRlYmFyLWFjY29yZGlvbi1zcGFjZS1oZWFkZXItYm9yZGVyOiAycHg7XG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tc3BhY2UtY29udGVudDogMzAwcHg7XG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tY29sb3ItYmc6ICMyYjJiMmI7XG4gIC0tbmctc2lkZWJhci1hY2NvcmRpb24tY29sb3ItaGVhZGVyOiAjYTNhMmExO1xuICAtLW5nLXNpZGViYXItYWNjb3JkaW9uLWNvbG9yLWhlYWRlci1iZzogIzRlNTI1NDtcbiAgLS1uZy1zaWRlYmFyLWFjY29yZGlvbi1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC0tY29sb3I6ICNhM2EyYTE7XG59XG5cbjo6bmctZGVlcDpyb290IHtcbiAgLS1jb2xvcjogIzAwMDAwMDtcbn1cblxuYm9keSxcbi5uZy1zaWRlYmFyLWNvbnRlbnQsXG4ubmctc2lkZWJhci1hY2NvcmRpb24tY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-sidebar-accordion */ "../../dist/ng-sidebar-accordion/__ivy_ngcc__/fesm2015/ng-sidebar-accordion.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_2__["SidebarAccordionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_2__["SidebarAccordionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng_sidebar_accordion__WEBPACK_IMPORTED_MODULE_2__["SidebarAccordionModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Glowbyte\VTB\ng-sidebar-accordion\projects\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map