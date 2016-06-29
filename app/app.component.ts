import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public testItems: TestItem[] = [];
    ngOnInit() {
        this.testItems.push(new TestItem(1, "Test Item A"));
        this.testItems.push(new TestItem(2, "Test Item B"));
        this.testItems.push(new TestItem(3, "Test Item C"));
        this.testItems.push(new TestItem(4, "Test Item D"));
    }
}

export class TestItem {
    constructor(id: number, name: string) {
        this.testItemName = name;
        this.testItemId = id;
   }
    public testItemName: string;
    public testItemId: number;
}