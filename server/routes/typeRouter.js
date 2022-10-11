const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRoleMidleware = require('../middleware/authMiddleware')

router.post('/', checkRoleMidleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router
