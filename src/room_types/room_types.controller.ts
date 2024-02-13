import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomTypesService } from './room_types.service';
import { CreateRoomTypeDto } from './dto/create-room_type.dto';
import { UpdateRoomTypeDto } from './dto/update-room_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoomType } from './entities/room_type.entity';

@ApiTags('Xona turlari')
@Controller('room-types')
export class RoomTypesController {
  constructor(private readonly roomTypesService: RoomTypesService) {}

  @ApiOperation({ summary: 'Create room type' })
  @ApiResponse({ type: RoomType })
  @Post()
  create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    return this.roomTypesService.create(createRoomTypeDto);
  }

  @ApiOperation({ summary: 'Get all room types' })
  @ApiResponse({ type: RoomType })
  @Get()
  findAll() {
    return this.roomTypesService.findAll();
  }

  @ApiOperation({ summary: 'Get One room type' })
  @ApiResponse({ type: RoomType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomTypesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update room type' })
  @ApiResponse({ type: RoomType })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoomTypeDto: UpdateRoomTypeDto,
  ) {
    return this.roomTypesService.update(+id, updateRoomTypeDto);
  }

  @ApiOperation({ summary: 'Delete room type' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomTypesService.remove(+id);
  }
}
