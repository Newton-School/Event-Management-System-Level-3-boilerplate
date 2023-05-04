const express = require('express');
const router = express.Router();
const Event = require('../models/eventmodel');
const Invitee = require('../models/eventInviteeMapping');
const jwt = require('jsonwebtoken');

//Creating a new Event
const createEvent = async (req, res) => {
  try {
    //write your code here for creating a event
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Inviting Users to a Event
const inviteUser = async (req, res) => {
  try {
    //Write a code here for inviting a user to a event
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const updateEvent = async (req, res) => {
  try {
    //write a code here for updating the event
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { createEvent, inviteUser, updateEvent };
