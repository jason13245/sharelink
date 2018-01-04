import { Injectable } from '@angular/core';
import { list } from './link/link.model';

@Injectable()
export class LinksService {
  lists: list[]
  constructor() {}
  addlink(link:list){
    return this.lists.push(link);
  }
  editlink(){}
  deletelink(){}
  updatelists(){
    // transform lists[] to JSON
    // put this JSON to redis
  }
  getlists(){
    // get the JSON from redis
    // transform back to lists[]
    return this.lists;
  }
}
