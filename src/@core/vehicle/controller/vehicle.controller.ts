import { Inject, Injectable } from '@nestjs/common';
import { ApplicationResult } from '../../application/applicationResult/application-result';
import { ApplicationResultEventsMessages } from '../../application/applicationResult/application-result-events';
import { ResultStatus } from '../../application/result/result-status';
import { IVehiclesController } from './ivehicles-controller';
import { IVehiclesService } from '../ivehicle.service';
import { CreateVehicleDto } from '../entitites/create-vehicle.dto';
import { UpdateVehicleDto } from '../entitites/update-vehicle';
import { SellVehicleDto } from '../entitites/sell-vehicle';
import { Result } from '@prisma/client/runtime/library';
import { VehicleEntity } from '../entitites/vehicle';

@Injectable()
export class VehiclesController implements IVehiclesController {
  constructor(
    @Inject(IVehiclesService)
    private vehiclesService: IVehiclesService,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    const createdProduct = await this.vehiclesService.create(createVehicleDto);
    if (createdProduct.status === ResultStatus.ERROR) {
      return new ApplicationResult(
        ApplicationResultEventsMessages.ERROR,
        'Not able to create the vehicle',
      );
    }
    return new ApplicationResult(
      ApplicationResultEventsMessages.SUCCESS_CREATED,
      createdProduct as unknown as string,
    );
  }

  async findAll() {
    return await this.vehiclesService.findAll();
  }

  async findAllAsc(): Promise<Result<VehicleEntity[], string, any>> {
    const vehicles = await this.vehiclesService.findAll();
    if (
      vehicles.status === ResultStatus.SUCCESS &&
      Array.isArray(vehicles.data)
    ) {
      const sortedVehicles = vehicles.data.sort((a, b) => {
        if (a.preco < b.preco) return -1;
        if (a.preco > b.preco) return 1;
        return 0;
      });
      return { status: ResultStatus.SUCCESS, data: sortedVehicles };
    }
    return {
      status: ResultStatus.ERROR,
      message: 'Failed to retrieve vehicles',
    };
  }

  async findAllDesc(): Promise<Result<VehicleEntity[], string, any>> {
    const vehicles = await this.vehiclesService.findAll();
    if (
      vehicles.status === ResultStatus.SUCCESS &&
      Array.isArray(vehicles.data)
    ) {
      const sortedVehicles = vehicles.data.sort((a, b) => {
        if (a.preco < b.preco) return 1;
        if (a.preco > b.preco) return -1;
        return 0;
      });
      return { status: ResultStatus.SUCCESS, data: sortedVehicles };
    }
    return {
      status: ResultStatus.ERROR,
      message: 'Failed to retrieve vehicles',
    };
  }

  async findOne(category: string) {
    return await this.vehiclesService.findOne(category);
  }

  async update(id: string, updateProductDto: UpdateVehicleDto) {
    return await this.vehiclesService.update(id, updateProductDto);
  }

  async sellVehicle(id: string, sellVehicleDto: SellVehicleDto) {
    return await this.vehiclesService.update(id, sellVehicleDto);
  }

  async remove(id: string) {
    return await this.vehiclesService.remove(id);
  }
}
