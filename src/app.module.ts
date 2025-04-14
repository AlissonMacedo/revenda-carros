import { Module } from '@nestjs/common';
import { DatabaseModule } from './external/driven/infra/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { VehiclesModule } from './@core/vehicle/vehicle.module';

@Module({
  imports: [VehiclesModule, DatabaseModule, ConfigModule.forRoot()],
})
export class AppModule {}
