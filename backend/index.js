const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

const loginRoute = require("./Route/loginRoute");
const adminadded = require("./Route/AdminContactRouter");
const logoutRoute = require("./Route/logoutRoute");
const userRoute = require("./Route/userContactRoute");
const serviceRoute=require("./Route/ServiceRoute")
const businessRoute=require("./Route/BusinessRoute")

app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://tamil-roja-frontend-tau.vercel.app",
    "https://tamil-roja-admin.vercel.app",
    "https://admin.tamilroja.in",
    "https://tamilroja.in",
    "https://www.tamilroja.in"
  ],

  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Tamil Roja Website");
});
app.use("/admin", loginRoute);
app.use("/contact", adminadded);
app.use("/admins", logoutRoute);
app.use("/usercontact", userRoute);
app.use("/service", serviceRoute);
app.use("/business", businessRoute);


// MongoDB connection
const mongo_url =
  "mongodb+srv://karthickc726:CIY3n0hxIV0T9LNc@cluster0.itlh1us.mongodb.net/Tamil-roja?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("db connect");
    const port = 8000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("error:" + error);
  });
