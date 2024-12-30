const express = require("express");
const app = express();
const connectDB = require("./config/db");
const contactsRoutes = require("./routes/contact.routes");
const methodOverride = require("method-override");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/contacts", contactsRoutes);

app.listen(3000, () => {
  console.log("app is listening");
});
