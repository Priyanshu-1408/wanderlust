// models/User.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema
const listingSchema = new Schema({
  title: {
    type :String,
    required : true,
  },
  description: String,
  image: {
    filename: String,
        url: String,
    // type: String,
    
    // default :
    // "https://unsplash.com/photos/sunset-over-the-water-with-grasses-in-the-foreground-pi9UmWpTId0",
    // set: (v) => v === "" ? "https://unsplash.com/photos/sunset-over-the-water-with-grasses-in-the-foreground-pi9UmWpTId0" : v,
  },
  price : Number,
  location : String,
  country : String,
});

// Create the model
const Listing = mongoose.model("Listing", listingSchema);

// Export the model
module.exports = Listing;