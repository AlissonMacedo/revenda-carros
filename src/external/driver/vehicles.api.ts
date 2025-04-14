import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateVehicleDto } from '../../@core/vehicle/entitites/create-vehicle.dto';
import { UpdateVehicleDto } from '../../@core/vehicle/entitites/update-vehicle';
import { VehiclesController } from '../../@core/vehicle/controller/vehicle.controller';
import { SellVehicleDto } from 'src/@core/vehicle/entitites/sell-vehicle';

@ApiTags('vehicle')
@Controller('Vehicles')
export class VehiclesApi {
  constructor(private readonly vehiclesController: VehiclesController) {}

  @Post()
  @ApiOperation({ summary: 'create a new vehicle' })
  async create(@Body() createVehicleCDto: CreateVehicleDto) {
    return await this.vehiclesController.create(createVehicleCDto);
  }

  @Get('/list')
  @ApiOperation({ summary: 'return all vehicles created' })
  async findAll() {
    return await this.vehiclesController.findAll();
  }

  @Get('/listAsc')
  @ApiOperation({ summary: 'return all vehicles created Ascendente' })
  async findAllAsc() {
    return await this.vehiclesController.findAllAsc();
  }

  @Get('/listDesc')
  @ApiOperation({ summary: 'return all vehicles created Descendente' })
  async findAllDesc() {
    return await this.vehiclesController.findAllDesc();
  }

  @Get(':id')
  @ApiOperation({ summary: 'return one vehicle data' })
  async findOne(@Param('id') id: string) {
    return await this.vehiclesController.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update the data' })
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return await this.vehiclesController.update(id, updateVehicleDto);
  }

  @Patch(':id/sell')
  @ApiOperation({ summary: 'sell the vehicle' })
  async sellVehicle(
    @Param('id') id: string,
    @Body() sellVehicleDto: SellVehicleDto,
  ) {
    return await this.vehiclesController.sellVehicle(id, sellVehicleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete the vehicle' })
  async remove(@Param('id') id: string) {
    return await this.vehiclesController.remove(id);
  }
}
