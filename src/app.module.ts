import { Module } from '@nestjs/common';
import { FormModule } from './modules/form/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfiguration } from './config/env.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: EnvConfiguration().dbHost,
      port: EnvConfiguration().dbPort,
      database: EnvConfiguration().dbName,
      username: EnvConfiguration().dbUsername,
      password: EnvConfiguration().dbPassword,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FormModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
