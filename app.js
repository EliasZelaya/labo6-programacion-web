const express = require('express');
const userRoute = require('./src/routes/user.route');
const path = require('path');
const app = express();

// Establecemos Pug como motor de plantillas
app.set('view engine', 'pug');
// Especificamos la carpeta donde se encuentran las vistas
app.set('views', path.join(__dirname, 'src/views'));
// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));
// Usamos las rutas de usuario
app.use(userRoute);
// Configuración del puerto
const PORT = 3000;
// Iniciamos el servidor
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
