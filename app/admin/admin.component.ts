import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 public eventname:any;
 public date:any;
 public data:any;
constructor(private http:HttpClient){}
  

  ngOnInit(): void {
  
  }
  
  postServer(){
    var data={"eventname":this.eventname,"date":this.date};
    this.http.post(" http://localhost:9898/",data).subscribe((a)=>{
      this.data=a;
    }) 
    
  }

  
  
  
    
     
     
     
    
  }

 




