[
    {"angular":"input to node for user details"},
    {
    "name":"Tejas",
    "gender":"Male",
    "age":24,
    "maritalStatus":"Married",
    "child":"Yes",
    "kids":3,
    "profession":"Salaried"
},

{"response from details":"23ec994d-6594-4a90-a3af-fd703070949f"},
{"response from details":"debf7f3c-3723-4b06-9f07-b51aee5341af"},

    {"angular":"Input for user goals"},
    {
	"user_id":"23ec994d-6594-4a90-a3af-fd703070949f",
	 "selectedgoals":[
					{"goal_id":"1","goal":"Retirement"},
					{"goal_id":"2","goal":"Holiday"},
					{"goal_id":"5","goal":"Car"},
					{"goal_id":"8","goal":"Starting Business"}
					]
    },

    {"node":"getusergoal to the front end with params id"},
        {
            "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
            "name": "Srushti",
            "age": 22,
            "goal_id": 1,
            "goals": "Retirement"
        },
        {
            "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
            "name": "Srushti",
            "age": 22,
            "goal_id": 2,
            "goals": "Holiday"
        },
        {
            "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
            "name": "Srushti",
            "age": 22,
            "goal_id": 5,
            "goals": "Car"
        },

        {"angualr":"inputs for usergoal answer"},
        {
        "user_id":"debf7f3c-3723-4b06-9f07-b51aee5341af",
        "goal_details":[
                        {"goal_id":1,
                        "answer":[{"answer1":"asdc","answer2":2,"answer3":3,"answer4":4,"answer5":1,"answer6":6}
                                            ]
                        },
                        {"goal_id":2,
                            "answer":[{"answer1":1,"answer2":2,"answer3":3,"answer4":4,"answer5":1,"answer6":6}
                                    ]
                        },
                        {"goal_id":3,
                            "answer":[{"answer1":1,"answer2":2,"answer3":3,"answer4":4,"answer5":1,"answer6":6}
                            ]
                        }
                        ] 					
        },


        {"node":"get answer from usergoals"},
        {
        "result": [
                {
                    "ans_id": 17,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 1,
                    "answer1": "asdc",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                },
                {
                    "ans_id": 18,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 2,
                    "answer1": "1",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                },
                {
                    "ans_id": 19,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 3,
                    "answer1": "1",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                },
                {
                    "ans_id": 20,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 1,
                    "answer1": "asdc",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                },
                {
                    "ans_id": 21,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 2,
                    "answer1": "1",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                },
                {
                    "ans_id": 22,
                    "user_id": "debf7f3c-3723-4b06-9f07-b51aee5341af",
                    "goal_id": 3,
                    "answer1": "1",
                    "answer2": "2",
                    "answer3": "3",
                    "answer4": "4",
                    "answer5": "1",
                    "answer6": "6"
                }
            ]
        }
        
]
