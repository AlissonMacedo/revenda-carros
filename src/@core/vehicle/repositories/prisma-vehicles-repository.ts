import { Injectable } from '@nestjs/common';
import { IVehicleRepository } from './ivehicle.repository';
import { PrismaService } from '../../../external/driven/infra/database/prisma.service';
import { CreateVehicleDto } from '../entitites/create-vehicle.dto';
import { UpdateVehicleDto } from '../entitites/update-vehicle';
import { VehicleEntity } from '../entitites/vehicle';

@Injectable()
export class PrismaVehiclesRepository implements IVehicleRepository {
  constructor(private prisma: PrismaService) {}

  async insert(vehicle: CreateVehicleDto): Promise<VehicleEntity> {
    return await this.prisma.vehicle.create({
      data: vehicle,
    });
  }

  async update(id: string, category: UpdateVehicleDto): Promise<VehicleEntity> {
    return await this.prisma.vehicle.update({
      data: category,
      where: {
        id: id,
      },
    });
  }

  async findById(id: string): Promise<VehicleEntity> {
    return await this.prisma.vehicle.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  async findAll(): Promise<VehicleEntity[]> {
    return await this.prisma.vehicle.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.prisma.vehicle.delete({
      where: {
        id: id,
      },
    });
  }
}
