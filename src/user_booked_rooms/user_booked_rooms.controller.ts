import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBookedRoomsService } from './user_booked_rooms.service';
import { CreateUserBookedRoomDto } from './dto/create-user_booked_room.dto';
import { UpdateUserBookedRoomDto } from './dto/update-user_booked_room.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserBookedRoom } from './entities/user_booked_room.entity';

@ApiTags('Foydalanuvchi bron qilgan xonalar')
@Controller('user-booked-rooms')
export class UserBookedRoomsController {
  constructor(
    private readonly userBookedRoomsService: UserBookedRoomsService,
  ) {}

  @ApiOperation({ summary: 'Create user booked room' })
  @ApiResponse({ type: UserBookedRoom })
  @Post()
  create(@Body() createUserBookedRoomDto: CreateUserBookedRoomDto) {
    return this.userBookedRoomsService.create(createUserBookedRoomDto);
  }

  @ApiOperation({ summary: 'Get all users booked rooms' })
  @ApiResponse({ type: UserBookedRoom })
  @Get()
  findAll() {
    return this.userBookedRoomsService.findAll();
  }

  @ApiOperation({ summary: 'Get One User Booked Room' })
  @ApiResponse({ type: UserBookedRoom })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBookedRoomsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update user booked room' })
  @ApiResponse({ type: UserBookedRoom })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserBookedRoomDto: UpdateUserBookedRoomDto,
  ) {
    return this.userBookedRoomsService.update(+id, updateUserBookedRoomDto);
  }

  @ApiOperation({ summary: 'Delete user booked room' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBookedRoomsService.remove(+id);
  }
}
