import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoService } from '../service/resto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  restoForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required])
  })

  constructor(private restoService:RestoService,private router:Router) { }

  ngOnInit(): void {
  }

  newResto(){
    if(this.restoForm.valid){
      this.restoService.addResto(this.restoForm.value).subscribe(res=>{
        this.restoForm.reset();
        this.router.navigate(["/restos"])
      })
    }
  }
}
