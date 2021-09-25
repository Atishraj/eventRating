var express = require('express');
var cors = require('cors');
var mysql = require('mysql')
var bodyparser = require('body-parser');
const { json } = require('body-parser');
var app = express();


app.use(cors());
app.use(bodyparser.json());

var sql = mysql.createConnection({ host: "localhost", user: "root", password: "atishraj", database: "events" });
var ev_no= 2;
app.post("/", function(request, response) {
var eventname=request.body.eventname;
var date=request.body.date

    sql.query("insert into eventc(ev_no,ev_name,ev_date) values(?,?,?)",[ev_no +1,eventname,date], (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        
        console.log(res);
    });

});

app.get("/data",function(request,response){
    sql.query("select*from eventc",(err,res)=>{
        if(err){
            console.log("error:" ,err);
            return;
        }
        console.log(res);
    })
})






app.listen(9898, function() {
    console.log("server is running , access using http://localhost:9898/, to stop hit ctrl-c");
});

