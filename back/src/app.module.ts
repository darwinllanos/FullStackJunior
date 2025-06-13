import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import TypeOrmConfig from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [TypeOrmConfig]
      }
    ),
    TypeOrmModule.forRootAsync(
      {
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ( 
          configService.get('typeorm')
        )
      }
    ),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
