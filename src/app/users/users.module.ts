import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    ListUsersComponent,
    ViewUsersComponent
  ]
})
export class UsersModule { }
