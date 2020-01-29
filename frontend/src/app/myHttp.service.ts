import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpService {


    constructor(private http: HttpClient) { }

    getServerData(): Observable<any[]> {
        return this.http.get<any>("http://localhost:3000/jobs");
    }


}
