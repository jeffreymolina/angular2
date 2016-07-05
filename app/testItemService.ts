import { Injectable }    from '@angular/core';
import { TestItem } from './testItem';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestItemService {
    constructor(private _http: Http) { }
    public getTestItems() : Observable<TestItem[]> {        
        return this._http.get("api/testItems.json")
            .map(this.extractData)
            .catch(this.handleError);
    }    

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}
