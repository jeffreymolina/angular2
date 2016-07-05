System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestItem;
    return {
        setters:[],
        execute: function() {
            class TestItem {
                constructor(id, name) {
                    this.testItemName = name;
                    this.testItemId = id;
                }
            }
            exports_1("TestItem", TestItem);
        }
    }
});
