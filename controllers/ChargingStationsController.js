const db = require('../db/database');

// Obter todos os postos de carregamento
exports.getChargingStations = (req, res) => {
  db.all(`SELECT * FROM charging_stations`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Criar um novo posto de carregamento
exports.createChargingStation = (req, res) => {
  const { location, capacity, status, potencia = '1,4kW' } = req.body;
  db.run(
    `INSERT INTO charging_stations (location, capacity, status, potencia) VALUES (?, ?, ?, ?)`,
    [location, capacity, status, potencia],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};

// Atualizar posto de carregamento
exports.updateChargingStation = (req, res) => {
  const { id } = req.params;
  const { location, capacity, status, potencia } = req.body;

  db.run(
    `UPDATE charging_stations SET location = ?, capacity = ?, status = ?, potencia = ? WHERE id = ?`,
    [location, capacity, status, potencia, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Posto de carregamento atualizado com sucesso' });
    }
  );
};

// Deletar posto de carregamento
exports.deleteChargingStation = (req, res) => {
  const { id } = req.params;

  db.run(`DELETE FROM charging_stations WHERE id = ?`, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Posto de carregamento deletado com sucesso' });
  });
};
