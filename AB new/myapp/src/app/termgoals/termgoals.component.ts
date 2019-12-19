import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdityaBirlaServices } from 'src/Shared/Services/calculatorgoal.services';

@Component({
  selector: 'app-termgoals',
  templateUrl: './termgoals.component.html',
  styleUrls: [/*'./termgoals.component.css'*/]
})
export class TermgoalsComponent implements OnInit {
  public img:any;
  public img1:any;
  public img2:any;
  public xyz:any;
  public naav:any;
  constructor(private router: Router,private abs : AdityaBirlaServices) { }

  ngOnInit() {
    this.abs.getdata(localStorage.getItem('id')).subscribe(res => {
        
      console.log("result -> ",res);
      this.xyz = res;
      console.log(this.xyz);
      this.naav =this.xyz[1].name;
      console.log(this.naav);
      this.img=this.xyz[0].goals;
      console.log(this.img);
      this.img1=this.xyz[1].goals;
      console.log(this.img1);
      this.img2=this.xyz[2].goals;
      console.log(this.img2);
    });

  }


  Replan(){
    this.router.navigateByUrl("");
  }

}
