import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AdityaBirlaServices } from "../../Shared/Services/calculatorgoal.services"
import { SelectgoalsComponent } from "../selectgoals/selectgoals.component"
// import { Icalculatorgoal } from 'src/Shared/Interfaces(Structure)/calculatorgoal';
import { Igoal } from './../../Shared/Interfaces(Structure)/goal';
import {Validators, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: [/*'./goals.component.css'*/],
})
export class GoalsComponent implements OnInit {
 
  // public Img:any;
  public images = [];
  public response;
  public answers:Object =  {}
 
  public goals: Igoal;
  public goalData: Array<string> = [];
  public Data;
  public data:any;
  public img:any;
  public img1:any;
  public img2:any;
  public userName:any;
  public selectGoal:any;
  public questions:any;
 
  public uid:any;
  // public percent:any;
  public ival:any;

  public abc=[];
  public number =[];
  public percent = []
  public percent5 = [];
  public five = [];
  public age=[];

  // public show:boolean;
 
  constructor(private router: Router, private route: ActivatedRoute, private abs: AdityaBirlaServices, private fb:FormBuilder) { }
  public userForm:FormGroup;
  
  ngOnInit() {
    
    

    // this.route.params.subscribe(params => {
    
      // let  uid = localStorage.getItem('id'); 
      // console.log(uid);
      this.abs.getdata(localStorage.getItem('id')).subscribe(res => {

        console.log("result ->",res);
        this.selectGoal = res;
        console.log(this.selectGoal);
        this.userName =this.selectGoal[0].name;
        console.log(this.userName);
        this.img = this.selectGoal;
        console.log(this.img[0].goals);
      });

      for(let i=5;i<=25;i++){
        let ival = {"name":`${i}%`,"value":i};
        // console.log(ival);
        this.percent5.push(ival);
        }
      for(let i=1;i<=10;i++){
        let ival = {"name":`${i}%`,"value":i};
        // console.log(ival);
        this.percent.push(ival);
        }
      for(let i=1;i<=30;i++){
        let ival = {"name":i,"value":i};
        // console.log(ival);
        this.number.push(ival);
        }
                      
      for(let i=5;i<=100;i++){
        let ival = {"name":`${i}%`,"value":i};
        // console.log(ival);
        this.five.push(ival);
        }
                      
      for(let i=30;i<=80;i++){
        let ival = {"name":`${i}`,"value":i};
        // console.log(ival);
        this.age.push(ival);
        }

    }

  

  Replan() {
    this.router.navigateByUrl("");
  }


  goal1(data){
    console.log("=>",this.img);
  
    for(let i=0;i<this.goalQuestion.length;i++){
      // console.log(this.goalQuestion);
      // console.log(this.goalQuestion[i].type);  
      let questiontype = this.goalQuestion[i].type;
      // console.log(quetype);
      if(questiontype === data){        //data=retirement
        console.log(data);
        console.log(questiontype);
        this.questions = this.goalQuestion[i].questions;   //questions=list of questions of retirement goal        console.log(this.goalQuestion[i].questions);
        console.log("ang",this.questions);

      }
    }
  }
  
  // let answers = {
  //   amountForGoal : 1000,
  //   inflation : 10%,
  // }
  
  // let answers = {};
  // answered(answer, index?, variableName?){
  //   if(variableName){

  //   }
  // }

