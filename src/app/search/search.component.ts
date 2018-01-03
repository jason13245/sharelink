import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor() { }
  @Input() links: { url: string, title: string, tag: string }[]
  search="";
  ngOnInit() {
  }
}
