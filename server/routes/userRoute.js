const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// GET all data
router.get('/users', async (req, res) => {
  try {
    const allUserData = await userModel.find();
    res.json(allUserData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// POST new data
router.post('/users', async (req, res) => {
  const newUserData = new userModel(req.body);
  try {
    const saveUserData = await newUserData.save();
    res.json(saveUserData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// PUT update data
router.put('/users/:id', async (req, res) => {
  try {
    const updateUserData = await userModel.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updateUserData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// DELETE data
router.delete('/users/:id', async (req, res) => {
  try {
    const removeUserData = await userModel.deleteOne({ _id: req.params.id });
    res.json(removeUserData);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;