import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    
    this.http.post("http://localhost:3000/app/login",{password:this.password,username:this.username}).subscribe((data)=>{

    if(data["message"]=="Login Successful"){
      this.router.navigate(['landing']);
    }

    })

  }

}
