import app from './app.js';
import { conncetDB } from './db.js';
conncetDB();
app.listen(3000)
console.log(`[Express] Servidor escuchando en http://localhost:3000`);

