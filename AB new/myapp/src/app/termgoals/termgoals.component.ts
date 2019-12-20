import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AdityaBirlaServices } from 'src/Shared/Services/calculatorgoal.services';

@Component({
  selector: 'app-termgoals',
  templateUrl: './termgoals.component.html',
  styleUrls: [/*'./termgoals.component.css'*/]
})
export class TermgoalsComponent implements OnInit {
  public userName:any;
  public selectGoal:any;
  public img:any;
 
  constructor(private router: Router,private abs : AdityaBirlaServices) { }

  ngOnInit() {
    this.abs.getdata(localStorage.getItem('id')).subscribe(res => {

      console.log("result ->",res);
      this.selectGoal = res;
      console.log(this.selectGoal);
      this.userName =this.selectGoal[0].name;
      console.log(this.userName);
      this.img = this.selectGoal;
      console.log(this.img[0].goals);
    });

  }


  Replan(){
    this.router.navigateByUrl("");
  }

}
