const express = require('express')
const { dashboardHomepage, dashboardReport, dashboardConfig, indexHomepage, indexCreatorAccount, indexPasswordLost } = require('../controllers/pageControllers')
const router = express.Router()

router.get('/', indexHomepage)
router.get('/account', indexCreatorAccount)
router.get('/password', indexPasswordLost)
router.get('/home', dashboardHomepage)
router.get('/report', dashboardReport)
router.get('/config', dashboardConfig)

module.exports = { routes: router }