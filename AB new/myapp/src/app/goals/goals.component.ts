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
  public goalsInputValue:Object =  [{}];
 
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
  public singleSelectedQuestion:string;
  public description:string;
   goalQuestion=[];
 
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
  
  public futureValueOfSelfDevelopmentGoal:number
  public futureValueOfStartingBusiness:number;
  public futureValueOfGettingMarried:number;
  public futureValueOfVisitingHoneymoonDestination:number;
  public futureValueOfVisitingHolidayDestination:number;
  public futureValueOfGoingOnWorldTour:number;
  public futureValueOfPassion:number;
  public futureValueOfPhilantrophy:number;
  public futureValueOfBike:number;
  public futureValueOfCar:number;
  public futureValueOfDreamHome:number;
  public futureValueOfChildEducation:number;
  public futureValueOfChildMarriage:number;
  public futureValueOfExpensesInRetirementAge:number;
  public futureValueOfGoal:number;



  public sipNoLumpsum:number;
  public sipWithLumpsum:number;
  public vehicleLoanAmount:number;
  public dreamHomeLoanAmount:number;
  public downPayment:number;
  public downPaymentAmount:number;
  public corpusAmount:number;

  // public show:boolean;
 
  constructor(private router: Router, private route: ActivatedRoute, private abs: AdityaBirlaServices, private fb:FormBuilder) { }
  public userForm:FormGroup;
  
  ngOnInit() {
    this.getSelectedGoals();
    }
  
  getSelectedGoals(){
    this.abs.getdata(localStorage.getItem('id')).subscribe(res => {

      console.log("result ->",res);
      this.selectGoal = res;
      console.log(this.selectGoal);
      this.userName =this.selectGoal[0].name;
      console.log(this.userName);
      this.img = this.selectGoal;
      console.log("goals",this.img[0].goals);


      this.goalQuestion = [
        {
          "type": "Self Development",
          "questions": [
            { 
            "name": "What amount is required for your self development goal today?", 
            "variableName":"enterAmount",
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
           "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
        
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
        }, 
        {
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
          ],
    
          "description": `Hi ${this.userName} for Car of ₹ ${this.goalsInputValue['enterAmount']} after ${this.goalsInputValue['enterNumberOfYears']} years you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} over next  ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of ₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 5,000,000 	If less than 50 lakh, at no additional cost.`
    
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
          ],
          "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} 	Get it from user entry form for 	Honeymoon after 	6 	years you would require 	₹ 3,350,239 	
          To fund the same, you need to start a monthly SIP of 	₹ 31,679 	
          over next 	6 	years As you are investing 	₹ 700,000 	
          as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ 18,129 What's more, if you opt for the CSIP* facility, you can get a life insurance cover upto Rs. 	₹ 1,812,900 	If less than 50 lakh, at no additional cost.`
    
    
        },
         {
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
          ],
          "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
            
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
           
    
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
            
    
        },
         {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
    
    
        }, 
        {
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
          ],
    
          "description": `Hi 	${this.userName} for Abhay's Education after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
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
          ],
          "description": `Hi 	${this.userName} for Abhay's Marriage after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
    
    
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
          "description": `Hi ${this.userName}, after ${(this.goalsInputValue['enterRetirementAge']-this.goalsInputValue['currentAge'])} years (as you retire), your current annual expenses of ₹ ${this.goalsInputValue['enterAmount']} would swell to ₹ ${this.futureValueOfExpensesInRetirementAge}. To maintain the same lifestyle post retirement, you would need a retirement savings of ₹ ${this.corpusAmount}. If you invest ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} lumpsum today for your retirement, you would need to start a monthly SIP of ₹ ${this.sipWithLumpsum} and continue till you turn ${this.goalsInputValue['currentAge']} . What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 24,16,519 at no additional cost.`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
    
        }
      ]

      if(res[0].goals){
        this.onGoalClick(res[0].goals)
      }
      
      this.goalQuestion = [
        {
          "type": "Self Development",
          "questions": [
            { 
            "name": "What amount is required for your self development goal today?", 
            "variableName":"enterAmount",
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
           "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
        
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
        }, 
        {
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
          ],
    
          "description": `Hi ${this.userName} for Car of ₹ ${this.goalsInputValue['enterAmount']} after ${this.goalsInputValue['enterNumberOfYears']} years you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} over next  ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of ₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 5,000,000 	If less than 50 lakh, at no additional cost.`
    
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
          ],
          "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
    
    
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} 	Get it from user entry form for 	Honeymoon after 	6 	years you would require 	₹ 3,350,239 	
          To fund the same, you need to start a monthly SIP of 	₹ 31,679 	
          over next 	6 	years As you are investing 	₹ 700,000 	
          as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ 18,129 What's more, if you opt for the CSIP* facility, you can get a life insurance cover upto Rs. 	₹ 1,812,900 	If less than 50 lakh, at no additional cost.`
    
    
        },
         {
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
          ],
          "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
            
    
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
          ],
          "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
           
    
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
            
    
        },
         {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
        }, 
        {
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
          ],
          "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
    
    
        }, 
        {
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
          ],
    
          "description": `Hi 	${this.userName} for Abhay's Education after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
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
          ],
          "description": `Hi 	${this.userName} for Abhay's Marriage after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
    
    
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
          "description": `Hi ${this.userName}, after ${(this.goalsInputValue['enterRetirementAge']-this.goalsInputValue['currentAge'])} years (as you retire), your current annual expenses of ₹ ${this.goalsInputValue['enterAmount']} would swell to ₹ ${this.futureValueOfExpensesInRetirementAge}. To maintain the same lifestyle post retirement, you would need a retirement savings of ₹ ${this.corpusAmount}. If you invest ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} lumpsum today for your retirement, you would need to start a monthly SIP of ₹ ${this.sipWithLumpsum} and continue till you turn ${this.goalsInputValue['currentAge']} . What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 24,16,519 at no additional cost.`
    
    
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
          ],
          "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
          you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
          over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
          What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
    
        }
      ]
      
    });

    for (let i = 5; i <= 25; i++) {
      let ival = { "name": `${i}%`, "value": i };
      // console.log(ival);
      this.percent5.push(ival);
      }
      for (let i = 1; i <= 10; i++) {
      let ival = { "name": `${i}%`, "value": i };
      // console.log(ival);
      this.percent.push(ival);
      }
      for (let i = 1; i <= 30; i++) {
      let ival = { "name": i, "value": i };
      // console.log(ival);
      this.number.push(ival);
      }
       
      for (let i = 5; i <= 100; i++) {
      let ival = { "name": `${i}%`, "value": i };
      // console.log(ival);
      this.five.push(ival);
      }
       
      for (let i = 30; i <= 80; i++) {
      let ival = { "name": `${i}`, "value": i };
      // console.log(ival);
      this.age.push(ival);
      }



  }
  

  Replan() {
    this.router.navigateByUrl("");
    localStorage.removeItem('id');
  }


  onGoalClick(data){
    console.log("=>",this.img);

    const ques = this.goalQuestion.find((res) => res.type === data );
    console.log(ques);
    this.description = ques.description;
    this.questions = ques.questions;
    this.singleSelectedQuestion=data;



  
    // for(let i=0;i<this.goalQuestion.length;i++){
    //   // console.log(this.goalQuestion);
    //   // console.log(this.goalQuestion[i].type);  
    //    this.questionType = this.goalQuestion[i].type;
    //   // console.log(quetype);
    //   if(this.questionType === data){        //data=retirement
    //     console.log(data);
    //      this.singleSelectedQuestion=data;
    //     console.log(this.questionType);
    //     this.questions = this.goalQuestion[i].questions;   //questions=list of questions of retirement goal        console.log(this.goalQuestion[i].questions);
    //     console.log("ang",this.questions);

    //   }
    // }
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
    // for(let i=0; i<goalInputField.length;i++){
    //   this.goalsInputValue[i].questionId= i+1;
    //   this.goalsInputValue[i].goalInputField=inputValue; 
    // }
    
    console.log(this.goalsInputValue);
    console.log(this.goalsInputValue['enterAmount']);
    console.log(this.goalsInputValue['expectedInflation']);
    console.log(this.goalsInputValue['enterNumberOfYears'])

    //For Calculation
      this.calculationMethod();
   
  
  }
 
