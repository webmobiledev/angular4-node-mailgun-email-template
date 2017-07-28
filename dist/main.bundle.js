webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <img src=\"assets/images/logo.jpg\" class=\"logo\">\n  </div>\n  <div class=\"col-sm-12\">\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socils natoque penatibus et magnis dis parturient montes, naascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo...</p>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"row carousel align-items-center\">\n      <div class=\"btn\" (click)=\"changePos('prev')\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n      <div class=\"content mt-4 mb-4\">\n        <div class=\"row\">\n          <div class=\"col-sm-3 hidden-sm-down pt-4\">\n            <app-template [pos]=\"'prev'\"></app-template>\n          </div>\n          <div class=\"col-sm-6\">\n            <app-template [pos]=\"'center'\"></app-template>\n          </div>\n          <div class=\"col-sm-3 hidden-sm-down pt-4\">\n            <app-template [pos]=\"'next'\"></app-template>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn\" (click)=\"changePos('next')\">\n        <i class=\"fa fa-chevron-right\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <form class=\"text-center\" [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [formControl]=\"complexForm.controls['name']\" value=\"saf\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" [formControl]=\"complexForm.controls['email']\" value=\"dragon.blue128@yandex.com\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!complexForm.valid\">Send Email</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  width: 50px; }\n\n.carousel .fa {\n  font-size: 50px;\n  color: #aaaaaa; }\n\n.carousel .content {\n  width: calc(100% - 2 * 70px);\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_service__ = __webpack_require__("../../../../../src/providers/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.complexForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].email])],
        });
    }
    AppComponent.prototype.changePos = function (btn) {
        this.service.changePos(btn);
    };
    AppComponent.prototype.submitForm = function (value) {
        this.service.send(value.email, "Hello", value.name)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_template_component__ = __webpack_require__("../../../../../src/app/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_service__ = __webpack_require__("../../../../../src/providers/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__template_template_component__["a" /* TemplateComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__providers_app_service__["a" /* AppService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\" [class.card-outline-success]=\"pos == 'center'\" [class.card-outline-secondary]=\"pos == 'prev' || pos == 'next'\">\n  <div class=\"card-header\">\n    <h5 *ngIf=\"pos == 'prev' && prevTemp\">{{prevTemp.title}}</h5>\n    <h5 *ngIf=\"pos == 'center'\">{{currentTemp.title}}</h5>\n    <h5 *ngIf=\"pos == 'next' && nextTemp\">{{nextTemp.title}}</h5>\n  </div>\n  <div class=\"card-block\">\n    <p *ngIf=\"pos == 'prev' && prevTemp\">{{prevTemp.content}}</p>\n    <p *ngIf=\"pos == 'center'\">{{currentTemp.content}}</p>\n    <p *ngIf=\"pos == 'next' && nextTemp\">{{nextTemp.content}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/template/template.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  height: 100%; }\n\n.card-outline-success {\n  border-radius: 2px; }\n\n.card-outline-secondary h5 {\n  font-weight: 300; }\n\n.card-outline-secondary p {\n  font-size: 12px;\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app_service__ = __webpack_require__("../../../../../src/providers/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateComponent = (function () {
    function TemplateComponent(service) {
        var _this = this;
        this.service = service;
        this.len = this.service.templates.length;
        this.service.pos.subscribe(function (pos) {
            _this.currentPos = pos;
            _this.currentTemp = _this.service.templates[_this.currentPos];
            if (_this.currentPos != 0)
                _this.prevTemp = _this.service.templates[_this.currentPos - 1];
            else if (_this.currentPos == 0)
                _this.prevTemp = null;
            if (_this.currentPos != _this.len - 1)
                _this.nextTemp = _this.service.templates[_this.currentPos + 1];
            else if (_this.currentPos == _this.len - 1)
                _this.nextTemp = null;
        });
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    return TemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TemplateComponent.prototype, "pos", void 0);
TemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-template',
        template: __webpack_require__("../../../../../src/app/template/template.component.html"),
        styles: [__webpack_require__("../../../../../src/app/template/template.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app_service__["a" /* AppService */]) === "function" && _a || Object])
], TemplateComponent);

var _a;
//# sourceMappingURL=template.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/providers/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.currentPos = 1;
        this.pos = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.currentPos);
        this.templates = [
            { title: "Template 1", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n" },
            { title: "Template 2", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n" },
            { title: "Template 3", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n" },
            { title: "Template 4", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n" },
            { title: "Template 5", content: "Subject: Hello There\r\n\r\nThanks for visiting this site.\r\nFrom here you can email this text to us simply by filling in your name and email address below.\r\n\r\nWe will get back to you soon.\r\nThanks again for visiting.\r\n\r\nSincerely,\r\n\r\n" },
        ];
    }
    AppService.prototype.changePos = function (btn) {
        if (btn == "prev" && this.currentPos > 0) {
            this.currentPos -= 1;
            this.pos.next(this.currentPos);
        }
        else if (btn == "next" && this.currentPos < this.templates.length - 1) {
            this.currentPos += 1;
            this.pos.next(this.currentPos);
        }
    };
    AppService.prototype.send = function (sender, subject, name) {
        var body = this.templates[this.currentPos].content + name;
        return this.http.post('/api/post', { sender: sender, subject: subject, body: body })
            .map(function (res) { return res.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map