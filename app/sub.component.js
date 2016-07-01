System.register(['@angular/core', '@angular/common', './testItem', './testItemService', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', './wikipediaService', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, common_1, testItem_1, testItemService_1, wikipediaService_1, http_1;
    var subComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (testItem_1_1) {
                testItem_1 = testItem_1_1;
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
            subComponent = (function () {
                function subComponent(testItemService, wikipediaService) {
                    this.testItemService = testItemService;
                    this.wikipediaService = wikipediaService;
                    this.testItem = null;
                    this.changed = new core_1.EventEmitter();
                    this.term = new common_1.Control();
                }
                subComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.items = this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this.wikipediaService.search(term); });
                };
                subComponent.prototype.clear = function () {
                    var _this = this;
                    this.items = this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this.wikipediaService.search(term); });
                };
                subComponent.prototype.invokeChangeEvent = function (testItem) {
                    this.changed.emit(testItem);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', testItem_1.TestItem)
                ], subComponent.prototype, "testItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], subComponent.prototype, "changed", void 0);
                subComponent = __decorate([
                    core_1.Component({
                        selector: 'sub-component',
                        template: "\n    <h1>This is the Awesome sub Component</h1>\n    <strong>Detail</strong>\n    <div (click)=\"invokeChangeEvent(testItem)\">Name: {{testItem.testItemName}}, Id: {{testItem.testItemId}}</div>\n    Name: <input type=\"text\" [(ngModel)]=\"testItem.testItemName\" />\n    <div>\n        <h2>Wikipedia Search</h2>\n        <input type=\"text\" [ngFormControl]=\"term\" />\n        <ul>\n            <li *ngFor=\"let item of items | async\">{{item}}</li>\n        </ul>\n    </div>\n  ",
                        providers: [wikipediaService_1.WikipediaService, http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [testItemService_1.TestItemService, wikipediaService_1.WikipediaService])
                ], subComponent);
                return subComponent;
            }());
            exports_1("subComponent", subComponent);
        }
    }
});