calculationMethod(){

    if(this.singleSelectedQuestion === "Self Development"){
    console.log(this.questionType)
      // Calculating future Value Of Starting Business
      this.futureValueOfSelfDevelopmentGoal=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
      console.log("This is calculation for Self Development",this.futureValueOfSelfDevelopmentGoal);

      // Calculating SIP (considering no lumpsum amount is invested today)
      this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfSelfDevelopmentGoal, 1))
      console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
   
      // // Calculating SIP (considering  lumpsum amount is invested today)
      this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfSelfDevelopmentGoal, 1));
      console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
      
    }

  if(this.singleSelectedQuestion === "Starting Business"){
    console.log(this.questionType)
    // Calculating future Value Of Starting Business
    this.futureValueOfStartingBusiness=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
    console.log("This is calculation for Starting Business",this.futureValueOfStartingBusiness);

    this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfSelfDevelopmentGoal, 1))
    console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
    // // Calculating SIP (considering  lumpsum amount is invested today)
    this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfStartingBusiness, 1))
    console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
  }    

    if(this.singleSelectedQuestion === "Marriage"){

        // Calculating future Value Of Starting Business
        this.futureValueOfGettingMarried=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
        console.log("This is calculation for Marriage",this.futureValueOfGettingMarried);

        this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfGettingMarried, 1))
        console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
        // // Calculating SIP (considering  lumpsum amount is invested today)
        this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfGettingMarried, 1));
        console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
      }


    if(this.singleSelectedQuestion==="Honeymoon"){
      console.log(this.questionType);
         // Calculating future Value Of Starting Business
         this.futureValueOfVisitingHoneymoonDestination=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
         console.log("This is calculation for Honeymoon",this.futureValueOfVisitingHoneymoonDestination);
 
         this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfVisitingHoneymoonDestination, 1))
         console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
         // // Calculating SIP (considering  lumpsum amount is invested today)
         this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfVisitingHoneymoonDestination, 1));
         console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
        }

    if(this.singleSelectedQuestion==="Wealth Creation"){
      console.log(this.questionType);
        //Calculation
        this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.goalsInputValue['enterAmount'], 1))
        console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
        // // Calculating SIP (considering  lumpsum amount is invested today)
        this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.goalsInputValue['enterAmount'], 1));
        console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
      }

    if(this.singleSelectedQuestion === "Holiday"){
      console.log(this.questionType);
      // Calculating future Value Of Starting Business
      this.futureValueOfVisitingHolidayDestination=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfSelfDevelopmentGoal, 1))
    console.log("This is calculation for Holiday",this.futureValueOfVisitingHolidayDestination);

      this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfVisitingHolidayDestination, 1));
      console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
      // // Calculating SIP (considering  lumpsum amount is invested today)
      this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.futureValueOfVisitingHolidayDestination, 1))
      console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
    }

  if(this.singleSelectedQuestion === "World Tour"){

    // Calculating future Value Of Starting Business
    this.futureValueOfGoingOnWorldTour=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
    console.log("This is calculation for World Tour",this.futureValueOfGoingOnWorldTour);

    this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfGoingOnWorldTour, 1));
    console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
    // // Calculating SIP (considering  lumpsum amount is invested today)
    this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.futureValueOfGoingOnWorldTour, 1));
    console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
  }

