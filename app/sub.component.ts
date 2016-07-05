import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Control} from '@angular/common';
import {TestItem} from './testItem';
import {TestItemService} from './testItemService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {WikipediaService} from './wikipediaService';
import {JSONP_PROVIDERS} from '@angular/http';


@Component({
    selector: 'sub-component',
    templateUrl: './sub.component.html',
    providers: [WikipediaService, JSONP_PROVIDERS]
})
export class subComponent implements OnInit {
    @Input() testItem: TestItem = null;
    @Output() changed = new EventEmitter<TestItem>();
    private term = new Control();
    private items: Observable<any>;

    public constructor(private testItemService: TestItemService, private wikipediaService: WikipediaService) {
    }
    ngOnInit() {
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.wikipediaService.search(term));
    }

    clear() {
        console.log('clear called');
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.wikipediaService.search(term));
    }

    invokeChangeEvent(testItem: TestItem) {
        this.changed.emit(testItem);
    }
}
