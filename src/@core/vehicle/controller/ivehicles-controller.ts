import { ApplicationResult } from '../../application/applicationResult/application-result';
import { Result } from '../../application/result/result';
import { VehicleEntity } from '../entitites/vehicle';
import { CreateVehicleDto } from '../entitites/create-vehicle.dto';
import { UpdateVehicleDto } from '../entitites/update-vehicle';

export abstract class IVehiclesController {
  public abstract create(
    product: CreateVehicleDto,
  ): Promise<ApplicationResult<any>>;
  public abstract update(
    id: string,
    product: UpdateVehicleDto,
  ): Promise<Result<VehicleEntity>>;
  public abstract findOne(name: string): Promise<Result<VehicleEntity>>;
  public abstract findAll(): Promise<Result<VehicleEntity[]>>;
  public abstract remove(id: string): Promise<void>;
}
