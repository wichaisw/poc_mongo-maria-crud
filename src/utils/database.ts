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
    username: `${env.MONGO_USERNAME}`,
    password: `${env.MONGO_PASSWORD}`,
    entities: [
        User, 
        "dist/**/*.entity{.ts,.js}",
        "src/**/*.entity{.ts,.js}",
        __dirname + '../**/*.entity{.js,.ts}',
        __dirname + '/**/*.entity{.js,.ts}'
    ]
})


export {
    mongoDataSource
}