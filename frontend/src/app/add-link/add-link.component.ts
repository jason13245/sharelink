import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Link } from '../link/link.model';
import { LinksService } from '../links.service';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css'],
  providers: [LinksService]
})
export class AddLinkComponent implements OnInit {
  linkForm = new FormGroup({
    url: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    tag: new FormControl(null, Validators.required)
  })
  @Output() linkSend = new EventEmitter<{
    url: string,
    title: string,
    tag: string
  }>();

  constructor(private linkService: LinksService) { }
  ngOnInit() {
    
   }
  onFormSubmit() {
    this.linkService.addlink(new Link(this.linkForm.value.url, this.linkForm.value.title, this.linkForm.value.tag)).subscribe((result)=>{
      console.log(result);
    });
  };
}
