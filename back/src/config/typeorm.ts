import {Datasource, DataSourceOptions} from "typeorm";
import {config as dotEnvConfig} from "dotenv";
import { registerAs } from "@nestjs/config";

dotEnvConfig({path: '.env.development'})

const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_NAME,
    pasword: process.env.DBPASSWORD,
    autoLoadEntities: true,
    sinchronize: true,
    loggin: true,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new Datasource(config as DataSourceOptions)