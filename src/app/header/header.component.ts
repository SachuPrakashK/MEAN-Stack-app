import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RestoService } from '../resto/service/resto.service';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
