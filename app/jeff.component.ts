import { Component, OnInit } from '@angular/core';
import {TestItem} from './testItem';
import {TestItemService} from './testItemService';

@Component({
  selector: 'jeff-component',
  templateUrl: './jeff.component.html',
  providers : [TestItemService]
})
export class JeffComponent implements OnInit {
    public constructor(private testItemService : TestItemService) {        
    }

    public testItems: TestItem[] = [];
    ngOnInit() {
        this.testItems = this.testItemService.getTestItems();
    }
}
