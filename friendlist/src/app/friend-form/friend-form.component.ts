import { Component, OnInit } from '@angular/core';
import {Friend} from "../friend";


@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})

export class FriendFormComponent implements OnInit {

  constructor() { }

  public friend = new Friend("","","", "");

  ngOnInit(): void {
  }
  data = ["JavaScript","PHP","CSS","HTML"]
  submitFunc(){
    console.log(this.friend);
  }
}
