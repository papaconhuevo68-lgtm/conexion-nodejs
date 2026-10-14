require('dotenv').config();
const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'tienda_db',
  connectionTimeoutMillis: 5000,
});

// Verifica la conexión a la base de datos e imprime el resultado en consola
async function verificarConexion() {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    console.log('Conexión a PostgreSQL exitosa');
    return true;
  } catch (error) {
    console.error('Error al conectar con PostgreSQL:', error.message);
    return false;
  }
}

module.exports = { pool, verificarConexion };
