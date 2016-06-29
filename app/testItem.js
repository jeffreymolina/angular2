System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestItem;
    return {
        setters:[],
        execute: function() {
            TestItem = (function () {
                function TestItem(id, name) {
                    this.testItemName = name;
                    this.testItemId = id;
                }
                return TestItem;
            }());
            exports_1("TestItem", TestItem);
        }
    }
});
