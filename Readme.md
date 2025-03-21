For Frontend

1. cd frontend
2. npm i
3. npm run dev
4. Go to http://localhost:5173/

For backend

1. cd backend
2. npm i
3. npm run migrate
4. change .env.example to .env
5. and change the db password and user name to you local mysql password and username
6. npm run dev
7. Go to http://localhost:5000/users

Backend architecture:

1. Used Middleware and express-async-errors to handle error in controllers instead of manually using trycatch block
2. Used logger for Internal server error and custom error handler for user specific error
