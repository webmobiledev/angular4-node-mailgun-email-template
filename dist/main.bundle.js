webpackJsonp([2],{

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

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <img src=\"assets/images/logo.jpg\" class=\"logo\">\n  </div>\n  <div class=\"col-sm-12\">\n    <p>Please stand with us in opposition to the ill-conceived NUSD proposal. We have created several letters that are directed to the County Board of Education that can be easily customizable and personalized to create greater impact. Simply provide your name, address and email in the box below, select the letter(s) you would like to send and hit SEND. It's that easy!<p>\n    <p>The vote to move the petition forward by the Board of Education will take place on the 29th of August. We need to make sure our voices are heard, so please take a couple of minutes to send in your letters today and SHARE this with your family and friends to help us defeat this divisive and disruptive proposal that will only benefit a few select people and disenfranchise many thousands more.</p>\n  </div>\n  <div class=\"col-sm-12\">\n    <carousel (activeSlideChange)=\"changeSlide($event)\">\n      <slide *ngFor=\"let t of templates\">\n        <div class=\"card text-center\">\n          <div class=\"card-header\">\n            <h5>{{t.title}}</h5>\n          </div>\n          <div class=\"card-block\">\n            <p>{{t.content}}</p>\n          </div>\n        </div>\n      </slide>\n    </carousel>\n  </div>\n  <div class=\"col-sm-12 mt-4 mb-4\">\n    <form class=\"text-center\" [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [formControl]=\"complexForm.controls['name']\" value=\"saf\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" [formControl]=\"complexForm.controls['email']\" value=\"dragon.blue128@yandex.com\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!complexForm.valid\">Send Email</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  width: 50px; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
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
        this.templates = this.service.templates;
    }
    AppComponent.prototype.changeSlide = function (event) {
        this.service.changePos(event);
    };
    AppComponent.prototype.submitForm = function (value) {
        this.service.send(value.email, "Hello", value.name)
            .subscribe(function (res) {
            console.log(res);
        });
        setTimeout(function () {
            alert("Sent Email.");
        }, 1000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__["b" /* CarouselConfig */], useValue: { interval: false, noWrap: false, noPause: false } }]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__providers_app_service__["a" /* AppService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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
            { title: "Template 1", content: 'Dear County Board of Education members;\r\n\r\nAs a resident of [CITY], I am writing to ask that you vote NO on the petition to create a new school Northgate Unified School District.\r\n\r\nShould this petition move forward please note that my family and I stand in support with the Concord City Council and the recommendation of MDUSD and the County Board of Education that, if after careful analysis and review of the criteria for forming a new district are ALL found to be substantially met, that an election should be held in the ENTIRE MDUSD boundaries, and not just the proposed Northgate district.\r\n\r\nLaura Hoffmeister, The Mayor of the City of Concord states that “a truncated scope election would disenfranchise the estimated 85 percent of the remaining voters in the District who would be affected by the proposed reorganization.”\r\n\r\nThe formation of a new District will negatively impact the thousands of students, teachers and parents that would be affected. I am most concerned about the division of assets, the disruption of valuable and highly effective programs, and the reassignment of students and staff – no to mention the net loss of educators in the short term as programs are eliminated, schools closed and students relocated.\r\n\r\nIn closing, I would like to ask that you please consider that the Bonds used to create Northgate High School were paid by community members in the entire MDUSD district – not just the new micro-district being proposed. As such, EVERYONE in the Mount Diablo Unified School District should have a say.\r\n\r\nI want to thank you for considering the points brought forth in this letter as you weigh your decision about this petition. I am one of thousands of parents who value the quality of education, diversity and availability of excellent school choices in my community. I steadfastly urge to vote no on the petition to divide and segregate our school district.\r\n\r\nSincerely,\r\n\r\n' },
            { title: "Template 2", content: 'Esteemed County Board of Education Member,\r\n\r\nAs a parent who values the educational diversity afforded to my family in our school district, I urge you to please vote against the NUSD petition being considered for election.\r\n\r\nLike many others, my family and I are deeply concerned about the real possibility of student segregation, the disruption and elimination of valued and important programs, and the troubling fact that NUSD does not want anyone outside of their proposed district to vote on this matter. It is my opinion that everyone in the Mount Diablo Unified School District who is impacted by this proposal should be allowed to vote.\r\n\r\nI have reviewed the Nine Criteria that should be kept in clear focus as you consider this issue – the three listed below are particularly concerning to me and my family:\r\n\r\n•	Criteria #4: “The reorganization will preserve each affected district' + "'" + 's ability to educate students in an integrated environment and will not promote racial or ethnic discrimination or segregation.”\r\no	Currently, students transfer into Northgate from Concord, Pittsburg and other communities, adding racial diversity and multiculturalism to the school.\r\no	Ygnacio Valley High has successfully launched the only International Baccalaureate program in the MDUSD district. This is attracting a diverse group of students throughout the district to experience a challenging and focused course of study with a global perspective. Under the NUSD proposal, students living in proximity would be in a different school district and thus unable to participate, nor would there be any such program available to them.\r\n\r\n\r\n•	Criteria #6: “The proposed reorganization will continue to promote sound education performance and will not significantly disrupt the educational programs in the districts affected by the proposed reorganization.”\r\no	Programs in NUSD schools that would have to move to continue serving all MDUSD students include: Bancroft Dual Immersion, Autism Magnet Program at Valle Verde, Foothill, and Northgate, & Autism Early Intervention Preschool at Valle Verde.\r\no	Hundreds of students currently attend these programs, from all over the district, providing educational opportunities to families that otherwise would not have this choice. The impact would be extremely disruptive.\r\n\r\n\r\n•	Criteria # 8: “The proposed reorganization is primarily designed for purposes other than to increase property values.”\r\no	The Northgate area has the highest property values in the entire MDUSD.\r\no	In the NUSD proposal, there is a dubious assertion that property values would “be on par as the rest of Walnut Creek (currently it is described as only a $40/sq ft. difference above.) However, considering that homes in the Northgate area are typically much larger – averaging about 2000-3000sq ft – it is safe to say that this is not an apples-to-apples comparison, translating to approximately a $100,000 change in home value within the NUSD area.\r\n\r\nI am also concerned about traffic & pedestrian impacts – a large percentage of the community would be forced to drive further in already congested corridors. Please also bear in mind that schools like Valle Verde have many children who walk and bike to school – substantial traffic increases create additional hazards and reduce alternative transportation opportunities. We should make it easier for children in our communities to get to school – not harder.\r\n\r\nThank you for considering my comments in support of MDUSD. I trust you will weigh all the facts carefully and base your decision on sound logic, principles and what is truly best for ALL the children in our communities – not just a select few.\r\n\r\nPlease vote NO on the proposed NUSD petition.\r\n\r\nSincerely,\r\n\r\n' },
            { title: "Template 3", content: 'Dear County Board Member,\r\n\r\nAs a parent who values diversity and educational choice, an as a community member who values inclusion and proven academic programs, I am writing to voice my opposition to the NUSD proposal which fails to meet this and as well as many other objectives my family and I desire for our children.\r\n\r\nNot only does the Northgate CAPS group petition to create the Northgate Unified School District not adequately address nine specific criteria as set forth by Ed. Code 35753 that are required to reorganize an established district into two or more districts, this letter is focused on one specific point that affects the future and very existence of Eagle Peak Montessori School.\r\n\r\nIn the current conversation, there are two districts being discussed; MDUSD, and NUSD. There is however another “district” which has not been mentioned by the petition. As you know, independent charter schools are often considered independent LEAs (local educational agencies.) Eagle Peak Montessori School is an independent charter school which benefitted from Prop 39 facilities through MDUSD – however, the school property exists inside the boundaries of the proposed district. It stands to reason that if the new district is established, Eagle Peak Montessori cannot maintain the current charter with MDUSD and continue to occupy the same site where our school has stood for 13 years. Any option available to Eagle Peak Montessori would present a significant disruption to our academic program, and extreme challenges due to relocation and the re-establishment of the quality educational programs this school offers ALL the communities within the MDUSD area.\r\n\r\nEagle Peak Montessori is proud that our charter has been renewed three times through MDUSD, and that we have been a viable and highly desirable educational option for 16 years.  Should this divisive proposal come to pass, the options for our school would be to apply for a new charter with either the new district or the county if we wished to maintain our current site. However, there is absolutely no guarantee that either the new district or the county would grant Eagle Peak Montessori a charter, or even the ability to continue to occupy our current location.\r\n\r\nIn addition, Eagle Peak Montessori does not desire to be a part of NUSD because there will be a significant decrease in diversity of our student population – this is a cornerstone of our school and a value we uphold.\r\n\r\nFurthermore, if our school chose to remain chartered by MDUSD, which is the preferred alternative, we would need to find a new location. The situation becomes even more complicated as MDUSD does not currently have any available property that Eagle Peak Montessori could occupy through the same Prop 39 agreement that the school has with MDUSD. This would require purchasing or leasing an entire site on our own, which again would significantly impact the ability for our school to continue with the programs we offer in an uninterrupted manner.\r\n\r\n\r\nThe criterion that bears most heavily on the future of Eagle Peak is this:\r\n(6)	The proposed reorganization will continue to promote sound fiscal management and not cause a substantial negative effect on the fiscal status of the proposed district or any existing district affected by the proposed reorganization.\r\n\r\nWhen one considers an independent charter school as its own LEA/District, this condition absolutely cannot be met. As stated above, Eagle Peak Montessori School would be impacted hardest of all the entities involved in this petition. The current group setting forth this petition has absolutely no legal authority to promise our charter school continued occupation of our current site on Hutchinson Road.\r\n\r\nTherefore, regardless of which district the school was chartered through, Eagle Peak would need to find a new facility. As you are know, facilities are a huge cost to any district. A small charter school of less than 300 students would be severely impacted financially by this move. Currently, Eagle Peak Montessori has a facility agreement with MDUSD that has stood for 13 years, and both MDUSD and Eagle Peak Montessori have the intention of continuing this agreement. However, the approval of the Northgate CAPS petition would remove that possibility, resulting in a negative effect on the financial status of our independent charter school.\r\n\r\nPlease vote NO on the NUSD proposal. It’s the wrong decision for our community, and it’s the wrong decision for our children.\r\n\r\nSincerely,\r\n\r\n' },
            { title: "Template 4", content: 'Dear County Board of Education members\r\n\r\nAs a resident of Concord, I am writing to ask that you vote NO on the petition to create a new school Northgate Unified School District.\r\n\r\nShould this petition move forward please note that my family and I stand in support with the Concord City Council and the recommendation of MDUSD and the County Board of Education that, if after careful analysis and review the criteria for forming a new district are ALL found to be substantially met that an election should be held in the ENTIRE MDUSD boundaries, and not just the proposed Northgate district.\r\n\r\nThe formation of a new District will result in severe impacts to the thousands of students, teachers and parents that would be negatively affected. We are most concerned about the division of assets, the disruption of valuable and highly effective programs, and the reassignment of students and staff – no to mention the net loss of educators in the short term as programs are eliminated, schools closed and students relocated.\r\n\r\nAnother point to consider is the substantial disruption caused by altered traffic patterns during peak morning commute hours – this will place unnecessary hardship on children and parents alike – not to mention residents and others who will shoulder the brunt of this unpleasant, undesirable and poorly thought out proposal.\r\n\r\nThe Mayor of the City of Concord states that “a truncated scope election would disenfranchise the estimated 85 percent of the remaining voters in the District who would be affected by the proposed reorganization.”\r\n\r\nIn closing, I’d also like you to consider that the Bonds used to create Northgate High School were paid by community members in the entire MDUSD district – not just the new micro-district being proposed. As such, EVERYONE in the Mount Diablo Unified School District should have a say.\r\n\r\nThank you for considering the points brought forth in this letter as you weigh your decision about this petition. I am one of thousands of parents who value the quality of education, diversity and availability of excellent school choices in my community. I urge to vote no on the petition to divide and segregate our school district.\r\n\r\nSincerely,\r\n\r\n' },
        ];
    }
    AppService.prototype.changePos = function (pos) {
        this.currentPos = pos;
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