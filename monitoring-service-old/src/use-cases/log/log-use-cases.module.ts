import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { LogFactoryService } from './log-factory.service';
import { LogUseCases } from './log.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [LogFactoryService, LogUseCases],
  exports: [LogFactoryService, LogUseCases],
})
export class LogUseCasesModule {}
