import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  userId: string = '';
  userDetail : any;
  constructor(
    private userService: UserService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

 this.activatedRoute.params.subscribe(data =>{
 this.userId = data['id'];
    });


 this.userService.viewUser(this.userId).subscribe(data => 
  {  this.userDetail = data}
 );

 

}
}
