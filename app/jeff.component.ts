import { Component, OnInit } from '@angular/core';
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
  selector: 'jeff-component',
  templateUrl: './jeff.component.html',
  providers: [WikipediaService, JSONP_PROVIDERS]
})
export class JeffComponent implements OnInit {

    private items: Observable<Array<string>>;
    private term = new Control();

    public constructor(private testItemService: TestItemService, private wikipediaService: WikipediaService) {       
    }

    public testItems: TestItem[] = [];
    ngOnInit() {
        this.testItems = this.testItemService.getTestItems();
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.wikipediaService.search(term));
    }
}