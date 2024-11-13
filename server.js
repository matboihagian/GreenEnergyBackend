const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const carsRoutes = require('./routes/carsRoutes');
const chargingStationsRoutes = require('./routes/chargingStationsRoutes'); // Importa as rotas de postos de carregamento

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas de carros
app.use('/api/cars', carsRoutes);

// Rotas de postos de carregamento
app.use('/api/charging-stations', chargingStationsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
