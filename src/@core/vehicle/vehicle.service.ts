import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './entitites/create-vehicle.dto';
import { UpdateVehicleDto } from './entitites/update-vehicle';
import { IVehicleRepository } from './repositories/ivehicle.repository';
import { IVehiclesService } from './ivehicle.service';
import { ResultError } from '../application/result/result-error';
import { ResultSuccess } from '../application/result/result-success';

@Injectable()
export class VehiclesService implements IVehiclesService {
  constructor(
    @Inject(IVehicleRepository)
    private vehiclesRepository: IVehicleRepository,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    const result = await this.vehiclesRepository.insert(createVehicleDto);
    if (!result) {
      return new ResultError('Not able to create the vehicle');
    }
    return new ResultSuccess(result);
  }

  async findAll() {
    const result = await this.vehiclesRepository.findAll();
    if (!result) {
      return new ResultError('Vehicle not exist');
    }
    return new ResultSuccess(result);
  }

  async findOne(id: string) {
    const result = await this.vehiclesRepository.findById(id);
    if (!result) {
      return new ResultError('Vehicle not exist');
    }
    return new ResultSuccess(result);
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const result = await this.vehiclesRepository.update(id, updateVehicleDto);
    if (!result) {
      return new ResultError('Not able to update the vehicle');
    }
    return new ResultSuccess(result);
  }

  async remove(id: string) {
    return await this.vehiclesRepository.delete(id);
  }
}
