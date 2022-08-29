import { DataSource } from 'typeorm';
import 'dotenv/config';

const env: NodeJS.ProcessEnv = process.env;
// const mongoUrl: string =`mongodb+srv://${env.MONGO_INITDB_ROOT_USERNAME}:${env.MONGO_INITDB_ROOT_PASSWORD}@mongo-crud/${env.MONGO_INITDB_DATABASE}?retryWrites=true&w=majority`

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
            entities: ["src/**/*.entity{.ts,.js}"]
        });

        mariaDataSource = new DataSource({
            type: "mariadb",
            host: `${env.PRD_MARIA_DOCKER_CONTAINER}`,
            username: `${env.PRD_MARIA_USERNAME}`,
            password: `${env.PRD_MARIA_PASSWORD}`,
            database: `${env.PRD_MARIA_DB_NAME}`,
            entities: ["src/**/user.entity{.ts,.js}"]   
        });
        break;
    default:
        mongoDataSource = new DataSource({
            type: "mongodb",
            url: `${env.DEV_MONGO_URL}`,
            database: `${env.DEV_MONGO_DB_NAME}`,
            entities: ["src/**/post.entity{.ts,.js}"]      
        });
        
        mariaDataSource = new DataSource({
            type: "mariadb",
            host: `${env.DEV_MARIA_HOST}`,
            port: Number(env.DEV_MARIA_PORT),
            username: `${env.DEV_MARIA_USERNAME}`,
            password: `${env.DEV_MARIA_PASSWORD}`,
            database: `${env.DEV_MARIA_DB_NAME}`,
            entities: ["src/**/user.entity{.ts,.js}"]      
        });
    }

export {
    mongoDataSource,
    mariaDataSource
}