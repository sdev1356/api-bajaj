const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const username = "devashish_26022001";
const email = "devashish1143.cse19@chitkara.edu.in";
const rollNo = "1910991143";

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/bfhl", async (req, res) => {
  const details = {};
  const number = [];
  const alphabet = [];
  try {
    const body = await req.body;

    const detail = body.data;
    for (const d of detail) {
      if (parseInt(d)) {
        number.push(d);
      } else {
        alphabet.push(d);
      }
    }
const is_success=true;
    details["is_sucess"]=is_success;
    details["email"] = email;
    details["user_id"] = username;
    details["roll_number"] = rollNo;
    details["number"] = number;
    details["alphabet"] = alphabet;
    
    res.send(details);
  } catch (error) {
      const is_success=false
      res.send(`is_success${is_success}`)
  }
});

app.listen(port, () => console.log(`app listening on port ${port}!`));