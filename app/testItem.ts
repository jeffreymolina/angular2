export class TestItem {
    constructor(id: number, name: string) {
        this.testItemName = name;
        this.testItemId = id;
    }
    public testItemName: string;
    public testItemId: number;
}