import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Hotel } from './entities/hotel.entity';

@ApiTags('Mehmonxonalar')
@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @ApiOperation({ summary: 'Create hotel' })
  @ApiResponse({ type: Hotel })
  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @ApiOperation({ summary: 'Get all hotels' })
  @ApiResponse({ type: Hotel })
  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @ApiOperation({ summary: 'Get One Hotel' })
  @ApiResponse({ type: Hotel })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update hotel' })
  @ApiResponse({ type: Hotel })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(+id, updateHotelDto);
  }

  @ApiOperation({ summary: 'Delete hotel' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(+id);
  }
}
