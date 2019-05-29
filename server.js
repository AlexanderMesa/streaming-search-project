const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("./client/build"));

require("./routes/index.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Database
//if deployed, use the deployed database, otherwise use local database
let db =
  process.env.MONGODB_URI ||
  "mongodb://streamingApp:password1@ds261626.mlab.com:61626/heroku_zwdn7js7" ||
  "mongodb://localhost/streamingApp";

//connect mongoose to database
mongoose.connect(db, error => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Mongoose connection successful");
  }
});

//-----------------------------------------------
//Server
//Listen to port

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
