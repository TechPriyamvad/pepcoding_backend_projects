import Mongoose from "mongoose";
// import DATABASE_CONNECTION_URL from "./secrets";

/* Database configuration */
Mongoose.connect(
  "mongodb+srv://Fte8MvOoqNh9Iw9J:Fte8MvOoqNh9Iw9J@cluster0.ivcam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
  .then(function (db) {
    console.log(db);
  })
  .catch(function (err) {
    console.log("err", err);
  });

/* Structure of database/Schema */
const planSchema = new Mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    meals: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
  
  /* Collections ko create */
  const planModel = Mongoose.model("plans", planSchema);
  
  /* Data send to database */
  (async function createPlan() {
    let plan = {
      name: "Priyamvad",
      ratings: 7,
      price: 100,
      meals: 3,
      description: "vvvvvvvvvv",
    };
  
    let planCreate = await planModel.create(plan)
    console.log("plan--->", planCreate);
  })();