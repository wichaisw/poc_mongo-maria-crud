import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';
import { User } from '../user/user.entity';
dotenv.config();

const env: NodeJS.ProcessEnv = process.env;

const mongoDataSource: DataSource = new DataSource({
    type: "mongodb",
    url: `${env.MONGO_URL}`,
    database: `${env.MONGO_DB_NAME}`,
    entities: ["src/**/*.entity{.ts,.js}"]
})

const mariaDataSource: DataSource = new DataSource({
    type: "mariadb"
})

export {
    mongoDataSource,
    mariaDataSource
}