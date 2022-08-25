import { DataSource } from 'typeorm';
import 'dotenv/config';

const env: NodeJS.ProcessEnv = process.env;

const mongoDataSource: DataSource = new DataSource({
    type: "mongodb",
    url: `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo-crud-db/?retryWrites=true&w=majority`,
    database: `${process.env.MONGO_INITDB_DATABASE}`,
    entities: ["src/**/*.entity{.ts,.js}"]
    // type: "mongodb",
    // url: `${env.MONGO_URL}`,
    // database: `${env.MONGO_DB_NAME}`,
    // entities: ["src/**/*.entity{.ts,.js}"]
})

const mariaDataSource: DataSource = new DataSource({
    type: "mariadb"
})

export {
    mongoDataSource,
    mariaDataSource
}