import { Component, OnInit, Input} from '@angular/core';
import { LinksService } from '../links.service';
import { Link } from '../link/link.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private linksService:LinksService) {}
  links:Link[];
  
  search="";
  ngOnInit() {
    this.linksService.getlists().subscribe((links: any[]) => this.links = links);
  }
}
