import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelRoomsService } from './hotel_rooms.service';
import { CreateHotelRoomDto } from './dto/create-hotel_room.dto';
import { UpdateHotelRoomDto } from './dto/update-hotel_room.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HotelRoom } from './entities/hotel_room.entity';

@ApiTags('Mehmonxona xonalari')
@Controller('hotel-rooms')
export class HotelRoomsController {
  constructor(private readonly hotelRoomsService: HotelRoomsService) {}

  @ApiOperation({ summary: 'Create hotel room' })
  @ApiResponse({ type: HotelRoom })
  @Post()
  create(@Body() createHotelRoomDto: CreateHotelRoomDto) {
    return this.hotelRoomsService.create(createHotelRoomDto);
  }

  @ApiOperation({ summary: 'Get all hotel rooms' })
  @ApiResponse({ type: HotelRoom })
  @Get()
  findAll() {
    return this.hotelRoomsService.findAll();
  }

  @ApiOperation({ summary: 'Get One Hotel Room' })
  @ApiResponse({ type: HotelRoom })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelRoomsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update hotel room' })
  @ApiResponse({ type: HotelRoom })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHotelRoomDto: UpdateHotelRoomDto,
  ) {
    return this.hotelRoomsService.update(+id, updateHotelRoomDto);
  }

  @ApiOperation({ summary: 'Delete hotel room' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelRoomsService.remove(+id);
  }
}
