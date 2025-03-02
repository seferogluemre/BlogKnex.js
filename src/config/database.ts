import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config();

const db = knex({
    client: "pg",
    connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
    },
})

export default db;