import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})

export class FriendFormComponent implements OnInit {

  public friend = new Friend("", "", "", "", "");
  public addFriendsService: AddFriendService;
  public data = ["JavaScript", "PHP", "CSS", "HTML"]
  public allFriends:any;

  constructor(add: AddFriendService) {
    this.addFriendsService = add
  }

  ngOnInit(): any {
    this.asyncFriends(this.addFriendsService.url)
  }

  submitFunc() {
    this.addFriendsService.addFriend(this.friend)
      .subscribe(data => console.log('It worked', data),
        error => console.log('It did not worked', error))
    this.asyncFriends(this.addFriendsService.url);

  }

  public async asyncFriends(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));

  }
}
