import { Component, OnInit} from '@angular/core';
import { list } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(){
  }
  onFormSubmitted(){}
}
