// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGODB_URI = "mongodb://localhost:27017/lab-express-drones";
mongoose.set('strictQuery', true);

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const connectBD = async () => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Seed DB connected");
      await Drone.deleteMany({});
      const seedDB = await Drone.insertMany(drones);
      console.log(`Seed created, ${seedDB.length} drones created`);
      await mongoose.connection.close();
    } catch (err) {
      console.error(err);
    }
  };
  
  connectBD();