import { Component, OnInit } from '@angular/core';
import{Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
public selfDevelopmentForm:FormGroup;
public startingBusinessForm:FormGroup;
public bikeForm:FormGroup;
public marriageForm:FormGroup;
public honeyMoonForm:FormGroup;
public wealthCreationForm:FormGroup;
public holidayForm:FormGroup;
public carForm:FormGroup;
public childEducationForm:FormGroup;
public childMarriageForm:FormGroup;
public followPassionForm:FormGroup;
public worldTourForm:FormGroup;
public dreamHomeForm:FormGroup;
public retirementForm:FormGroup;
public philantropyForm:FormGroup;
public addAnotherGoal:FormGroup;

//Other variables 
public goalQuestion:Array<Object> = []

  constructor(private fb:FormBuilder) { }

  ngOnInit() :void {

    this.callJsonGoalArray()

    this.selfDevelopmentForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.startingBusinessForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
      
    });

    this.marriageForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
      
    });

    this.honeyMoonForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
      
    });
    
    this.wealthCreationForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.holidayForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
    });

    this.worldTourForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
      
    });

    this.followPassionForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
    });

    this.philantropyForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
    });


    this.bikeForm=this.fb.group({
      'enterAmount':[['', [Validators.required]]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'loanFunding':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

   

    this.carForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'loanFunding':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.dreamHomeForm=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'loanFunding':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.childEducationForm=this.fb.group({
       'enterChildName':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'enterAmount':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.childMarriageForm=this.fb.group({
      'enterChildName':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'enterAmount':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.retirementForm=this.fb.group({
      'currentAge':['', [Validators.required]],
      'enterAmount':['', [Validators.required]],
      'enterRetirementAge':['', [Validators.required]],
      'expectedInflationBeforeRetiremnet':['', [Validators.required]],
      'rateOfReturnBeforeRetirement':['', [Validators.required]],
      'rateOfReturnPostRetirement':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]],
    });

    this.addAnotherGoal=this.fb.group({
      'enterAmount':['', [Validators.required]],
      'enterNumberOfYears':['', [Validators.required]],
      'expectedInflation':['', [Validators.required]],
      'expectedReturnsOnInvestment':['', [Validators.required]],
      'enterLumpsumInvestmentAmount':['', [Validators.required]]
    });

  }


  callJsonGoalArray(){

    // this.goalQuestion = [  

    //   {
    //     "type": "Self Development",
    //     "questions": [
    //       { 
    //       "name": "What amount is required for your self development goal today?", 
    //       "variableName":"enterAmount",
    //       },
    //       { 
    //       "name": "After how many years do you plan to take up your self development goal?", 
    //       "variableName":"enterNumberOfYears","options":this.number
    //      },
    //       { 
    //         "name": "Expected inflation (% p.a.)", 
    //         "options":this.percent, 
    //         "variableName":"expectedInflation"
    //       },
    //       { 
    //         "name": "Expected returns on investment (% p.a.)", 
    //         "options":this.percent5,
    //         "variableName":"expectedReturnsOnInvestment"
    //       },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?" , 
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //      "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
      
    //   }, 
    //   {
    //     "type": "Starting Business",
    //     "questions": [
    //       { 
    //         "name": "Amount required to start your Business today",  
    //         "variableName":"enterAmount" 
    //       },
    //       { 
    //         "name": "After how many years do you plan to start your Business?", 
    //         "options":this.number,  
    //         "variableName":"enterNumberOfYears"
    //       },        
    //       {
    //         "name": "Expected inflation (% per annum)", 
    //         "options":this.percent,  
    //         "variableName":"expectedInflation" 
    //       },
    //       { 
    //         "name": "Expected returns on investment (% per annum)",
    //         "options":this.percent5, 
    //         "variableName":"expectedReturnsOnInvestment"
    //       },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
  
  
    //   }, 
    //   {
    //     "type": "Marriage",
    //     "questions": [
    //       {
    //         "name": "What amount you would require to get married today?",
    //         "variableName":"enterAmount" 
    //       },
    //       { 
    //         "name": "After how many years do you plan to get married?", 
    //         "options":this.number,"fname":"Enter number of years",
    //         "variableName":"enterNumberOfYears"
    //       },
    //       { 
    //         "name": "Expected inflation (% per annum)", 
    //         "options":this.percent,
    //         "variableName":"expectedInflation" 
    //       },
    //       { 
    //         "name": "Expected returns on investment (% per annum)",
    //         "options":this.percent5,
    //         "variableName":"expectedReturnsOnInvestment"
    //       },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       },
    //     ],
    //     "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
  
  
    //   }, {
    //     "type": "Honeymoon",
    //     "questions": [
    //       {
    //         "name": "What amount is required to visit your honeymoon destination today?",
    //         "variableName":"enterAmount" 
    //       },
    //       { 
    //         "name": "After how many years do you plan to visit your honeymoon destination?",
    //         "options":this.number ,
    //         "variableName":"enterNumberOfYears"
          
    //       },
    //       { 
    //         "name": "Expected inflation (% p.a.)", 
    //         "options":this.percent,
    //         "variableName":"expectedInflation" 
  
    //       },
    //       { "name": "Expected returns on investment (% p.a.)", 
    //       "options":this.percent5 ,
    //       "variableName":"expectedReturnsOnInvestment"
        
    //      },
    //       {
    //          "name": "hat amount you can invest today as Lumspum?",
    //          "variableName":"enterLumpsumInvestmentAmount"
             
    //      }
    //     ],
    //     "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
  
    //   }, 
    //   {
    //     "type": "Wealth Creation",
    //     "questions": [
    //       {
    //          "name": "How much wealth do you wish you accumulate?" ,
    //          "variableName":"enterAmount" 
            
    //       },
    //       {
    //         "name": "After how many years do you plan to own this wealth?",
    //          "options":this.number ,
    //          "variableName":"enterNumberOfYears"
    //       },
    //       { 
    //         "name": "Expected returns on investment (% p.a.)",
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment"
    //       },
    //       { 
    //         "name": "Enter the savings you wish to invest for wealth creation?",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
  
    //     "description": `Hi ${this.userName} for Car of ₹ ${this.goalsInputValue['enterAmount']} after ${this.goalsInputValue['enterNumberOfYears']} years you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} over next  ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of ₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 5,000,000 	If less than 50 lakh, at no additional cost.`
  
    //   }, {
    //     "type": "Holiday",
    //     "questions": [
    //       { 
    //         "name": "Enter the amount required to visit your holiday destination today?",
    //         "variableName":"enterAmount" 
          
    //       },
    //       { "name": "After how many years do you plan to visit your holiday destination?",
    //        "options":this.number ,
    //        "variableName":"enterNumberOfYears"
          
    //       },
    //       {
    //          "name": "Expected inflation (% p.a.)",
    //           "options":this.percent,
    //           "variableName":"expectedInflation"   
    //         },
    //       {
    //          "name": "Expected returns on investment (% p.a.)",
    //           "options":this.percent5,
    //           "variableName":"expectedReturnsOnInvestment" 
            
    //         },
    //       {
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
  
  
    //   }, 
    //   {
    //     "type": "World Tour",
    //     "questions": [
    //       {
    //          "name": "What's the current cost of going on a World Tour?",
    //          "variableName":"enterAmount" 
            
    //         },
    //       { 
    //         "name": "After how many years do you plan to go for a World Tour?",
    //          "options":this.number ,
    //          "variableName":"enterNumberOfYears"
            
    //         },
    //       { 
    //         "name": "Expected inflation (% p.a.)",
    //          "options":this.percent,
    //          "variableName":"expectedInflation"
            
    //         },
    //       {
    //          "name": "Expected returns on investment (% p.a.)", 
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment" 
    //         },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
          
    //       }
    //     ],
    //     "description": `Hi 	${this.userName} 	Get it from user entry form for 	Honeymoon after 	6 	years you would require 	₹ 3,350,239 	
    //     To fund the same, you need to start a monthly SIP of 	₹ 31,679 	
    //     over next 	6 	years As you are investing 	₹ 700,000 	
    //     as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ 18,129 What's more, if you opt for the CSIP* facility, you can get a life insurance cover upto Rs. 	₹ 1,812,900 	If less than 50 lakh, at no additional cost.`
  
  
    //   },
    //    {
    //     "type": "Follow Passion",
    //     "questions": [
    //       {
    //          "name": "What's the current cost of activity (passion) you want to pursue?",
    //          "variableName":"enterAmount" 
            
    //         },
    //       {
    //          "name": "After how many years do you plan to pursue your passion?",
    //           "options":this.number ,
    //           "variableName":"enterNumberOfYears"
            
    //         },
    //       {
    //          "name": "Expected inflation (% p.a.)",
    //           "options":this.percent,
    //           "variableName":"expectedInflation"
    //         },
    //       {
    //          "name": "Expected returns on investment (% p.a.)",
    //        "options":this.percent5,
    //        "variableName":"expectedReturnsOnInvestment" 
          
    //       },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
        
    //     }
    //     ],
    //     "description":  `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
          
  
    //   }, {
    //     "type": "Philanthropy",
    //     "questions": [
    //       {
    //          "name": "What amount you would liked to contribute today, if you were to donate today?	",
    //          "variableName":"enterAmount"  
            
    //         },
    //       {
    //          "name": "After how many years do you plan to contribute for the donation?",
    //           "options":this.number,
    //           "variableName":"enterNumberOfYears"
            
    //         },
    //       { 
    //         "name": "Expected inflation (% p.a.)",
    //          "options":this.percent,
    //          "variableName":"expectedInflation"
            
    //         },
    //       { 
    //         "name": "Expected returns on investment (% p.a.)",
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       { 
    //         "name": "What amount you can invest today as Lumspum?	",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description": `Hi 	${this.userName}  for Starting Business after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfStartingBusiness} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`
         
  
    //   }, 
    //   {
    //     "type": "Bike",
    //     "questions": [
    //       {
    //          "name": "What is the cost of Bike today?",
    //          "variableName":"enterAmount" 
            
    //         },
    //       {
    //          "name": "After how many years do you plan to buy the bike?",
    //           "options":this.number,
    //           "variableName":"enterNumberOfYears"
    //         },
    //       {
    //          "name": "Expected inflation (% p.a.)",
    //           "options":this.percent,
    //           "variableName":"expectedInflation"
    //         },
    //       { 
    //         "name": "Bike Loan funding (%)",
    //          "options":this.five,
    //          "variableName":"loanFunding"
    //         },
    //       { 
    //         "name": "Expected returns on your investment (% p.a.)",
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       {
    //          "name": "How much can you invest as lumpsum today?",
    //          "variableName":"enterLumpsumInvestmentAmount"
    //         }
    //     ],
    //     "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
          
  
    //   },
    //    {
    //     "type": "Car",
    //     "questions": [
    //       {
    //          "name": "What is the cost of Car today?",
    //          "variableName":"enterAmount" 
    //         },
    //       {
    //          "name": "After how many years do you plan to buy the car?",
    //           "options":this.number ,
    //           "variableName":"enterNumberOfYears"
    //         },
    //       {
    //          "name": "Expected inflation (% p.a.)",
    //           "options":this.percent,
    //           "variableName":"expectedInflation"
    //         },
    //       {
    //          "name": "Car Loan funding (%)",
    //           "options":this.five,
    //           "variableName":"loanFunding"
    //         },
    //       { 
    //         "name": "Expected returns on your investment (% p.a.)",
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       { 
    //         "name": "How much can you invest as lumpsum today?" ,
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
    //   }, 
    //   {
    //     "type": "Dream Home",
    //     "questions": [
    //       { 
    //         "name": "What is the cost of your dream home today?",
    //         "variableName":"enterAmount" 
    //       },
    //       { 
    //         "name": "After how many years do you plan to buy your dream home?", 
    //         "options":this.number,
    //         "variableName":"enterNumberOfYears"
    //       },
    //       { 
    //         "name": "Expected inflation (% p.a.)", 
    //         "options":this.percent, 
    //         "variableName":"expectedInflation"
    //       },
    //       { 
    //         "name": "Dream Home Loan funding (%)",
    //         "options":this.five,
    //         "variableName":"loanFunding"
    //       },
    //       { 
    //         "name": "Expected returns on your investment (% p.a.)",
    //          "options":this.percent5,
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       { 
    //         "name": "How much can you invest as lumpsum today?" ,
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description": `Hi 	${this.userName} after ${this.goalsInputValue['enterNumberOfYears']} years the bike will cost you 	₹ ${this.futureValueOfBike} As you are funding 	20% of the down payment i.e. 	₹ ${this.downPaymentAmount} you would need to start a monthly SIP of 	₹ ${this.sipNoLumpsum} As you are investing 	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto 	₹ 381,384 If less than 50 lakh,at no additional cost.`
  
  
    //   }, 
    //   {
    //     "type": "Childs Education",
    //     "questions": [
    //       { 
    //         "name": "Enter your Child's name",
    //         "variableName":"enterChildName"
    //       },
    //       {
    //          "name": "After how many years does your child wants to go for higher education",
    //           "options":this.number,
    //           "variableName":"enterNumberOfYears"
    //         },
    //       { 
    //         "name": "Enter today's cost to fulfill your child's education",
    //         "variableName":"enterAmount" 
    //       },
    //       {
    //          "name": "Expected inflation (% p.a.)" ,
    //           "options":this.percent,
    //           "variableName":"expectedInflation"
    //         },
    //       { 
    //         "name": "Expected returns on investment (% p.a.)",
    //          "options":this.percent5, 
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       {
    //          "name": "What amount you can invest today as Lumspum?",
    //          "variableName":"enterLumpsumInvestmentAmount"
    //          }
    //     ],
  
    //     "description": `Hi 	${this.userName} for Abhay's Education after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
    //   }, {
    //     "type": "Childs Marriage",
    //     "questions": [
    //       {
    //          "name": "Enter your Child's name",
    //          "variableName":"enterChildName"
    //         },
    //       { 
    //         "name": "Enter the age when your child might get married",
    //          "options":this.number, 
    //          "variableName":"enterNumberOfYears"
    //         },
    //       {
    //          "name": "Enter today's cost for your Child's marriage",
    //          "variableName":"enterAmount" 
    //         },
    //       {
    //          "name": "Expected inflation (% p.a.)",
    //           "options":this.percent,
    //           "variableName":"expectedInflation"
    //         },
    //       {
    //          "name": "Expected returns on investment (% p.a.)",
    //           "options":this.percent5,
    //           "variableName":"expectedReturnsOnInvestment"
    //         },
    //       {
    //         "name": "What amount you can invest today as Lumspum?",
    //         "variableName":"enterLumpsumInvestmentAmount"
          
    //       }
    //     ],
    //     "description": `Hi 	${this.userName} for Abhay's Marriage after ${this.goalsInputValue['enterNumberOfYears']} years you would require	₹ ${this.futureValueOfChildEducation} To fund the same, you need to start a monthly SIP of	₹ ${this.sipNoLumpsum} over next	${this.goalsInputValue['enterNumberOfYears']}	years As you are investing	₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']}	as lumpsum amount today, you can achieve your goal by starting a monthly SIP of	₹ ${this.sipWithLumpsum} What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs.	₹ 1,145,877 at no additional cost` 
  
  
    //   },
    //   {
    //     "type": "Retirement",
    //     "questions": [
    //       { 
    //         "name": "What's your current age?",
    //         "variableName":"currentAge"
    //       },
    //       {
    //          "name": "At what age you plan to retire?",
    //          "options":this.age, 
    //          "variableName":"enterRetirementAge"
    //         },
    //       { 
    //         "name": "What are your current annual expenses?",
    //         "variableName":"enterAmount" 
    //       },
    //       { 
    //         "name": "What is the expected rate of inflation? (Before Retirement)" ,
    //          "options":this.percent,
    //          "variableName":"expectedInflationBeforeRetiremnet"
    //         },
    //       {
    //          "name": "What is the expected rate of return? (Before Retirement)",
    //           "options":this.percent5,
    //           "variableName":"rateOfReturnBeforeRetirement" 
            
    //         },
    //       { 
    //         "name": "What is the expected rate of return on your retirement saving? (Post Retirement)",
    //          "options":this.percent5, 
    //          "variableName":"rateOfReturnPostRetirement" 
    //         },
    //       { 
    //         "name": "How much can you invest as lumpsum today for your retirement?",
    //         "variableName":"enterLumpsumInvestmentAmount"
    //       }
    //     ],
    //     "description": `Hi ${this.userName}, after ${(this.goalsInputValue['enterRetirementAge']-this.goalsInputValue['currentAge'])} years (as you retire), your current annual expenses of ₹ ${this.goalsInputValue['enterAmount']} would swell to ₹ ${this.futureValueOfExpensesInRetirementAge}. To maintain the same lifestyle post retirement, you would need a retirement savings of ₹ ${this.corpusAmount}. If you invest ₹ ${this.goalsInputValue['enterLumpsumInvestmentAmount']} lumpsum today for your retirement, you would need to start a monthly SIP of ₹ ${this.sipWithLumpsum} and continue till you turn ${this.goalsInputValue['currentAge']} . What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 24,16,519 at no additional cost.`
  
  
    //   },
    //   {
    //     "type": "AddOtherGoal",
    //     "questions": [
    //       { 
    //         "name": "What's your Goal?",
    //         "variableName":"goalName"
    //       },
    //       {
    //          "name": "What's the cost to fund your goal today?",
    //          "variableName":"enterAmount" 
    //         },
    //       { 
    //         "name": "After how many years do you wish to achieve this goal?", 
    //         "options":this.number, 
    //         "variableName":"enterNumberOfYears"
    //       },
    //       { 
    //         "name": "What is the expected inflation?" ,
    //          "options":this.percent,
    //          "variableName":"expectedInflation"
    //         },
    //       { 
    //         "name": "Expected returns on investment (% p.a.)",
    //          "options":this.percent5, 
    //          "variableName":"expectedReturnsOnInvestment"
    //         },
    //       {
    //          "name": "Would you like to invest lumpsum amount for your Goal",
    //          "variableName":"enterLumpsumInvestmentAmount"
    //         }
    //     ],
    //     "description": `Hi 	${this.userName}  for Self Development after ${this.goalsInputValue['enterNumberOfYears']} years 	
    //     you would require ₹ ${this.futureValueOfSelfDevelopmentGoal} To fund the same, you need to start a monthly SIP of ₹ ${this.sipNoLumpsum} 	
    //     over next ${this.goalsInputValue['enterNumberOfYears']} years As you are investing ${this.goalsInputValue['enterLumpsumInvestmentAmount']} as lumpsum amount today, you can achieve your goal by starting a monthly SIP of 	₹ ${this.sipWithLumpsum} 	
    //     What's more, if you opt for the CSIP* facility, you can get a life insurance cover of upto Rs. 	₹ 3,662,254 at no additional cost.	`,
  
    //   }
    // ]
  }


}