if(this.singleSelectedQuestion === "Follow Passion"){

  // Calculating future Value Of Starting Business
  this.futureValueOfPassion=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Follow Passion",this.futureValueOfPassion);

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfPassion, 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.futureValueOfPassion, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Philanthropy"){

  // Calculating future Value Of Starting Business
  this.futureValueOfPhilantrophy=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Philanthropy",this.futureValueOfPhilantrophy);

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfPhilantrophy, 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.futureValueOfPhilantrophy, 1))
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Bike"){

  // Calculating future Value Of Starting Business
  this.futureValueOfBike=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Bike",this.futureValueOfBike);

  //Calculating vehicle loan amount
  this.vehicleLoanAmount=Math.round(this.findLoanAmount(this.downPayment=20, this.futureValueOfBike));
  console.log(this.vehicleLoanAmount);

  //Calculating Down Payment Amount
  this.downPaymentAmount=Math.round(this.findDownPaymentAmount(this.downPayment=20, this.futureValueOfBike));
  console.log(this.downPaymentAmount)

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.downPaymentAmount , 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.downPaymentAmount, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Car"){

  // Calculating future Value Of Starting Business
  this.futureValueOfCar=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Car",this.futureValueOfCar);

  //Calculating vehicle loan amount
  this.vehicleLoanAmount= Math.round(this.findLoanAmount(this.downPayment=30, this.futureValueOfCar));
  console.log(this.vehicleLoanAmount);
  //Calculating Down Payment Amount
  this.downPaymentAmount= Math.round(this.findDownPaymentAmount(this.downPayment=30, this.futureValueOfCar));
   console.log(this.downPaymentAmount)
  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.downPaymentAmount , 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.downPaymentAmount, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Dream Home"){

  // Calculating future Value Of Starting Business
  this.futureValueOfDreamHome=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Dream Home",this.futureValueOfDreamHome);

  //Calculating vehicle loan amount
  this.dreamHomeLoanAmount=Math.round( this.findLoanAmount(this.downPayment=20, this.futureValueOfDreamHome));
  console.log(this.dreamHomeLoanAmount);

  //Calculating Down Payment Amount
  this.downPaymentAmount= Math.round(this.findDownPaymentAmount(this.downPayment=20, this.futureValueOfDreamHome));
  console.log(this.downPaymentAmount)

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.downPaymentAmount , 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'],  this.downPaymentAmount, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Childs Education"){

  // Calculating future Value Of Starting Business
  this.futureValueOfChildEducation=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Child Education",this.futureValueOfChildEducation);

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfChildEducation , 1))
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfChildEducation, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Childs Marriage"){

  // Calculating future Value Of Starting Business
  this.futureValueOfChildMarriage=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Child Marriage",this.futureValueOfChildMarriage);

  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfChildMarriage , 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfChildMarriage, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

