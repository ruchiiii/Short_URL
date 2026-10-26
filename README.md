**Short URL**

A simple URL shortener built with Node.js, Express, EJS, and MongoDB. Paste a long link, get a short one, and visit it to be redirected.

**Features**

Shorten any long URL
Redirect from the short link to the original URL

**Tech Stack**  

Node.js and Express: server and routing  
EJS: server-side HTML templates  
MongoDB with Mongoose: data storage  

**Getting Started**  

**Prerequisites**  

Node.js (v18 or later)  
MongoDB (local install or MongoDB Atlas)  

**Installation**  
```
git clone https://github.com/<your-username>/<your-repo>.git  
cd <your-repo>  
npm install  
```
Create a .env file in the project root:

PORT=3000  
MONGO_URI=mongodb://localhost:27017/shorturl  
BASE_URL=http://localhost:3000  
Run the App  
```
npm start  
```
Open http://localhost:3000 in your browser.

**Project Structure**  

```
├── controllers/   # main logic
├── models/        # Mongoose schemas
├── routes/        # Express routes
├── views/         # EJS templates
├── public/        # Static files (CSS, JS)
├── index.js       # App entry point
└── .env           # Environment variables (not committed)
```

**How It Works**    

The user submits a long URL in the form.  
The server generates a unique short code and saves it in MongoDB.  
Visiting BASE_URL/url/<shortCode> looks up the original URL, increases the click count, and redirects.  
