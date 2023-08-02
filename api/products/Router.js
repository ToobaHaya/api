const app = require('express')
const router = app.Router()
const { Productbybrand, postProducts ,Productbycategory ,updateproduct , deleteproduct  } = require('./Controller')

router.get('/productsbybrand/:brand', Productbybrand)
router.get('/Productbycategory/:category', Productbycategory)
router.post('/products', postProducts)
router.update('/updateproduct/:_id', updateproduct)
router.delete('/deleteproduct/:_id', deleteproduct)


module.exports = router