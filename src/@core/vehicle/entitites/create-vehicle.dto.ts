import { ApiProperty } from '@nestjs/swagger';
import { VehicleEntity } from './vehicle';
import { Decimal } from '@prisma/client/runtime/library';

export class CreateVehicleDto extends VehicleEntity {
  @ApiProperty({ example: 'Chevrolet' })
  declare marca: string;

  @ApiProperty({ example: 'Corsa' })
  declare modelo: string;

  @ApiProperty({ example: '2022' })
  declare ano: number;

  @ApiProperty({ example: 'Branco' })
  declare cor: string;

  @ApiProperty({ example: '22000' })
  declare preco: Decimal;

  @ApiProperty({ example: 'false' })
  declare vendido: boolean;
}
