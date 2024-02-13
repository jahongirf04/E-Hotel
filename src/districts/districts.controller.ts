import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { District } from './entities/district.entity';

@ApiTags('Tumanlar')
@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @ApiOperation({ summary: 'Create district' })
  @ApiResponse({ type: District })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtsService.create(createDistrictDto);
  }

  @ApiOperation({ summary: 'Get all districts' })
  @ApiResponse({ type: District })
  @Get()
  findAll() {
    return this.districtsService.findAll();
  }

  @ApiOperation({ summary: 'Get One district' })
  @ApiResponse({ type: District })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update district' })
  @ApiResponse({ type: District })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtsService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: 'Delete district' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtsService.remove(+id);
  }
}
