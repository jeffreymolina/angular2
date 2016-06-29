import { Injectable }    from '@angular/core';
import {TestItem} from './testItem';

@Injectable()
export class TestItemService {
    public getTestItems(): TestItem[] {
        var testItems: TestItem[] = [];
        testItems.push(new TestItem(1, "Test Item A"));
        testItems.push(new TestItem(2, "Test Item B"));
        testItems.push(new TestItem(3, "Test Item C"));
        testItems.push(new TestItem(4, "Test Item D"));
        return testItems;
    }
}
