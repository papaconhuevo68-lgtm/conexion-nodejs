# Conexión Node.js + PostgreSQL

Proyecto Node.js que se conecta a PostgreSQL (`tienda_db`) usando `pg` (node-postgres) y verifica
la conexión, imprimiendo el resultado en consola.

## Estructura
```
conexion-nodejs/
├── sql/script.sql     # Creación de BD, tabla productos e inserts
├── database.js        # Configuración de la conexión + función verificarConexion()
├── index.js           # Ejecuta la verificación
├── package.json
├── .env.example       # Plantilla de credenciales
└── README.md
```

## Requisitos previos
- Node.js 18 o superior
- PostgreSQL instalado y en ejecución (puerto 5432)

## Cómo ejecutar

### 1. Crear la base de datos
Con `psql`:
```bash
psql -U postgres -f sql/script.sql
```
O con pgAdmin: crea la base `tienda_db`, abre el Query Tool sobre ella y ejecuta el script desde
`CREATE TABLE` en adelante (omite `CREATE DATABASE` y `\c`).

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar credenciales
Copia `.env.example` como `.env` y ajusta tus datos:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=tienda_db
```

### 4. Ejecutar
```bash
npm start
```

## Resultado esperado
Conexión exitosa:
```
✅ Conexión a PostgreSQL exitosa
   Productos en la tabla: 6
   - 1 | Polo básico blanco | S/ 35.90
   ...
```
Conexión fallida:
```
❌ Error al conectar con PostgreSQL: <mensaje del error>
```

## Problemas comunes
| Error | Causa probable |
|-------|----------------|
| `password authentication failed` | Usuario/contraseña incorrectos en `.env` |
| `ECONNREFUSED` | PostgreSQL apagado o puerto distinto |
| `database "tienda_db" does not exist` | No se ejecutó el script SQL |
