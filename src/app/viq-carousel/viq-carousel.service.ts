import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ViqCarouselService {

  constructor(public http: Http) {}

    getCarouselData(): Observable<any> {
        return this.http.get('https://private-ff1a5-visualiqcommon.apiary-mock.com/taxonomy/dimensions').
        map((res: Response) => res.json());
    }
}