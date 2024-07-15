const express = require('express');
const router = express.Router();
const garageController = require('../controllers/garageController');
const auth = require('../middlewares/auth');

// Garage Routes
router.post('/', auth, garageController.createGarage);
router.get('/', garageController.getAllGarages);
router.get('/:id', garageController.getGarageById);
router.put('/:id', auth, garageController.updateGarage);
router.delete('/:id', auth, garageController.deleteGarage);

module.exports = router;
