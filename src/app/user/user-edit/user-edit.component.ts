import { Component, OnInit } from '@angular/core';
import{ UserService} from '../user.service';
import{User} from '../user.class'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    user:User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }

    save(): void{
      console.log(this.user);
      this.usersvc.change(this.user).subscribe(
        res =>{
          console.debug("User Change:",res)
          this.routed.navigateByUrl("/user/list");
        },
        err =>{
          console.error("Error Changing User",err);
        }
      );
    }

  ngOnInit(): void {
    //.id is the key value on the route 
    //snapshot takes a look at the route in that moment(handles quick switches)
    //params is a key value pair object(anything passed after this is a key(ex:id,:username))
    // + sign turns a tring into a number(Can use + or any)
    let id = +this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        console.debug("User:",res);
        this.user =res;
      },
      err =>{
        console.error(err);}
    );
  }

}
