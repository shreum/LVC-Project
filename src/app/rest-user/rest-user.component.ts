import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-user',
  templateUrl: './rest-user.component.html',
  styleUrls: ['./rest-user.component.css']
})
export class RestUserComponent {
  protected title = 'app';
  // protected users$: Observable<IUser[]>;
 users$!: IUser[];
   constructor(public userservice: UserService) {}
 
   ngOnInit() {
     this.userservice.getUsers().subscribe(res => {
       this.users$ = res;
     });
   }
}
