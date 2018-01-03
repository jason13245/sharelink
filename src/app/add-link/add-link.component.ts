import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { list } from '../link/link.model';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  linkForm = new FormGroup({
    url: new FormControl(null,Validators.required),
    title: new FormControl(null,Validators.required),
    tag: new FormControl(null,Validators.required)
  })
  @Output() linkSend = new EventEmitter<{
    url:string,
    title:string,
    tag:string}>();

  constructor() {}
  ngOnInit(){}
  onFormSubmit(){
    this.linkSend.emit(
      new list(this.linkForm.value.url,this.linkForm.value.title,this.linkForm.value.tag)
    )
  };
}
