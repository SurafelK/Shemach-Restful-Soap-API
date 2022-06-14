const asyncHandler = require('express-async-handler')

// @desc    Get Products
// @route   GET /Products
// @access  Private
const getProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get shemachs' })
})

// @desc    Set Product
// @route   POST /Product
// @access  Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({ message: 'Set goal' })
})

// @desc    Update Product
// @route   PUT /Product/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Product ${req.params.id}` })
})

// @desc    Delete shemach
// @route   DELETE /shemach/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Product ${req.params.id}` })
})

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
}