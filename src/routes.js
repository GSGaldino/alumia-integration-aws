// Load the SDK and UUID
const AWS = require('aws-sdk')
const uuid = require('node-uuid');
const routes = require('express').Router();
const getCostAndUsageController = require('./controllers/getCostAndUsageController');


routes.get('/', getCostAndUsageController.index);

module.exports = routes
