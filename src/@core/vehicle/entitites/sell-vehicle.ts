import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';
import { VehicleEntity } from './vehicle';
import { ApiProperty } from '@nestjs/swagger';

export class SellVehicleDto extends VehicleEntity {
  @ApiProperty({ example: 'false' })
  declare vendido: boolean;

  @ApiProperty({ example: '39163907835' })
  declare cpfComprador: string;

  @ApiProperty({ example: '2025-04-14T00:00:00.000Z' })
  declare dataVenda: Date;
}
