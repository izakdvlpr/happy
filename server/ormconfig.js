require('dotenv').config();

module.exports = {
  type: 'postgres',
  url: process.env.DB_URL,
  entities: ['src/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
}