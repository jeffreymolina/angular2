import { Component, OnInit } from '@angular/core';
import {TestItem} from './testItem';
import {TestItemService} from './testItemService';
import {JeffComponent} from './jeff.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [TestItemService],
  directives: [JeffComponent]
})
export class AppComponent implements OnInit {
    public constructor(private testItemService : TestItemService) {        
    }

    public testItems: TestItem[] = [];
    ngOnInit() {
        this.testItems = this.testItemService.getTestItems();
    }
}
