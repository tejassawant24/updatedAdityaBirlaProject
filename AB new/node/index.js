const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'PracAdityBirla'
})

connection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log('Mysql connected...');
    }
})

//////////// create tables /////////////////////
/////user table///////
let userdetails = `CREATE TABLE IF NOT EXISTS usertable(
    user_id varchar(50) PRIMARY KEY,
    name varchar(20) NOT NULL,
    gender varchar(20) NOT NULL,
    age int(11) NOT NULL,
    maritalStatus varchar(20),
    child varchar(20),
    kids int(11), 
    profession varchar(30) NOT NULL
    )`;

    connection.query(userdetails, function(err, results, fields) {
        if (err) {
            console.log(err);
            
        }
        else{
         console.log("1st table created");   
        }
});

//////goals table/////////
let goals = `CREATE TABLE IF NOT EXISTS tablegoals(
    goal_id int(11) PRIMARY KEY AUTO_INCREMENT,
    goals varchar(30) NOT NULL
)`

    connection.query(goals, function(err,results, fields){
        if(err){
            console.log(err);
        }
        else{
            console.log("2nd table created")
        }
    })

///////// user goals tables//////
let usergoals = `CREATE TABLE IF NOT EXISTS usergoalstable(
    usergoal_id int(11) PRIMARY KEY AUTO_INCREMENT,
    goals varchar(50) NOT NULL,
    goal_id int(11),
    user_id varchar(50),
    FOREIGN KEY(goal_id) REFERENCES tablegoals(goal_id),
    FOREIGN KEY(user_id) REFERENCES usertable(user_id)
)`
connection.query(usergoals, function(err,results, fields){
    if(err){
        console.log(err);
    }
    else{
        console.log("3nd table created")
    }
})

/////////// anser table/////////
let answersgoal = `CREATE TABLE IF NOT EXISTS anstable(
    ans_id int(11) PRIMARY KEY AUTO_INCREMENT,
    user_id varchar(50) ,
    goal_id int(30) ,
    answer1 varchar(50) ,
    answer2 varchar(50) ,
    answer3 varchar(50) ,
    answer4 varchar(50) ,
    answer5 varchar(50) ,
    answer6 varchar(50) ,
    FOREIGN KEY(user_id) REFERENCES usertable(user_id),
    FOREIGN KEY(goal_id) REFERENCES tablegoals(goal_id)
    )`
connection.query(answersgoal, function(err,results, fields){
    if(err){
        console.log(err);
    }
    else{
        console.log("4nd table created")
    }
})

//////////// create tables /////////////////////

///////  store user details and send uuid ///////////////
app.post("/details",function(req,res){
    console.log(req.body);
    let uid = uuidv4();
    let obj = [
        uid,
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.maritalStatus,
        req.body.child,
        req.body.kids,
        req.body.profession
        ]
    connection.query(`INSERT INTO 
                        usertable(user_id,name,gender,age,maritalStatus,child,kids,profession)  
                    VALUES (?)`,
                    [obj],function(error,rows,field){
        if(error){
            throw(error)
        }
        else{
            console.log(uid);
            res.send({userid:uid});
        }
    })
    // connection.end();    
})
///////  store user details and send uuid ///////////////

////////// strore goals ///////////////
let ugoal = [
    ["Self Development"],
    ["Starting Business"],
    ["Bike"],
    ["Marriage"],
    ["Honeymoon"],
    ["Wealth Creation"],
    ["Holiday"],
    ["Car"],
    ["Child’s Education"],
    ["Child’s Marriage"],
    ["Follow Passion"],
    ["World Tour"],
    ["Dream Home"],
    ["Retirement"],
    ["Philanthropy"],
]
connection.query("INSERT IGNORE INTO tablegoals(goals) Values ?",[ugoal],function(error,rows,field){
    if(error){
        throw(error);
    }
    else{
        // res.send(rows);
    }
})

////////// strore goals ///////////////

