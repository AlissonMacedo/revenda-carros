import { Result } from '../application/result/result';
import { UpdateVehicleDto } from './entitites/update-vehicle';
import { VehicleEntity } from './entitites/vehicle';
import { CreateVehicleDto } from './entitites/create-vehicle.dto';

export abstract class IVehiclesService {
  public abstract create(
    product: CreateVehicleDto,
  ): Promise<Result<VehicleEntity>>;
  public abstract update(
    id: string,
    category: UpdateVehicleDto,
  ): Promise<Result<VehicleEntity>>;
  public abstract findOne(category: string): Promise<Result<VehicleEntity>>;
  public abstract findAll(): Promise<Result<VehicleEntity[]>>;
  public abstract remove(id: string): Promise<void>;
}
