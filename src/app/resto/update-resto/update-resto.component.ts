import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoService } from '../service/resto.service';


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editRestoForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required])
  })

  constructor(private restoService:RestoService,
     private router:Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params._id)
    this.restoService.getResto(this.route.snapshot.params._id).subscribe((data) => {
      console.warn(data)
      this.editRestoForm= new FormGroup({
        name: new FormControl(data['name']),
        email: new FormControl(data['email']),
        address: new FormControl(data['address'])
      })
      //console.warn(data['name']);

    })
  }
  editResto(){
    if(this.editRestoForm.valid){
      this.restoService.editResto(this.editRestoForm.value,this.route.snapshot.params._id).subscribe(res=>{
        this.editRestoForm.reset();
        this.router.navigate(["/restos"]);
        //window.location.reload();
      })
    }
  }

}