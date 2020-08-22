const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')
const { sendEmail } = require("./routes/api/nodeMailer")

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
app.use(express.static('public'))
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  //   app.get('*', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  // });
}

app.post("/api/sendMail", (req, res) => {
  console.log(req.body);

  sendEmail(req.body.email, req.body.name, "thanks");

});

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/avrentals",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
;

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});