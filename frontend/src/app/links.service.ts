import { Injectable } from '@angular/core';
import { Link } from './link/link.model';
import { HttpClient } from '@angular/common/http'
import { Socket } from 'ng-socket-io';
import 'rxjs/Rx';

@Injectable()
export class LinksService {
  constructor(private http: HttpClient) {
    
    // setInterval(() => {
      
    // }, 10000)
  }

  addlink(list: Link) {
    return this.http.post('http://localhost:3000/api/link', list);
  }
  getlists() {
    let linkObservable = this.http.get('/api/links');
    return linkObservable.map((data: string[]) => {
      return data.map((ele:string) => JSON.parse(ele));
    });
  }

}
