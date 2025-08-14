import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// اتصال به دیتابیس
const db = new pg.Client({
  user: "postgres",  // مطمئن شو اسمت درست نوشته شده، تو کدت postgers اشتباه بود
  host: "localhost",
  database: "world",
  password: "246819964",
  port: 5432
});

db.connect();

let score = 0;
let currentQuestion = {};

// تنظیمات EJS و فایل‌های استاتیک
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// گرفتن یک سوال تصادفی
async function getRandomQuestion() {
  const result = await db.query("SELECT * FROM capitals ORDER BY RANDOM() LIMIT 1");
  return result.rows[0];
}

// صفحه اصلی
app.get("/", async (req, res) => {
  currentQuestion = await getRandomQuestion();
  res.render("index", { country: currentQuestion.country, score });
});

// بررسی پاسخ
app.post("/answer", (req, res) => {
  const userAnswer = req.body.capital.trim().toLowerCase();
  const correctAnswer = currentQuestion.capital.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    res.render("result", { correct: true, correctAnswer: currentQuestion.capital, score });
  } else {
    res.render("result", { correct: false, correctAnswer: currentQuestion.capital, score });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