if(this.singleSelectedQuestion === "Retirement"){

  // Calculating future Value Of Starting Business
  this.futureValueOfExpensesInRetirementAge=Math.round(this.futureValue(this.goalsInputValue['expectedInflationBeforeRetiremnet'], this.goalsInputValue['currentAge']-25, this.goalsInputValue['enterAmount']))
  console.log("This is calculation for Retirement",this.futureValueOfExpensesInRetirementAge);

  //Calculating Corpus Required to Fund Retirement Expenses
  this.corpusAmount=Math.round(this.findCorpusAmount(this.futureValueOfExpensesInRetirementAge, this.goalsInputValue['rateOfReturnPostRetirement']/100));
  console.log(this.corpusAmount)
  // Calculating SIP (considering no lumpsum amount is invested today)
  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, 25*12, 0,this.corpusAmount , 1));
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfExpensesInRetirementAge, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}

 if(this.singleSelectedQuestion === "AddOtherGoal"){

  // Calculating future Value Of Starting Business
  this.futureValueOfGoal=Math.round(this.futureValue(this.goalsInputValue['expectedInflation'], this.goalsInputValue['enterNumberOfYears'], this.goalsInputValue['enterAmount']))
  console.log("This is calculation for AddOtherGoal",this.futureValueOfGoal);

  // Calculating SIP (considering no lumpsum amount is invested today)
  this.sipNoLumpsum=Math.round(this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, 0, -this.futureValueOfGoal, 1))
  console.log("This is calculation for sip with no lumpsum",this.sipNoLumpsum);
  // // Calculating SIP (considering  lumpsum amount is invested today)
  this.sipWithLumpsum=Math.round(-this.PMT(this.goalsInputValue['expectedReturnsOnInvestment']/12, this.goalsInputValue['enterNumberOfYears']*12, -this.goalsInputValue['enterLumpsumInvestmentAmount'], this.futureValueOfGoal, 1));
  console.log("This is calculation for sip with lumpsum",this.sipWithLumpsum);
}
}



//Method to caculate Future Value
futureValue( i,n,PV){
  var x=(1+i/100)
  var FV=PV*(Math.pow(x,n))
  return FV;
}

// PMT(ROI, numberOfYears, FV, type, enterLumpsumInvestmentAmount?, PV?){
//   var PMT:number=9999;
//   return PMT;
// }

 PMT(rate_per_period, number_of_payments, present_value, future_value, type){
  future_value = typeof future_value !== 'undefined' ? future_value : 0;
  type = typeof type !== 'undefined' ? type : 0;
  rate_per_period = rate_per_period / 100;
if(rate_per_period != 0.0){
  // Interest rate exists
  var q = Math.pow(1 + rate_per_period, number_of_payments);
  return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
} else if(number_of_payments != 0.0){
  // No interest rate, but number of payments exists
  return -(future_value + present_value) / number_of_payments;
}
return 0;
}

findLoanAmount(downPayment, FV){
  let vehicleLoanAmount = (1-downPayment/100)*FV;
  return vehicleLoanAmount;
}

findDownPaymentAmount(downPayment, FV){
  let downPaymentAmount= (downPayment/100 * FV);
  return downPaymentAmount;
}

findCorpusAmount(futureValueOfExpensesInRetirementAge, rateOfReturnPostRetirement ){
  let corpusAmount = futureValueOfExpensesInRetirementAge / rateOfReturnPostRetirement;
  return corpusAmount;
}
}