  goalQuestion = [
    {
      "type": "Self Development",
      "questions": [
        { 
        "name": "What amount is required for your self development goal today?", 
        "variableName":"Enter amount" /*flag:"amount"*/
        },
        { "name": "After how many years do you plan to take up your self development goal?", "variableName":"Enter number of years","options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent, "variableName":"Expected Inflation"},
        { "name": "Expected returns on investment (% p.a.)" ,"variableName":"Expected ROI", "options":this.percent5},
        { 
          "name": "What amount you can invest today as Lumspum?" , 
          "variableName":"Enter lumpsum  investment amount"
        }
      ],
      "calculations":{}
    }, {
      "type": "Starting Business",
      "questions": [
        { "name": "Amount required to start your Business today",  "variableName":"Enter amount" },
        { "name": "Expected inflation (% per annum)", "options":this.percent,  "variableName":"Enter number of years" },
        { "name": "After how many years do you plan to start your Business?", "options":this.number,  "variableName": },
        { "name": "Expected returns on investment (% per annum)", "options":this.percent5, "variableName": },
        { "name": "What amount you can invest today as Lumspum?",  "variableName": }
      ]
    }, {
      "type": "Marriage",
      "questions": [
        { "name": "What amount you would require to get married today?"},
        { "name": "After how many years do you plan to get married?", "options":this.number,"fname":"Enter number of years"},
        { "name": "Expected inflation (% per annum)" , "options":this.percent},
        { "name": "Expected returns on investment (% per annum)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?"},
      ]
    }, {
      "type": "Honeymoon",
      "questions": [
        { "name": "What amount is required to visit your honeymoon destination today?" },
        { "name": "After how many years do you plan to visit your honeymoon destination?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "hat amount you can invest today as Lumspum?" }
      ]
    }, {
      "type": "Wealth Creation",
      "questions": [
        { "name": "How much wealth do you wish you accumulate?" },
        { "name": "After how many years do you plan to own this wealth?", "options":this.number },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "Enter the savings you wish to invest for wealth creation?" }
      ]
    }, {
      "type": "Holiday",
      "questions": [
        { "name": "Enter the amount required to visit your holiday destination today?" },
        { "name": "After how many years do you plan to visit your holiday destination?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?" }
      ]
    }, {
      "type": "World Tour",
      "questions": [
        { "name": "What's the current cost of going on a World Tour?" },
        { "name": "After how many years do you plan to go for a World Tour?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?" }
      ]
    }, {
      "type": "Follow Passion",
      "questions": [
        { "name": "What's the current cost of activity (passion) you want to pursue?" },
        { "name": "After how many years do you plan to pursue your passion?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?" }
      ]
    }, {
      "type": "Philanthropy",
      "questions": [
        { "name": "What amount you would liked to contribute today, if you were to donate today?	" },
        { "name": "After how many years do you plan to contribute for the donation?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?	" }
      ]
    }, {
      "type": "Bike",
      "questions": [
        { "name": "What is the cost of Bike today?" },
        { "name": "After how many years do you plan to buy the bike?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Bike Loan funding (%)", "options":this.five },
        { "name": "Expected returns on your investment (% p.a.)", "options":this.percent5 },
        { "name": "How much can you invest as lumpsum today?" }
      ]
    }, {
      "type": "Car",
      "questions": [
        { "name": "What is the cost of Car today?"},
        { "name": "After how many years do you plan to buy the car?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent},
        { "name": "Car Loan funding (%)", "options":this.five},
        { "name": "Expected returns on your investment (% p.a.)", "options":this.percent5},
        { "name": "How much can you invest as lumpsum today?" }
      ]
    }, {
      "type": "Dream Home",
      "questions": [
        { "name": "What is the cost of your dream home today?" },
        { "name": "After how many years do you plan to buy your dream home?", "options":this.number },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Dream Home Loan funding (%)","options":this.five  },
        { "name": "Expected returns on your investment (% p.a.)", "options":this.percent5 },
        { "name": "How much can you invest as lumpsum today?" }
      ]
    }, {
      "type": "Childs Education",
      "questions": [
        { "name": "Enter your Child's name" },
        { "name": "After how many years does your child wants to go for higher education", "options":this.number  },
        { "name": "Enter today's cost to fulfill your child's education"},
        { "name": "Expected inflation (% p.a.)" , "options":this.percent},
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?" }
      ]
    }, {
      "type": "Childs Marriage",
      "questions": [
        { "name": "Enter your Child's name","options":"" },
        { "name": "Enter the age when your child might get married", "options":this.number  },
        { "name": "Enter today's cost for your Child's marriage" },
        { "name": "Expected inflation (% p.a.)", "options":this.percent },
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "What amount you can invest today as Lumspum?","options":"" }
      ]
    },
    {
      "type": "Retirement",
      "questions": [
        { "name": "What's your current age?"},
        { "name": "At what age you plan to retire?","options":this.age },
        { "name": "What are your current annual expenses?" },
        { "name": "What is the expected rate of inflation? (Before Retirement)" , "options":this.percent},
        { "name": "What is the expected rate of return? (Before Retirement)", "options":this.percent5 },
        { "name": "What is the expected rate of return on your retirement saving? (Post Retirement)", "options":this.percent5 },
        { "name": "How much can you invest as lumpsum today for your retirement?" }
      ],
    },
    {
      "type": "AddOtherGoal",
      "questions": [
        { "name": "What's your Goal?"},
        { "name": "What's the cost to fund your goal today?"},
        { "name": "After how many years do you wish to achieve this goal?", "options":this.number },
        { "name": "What is the expected inflation?" , "options":this.percent},
        { "name": "Expected returns on investment (% p.a.)", "options":this.percent5 },
        { "name": "Would you like to invest lumpsum amount for your Goal"}
      ]
    }
  ]

  
  
  
  //Fetching input values from dropdown
  optionSelect(goalInputField,inputValue){
  console.log("Input values from dropdown",goalInputField,inputValue);
   //call method to insert value
  this.goalInputValueInsert(goalInputField,inputValue);
  }  // this.answers.push();
 
  //Fetching input values from input text box
  inputChanged(goalInputField,inputValue){
    console.log("Input values from input text box",goalInputField,inputValue);
    //call method to insert value
   this.goalInputValueInsert(goalInputField,inputValue);

  }

  //Inserting input Values from input text box and dropdown
  goalInputValueInsert(x,y){
    this.answers[x]=y;
    console.log(this.answers);
    // this.answers.push();
  }

  Calculation(){

  }


  
 
}





  



