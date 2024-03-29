const mongoose = require("mongoose");

const userSchema = require("../models/userSchema");
const culturalEventSchema = require("../models/culturalEventSchema");

console.log("Connecting to DB...");
mongoose
  .connect(
    "mongodb+srv://acontece-osorio:acontece-osorio-dev@acontece-osorio.wi9nn.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then((ok) => {
    console.log("Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

const user = mongoose.model("user", userSchema);
const culturalEvent = mongoose.model("culturalEvent", culturalEventSchema);

module.exports = { user, culturalEvent };
