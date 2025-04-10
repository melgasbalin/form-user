import { Module } from '@nestjs/common';
import { FormModule } from './modules/form/form.module';

@Module({
  imports: [FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
