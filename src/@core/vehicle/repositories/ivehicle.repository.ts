import { CreateVehicleDto } from '../entitites/create-vehicle.dto';
import { UpdateVehicleDto } from '../entitites/update-vehicle';
import { VehicleEntity } from '../entitites/vehicle';

export abstract class IVehicleRepository {
  public abstract insert(category: CreateVehicleDto): Promise<VehicleEntity>;

  public abstract update(
    id: string,
    category: UpdateVehicleDto,
  ): Promise<VehicleEntity>;
  public abstract findById(id: string): Promise<VehicleEntity>;
  public abstract findAll(): Promise<VehicleEntity[]>;
  public abstract delete(id: string): Promise<void>;
}
