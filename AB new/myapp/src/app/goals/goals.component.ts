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
  public goalsInputValue:Object =  {};
 
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
  public questionType:string;
  
 
  public uid:any;
  // public percent:any;
  public ival:any;

  public abc=[];
  public number =[];
  public percent = []
  public percent5 = [];
  public five = [];
  public age=[];

  //Variables used for Calculations
  // 1- For Starting Business
  public futureValueOfStartingBusiness:number;
  public sipNoLumpsum:number;
  public sipWithLumpsum:number;

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
        console.log("goals",this.img[0].goals);
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
       this.questionType = this.goalQuestion[i].type;
      // console.log(quetype);
      if(this.questionType === data){        //data=retirement
        console.log(data);
        console.log(this.questionType);
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
        "variableName":"enterAmount"
        },
        { 
        "name": "After how many years do you plan to take up your self development goal?", 
        "variableName":"enterNumberOfYears","options":this.number
       },
        { 
          "name": "Expected inflation (% p.a.)", 
          "options":this.percent, 
          "variableName":"expectedInflation"
        },
        { 
          "name": "Expected returns on investment (% p.a.)", 
          "options":this.percent5,
          "variableName":"expectedReturnsOnInvestment"
        },
        { 
          "name": "What amount you can invest today as Lumspum?" , 
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ],
     }, 
    {
      "type": "Starting Business",
      "questions": [
        { 
          "name": "Amount required to start your Business today",  
          "variableName":"enterAmount" 
        },
        { 
          "name": "After how many years do you plan to start your Business?", 
          "options":this.number,  
          "variableName":"enterNumberOfYears"
        },        
        {
          "name": "Expected inflation (% per annum)", 
          "options":this.percent,  
          "variableName":"expectedInflation" 
        },
        { 
          "name": "Expected returns on investment (% per annum)",
          "options":this.percent5, 
          "variableName":"expectedReturnsOnInvestment"
        },
        { 
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, 
    {
      "type": "Marriage",
      "questions": [
        {
          "name": "What amount you would require to get married today?",
          "variableName":"enterAmount" 
        },
        { 
          "name": "After how many years do you plan to get married?", 
          "options":this.number,"fname":"Enter number of years",
          "variableName":"enterNumberOfYears"
        },
        { 
          "name": "Expected inflation (% per annum)", 
          "options":this.percent,
          "variableName":"expectedInflation" 
        },
        { 
          "name": "Expected returns on investment (% per annum)",
          "options":this.percent5,
          "variableName":"expectedReturnsOnInvestment"
        },
        { 
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
        },
      ]
    }, {
      "type": "Honeymoon",
      "questions": [
        {
          "name": "What amount is required to visit your honeymoon destination today?",
          "variableName":"enterAmount" 
        },
        { 
          "name": "After how many years do you plan to visit your honeymoon destination?",
          "options":this.number ,
          "variableName":"enterNumberOfYears"
        
        },
        { 
          "name": "Expected inflation (% p.a.)", 
          "options":this.percent,
          "variableName":"expectedInflation" 

        },
        { "name": "Expected returns on investment (% p.a.)", 
        "options":this.percent5 ,
        "variableName":"expectedReturnsOnInvestment"
      
       },
        {
           "name": "hat amount you can invest today as Lumspum?",
           "variableName":"enterLumpsumInvestmentAmount"
           
       }
      ]
    }, {
      "type": "Wealth Creation",
      "questions": [
        {
           "name": "How much wealth do you wish you accumulate?" ,
           "variableName":"enterAmount" 
          
        },
        {
          "name": "After how many years do you plan to own this wealth?",
           "options":this.number ,
           "variableName":"enterNumberOfYears"
        },
        { 
          "name": "Expected returns on investment (% p.a.)",
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment"
        },
        { 
          "name": "Enter the savings you wish to invest for wealth creation?",
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, {
      "type": "Holiday",
      "questions": [
        { 
          "name": "Enter the amount required to visit your holiday destination today?",
          "variableName":"enterAmount" 
        
        },
        { "name": "After how many years do you plan to visit your holiday destination?",
         "options":this.number ,
         "variableName":"enterNumberOfYears"
        
        },
        {
           "name": "Expected inflation (% p.a.)",
            "options":this.percent,
            "variableName":"expectedInflation"   
          },
        {
           "name": "Expected returns on investment (% p.a.)",
            "options":this.percent5,
            "variableName":"expectedReturnsOnInvestment" 
          
          },
        {
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, {
      "type": "World Tour",
      "questions": [
        {
           "name": "What's the current cost of going on a World Tour?",
           "variableName":"enterAmount" 
          
          },
        { 
          "name": "After how many years do you plan to go for a World Tour?",
           "options":this.number ,
           "variableName":"enterNumberOfYears"
          
          },
        { 
          "name": "Expected inflation (% p.a.)",
           "options":this.percent,
           "variableName":"expectedInflation"
          
          },
        {
           "name": "Expected returns on investment (% p.a.)", 
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment" 
          },
        { 
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
        
        }
      ]
    }, {
      "type": "Follow Passion",
      "questions": [
        {
           "name": "What's the current cost of activity (passion) you want to pursue?",
           "variableName":"enterAmount" 
          
          },
        {
           "name": "After how many years do you plan to pursue your passion?",
            "options":this.number ,
            "variableName":"enterNumberOfYears"
          
          },
        {
           "name": "Expected inflation (% p.a.)",
            "options":this.percent,
            "variableName":"expectedInflation"
          },
        {
           "name": "Expected returns on investment (% p.a.)",
         "options":this.percent5,
         "variableName":"expectedReturnsOnInvestment" 
        
        },
        { 
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
      
      }
      ]
    }, {
      "type": "Philanthropy",
      "questions": [
        {
           "name": "What amount you would liked to contribute today, if you were to donate today?	",
           "variableName":"enterAmount"  
          
          },
        {
           "name": "After how many years do you plan to contribute for the donation?",
            "options":this.number,
            "variableName":"enterNumberOfYears"
          
          },
        { 
          "name": "Expected inflation (% p.a.)",
           "options":this.percent,
           "variableName":"expectedInflation"
          
          },
        { 
          "name": "Expected returns on investment (% p.a.)",
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment"
          },
        { 
          "name": "What amount you can invest today as Lumspum?	",
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, {
      "type": "Bike",
      "questions": [
        {
           "name": "What is the cost of Bike today?",
           "variableName":"enterAmount" 
          
          },
        {
           "name": "After how many years do you plan to buy the bike?",
            "options":this.number,
            "variableName":"enterNumberOfYears"
          },
        {
           "name": "Expected inflation (% p.a.)",
            "options":this.percent,
            "variableName":"expectedInflation"
          },
        { 
          "name": "Bike Loan funding (%)",
           "options":this.five,
           "variableName":"loanFunding"
          },
        { 
          "name": "Expected returns on your investment (% p.a.)",
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment"
          },
        {
           "name": "How much can you invest as lumpsum today?",
           "variableName":"enterLumpsumInvestmentAmount"
          }
      ]
    }, {
      "type": "Car",
      "questions": [
        {
           "name": "What is the cost of Car today?",
           "variableName":"enterAmount" 
          },
        {
           "name": "After how many years do you plan to buy the car?",
            "options":this.number ,
            "variableName":"enterNumberOfYears"
          },
        {
           "name": "Expected inflation (% p.a.)",
            "options":this.percent,
            "variableName":"expectedInflation"
          },
        {
           "name": "Car Loan funding (%)",
            "options":this.five,
            "variableName":"loanFunding"
          },
        { 
          "name": "Expected returns on your investment (% p.a.)",
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment"
          },
        { 
          "name": "How much can you invest as lumpsum today?" ,
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, {
      "type": "Dream Home",
      "questions": [
        { 
          "name": "What is the cost of your dream home today?",
          "variableName":"enterAmount" 
        },
        { 
          "name": "After how many years do you plan to buy your dream home?", 
          "options":this.number,
          "variableName":"enterNumberOfYears"
        },
        { 
          "name": "Expected inflation (% p.a.)", 
          "options":this.percent, 
          "variableName":"expectedInflation"
        },
        { 
          "name": "Dream Home Loan funding (%)",
          "options":this.five,
          "variableName":"loanFunding"
        },
        { 
          "name": "Expected returns on your investment (% p.a.)",
           "options":this.percent5,
           "variableName":"expectedReturnsOnInvestment"
          },
        { 
          "name": "How much can you invest as lumpsum today?" ,
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ]
    }, {
      "type": "Childs Education",
      "questions": [
        { 
          "name": "Enter your Child's name",
          "variableName":"enterChildName"
        },
        {
           "name": "After how many years does your child wants to go for higher education",
            "options":this.number,
            "variableName":"enterNumberOfYears"
          },
        { 
          "name": "Enter today's cost to fulfill your child's education",
          "variableName":"enterAmount" 
        },
        {
           "name": "Expected inflation (% p.a.)" ,
            "options":this.percent,
            "variableName":"expectedInflation"
          },
        { 
          "name": "Expected returns on investment (% p.a.)",
           "options":this.percent5, 
           "variableName":"expectedReturnsOnInvestment"
          },
        {
           "name": "What amount you can invest today as Lumspum?",
           "variableName":"enterLumpsumInvestmentAmount"
           }
      ]
    }, {
      "type": "Childs Marriage",
      "questions": [
        {
           "name": "Enter your Child's name",
           "variableName":"enterChildName"
          },
        { 
          "name": "Enter the age when your child might get married",
           "options":this.number, 
           "variableName":"enterNumberOfYears"
          },
        {
           "name": "Enter today's cost for your Child's marriage",
           "variableName":"enterAmount" 
          },
        {
           "name": "Expected inflation (% p.a.)",
            "options":this.percent,
            "variableName":"expectedInflation"
          },
        {
           "name": "Expected returns on investment (% p.a.)",
            "options":this.percent5,
            "variableName":"expectedReturnsOnInvestment"
          },
        {
          "name": "What amount you can invest today as Lumspum?",
          "variableName":"enterLumpsumInvestmentAmount"
        
        }
      ]
    },
    {
      "type": "Retirement",
      "questions": [
        { 
          "name": "What's your current age?",
          "variableName":"currentAge"
        },
        {
           "name": "At what age you plan to retire?",
           "options":this.age, 
           "variableName":"enterRetirementAge"
          },
        { 
          "name": "What are your current annual expenses?",
          "variableName":"enterAmount" 
        },
        { 
          "name": "What is the expected rate of inflation? (Before Retirement)" ,
           "options":this.percent,
           "variableName":"expectedInflationBeforeRetiremnet"
          },
        {
           "name": "What is the expected rate of return? (Before Retirement)",
            "options":this.percent5,
            "variableName":"rateOfReturnBeforeRetirement" 
          
          },
        { 
          "name": "What is the expected rate of return on your retirement saving? (Post Retirement)",
           "options":this.percent5, 
           "variableName":"rateOfReturnPostRetirement" 
          },
        { 
          "name": "How much can you invest as lumpsum today for your retirement?",
          "variableName":"enterLumpsumInvestmentAmount"
        }
      ],
    },
    {
      "type": "AddOtherGoal",
      "questions": [
        { 
          "name": "What's your Goal?",
          "variableName":"goalName"
        },
        {
           "name": "What's the cost to fund your goal today?",
           "variableName":"enterAmount" 
          },
        { 
          "name": "After how many years do you wish to achieve this goal?", 
          "options":this.number, 
          "variableName":"enterNumberOfYears"
        },
        { 
          "name": "What is the expected inflation?" ,
           "options":this.percent,
           "variableName":"expectedInflation"
          },
        { 
          "name": "Expected returns on investment (% p.a.)",
           "options":this.percent5, 
           "variableName":"expectedReturnsOnInvestment"
          },
        {
           "name": "Would you like to invest lumpsum amount for your Goal",
           "variableName":"enterLumpsumInvestmentAmount"
          }
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
  goalInputValueInsert(goalInputField, inputValue){
    this.goalsInputValue[goalInputField]=inputValue;
    console.log(this.goalsInputValue);
    console.log(this.goalsInputValue['enterAmount']);
    console.log(this.goalsInputValue['expectedInflation']);
    console.log(this.goalsInputValue['enterNumberOfYears'])

    //For Calculation
      this.calculationMethod();
   
  
  }
 
calculationMethod(){

  

  for(let i=0;i<this.goalQuestion.length;i++){
    if(this.goalQuestion[i].type === "Starting Business"){

        // Calculating future Value Of Starting Business
        this.futureValueOfStartingBusiness=this.futureValue(this.goalsInputValue['enterAmount'], this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'] )
        console.log("This is calculation for Starting Business",this.futureValueOfStartingBusiness);

        // Calculating SIP (considering no lumpsum amount is invested today)
        this.sipNoLumpsum=this.PMT(this.goalsInputValue['expectedReturnsOnInvestment'], this.futureValueOfStartingBusiness, this.goalsInputValue['enterAmount'], 1);

        // // Calculating SIP (considering  lumpsum amount is invested today)
        this.sipWithLumpsum=this.PMT(this.goalsInputValue['expectedReturnsOnInvestment'], this.futureValueOfStartingBusiness, this.goalsInputValue['enterAmount'], 1);
    }


    if(this.questionType==="Marriage"){

         // Calculating future Value Of Starting Business
         this.futureValueOfStartingBusiness=this.futureValue(this.goalsInputValue['enterAmount'], this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'] )
         console.log("This is calculation for Starting Business",this.futureValueOfStartingBusiness);
 
         // Calculating SIP (considering no lumpsum amount is invested today)
         this.sipNoLumpsum=this.PMT(this.goalsInputValue['expectedReturnsOnInvestment'], this.futureValueOfStartingBusiness, this.goalsInputValue['enterAmount'], 1);
 
         // // Calculating SIP (considering  lumpsum amount is invested today)
         this.sipWithLumpsum=this.PMT(this.goalsInputValue['expectedReturnsOnInvestment'], this.futureValueOfStartingBusiness, this.goalsInputValue['enterAmount'], 1);
    }
    if(this.questionType==="Honeymoon"){
        //Calculation
    }
  }
}



//Method to caculate Future Value
futureValue( PV, i,n){
  var x=(1+i/100)
  var FV=PV*(Math.pow(x,n))
  return FV;
}

PMT(ROI, numberOfYears, FV, type, enterLumpsumInvestmentAmount?){
  var PMT:number=9999;
  return PMT
}


 
}








