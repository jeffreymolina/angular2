System.register(['@angular/core', './testItemService', './sub.component'], function(exports_1, context_1) {
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
    var core_1, testItemService_1, sub_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testItemService_1_1) {
                testItemService_1 = testItemService_1_1;
            },
            function (sub_component_1_1) {
                sub_component_1 = sub_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(testItemService) {
                    this.testItemService = testItemService;
                }
                ngOnInit() {
                    this.testItems = this.testItemService.getTestItems();
                }
                select(testItem) {
                    this.message = "";
                    this.selectedItem = testItem;
                    if (this.sub) {
                        this.sub.clear();
                    }
                }
                subComponentChanged(testItem) {
                    if (testItem) {
                        this.message = `Item description clicked ${testItem.testItemName} in the subcomponent!`;
                    }
                }
            };
            __decorate([
                core_1.ViewChild(sub_component_1.subComponent), 
                __metadata('design:type', sub_component_1.subComponent)
            ], AppComponent.prototype, "sub", void 0);
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
      <h1>My First Angular 2 App.  Hello!</h1>
      <li *ngFor='let testItem of testItems | async'
          (click)="select(testItem)">
          <div>{{testItem.testItemName}}</div>
      </li>
      <br />
      <strong>{{message}}</strong>
      <br />
      <div style="border:solid">
          <sub-component *ngIf="selectedItem" [testItem]="selectedItem" (changed)="subComponentChanged($event)"></sub-component>
      </div>
    `,
                    providers: [testItemService_1.TestItemService],
                    directives: [sub_component_1.subComponent]
                }), 
                __metadata('design:paramtypes', [testItemService_1.TestItemService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
