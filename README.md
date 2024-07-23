# WeSlides Fullstack Assessment: Backend
 
# Intro

This is the backend code written in node.js (Express) and using remote MySQL database.

## Setup locally

Install
```bash
npm install
```

Then run the server
```bash
node index.js
```

## Other setup

1. Create a table called **contact** , check migration.sql for table migration detail

2. Edit the DB connection detail in database/index.js. You can create your own .env file containing:
- host, 
- user, 
- password,
- database

## How to fetch submitted data

1. To fetch sample contact data, you can run _https://nodejs-mysql-api-17bi.onrender.com/api/v1/contact_ on your browser or Postman (hosted by me), or
2. On your local server, run _https://localhost:8080/api/v1/contact_
