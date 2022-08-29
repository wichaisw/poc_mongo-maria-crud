import { DataSource } from 'typeorm';
import 'dotenv/config';

const env: NodeJS.ProcessEnv = process.env;

let mongoDataSource: DataSource;
let mariaDataSource: DataSource;

switch(env.NODE_ENV) {
    case 'production': 
        mongoDataSource = new DataSource({
            type: "mongodb",
            host: env.PRD_MONGO_DOCKER_CONTAINER,
            username: env.PRD_MONGO_USERNAME,
            password: env.PRD_MONGO_PASSWORD,
            port: Number(env.PRD_MONGO_PORT),
            database: `${env.PRD_MONGO_DB_NAME}`,
            entities: ["src/domains/**/*.entity{.ts,.js}"]
        });

        mariaDataSource = new DataSource({
            type: "mariadb",
            host: `${env.PRD_MARIA_DOCKER_CONTAINER}`,
            username: `${env.PRD_MARIA_USERNAME}`,
            password: `${env.PRD_MARIA_PASSWORD}`,
            database: `${env.PRD_MARIA_DB_NAME}`,
            entities: ["src/domains/**/user.entity{.ts,.js}"]   
        });
        break;
    default:
        mongoDataSource = new DataSource({
            type: "mongodb",
            url: `${env.DEV_MONGO_URL}`,
            database: `${env.DEV_MONGO_DB_NAME}`,
            entities: ["src/domains/**/post.entity{.ts,.js}"]      
        });
        
        mariaDataSource = new DataSource({
            type: "mariadb",
            host: `${env.DEV_MARIA_HOST}`,
            port: Number(env.DEV_MARIA_PORT),
            username: `${env.DEV_MARIA_USERNAME}`,
            password: `${env.DEV_MARIA_PASSWORD}`,
            database: `${env.DEV_MARIA_DB_NAME}`,
            entities: ["src/domains/**/user.entity{.ts,.js}"]      
        });
    }

export {
    mongoDataSource,
    mariaDataSource
}