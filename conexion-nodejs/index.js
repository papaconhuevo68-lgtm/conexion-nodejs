const { pool, verificarConexion } = require('./database');

async function main() {
  const conectado = await verificarConexion();

  if (conectado) {
    try {
      // Prueba extra: leer los productos de la tabla
      const { rows } = await pool.query('SELECT * FROM productos ORDER BY id');
      console.log(`   Productos en la tabla: ${rows.length}`);
      rows.forEach((p) => console.log(`   - ${p.id} | ${p.nombre} | S/ ${p.precio}`));
    } catch (error) {
      console.error('Error al consultar la tabla productos:', error.message);
    }
  }

  await pool.end();
}

main();
