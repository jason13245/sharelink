import { Component, OnInit} from '@angular/core';
import { list } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  links=[];
  myStorage = window.localStorage;
  linksCounter :number;
  ngOnInit(){
    if(this.myStorage.getItem('storedList')){
      this.links= JSON.parse(this.myStorage.getItem('storedList'));
      this.linksCounter=JSON.parse(this.myStorage.getItem('listCounter'));
    }
  }
  onFormSubmitted(formData:{
    url:string,
    title:string,
    tag:string
  }){
    this.links.push(new list(formData.url,formData.title,formData.tag));
    // this.links.push({
    //   url: formData.url,
    //   title:formData.title,
    //   tag:formData.tag
    // });
    localStorage.setItem('storedList',JSON.stringify(this.links));
    this.linksCounter =this.links.length;
    localStorage.setItem('listCounter',JSON.stringify(this.linksCounter));
  }
}
