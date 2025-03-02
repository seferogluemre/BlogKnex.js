import dotenv from 'dotenv'

dotenv.config();

export default {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: './src/migrations'
    }
  },
};
