const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    const obj = {
      status: "error",
      message: "Invalid data types"
    };
    res.send(obj);
    return;
  }
  let sum = num1 + num2;
  if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    const obj = {
      status: "error",
      message: "Underflow"
    };
    res.send(obj);
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    const obj = {
      status: "error",
      message: "Overflow"
    };
    res.send(obj);
    return;
  }
  const sumObj = {
    status: "success",
    message: "the sum of given two numbers",
    sum: sum
  };
  res.send(sumObj);
});

app.post("/sub", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    const obj = {
      status: "error",
      message: "Invalid data types"
    };
    res.send(obj);
    return;
  }
  let diff = num1 - num2;
  if (num1 < -1000000 || num2 < -1000000 || diff < -1000000) {
    const obj = {
      status: "error",
      message: "Underflow"
    };
    res.send(obj);
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || diff > 1000000) {
    const obj = {
      status: "error",
      message: "Overflow"
    };
    res.send(obj);
    return;
  }
  const diffObj = {
    status: "success",
    message: "the difference of given two numbers",
    difference: diff
  };
  res.send(diffObj);
});

app.post("/multiply", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    const obj = {
      status: "error",
      message: "Invalid data types"
    };
    res.send(obj);
    return;
  }
  let multiply = num2 * num1;
  if (num1 < -1000000 || num2 < -1000000 || multiply < -1000000) {
    const obj = {
      status: "error",
      message: "Underflow"
    };
    res.send(obj);
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || multiply > 1000000) {
    const obj = {
      status: "error",
      message: "Overflow"
    };
    res.send(obj);
    return;
  }
  const multObj = {
    status: "success",
    message: "The product of given numbers",
    result: multiply
  };
  res.send(multObj);
});

app.post("/divide", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  if (num2 === 0) {
    const obj = {
      status: "error",
      message: "Cannot divide by zero"
    };
    res.send(obj);
    return;
  }
  if (isNaN(num1) || isNaN(num2)) {
    const obj = {
      status: "error",
      message: "Invalid data types"
    };
    res.send(obj);
    return;
  }
  let divide = num1 / num2;
  if (num1 < -1000000 || num2 < -1000000 || divide < -1000000) {
    const obj = {
      status: "error",
      message: "Underflow"
    };
    res.send(obj);
    return;
  }
  if (num1 > 1000000 || num2 > 1000000 || divide > 1000000) {
    const obj = {
      status: "error",
      message: "Overflow"
    };
    res.send(obj);
    return;
  }
  const divObj = {
    status: "success",
    message: "The division of given numbers",
    result: divide
  };
  res.send(divObj);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
