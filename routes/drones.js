const express = require('express');
const { findByIdAndUpdate } = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
    try {
      const dronesDB = await Drone.find({});
      res.status(200).render('./drones/list', {dronesDB});
    } catch (error) {
      console.error(error);
      next(error);
    }
});

router.get('/drones/create', async (req, res, next) => {
  try {
    res.status(200).render('./drones/create-form');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/drones/create', async (req, res, next) => {
  try {
    const {name, propellers, maxSpeed} = req.body
    await Drone.create({name, propellers, maxSpeed});
    res.status(200).redirect('/drones');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  const { droneId } = req.params;
  try {
    const drone = await Drone.findById(droneId);
    res.status(200).render('./drones/update-form', drone);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  try {
    const {droneId} = req.params;
    const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed});
    res.status(200).redirect('/drones');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  try {
    const { droneId } = req.params;
    await Drone.findByIdAndDelete(droneId);
    res.status(200).redirect('/drones');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
