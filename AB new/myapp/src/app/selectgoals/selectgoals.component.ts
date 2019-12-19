import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Igoal } from 'src/Shared/Interfaces(Structure)/goal';
import { AdityaBirlaServices } from 'src/Shared/Services/calculatorgoal.services';





@Component({
  selector: 'app-selectgoals',
  templateUrl: './selectgoals.component.html',
  styleUrls: [/*'./selectgoals.component.css'*/]
})
export class SelectgoalsComponent implements OnInit {
 public goals:Igoal[]=[];
 public user_id:any;
 public isRetirementPresent:boolean=false;
 public isHolidayPresent:boolean=false;
 public isHoneymoonPresent:boolean=false;
 public isMarriagePresent:boolean=false;
 public isCarPresent:boolean=false;
 public isBikePresent:boolean=false;
 public isLuxuryCarPresent:boolean=false;
 public isStartingBusinessPresent:boolean=false;
 public isSelfDevelopmentPresent:boolean=false;
 public isChildsEducationPresent:boolean=false;
 public isChildsMarriagePresent:boolean=false;
 public isWorldTourPresent:boolean=false;
 public isWealthCreationPresent:boolean=false;
 public isFollowPassionPresent:boolean=false;
 public isPhilanthropyPresent:boolean=false;
 public isOtherGoalPresent:boolean=false;

 //Images
 public retirementImg="../../assets/img/Retirement.png";
 public holidayImg="../../assets/img/Holiday.png";
 public honeyMoonImg="../../assets/img/Honeymoon.png";
 public marriageImg="../../assets/img/Marriage.png";
 public carImg="../../assets/img/Car.png";
 public bikeImg="../../assets/img/Bike.png";
 public luxuryCarImg="../../assets/img/Dream Home.png";
 public startingBusinessImg="../../assets/img/Starting Business.png";
 public selfDevelopmentImg="../../assets/img/Self Development.png";
 public childsEducationImg="../../assets/img/Childs Education.png";
 public childsMarriageImg="../../assets/img/Childs Marriage.png";
 public worldTourImg="../../assets/img/World Tour.png";
 public wealthCreationImg="../../assets/img/Wealth Creation.png";
 public followPassionImg="../../assets/img/Follow Passion.png";
 public philanthropyImg="../../assets/img/Philanthropy.png";
 public othergoalImg="../../assets/img/AddOtherGoal.png";
 public uid:any;

  constructor(  private router : Router, private abs: AdityaBirlaServices) { }

  ngOnInit() {}