///////// get goals ////////////////////
app.get("/getgoals",function(req,res){
    connection.query(`SELECT 
                        *
                    FROM 
                        tablegoals`,
                        function(err,rows){
        if(err){
            throw(err);
        }
        else{
            res.send({data:rows});
            console.log("getgoal",rows);
        }
        // connection.end();    
    })
})
///////// get goals ////////////////////


////////// strore user goals //////////////////////
app.post("/usergoals",function(req,res){
    console.log(req.body);
    let userid = req.body.user_id;
    console.log(userid);
    let user_goal = req.body.selectedgoals;
    console.log(user_goal);
    let sqldata = [];
    let othergoal = [];
    for(let i = 0; i< 3; i++){
        let add = [user_goal[i].goal,user_goal[i].goalId,userid];
        let goal = [user_goal[i].goal];
        console.log(user_goal[i].goalId);
        console.log("=",add);
        sqldata.push(add);
        othergoal.push(goal);
    }
    console.log("=>",sqldata);
    connection.query(`INSERT INTO 
                        usergoalstable(goals,goal_id,user_id) 
                    VALUES ?`,
                    [sqldata],function(error,rows,field){
        if(error){
            throw(error);
        }
        else{
            res.send({user_id:userid});
        }
        })
    // connection.end();
})
////////// strore user goals //////////////////////

///////////// get user goals filter by uuid /////////////////////
app.get("/getusergoal/:id",function(req,res){
    let urid = req.params.id;
    console.log("userid",urid);
    connection.query(`SELECT usertable.user_id, usertable.name,usertable.age,usergoalstable.goal_id,usergoalstable.goals,                   usergoalstable.user_id 
                    FROM 
                       usertable 
                    INNER JOIN 
                       usergoalstable
                    ON 
                    usertable.user_id = usergoalstable.user_id AND usertable.user_id="${urid}"`,function(err,rows){
        if(err){
            throw(err);
        } 
        else{
            // console.log(rows);
            res.send(rows);
        }
    
    })
})
///////////// get user goals filter by uuid /////////////////////

/////////////store user answers //////////////////////
app.post("/goalsanswer",function(req,res){
    let userid = req.body.user_id;
    let dtails_goal = req.body.goal_details;
    let answers = req.body.goal_details[0].answer[0];
    console.log("answers",answers);
    let ansdata = [];
    for(let i = 0; i< 3; i++){
            let answers1 = req.body.goal_details[i].answer[0].answer1;
            console.log(answers1);
            let answers2 = req.body.goal_details[i].answer[0].answer2;
            console.log(answers2);
            let answers3 = req.body.goal_details[i].answer[0].answer3;
            console.log(answers3);
            let answers4 = req.body.goal_details[i].answer[0].answer4;
            console.log(answers4);
            let answers5 = req.body.goal_details[i].answer[0].answer5;
            console.log(answers5);
            let answers6 = req.body.goal_details[i].answer[0].answer6;
            console.log(answers6);
        let data = [userid,dtails_goal[i].goal_id,answers1,answers2,answers3,answers4,answers5,answers6];
        ansdata.push(data);
        console.log("=>",ansdata);
    }
    connection.query(`INSERT INTO 
                        anstable(user_id,goal_id,answer1,answer2,answer3,answer4,answer5,answer6)
                     VALUES ?`,
                     [ansdata],function(error,rows,field){
        if(error){
            throw(error);
        }
        else{
            res.send({data:userid});
        }
            // connection.end();
    })
})
/////////////store user answers //////////////////////

///////////// get answers /////////////////
app.get("/getanswers/:id",function(req,res){
    let urid = req.params.id;
    connection.query(`SELECT 
                        * 
                    FROM 
                        anstable 
                    WHERE 
                        user_id = ?`,
                    [urid],function(err,rows){
        if(err){
            throw(err);
        }
        else{
            res.send({result:rows});
        }
    })
    connection.end();
})
//////////// get answers //////////////////

app.listen(3200);
