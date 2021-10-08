# rock-paper-scissor


TechStack:Reactjs,SCSS,React-router-dom 
Other things used : Prettier, ESlint

Component Breaking :
- Header.js- Where we  will diplay our header
- Play.js -Provides 3 choices
- Game.js -Display results



## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```
Backend -
Although i planned to implement backend using mongodb and express but couldnot implement it due to time constraint. Here is how i planned to implement it :
- The mongodb schema will be as follows :
   - Username:string req:true
   - Password:string req:true
   - score:array of numbers
- The express api will have following methods:
   - signup 
   - login
   - rank 
   - logout
   - Score update: It will represent the score of all the matches the user has played
Storing a single score is of no use because which user will revisit the games to continue his previous game.
- Also we will use protected routes for signin/signup
- passport.js for authentication 
