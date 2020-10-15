const express = require('express');
const fs = require('fs');

const app = express();

fs.readFile("./santa.txt", (err, data) => {
  let counter = 0;
  
  if (err) {
    console.log(err);
  } else {
    string = data.toString();
    [...string].forEach(letter => {
      if (letter === "(") {
        counter++;
      } else if (letter === ")") {
        counter--;
      }
    });
  }
  console.log(counter);
});

app.listen(3000)