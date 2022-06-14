const asyncHandler = require('express-async-handler')

// @desc    Get shemachs
// @route   GET /shemachs
// @access  Private
const getShemach = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get shemachs' })
})

// @desc    Set shemach
// @route   POST /shemachs
// @access  Private
const setShemach = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Set goal' })
})

// @desc    Update shemach
// @route   PUT /shemach/:id
// @access  Private
const updateShemach = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update shemach ${req.params.id}` })
})

// @desc    Delete shemach
// @route   DELETE /shemach/:id
// @access  Private
const deleteShemach = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete shemach ${req.params.id}` })
})

module.exports = {
  getShemach,
  setShemach,
  updateShemach,
  deleteShemach,
}