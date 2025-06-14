import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import TypeOrmConfig from './config/typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [TypeOrmConfig],
      }
    ),
    TypeOrmModule.forRootAsync(
      {
        inject: [ConfigService],
        useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
          const config = configService.get<TypeOrmModuleOptions>('typeorm');
          if(!config){
            throw new Error('No fue encontrada la configuracion de Type Orm')
          }
          return config;
        }
      }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
