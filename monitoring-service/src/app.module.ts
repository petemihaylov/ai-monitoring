import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { LogsModule } from './logs/logs.module';
@Module({
  imports: [LogsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'logs', method: RequestMethod.GET });
  }
}
