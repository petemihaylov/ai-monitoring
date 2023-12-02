import { Module } from '@nestjs/common';
import { LogController, ModelController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { LogUseCasesModule } from './use-cases/log/log-use-cases.module';
import { ModelUseCasesModule } from './use-cases/model/model-use-cases.module';

@Module({
  imports: [DataServicesModule, LogUseCasesModule, ModelUseCasesModule],
  controllers: [LogController, ModelController],
  providers: [],
})
export class AppModule {}
