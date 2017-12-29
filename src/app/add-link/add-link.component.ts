import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  linkForm = new FormGroup({
    url: new FormControl(null,Validators.required),
    tag: new FormControl(null,Validators.required)
  })
  constructor() {}
  ngOnInit(){}
  onSubmit(){}
}
