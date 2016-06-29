System.register(['@angular/core', '@angular/common', './testItemService', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', './wikipediaService', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, testItemService_1, wikipediaService_1, http_1;
    var JeffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (testItemService_1_1) {
                testItemService_1 = testItemService_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (wikipediaService_1_1) {
                wikipediaService_1 = wikipediaService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JeffComponent = (function () {
                function JeffComponent(testItemService, wikipediaService) {
                    this.testItemService = testItemService;
                    this.wikipediaService = wikipediaService;
                    this.term = new common_1.Control();
                    this.testItems = [];
                }
                JeffComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.testItems = this.testItemService.getTestItems();
                    this.items = this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this.wikipediaService.search(term); });
                };
                JeffComponent = __decorate([
                    core_1.Component({
                        selector: 'jeff-component',
                        template: "\n    <h1>This is the Awesome Jeff Component</h1>\n    <li *ngFor='let testItem of testItems'>\n        <div>{{testItem.testItemName}}</div>\n        <div>jeff was here</div>\n    </li>\n    <div>\n        <h2>Wikipedia Search</h2>\n        <input type=\"text\" [ngFormControl]=\"term\" />\n        <ul>\n            <li *ngFor=\"let item of items | async\">{{item}}</li>\n        </ul>\n    </div>\n  ",
                        providers: [wikipediaService_1.WikipediaService, http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [testItemService_1.TestItemService, wikipediaService_1.WikipediaService])
                ], JeffComponent);
                return JeffComponent;
            }());
            exports_1("JeffComponent", JeffComponent);
        }
    }
});
