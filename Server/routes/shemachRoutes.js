const express = require('express')
const router = express.Router()
const {
  getShemach,
  setShemach,
  updateShemach,
  deleteShemach,
} = require('../controllers/shemachController')

router.route('/').get(getShemach).post(setShemach)
router.route('/:id').delete(deleteShemach).put(updateShemach)

module.exports = router