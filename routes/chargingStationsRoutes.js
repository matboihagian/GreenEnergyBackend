const express = require('express');
const router = express.Router();
const chargingStationsController = require('../controllers/ChargingStationsController');

// Rota para obter todos os postos de carregamento
router.get('/', chargingStationsController.getChargingStations);

// Rota para criar um novo posto de carregamento
router.post('/', chargingStationsController.createChargingStation);

// Rota para atualizar um posto de carregamento
router.put('/:id', chargingStationsController.updateChargingStation);

// Rota para deletar um posto de carregamento
router.delete('/:id', chargingStationsController.deleteChargingStation);

module.exports = router;
