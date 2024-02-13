import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Gym } from './entities/gym.entity';

@ApiTags('Gymlar')
@Controller('gyms')
export class GymsController {
  constructor(private readonly gymsService: GymsService) {}

  @ApiOperation({ summary: 'Create gym' })
  @ApiResponse({ type: Gym })
  @Post()
  create(@Body() createGymDto: CreateGymDto) {
    return this.gymsService.create(createGymDto);
  }

  @ApiOperation({ summary: 'Get all gyms' })
  @ApiResponse({ type: Gym })
  @Get()
  findAll() {
    return this.gymsService.findAll();
  }

  @ApiOperation({ summary: 'Get One gym' })
  @ApiResponse({ type: Gym })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update gym' })
  @ApiResponse({ type: Gym })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGymDto: UpdateGymDto) {
    return this.gymsService.update(+id, updateGymDto);
  }

  @ApiOperation({ summary: 'Delete gym' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymsService.remove(+id);
  }
}
