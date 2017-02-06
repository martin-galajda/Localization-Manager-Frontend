import { Injectable } from '@angular/core';
import { Converter } from '../model/entity/Converter';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterService {
    constructor(private http: Http) { }

    getConverters(): Observable<Converter[]> {
        return this.http.get(AppConfig.CONVERTER_API_ENDPOINT)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getConverter(id: string): Observable<Converter> {
        return this.getConverters().map(converters => converters.find(converter => converter.id === id));
    }

    addConverter(converter: Converter): Observable<Converter> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(AppConfig.CONVERTER_API_ENDPOINT, converter, options)
            .map(this.extractData)
            .catch(this.handleError);
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
