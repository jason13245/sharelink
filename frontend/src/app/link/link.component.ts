import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  search:string;
  constructor() { }
  @Input() link: { url: string, title: string, tag: string }
  ngOnInit() {
  }

}
