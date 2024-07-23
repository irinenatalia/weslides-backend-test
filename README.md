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

Edit the DB connection detail in database/index.js. You can create your own .env file containing:
- host, 
- user, 
- password,
- database

## How to fetch submitted data

1. To fetch all contact data, run _https://nodejs-mysql-api-17bi.onrender.com/api/v1/contacts_ on your browser or Postman