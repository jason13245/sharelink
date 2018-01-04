import { Component, OnInit, Input} from '@angular/core';
import { LinksService } from '../links.service';
import { list } from '../link/link.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private linksService:LinksService) {}
  links:list[];
  
  search="";
  ngOnInit() {
    this.links=this.linksService.getlists();
  }
}
