const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./greenenergy.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

db.serialize(() => {
  // Tabela de usuários
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL
  )`);

  // Tabela de carros
  db.run(`CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    ownerId INTEGER,
    FOREIGN KEY (ownerId) REFERENCES users(id)
  )`);

  // Tabela de postos de carregamento
  db.run(`CREATE TABLE IF NOT EXISTS charging_stations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    status TEXT NOT NULL
  )`);
});

module.exports = db;
