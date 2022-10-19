
const express = require('express')
const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')
const router = express.Router()

class signUpRouter {
  async Route (req, res) {
    const { email, password, confirmPassword } = req.body
    if (password === confirmPassword) {
      const user = await AccountModel.create({ email, password })
      return user
    }
  }
}

module.exports = () => {
  router.post('/create', new signUpRouter.Route())
}
