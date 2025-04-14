import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { PrismaVehiclesRepository } from '../../../../@core/vehicle/repositories/prisma-vehicles-repository';
import { IVehicleRepository } from '../../../../@core/vehicle/repositories/ivehicle.repository';

@Module({
  exports: [IVehicleRepository],
  imports: [ConfigModule],
  providers: [
    PrismaService,
    {
      provide: IVehicleRepository,
      useClass: PrismaVehiclesRepository,
    },
  ],
})
export class DatabaseModule {}
