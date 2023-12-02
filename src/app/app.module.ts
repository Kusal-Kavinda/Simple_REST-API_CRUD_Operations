import { Module } from '@nestjs/common';
import { ItemModule } from './modules/item/app.module';

@Module({
  imports: [ItemModule],
})
export class AppModule {}