  data(){
    let userGoals=
    { 
      user_id:localStorage.getItem('id'),
      selectedgoals : this.goals
    }
    console.log(userGoals);
  this.abs.postGoalData("usergoals",userGoals).subscribe(data=>{
    console.log(data);
    this.uid=data['user_id'];
    console.log("uid",this.uid);
    this.router.navigate(['/goals']);
  },err=>{
    console.log(err)
  }); 

}

/////new goals added ////////// 
addSelfDevelopment(){
  if(this.goals.length < 3 && this.isSelfDevelopmentPresent==false){
    var SelfDevelopment ={
      goalId:1,
      goal:"Self Development",
    }
    this.goals.push(SelfDevelopment);
    this.isSelfDevelopmentPresent=true;
    console.log(this.goals)
    this.selfDevelopmentImg="../../assets/img/Self Developmentcolor.png"
  }
   else if(this.goals.length <= 3 && this.isSelfDevelopmentPresent==true){
  let data="Self Development";
  this.isSelfDevelopmentPresent=false
   this.removeData(data);
   this.selfDevelopmentImg="../../assets/img/Self Development.png"
   
  }

}

addStartingBusiness(){
  if(this.goals.length < 3 && this.isStartingBusinessPresent==false){
    var StartingBusines ={
      goalId:2,
      goal:"Starting Business",
    }
    this.goals.push(StartingBusines);
    this.isStartingBusinessPresent=true;
    console.log(this.goals)
    this.startingBusinessImg="../../assets/img/Starting Businesscolor.png"
  }
   else if(this.goals.length <= 3 && this.isStartingBusinessPresent==true){
  let data="Starting Business";
  this.isStartingBusinessPresent=false
   this.removeData(data);
   this.startingBusinessImg="../../assets/img/Starting Business.png"
  }

} 

addBike(){
  if(this.goals.length < 3 && this.isBikePresent==false){
    var Bike ={
      goalId:3,
      goal:"Bike",
    }
    this.goals.push(Bike);
    this.isBikePresent=true;
    console.log(this.goals);
    this.bikeImg="../../assets/img/Bikecolor.png"
  }
   else if(this.goals.length <= 3 && this.isBikePresent==true){
  let data="Bike";
  this.isBikePresent=false
   this.removeData(data);
   this.bikeImg="../../assets/img/Bike.png"
  }

} 

addMarriage(){
  if(this.goals.length < 3 && this.isMarriagePresent==false){
    var Marriage ={
      goalId:4,
      goal:"Marriage",
    }
    this.goals.push(Marriage);
    this.isMarriagePresent=true;
    console.log(this.goals);
    this.marriageImg="../../assets/img/Marriegecolor.png";
  }
   else if(this.goals.length <= 3 && this.isMarriagePresent==true){
  let data="Marriage";
  this.isMarriagePresent=false
  this.marriageImg="../../assets/img/Marriage.png";
  this.removeData(data);
  }

} 

addHoneymoon(){
  if(this.goals.length < 3 && this.isHoneymoonPresent==false){
    var Honeymoon ={
      goalId:5,
      goal:"Honeymoon",
    }
    this.goals.push(Honeymoon);
    this.isHoneymoonPresent=true;
    console.log(this.goals)
    this.honeyMoonImg="../../assets/img/Honeymooncolor.png";
  }
   else if(this.goals.length <= 3 && this.isHoneymoonPresent==true){
  let data="Honeymoon";
  this.isHoneymoonPresent=false
   this.removeData(data);
   this.honeyMoonImg="../../assets/img/Honeymoon.png";
  }

} 

addWealthCreation(){
  if(this.goals.length < 3 && this.isWealthCreationPresent==false){
    var WealthCreation ={
      goalId:6,
      goal:"Wealth Creation",
    }
    this.goals.push(WealthCreation);
    this.isWealthCreationPresent=true;
    console.log(this.goals);
    this.wealthCreationImg="../../assets/img/Wealth Creationcolor.png"
  }
   else if(this.goals.length <= 3 && this.isWealthCreationPresent==true){
  let data="Wealth Creation";
  this.isWealthCreationPresent=false
   this.removeData(data);
   this.wealthCreationImg="../../assets/img/Wealth Creation.png"
  }

} 

addHoliday(){
  if(this.goals.length < 3 && this.isHolidayPresent==false){
    var Holiday ={
      goalId:7,
      goal:"Holiday",
    }
    this.goals.push(Holiday);
    this.isHolidayPresent=true;
    console.log(this.goals);
    console.log(this.isHolidayPresent);
    this.holidayImg="../../assets/img/Holidaycolor.png";
  }
   else if(this.goals.length <= 3 && this.isHolidayPresent==true){
  let data="Holiday";
  this.isHolidayPresent=false
   this.removeData(data);
   this.holidayImg="../../assets/img/Holiday.png";
  }
}

addCar(){
  if(this.goals.length < 3 && this.isCarPresent==false){
    var Car ={
      goalId:8,
      goal:"Car",
    }
    this.goals.push(Car);
    this.isCarPresent=true;
    console.log(this.goals);
    this.carImg="../../assets/img/Carcolor.png"
  }
   else if(this.goals.length <= 3 && this.isCarPresent==true){
  let data="Car";
  this.isCarPresent=false
   this.removeData(data);
   this.carImg="../../assets/img/Car.png"
  }

} 

addChildsEducation(){
  if(this.goals.length < 3 && this.isChildsEducationPresent==false){
    var ChildsEducation ={
      goalId:9,
      goal:"Childs Education",
    }
    this.goals.push(ChildsEducation);
    this.isChildsEducationPresent=true;
    console.log(this.goals)
    this.childsEducationImg="../../assets/img/Child's Educationcolor.png"
  }
   else if(this.goals.length <= 3 && this.isChildsEducationPresent==true){
  let data="Childs Education";
  this.isChildsEducationPresent=false
   this.removeData(data);
   this.childsEducationImg="../../assets/img/Childs Education.png"
  }

} 

addChildsMarriage(){
  if(this.goals.length < 3 && this.isChildsMarriagePresent==false){
    var ChildsMarriage ={
      goalId:10,
      goal:"Childs Marriage",
    }
    this.goals.push(ChildsMarriage);
    this.isChildsMarriagePresent=true;
    console.log(this.goals)
    this.childsMarriageImg="../../assets/img/Child's Marriegecolor.png"
  }
   else if(this.goals.length <= 3 && this.isChildsMarriagePresent==true){
  let data="Childs Marriage";
  this.isChildsMarriagePresent=false
   this.removeData(data);
   this.childsMarriageImg="../../assets/img/Childs Marriage.png"
  }

} 

addFollowPassion(){
  if(this.goals.length < 3 && this.isFollowPassionPresent==false){
    var FollowPassion ={
      goalId:11,
      goal:"Follow Passion",
    }
    this.goals.push(FollowPassion);
    this.isFollowPassionPresent=true;
    console.log(this.goals)
    this.followPassionImg="../../assets/img/Follow Passioncolor.png"
  }
   else if(this.goals.length <= 3 && this.isFollowPassionPresent==true){
  let data="Follow Passion";
  this.isFollowPassionPresent=false
   this.removeData(data);
   this.followPassionImg="../../assets/img/Follow Passion.png"
   

} 
}

addWorldTour(){
  if(this.goals.length < 3 && this.isWorldTourPresent==false){
    var WorldTour ={
      goalId:12,
      goal:"World Tour",
    }
    this.goals.push(WorldTour);
    this.isWorldTourPresent=true;
    console.log(this.goals)
    this.worldTourImg="../../assets/img/World Tourcolor.png"
  }
   else if(this.goals.length <= 3 && this.isWorldTourPresent==true){
  let data="World Tour";
  this.isWorldTourPresent=false
   this.removeData(data);
   this.worldTourImg="../../assets/img/World Tour.png"
  }

} 

addDreamHome(){
  if(this.goals.length < 3 && this.isLuxuryCarPresent==false){
    var LuxuryCar ={
      goalId:13,
      goal:LuxuryCar
    }
    this.isLuxuryCarPresent=true;
    console.log(this.goals);
    this.luxuryCarImg="../../assets/img/Dream Homecolor.png"
  }
   else if(this.goals.length <= 3 && this.isLuxuryCarPresent==true){
  let data="Dream Home";
  this.isLuxuryCarPresent=false
   this.removeData(data);
   this.luxuryCarImg="../../assets/img/Dream Home.png"
  }

} 

addRetirement(){
  if(this.goals.length < 3 && this.isRetirementPresent==false){
    var Retirement ={
      goalId:14,
      goal:"Retirement",
    }
    this.goals.push(Retirement);
    this.isRetirementPresent=true;
    console.log(this.goals);
    console.log(this.isRetirementPresent);
    this.retirementImg="../../assets/img/Retirementcolor.png";
    
  }
   else if(this.goals.length <= 3 && this.isRetirementPresent==true){
  let data="Retirement";
  this.isRetirementPresent=false
   this.removeData(data);
   this.retirementImg="../../assets/img/Retirement.png";
  }

}  

addPhilanthropy(){
  if(this.goals.length < 3 && this.isPhilanthropyPresent==false){
    var Philanthropy ={
      goalId:15,
      goal:"Philanthropy",
    }
    this.goals.push(Philanthropy);
    this.isPhilanthropyPresent=true;
    console.log(this.goals)
    this.philanthropyImg="../../assets/img/Philanthrophycolor.png"
  }
   else if(this.goals.length <= 3 && this.isPhilanthropyPresent==true){
  let data="Philanthropy";
  this.isPhilanthropyPresent=false
   this.removeData(data);
   this.philanthropyImg="../../assets/img/Philanthropy.png"
  }
} 

addothergoal(value){
  // console.log(value);
  if(this.goals.length < 3 && this.isOtherGoalPresent==false){
    var othergoal ={
      goalId:15,
      goal:value,
    }
    this.goals.push(othergoal);
    this.isOtherGoalPresent=true;
    console.log(this.goals)
    this.othergoalImg="../../assets/img/AddOtherGoalcolor.png"
  }
   else if(this.goals.length <= 3 && this.isOtherGoalPresent==true){
  let data=value;
  this.isOtherGoalPresent=false
   this.removeData(data);
   this.othergoalImg="../../assets/img/AddOtherGoal.png"
  }
}
/////new goals added ////////// 

//Removing Goals  
removeData(value){
  console.log("data removed");
  for(let i=0; i<this.goals.length;i++){
    console.log(i)
    if(this.goals[i].goal==value){
      console.log("if statement excecuted successfully")
      this.goals.splice(i,1);
      console.log(this.goals);
    }
    console.log(this.goals);
    
  }
}
         
}



 


