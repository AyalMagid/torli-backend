const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { getUser,getOwner, getUsers, addUser, updateUser, removeUser } = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/:phone', getUser);
// routim
router.get('/owner/:workPlace', getOwner);
router.get('/workPlace/:workPlace', getUsers);
// router.get('/', getUsers);
router.post('/', addUser);
router.put('/', updateUser);
router.delete('/:id', removeUser);

module.exports = router


