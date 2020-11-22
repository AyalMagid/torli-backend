const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { getUser, getUsers, addUser, updateUser, removeUser } = require('./user.controller')
// getOwner
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/:phone', getUser);
// routim
// router.get('user/owner/:workPlace', getOwner);
// router.get('user/workPlace/:workPlace', getUsers);
router.get('/', getUsers);
router.post('/', addUser);
router.put('/', updateUser);
router.delete('/:id', removeUser);

module.exports = router


