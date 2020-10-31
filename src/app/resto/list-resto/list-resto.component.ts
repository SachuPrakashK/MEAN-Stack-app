import { Component, OnInit } from '@angular/core';
import { RestoService } from '../service/resto.service';
import {Observable, Subscription} from 'rxjs'
import {Resto} from '../model/resto'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/service/user.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  editRestoForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required])
  })
  restos$:Observable<Resto[]>
  id:string
  restaurant$:Observable<Resto>
  restoSub$: Subscription
  showForm:boolean

  constructor(private restoService:RestoService,
    private route:ActivatedRoute,
     private router:Router,
     public userService:UserService) { }

  ngOnInit(): void {
    this.restos$=this.restoService.getRestos();
  }

  /*storeIdandFindRestoandShowEdit(id){
    this.id=id;
    this.showForm=!this.showForm
    this.restaurant$=this.restoService.getResto(this.id);
    //console.log(this.id);
  }*/
  editResto(){
    if(this.editRestoForm.valid){
      this.restoService.editResto(this.editRestoForm.value,this.id).subscribe(res=>{
        this.editRestoForm.reset();
        //this.router.navigate(["/restos"]);
        window.location.reload();
      })
    }
  }

  deleteResto(id){
    //this.id=this.route.snapshot.paramMap.get("id");
    this.restoService.deleteResto(id).subscribe(res=>{
      console.log(res);
      //this.router.navigate(['/listings'])
      window.location.reload();
    })
  }

  print(){
    console.log("test");
  }

}