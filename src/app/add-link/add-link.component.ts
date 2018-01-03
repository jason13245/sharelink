import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

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
    this.linkSend.emit({
      url:this.linkForm.value.url,
      title:this.linkForm.value.title,
      tag:this.linkForm.value.tag});
  }
}
