import pg from "pg";

const db = new pg.Client({
    user: "postgers",
    host: "localhost",
    database: "world",
    password: "246819964",
    port: 5432
})

db.connect();

db.query("SELECT * FROM capitals", (err, res)=>{
    if (err) {
        console.log(err.stack)
    }else{
        quiz = res.rows;
    }
    db.end();
})