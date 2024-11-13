const db = require('../db/database');

// Obter todos os carros
exports.getCars = (req, res) => {
  db.all(`SELECT * FROM cars`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Criar um novo carro
exports.createCar = (req, res) => {
  const { ownerId, make, model, year } = req.body;
  db.run(
    `INSERT INTO cars (ownerId, make, model, year) VALUES (?, ?, ?, ?)`,
    [ownerId, make, model, year],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};

// Atualizar carro
exports.updateCar = (req, res) => {
  const { id } = req.params;
  const { make, model, year } = req.body;

  db.run(
    `UPDATE cars SET make = ?, model = ?, year = ? WHERE id = ?`,
    [make, model, year, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Carro atualizado com sucesso' });
    }
  );
};

// Deletar carro
exports.deleteCar = (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM cars WHERE id = ?`, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Carro deletado com sucesso' });
  });
};
