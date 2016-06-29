System.register(['@angular/core', './testItem'], function(exports_1, context_1) {
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
    var core_1, testItem_1;
    var TestItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testItem_1_1) {
                testItem_1 = testItem_1_1;
            }],
        execute: function() {
            TestItemService = (function () {
                function TestItemService() {
                }
                TestItemService.prototype.getTestItems = function () {
                    var testItems = [];
                    testItems.push(new testItem_1.TestItem(1, "Test Item A"));
                    testItems.push(new testItem_1.TestItem(2, "Test Item B"));
                    testItems.push(new testItem_1.TestItem(3, "Test Item C"));
                    testItems.push(new testItem_1.TestItem(4, "Test Item D"));
                    return testItems;
                };
                TestItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TestItemService);
                return TestItemService;
            }());
            exports_1("TestItemService", TestItemService);
        }
    }
});
