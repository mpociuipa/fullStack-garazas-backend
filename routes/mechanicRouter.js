const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');
const auth = require('../middlewares/auth');

// Mechanic Routes
router.post('/', auth, mechanicController.createMechanic);
router.get('/', mechanicController.getAllMechanics);
router.get('/:id', mechanicController.getMechanicById);
router.put('/:id', auth, mechanicController.updateMechanic);
router.delete('/:id', auth, mechanicController.deleteMechanic);
router.post('/:id/rate', mechanicController.rateMechanic);

module.exports = router;
