import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
   
   }

   getCarsSmall() {
    return this.http.get<any>('/assets/data/data-small.json')
                .toPromise()
                .then(res => res.data)
                .then(data => { return data; });
  }
}
