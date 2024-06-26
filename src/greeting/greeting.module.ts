import { Module } from '@nestjs/common';

import { GreetingController } from './greeting.controller';
import { GreetingRouter } from './greeting.router';
import { GreetingService } from './greeting.service';

@Module({
  imports: [],
  controllers: [GreetingController],
  providers: [GreetingRouter, GreetingService],
  exports: [GreetingRouter],
})
export class GreetingModule {}
