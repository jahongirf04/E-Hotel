import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './entities/admin.entity';
import { UserSelfGuard } from '../guards/user-self.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@ApiTags('Adminlar')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @ApiOperation({ summary: 'Create admin' })
  @ApiResponse({ type: Admin })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all admins' })
  @ApiResponse({ type: Admin })
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get One Admin' })
  @ApiResponse({ type: Admin })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }

  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update admin' })
  @ApiResponse({ type: Admin })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete admin' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }
}
