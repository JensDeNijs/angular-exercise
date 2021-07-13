import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})

export class FriendFormComponent implements OnInit {

  public friend = new Friend("", "", "", "");
  private addFriendsService: AddFriendService;

  constructor(add: AddFriendService) {
    this.addFriendsService = add
  }

  ngOnInit(): void {
  }

  data = ["JavaScript", "PHP", "CSS", "HTML"]

  submitFunc() {
    console.log(this.friend);
    this.addFriendsService.addFriend(this.friend)
  }
}
