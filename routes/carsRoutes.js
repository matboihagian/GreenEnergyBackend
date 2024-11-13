const express = require('express');
const router = express.Router();
const carsController = require('../controllers/CarsController');

// Rota para obter todos os carros
router.get('/', carsController.getCars);

// Rota para criar um novo carro
router.post('/', carsController.createCar);

// Rota para atualizar um carro
router.put('/:id', carsController.updateCar);

// Rota para deletar um carro
router.delete('/:id', carsController.deleteCar);

module.exports = router;