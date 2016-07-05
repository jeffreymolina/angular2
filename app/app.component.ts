import { Component, OnInit, ViewChild } from '@angular/core';
import {TestItem} from './testItem';
import {TestItemService} from './testItemService';
import {subComponent} from './sub.component';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [TestItemService],
    directives: [subComponent]
})
export class AppComponent implements OnInit {
    selectedItem: TestItem;
    message: string;
    testItems: Observable<TestItem[]>; 
    @ViewChild(subComponent) sub: subComponent;
    public constructor(private testItemService: TestItemService) {
    }    
    ngOnInit() {
        this.testItems = this.testItemService.getTestItems();
    }
    select(testItem: TestItem) {
        this.message = "";
        this.selectedItem = testItem;
        if (this.sub) {
            this.sub.clear();
        }
    }
    subComponentChanged(testItem: TestItem) {
        if (testItem) {
            this.message = `Item description clicked ${testItem.testItemName} in the subcomponent!`;
        }
    }
}
