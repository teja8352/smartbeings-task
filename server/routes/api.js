const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('../models/users');

mongoose.Promise = global.Promise;
mongoose.connect(
  config,
  err => {
    if (err) {
      console.log('Error:::\n', err);
    }
  }
);

// Get All Users
router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log('Error over retreving users:::\n', err);
    } else {
      res.json(users);
    }
  });
});

// Insert User
router.post('/user', (req, res) => {
  console.log('Post a User');
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.address = req.body.address;
  newUser.contact = req.body.contact;
  newUser.email = req.body.email;
  newUser.save((err, insertUser) => {
    if (err) {
      console.log('Error saving user');
    } else {
      res.json(insertUser);
    }
  });
});

// Update User By Id
router.put('/user/:id', (req, res) => {
  console.log('update a User');
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username: req.body.username,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
      },
    },
    {
      new: true,
    },
    (err, updateUser) => {
      if (err) {
        console.log('Error updating a user:::\n', err);
      } else {
        res.json(updateUser);
      }
    }
  );
});

// Delete User By ID
router.delete('/user/:id', (req, res) => {
  console.log('Delete a User');
  User.findByIdAndRemove(req.params.id, (err, deleteUser) => {
    if (err) {
      console.log('Error while deletinig a user:::', err);
    } else {
      res.json(deleteUser);
    }
  });
});

module.exports = router;
