import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotEnvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';

dotEnvConfig({ path: '.env.development' });

const config = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
