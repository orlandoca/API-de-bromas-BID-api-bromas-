const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/bromas_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("establised a connection to the database"))
  .catch((err) =>
    console.log("Somethinh went wrong when connecting to the database ", err)
  );
