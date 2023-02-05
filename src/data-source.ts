import { DataSource } from "typeorm"
import "dotenv/config"


const AppDataSource = new DataSource(
    process.env.NODE_ENV === "build" ?
    {
        useUTC: false,
        type: "postgres",
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: false,
        synchronize: true,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
    } 
    :
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    }
    
)

export default AppDataSource
