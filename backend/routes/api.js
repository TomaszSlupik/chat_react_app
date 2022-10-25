const express = require('express')
const router = express.Router()

const UserActions = require('../actions/api/usersActions')


// Pobieranie użytkowników:
router.get('/users', UserActions.getAllUser)


router.get('/users/:id', UserActions.getUser)


router.post('/users', UserActions.addUser)

router.put('/users/:id', UserActions.putUser)


router.delete('/users/:id', UserActions.deleteUser)

module.exports = router