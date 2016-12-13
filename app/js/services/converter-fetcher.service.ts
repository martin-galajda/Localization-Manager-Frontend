/**
 * Created by martin on 12/12/16.
 */
import { Injectable } from '@angular/core';
import { Converter } from '../model/entity/Converter';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterFetcherService {
    constructor(private http: Http) { }

    getConverters(): Observable<Converter[]> {
        return this.http.get(AppConfig.CONVERTER_API_ENDPOINT)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getConverter(id: string): Observable<Converter> {
        return this.getConverters().map(converters => converters.find(converter => converter.id === id));
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(response: any) {
        console.log('error', response);

        return Observable.throw('error');
    }
}
