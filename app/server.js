const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: '*' 
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to yasminvo application." });
// });

require("./routes/user.routes")(app);

// set port, listen for requests
const PORT = 9000;
app.listen(PORT ,() => {
  console.log(`Server is running on port ${PORT}.`);
});
