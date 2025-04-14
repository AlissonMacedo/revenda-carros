import { Module } from '@nestjs/common';
import { IVehicleRepository } from './repositories/ivehicle.repository';
import { PrismaService } from '../../external/driven/infra/database/prisma.service';
import { PrismaVehiclesRepository } from './repositories/prisma-vehicles-repository';
import { VehiclesService } from './vehicle.service';
import { VehiclesApi } from '../../external/driver/vehicles.api';
import { IVehiclesService } from './ivehicle.service';
import { VehiclesController } from './controller/vehicle.controller';
import { IVehiclesController } from './controller/ivehicles-controller';

@Module({
  controllers: [VehiclesApi],
  providers: [
    PrismaVehiclesRepository,
    {
      provide: IVehicleRepository,
      useClass: PrismaVehiclesRepository,
    },
    VehiclesService,
    {
      provide: IVehiclesService,
      useClass: VehiclesService,
    },
    VehiclesController,
    {
      provide: IVehiclesController,
      useClass: VehiclesController,
    },
    PrismaService,
  ],
})
export class VehiclesModule {}
