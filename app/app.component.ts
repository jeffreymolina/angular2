import { Component, OnInit } from '@angular/core';
import {TestItem} from './testItem';
import {TestItemService} from './testItemService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers : [TestItemService]
})
export class AppComponent implements OnInit {

    private testItemService: TestItemService;

    public constructor(testItemService : TestItemService) {
        this.testItemService = testItemService;
    }

    public testItems: TestItem[] = [];
    ngOnInit() {
        this.testItems = this.testItemService.getTestItems();
    }
}
