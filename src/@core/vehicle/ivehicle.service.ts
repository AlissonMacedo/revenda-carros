import { Result } from '../application/result/result';
import { UpdateVehicleDto } from './entitites/update-vehicle';
import { VehicleEntity } from './entitites/vehicle';
import { CreateVehicleDto } from './entitites/create-vehicle.dto';

export abstract class IVehiclesService {
  public abstract create(
    vehicle: CreateVehicleDto,
  ): Promise<Result<VehicleEntity>>;
  public abstract update(
    id: string,
    vehicle: UpdateVehicleDto,
  ): Promise<Result<VehicleEntity>>;
  public abstract findOne(vehicle: string): Promise<Result<VehicleEntity>>;
  public abstract findAll(): Promise<Result<VehicleEntity[]>>;
  public abstract remove(id: string): Promise<void>;
}
