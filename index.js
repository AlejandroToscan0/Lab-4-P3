const express = require('express');
const app = express();
const PORT = process.env.PORT;

//endpoint de respuesta
app.get('/', (req, res) => {
    res.send('Integración continua funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});