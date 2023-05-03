export {}

const express = require('express')

const {
    handleTest
} = require('../controllers/user.controller')

const router = express.Router();

router.get("/", handleTest)

module.exports = { testRouter: router }