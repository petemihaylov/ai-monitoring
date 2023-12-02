import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ModelFactoryService } from './model-factory.service';
import { ModelUseCases } from './model.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ModelFactoryService, ModelUseCases],
  exports: [ModelFactoryService, ModelUseCases],
})
export class ModelUseCasesModule {}
