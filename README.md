# 🌍 Country Capitals Quiz Game

A fun and interactive **"Guess the Capital"** game built with **Node.js**, **Express**, **PostgreSQL**, **EJS**, and **CSS**.  
The player sees the name of a country and must guess its capital. If the answer is correct, their score increases.  
This project is styled in a colorful, kid-friendly way to make learning geography fun. 🎯

---

## 📸 Features
- 🎮 Random country questions from a PostgreSQL database
- ✅ Real-time score tracking
- 🎨 Bright and playful CSS design for kids
- 🖥️ Server-side rendering with EJS
- 🗄️ PostgreSQL as the data source

---

## 📂 Project Structure
```
project/
│
├── views/
│   ├── index.ejs      # Main game page
│   └── result.ejs     # Result after answering
│
├── public/
│   └── style.css      # Styles for the game
│
├── app.js             # Express server logic
├── package.json
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/capitals-quiz.git
cd capitals-quiz
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create the PostgreSQL database
1. Open your PostgreSQL client and run:
```sql
CREATE DATABASE world;
```
2. Create the table and insert some data:
```sql
CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    country VARCHAR(100),
    capital VARCHAR(100)
);

INSERT INTO capitals (country, capital) VALUES
('China', 'Beijing'),
('France', 'Paris'),
('Germany', 'Berlin'),
('Japan', 'Tokyo');
```

### 4️⃣ Update database credentials
Edit `app.js` and change:
```js
const db = new pg.Client({
  user: "postgres",      // your PostgreSQL username
  host: "localhost",
  database: "world",
  password: "yourpassword",
  port: 5432
});
```

### 5️⃣ Run the server
```bash
node app.js
```
The game will be available at:
```
http://localhost:3000
```

---

## 🎯 How to Play
1. The game shows you the name of a random country.
2. Type the capital city into the text box.
3. If correct, you get **+1 point**.
4. Continue playing to increase your score!

---

## 📌 Technologies Used
- **Node.js** + **Express** — Backend server
- **PostgreSQL** — Database
- **EJS** — Template engine
- **CSS** — Styling
- **Body-parser** — Form handling

---

## 🚀 Future Improvements
- Add timer for each question
- Add levels of difficulty
- Store high scores for different players
- Use animations or Lottie files for correct/incorrect answers

---

## 👩‍💻 Author
Made with ❤️ by Hanieh
